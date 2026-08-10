import Link from "next/link";
import { ArticleCard } from "@/components/article/ArticleCard";
import type { Article } from "@/lib/types";

type RelatedArticlesProps = {
  articles: Article[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 border-t border-border pt-8" aria-labelledby="related-heading">
      <div className="mb-5 flex items-end justify-between gap-3">
        <h2 id="related-heading" className="text-xl font-bold">
          Related articles
        </h2>
        <Link
          href={`/${articles[0].category}`}
          className="text-sm font-semibold text-accent hover:text-accent-dark"
        >
          More in category
        </Link>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
