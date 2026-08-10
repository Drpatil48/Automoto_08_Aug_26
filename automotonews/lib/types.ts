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

export type CmsPage = {
  id?: number;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  publishDate: string;
  updatedDate: string;
  sourceUrl?: string;
};

export type VehicleFuelType = "electric" | "petrol" | "diesel" | "hybrid";

export type VehicleSpec = {
  id: string;
  brand: string;
  model: string;
  variant: string;
  /** Null when a verified price range is unavailable. */
  priceRangeINR: string | null;
  /** Null when mileage is unavailable / not applicable. */
  mileageKmpl: number | null;
  /** Null when EV range is unavailable / not applicable. */
  rangeKm: number | null;
  /** Null when powertrain details are unavailable. */
  engineOrBattery: string | null;
  /** Null when seating capacity is unavailable. */
  seatingCapacity: number | null;
  images: string[];
  fuelType: VehicleFuelType | null;
};

export function articleHref(article: Pick<Article, "category" | "slug">): string {
  return `/${article.category}/${article.slug}`;
}

export function categoryHref(slug: CategorySlug): string {
  return `/${slug}`;
}
