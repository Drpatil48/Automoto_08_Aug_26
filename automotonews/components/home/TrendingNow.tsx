import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { buildCategoryMeta } from "@/lib/category-style";
import { articleHref, type Article } from "@/lib/types";

type TrendingNowProps = {
  articles: Article[];
};

function formatDate(value: string): string {
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
  }).format(new Date(value));
}

export function TrendingNow({ articles }: TrendingNowProps) {
  if (articles.length === 0) return null;

  const items = articles.slice(0, 4);

  return (
    <section
      id="trending-now"
      className="border-y border-zinc-800/80 bg-zinc-950/60 px-4 py-8 sm:px-6"
      aria-labelledby="trending-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/60 pb-4">
          <div className="flex items-center gap-3">
            <span className="relative flex size-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-red-600"></span>
            </span>
            <h2
              id="trending-heading"
              className="text-lg font-black uppercase tracking-wide text-white sm:text-xl"
            >
              TRENDING NOW <span className="font-normal text-zinc-400">| ट्रेंडिंग अपडेट्स</span>
            </h2>
          </div>
          <span className="rounded-full bg-red-950/80 border border-red-800/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400">
            BREAKING NEWS
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((article, index) => {
            const category = buildCategoryMeta(article.category, {
              name: article.categoryName,
            });
            const href = articleHref(article);

            return (
              <div
                key={article.slug}
                className="group relative flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-600/50 hover:bg-zinc-900/90 hover:shadow-lg hover:shadow-red-950/20"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-2xl font-black italic tracking-tighter text-zinc-700 transition-colors group-hover:text-red-500">
                      0{index + 1}
                    </span>
                    <Badge tone={category.tone}>{category.name}</Badge>
                  </div>
                  <h3 className="mt-3 text-sm font-bold leading-snug tracking-tight text-zinc-100 transition-colors group-hover:text-red-400">
                    <Link href={href} className="before:absolute before:inset-0">
                      {article.title}
                    </Link>
                  </h3>
                </div>

                <div className="mt-4 flex items-center justify-between text-[11px] text-zinc-400 border-t border-zinc-800/40 pt-3">
                  <span>{formatDate(article.publishDate)}</span>
                  <span>{article.readTimeMinutes} min read</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
