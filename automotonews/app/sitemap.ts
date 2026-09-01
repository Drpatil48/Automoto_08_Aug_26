import type { MetadataRoute } from "next";
import {
  getArticlesForSitemap,
  getCategories,
  isCmsConfigured,
} from "@/lib/cms";
import { absoluteUrl } from "@/lib/seo";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();
  const categoryPaths = new Set([
    "/electric-vehicles-evs",
    "/car-news",
    "/sportsbikes",
    "/upcoming-cars",
    "/auto-technology",
    "/compare",
  ]);

  const legalPaths = new Set([
    "/about-us",
    "/privacy-policy",
    "/disclaimer",
    "/contact",
  ]);

  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
  ];

  for (const path of categoryPaths) {
    entries.push({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    });
  }

  for (const path of legalPaths) {
    entries.push({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    });
  }

  if (!isCmsConfigured()) {
    return entries;
  }

  try {
    const categories = await getCategories();
    for (const category of categories) {
      const catUrl = absoluteUrl(`/${category.slug}`);
      if (!entries.some((e) => e.url === catUrl)) {
        entries.push({
          url: catUrl,
          lastModified: now,
          changeFrequency: "daily",
          priority: 0.8,
        });
      }
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
