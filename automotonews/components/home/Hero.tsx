import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { articleCoverSrc, buildCategoryMeta } from "@/lib/category-style";
import { articleHref, type Article } from "@/lib/types";

type HeroProps = {
  article: Article;
};

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function Hero({ article }: HeroProps) {
  const category = buildCategoryMeta(article.category, {
    name: article.categoryName,
  });
  const href = articleHref(article);
  const imageSrc = articleCoverSrc(article);
  const imageAlt = article.coverImageAlt || article.title;

  return (
    <section aria-labelledby="hero-heading" className="border-b border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-0 md:grid-cols-2">
        <Link
          href={href}
          className="relative block min-h-[240px] bg-border md:min-h-[360px]"
          tabIndex={-1}
          aria-hidden="true"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Link>

        <div className="flex flex-col justify-center px-4 py-8 sm:px-8 sm:py-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              LATEST AUTOMOTIVE NEWS
            </span>
            <span className="hidden text-xs text-muted sm:inline">• मराठीत ताज्या बातम्या</span>
          </div>
          <div className="mt-3">
            <Badge tone={category.tone}>{category.name}</Badge>
          </div>
          <h1
            id="hero-heading"
            className="mt-3 text-2xl font-bold leading-tight tracking-tight break-words [overflow-wrap:anywhere] sm:text-4xl"
          >
            <Link href={href} className="hover:text-accent">
              {article.title}
            </Link>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {article.excerpt}
          </p>
          <p className="mt-5 text-sm text-muted">
            {article.author.name} · {formatDate(article.publishDate)} ·{" "}
            {article.readTimeMinutes} min read
          </p>
          <div className="mt-6">
            <Link
              href={href}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-dark"
            >
              संपूर्ण बातमी वाचा
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
