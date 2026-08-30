# Bugs Audit & Resolution Log — AutomotoNews.in

| ID | Severity | Type | URL | Steps | Actual | Expected | Cause | Fix | Files | Status |
|---|---|---|---|---|---|---|---|---|---|---|
| **BUG-001** | High | UI/Responsive | `/car-news/...` | 1. Open article on mobile (375px). 2. View WP tables/images. | Content overflowed viewport horizontally. | All elements fit container width. | Missing `max-width` & `overflow-x` on WP HTML. | Added CSS rules for `.article-body img` & `table`. | `styles/globals.css` | FIXED |
| **BUG-002** | High | Layout | `/car-news/...` | 1. Open article on mobile. 2. Scroll to bottom. | Sticky share bar covered footer copyright. | Reserved bottom padding for sticky bar. | Missing padding-bottom on body element. | Added `body:has(...)` padding reservation. | `styles/globals.css` | FIXED |
| **BUG-003** | Medium | Responsive | `/compare?a=nexon-ev&b=tiago-ev` | 1. Open compare tool on narrow screen (<390px). | Spec columns got squished together. | Scrollable spec table with readable columns. | Missing min-width constraint on columns. | Added `min-w-[130px]` & `overflow-x-auto`. | `components/compare/SpecComparisonTable.tsx` | FIXED |
| **BUG-004** | Low | UI | `/car-news/...` | 1. View author bio for multi-word author names. | Initials overflowed circular container. | Clean 2-letter initials (e.g. DP). | `.map(p => p[0]).join("")` had no length limit. | Added `.slice(0, 2)` to cap initials. | `components/article/AuthorBio.tsx` | FIXED |
| **BUG-005** | Medium | Functional | `/car-news/...` | 1. Load article in Chrome. 2. Tap Play Audio. | Default fallback voice used instead of Marathi. | Synthesis uses Marathi voice after population. | Chrome populates `getVoices()` asynchronously. | Added `onvoiceschanged` event listener. | `components/article/ArticleAudioPlayer.tsx` | FIXED |
| **BUG-006** | High | UI/UX | `/` | 1. Open homepage on mobile. 2. Click 3-line menu icon. | Semi-transparent drawer caused text bleed. | 100% solid dark opaque drawer. | Drawer rendered inside header stacking context. | Used React Portal (`createPortal`) to `document.body`. | `components/layout/MobileNav.tsx` | FIXED |
| **BUG-007** | High | UI/Responsive | `/car-news/...` | 1. Open article on narrow mobile (<380px). | WhatsApp button text wrapped vertically. | Single-line horizontal text with SVG icon. | Missing `whitespace-nowrap` & `shrink-0` constraints. | Added `whitespace-nowrap` & SVG icons. | `components/article/StickyMobileShareBar.tsx` | FIXED |
| **BUG-008** | Low | Functional | `/compare?a=Nexon-EV` | 1. Navigate to `/compare?a=Nexon-EV` (uppercase ID). | Vehicle lookup failed and returned not found error. | Case-insensitive ID resolution. | Exact string comparison in `getVehicleById`. | Added `.trim().toLowerCase()` to ID lookup. | `lib/vehicles.ts` | FIXED |

---

## Detailed Bug Reports & Resolutions

### BUG-001 — Raw WP HTML image & table overflow on mobile
- **Severity**: High
- **Type**: UI/Responsive
- **URL**: `http://localhost:3000/car-news/new-maruti-suzuki-victoris-2025`
- **Steps**:
  1. Open article page on mobile width (375px).
  2. Scroll to body content containing WP images and tables.
- **Actual**: Content overflowed the viewport horizontally.
- **Expected**: All images and tables scale within container width.
- **Cause**: Missing `max-width: 100%` and `overflow-x: auto` on WP inner elements.
- **Fix**: Added CSS rules for `.article-body img` and `table` in `styles/globals.css`.
- **Files**: `styles/globals.css`
- **Status**: FIXED

---

### BUG-002 — Article mobile bottom bar overlaps footer text
- **Severity**: High
- **Type**: Layout
- **URL**: `http://localhost:3000/car-news/new-maruti-suzuki-victoris-2025`
- **Steps**:
  1. Open article page on mobile device.
  2. Scroll down to bottom footer.
- **Actual**: `StickyMobileShareBar` covered footer copyright links.
- **Expected**: Reserved bottom padding for sticky bar.
- **Cause**: Missing padding-bottom on body element when sticky share bar is present.
- **Fix**: Added `body:has([aria-label="Mobile article quick actions"])` padding reservation in `styles/globals.css`.
- **Files**: `styles/globals.css`
- **Status**: FIXED

---

### BUG-003 — Spec comparison table squished on narrow viewports
- **Severity**: Medium
- **Type**: Responsive
- **URL**: `http://localhost:3000/compare?a=nexon-ev&b=tiago-ev`
- **Steps**:
  1. Open compare tool on narrow screen (<390px).
- **Actual**: Spec table columns got squished together.
- **Expected**: Horizontally scrollable spec table with readable columns.
- **Cause**: Missing min-width constraint on table columns.
- **Fix**: Added `min-w-[130px]` column constraints and `overflow-x-auto` wrapper in `SpecComparisonTable.tsx`.
- **Files**: `components/compare/SpecComparisonTable.tsx`
- **Status**: FIXED

---

### BUG-004 — Multi-word author initials overflow avatar circle
- **Severity**: Low
- **Type**: UI
- **URL**: `http://localhost:3000/car-news/new-maruti-suzuki-victoris-2025`
- **Steps**:
  1. View author bio box for multi-word author names.
- **Actual**: Initials string exceeded circular container bounds.
- **Expected**: Clean 2-letter initials (e.g. DP for Dhanraj Patil).
- **Cause**: `.split(" ").map(p => p[0]).join("")` rendered all initials without length limit.
- **Fix**: Added `.slice(0, 2)` to cap initials to 2 characters max.
- **Files**: `components/article/AuthorBio.tsx`
- **Status**: FIXED

---

### BUG-005 — Web Speech synthesis voices array empty on initial mount
- **Severity**: Medium
- **Type**: Functional
- **URL**: `http://localhost:3000/car-news/new-maruti-suzuki-victoris-2025`
- **Steps**:
  1. Load article page in Chrome or Safari.
  2. Tap Play Audio reader button.
- **Actual**: Synthesis used default fallback voice because voices array was not yet loaded.
- **Expected**: Synthesis dynamically picks Marathi/Indian voice after browser populates voices.
- **Cause**: Chrome/Blink populates `window.speechSynthesis.getVoices()` asynchronously.
- **Fix**: Added `window.speechSynthesis.onvoiceschanged` event listener to update utterance.
- **Files**: `components/article/ArticleAudioPlayer.tsx`
- **Status**: FIXED

---

### BUG-006 — Mobile menu drawer semi-transparent background causes text bleed
- **Severity**: High
- **Type**: UI/UX
- **URL**: `http://localhost:3000/`
- **Steps**:
  1. Open homepage on mobile.
  2. Click 3-line hamburger menu icon.
- **Actual**: Semi-transparent backdrop allowed page text underneath to show through.
- **Expected**: 100% solid, crisp dark opaque drawer with zero background bleed.
- **Cause**: Drawer was rendered inside header stacking context with semi-transparent gradient.
- **Fix**: Used React Portal (`createPortal`) to attach drawer to `document.body` with solid `bg-zinc-950` and `z-[9999]`.
- **Files**: `components/layout/MobileNav.tsx`
- **Status**: FIXED

---

### BUG-007 — WhatsApp button text wraps vertically on mobile share bar
- **Severity**: High
- **Type**: UI/Responsive
- **URL**: `http://localhost:3000/car-news/new-maruti-suzuki-victoris-2025`
- **Steps**:
  1. Open article page on narrow mobile screen (<380px).
- **Actual**: WhatsApp button text wrapped vertically (`W H A T S A P P`).
- **Expected**: Clean single-line horizontal text and rich SVG icon.
- **Cause**: Missing `whitespace-nowrap` and `shrink-0` flex layout constraints.
- **Fix**: Added `whitespace-nowrap`, `shrink-0`, and high-definition SVG icons.
- **Files**: `components/article/StickyMobileShareBar.tsx`, `components/ui/SocialIcons.tsx`
- **Status**: FIXED
