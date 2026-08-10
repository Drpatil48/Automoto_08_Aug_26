import { buildCategoryMeta } from "@/lib/category-style";
import type { Article, Author, Category, CategorySlug } from "@/lib/types";

const DEFAULT_AUTHOR: Author = {
  name: "AutomotoNews Desk",
  bio: "",
  avatarUrl: null,
  socialLinks: [],
};

type WpRendered = { rendered?: string; protected?: boolean };

type WpMedia = {
  source_url?: string;
  alt_text?: string;
  media_details?: {
    sizes?: Record<string, { source_url?: string }>;
  };
};

type WpUser = {
  name?: string;
  description?: string;
  avatar_urls?: Record<string, string>;
  url?: string;
};

type WpTerm = {
  id?: number;
  taxonomy?: string;
  slug?: string;
  name?: string;
  description?: string;
  count?: number;
};

export type WpPost = {
  id?: number;
  slug?: string;
  date?: string;
  modified?: string;
  link?: string;
  title?: WpRendered;
  excerpt?: WpRendered;
  content?: WpRendered;
  featured_media?: number;
  _embedded?: {
    author?: WpUser[];
    "wp:featuredmedia"?: WpMedia[];
    "wp:term"?: WpTerm[][];
  };
};

export type WpCategory = {
  id?: number;
  slug?: string;
  name?: string;
  description?: string;
  count?: number;
};

function decodeEntities(value: string): string {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCharCode(Number(code)),
    )
    .replace(/&#x([0-9a-f]+);/gi, (_, hex: string) =>
      String.fromCharCode(parseInt(hex, 16)),
    );
}

export function stripHtml(value: string): string {
  return decodeEntities(value.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

/** Remove executable markup while keeping editorial HTML structure. */
export function sanitizeWpHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, "")
    .replace(/\son\w+="[^"]*"/gi, "")
    .replace(/\son\w+='[^']*'/gi, "")
    .replace(/javascript:/gi, "");
}

export function estimateReadTimeMinutes(htmlOrText: string): number {
  const words = stripHtml(htmlOrText).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function pickFeaturedImage(media: WpMedia | undefined): {
  url: string | null;
  alt: string;
} {
  if (!media) return { url: null, alt: "" };
  const mediumLarge = media.media_details?.sizes?.medium_large?.source_url;
  const large = media.media_details?.sizes?.large?.source_url;
  const url = mediumLarge || large || media.source_url || null;
  return {
    url,
    alt: media.alt_text?.trim() || "",
  };
}

function normalizeAuthor(user: WpUser | undefined): Author {
  if (!user?.name?.trim()) return DEFAULT_AUTHOR;

  const avatar =
    user.avatar_urls?.["96"] ||
    user.avatar_urls?.["48"] ||
    user.avatar_urls?.["24"] ||
    null;

  const socialLinks =
    user.url && /^https?:\/\//i.test(user.url)
      ? [{ label: "Website", href: user.url }]
      : [];

  return {
    name: user.name.trim(),
    bio: stripHtml(user.description ?? ""),
    avatarUrl: avatar,
    socialLinks,
  };
}

function termsByTaxonomy(post: WpPost, taxonomy: string): WpTerm[] {
  const groups = post._embedded?.["wp:term"] ?? [];
  return groups.flat().filter((term) => term?.taxonomy === taxonomy);
}

export function normalizeCategory(raw: WpCategory): Category | null {
  const slug = raw.slug?.trim();
  if (!slug) return null;

  return buildCategoryMeta(slug, {
    id: raw.id,
    name: raw.name?.trim() || slug,
    description: stripHtml(raw.description ?? ""),
    count: raw.count,
  });
}

export function normalizeArticle(post: WpPost): Article | null {
  const slug = post.slug?.trim();
  if (!slug) return null;

  const title = stripHtml(post.title?.rendered ?? "");
  if (!title) return null;

  const categories = termsByTaxonomy(post, "category");
  const primary = categories[0];
  const categorySlug = primary?.slug?.trim() || "daily-update";
  const categoryName = primary?.name?.trim() || categorySlug;

  const tags = termsByTaxonomy(post, "post_tag")
    .map((term) => term.name?.trim() || term.slug?.trim() || "")
    .filter(Boolean);

  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  const image = pickFeaturedImage(media);

  const excerptHtml = post.excerpt?.rendered ?? "";
  const bodyHtml = sanitizeWpHtml(post.content?.rendered ?? "");
  const excerpt = stripHtml(excerptHtml);

  return {
    id: post.id,
    title,
    slug,
    category: categorySlug,
    categoryName,
    tags,
    coverImage: image.url,
    coverImageAlt: image.alt || title,
    excerpt,
    body: bodyHtml,
    author: normalizeAuthor(post._embedded?.author?.[0]),
    publishDate: post.date ?? new Date(0).toISOString(),
    updatedDate: post.modified ?? post.date ?? new Date(0).toISOString(),
    readTimeMinutes: estimateReadTimeMinutes(bodyHtml || excerpt),
    sourceUrl: post.link,
  };
}

export function getCategoryMeta(slug: CategorySlug): Category {
  return buildCategoryMeta(slug);
}
