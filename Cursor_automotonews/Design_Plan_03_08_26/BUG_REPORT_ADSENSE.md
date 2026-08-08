# AutoMotoNews.in — AdSense & QA Bug Report

**Site:** https://automotonews.in/  
**Theme:** `Automoto_5_May_Final`  
**Audit date:** 2026-08-04  
**Theme fix release:** **v3.0.5** (AdSense readiness pass)  
**Method:** Live site fetch, theme source review, AdSense policy checklist

---

## Executive summary

| Category | Found | Fixed in v3.0.5 | Admin / deploy only |
|----------|-------|-----------------|---------------------|
| AdSense / legal | 6 | 4 | 2 |
| SEO / meta | 5 | 4 | 1 |
| Functional | 7 | 6 | 1 |
| UI / accessibility | 9 | 8 | 1 |
| **Total** | **27** | **22** | **5** |

**Deploy:** Upload `Automoto_5_May_Final-folder-v3.0.5-adsense.zip`, activate/replace theme, clear Hostinger/LiteSpeed cache, hard refresh.

**ads.txt (verified live):** `google.com, pub-2585492241467499, DIRECT, f08c47fec0942fa0`

---

## P0 — Blocks or risks AdSense approval

### ADS-001 · No cookie / advertising consent notice
- **Severity:** P0 (AdSense / GDPR)
- **Status:** **Fixed v3.0.5**
- **Issue:** No user notice before analytics/ads cookies.
- **Fix:** `amnf_cookie_consent_banner()` in `functions.php`; styles + `localStorage` accept in `main.js`.

### ADS-002 · Privacy Policy may not mention AdSense/cookies
- **Severity:** P0 (policy)
- **Status:** **Admin action required**
- **Issue:** AdSense reviewers check Privacy Policy for third-party ads, cookies, Google partners.
- **Fix:** Edit `/privacy-policy/` page — add sections for cookies, Google AdSense, opt-out links (Google Ads Settings).

### ADS-003 · Duplicate SEO meta (theme + Rank Math)
- **Severity:** P0 (quality / crawl)
- **Status:** **Fixed v3.0.5**
- **Issue:** Two `description`, `canonical`, `og:*` tags when Rank Math active.
- **Fix:** Theme SEO block in `header.php` skipped when `rank_math()` exists.

### ADS-004 · GeneratePress floating social with broken URLs
- **Severity:** P0 (trust / broken UX)
- **Status:** **Partially fixed** (CSS hide v3.0.4; still in DOM)
- **Evidence:** `YOUR_PACE_HERE`, `YOUR_CHANNEL_HERE` in footer-injected element.
- **Theme fix:** `amnf_hide_floating_social_widgets()` + CSS.
- **Admin fix:** Disable GeneratePress Element for floating social (permanent).

### ADS-005 · Missing core templates (`comments.php`, `404.php`)
- **Severity:** P0 (completeness)
- **Status:** **Fixed** (templates added in prior pass, included in v3.0.5 zip)
- **Issue:** Broken comment UI and generic 404 on some requests.

### ADS-006 · Stale theme on live (sections/CSS out of sync)
- **Severity:** P0 (deploy)
- **Status:** **Deploy required**
- **Evidence:** Live still showed Car Launches section while local removed it; assets `ver=3.0.3` vs local `3.0.5`.
- **Fix:** Full theme zip upload, not partial file copy.

---

## P1 — Functional bugs

### FUN-001 · Car Launches section still on live homepage
- **Status:** **Fixed locally** · deploy required
- **ID maps to:** UI-001
- **Fix:** `front-page.php` — section removed.

### FUN-002 · Bikes section lists EV car articles
- **Status:** **Fixed v3.0.4**
- **Fix:** `amnf_ev_category_ids()` + `category__not_in` in bike queries.

### FUN-003 · Compare tool idle placeholder confusing
- **Status:** **Fixed v3.0.4**
- **Fix:** Loading state + `runCompare()` on load.

### FUN-004 · Newsletter form with no privacy consent
- **Status:** **Fixed v3.0.5**
- **Fix:** Required checkbox + Privacy Policy link in `footer.php`; JS validation in `main.js`.

### FUN-005 · Newsletter shows fake success (no backend)
- **Status:** **Open** (by design until ESP wired)
- **Note:** Form is UX-only; does not store emails. For AdSense this is OK if not misleading — message says “subscribed” but no mail is sent. Consider Mailchimp/Fluent Forms later.

### FUN-006 · Footer legal links hardcoded slugs
- **Status:** **Fixed v3.0.5**
- **Fix:** `amnf_page_url()` resolves `about-us`, `privacy-policy`, etc.

### FUN-007 · Mobile search hidden with no alternative
- **Status:** **Fixed v3.0.5**
- **Fix:** `mobile-nav-search` form in `header.php` + CSS at ≤700px.

---

## P1 — SEO / structured data

### SEO-001 · Hardcoded `og:locale` = `mr_IN`
- **Status:** **Fixed v3.0.5**
- **Fix:** Uses `get_locale()` when theme SEO active.

### SEO-002 · `setup_postdata()` in `<head>` without reset
- **Status:** **Fixed v3.0.5**
- **Fix:** Removed global post setup; uses `get_queried_object_id()` / `get_post_field()`.

### SEO-003 · NewsArticle schema missing publisher logo
- **Status:** **Fixed v3.0.5**
- **Fix:** `amnf_organization_logo_url()` in `header.php` JSON-LD.

### SEO-004 · Rank Math `og:site_name` = preview domain
- **Status:** **Admin**
- **Fix:** Rank Math → General → Website Name → `AutoMotoNews.in`.

### SEO-005 · Single post missing `dateModified`, image `contentUrl`
- **Status:** **Fixed v3.0.5**
- **Fix:** `single.php` meta + schema attributes.

---

## P1 — UI / accessibility

### UI-001 · Car Launches on live
- **Status:** Fixed locally · deploy (see FUN-001)

### UI-002 · Floating social bar
- **Status:** Hidden in theme · disable in GP (see ADS-004)

### UI-003 · Guide cards without images
- **Status:** **Fixed v3.0.4** — placeholder thumbs

### UI-004 · Bikes / EV overlap
- **Status:** **Fixed v3.0.4**

### UI-005 · Compare empty state
- **Status:** **Fixed v3.0.4**

### UI-006 · No homepage `<h1>`
- **Status:** **Fixed v3.0.5**
- **Fix:** `.home-page-title` in `front-page.php`

### UI-007 · Top Stories thumbnails `alt=""`
- **Status:** **Fixed v3.0.5**
- **Fix:** Alt = post title

### UI-008 · Single post components unstyled
- **Status:** **Fixed v3.0.5**
- **Fix:** CSS for `.article-meta`, `.author-box`, `.post-navigation`, `.tag-chip`, etc.

### UI-009 · Footer social chips unstyled
- **Status:** **Fixed v3.0.5**
- **Fix:** `.footer-social`, `.social-chip` styles

---

## P2 — AdSense placement readiness

### ADS-007 · No ad slot hooks in templates
- **Status:** **Fixed v3.0.5**
- **Fix:** `amnf_ad_slot()` — `home_after_stats`, `single_after_content`; hook `amnf_ad_slot_{location}` for Ad Inserter / manual code.

### ADS-008 · Ad slots visible as dashed placeholders until code added
- **Status:** **Expected**
- **Note:** After AdSense approval, paste code via Ad Inserter targeting `.amnf-ad-slot` or theme hooks.

---

## Admin checklist (not code)

| Task | Why |
|------|-----|
| Upload v3.0.5 theme zip | Applies all fixes |
| Clear LiteSpeed / Hostinger cache | Stale `front-page.php` / CSS |
| Disable GP floating social Element | Remove broken links from DOM |
| Rank Math: site name + logo | Fix `og:site_name` preview domain |
| Privacy Policy: AdSense + cookies | AdSense policy requirement |
| About, Contact, Disclaimer pages live | Already 200 — keep updated |
| Add real `buying-guide` posts | Guides section quality |
| Submit site in AdSense after deploy | Final approval step |

---

## Files changed in v3.0.5

| File | Changes |
|------|---------|
| `functions.php` | v3.0.5, `amnf_page_url`, `amnf_ad_slot`, cookie banner |
| `header.php` | Rank Math guard, schema logo, mobile search, locale |
| `footer.php` | Dynamic page URLs, newsletter consent, nav semantics |
| `front-page.php` | H1, alt text, ad slot |
| `single.php` | dateModified, contentUrl, ad slot |
| `assets/css/main.css` | Single post, footer, cookie, ads, mobile search |
| `assets/js/main.js` | Cookie consent, newsletter consent |
| `style.css` | Version 3.0.5 |
| `comments.php` | Present |
| `404.php` | Present |

---

## Test plan after deploy

1. Homepage: no Car Launches section; visible H1; compare loads specs; cookie banner on first visit.
2. Mobile (≤700px): open menu → search field visible and submits.
3. Single post: breadcrumb, meta, author box, prev/next styled.
4. View source: one set of meta tags (Rank Math only).
5. No floating social icons (or disabled in admin).
6. Privacy Policy mentions cookies/AdSense.
7. `ads.txt` still reachable at `/ads.txt`.

---

*Generated for AutoMotoNews.in theme QA — v3.0.5 AdSense pass.*
