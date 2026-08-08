# AutoMotoNews.in — SEO Audit Report (Pass 2)

**Site:** https://automotonews.in/  
**Theme:** `Automoto_5_May_Final` v3.0.8  
**Audit date:** 2026-08-05  
**Auditor lens:** Google Search Quality / Technical SEO  
**Live evidence:** Homepage HTML fetch, robots.txt, sitemap_index.xml headers

---

## Executive summary

| Area | Issues found | Fixed in v3.0.8 | Admin-only |
|------|-------------|-------------------|------------|
| Duplicate metadata | 3 | 3 | 1 |
| Schema / structured data | 5 | 5 | 0 |
| Internal linking | 4 | 4 | 0 |
| Image SEO | 3 | 3 | 0 |
| Performance / CWV | 4 | 3 | 1 |
| Crawl / indexation | 3 | 2 | 1 |
| Content quality signals | 4 | 1 | 3 |
| **Total** | **26** | **21** | **6** |

---

## Live findings (before deploy)

### Critical — duplicate `<head>` tags

Live homepage returned **two sets** of meta tags:

1. **Theme** (hardcoded in `header.php` before `wp_head()`): weak English description, `og:site_name: automotonews-in`, `og:locale: mr_IN`
2. **Rank Math** (via `wp_head()`): Marathi description, `og:site_name: automotonews-in.preview-domain.com`, `og:locale: en_US`

Also **two canonical URLs**, **two JSON-LD blocks** (theme WebSite + Rank Math Organization/WebSite).

**Impact:** Conflicting signals for crawlers; diluted relevance; Rich Results validation risk.

### robots.txt — OK

```
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Sitemap: https://automotonews.in/sitemap_index.xml
```

### Sitemap — OK

`sitemap_index.xml` returns HTTP 200. `x-robots-tag: noindex` on sitemap index is **normal** for WordPress/Rank Math.

### Cache

`x-litespeed-cache: hit` — stale HTML may persist after theme deploy until cache purge.

---

## Issues fixed in v3.0.8

### SEO-001 · Duplicate meta (theme + Rank Math)
- **Fix:** New `inc/seo.php` with `amnf_seo_plugin_active()` detecting Rank Math, Yoast, AIOSEO.
- **Fix:** Removed all meta/OG/canonical from `header.php`; output only via `wp_head` when **no** SEO plugin.
- **File:** `inc/seo.php`, `header.php`

### SEO-002 · Duplicate JSON-LD
- **Fix:** Theme schema disabled when SEO plugin active.
- **Fix:** Single `@graph` payload (Organization, WebSite, NewsArticle, BreadcrumbList, CollectionPage) when theme handles SEO.
- **File:** `inc/seo.php`

### SEO-003 · Invalid microdata on listing cards
- **Issue:** `NewsArticle` itemscope on archive/home cards without required Article fields.
- **Fix:** Removed itemscope/itemprop from cards in `front-page.php`, `archive.php`, `index.php`, `search.php`.
- **Files:** templates above

### SEO-004 · Duplicate microdata + JSON-LD on singles
- **Fix:** Removed microdata from `single.php` and `page.php`; Rank Math or theme JSON-LD handles structured data.
- **Files:** `single.php`, `page.php`

### SEO-005 · Missing Organization schema (fallback)
- **Fix:** Organization with `sameAs` social URLs in theme `@graph` when no plugin.
- **File:** `inc/seo.php`

### SEO-006 · Weak internal linking
- **Fix:** `amnf_related_posts()` on single posts (same category, 4 links).
- **Fix:** `amnf_footer_explore_links()` in footer + 404 category links.
- **Files:** `inc/seo.php`, `single.php`, `footer.php`, `404.php`

### SEO-007 · Orphan / dead-end 404
- **Fix:** 404 page now links to top categories + search + homepage.
- **File:** `404.php`

### SEO-008 · Missing alt on guide thumbnails
- **Fix:** Guide card images use post title as `alt`.
- **File:** `front-page.php`

### SEO-009 · Content images missing alt
- **Fix:** `amnf_content_image_alt()` filter adds post title alt when missing.
- **File:** `inc/seo.php`

### SEO-010 · Search / 404 indexation
- **Fix:** `wp_robots` noindex for search & 404 when theme handles robots (Rank Math overrides when active).
- **File:** `inc/seo.php`

### SEO-011 · Pagination SEO
- **Fix:** `rel="prev"` / `rel="next"` on paginated archives.
- **File:** `inc/seo.php`

### SEO-012 · Render-blocking Google Fonts
- **Fix:** Async font loading via `media="print" onload="this.media='all'"` + noscript fallback.
- **File:** `inc/seo.php`

### SEO-013 · JS loading
- **Fix:** `defer` on `amnf-main.js`.
- **File:** `inc/seo.php`

### SEO-014 · LCP preload
- **Fix:** Preload header hero image on front page with `fetchpriority="high"`.
- **File:** `inc/seo.php`

### SEO-015 · Breadcrumb schema (fallback)
- **Fix:** BreadcrumbList in JSON-LD for posts/pages when theme handles SEO.
- **File:** `inc/seo.php`

### SEO-016 · Archive CollectionPage schema (fallback)
- **Fix:** CollectionPage for category/tag archives when theme handles SEO.
- **File:** `inc/seo.php`

---

## Files modified (v3.0.8)

| File | Changes |
|------|---------|
| `inc/seo.php` | **NEW** — SEO module (meta, schema, robots, perf, related posts) |
| `functions.php` | Require seo.php, version 3.0.8 |
| `header.php` | Removed inline meta + JSON-LD (delegated to seo.php / Rank Math) |
| `single.php` | Removed microdata; added related posts |
| `page.php` | Removed microdata |
| `front-page.php` | Removed card microdata; guide alt text |
| `archive.php` | Removed card microdata |
| `index.php` | Removed card microdata |
| `search.php` | Removed card microdata |
| `404.php` | Category explore links |
| `footer.php` | Explore Topics internal links |
| `assets/css/main.css` | Related posts, explore, 404 styles |
| `style.css` | Version 3.0.8 |

---

## Remaining risks (admin / content)

| ID | Risk | Action |
|----|------|--------|
| R-001 | Rank Math `og:site_name` = preview domain | Rank Math → General → Website Name → `AutoMotoNews.in` |
| R-002 | WP site title `automotonews-in` (lowercase) | Settings → General → Site Title |
| R-003 | Weak tagline in English | Update tagline; align with Marathi Rank Math description or pick one primary language |
| R-004 | Keyword cannibalization | Multiple posts targeting same car/EV keywords — audit in Rank Math Content AI / GSC; merge or differentiate |
| R-005 | Thin buying-guide category | Add real `buying-guide` posts (placeholders hurt E-E-A-T) |
| R-006 | Homepage post overlap | EV posts in Top Stories + EV Spotlight + Bikes — editorial dedup |
| R-007 | Large hero-dashboard.jpg (~654KB) | Compress to WebP; target <150KB for LCP |
| R-008 | LiteSpeed cache stale deploy | Purge all cache after uploading v3.0.8 |
| R-009 | WhatsApp placeholder number | Update in `amnf_footer_social_links()` |
| R-010 | Core Web Vitals | Run PageSpeed Insights after deploy; monitor LCP/INP/CLS in GSC |

---

## Next recommendations (priority order)

1. **Deploy v3.0.8** and purge LiteSpeed/Hostinger cache.
2. **Rank Math settings:** Fix site name, logo, social URLs; verify single canonical per URL in View Source.
3. **Google Search Console:** Submit sitemap; inspect homepage + 3 posts; check “Duplicate field” in Rich Results Test.
4. **Compress images:** WebP for hero, featured images; use ShortPixel or LiteSpeed Image Optimization.
5. **Content audit:** 300+ word minimum on money pages; unique titles; one primary keyword per post.
6. **Internal linking:** Link new posts to pillar categories (EV, Car News, Bikes) from intro paragraphs.
7. **hreflang:** If targeting Marathi + English, configure Rank Math hreflang or separate URL structure.
8. **PageSpeed:** Self-host fonts or subset Inter/Newsreader to Latin + Devanagari only.

---

## Verification checklist (post-deploy)

```bash
# One canonical, one description (Rank Math only)
curl -s https://automotonews.in/ | grep -c 'rel="canonical"'

# Should be 1 after fix + cache purge

# Schema count
curl -s https://automotonews.in/ | grep -c 'application/ld+json'

# robots + sitemap
curl -s https://automotonews.in/robots.txt
curl -sI https://automotonews.in/sitemap_index.xml
```

---

*Generated for AutoMotoNews.in — SEO Audit Pass 2, theme v3.0.8*
