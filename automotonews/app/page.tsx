import { ArticleCard } from "@/components/article/ArticleCard";
import { CategoryRail } from "@/components/home/CategoryRail";
import { ComparePreview } from "@/components/home/ComparePreview";
import { Hero } from "@/components/home/Hero";
import { NewsletterForm } from "@/components/home/NewsletterForm";
import { SectionHeading } from "@/components/home/SectionHeading";
import { TopStories } from "@/components/home/TopStories";
import { TrendingNow } from "@/components/home/TrendingNow";
import { JsonLd } from "@/components/seo/JsonLd";
import { CmsStateMessage } from "@/components/ui/CmsStateMessage";
import {
  CmsRequestError,
  getArticlesByCategorySlug,
  getLatestArticles,
  isCmsConfigured,
} from "@/lib/cms";
import { buildCategoryMeta } from "@/lib/category-style";
import { getAllVehicles } from "@/lib/vehicles";
import { buildBreadcrumbJsonLd, buildHomeMetadata } from "@/lib/seo";
import type { Article, Category } from "@/lib/types";

export const generateMetadata = buildHomeMetadata;

/** Align page ISR with CMS fetch revalidate (lib/cms.ts). */
export const revalidate = 300;

const VEHICLES = getAllVehicles();

async function loadCategoryRail(
  slug: string,
  fallbackName: string,
  fallbackDescription: string,
  excludedSlug?: string,
): Promise<{ category: Category; articles: Article[]; error?: string }> {
  try {
    const result = await getArticlesByCategorySlug(slug, { perPage: 12 });
    const category = buildCategoryMeta(slug, {
      // The rail represents the requested archive, not the first post's
      // primary category (posts can belong to more than one WP category).
      name: fallbackName,
      description: fallbackDescription,
    });
    return {
      category,
      // Do not surface cross-listed car/EV posts inside a dedicated rail.
      articles: result.articles
        .filter(
          (article) => article.category === slug && article.slug !== excludedSlug,
        )
        .slice(0, 4),
    };
  } catch (error) {
    const message =
      error instanceof CmsRequestError
        ? error.message
        : "Failed to load category articles.";
    return {
      category: buildCategoryMeta(slug, {
        name: fallbackName,
        description: fallbackDescription,
      }),
      articles: [],
      error: message,
    };
  }
}

export default async function HomePage() {
  if (!isCmsConfigured()) {
    return (
      <div className="mx-auto max-w-6xl space-y-8 px-4 py-10">
        <CmsStateMessage
          tone="info"
          title="WordPress API not configured"
          message="Set WP_API_URL in .env.local (see .env.example), then restart the server to load live AutomotoNews content. Compare and newsletter UI remain available below."
        />
        <ComparePreview vehicles={VEHICLES} />
        <NewsletterForm />
      </div>
    );
  }

  const [latestResult, evRail, carRail, bikeRail, guideRail] = await Promise.all([
    getLatestArticles(8).catch((error) => {
      const message =
        error instanceof CmsRequestError
          ? error.message
          : "Failed to load latest articles from WordPress.";
      return { error: message, articles: [] as Article[] };
    }),
    loadCategoryRail(
      "electric-vehicles-evs",
      "EV Spotlight",
      "Charging, battery health, range, and the latest EV launches.",
    ),
    loadCategoryRail(
      "car-news",
      "Car News",
      "Latest car launches, price updates, and reviews.",
    ),
    loadCategoryRail(
      "sportsbikes",
      "Bikes & Performance",
      "Sports bikes, mileage champions, and new two-wheeler launches.",
    ),
    loadCategoryRail(
      "auto-technology",
      "Latest Guides",
      "Tech explainers and practical automotive guidance.",
    ),
  ]);

  const latest = Array.isArray(latestResult) ? latestResult : latestResult.articles;
  const latestError = Array.isArray(latestResult) ? null : latestResult.error;
  const featured = latest[0] ?? null;
  const topStories = latest.slice(1, 5);

  return (
    <>
      <JsonLd
        data={buildBreadcrumbJsonLd([{ name: "Home", path: "/" }])}
      />
      {latestError ? (
        <div className="mx-auto max-w-6xl px-4 pt-8">
          <CmsStateMessage
            tone="error"
            title="Could not load homepage stories"
            message={latestError}
          />
        </div>
      ) : null}

      {featured ? <Hero article={featured} /> : null}

      {!latestError && !featured ? (
        <div className="mx-auto max-w-6xl px-4 py-10">
          <CmsStateMessage
            tone="empty"
            title="No published articles"
            message="WordPress returned no published posts for the homepage."
          />
        </div>
      ) : null}

      {topStories.length > 0 ? <TopStories articles={topStories} /> : null}

      {latest.length > 0 ? <TrendingNow articles={latest.slice(0, 4)} /> : null}

      {evRail.error ? (
        <div className="mx-auto max-w-6xl px-4 py-6">
          <CmsStateMessage
            tone="error"
            title="EV Spotlight unavailable"
            message={evRail.error}
          />
        </div>
      ) : (
        <CategoryRail
          sectionId="ev"
          category={evRail.category}
          articles={evRail.articles}
        />
      )}

      {carRail.articles.length > 0 ? (
        <CategoryRail
          sectionId="cars"
          category={carRail.category}
          articles={carRail.articles}
        />
      ) : null}

      {bikeRail.error ? (
        <div className="mx-auto max-w-6xl px-4 py-6">
          <CmsStateMessage
            tone="error"
            title="Bikes section unavailable"
            message={bikeRail.error}
          />
        </div>
      ) : (
        <CategoryRail
          sectionId="bikes"
          category={bikeRail.category}
          articles={bikeRail.articles}
        />
      )}

      <ComparePreview vehicles={VEHICLES} />

      {guideRail.error ? (
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <CmsStateMessage
            tone="error"
            title="Guides unavailable"
            message={guideRail.error}
          />
        </div>
      ) : (
        <section
          id="guides"
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10"
          aria-labelledby="guides-heading"
        >
          <SectionHeading
            id="guides-heading"
            title={`💡 ${guideRail.category.name}`}
            description={guideRail.category.description}
            href={guideRail.category.href}
          />
          {guideRail.articles.length === 0 ? (
            <CmsStateMessage
              tone="empty"
              title="No guide articles yet"
              message="No published posts were found for this section."
            />
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {guideRail.articles.map((article) => (
                <ArticleCard
                  key={article.slug}
                  article={article}
                  variant="guide"
                />
              ))}
            </div>
          )}
        </section>
      )}

      <NewsletterForm />
    </>
  );
}
