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
    <section aria-labelledby="hero-heading" className="border-b border-zinc-800/80 bg-zinc-950 px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
          <Link
            href={href}
            className="group relative block aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 shadow-2xl lg:col-span-7"
            tabIndex={-1}
            aria-hidden="true"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              priority
              fetchPriority="high"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent lg:hidden" />
          </Link>

          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-6">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="rounded-full bg-red-950/80 border border-red-800/60 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-red-400">
                FEATURED STORY
              </span>
              <span className="text-sm text-zinc-400 font-medium">• मराठीत ताज्या बातम्या</span>
            </div>
            <div className="mt-3.5">
              <Badge tone={category.tone}>{category.name}</Badge>
            </div>
            <h1
              id="hero-heading"
              className="mt-3 text-2xl font-black leading-[1.25] tracking-tight text-white sm:text-3xl lg:text-[2.5rem]"
            >
              <Link href={href} className="transition-colors hover:text-red-500">
                {article.title}
              </Link>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-zinc-300 sm:text-lg">
              {article.excerpt}
            </p>
            <div className="mt-5 flex items-center gap-3 text-xs sm:text-sm font-semibold text-zinc-400 border-t border-zinc-800/60 pt-4">
              <span className="font-bold text-zinc-200">{article.author.name}</span>
              <span>•</span>
              <span>{formatDate(article.publishDate)}</span>
              <span>•</span>
              <span>{article.readTimeMinutes} min read</span>
            </div>
            <div className="mt-6">
              <Link
                href={href}
                className="inline-flex items-center justify-center rounded-xl bg-red-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-red-950/40 transition-all hover:bg-red-500 hover:shadow-red-900/60 hover:scale-[1.02]"
              >
                संपूर्ण बातमी वाचा →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
