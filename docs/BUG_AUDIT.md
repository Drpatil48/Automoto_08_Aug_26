# AutoMotoNews Bug Audit

## Executive Summary

Audit date: **2026-08-16**.

Scope: the Next.js App Router codebase in this repository and live https://automotonews.in/.

Architecture: WordPress REST API (`WP_API_URL` / `cms.automotonews.in`) → Next.js 16.3.0 (React 19.2.8, TypeScript, Tailwind 4) on Vercel. There is **no** Next.js database, **no** `/app/api` route handlers, and **no** public-site authentication. `proxy.ts` handles WordPress shortlinks, flat permalinks, and wrong-category 301s.

Counts (this pass):

| Severity | Found | Fixed in repo | Remaining |
|----------|------:|--------------:|----------:|
| Critical | 0 | 0 | 0 |
| High | 2 | 1 (code; production pending deploy) | 1 (DNS — needs approval) |
| Medium | 6 | 5 | 1 |
| Low | 3 | 1 | 2 |

Baseline (local, 2026-08-16): `npx tsc --noEmit` PASS; `npm run lint` PASS; no unit/E2E suite; `npm run typecheck` / `npm test` scripts do not exist.

Live smoke: homepage, categories, compare, search, policy pages, sitemap, robots, ads.txt, and a real article returned **200**. `/contact-us` and flat permalinks **301** correctly. Unknown category/article URLs were **HTTP 200** soft 404s (BUG-001). `www` did not 301 to apex (BUG-002).

Fixes in this repo are recorded in `docs/FIX_LOG.md`. Editorial issues are in `docs/CONTENT_ISSUES.md`. A full link crawl (`docs/BROKEN_LINKS.md`) is not complete.

---

## Critical Bugs

None verified. The public site responded; no authentication bypass, data-loss path, or Next.js production crash was found in this pass.

---

## High Priority Bugs

### BUG-001 — Missing pages return HTTP 200 instead of 404

- Severity: High
- Category: Routing / SEO
- Location: Category and article catch-all routes
- File: `app/(category)/[category]/page.tsx`, `app/(category)/[category]/[slug]/page.tsx`
- URL: https://automotonews.in/this-page-should-not-exist-xyz123 ; https://automotonews.in/electric-vehicles-evs/this-article-does-not-exist-xyz
- Steps to reproduce: Request a non-existent category or article URL. Inspect the HTTP status code and `<title>`.
- Expected behavior: HTTP 404 and the shared `app/not-found.tsx` page.
- Actual behavior: Vercel returned **200**. Title was “Category not found” / “Article not found” with `noindex`. `x-matched-path` was `/[category]` or `/[category]/[slug]`.
- Root cause: `generateMetadata` returned a successful metadata document for missing CMS records instead of calling `notFound()`, so Next.js 16 served a not-found UI without a 404 status.
- Fix: Call `notFound()` from `generateMetadata` and from the page when CMS is configured and the record is missing. CMS outages still return noindex metadata rather than a false 404.
- Tests performed: Live curl 2026-08-16 (200). After code change: `npx tsc --noEmit`, `npm run lint`.
- Verification: Local types/lint PASS. Production still 200 until deploy.
- Status: Fixed in repo — production verification pending deploy

### BUG-002 — `www.automotonews.in` does not 301 to apex

- Severity: High
- Category: Deployment / SEO
- Location: DNS / hosting (not application routing)
- File: n/a (infrastructure). Related notes: `docs/CMS_SUBDOMAIN_ISSUE.md`
- URL: https://www.automotonews.in/
- Steps to reproduce: `curl -sS -o /dev/null -w "%{http_code} %{url_effective} %{num_redirects}\n" -L https://www.automotonews.in/`
- Expected behavior: One-hop HTTP 301 to `https://automotonews.in/`.
- Actual behavior: HTTP 200, 0 redirects. www serves the site independently.
- Root cause: Host/DNS configuration. Canonical tags can still point at apex when `NEXT_PUBLIC_SITE_URL=https://automotonews.in`.
- Fix: Do **not** change DNS from the app repo without owner approval (high-risk). Configure www → apex 301 at DNS or Vercel domain settings.
- Tests performed: Live curl 2026-08-16.
- Verification: Confirmed live. No code change.
- Status: Remaining — needs owner approval

---

## Medium Priority Bugs

### BUG-003 — Category `?page=` beyond last page returns 200 with empty list

- Severity: Medium
- Category: Routing
- Location: Category archive pagination
- File: `app/(category)/[category]/page.tsx`
- URL: https://automotonews.in/electric-vehicles-evs?page=99
- Steps to reproduce: Open a valid category with `?page=` larger than `totalPages`.
- Expected behavior: HTTP 404 (or a single 301 to the last real page).
- Actual behavior: HTTP 200 with category header and empty article list.
- Root cause: Page number was clamped to ≥ 1 but never compared to WordPress `X-WP-TotalPages`.
- Fix: Call `notFound()` when `page > totalPages` (page render and `generateMetadata` for `page > 1`).
- Tests performed: Live curl 200 on page=99. After fix: tsc, lint.
- Verification: Local types/lint PASS. Production pending deploy.
- Status: Fixed in repo — production verification pending deploy

### BUG-004 — Newsletter consent copy does not link Privacy Policy

- Severity: Medium
- Category: UI/UX / Accessibility
- Location: Homepage newsletter form
- File: `components/home/NewsletterFormClient.tsx`
- URL: https://automotonews.in/#newsletter
- Steps to reproduce: Open the homepage newsletter section and read the consent checkbox label.
- Expected behavior: “Privacy Policy” is a working link to `/privacy-policy`.
- Actual behavior: Plain text “See the site Privacy Policy for details.”
- Root cause: Copy never wired to the existing policy route.
- Fix: `next/link` to `/privacy-policy` in the consent label.
- Tests performed: Code review; tsc; lint.
- Verification: Local types/lint PASS. Browser click not re-tested after change.
- Status: Fixed in repo

### BUG-005 — Missing article images always use the daily placeholder

- Severity: Medium
- Category: UI/UX / Images
- Location: Homepage hero and article cards
- File: `components/article/ArticleCard.tsx`, `components/home/Hero.tsx`, `lib/category-style.ts`
- URL: Any article/card without a WordPress featured image
- Steps to reproduce: Render an article with `coverImage: null` in EV, bike, car, or guide categories.
- Expected behavior: Placeholder matches category tone (`cover-ev.svg`, `cover-bike.svg`, `cover-car.svg`, `cover-guide.svg`, or daily).
- Actual behavior: Always `/placeholders/cover-daily.svg`.
- Root cause: Hardcoded fallback in Hero and ArticleCard.
- Fix: `articleCoverSrc()` / `categoryCoverPlaceholder()` in `lib/category-style.ts`.
- Tests performed: tsc; lint.
- Verification: Local types/lint PASS.
- Status: Fixed in repo

### BUG-006 — Mobile menu has no backdrop / outside click to close

- Severity: Medium
- Category: Accessibility / UI
- Location: Header mobile navigation
- File: `components/layout/MobileNav.tsx`
- URL: https://automotonews.in/ (viewport &lt; md)
- Steps to reproduce: Open the hamburger menu. Click the dimmed page area (there was none). Press Escape.
- Expected behavior: Overlay click and Escape close the menu.
- Actual behavior: Escape already worked. No dimmed backdrop; only the hamburger toggled the panel.
- Root cause: Panel was rendered without an overlay control.
- Fix: Full-viewport overlay button that calls `setOpen(false)`.
- Tests performed: tsc; lint. Escape handler already existed.
- Verification: Local types/lint PASS. Device tap not re-tested after change.
- Status: Fixed in repo

### BUG-007 — Search results are capped and have no pagination UI

- Severity: Medium
- Category: Search / Frontend
- Location: Search results page
- File: `app/search/page.tsx` (`searchArticles` in `lib/cms.ts` already supported paging)
- URL: https://automotonews.in/search?q=EV
- Steps to reproduce: Search a broad term. Look for page 2 controls. Inspect the request: page was always 1 with `perPage: 24`.
- Expected behavior: Paginated results with Previous/Next; out-of-range `?page=` is 404.
- Actual behavior: Single 24-item slice; WordPress fetch still maxes at 50 posts then ranks locally (remaining product limit, not a crash).
- Root cause: Search page ignored `page` and did not render pagination.
- Fix: `?page=` with 12 results per page, Previous/Next, `notFound()` when `page > totalPages`.
- Tests performed: tsc; lint.
- Verification: Local types/lint PASS. Live pagination pending deploy. WP still returns at most 50 hits for ranking.
- Status: Fixed in repo (ranking still capped at 50 WP hits — documented remainder)

### BUG-008 — Sticky mobile ad and header ad reserve empty chrome when AdSense slots are unset

- Severity: Medium
- Category: UI/UX / Mobile / Ads
- Location: Global layout ad slots
- File: `components/ads/MobileAnchorAd.tsx`, `components/ads/HeaderAd.tsx`, `app/layout.tsx`
- URL: https://automotonews.in/ (any page, especially mobile)
- Steps to reproduce: Load the site without `NEXT_PUBLIC_ADSENSE_SLOT_*` set. Observe header banner and sticky bottom “Ad space reserved”.
- Expected behavior: Reserved height when live ads are configured. No persistent empty sticky bar when slots are unset, unless AdSense policy still requires visible placeholders.
- Actual behavior: Mobile `body` padding `~4.5rem` always; sticky empty anchor and header placeholder on every page.
- Root cause: Slots were designed as reserved AdSense placeholders regardless of live configuration.
- Fix: Not applied yet — placeholders were intentional for ads layout. Reassess with owner (collapse sticky slot when `canRenderLiveAd` is false vs keep for AdSense review).
- Tests performed: Code review of layout and AdSlot.
- Verification: Observed in source and live layout padding. No change.
- Status: Remaining — needs product decision

---

## Low Priority Bugs

### BUG-009 — Hamburger control duplicates accessible name

- Severity: Low
- Category: Accessibility
- Location: Mobile menu button
- File: `components/layout/MobileNav.tsx`
- URL: https://automotonews.in/ (viewport &lt; md)
- Steps to reproduce: Inspect the hamburger button in the accessibility tree / screen reader.
- Expected behavior: One accessible name (“Open menu” / “Close menu”).
- Actual behavior: `aria-label` plus extra `sr-only` text duplicated the name.
- Root cause: Both naming techniques were used together.
- Fix: Keep `aria-label`; remove the extra `sr-only` span (same change set as BUG-006).
- Tests performed: tsc; lint.
- Verification: Local types/lint PASS.
- Status: Fixed in repo

### BUG-010 — No automated tests

- Severity: Low
- Category: Testing
- Location: Repository tooling
- File: `package.json` (no `test` script); no `*.test.*` / e2e files
- URL: n/a
- Steps to reproduce: Run `npm test`.
- Expected behavior: At least smoke coverage for routing, search, compare, and CMS error states.
- Actual behavior: No test runner or test files.
- Root cause: Project was built phase-by-phase without a test suite.
- Fix: Not applied. Introduce tests gradually; do not add a large extra stack.
- Tests performed: Repo glob for test files — none.
- Verification: Confirmed.
- Status: Remaining

### BUG-011 — `sanitizeWpHtml` does not strip `object` / `embed`

- Severity: Low
- Category: Security
- Location: WordPress HTML normalization
- File: `lib/normalize.ts` (`sanitizeWpHtml`); rendered via `components/article/ArticleBody.tsx` `dangerouslySetInnerHTML`
- URL: Any article or CMS policy page with body HTML
- Steps to reproduce: Review sanitizer regexes; note `<script>`, `<iframe>`, `on*` handlers, and `javascript:` are stripped, but `<object>` / `<embed>` are not.
- Expected behavior: Non-editorial embed vectors are removed or tightly allowlisted.
- Actual behavior: `object`/`embed` can pass through if present in WP HTML.
- Root cause: Sanitizer is regex-based and incomplete vs a full HTML policy.
- Fix: Not applied this pass. Extend sanitizer without installing an unnecessary dependency unless needed.
- Tests performed: Code review of `sanitizeWpHtml`.
- Verification: Confirmed in source. No exploit testing against production.
- Status: Remaining

---

## Frontend Bugs

### BUG-004 — Newsletter consent copy does not link Privacy Policy

- Severity: Medium
- Category: UI/UX / Accessibility
- Location: Homepage newsletter form
- File: `components/home/NewsletterFormClient.tsx`
- URL: https://automotonews.in/#newsletter
- Steps to reproduce: Read the consent checkbox label on the homepage.
- Expected behavior: Link to `/privacy-policy`.
- Actual behavior: Plain text mention of Privacy Policy.
- Root cause: Copy not wired to the route.
- Fix: `Link` to `/privacy-policy`.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

### BUG-005 — Missing article images always use the daily placeholder

- Severity: Medium
- Category: UI/UX / Images
- Location: Hero and article cards
- File: `components/article/ArticleCard.tsx`, `components/home/Hero.tsx`, `lib/category-style.ts`
- URL: Cards/hero with no featured image
- Steps to reproduce: Render an article with `coverImage: null`.
- Expected behavior: Category-tone placeholder.
- Actual behavior: Always `cover-daily.svg`.
- Root cause: Hardcoded fallback.
- Fix: `articleCoverSrc()`.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

### BUG-006 — Mobile menu has no backdrop / outside click to close

- Severity: Medium
- Category: Accessibility / UI
- Location: Header
- File: `components/layout/MobileNav.tsx`
- URL: https://automotonews.in/ (mobile)
- Steps to reproduce: Open hamburger; click outside the panel.
- Expected behavior: Overlay closes the menu.
- Actual behavior: No overlay.
- Root cause: Overlay not implemented.
- Fix: Dimmed overlay button.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

### BUG-007 — Search results are capped and have no pagination UI

- Severity: Medium
- Category: Search / Frontend
- Location: Search page
- File: `app/search/page.tsx`
- URL: https://automotonews.in/search?q=EV
- Steps to reproduce: Broad search; look for pagination.
- Expected behavior: Paginated UI.
- Actual behavior: Single 24-item slice.
- Root cause: Page ignored `page` query.
- Fix: Pagination + 12 per page.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

### BUG-009 — Hamburger control duplicates accessible name

- Severity: Low
- Category: Accessibility
- Location: Mobile menu button
- File: `components/layout/MobileNav.tsx`
- URL: https://automotonews.in/ (mobile)
- Steps to reproduce: Inspect accessible name of the hamburger.
- Expected behavior: Single name.
- Actual behavior: `aria-label` + `sr-only`.
- Root cause: Duplicate naming.
- Fix: Removed `sr-only` duplicate.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

---

## Backend Bugs

None in this Next.js repository. There is no in-app controller/service layer beyond `lib/cms.ts` fetching WordPress. WordPress PHP on Hostinger is out of scope except via REST.

---

## API Bugs

None verified in Next.js Route Handlers (`app/api` does not exist). `robots.txt` still disallows `/api/` as a precaution.

WordPress REST is used server-side only (`lib/cms.ts`). Pages already map `CmsRequestError` to `CmsStateMessage`. Browser-visible `/wp-json/*` is a Vercel rewrite to cms (intentional for media/admin after apex cutover).

Remaining product limit (not a 5xx): search ranking still uses at most 50 WordPress `search` hits (see BUG-007 remainder).

---

## Database Bugs

None in this repository. Next.js has no schema, migrations, or ORM. Do not run destructive WordPress database commands.

---

## UI/UX Bugs

### BUG-004 — Newsletter consent copy does not link Privacy Policy

- Severity: Medium
- Category: UI/UX / Accessibility
- Location: Homepage newsletter
- File: `components/home/NewsletterFormClient.tsx`
- URL: https://automotonews.in/#newsletter
- Steps to reproduce: Read consent label.
- Expected behavior: Privacy Policy link.
- Actual behavior: Plain text.
- Root cause: Missing href.
- Fix: Link to `/privacy-policy`.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

### BUG-005 — Missing article images always use the daily placeholder

- Severity: Medium
- Category: UI/UX / Images
- Location: Hero and cards
- File: `components/article/ArticleCard.tsx`, `components/home/Hero.tsx`, `lib/category-style.ts`
- URL: Articles without featured media
- Steps to reproduce: Null `coverImage`.
- Expected behavior: Tone-matched placeholder.
- Actual behavior: Daily placeholder only.
- Root cause: Hardcoded path.
- Fix: `articleCoverSrc()`.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

### BUG-006 — Mobile menu has no backdrop / outside click to close

- Severity: Medium
- Category: Accessibility / UI
- Location: Header
- File: `components/layout/MobileNav.tsx`
- URL: https://automotonews.in/ (mobile)
- Steps to reproduce: Open menu; click outside.
- Expected behavior: Menu closes.
- Actual behavior: No overlay.
- Root cause: Overlay missing.
- Fix: Overlay button.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

### BUG-008 — Sticky mobile ad and header ad reserve empty chrome when AdSense slots are unset

- Severity: Medium
- Category: UI/UX / Mobile / Ads
- Location: Global ads
- File: `components/ads/MobileAnchorAd.tsx`, `components/ads/HeaderAd.tsx`, `app/layout.tsx`
- URL: https://automotonews.in/
- Steps to reproduce: Load site without live AdSense slot IDs.
- Expected behavior: No empty sticky bar unless required for ads review.
- Actual behavior: Persistent reserved placeholders + mobile bottom padding.
- Root cause: Always-on AdSlot placeholders.
- Fix: Not applied — needs owner decision.
- Tests performed: Code review.
- Verification: Confirmed in source.
- Status: Remaining

---

## Responsive Bugs

Not fully screenshot-tested at 320–1920px this pass. No confirmed overflow-x root-cause bug was filed.

Notes (not filed as bugs until reproduced visually):

- Primary desktop nav uses `overflow-x-auto` for long Marathi/English labels.
- Compare tray + mobile ad stacking is handled in `styles/globals.css` (`body:has([data-compare-tray])`).
- BUG-008 empty sticky ad is the main mobile viewport concern.

---

## Accessibility Bugs

### BUG-006 — Mobile menu has no backdrop / outside click to close

- Severity: Medium
- Category: Accessibility / UI
- Location: Header
- File: `components/layout/MobileNav.tsx`
- URL: https://automotonews.in/ (mobile)
- Steps to reproduce: Open menu; try to dismiss by clicking the page.
- Expected behavior: Overlay + Escape dismiss (focus trap still not implemented).
- Actual behavior: Escape worked; no overlay. Focus trap is still absent (not separately filed; treat as follow-up on BUG-006).
- Root cause: Overlay missing.
- Fix: Overlay added. Focus trap not added.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo (focus trap remaining as follow-up)

### BUG-009 — Hamburger control duplicates accessible name

- Severity: Low
- Category: Accessibility
- Location: Mobile menu button
- File: `components/layout/MobileNav.tsx`
- URL: https://automotonews.in/ (mobile)
- Steps to reproduce: Inspect accessible name.
- Expected behavior: One name.
- Actual behavior: Duplicated name.
- Root cause: `aria-label` + `sr-only`.
- Fix: Removed `sr-only`.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

### BUG-004 — Newsletter consent copy does not link Privacy Policy

- Severity: Medium
- Category: UI/UX / Accessibility
- Location: Newsletter form
- File: `components/home/NewsletterFormClient.tsx`
- URL: https://automotonews.in/#newsletter
- Steps to reproduce: Tab to consent copy; look for a policy link.
- Expected behavior: Discoverable policy link.
- Actual behavior: No link.
- Root cause: Plain text.
- Fix: Link added.
- Tests performed: tsc; lint.
- Verification: Local PASS.
- Status: Fixed in repo

Working a11y already present (not bugs): `lang="mr"`, skip link, `Noto Sans Devanagari`, visible `:focus-visible`.

---

## Broken Links

Full automated crawl is **not complete**. `docs/BROKEN_LINKS.md` has not been generated.

Smoke (live GET, 2026-08-16) — **200**: `/`, `/compare`, `/search`, `/about-us`, `/privacy-policy`, `/disclaimer`, `/contact`, `/electric-vehicles-evs`, `/car-news`, `/daily-update`, `/sportsbikes`, `/upcoming-cars`, `/hybrid-vehicles`, `/off-roading`, `/bikes-news`, `/auto-technology`, `/sports-car`, `/logo.svg`, `/robots.txt`, `/sitemap.xml`, `/ads.txt`.

No empty `href="#"` found in `*.ts` / `*.tsx`. Footer `SOCIAL_LINKS` is empty by design (no placeholder social URLs).

---

## Broken URLs

### BUG-001 — Missing pages return HTTP 200 instead of 404

- Severity: High
- Category: Routing / SEO
- Location: Catch-all routes
- File: `app/(category)/[category]/page.tsx`, `app/(category)/[category]/[slug]/page.tsx`
- URL: https://automotonews.in/this-page-should-not-exist-xyz123
- Steps to reproduce: Open a fake path.
- Expected behavior: 404.
- Actual behavior: 200 soft 404.
- Root cause: Metadata without `notFound()`.
- Fix: `notFound()` in metadata + page.
- Tests performed: Live curl; tsc; lint.
- Verification: Production pending deploy.
- Status: Fixed in repo — production verification pending deploy

Working URL behavior (not bugs): `/contact-us` → 301 `/contact`; `/ev-registration-india-2025` → 301 `/electric-vehicles-evs/ev-registration-india-2025`; wrong category on a real slug → 301 to the preferred path.

---

## Routing Bugs

### BUG-001 — Missing pages return HTTP 200 instead of 404

- Severity: High
- Category: Routing / SEO
- Location: Catch-all routes
- File: `app/(category)/[category]/page.tsx`, `app/(category)/[category]/[slug]/page.tsx`
- URL: https://automotonews.in/this-page-should-not-exist-xyz123
- Steps to reproduce: Request unknown category/article.
- Expected behavior: 404.
- Actual behavior: 200.
- Root cause: `generateMetadata` success path for missing records.
- Fix: `notFound()`.
- Tests performed: Live curl; tsc; lint.
- Verification: Production pending deploy.
- Status: Fixed in repo — production verification pending deploy

### BUG-003 — Category `?page=` beyond last page returns 200 with empty list

- Severity: Medium
- Category: Routing
- Location: Category pagination
- File: `app/(category)/[category]/page.tsx`
- URL: https://automotonews.in/electric-vehicles-evs?page=99
- Steps to reproduce: Invalid page number on a real category.
- Expected behavior: 404.
- Actual behavior: 200 empty list.
- Root cause: No `totalPages` check.
- Fix: `notFound()` when `page > totalPages`.
- Tests performed: Live curl; tsc; lint.
- Verification: Production pending deploy.
- Status: Fixed in repo — production verification pending deploy

---

## SEO Bugs

### BUG-001 — Missing pages return HTTP 200 instead of 404

- Severity: High
- Category: Routing / SEO
- Location: Catch-all routes
- File: `app/(category)/[category]/page.tsx`, `app/(category)/[category]/[slug]/page.tsx`
- URL: https://automotonews.in/this-page-should-not-exist-xyz123
- Steps to reproduce: Crawl a fake URL; check status.
- Expected behavior: 404 so crawlers do not treat it as a real page.
- Actual behavior: 200 + noindex title.
- Root cause: Soft 404.
- Fix: Hard 404 via `notFound()`.
- Tests performed: Live curl; tsc; lint.
- Verification: Production pending deploy.
- Status: Fixed in repo — production verification pending deploy

### BUG-002 — `www.automotonews.in` does not 301 to apex

- Severity: High
- Category: Deployment / SEO
- Location: DNS / hosting
- File: n/a
- URL: https://www.automotonews.in/
- Steps to reproduce: Open www vs apex.
- Expected behavior: 301 to https://automotonews.in/
- Actual behavior: 200 on www.
- Root cause: DNS/host.
- Fix: Owner-approved 301. Do not change DNS from this session.
- Tests performed: Live curl.
- Verification: Confirmed live.
- Status: Remaining — needs owner approval

SEO notes (not separate bugs unless they persist after deploy): sitemap exists; robots disallow `/search` and `/api/`; search pages are `noindex`; JSON-LD Organization/WebSite/Article is implemented. Production sitemap homepage `lastmod` was **2026-08-11** (ISR/deploy age), not filed as a code defect.

---

## Performance Bugs

None newly measured this pass. Do not treat historical `.lighthouse-home.json` (localhost) as current production Core Web Vitals.

Existing mitigations (not bugs): CMS `revalidate` 300/600s; AdSense `lazyOnload`; `next/image` AVIF/WebP; font `display: swap`.

BUG-008 empty reserved ad chrome can hurt mobile content viewport; filed under UI/UX.

---

## Security Bugs

### BUG-011 — `sanitizeWpHtml` does not strip `object` / `embed`

- Severity: Low
- Category: Security
- Location: CMS HTML sanitizer
- File: `lib/normalize.ts`
- URL: Article and policy pages
- Steps to reproduce: Code review of `sanitizeWpHtml`.
- Expected behavior: Dangerous embed tags stripped.
- Actual behavior: `object`/`embed` not stripped; scripts/iframes/handlers are.
- Root cause: Incomplete regex sanitizer.
- Fix: Not applied.
- Tests performed: Source review only. No production exploit testing.
- Verification: Confirmed in source.
- Status: Remaining

Other notes (not bugs): `.env.example` has placeholders only; do not commit `.env.local`; `poweredByHeader: false`.

---

## Browser Compatibility Bugs

Not tested on Firefox, Safari, Edge, Android Chrome, or iOS Safari this pass. No confirmed cross-browser defect filed.

---

## Content/Data Bugs

No code bugs. Editorial / data issues are tracked separately and must not be silently rewritten:

See `docs/CONTENT_ISSUES.md`:

- Compare `lib/vehicles.ts` is labeled sample/provisional in the UI.
- `SOCIAL_LINKS` empty until real URLs exist.
- Newsletter provider not connected (form honestly says so).

---

## Deployment/Infrastructure Bugs

### BUG-002 — `www.automotonews.in` does not 301 to apex

- Severity: High
- Category: Deployment / SEO
- Location: DNS / hosting
- File: n/a
- URL: https://www.automotonews.in/
- Steps to reproduce: Request www without following assumptions about apex.
- Expected behavior: 301 to apex.
- Actual behavior: 200.
- Root cause: DNS/host.
- Fix: Owner-approved domain redirect.
- Tests performed: Live curl.
- Verification: Confirmed.
- Status: Remaining — needs owner approval

Related (not new bugs): `/wp-*` rewrites in `next.config.ts` and `vercel.json`; CMS cutover notes in `docs/CMS_SUBDOMAIN_ISSUE.md`. No Docker/CI YAML in repo (BUG-010 adjacent).

---

## Fixed Bugs

| ID | Summary | Status |
|----|---------|--------|
| BUG-001 | Soft 404 → `notFound()` | Fixed in repo; production pending deploy |
| BUG-003 | Out-of-range category `?page=` | Fixed in repo; production pending deploy |
| BUG-004 | Newsletter Privacy Policy link | Fixed in repo |
| BUG-005 | Category-aware cover placeholders | Fixed in repo |
| BUG-006 | Mobile menu overlay | Fixed in repo |
| BUG-007 | Search pagination | Fixed in repo |
| BUG-009 | Duplicate hamburger accessible name | Fixed in repo |

Details: `docs/FIX_LOG.md` (FIX-001 … FIX-006).

---

## Remaining Bugs

| ID | Summary | Reason | Next action |
|----|---------|--------|-------------|
| BUG-002 | www does not 301 to apex | DNS/hosting | Owner approval, then domain 301 |
| BUG-008 | Empty AdSense chrome | Product/policy | Decide whether to hide slots when not live |
| BUG-010 | No automated tests | No suite yet | Add gradual smoke tests |
| BUG-011 | Sanitizer misses object/embed | Not patched | Extend `sanitizeWpHtml` |
| BUG-001/003 (prod) | Live still 200 | Not deployed | Deploy, then re-curl |
| — | Full link crawl | Not run | `docs/BROKEN_LINKS.md` |
| — | Responsive screenshots | Not run | 320–1920 visual pass |
| — | Search WP cap 50 | Product limit | Optional later if volume grows |
| — | Mobile nav focus trap | Follow-up to BUG-006 | Optional a11y enhancement |

---

## Verification Results

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | PASS (baseline and after fixes) |
| `npm run lint` | PASS (baseline and after fixes) |
| `npm test` | Not executed — script does not exist |
| `npm run typecheck` | Not executed — script does not exist |
| `npm run build` | Not re-run this audit pass |
| E2E / Playwright | Not executed |
| Live homepage | 200 |
| Live article | 200 |
| Live unknown category | **200** (BUG-001, pre-deploy) |
| Live unknown article | **200** (BUG-001, pre-deploy) |
| Live category `?page=99` | **200** (BUG-003, pre-deploy) |
| Live `/contact-us` | 301 → `/contact` |
| Live flat permalink | 301 → `/{category}/{slug}` |
| Live www | **200**, 0 redirects (BUG-002) |
| Live `/robots.txt` `/sitemap.xml` `/ads.txt` | 200 |
| Browser console | Not captured this pass |
| Responsive screenshot set | Not captured this pass |
