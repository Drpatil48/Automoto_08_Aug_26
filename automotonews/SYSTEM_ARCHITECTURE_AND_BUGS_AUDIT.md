# AutomotoNews.in — System Architecture & Comprehensive Inspection Report

This document presents a deep-dive inspection of **AutomotoNews.in**, outlining the application's architecture, data contracts, user flows, routes, forms, external integrations, and verified bug resolutions.

---

## 🏗️ 1. Technical Architecture & Tech Stack

### Frontend Framework
- **Core Stack**: Next.js 16.3.0 (Turbopack, App Router, React 19 Client & Server Components).
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"` in `styles/globals.css`), Vanilla CSS custom variables (`--background`, `--foreground`, `--accent`, `--border`), Glassmorphism effects.
- **Language**: TypeScript (`strict: true`).
- **Typography**: Google Fonts via `next/font/google` (`Inter` for Latin, `Noto_Sans_Devanagari` for Devanagari/Marathi script).

### Backend & API Architecture
- **Server-Side Rendering (SSR) & Static Generation**: Next.js App Router with Incremental Static Regeneration (ISR `revalidate: 300` / `600`).
- **Route Handlers**:
  - `POST /api/newsletter`: Handles email newsletter subscriptions with consent validation.
- **Headless CMS Integration**:
  - REST client (`lib/cms.ts` & `lib/normalize.ts`) fetching live content from WordPress REST API (`WP_API_URL`).
  - Supports graceful fallback to typed mock datasets (`lib/mock-data.ts` & `lib/vehicles.ts`) when `WP_API_URL` is unconfigured.

### Database & Storage Model
- **Primary Data Source**: WordPress REST API (`/wp-json/wp/v2/posts`, `/categories`, `/pages`).
- **Vehicle Catalog Dataset**: Single source of truth typed vehicle catalog (`VEHICLES` in `lib/vehicles.ts`).
- **Client State**:
  - `CompareTrayProvider` (React Context): Manages selected vehicle IDs for comparison.
  - `localStorage`: Persists reader font size preference (`sm`, `base`, `lg`, `xl`).

### Authentication & Authorization
- Read-only public publishing platform — no user login or multi-tenant roles required.

---

## 🗺️ 2. Comprehensive Route Map & User Flows

| Route Path | Page Description | Render Strategy | Key Components |
|---|---|---|---|
| `/` | Homepage | Static / ISR (`revalidate: 300`) | `Hero`, `CategoryRail`, `ComparePreview`, `NewsletterForm`, `Header`, `Footer` |
| `/[category]` | Category Archive Page | Dynamic SSR (`revalidate: 300`) | `Breadcrumbs`, `ArticleCard`, `Pagination` |
| `/[category]/[slug]` | Article Detail Page | Dynamic SSR (`revalidate: 300`) | `Breadcrumbs`, `ArticleAudioPlayer`, `FontResizer`, `ReadingProgressBar`, `ArticleBodyWithAds`, `AuthorBio`, `RelatedArticles`, `StickyMobileShareBar` |
| `/compare` | Vehicle Compare Tool | Client/Server Hybrid (`revalidate: 300`) | `CompareTool`, `VehicleSelector`, `SpecComparisonTable`, `VehicleCard`, `CompareTray` |
| `/search` | Article Search Engine | Dynamic SSR (`noIndex: true`) | `SearchInput`, `ArticleCard`, `Pagination` |
| `/about-us` | Editorial Team & Mission | Static / ISR (`revalidate: 600`) | `Breadcrumbs`, CMS Page Content |
| `/contact` | Contact Page | Static / ISR (`revalidate: 600`) | `Breadcrumbs`, CMS Contact Notice |
| `/privacy-policy` | Privacy Policy | Static / ISR (`revalidate: 600`) | `Breadcrumbs`, Policy Text |
| `/disclaimer` | Editorial Disclaimer | Static / ISR (`revalidate: 600`) | `Breadcrumbs`, Disclaimer Text |
| `/sitemap.xml` | XML Sitemap | Dynamic API Route | `getArticlesForSitemap()` |
| `/robots.txt` | Robots Exclusion File | Dynamic API Route | Next.js Metadata API |

---

## ⚡ 3. Key User Flows & Interactive Elements

### A. Vehicle Comparison Flow (`/compare`)
1. User selects Vehicle A & Vehicle B via category-locked dropdowns or compare tray.
2. System runs `validateComparison(a, b)`:
   - **Bike vs Bike** ✅ Allowed -> Renders Bike Spec Table (Seat Height, Kerb Weight, Top Speed, Brakes).
   - **Car vs Car** ✅ Allowed -> Renders Car Spec Table (Boot Space, Airbags Count, ABS/ESP, Dimensions).
   - **Bike vs Car** ❌ Blocked -> Displays Category Mismatch Banner (`"You can't compare a Bike with a Car."`).
3. Floating `CompareTray` allows adding/removing vehicles across the catalog.

### B. Mobile Navigation & Search Flow (`MobileNav.tsx`)
1. Reader taps 3-line hamburger menu (`☰`).
2. React Portal (`createPortal`) renders full-screen drawer at `document.body` with 100% solid background (`bg-zinc-950`, `z-[9999]`).
3. Reader can type query into embedded search bar (`Search ... (शोध घ्या)`) or click category links.

### C. Article Audio Reading Flow (`ArticleAudioPlayer.tsx`)
1. Reader lands on an article page.
2. `ArticleAudioPlayer` initializes browser Web Speech Synthesis (`speechSynthesis`) matching Marathi (`mr-IN`) / Indian (`en-IN`) voices.
3. Reader taps `▶ LISTEN NOW` to listen to the news out loud with speed selection (`1x`, `1.25x`, `1.5x`, `2x`).

---

## 📝 4. Forms & Validation Rules

1. **Newsletter Form (`NewsletterForm.tsx`)**:
   - **Validation**: Email regex `^[^\s@]+@[^\s@]+\.[^\s@]+$` + GDPR/Privacy Consent Checkbox required.
   - **API Endpoint**: `POST /api/newsletter`.
   - **Error Handling**: Gracefully handles missing consent, invalid email format, and `503 Service Unavailable` when provider is unconfigured.

2. **Search Input (`Header.tsx`, `MobileNav.tsx`, `app/search/page.tsx`)**:
   - **Validation**: Query string trimmed and sanitized; empty queries prompt user.

3. **Compare Vehicle Selector (`VehicleSelector.tsx`)**:
   - **Validation**: Prevents selecting the same vehicle for A & B, restricts choices to match active category mode (`car` vs `bike`).

---

## 🔌 5. External Integrations & Environment Functionality

- **Google AdSense**: `ca-pub-9279294353901258` (`AdSenseScript.tsx`) with layout-reserved slots (`AdSlot.tsx`).
- **Google Analytics 4**: `G-4XEB8LNQF3` (`GoogleAnalyticsScript.tsx`).
- **WordPress REST API**: Configured via `WP_API_URL` environment variable.
- **Web Speech Synthesis API**: Browser-native text-to-speech engine.

---

## 🔍 6. Verified Bug Inspection Log

| Bug ID | Component | Issue Description | Severity | Resolution Status |
|---|---|---|---|---|
| **BUG-01** | `globals.css` | Raw WP HTML `<img>` and `<table>` overflowed mobile container. | 🔴 High | ✅ Fixed (`max-width: 100%`, `overflow-x: auto`) |
| **BUG-02** | `page.tsx` | Mobile article footer text covered by sticky share bar. | 🔴 High | ✅ Fixed (Added `body:has(...)` padding reservation) |
| **BUG-03** | `SpecComparisonTable.tsx` | Spec table squished on narrow screens (<390px). | 🟡 Medium | ✅ Fixed (Added `overflow-x-auto` & `min-w-[130px]`) |
| **BUG-04** | `AuthorBio.tsx` | Multi-word author initials overflowed circular badge. | 🟢 Low | ✅ Fixed (Capped initials to 2 chars `.slice(0, 2)`) |
| **BUG-05** | `ArticleAudioPlayer.tsx` | Speech synthesis voices loaded asynchronously returned empty on mount. | 🟡 Medium | ✅ Fixed (Added `onvoiceschanged` listener) |
| **BUG-06** | `MobileNav.tsx` | Mobile drawer had transparent background bleeding text underneath. | 🔴 High | ✅ Fixed (Used React Portal with solid `bg-zinc-950` & `z-[9999]`) |
| **BUG-07** | `StickyMobileShareBar.tsx` | WhatsApp button text broke vertically (`W H A T S A P P`). | 🔴 High | ✅ Fixed (Added `whitespace-nowrap`, `shrink-0`, and SVG icons) |
