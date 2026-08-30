# Phase 8 — Content Migration & Redirects

**Status:** Strategy locked from live WordPress REST API evidence (sampled 2026-08-10).  
**Goal:** Preserve SEO equity when cutting over from WordPress to the Next.js App Router — **no invented mappings**, **no redirect chains**, **no WordPress content mutation**.

---

## 1. Evidence sources

| Source | Value |
|--------|--------|
| `WP_API_URL` | `https://automotonews.in/wp-json/wp/v2` (`.env.local` / `.env.example`) |
| Posts sample | `GET /posts?per_page=20` (+ full set `per_page=100`, **X-WP-Total: 57**) |
| Categories | `GET /categories?per_page=50` |
| Pages | `GET /pages?per_page=50` |
| Live HEAD probes | Selected paths on `https://automotonews.in` |

No WordPress admin writes, bulk edits, or content deletes were performed.

---

## 2. Current WordPress URL patterns (evidence)

### 2.1 Articles — flat permalinks

Live `link` fields are flat post permalinks with trailing slash:

| WP `link` (evidence) | Primary category slug (from `_embedded` / category id map) |
|----------------------|------------------------------------------------------------|
| `https://automotonews.in/ev-registration-india-2025/` | `electric-vehicles-evs` |
| `https://automotonews.in/ev-charger-installation-cost-in-india/` | `daily-update` |
| `https://automotonews.in/new-maruti-suzuki-victoris-2025/` | `car-news` |
| `https://automotonews.in/100-cc-bikes-in-india/` | `bikes-news` |

HEAD probes:

- `/ev-registration-india-2025/` → **200**
- `/ev-registration-india-2025` → **301** → `/ev-registration-india-2025/`
- `/electric-vehicles-evs/ev-registration-india-2025/` → **301** → `/ev-registration-india-2025/` (WP currently collapses nested paths back to flat)
- `/?p=2115` → **301** → `/ev-registration-india-2025/`

**Article pattern on WP:** `/{post-slug}/`

### 2.2 Categories — also flat (not `/category/...` as preferred)

Live category `link` fields:

| Slug | WP `link` | Count |
|------|-----------|-------|
| `auto-technology` | `https://automotonews.in/auto-technology/` | 5 |
| `bikes-news` | `https://automotonews.in/bikes-news/` | 2 |
| `car-news` | `https://automotonews.in/car-news/` | 10 |
| `daily-update` | `https://automotonews.in/daily-update/` | 13 |
| `electric-vehicles-evs` | `https://automotonews.in/electric-vehicles-evs/` | 19 |
| `hybrid-vehicles` | `https://automotonews.in/hybrid-vehicles/` | 2 |
| `off-roading` | `https://automotonews.in/off-roading/` | 3 |
| `sportsbikes` | `https://automotonews.in/sportsbikes/` | 4 |
| `sports-car` | `https://automotonews.in/sports-car/` | 3 |
| `upcoming-cars` | `https://automotonews.in/upcoming-cars/` | 6 |

HEAD probes:

- `/electric-vehicles-evs/` → **200**
- `/category/electric-vehicles-evs/` → **301** → `/electric-vehicles-evs/`
- `/sportsbikes/` → **200**
- `/sports-bikes/` → **404** (slug does **not** exist on live WP)
- `/category/sportsbikes/` → **301** → `/sportsbikes/`

**Category pattern on WP (preferred):** `/{category-slug}/`  
**Legacy category prefix:** `/category/{category-slug}/` → already 301s to flat on WP.

### 2.3 Static pages

| WP slug | WP `link` | Live HEAD notes |
|---------|-----------|-----------------|
| `contact-us` | `https://automotonews.in/contact-us/` | **200** |
| `about-us` | `https://automotonews.in/about-us/` | **200**; `/about/` → **301** → `/about-us/` |
| `privacy-policy` | `https://automotonews.in/privacy-policy/` | **200** |
| `disclaimer` | `https://automotonews.in/disclaimer/` | **200** |

Also: `/contact/` → **301** → `/contact-us/` on live WP today.

### 2.4 Collisions

Checked all 57 post slugs against category and known page slugs: **no collisions**.

---

## 3. New Next.js URL patterns (preferred / canonical)

| Content | Preferred path | Notes |
|---------|----------------|-------|
| Home | `/` | Unchanged |
| Category archive | `/{categorySlug}` | **Same as live WP preferred** — no article-level migration needed |
| Article | `/{categorySlug}/{postSlug}` | **Different from WP flat** — primary redirect work |
| Contact | `/contact` | **Different from WP `/contact-us`** |
| About | `/about-us` | Same as WP |
| Privacy | `/privacy-policy` | Same as WP |
| Disclaimer | `/disclaimer` | Same as WP |
| Search | `/search` | New app route |
| Compare | `/compare` | New app route |

Canonicals and sitemap already emit these preferred paths via `lib/seo.ts` (`articleHref`, `categoryHref`, `absoluteUrl`) and `app/sitemap.ts`.

`Article.sourceUrl` / `CmsPage.sourceUrl` store the original WP `link` for audit only — canonicals must **not** point at WP flat URLs after cutover.

---

## 4. Mapping rules (algorithmic — no invented per-article rows)

### 4.1 Articles (data-driven from WP)

For each published post from the REST API:

1. Read `post.slug` and primary category id (`post.categories[0]`).
2. Resolve category id → `category.slug` via `/categories`.
3. If category missing, fall back to `daily-update` (same fallback already used in `normalizeArticle` / sitemap).
4. Emit **one-hop** permanent redirects:

| From (old WP) | To (Next preferred) |
|---------------|---------------------|
| `/{postSlug}` | `/{categorySlug}/{postSlug}` |
| `/{postSlug}/` | `/{categorySlug}/{postSlug}` |

5. Handle `/?p={postId}` in **`proxy.ts`** (not `next.config`) so the `p` query can be stripped in the same hop.

### 4.2 Category archives

| From | To | Why |
|------|----|-----|
| `/{categorySlug}` | _(no redirect)_ | Already preferred on both WP and Next |
| `/category/{categorySlug}` | `/{categorySlug}` | Evidence: live WP already 301s this |
| `/category/{categorySlug}/{postSlug}` | `/{categorySlug}/{postSlug}` | One hop to Next preferred (avoids WP’s old collapse to flat, which would chain) |

### 4.3 Static pages (evidence-based only)

| From | To | Evidence |
|------|----|----------|
| `/contact-us`, `/contact-us/` | `/contact` | WP page slug is `contact-us`; Next route is `/contact` (`PAGE_SLUG_ALIASES` + `app/contact`) |
| `/about`, `/about/` | `/about-us` | Live WP already 301s `/about` → `/about-us` |

**Not redirected (already aligned):** `/about-us`, `/privacy-policy`, `/disclaimer`.

### 4.4 Wrong category segment on article routes

If a request hits `/{wrongCategory}/{postSlug}` but the CMS primary category differs:

1. **`proxy.ts`** issues an HTTP **301** to `/{primaryCategory}/{postSlug}` (preferred for SEO).
2. The article page still calls `permanentRedirect` as a safety net if the proxy is bypassed.

Canonical metadata already uses the primary category path.

---

## 5. What will NOT be redirected

| Candidate | Reason |
|-----------|--------|
| `/sports-bikes` → `/sportsbikes` | Live HEAD is **404**; no WP category slug `sports-bikes`. App styling aliases only — **human review** if Search Console later shows hits |
| `/buying-guide` | Present in local style fallbacks only; **not** in live WP categories |
| Arbitrary old dates/year/month permalinks | No evidence current site uses `/%year%/%month%/%postname%/` |
| Individual hand-written article maps | Forbidden — use API-driven map only |
| Redirects to external domains | Out of scope |
| WordPress admin / feed / `wp-json` paths | Leave alone; not part of public Next IA |
| Unknown 404 paths | Do not guess |

---

## 6. Chain avoidance

Rules enforced in implementation:

1. Every configured redirect targets the **final preferred Next path** in a single hop.
2. Never redirect `/{post}` → intermediate flat or `/category/...` then again to preferred.
3. `/category/{cat}/{slug}` goes **directly** to `/{cat}/{slug}`, not via `/{slug}`.
4. Trailing-slash and non-slash old paths both target the same final destination (Next default: **no** trailing slash).
5. Article wrong-category correction uses `permanentRedirect` to the same final path the flat-map would use.

---

## 7. Canonical + sitemap policy

| Surface | Policy |
|---------|--------|
| `alternates.canonical` | Preferred Next path only (`NEXT_PUBLIC_SITE_URL` + new path) |
| Open Graph `url` | Same as canonical |
| JSON-LD `url` / `mainEntityOfPage` | Preferred article path |
| `app/sitemap.ts` | Preferred category + article URLs only — **no** flat WP paths, **no** `/contact-us` |
| `robots.ts` | Unchanged; sitemap points at preferred URLs |

After production cutover, set `NEXT_PUBLIC_SITE_URL=https://automotonews.in`.

---

## 8. Implementation approach (Next.js 16)

1. **`docs/PHASE8_REDIRECTS.md`** — this document (strategy first).
2. **`lib/redirects.ts`** — static evidence-based redirects + build-time fetch of WP posts/categories to generate article maps.
3. **`next.config.ts` `redirects()`** — register static + generated redirects with **`statusCode: 301`**.
4. **`skipTrailingSlashRedirect: true`** — prevents Next’s automatic **308** slash redirect from chaining ahead of our **301** maps. Trailing-slash old URLs are listed explicitly and point at the final preferred path in one hop.
5. **`proxy.ts`** (Next 16; `middleware` renamed) — runtime fallback for a **single-segment** path that is not a reserved app/category route: look up post by slug via WP; if found, **301** to `/{category}/{slug}`. Also handles `/?p={id}` shortlinks and strips the query.
6. **Article page** — switch category mismatch to `permanentRedirect` (308 method-preserving permanent; config maps use 301).
7. **No WordPress changes** — redirects live in Next only until/unless DNS cutover.

Build-time generation requires network access to `WP_API_URL`. If the API is unreachable during `next build`, only static structural redirects are applied and a warning is logged — article flat URLs then rely on `proxy.ts` at runtime (when API is available).

Redirect registration **order** (critical for chain avoidance):

1. Static page + `/category/...` structural rules  
2. WP-generated flat `/{post}` and `/{post}/` → `/{category}/{post}`  
3. Known category `/{category}/` → `/{category}`  
4. Preferred two-segment trailing-slash normalizer `/{category}/{slug}/` → `/{category}/{slug}`  
5. Preferred static route trailing-slash normalizers  

---

## 9. Important URL mappings (summary table)

| Old (WP / legacy) | New (Next preferred) | Type |
|-------------------|----------------------|------|
| `/{postSlug}/` | `/{categorySlug}/{postSlug}` | Generated from WP posts |
| `/?p={id}` | `/{categorySlug}/{postSlug}` | Runtime proxy (query stripped) |
| `/category/{categorySlug}/` | `/{categorySlug}` | Structural (evidence) |
| `/category/{categorySlug}/{postSlug}/` | `/{categorySlug}/{postSlug}` | Structural (one-hop) |
| `/contact-us/` | `/contact` | Static page (evidence) |
| `/about/` | `/about-us` | Static page (evidence) |
| `/{wrongCat}/{postSlug}` | `/{primaryCat}/{postSlug}` | App `permanentRedirect` |

---

## 10. Items needing human review

1. **Cutover plan** — when DNS/hosting switches from WP PHP to Next; keep `wp-content/uploads` reachable (already allowlisted in `next.config` images).
2. **`sports-bikes` hits** — only add redirect if Search Console / analytics prove inbound links; do not invent beforehand.
3. **Search Console** — after cutover, monitor coverage for flat URLs and confirm 301 → preferred paths; submit sitemap with preferred URLs only.
4. **WP shortlink / other query forms** — `?p=` covered when build map succeeds; other query permalinks not evidenced.
5. **Trailing-slash SEO** — WP prefers trailing slash; Next prefers none. Both old forms 301 to the non-slash preferred path.
6. **Post count growth** — rebuild (or rely on `proxy.ts`) so new flat URLs keep redirecting after publish.

---

## 11. Verification checklist

- [x] `tsc --noEmit`
- [x] `npm run lint`
- [x] `npm run build` (generated 114 WP article redirect entries for 57 posts)
- [x] `curl -I` representative old paths → **301** `Location` = final preferred path (**one hop**)
- [x] `/sitemap.xml` lists preferred URLs only (no `/contact-us`, no flat post URLs)
- [x] Article/category HTML includes canonical = preferred path
- [x] `/?p={id}` shortlink → preferred article path with query stripped (one hop)
- [x] Wrong-category article path → preferred path via proxy **301** (one hop)
