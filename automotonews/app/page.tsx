import { ArticleCard } from "@/components/article/ArticleCard";
import { CategoryRail } from "@/components/home/CategoryRail";
import { ComparePreview } from "@/components/home/ComparePreview";
import { Hero } from "@/components/home/Hero";
import { NewsletterForm } from "@/components/home/NewsletterForm";
import { SectionHeading } from "@/components/home/SectionHeading";
import { TopStories } from "@/components/home/TopStories";
import { CmsStateMessage } from "@/components/ui/CmsStateMessage";
import {
  CmsRequestError,
  getArticlesByCategorySlug,
  getLatestArticles,
  isCmsConfigured,
} from "@/lib/cms";
import { buildCategoryMeta } from "@/lib/category-style";
import { MOCK_VEHICLES } from "@/lib/mock-data";
import type { Article, Category } from "@/lib/types";

async function loadCategoryRail(
  slug: string,
  fallbackName: string,
  fallbackDescription: string,
): Promise<{ category: Category; articles: Article[]; error?: string }> {
  try {
    const result = await getArticlesByCategorySlug(slug, { perPage: 4 });
    const category = buildCategoryMeta(slug, {
      name: result.articles[0]?.categoryName || fallbackName,
      description: fallbackDescription,
    });
    return { category, articles: result.articles };
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
          message="Phase 3 content integration is ready. Add WP_API_URL to .env.local (see .env.example), then restart the server to load live AutomotoNews content. Compare and newsletter UI remain available below."
        />
        <ComparePreview vehicles={MOCK_VEHICLES} />
        <NewsletterForm />
      </div>
    );
  }

  let latest: Article[] = [];
  let latestError: string | null = null;

  try {
    latest = await getLatestArticles(8);
  } catch (error) {
    latestError =
      error instanceof CmsRequestError
        ? error.message
        : "Failed to load latest articles from WordPress.";
  }

  const featured = latest[0] ?? null;
  const topStories = latest.slice(1, 5);

  const [evRail, bikeRail, guideRail] = await Promise.all([
    loadCategoryRail(
      "electric-vehicles-evs",
      "EV Spotlight",
      "Charging, battery health, range, and the latest EV launches.",
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

  return (
    <>
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

      <ComparePreview vehicles={MOCK_VEHICLES} />

      {guideRail.error ? (
        <div className="mx-auto max-w-6xl px-4 py-6">
          <CmsStateMessage
            tone="error"
            title="Guides unavailable"
            message={guideRail.error}
          />
        </div>
      ) : (
        <section
          id="guides"
          className="mx-auto max-w-6xl px-4 py-10"
          aria-labelledby="guides-heading"
        >
          <SectionHeading
            id="guides-heading"
            title={guideRail.category.name}
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
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
