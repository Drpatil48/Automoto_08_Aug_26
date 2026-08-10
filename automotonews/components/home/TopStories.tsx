import { ArticleCard } from "@/components/article/ArticleCard";
import { SectionHeading } from "@/components/home/SectionHeading";
import type { Article } from "@/lib/types";

type TopStoriesProps = {
  articles: Article[];
};

export function TopStories({ articles }: TopStoriesProps) {
  if (articles.length === 0) {
    return (
      <section
        id="top-stories"
        className="mx-auto max-w-6xl px-4 py-10"
        aria-labelledby="top-stories-heading"
      >
        <SectionHeading id="top-stories-heading" title="Top Stories" />
        <p className="rounded-lg border border-dashed border-border bg-surface p-6 text-sm text-muted">
          No top stories available yet.
        </p>
      </section>
    );
  }

  const [lead, ...rest] = articles;

  return (
    <section
      id="top-stories"
      className="mx-auto max-w-6xl px-4 py-10"
      aria-labelledby="top-stories-heading"
    >
      <SectionHeading
        id="top-stories-heading"
        title="Top Stories"
        description="The latest headlines readers are checking first."
      />
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ArticleCard article={lead} priority />
        </div>
        <div className="flex flex-col gap-3 lg:col-span-2">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
