/**
 * Phase 8 redirect helpers.
 *
 * Static rules are evidence-based (see docs/PHASE8_REDIRECTS.md).
 * Article flat-permalink maps are generated from the live WordPress REST API —
 * never invent per-article destinations.
 */

type RouteHas =
  | { type: "header" | "cookie" | "query"; key: string; value?: string }
  | { type: "host"; value: string };

/** Permanent 301 redirect entry compatible with `next.config` redirects(). */
export type AppRedirect = {
  source: string;
  destination: string;
  statusCode: 301;
  has?: RouteHas[];
};

/** App routes and structural segments that must never be treated as post slugs. */
export const RESERVED_SINGLE_SEGMENTS = new Set([
  "",
  "compare",
  "search",
  "about-us",
  "about",
  "privacy-policy",
  "disclaimer",
  "contact",
  "contact-us",
  "category",
  "favicon.ico",
  "robots.txt",
  "sitemap.xml",
  "ads.txt",
]);

/**
 * Live WP category slugs sampled 2026-08-10 (docs/PHASE8_REDIRECTS.md).
 * Used by proxy to skip archive paths without inventing aliases.
 */
export const KNOWN_CATEGORY_SLUGS = new Set([
  "auto-technology",
  "bikes-news",
  "car-news",
  "daily-update",
  "electric-vehicles-evs",
  "hybrid-vehicles",
  "off-roading",
  "sportsbikes",
  "sports-car",
  "upcoming-cars",
]);

/**
 * Static / structural 301s with live WP evidence.
 * More specific `/category/:category/:slug` rules come before `/category/:slug`.
 * Trailing-slash variants are included so `skipTrailingSlashRedirect` stays one-hop.
 */
export const STATIC_REDIRECTS: AppRedirect[] = [
  // WP page slug `contact-us` → Next route `/contact`
  {
    source: "/contact-us",
    destination: "/contact",
    statusCode: 301,
  },
  {
    source: "/contact-us/",
    destination: "/contact",
    statusCode: 301,
  },
  // Live WP already 301s `/about` → `/about-us`
  {
    source: "/about",
    destination: "/about-us",
    statusCode: 301,
  },
  {
    source: "/about/",
    destination: "/about-us",
    statusCode: 301,
  },
  // Legacy `/category/{cat}/{post}` → preferred Next article path (one hop)
  {
    source: "/category/:category/:slug",
    destination: "/:category/:slug",
    statusCode: 301,
  },
  {
    source: "/category/:category/:slug/",
    destination: "/:category/:slug",
    statusCode: 301,
  },
  // Legacy `/category/{cat}` → flat category archive (same as live WP)
  {
    source: "/category/:slug",
    destination: "/:slug",
    statusCode: 301,
  },
  {
    source: "/category/:slug/",
    destination: "/:slug",
    statusCode: 301,
  },
];

/**
 * Must run AFTER article flat-permalink maps so `/{post}/` goes straight to
 * `/{category}/{post}` instead of stripping the slash first (chain).
 *
 * Intentionally omits a catch-all `/:slug/` rule — that would steal unknown
 * flat post URLs and force a second hop. Single-segment trailing slashes for
 * known categories/static routes are listed explicitly below / generated.
 */
export const TRAILING_SLASH_NORMALIZERS: AppRedirect[] = [
  {
    source: "/:category/:slug/",
    destination: "/:category/:slug",
    statusCode: 301,
  },
  // Preferred static app routes (trailing slash → canonical, one hop)
  { source: "/contact/", destination: "/contact", statusCode: 301 },
  { source: "/about-us/", destination: "/about-us", statusCode: 301 },
  { source: "/privacy-policy/", destination: "/privacy-policy", statusCode: 301 },
  { source: "/disclaimer/", destination: "/disclaimer", statusCode: 301 },
  { source: "/compare/", destination: "/compare", statusCode: 301 },
  { source: "/search/", destination: "/search", statusCode: 301 },
];

function categoryTrailingSlashRedirects(): AppRedirect[] {
  return [...KNOWN_CATEGORY_SLUGS].flatMap((slug) => [
    {
      source: `/${slug}/`,
      destination: `/${slug}`,
      statusCode: 301 as const,
    },
  ]);
}

type WpCategoryLite = {
  id?: number;
  slug?: string;
};

type WpPostLite = {
  id?: number;
  slug?: string;
  categories?: number[];
};

function getWpApiBase(): string | null {
  const raw = process.env.WP_API_URL?.trim();
  if (!raw) return null;
  return raw.replace(/\/$/, "");
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    // Build-time / proxy lookups should see fresh publish state.
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`WP request failed (${response.status}) for ${url}`);
  }
  return (await response.json()) as T;
}

/**
 * Resolve a published WP post by numeric ID (shortlink `?p=`).
 * Returns the preferred Next article path or null.
 */
export async function resolveArticleRedirectPathById(
  postId: number,
): Promise<string | null> {
  const base = getWpApiBase();
  if (!base || !Number.isFinite(postId) || postId <= 0) return null;

  const post = await fetchJson<WpPostLite & { slug?: string }>(
    `${base}/posts/${postId}?_fields=id,slug,categories&status=publish`,
  );
  if (!post?.slug?.trim()) return null;

  const categoryId = post.categories?.[0];
  let categorySlug = "daily-update";
  if (typeof categoryId === "number") {
    const categories = await fetchJson<WpCategoryLite[]>(
      `${base}/categories?include=${categoryId}&per_page=1&_fields=id,slug`,
    );
    const resolved = categories[0]?.slug?.trim();
    if (resolved) categorySlug = resolved;
  }

  return `/${categorySlug}/${post.slug.trim()}`;
}

/**
 * Resolve a single post slug via WP REST (runtime proxy fallback).
 * Returns the preferred Next article path or null.
 */
export async function resolveArticleRedirectPath(
  postSlug: string,
): Promise<string | null> {
  const base = getWpApiBase();
  if (!base) return null;

  const slug = postSlug.trim();
  if (!slug) return null;

  const posts = await fetchJson<WpPostLite[]>(
    `${base}/posts?slug=${encodeURIComponent(slug)}&per_page=1&status=publish&_fields=id,slug,categories`,
  );
  const post = posts[0];
  if (!post?.slug) return null;

  const categoryId = post.categories?.[0];
  let categorySlug = "daily-update";
  if (typeof categoryId === "number") {
    const categories = await fetchJson<WpCategoryLite[]>(
      `${base}/categories?include=${categoryId}&per_page=1&_fields=id,slug`,
    );
    const resolved = categories[0]?.slug?.trim();
    if (resolved) categorySlug = resolved;
  }

  return `/${categorySlug}/${post.slug}`;
}

function pushFlatSlugRedirects(
  redirects: AppRedirect[],
  postSlug: string,
  destination: string,
): void {
  redirects.push(
    {
      source: `/${postSlug}`,
      destination,
      statusCode: 301,
    },
    {
      source: `/${postSlug}/`,
      destination,
      statusCode: 301,
    },
  );
}

/**
 * Build article + shortlink redirects from the WordPress REST API.
 * Returns [] when WP_API_URL is unset or the API is unreachable.
 */
export async function buildWpArticleRedirects(): Promise<AppRedirect[]> {
  const base = getWpApiBase();
  if (!base) {
    console.warn(
      "[phase8-redirects] WP_API_URL unset — skipping article redirect generation.",
    );
    return [];
  }

  try {
    const categories = await fetchJson<WpCategoryLite[]>(
      `${base}/categories?per_page=100&hide_empty=false&_fields=id,slug`,
    );
    const idToSlug = new Map<number, string>();
    for (const category of categories) {
      if (typeof category.id === "number" && category.slug?.trim()) {
        idToSlug.set(category.id, category.slug.trim());
      }
    }

    const redirects: AppRedirect[] = [];
    const seenSlugs = new Set<string>();
    let page = 1;
    let totalPages = 1;

    while (page <= totalPages && page <= 50) {
      const url = `${base}/posts?per_page=100&page=${page}&status=publish&_fields=id,slug,categories`;
      const response = await fetch(url, {
        headers: { Accept: "application/json" },
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error(`WP posts page ${page} failed (${response.status})`);
      }

      const totalPagesHeader = response.headers.get("X-WP-TotalPages");
      if (totalPagesHeader) {
        totalPages = Math.max(1, Number(totalPagesHeader) || 1);
      }

      const posts = (await response.json()) as WpPostLite[];
      for (const post of posts) {
        const postSlug = post.slug?.trim();
        if (!postSlug || seenSlugs.has(postSlug)) continue;
        if (RESERVED_SINGLE_SEGMENTS.has(postSlug)) continue;
        if (KNOWN_CATEGORY_SLUGS.has(postSlug)) continue;

        seenSlugs.add(postSlug);
        const categoryId = post.categories?.[0];
        const categorySlug =
          (categoryId != null ? idToSlug.get(categoryId) : undefined) ||
          "daily-update";
        const destination = `/${categorySlug}/${postSlug}`;

        pushFlatSlugRedirects(redirects, postSlug, destination);

        // `?p={id}` shortlinks are handled in proxy.ts so the query can be
        // stripped in one hop (next.config redirects preserve query strings).
      }

      if (!posts.length) break;
      page += 1;
    }

    console.info(
      `[phase8-redirects] Generated ${redirects.length} WP-derived redirect entries for ${seenSlugs.size} posts.`,
    );
    return redirects;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.warn(
      `[phase8-redirects] Could not generate article redirects from WP (${message}). Static redirects only; runtime proxy may still resolve flat post URLs.`,
    );
    return [];
  }
}

/** All redirects for `next.config` (order matters — avoid chains). */
export async function getAllRedirects(): Promise<AppRedirect[]> {
  const articleRedirects = await buildWpArticleRedirects();
  return [
    ...STATIC_REDIRECTS,
    ...articleRedirects,
    ...categoryTrailingSlashRedirects(),
    ...TRAILING_SLASH_NORMALIZERS,
  ];
}

export function isReservedOrCategorySegment(segment: string): boolean {
  return (
    RESERVED_SINGLE_SEGMENTS.has(segment) || KNOWN_CATEGORY_SLUGS.has(segment)
  );
}
