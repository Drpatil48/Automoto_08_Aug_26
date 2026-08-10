import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article/ArticleCard";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { CmsStateMessage } from "@/components/ui/CmsStateMessage";
import { Badge } from "@/components/ui/Badge";
import {
  CmsConfigError,
  CmsRequestError,
  getArticlesByCategorySlug,
  getCategoryBySlug,
  isCmsConfigured,
} from "@/lib/cms";
import { buildCategoryMeta } from "@/lib/category-style";
import type { Article, Category } from "@/lib/types";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;

  if (!isCmsConfigured()) {
    return { title: categorySlug };
  }

  try {
    const category = await getCategoryBySlug(categorySlug);
    if (!category) return { title: "Category not found" };
    return {
      title: category.name,
      description:
        category.description ||
        `${category.name} news and updates from AutomotoNews.in`,
    };
  } catch {
    return { title: categorySlug };
  }
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const query = await searchParams;
  const page = Math.max(1, Number(query.page ?? "1") || 1);

  if (!isCmsConfigured()) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <CmsStateMessage
          tone="info"
          title="WordPress API not configured"
          message="Set WP_API_URL in .env.local (see .env.example), then restart the Next.js server to load live category content."
        />
      </div>
    );
  }

  let category: Category | null = null;
  let articles: Article[] = [];
  let total = 0;
  let totalPages = 0;
  let loadError: string | null = null;

  try {
    category = await getCategoryBySlug(categorySlug);
    if (category) {
      const result = await getArticlesByCategorySlug(category.slug, {
        page,
        perPage: 12,
      });
      articles = result.articles;
      total = result.total;
      totalPages = result.totalPages;
    }
  } catch (error) {
    if (error instanceof CmsConfigError) {
      return (
        <div className="mx-auto max-w-6xl px-4 py-10">
          <CmsStateMessage
            tone="info"
            title="WordPress API not configured"
            message={error.message}
          />
        </div>
      );
    }

    loadError =
      error instanceof CmsRequestError
        ? error.message
        : "Unexpected error while loading this category.";
  }

  if (loadError) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-10">
        <CmsStateMessage
          tone="error"
          title="Could not load category"
          message={loadError}
        />
      </div>
    );
  }

  if (!category) notFound();

  const styled = buildCategoryMeta(category.slug, category);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: styled.name }]}
      />

      <header className="mb-8">
        <Badge tone={styled.tone}>{styled.name}</Badge>
        <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          {styled.name}
        </h1>
        {styled.description ? (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            {styled.description}
          </p>
        ) : null}
        <p className="mt-2 text-sm text-muted">{total} articles</p>
      </header>

      {articles.length === 0 ? (
        <CmsStateMessage
          tone="empty"
          title="No articles yet"
          message="This category exists, but no published posts were returned from WordPress."
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}

      {totalPages > 1 ? (
        <nav
          className="mt-10 flex items-center justify-between gap-4"
          aria-label="Category pagination"
        >
          {page > 1 ? (
            <Link
              href={`/${category.slug}?page=${page - 1}`}
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
              href={`/${category.slug}?page=${page + 1}`}
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
  );
}
