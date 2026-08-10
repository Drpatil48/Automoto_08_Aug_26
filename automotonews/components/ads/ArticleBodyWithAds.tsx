import { AdSlot } from "@/components/ads/AdSlot";
import { ArticleBody } from "@/components/article/ArticleBody";

type ArticleBodyWithAdsProps = {
  html: string;
};

/**
 * Renders article HTML with up to two in-article ad slots between
 * paragraph groups. Slots are clearly labeled and layout-reserved.
 */
export function ArticleBodyWithAds({ html }: ArticleBodyWithAdsProps) {
  const chunks = splitHtmlIntoChunks(html, 3);

  if (chunks.length <= 1) {
    return (
      <>
        <ArticleBody html={html} />
        <div className="my-8">
          <AdSlot placement="inArticle" size="rectangle" />
        </div>
      </>
    );
  }

  const midIndex = Math.max(1, Math.floor(chunks.length / 2));

  return (
    <>
      {chunks.map((chunk, index) => (
        <div key={`article-chunk-${index}`}>
          <ArticleBody html={chunk} />
          {index === 0 || index === midIndex ? (
            <div className="my-8">
              <AdSlot placement="inArticle" size="rectangle" />
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

function splitHtmlIntoChunks(html: string, paragraphsPerChunk: number): string[] {
  const trimmed = html.trim();
  if (!trimmed) return [];

  const parts = trimmed.split(/(?<=<\/p>)/i).filter((part) => part.trim());
  if (parts.length <= paragraphsPerChunk) return [trimmed];

  const chunks: string[] = [];
  for (let i = 0; i < parts.length; i += paragraphsPerChunk) {
    chunks.push(parts.slice(i, i + paragraphsPerChunk).join(""));
  }
  return chunks;
}
