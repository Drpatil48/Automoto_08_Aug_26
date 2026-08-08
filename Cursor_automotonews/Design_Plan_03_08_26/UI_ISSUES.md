# AutoMotoNews.in — UI/UX Audit

**Site:** https://automotonews.in/  
**Theme on live:** `Automoto_5_May_Final` (assets reported `ver=3.0.3`)  
**Audit date:** 2026-08-04  
**Method:** Live HTML fetch + theme source review (no wp-admin login required for this pass)

---

## Summary

| Priority | Open | Fixed in repo |
|----------|------|----------------|
| P0       | 2    | 2 (pending deploy) |
| P1       | 4    | 3 |
| P2       | 5    | 1 |
| Admin    | 3    | — |

---

## P0 — Broken or highly visible

### UI-001 · Car Launches & Reviews still on live homepage
- **Status:** Fixed locally · **Deploy required**
- **Evidence:** Live HTML contains `id="cars"` / `cars-heading` (section should have been removed in v3.0.2+).
- **Cause:** `front-page.php` on server is out of sync with `assets` (partial theme upload or cache).
- **Fix:** Deploy full theme zip including `front-page.php`; clear Hostinger / LiteSpeed cache.

### UI-002 · Floating social bar (GeneratePress Element) with broken links
- **Status:** Fixed in theme v3.0.4 (hide + admin note)
- **Evidence:** `wp_footer` injects `.amn-floating-social` with `facebook.com/YOUR_PACE_HERE`, `youtube.com/@YOUR_CHANNEL_HERE`.
- **Impact:** Sticky icons on left (desktop) / bottom (mobile); bad links; clashes with Clean Editorial layout.
- **Theme fix:** Late `wp_footer` CSS + existing `main.css` hide rules.
- **Admin fix:** Appearance → Elements → disable/delete the floating social Hook element (recommended permanent fix).

---

## P1 — UX quality

### UI-003 · Latest Guides cards have no thumbnails
- **Status:** Fixed in v3.0.4
- **Evidence:** Fallback guide cards render only `card-body` (no `guide-card-img`).
- **Fix:** Editorial placeholder thumbs with category tint on fallback guides.

### UI-004 · Bikes & Performance shows EV/car articles
- **Status:** Fixed in v3.0.4
- **Evidence:** Live section included “EV Battery Life” and “Affordable EV Cars” under Bikes.
- **Cause:** Weak category mapping / fallback `offset` query pulls general posts.
- **Fix:** Exclude EV categories from bike queries; tighter fallbacks.

### UI-005 · Compare tool shows idle placeholder text
- **Status:** Fixed in v3.0.4
- **Evidence:** `#compareResult` HTML: “Pick two models…” until JS runs; confusing if JS slow or fails.
- **Fix:** Empty loading state; JS fills on `runCompare()` (already calls on load).

### UI-006 · Duplicate homepage content across sections
- **Status:** Partially addressed (UI-004); monitor after deploy
- **Evidence:** Same EV posts appear in EV Spotlight, Top Stories, and Bikes.
- **Note:** Some overlap is editorially OK; bike section should not list pure EV car guides.

---

## P2 — Polish & consistency

### UI-007 · Brand label `automotonews-in` (lowercase hyphen)
- **Status:** Open (content/settings)
- **Evidence:** Header/footer `brand-name`, meta `og:site_name` inconsistencies.
- **Fix:** WordPress Settings → General (site title) + Rank Math site name → `AutoMotoNews.in`.

### UI-008 · Rank Math `og:site_name` shows preview domain
- **Status:** Open (admin)
- **Evidence:** `og:site_name` = `automotonews-in.preview-domain.com`.
- **Fix:** Rank Math → General → Website Name.

### UI-009 · Duplicate meta descriptions (theme + Rank Math)
- **Status:** Open (low risk)
- **Evidence:** Two description tags in `<head>`.
- **Fix:** Rank Math handles SEO; consider removing redundant hardcoded meta from `header.php` in a dedicated SEO pass.

### UI-010 · Stats bar “Monthly Readers” is estimated
- **Status:** By design · document only
- **Evidence:** `readers = published * 20` in `amnf_site_stats()`.
- **Suggestion:** Label as “Estimated readers” or remove if misleading.

### UI-011 · Guide fallback links mix category URL styles
- **Status:** Open (minor)
- **Evidence:** Some links use `/electric-vehicles-evs/` vs `/category/sports-bikes/`.
- **Fix:** All use `amnf_get_category_url()` (already in fallback array).

---

## Admin-only (not theme code)

1. **Disable GeneratePress floating social Element** (UI-002 permanent fix).
2. **Update Rank Math** site name and social URLs (UI-007, UI-008).
3. **Create `buying-guide` category posts** so Latest Guides uses real posts with images instead of fallbacks.

---

## Fix log

| ID | Version | File(s) | Notes |
|----|---------|---------|-------|
| UI-002 | 3.0.4 | `functions.php`, `main.css` | Late footer hide for GP Element |
| UI-003 | 3.0.4 | `front-page.php`, `main.css` | Guide placeholder images |
| UI-004 | 3.0.4 | `front-page.php`, `functions.php` | EV exclusion helper |
| UI-005 | 3.0.4 | `front-page.php`, `main.css` | Compare loading state |
| UI-001 | 3.0.2+ | `front-page.php` | Section removed — redeploy needed |

---

## Next audit (after deploy)

- [ ] Mobile 375px: header nav, compare controls, stats bar
- [ ] Single article typography and related posts
- [ ] Category archive card grid
- [ ] PageSpeed CLS on hero and card images
