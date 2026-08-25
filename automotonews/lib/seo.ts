import type { Metadata } from "next";
import {
  SITE_CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { articleHref, categoryHref, type Article, type Category } from "@/lib/types";

const FALLBACK_SITE_URL = "https://automotonews.in";

export type BreadcrumbJsonLdItem = {
  name: string;
  path?: string;
};

/** Production site origin for canonicals, sitemap, and JSON-LD. */
export function getSiteUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    process.env.SITE_URL?.trim() ||
    FALLBACK_SITE_URL;
  return raw.replace(/\/$/, "");
}

export function absoluteUrl(path = "/"): string {
  const normalized =
    path === "" || path === "/"
      ? "/"
      : path.startsWith("/")
        ? path
        : `/${path}`;
  return new URL(normalized, `${getSiteUrl()}/`).toString();
}

export function defaultOgImageUrl(): string {
  return absoluteUrl("/logo.svg");
}

function truncateMeta(value: string, max = 160): string {
  const cleaned = value.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return `${cleaned.slice(0, max - 1).trimEnd()}…`;
}

export function buildPageMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noIndex = false,
}: {
  title: string;
  description?: string | null;
  path: string;
  image?: string | null;
  type?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const desc = truncateMeta(description?.trim() || SITE_DESCRIPTION);
  const ogImage = image?.trim() || defaultOgImageUrl();

  return {
    title,
    description: desc,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description: desc,
      url,
      siteName: SITE_NAME,
      locale: "mr_IN",
      type,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: desc,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function buildHomeMetadata(): Metadata {
  const title = `${SITE_NAME} — ${SITE_TAGLINE}`;
  return {
    ...buildPageMetadata({
      title,
      description: SITE_DESCRIPTION,
      path: "/",
    }),
    title: {
      absolute: title,
    },
  };
}

export function buildCategoryMetadata(
  category: Category,
  page = 1,
): Metadata {
  const path =
    page > 1
      ? `${categoryHref(category.slug)}?page=${page}`
      : categoryHref(category.slug);

  const description =
    category.description?.trim() ||
    `${category.name} — automotive news and updates from ${SITE_NAME}.`;

  return buildPageMetadata({
    title: category.name,
    description,
    path,
  });
}

export function buildArticleMetadata(article: Article): Metadata {
  const base = buildPageMetadata({
    title: article.title,
    description: article.excerpt || SITE_DESCRIPTION,
    path: articleHref(article),
    image: article.coverImage,
    type: "article",
  });

  const published = toIsoDate(article.publishDate);
  const modified = toIsoDate(article.updatedDate) ?? published;

  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: published,
      modifiedTime: modified,
      authors: article.author.name ? [article.author.name] : undefined,
      section: article.categoryName || article.category,
      tags: article.tags,
    },
  };
}

export function buildStaticPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description?: string | null;
  path: string;
}): Metadata {
  return buildPageMetadata({
    title,
    description,
    path,
  });
}

export function buildSearchMetadata(query?: string): Metadata {
  const hasQuery = Boolean(query?.trim());
  return buildPageMetadata({
    title: hasQuery ? `Search: ${query!.trim()}` : "Search",
    description: hasQuery
      ? `Search results for “${query!.trim()}” on ${SITE_NAME}.`
      : `Search ${SITE_NAME} articles by title, category, tags, and excerpt.`,
    path: hasQuery ? `/search?q=${encodeURIComponent(query!.trim())}` : "/search",
    // Search result pages stay noindex (robots.txt also disallows /search).
    noIndex: true,
  });
}

function toIsoDate(value: string): string | undefined {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return date.toISOString();
}

const NEWS_CATEGORY_SLUGS = new Set([
  "daily-update",
  "car-news",
  "electric-vehicles-evs",
  "upcoming-cars",
  "sportsbikes",
  "sports-bikes",
  "bikes-news",
  "hybrid-vehicles",
  "sports-car",
  "off-roading",
]);

export function articleSchemaType(
  article: Article,
): "NewsArticle" | "Article" {
  return NEWS_CATEGORY_SLUGS.has(article.category) ? "NewsArticle" : "Article";
}

export function buildOrganizationJsonLd(): Record<string, unknown> {
  const sameAs = SOCIAL_LINKS.map((item) => item.href).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: getSiteUrl(),
    logo: {
      "@type": "ImageObject",
      url: defaultOgImageUrl(),
    },
    description: SITE_DESCRIPTION,
    contactPoint: {
      "@type": "ContactPoint",
      email: SITE_CONTACT_EMAIL,
      contactType: "customer service",
      availableLanguage: ["mr", "en"],
    },
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };
}

export function buildWebSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: getSiteUrl(),
    description: SITE_DESCRIPTION,
    inLanguage: "mr",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${getSiteUrl()}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbJsonLd(
  items: BreadcrumbJsonLdItem[],
): Record<string, unknown> | null {
  const list = items.filter((item) => item.name.trim());
  if (list.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: list.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: absoluteUrl(item.path) } : {}),
    })),
  };
}

export function buildArticleJsonLd(
  article: Article,
): Record<string, unknown> | null {
  const authorName = article.author.name?.trim();
  if (!authorName) return null;

  const published = toIsoDate(article.publishDate);
  if (!published) return null;

  const modified = toIsoDate(article.updatedDate) ?? published;
  const schemaType = articleSchemaType(article);
  const url = absoluteUrl(articleHref(article));

  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    headline: article.title,
    description: article.excerpt || undefined,
    datePublished: published,
    dateModified: modified,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Person",
      name: authorName,
      ...(article.author.bio ? { description: article.author.bio } : {}),
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: getSiteUrl(),
      logo: {
        "@type": "ImageObject",
        url: defaultOgImageUrl(),
      },
    },
    ...(article.coverImage
      ? {
          image: [article.coverImage],
        }
      : {}),
    ...(article.tags.length > 0 ? { keywords: article.tags.join(", ") } : {}),
    articleSection: article.categoryName || article.category,
    inLanguage: "mr",
    isAccessibleForFree: true,
    url,
  };
}
