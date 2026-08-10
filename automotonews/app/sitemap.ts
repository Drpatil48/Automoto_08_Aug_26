import type { MetadataRoute } from "next";
import { FOOTER_NAV, PRIMARY_NAV } from "@/lib/constants";
import {
  getArticlesForSitemap,
  getCategories,
  isCmsConfigured,
} from "@/lib/cms";
import { absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  // Intentionally omit /search — robots.txt disallows it and search pages are noindex.
  const staticPaths = new Set<string>([
    "/",
    "/compare",
    "/about-us",
    "/privacy-policy",
    "/disclaimer",
    "/contact",
  ]);

  for (const item of [...PRIMARY_NAV, ...FOOTER_NAV]) {
    if (item.href !== "/") staticPaths.add(item.href);
  }

  const entries: MetadataRoute.Sitemap = [...staticPaths].map((path) => ({
    url: absoluteUrl(path),
    lastModified: now,
    changeFrequency: path === "/" ? "hourly" : "weekly",
    priority: path === "/" ? 1 : 0.6,
  }));

  if (!isCmsConfigured()) {
    return entries;
  }

  try {
    const categories = await getCategories();
    for (const category of categories) {
      entries.push({
        url: absoluteUrl(`/${category.slug}`),
        lastModified: now,
        changeFrequency: "daily",
        priority: 0.7,
      });
    }

    const articles = await getArticlesForSitemap();
    for (const article of articles) {
      const modified = new Date(article.updatedDate);
      entries.push({
        url: absoluteUrl(`/${article.category}/${article.slug}`),
        lastModified: Number.isNaN(modified.getTime()) ? now : modified,
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  } catch {
    // Return static entries if WordPress is temporarily unavailable.
  }

  return entries;
}
