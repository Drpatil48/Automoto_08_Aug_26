import {
  normalizeArticle,
  normalizeCategory,
  normalizePage,
  type WpCategory,
  type WpPage,
  type WpPost,
} from "@/lib/normalize";
import { filterAndRankArticles } from "@/lib/search";
import type { Article, Category, CategorySlug, CmsPage } from "@/lib/types";

export class CmsConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CmsConfigError";
  }
}

export class CmsRequestError extends Error {
  status?: number;

  constructor(message: string, status?: number) {
    super(message);
    this.name = "CmsRequestError";
    this.status = status;
  }
}

const DEFAULT_REVALIDATE_SECONDS = 300;
/** Categories change rarely — cache longer than posts. */
const CATEGORY_REVALIDATE_SECONDS = 600;

function getApiBase(): string | null {
  const raw = process.env.WP_API_URL?.trim();
  if (!raw) return null;
  return raw.replace(/\/$/, "");
}

export function isCmsConfigured(): boolean {
  return Boolean(getApiBase());
}

export function requireCmsConfig(): string {
  const base = getApiBase();
  if (!base) {
    throw new CmsConfigError(
      "WP_API_URL is not set. Add it to .env.local (see .env.example).",
    );
  }
  return base;
}

type FetchOptions = {
  searchParams?: Record<string, string | number | boolean | undefined>;
  revalidate?: number | false;
};

async function wpFetch<T>(
  path: string,
  { searchParams, revalidate = DEFAULT_REVALIDATE_SECONDS }: FetchOptions = {},
): Promise<{ data: T; total: number | null; totalPages: number | null }> {
  const base = requireCmsConfig();
  const url = new URL(`${base}${path.startsWith("/") ? path : `/${path}`}`);

  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value === undefined || value === "") continue;
      url.searchParams.set(
        key,
        typeof value === "boolean" ? (value ? "true" : "false") : String(value),
      );
    }
  }

  let response: Response;
  try {
    response = await fetch(url.toString(), {
      headers: {
        Accept: "application/json",
      },
      ...(revalidate === false
        ? { cache: "no-store" as const }
        : { next: { revalidate } }),
    });
  } catch {
    throw new CmsRequestError(
      "Unable to reach the WordPress REST API. Check WP_API_URL and network access.",
    );
  }

  if (!response.ok) {
    throw new CmsRequestError(
      `WordPress API request failed (${response.status}) for ${url.pathname}.`,
      response.status,
    );
  }

  const totalHeader = response.headers.get("X-WP-Total");
  const totalPagesHeader = response.headers.get("X-WP-TotalPages");
  const data = (await response.json()) as T;

  return {
    data,
    total: totalHeader ? Number(totalHeader) : null,
    totalPages: totalPagesHeader ? Number(totalPagesHeader) : null,
  };
}

export type ArticleListResult = {
  articles: Article[];
  total: number;
  totalPages: number;
  page: number;
};

export async function getCategories(): Promise<Category[]> {
  const { data } = await wpFetch<WpCategory[]>("/categories", {
    searchParams: {
      per_page: 100,
      hide_empty: true,
    },
    revalidate: CATEGORY_REVALIDATE_SECONDS,
  });

  return data
    .map(normalizeCategory)
    .filter((item): item is Category => item != null)
    .sort((a, b) => a.name.localeCompare(b.name));
}

export async function getCategoryBySlug(
  slug: CategorySlug,
): Promise<Category | null> {
  const { data } = await wpFetch<WpCategory[]>("/categories", {
    searchParams: {
      slug,
      per_page: 1,
    },
    revalidate: CATEGORY_REVALIDATE_SECONDS,
  });

  const category = data[0] ? normalizeCategory(data[0]) : null;
  return category;
}

export async function getLatestArticles(limit = 10): Promise<Article[]> {
  const { data } = await wpFetch<WpPost[]>("/posts", {
    searchParams: {
      per_page: limit,
      _embed: 1,
      status: "publish",
    },
  });

  return data
    .map(normalizeArticle)
    .filter((item): item is Article => item != null);
}

export async function getArticlesByCategorySlug(
  slug: CategorySlug,
  {
    page = 1,
    perPage = 12,
  }: {
    page?: number;
    perPage?: number;
  } = {},
): Promise<ArticleListResult> {
  const category = await getCategoryBySlug(slug);
  if (!category?.id) {
    return { articles: [], total: 0, totalPages: 0, page };
  }

  const { data, total, totalPages } = await wpFetch<WpPost[]>("/posts", {
    searchParams: {
      categories: category.id,
      page,
      per_page: perPage,
      _embed: 1,
      status: "publish",
    },
  });

  return {
    articles: data
      .map(normalizeArticle)
      .filter((item): item is Article => item != null),
    total: total ?? data.length,
    totalPages: totalPages ?? 1,
    page,
  };
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const { data } = await wpFetch<WpPost[]>("/posts", {
    searchParams: {
      slug,
      per_page: 1,
      _embed: 1,
      status: "publish",
    },
  });

  const post = data[0];
  return post ? normalizeArticle(post) : null;
}

export async function getRelatedArticles(
  article: Article,
  limit = 4,
): Promise<Article[]> {
  const { articles } = await getArticlesByCategorySlug(article.category, {
    perPage: limit + 1,
  });

  return articles.filter((item) => item.slug !== article.slug).slice(0, limit);
}

/** Map Next.js route slugs to WordPress page slugs when they differ. */
const PAGE_SLUG_ALIASES: Record<string, string[]> = {
  contact: ["contact", "contact-us"],
  "about-us": ["about-us", "about"],
  "privacy-policy": ["privacy-policy"],
  disclaimer: ["disclaimer"],
};

export async function getPageByRouteSlug(
  routeSlug: string,
): Promise<CmsPage | null> {
  const candidates = PAGE_SLUG_ALIASES[routeSlug] ?? [routeSlug];

  for (const slug of candidates) {
    const { data } = await wpFetch<WpPage[]>("/pages", {
      searchParams: {
        slug,
        per_page: 1,
        status: "publish",
      },
    });
    const page = data[0] ? normalizePage(data[0]) : null;
    if (page) return page;
  }

  return null;
}

export type SitemapArticleEntry = {
  category: string;
  slug: string;
  updatedDate: string;
};

/**
 * Lightweight post list for sitemap generation (no embeds).
 * Caps pages to keep build time and cache size reasonable.
 */
export async function getArticlesForSitemap(
  maxPages = 20,
): Promise<SitemapArticleEntry[]> {
  const perPage = 100;
  const entries: SitemapArticleEntry[] = [];
  const categories = await getCategories();
  const idToSlug = new Map(
    categories
      .filter((category) => typeof category.id === "number")
      .map((category) => [category.id as number, category.slug]),
  );

  for (let page = 1; page <= maxPages; page += 1) {
    const { data, totalPages } = await wpFetch<WpPost[]>("/posts", {
      searchParams: {
        page,
        per_page: perPage,
        status: "publish",
        _fields: "slug,modified,date,categories",
      },
    });

    for (const post of data) {
      const slug = post.slug?.trim();
      if (!slug) continue;
      const categoryId = post.categories?.[0];
      const category =
        (categoryId != null ? idToSlug.get(categoryId) : undefined) ||
        "daily-update";
      entries.push({
        category,
        slug,
        updatedDate: post.modified || post.date || new Date().toISOString(),
      });
    }

    if (!totalPages || page >= totalPages) break;
  }

  return entries;
}

/**
 * Lightweight article search via WordPress `search`, then local rank/filter
 * across title, tags, category, and excerpt.
 */
export async function searchArticles(
  query: string,
  {
    page = 1,
    perPage = 12,
  }: {
    page?: number;
    perPage?: number;
  } = {},
): Promise<ArticleListResult> {
  const trimmed = query.trim();
  if (!trimmed) {
    return { articles: [], total: 0, totalPages: 0, page };
  }

  // Fetch a slightly larger page so local ranking can prefer title/tag hits.
  const fetchSize = Math.min(Math.max(perPage * 2, 20), 50);
  const { data } = await wpFetch<WpPost[]>("/posts", {
    searchParams: {
      search: trimmed,
      per_page: fetchSize,
      page: 1,
      _embed: 1,
      status: "publish",
    },
    revalidate: 60,
  });

  const ranked = filterAndRankArticles(
    data.map(normalizeArticle).filter((item): item is Article => item != null),
    trimmed,
  );

  const total = ranked.length;
  const totalPages = Math.max(1, Math.ceil(total / perPage));
  const start = (page - 1) * perPage;

  return {
    articles: ranked.slice(start, start + perPage),
    total,
    totalPages,
    page,
  };
}

export function getCmsStatusMessage(): string | null {
  if (isCmsConfigured()) return null;
  return "WordPress CMS is not configured. Set WP_API_URL in .env.local to enable live content.";
}
