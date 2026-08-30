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
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <JsonLd
        data={buildBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Search", path: "/search" },
        ])}
      />
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "Search" }]}
      />
      <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">Search</h1>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
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
            className="min-h-12 w-full flex-1 rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-semibold text-zinc-100 placeholder-zinc-500 focus:border-red-600 focus:outline-none"
            autoComplete="off"
          />
          <button
            type="submit"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-red-600 px-6 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 transition-all hover:bg-red-500 hover:shadow-red-900/60"
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
            <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6">
              <h2 className="text-xs font-black uppercase tracking-wider text-red-500">
                Browse Popular Categories
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link
                  href="/electric-vehicles-evs"
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
                >
                  ⚡ EV Spotlight
                </Link>
                <Link
                  href="/car-news"
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
                >
                  🚗 Car News
                </Link>
                <Link
                  href="/sportsbikes"
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
                >
                  🏍️ Bikes & Performance
                </Link>
                <Link
                  href="/compare"
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-3.5 py-2 text-xs font-semibold text-zinc-200 hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
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
            <p className="mb-4 text-xs font-semibold text-zinc-400">
              {total} result{total === 1 ? "" : "s"} for “{query}”
            </p>
            <ul className="grid gap-4 sm:grid-cols-2">
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
                    className="inline-flex min-h-11 items-center rounded-xl border border-zinc-800 bg-zinc-900 px-5 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:bg-zinc-800 hover:text-white"
                  >
                    Previous
                  </Link>
                ) : (
                  <span />
                )}
                <p className="text-xs font-semibold text-zinc-400">
                  Page {page} of {totalPages}
                </p>
                {page < totalPages ? (
                  <Link
                    href={searchHref(page + 1)}
                    className="inline-flex min-h-11 items-center rounded-xl border border-zinc-800 bg-zinc-900 px-5 text-xs font-bold uppercase tracking-wider text-zinc-200 hover:bg-zinc-800 hover:text-white"
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
