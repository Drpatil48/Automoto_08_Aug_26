import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { SearchPills } from "@/components/search/SearchPills";
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
  searchParams: Promise<{ q?: string; page?: string }>;
};

const SEARCH_PER_PAGE = 12;

export async function generateMetadata({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  return buildSearchMetadata(q);
}

async function loadResults(
  query: string,
  page: number,
): Promise<{
  articles: Article[];
  total: number;
  totalPages: number;
  error?: string;
  source: "cms" | "mock";
}> {
  if (!query) {
    return {
      articles: [],
      total: 0,
      totalPages: 0,
      source: isCmsConfigured() ? "cms" : "mock",
    };
  }

  if (!isCmsConfigured()) {
    const ranked = filterAndRankArticles(MOCK_ARTICLES, query);
    const totalPages = Math.max(1, Math.ceil(ranked.length / SEARCH_PER_PAGE));
    const start = (page - 1) * SEARCH_PER_PAGE;
    return {
      articles: ranked.slice(start, start + SEARCH_PER_PAGE),
      total: ranked.length,
      totalPages,
      source: "mock",
    };
  }

  try {
    const result = await searchArticles(query, {
      page,
      perPage: SEARCH_PER_PAGE,
    });
    return {
      articles: result.articles,
      total: result.total,
      totalPages: result.totalPages,
      source: "cms",
    };
  } catch (error) {
    const message =
      error instanceof CmsRequestError
        ? error.message
        : "Search is temporarily unavailable.";
    return {
      articles: [],
      total: 0,
      totalPages: 0,
      error: message,
      source: "cms",
    };
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q, page: pageParam } = await searchParams;
  const query = q?.trim() ?? "";
  const page = Math.max(1, Number(pageParam ?? "1") || 1);
  const { articles, total, totalPages, error, source } = await loadResults(
    query,
    page,
  );

  if (query && !error && page > 1 && page > totalPages) {
    notFound();
  }

  function searchHref(nextPage: number): string {
    const params = new URLSearchParams();
    params.set("q", query);
    if (nextPage > 1) params.set("page", String(nextPage));
    return `/search?${params.toString()}`;
  }

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

      <SearchPills currentQuery={query} />

      <div className="mt-8">
        {!query ? (
          <div className="space-y-6">
            <CmsStateMessage
              tone="empty"
              title="Start searching"
              message="Enter a keyword or select a trending topic above to search article titles, tags, categories, and excerpts."
            />
            <div className="rounded-xl border border-border bg-surface p-5">
              <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">
                Browse Popular Categories
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/electric-vehicles-evs"
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:border-accent hover:text-accent"
                >
                  ⚡ Electric Vehicles (EV)
                </Link>
                <Link
                  href="/car-news"
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:border-accent hover:text-accent"
                >
                  🚗 Car News
                </Link>
                <Link
                  href="/sportsbikes"
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:border-accent hover:text-accent"
                >
                  🏍️ Bikes & Performance
                </Link>
                <Link
                  href="/compare"
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium hover:border-accent hover:text-accent"
                >
                  📊 Compare Vehicles
                </Link>
              </div>
            </div>
          </div>
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
            {totalPages > 1 ? (
              <nav
                className="mt-10 flex items-center justify-between gap-4"
                aria-label="Search pagination"
              >
                {page > 1 ? (
                  <Link
                    href={searchHref(page - 1)}
                    className="inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-4 text-sm font-semibold hover:bg-background"
                  >
                    Previous
                  </Link>
                ) : (
                  <span />
                )}
                <p className="text-sm text-muted">
                  Page {page} of {totalPages}
                </p>
                {page < totalPages ? (
                  <Link
                    href={searchHref(page + 1)}
                    className="inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-4 text-sm font-semibold hover:bg-background"
                  >
                    Next
                  </Link>
                ) : (
                  <span />
                )}
              </nav>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
