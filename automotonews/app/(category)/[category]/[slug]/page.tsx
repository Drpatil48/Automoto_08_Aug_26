import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArticleBodyWithAds } from "@/components/ads/ArticleBodyWithAds";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { AuthorBio } from "@/components/article/AuthorBio";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { CmsStateMessage } from "@/components/ui/CmsStateMessage";
import {
  CmsConfigError,
  CmsRequestError,
  getArticleBySlug,
  getRelatedArticles,
  isCmsConfigured,
} from "@/lib/cms";
import { buildCategoryMeta } from "@/lib/category-style";
import {
  buildArticleJsonLd,
  buildArticleMetadata,
  buildBreadcrumbJsonLd,
  buildPageMetadata,
} from "@/lib/seo";
import type { Article } from "@/lib/types";

type ArticlePageProps = {
  params: Promise<{ category: string; slug: string }>;
};

/** Align page ISR with CMS fetch revalidate (lib/cms.ts). */
export const revalidate = 300;

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { category: categorySlug, slug } = await params;

  if (!isCmsConfigured()) {
    return buildPageMetadata({
      title: slug,
      path: `/${categorySlug}/${slug}`,
    });
  }

  try {
    const article = await getArticleBySlug(slug);
    if (!article) {
      return buildPageMetadata({
        title: "Article not found",
        path: `/${categorySlug}/${slug}`,
        noIndex: true,
      });
    }
    return buildArticleMetadata(article);
  } catch {
    return buildPageMetadata({
      title: slug,
      path: `/${categorySlug}/${slug}`,
      noIndex: true,
    });
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category: categorySlug, slug } = await params;

  if (!isCmsConfigured()) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <CmsStateMessage
          tone="info"
          title="WordPress API not configured"
          message="Set WP_API_URL in .env.local (see .env.example), then restart the Next.js server to load live articles."
        />
      </div>
    );
  }

  let article: Article | null = null;
  let related: Article[] = [];
  let loadError: string | null = null;

  try {
    article = await getArticleBySlug(slug);
    if (article) {
      related = await getRelatedArticles(article, 4);
    }
  } catch (error) {
    if (error instanceof CmsConfigError) {
      return (
        <div className="mx-auto max-w-3xl px-4 py-10">
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
        : "Unexpected error while loading this article.";
  }

  if (loadError) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-10">
        <CmsStateMessage
          tone="error"
          title="Could not load article"
          message={loadError}
        />
      </div>
    );
  }

  if (!article) notFound();

  if (article.category !== categorySlug) {
    // Phase 8: one-hop permanent redirect to the preferred category path.
    permanentRedirect(`/${article.category}/${article.slug}`);
  }

  const category = buildCategoryMeta(article.category, {
    name: article.categoryName,
  });
  const imageSrc = article.coverImage;

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10">
      <JsonLd
        data={[
          buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: category.name, path: category.href },
            {
              name: article.title,
              path: `/${article.category}/${article.slug}`,
            },
          ]),
          buildArticleJsonLd(article),
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article>
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: category.name, href: category.href },
              { label: article.title },
            ]}
          />

          <header className="mb-8">
            <Badge tone={category.tone}>{category.name}</Badge>
            <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-sm text-muted">
              {article.author.name} · {formatDate(article.publishDate)}
              {article.updatedDate !== article.publishDate
                ? ` · Updated ${formatDate(article.updatedDate)}`
                : ""}
              {" · "}
              {article.readTimeMinutes} min read
            </p>
            {article.tags.length > 0 ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-background px-2 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          {imageSrc ? (
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-xl bg-border">
              <Image
                src={imageSrc}
                alt={article.coverImageAlt || article.title}
                fill
                priority
                fetchPriority="high"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
              />
            </div>
          ) : null}

          {article.excerpt ? (
            <p className="mb-8 text-lg leading-relaxed text-muted">
              {article.excerpt}
            </p>
          ) : null}

          <ArticleBodyWithAds html={article.body} />
          <AuthorBio author={article.author} />
          <RelatedArticles articles={related} />

          <p className="mt-10 text-sm text-muted">
            <Link
              href={category.href}
              className="font-semibold text-accent hover:text-accent-dark"
            >
              ← Back to {category.name}
            </Link>
          </p>
        </article>

        <SidebarAd />
      </div>
    </div>
  );
}
