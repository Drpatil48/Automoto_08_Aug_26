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
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10"
        aria-labelledby="top-stories-heading"
      >
        <SectionHeading id="top-stories-heading" title="Top Stories" />
        <p className="rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-sm text-zinc-400">
          No top stories available right now.
        </p>
      </section>
    );
  }

  const [lead, ...rest] = articles;

  return (
    <section
      id="top-stories"
      className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10"
      aria-labelledby="top-stories-heading"
    >
      <SectionHeading
        id="top-stories-heading"
        title="Top Stories | महत्त्वाच्या घडामोडी"
        description="The latest automotive headlines readers are following today."
      />
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ArticleCard article={lead} />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-2">
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
