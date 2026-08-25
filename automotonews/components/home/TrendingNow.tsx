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
      className="border-y border-border bg-surface px-4 py-8"
      aria-labelledby="trending-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl" aria-hidden="true">
              🔥
            </span>
            <h2
              id="trending-heading"
              className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
            >
              Trending Now · ट्रेंडिंग बातम्या
            </h2>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">
            Most Read
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
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-background p-4 transition-shadow hover:shadow-md"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-2xl font-black text-accent/30 group-hover:text-accent">
                      0{index + 1}
                    </span>
                    <Badge tone={category.tone}>{category.name}</Badge>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug tracking-tight break-words [overflow-wrap:anywhere] group-hover:text-accent">
                    <Link href={href} className="before:absolute before:inset-0">
                      {article.title}
                    </Link>
                  </h3>
                </div>

                <p className="mt-4 text-xs text-muted">
                  {formatDate(article.publishDate)} · {article.readTimeMinutes} min read
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
