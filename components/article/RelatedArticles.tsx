import Link from "next/link";
import { ArticleCard } from "@/components/article/ArticleCard";
import type { Article } from "@/lib/types";

type RelatedArticlesProps = {
  articles: Article[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12 border-t border-zinc-800/80 pt-8" aria-labelledby="related-heading">
      <div className="mb-6 flex items-center justify-between gap-3 border-b border-zinc-800/60 pb-3">
        <h2 id="related-heading" className="text-lg font-black uppercase tracking-wider text-white">
          RELATED ARTICLES | संबंधित बातम्या
        </h2>
        <Link
          href={`/${articles[0].category}`}
          className="text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-400"
        >
          More in category →
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
