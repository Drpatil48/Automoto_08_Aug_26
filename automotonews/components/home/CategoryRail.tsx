import { ArticleCard } from "@/components/article/ArticleCard";
import { SectionHeading } from "@/components/home/SectionHeading";
import type { Article, Category } from "@/lib/types";

type CategoryRailProps = {
  category: Category;
  articles: Article[];
  sectionId: string;
};

export function CategoryRail({
  category,
  articles,
  sectionId,
}: CategoryRailProps) {
  const sectionIconMap: Record<string, string> = {
    ev: "⚡ ",
    cars: "🚗 ",
    "car-news": "🚗 ",
    bikes: "🏍️ ",
    sportsbikes: "🏍️ ",
    guides: "💰 ",
    "auto-technology": "💰 ",
  };

  const titleWithIcon = `${sectionIconMap[sectionId] ?? ""}${category.name}`;
  const headingId = `${sectionId}-heading`;

  return (
    <section
      id={sectionId}
      className="mx-auto max-w-6xl px-4 py-10"
      aria-labelledby={headingId}
    >
      <SectionHeading
        id={headingId}
        title={titleWithIcon}
        description={category.description}
        href={category.href}
      />

      {articles.length === 0 ? (
        <p className="rounded-lg border border-dashed border-border bg-surface p-6 text-sm text-muted">
          No articles in this category yet.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </section>
  );
}
