import type { Article } from "@/lib/types";

function normalizeQuery(query: string): string {
  return query.trim().toLowerCase();
}

/** Score how well an article matches a lightweight query. */
export function scoreArticleMatch(article: Article, query: string): number {
  const needle = normalizeQuery(query);
  if (!needle) return 0;

  let score = 0;
  const title = article.title.toLowerCase();
  const excerpt = article.excerpt.toLowerCase();
  const category = article.category.toLowerCase();
  const categoryName = article.categoryName.toLowerCase();
  const tags = article.tags.map((tag) => tag.toLowerCase());

  if (title === needle) score += 100;
  else if (title.includes(needle)) score += 40;
  else if (needle.split(/\s+/).every((part) => title.includes(part))) score += 25;

  for (const tag of tags) {
    if (tag === needle) score += 30;
    else if (tag.includes(needle) || needle.includes(tag)) score += 18;
  }

  if (categoryName.includes(needle) || category.includes(needle)) score += 20;
  if (excerpt.includes(needle)) score += 10;

  return score;
}

export function filterAndRankArticles(
  articles: Article[],
  query: string,
): Article[] {
  const needle = normalizeQuery(query);
  if (!needle) return [];

  return articles
    .map((article) => ({
      article,
      score: scoreArticleMatch(article, needle),
    }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.article.title.localeCompare(b.article.title))
    .map((item) => item.article);
}

export function articleMatchesQuery(article: Article, query: string): boolean {
  return scoreArticleMatch(article, query) > 0;
}
