import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArticleBody } from "@/components/article/ArticleBody";
import { AuthorBio } from "@/components/article/AuthorBio";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { RelatedArticles } from "@/components/article/RelatedArticles";
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
import type { Article } from "@/lib/types";

type ArticlePageProps = {
  params: Promise<{ category: string; slug: string }>;
};

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;

  if (!isCmsConfigured()) {
    return { title: slug };
  }

  try {
    const article = await getArticleBySlug(slug);
    if (!article) return { title: "Article not found" };
    return {
      title: article.title,
      description: article.excerpt || undefined,
    };
  } catch {
    return { title: slug };
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
    redirect(`/${article.category}/${article.slug}`);
  }

  const category = buildCategoryMeta(article.category, {
    name: article.categoryName,
  });
  const imageSrc = article.coverImage;

  return (
    <article className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
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
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      ) : null}

      {article.excerpt ? (
        <p className="mb-8 text-lg leading-relaxed text-muted">{article.excerpt}</p>
      ) : null}

      <ArticleBody html={article.body} />
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
  );
}
