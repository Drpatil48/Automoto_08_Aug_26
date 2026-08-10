type ArticleBodyProps = {
  html: string;
};

export function ArticleBody({ html }: ArticleBodyProps) {
  if (!html.trim()) {
    return (
      <p className="text-muted">This article does not have body content yet.</p>
    );
  }

  return (
    <div
      className="article-body max-w-none text-[1.05rem] leading-8 text-foreground"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
