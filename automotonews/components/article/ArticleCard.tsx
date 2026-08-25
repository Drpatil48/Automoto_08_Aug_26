import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { articleCoverSrc, buildCategoryMeta } from "@/lib/category-style";
import { articleHref, type Article } from "@/lib/types";

type ArticleCardProps = {
  article: Article;
  variant?: "standard" | "compact" | "guide";
  priority?: boolean;
};

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function ArticleCard({
  article,
  variant = "standard",
  priority = false,
}: ArticleCardProps) {
  const category = buildCategoryMeta(article.category, {
    name: article.categoryName,
  });
  const href = articleHref(article);
  const imageSrc = articleCoverSrc(article);
  const imageAlt = article.coverImageAlt || article.title;

  if (variant === "compact") {
    return (
      <article className="flex gap-3 rounded-lg border border-border bg-surface p-3">
        <Link
          href={href}
          className="relative block h-20 w-28 shrink-0 overflow-hidden rounded-md bg-border"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover"
            sizes="112px"
          />
        </Link>
        <div className="min-w-0">
          <Badge tone={category.tone}>{category.name}</Badge>
          <h3 className="mt-1 text-sm font-semibold leading-snug">
            <Link href={href} className="hover:text-accent">
              {article.title}
            </Link>
          </h3>
          <p className="mt-1 text-xs text-muted">
            {formatDate(article.publishDate)} · {article.readTimeMinutes} min
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm">
      <Link
        href={href}
        className="relative block aspect-[16/9] bg-border"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <Badge tone={category.tone}>{category.name}</Badge>
        <h3 className="text-lg font-semibold leading-snug">
          <Link href={href} className="hover:text-accent">
            {article.title}
          </Link>
        </h3>
        {variant === "guide" ? (
          <p className="text-sm leading-relaxed text-muted">{article.excerpt}</p>
        ) : (
          <p className="line-clamp-2 text-sm leading-relaxed text-muted">
            {article.excerpt}
          </p>
        )}
        <p className="mt-auto pt-2 text-xs text-muted">
          {formatDate(article.publishDate)} · {article.readTimeMinutes} min read
        </p>
      </div>
    </article>
  );
}
