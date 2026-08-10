import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CmsStateMessage } from "@/components/ui/CmsStateMessage";
import {
  CmsRequestError,
  isCmsConfigured,
  searchArticles,
} from "@/lib/cms";
import { MOCK_ARTICLES } from "@/lib/mock-data";
import { filterAndRankArticles } from "@/lib/search";
import {
  buildBreadcrumbJsonLd,
  buildSearchMetadata,
} from "@/lib/seo";
import type { Article } from "@/lib/types";

type SearchPageProps = {
  searchParams: Promise<{ q?: string }>;
};

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  return buildSearchMetadata(q);
}

async function loadResults(query: string): Promise<{
  articles: Article[];
  total: number;
  error?: string;
  source: "cms" | "mock";
}> {
  if (!query) {
    return { articles: [], total: 0, source: isCmsConfigured() ? "cms" : "mock" };
  }

  if (!isCmsConfigured()) {
    const articles = filterAndRankArticles(MOCK_ARTICLES, query);
    return { articles, total: articles.length, source: "mock" };
  }

  try {
    const result = await searchArticles(query, { perPage: 24 });
    return {
      articles: result.articles,
      total: result.total,
      source: "cms",
    };
  } catch (error) {
    const message =
      error instanceof CmsRequestError
        ? error.message
        : "Search is temporarily unavailable.";
    return { articles: [], total: 0, error: message, source: "cms" };
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const { articles, total, error, source } = await loadResults(query);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Search", path: "/search" },
        ])}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />
      <h1 className="text-3xl font-bold tracking-tight">Search</h1>
      <p className="mt-3 text-base leading-relaxed text-muted">
        Find articles by title, tags, category, or excerpt.
      </p>

      <form className="mt-6" role="search" action="/search" method="get">
        <label htmlFor="site-search" className="sr-only">
          Search articles
        </label>
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            id="site-search"
            name="q"
            type="search"
            defaultValue={query}
            placeholder="Search titles, tags, categories…"
            className="min-h-11 w-full flex-1 rounded-md border border-border bg-surface px-3 text-sm"
            autoComplete="off"
          />
          <button
            type="submit"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-dark"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-8">
        {!query ? (
          <CmsStateMessage
            tone="empty"
            title="Start searching"
            message="Enter a keyword to search article titles, tags, categories, and excerpts."
          />
        ) : error ? (
          <CmsStateMessage
            tone="error"
            title="Search failed"
            message={error}
          />
        ) : articles.length === 0 ? (
          <CmsStateMessage
            tone="empty"
            title={`No results for “${query}”`}
            message="Try another keyword, a category name, or a shorter phrase."
          />
        ) : (
          <div>
            <p className="mb-4 text-sm text-muted">
              {total} result{total === 1 ? "" : "s"} for “{query}”
              {source === "mock" ? " (sample content — configure WP_API_URL for live search)" : ""}
            </p>
            <ul className="grid gap-4">
              {articles.map((article) => (
                <li key={`${article.category}-${article.slug}`}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
