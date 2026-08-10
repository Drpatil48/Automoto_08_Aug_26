export type CategoryTone =
  | "ev"
  | "bike"
  | "car"
  | "guide"
  | "daily"
  | "neutral";

/** Known live WordPress category slugs plus PLAN aliases. */
export type CategorySlug = string;

export type Category = {
  id?: number;
  slug: CategorySlug;
  name: string;
  description: string;
  href: string;
  tone: CategoryTone;
  count?: number;
};

export type Author = {
  name: string;
  bio: string;
  avatarUrl: string | null;
  socialLinks: ReadonlyArray<{ label: string; href: string }>;
};

export type Article = {
  id?: number;
  title: string;
  slug: string;
  category: CategorySlug;
  categoryName: string;
  tags: string[];
  coverImage: string | null;
  coverImageAlt: string;
  excerpt: string;
  body: string;
  author: Author;
  publishDate: string;
  updatedDate: string;
  readTimeMinutes: number;
  /** Original WordPress permalink — useful for Phase 8 redirects. */
  sourceUrl?: string;
};

export type VehicleSpec = {
  id: string;
  brand: string;
  model: string;
  variant: string;
  priceRangeINR: string;
  mileageKmpl?: number;
  rangeKm?: number;
  engineOrBattery: string;
  seatingCapacity: number;
  images: string[];
  fuelType: "electric" | "petrol" | "diesel" | "hybrid";
};

export function articleHref(article: Pick<Article, "category" | "slug">): string {
  return `/${article.category}/${article.slug}`;
}

export function categoryHref(slug: CategorySlug): string {
  return `/${slug}`;
}
