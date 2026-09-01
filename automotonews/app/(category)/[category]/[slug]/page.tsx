import Image from "next/image";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { ArticleBodyWithAds } from "@/components/ads/ArticleBodyWithAds";
import { SidebarAd } from "@/components/ads/SidebarAd";
import { AuthorBio } from "@/components/article/AuthorBio";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { FontResizer } from "@/components/article/FontResizer";
import { QuickSummaryBox } from "@/components/article/QuickSummaryBox";
import { ReadingProgressBar } from "@/components/article/ReadingProgressBar";
import { RelatedArticles } from "@/components/article/RelatedArticles";
import { StickyMobileShareBar } from "@/components/article/StickyMobileShareBar";
import { NewsletterForm } from "@/components/home/NewsletterForm";
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
  buildFaqJsonLd,
  buildPageMetadata,
  extractFaqsFromHtml,
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

  let article: Article | null = null;
  try {
    article = await getArticleBySlug(slug);
  } catch {
    return buildPageMetadata({
      title: slug,
      path: `/${categorySlug}/${slug}`,
      noIndex: true,
    });
  }

  if (!article) notFound();
  return buildArticleMetadata(article);
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
  const pageUrl = `https://automotonews.in/${article.category}/${article.slug}`;

  const faqs = extractFaqsFromHtml(article.body);
  const faqJsonLd = buildFaqJsonLd(faqs);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
      <ReadingProgressBar />
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
          faqJsonLd,
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]">
        <article className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-5 sm:p-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: category.name, href: category.href },
              { label: article.title },
            ]}
          />

          <header className="mb-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Badge tone={category.tone}>{category.name}</Badge>
              <FontResizer />
            </div>
            <h1 className="mt-3.5 text-2xl font-black leading-[1.25] tracking-tight text-white sm:text-4xl lg:text-[2.6rem]">
              {article.title}
            </h1>
            <p className="mt-4 text-xs sm:text-sm font-semibold text-zinc-400">
              <span className="text-zinc-200">{article.author.name}</span> · {formatDate(article.publishDate)}
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
                    className="rounded-lg border border-zinc-800 bg-zinc-900 px-3.5 py-1 text-xs sm:text-sm font-bold text-zinc-300"
                  >
                    #{tag}
                  </li>
                ))}
              </ul>
            ) : null}
          </header>

          {imageSrc ? (
            <div className="relative mb-8 aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
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

          {article.excerpt ? <QuickSummaryBox summary={article.excerpt} /> : null}

          <ArticleBodyWithAds html={article.body} />
          <AuthorBio author={article.author} />
          <RelatedArticles articles={related} />

          <div className="mt-10">
            <NewsletterForm />
          </div>

          <p className="mt-10 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <Link
              href={category.href}
              className="text-red-500 hover:text-red-400"
            >
              ← Back to {category.name}
            </Link>
          </p>
        </article>

        <SidebarAd />
      </div>

      {/* Sticky Mobile Share Bar (Wegwan News inspired quick action bar) */}
      <StickyMobileShareBar title={article.title} url={pageUrl} />
    </div>
  );
}
