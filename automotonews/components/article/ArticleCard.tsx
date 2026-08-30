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
      <article className="group flex gap-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3.5 transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-900/90 hover:shadow-md">
        <Link
          href={href}
          className="relative block h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-zinc-800"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={imageSrc}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="112px"
          />
        </Link>
        <div className="min-w-0 flex-1">
          <Badge tone={category.tone}>{category.name}</Badge>
          <h3 className="mt-1.5 text-xs font-bold leading-snug text-zinc-100 transition-colors group-hover:text-red-400 sm:text-sm">
            <Link href={href}>
              {article.title}
            </Link>
          </h3>
          <p className="mt-2 text-[11px] text-zinc-400">
            {formatDate(article.publishDate)} · {article.readTimeMinutes} min read
          </p>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/50 hover:bg-zinc-900/95 hover:shadow-xl hover:shadow-red-950/20">
      <Link
        href={href}
        className="relative block aspect-[16/9] overflow-hidden bg-zinc-800"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
      </Link>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <div className="mb-2.5">
            <Badge tone={category.tone}>{category.name}</Badge>
          </div>
          <h3 className="text-base font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-red-400 sm:text-lg">
            <Link href={href}>
              {article.title}
            </Link>
          </h3>
          {variant === "guide" ? (
            <p className="mt-2.5 text-xs leading-relaxed text-zinc-400 sm:text-sm">{article.excerpt}</p>
          ) : (
            <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-zinc-400 sm:text-sm">
              {article.excerpt}
            </p>
          )}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-zinc-800/60 pt-3.5 text-[11px] font-medium text-zinc-400">
          <span>{formatDate(article.publishDate)}</span>
          <span>{article.readTimeMinutes} min read</span>
        </div>
      </div>
    </article>
  );
}
