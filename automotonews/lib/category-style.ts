import type { Article, Category, CategorySlug, CategoryTone } from "@/lib/types";
import { categoryHref } from "@/lib/types";

const TONE_BY_SLUG: Record<string, CategoryTone> = {
  "electric-vehicles-evs": "ev",
  "hybrid-vehicles": "ev",
  "sports-bikes": "bike",
  sportsbikes: "bike",
  "bikes-news": "bike",
  "car-news": "car",
  "upcoming-cars": "car",
  "sports-car": "car",
  "buying-guide": "guide",
  "auto-technology": "guide",
  "daily-update": "daily",
  "off-roading": "neutral",
};

export function toneForCategorySlug(slug: string): CategoryTone {
  return TONE_BY_SLUG[slug] ?? "neutral";
}

/** Static styling/copy used when WP category description is empty. */
export const CATEGORY_FALLBACKS: Record<
  string,
  Pick<Category, "name" | "description" | "tone">
> = {
  "electric-vehicles-evs": {
    name: "EV Spotlight",
    description: "Charging, battery health, range, and the latest EV launches.",
    tone: "ev",
  },
  sportsbikes: {
    name: "Bikes & Performance",
    description: "Sports bikes, mileage champions, and new two-wheeler launches.",
    tone: "bike",
  },
  "sports-bikes": {
    name: "Bikes & Performance",
    description: "Sports bikes, mileage champions, and new two-wheeler launches.",
    tone: "bike",
  },
  "car-news": {
    name: "Car News",
    description: "Launches, facelifts, and market updates for Indian cars.",
    tone: "car",
  },
  "buying-guide": {
    name: "Latest Guides",
    description: "Actionable recommendations by budget and use case.",
    tone: "guide",
  },
  "daily-update": {
    name: "Daily Update",
    description: "Quick daily roundups for busy readers.",
    tone: "daily",
  },
  "upcoming-cars": {
    name: "Upcoming Cars",
    description: "Expected launches, timelines, and early specifications.",
    tone: "car",
  },
};

/** Local SVG used when WordPress has no featured image. */
export function categoryCoverPlaceholder(slug: string): string {
  switch (toneForCategorySlug(slug)) {
    case "ev":
      return "/placeholders/cover-ev.svg";
    case "bike":
      return "/placeholders/cover-bike.svg";
    case "car":
      return "/placeholders/cover-car.svg";
    case "guide":
      return "/placeholders/cover-guide.svg";
    default:
      return "/placeholders/cover-daily.svg";
  }
}

export function articleCoverSrc(
  article: Pick<Article, "coverImage" | "category">,
): string {
  return article.coverImage || categoryCoverPlaceholder(article.category);
}

export function buildCategoryMeta(
  slug: CategorySlug,
  overrides?: Partial<Category>,
): Category {
  const fallback = CATEGORY_FALLBACKS[slug];
  return {
    slug,
    name: overrides?.name ?? fallback?.name ?? slug,
    description:
      overrides?.description ??
      fallback?.description ??
      "Automotive news and updates from AutomotoNews.in.",
    href: overrides?.href ?? categoryHref(slug),
    tone: overrides?.tone ?? fallback?.tone ?? toneForCategorySlug(slug),
    id: overrides?.id,
    count: overrides?.count,
  };
}
