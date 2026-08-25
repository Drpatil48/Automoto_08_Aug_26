/**
 * WordPress excerpts are often generated from the first paragraph. Avoid
 * rendering the same lead twice while preserving intentionally distinct
 * standfirsts.
 */
export function excerptRepeatsArticleLead(excerpt: string, html: string): boolean {
  const lead = normalizeText(excerpt).replace(/[…\.]+$/, "").trim();
  if (lead.length < 40) return false;

  const body = normalizeText(html.replace(/<[^>]*>/g, " "));
  return body.startsWith(lead);
}

function normalizeText(value: string): string {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}
