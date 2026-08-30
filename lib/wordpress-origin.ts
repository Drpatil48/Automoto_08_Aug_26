/**
 * WordPress host used for REST API fetches and /wp-* rewrites after apex cutover.
 * Derive from WORDPRESS_ORIGIN or WP_API_URL; falls back to production apex.
 */
export function getWordPressOrigin(): string {
  const explicit = process.env.WORDPRESS_ORIGIN?.trim();
  if (explicit) return explicit.replace(/\/$/, "");

  const api = process.env.WP_API_URL?.trim();
  if (api) {
    return api.replace(/\/wp-json\/wp\/v2\/?$/i, "").replace(/\/$/, "");
  }

  return "https://cms.automotonews.in";
}
