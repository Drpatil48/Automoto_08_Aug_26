# AutoMotoNews fix log

## FIX-001

### Bug
Missing category and article URLs returned HTTP 200 with “not found” metadata (soft 404).

### Root Cause
`generateMetadata` returned a successful document for missing CMS records instead of triggering the App Router not-found response.

### Files Changed
- `app/(category)/[category]/page.tsx`
- `app/(category)/[category]/[slug]/page.tsx`

### Change
Call `notFound()` when the category or article is missing. Keep CMS outage as a noindex metadata fallback, not a 404.

### Verification
- `npx tsc --noEmit`
- `npm run lint`
- Live production still 200 until deploy.

### Result
PASS locally (types/lint). Production verification pending deploy.

---

## FIX-002

### Bug
Category `?page=` past the last page showed an empty archive at 200.

### Root Cause
Page number was clamped to ≥1 but never compared to `totalPages`.

### Files Changed
- `app/(category)/[category]/page.tsx`

### Change
`notFound()` when `page > totalPages` (including in `generateMetadata` for page > 1).

### Verification
Typecheck and lint.

### Result
PASS locally.

---

## FIX-003

### Bug
Newsletter consent text mentioned the Privacy Policy without a link.

### Root Cause
Copy was plain text.

### Files Changed
- `components/home/NewsletterFormClient.tsx`

### Change
Link “Privacy Policy” to `/privacy-policy`.

### Verification
Typecheck and lint.

### Result
PASS locally.

---

## FIX-004

### Bug
Missing featured images always used the daily placeholder.

### Root Cause
Hardcoded `/placeholders/cover-daily.svg` in Hero and ArticleCard.

### Files Changed
- `lib/category-style.ts`
- `components/article/ArticleCard.tsx`
- `components/home/Hero.tsx`

### Change
`articleCoverSrc()` picks EV/bike/car/guide/daily placeholders from category tone.

### Verification
Typecheck and lint.

### Result
PASS locally.

---

## FIX-005

### Bug
Mobile menu had no backdrop; hamburger duplicated its accessible name.

### Root Cause
Panel only toggled from the button; `aria-label` plus extra `sr-only` text.

### Files Changed
- `components/layout/MobileNav.tsx`

### Change
Dimmed overlay closes the menu; removed duplicate `sr-only` name. Escape already closed the menu.

### Verification
Typecheck and lint.

### Result
PASS locally.

---

## FIX-006

### Bug
Search listed at most 24 results with no pagination.

### Root Cause
Search page ignored `page` and requested a single 24-item slice.

### Files Changed
- `app/search/page.tsx`

### Change
Use `searchArticles` pagination (12 per page), Previous/Next, and 404 for out-of-range pages.

### Verification
Typecheck and lint.

### Result
PASS locally.
