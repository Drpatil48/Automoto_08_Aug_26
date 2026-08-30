# Phase 9 — Launch Checklist

**Project:** AutomotoNews.in (Next.js App Router)  
**Date audited:** 2026-08-10  
**Scope:** Full app QA + launch preparation (no deploy, no inventing credentials)  
**Prior docs:** [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md)

**Verdict:** The Next.js application is **not ready to claim production launch**. Core content/SEO/routing work from Phases 1–8 is in good shape, but several configuration, editorial, and monetization items remain blocking.

---

## READY

Items implemented in code and verified or strongly evidenced during this audit.

### Pages & routing
- [x] Homepage (`/`) with hero, top stories, category rails, compare preview, newsletter section
- [x] Category archives (`/{category}`) with pagination, breadcrumbs, sidebar ad slot
- [x] Article pages (`/{category}/{slug}`) with body, author, related, ads, JSON-LD
- [x] Compare (`/compare`) with selectors, table, tray, unavailable-state handling
- [x] Search (`/search`) with empty / results / error states; `noindex`
- [x] Policy routes: `/about-us`, `/privacy-policy`, `/disclaimer`, `/contact` (CMS-backed)
- [x] Friendly `not-found` page with home + topic links
- [x] Phase 8 redirects: flat WP posts → preferred paths; `/contact-us` → `/contact`; `/about` → `/about-us`; `/category/...` structural maps; `/?p=` via `proxy.ts`

### SEO (technical)
- [x] Per-page metadata helpers (`lib/seo.ts`): title, description, canonical, OG, Twitter
- [x] `metadataBase` + Organization / WebSite JSON-LD in root layout
- [x] Article / NewsArticle JSON-LD when author + publish date exist
- [x] BreadcrumbList JSON-LD on home, category, article, compare, search, static pages
- [x] `app/sitemap.ts` emits preferred URLs only (no flat WP paths, no `/contact-us`)
- [x] `/search` removed from sitemap (aligned with `robots` disallow + noindex)
- [x] `app/robots.ts` allows crawl, disallows `/search` and `/api/`, points at sitemap
- [x] Missing article/category metadata returns `noIndex` (reduces soft-404 risk)
- [x] Internal links: primary nav, footer policy links, breadcrumbs, related articles, category rails

### Content integration
- [x] Central CMS layer (`lib/cms.ts`) + normalize (`lib/normalize.ts`)
- [x] Handles missing images/authors/categories/excerpts reasonably
- [x] ISR revalidate (posts ~300s, categories ~600s, sitemap ~3600s)
- [x] Contact Form 7 HTML is stripped/replaced with an honest notice including `contact@automotonews.in`

### AdSense (code scaffolding)
- [x] `public/ads.txt` present with live publisher line `pub-2585492241467499`
- [x] `AdSlot` reserved min-heights (banner / rectangle / anchor) to limit CLS
- [x] Placements: header, in-article, sidebar, mobile anchor — labeled “Advertisement”
- [x] Script loads only when `NEXT_PUBLIC_ADSENSE_CLIENT_ID` starts with `ca-pub-`
- [x] No fake AdSense click encouragement; placeholders are not styled as CTAs
- [x] Public ad placeholders no longer expose env var names

### Forms (honest UI states)
- [x] Newsletter: email validation, consent required, status message — does **not** fake successful delivery
- [x] Contact: non-functional WP CF7 no longer presented as a working form; mailto to `contact@automotonews.in` provided

### Mobile / a11y foundations
- [x] Mobile nav with Escape close, `aria-expanded` / `aria-controls`, body scroll lock
- [x] Skip link, `:focus-visible` outline, `min-h-11` touch targets on primary controls
- [x] Devanagari-capable fonts (Inter + Noto Sans Devanagari via `next/font`)
- [x] Semantic landmarks (`header` / `main` / `footer` / labeled `nav`)
- [x] Compare table caption + row headers; images use alt text where provided

### Production hygiene (Next app)
- [x] No `YOUR_CHANNEL_HERE` / `YOUR_PACE_HERE` in Next source (footer `SOCIAL_LINKS` is empty until real URLs exist)
- [x] No invented WhatsApp / social / AdSense credentials in app code
- [x] No leftover “Phase 2/3 stub success” newsletter copy
- [x] `.env.example` documents WP, site URL, AdSense, GA4, newsletter placeholders

---

## CONFIGURATION REQUIRED

Must be set by a human on the host / in secrets before production cutover. **Do not invent values.**

| Item | Env / artifact | Status |
|------|----------------|--------|
| Production site URL | `NEXT_PUBLIC_SITE_URL=https://automotonews.in` | **Provided by owner** (also documented in `.env.example` / `.env.local`) |
| WordPress API | `WP_API_URL=https://automotonews.in/wp-json/wp/v2` | **Provided by owner** (also documented in `.env.example` / `.env.local`) |
| GA4 measurement ID | `NEXT_PUBLIC_GA_ID` | **Not wired in app yet** — add ID + script integration |
| AdSense client | `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | **Still required later** — owner does not have AdSense yet; leave unset |
| AdSense unit slots | `NEXT_PUBLIC_ADSENSE_SLOT_*` | Optional until units created; leave unset for now |
| Auto ads flag | `NEXT_PUBLIC_ADSENSE_AUTO_ADS` | Keep `false` / unset until reviewed |
| Ad panels / slots | `AdSlot` + placement components | **Retained** — without client/slot IDs they stay in reserved-height placeholder mode (no live ads) |
| Newsletter provider | `NEWSLETTER_*` (documented in `.env.example`) | **Not implemented** — architecture pending credentials |
| Contact delivery | `SITE_CONTACT_EMAIL` (`contact@automotonews.in`) — mailto on `/contact` + footer; CF7 still replaced with honest notice | **Provided by owner** |
| Hosting / DNS cutover | Vercel (or equiv.) → `automotonews.in` | Human-owned; **not done in Phase 9** |
| Search Console | Submit sitemap after cutover | Human |
| Keep `wp-content/uploads` reachable | Image allowlist already in `next.config` | Confirm on cutover |

---

## CONTENT / EDITORIAL WORK REQUIRED

Items that live in WordPress or require owner decisions — not inventable in code.

### Blocking for AdSense / trust
1. **Live WordPress theme still exposes placeholders** (verified 2026-08-10 on `https://automotonews.in/`):
   - `YOUR_CHANNEL_HERE` (YouTube)
   - `YOUR_PACE_HERE` (Facebook)
   - Fake WhatsApp: `wa.me/919876543210`
   - After Next cutover these disappear from the Next footer (empty `SOCIAL_LINKS`), but **WP theme leftovers matter until DNS switches**, and any remaining WP pages/widgets must be cleaned.
2. **Contact email provided** — app uses owner email `contact@automotonews.in` (`SITE_CONTACT_EMAIL` in `lib/constants.ts`) on `/contact` and in the footer. About Us in WP may still show a stray `]` typo (`contact@automotonews.in]`) — fix in WordPress when convenient.
3. **Real social URLs** — add to `lib/constants.ts` `SOCIAL_LINKS` only after confirming channels; leave empty rather than placeholders.
4. **Privacy Policy** — WP content already covers Google AdSense / DART cookies (good). Re-read after AdSense settings change; consider cookie-consent if serving EU traffic.
5. **Originality** — confirm articles are original / have analysis (AdSense helpful-content risk); editorial review only.
6. **Compare vehicle dataset** (`lib/vehicles.ts`) — provisional sample specs with prices/ranges. UI now warns they are provisional. Replace with OEM-verified data or set unknown fields to `null` before marketing the tool as factual.
7. **Author bios** — strengthen E-E-A-T in WordPress author profiles where thin.

### Non-blocking polish
- Share buttons / TOC mentioned in PLAN but not required to ship core news reading
- Optional English toggle / hreflang (explicitly out of current phases)
- Fix About page email typo `contact@automotonews.in]`

---

## MANUAL VERIFICATION REQUIRED

Run these on a production-like host after env is set. Phase 9 local verification is recorded in the completion report; humans must repeat post-deploy.

### Functional routes
- [ ] `/` loads live WP stories
- [ ] `/electric-vehicles-evs` (and other categories) paginate
- [ ] Sample article preferred path renders title, date, author, images, related
- [ ] `/compare` select two vehicles; tray add/remove; mobile table scroll
- [ ] `/search?q=ev` returns ranked results
- [ ] `/about-us`, `/privacy-policy`, `/disclaimer`, `/contact`
- [ ] Unknown path → 404 UI

### SEO spot checks (View Source)
- [ ] Canonical = preferred path (`https://automotonews.in/...`)
- [ ] OG + Twitter tags present
- [ ] JSON-LD Organization, WebSite, BreadcrumbList, Article/NewsArticle
- [ ] `/sitemap.xml` preferred URLs only
- [ ] `/robots.txt` allows `/`, lists sitemap, disallows `/search`

### Redirects (expect **301**, one hop)
- [ ] `/ev-registration-india-2025/` → `/electric-vehicles-evs/ev-registration-india-2025`
- [ ] `/contact-us/` → `/contact`
- [ ] `/about/` → `/about-us`
- [ ] `/category/electric-vehicles-evs/` → `/electric-vehicles-evs`
- [ ] `/?p={knownId}` → preferred article path (query stripped)

### Ads
- [ ] `https://automotonews.in/ads.txt` reachable after cutover
- [ ] With client+slot IDs set: units fill without layout jump
- [ ] Without IDs: reserved space only, labeled Advertisement
- [ ] No ads disguised as navigation

### Forms
- [ ] Newsletter validation (invalid email / missing consent)
- [ ] Newsletter reports not-configured until provider wired
- [x] Contact page does not show a fake working CF7 submit
- [x] Contact path usable via `contact@automotonews.in` (mailto + displayed email)

### Mobile / performance / a11y
- [ ] Sticky header + hamburger on small viewport
- [ ] Marathi headlines wrap without overflow
- [ ] Lighthouse / CWV on mobile home + article (targets LCP &lt; ~2.5s, INP &lt; ~200ms, CLS &lt; ~0.1)
- [ ] Keyboard: skip link, menu, compare selects, search
- [ ] Focus visible; heading order sane; form labels present
- [ ] Contrast check on muted text / header

### Launch ops
- [ ] GA4 fires page views
- [ ] Sitemap submitted in Search Console
- [ ] AdSense application only after placeholders/social/contact fixed
- [ ] Owner **explicitly approves** deploy / DNS cutover

---

## Problems found (summary)

### Critical (block “production ready” claim)
1. GA4 not implemented / not configured  
2. Newsletter has no provider — cannot accept real subscribers  
3. Contact CF7 non-functional headless (mitigated: honest notice + `contact@automotonews.in` mailto)  
4. AdSense client/slots unset → no live ads (OK for review prep scaffolding, not for monetization claim)  
5. Live WP still has placeholder social / fake WhatsApp (pre-cutover risk + AdSense rejection risk if mirrored)  
6. Vehicle compare sample specs not verified  

### Non-critical
1. No share buttons / TOC  
2. About email typo in WP  
3. Sitemap previously included `/search` (fixed)  
4. Ad slot env hints were visible to users (fixed)  
5. Soft metadata titles on missing content lacked `noIndex` (fixed)  
6. **Next.js streaming soft-404 status:** unknown category/article URLs render the 404 UI and `noindex`, but `curl` against the production server may still report **HTTP 200** on the initial streamed response (`NEXT_HTTP_ERROR_FALLBACK;404` in the RSC payload). Re-check with Search Console URL Inspection after deploy; treat as framework behavior to monitor, not invent a custom status hack unless confirmed broken for crawlers.  

---

## Explicit launch statement

**The site is not ready to claim production launch** until configuration, editorial contact/social cleanup, newsletter/GA wiring decisions, and human deploy approval are complete.
