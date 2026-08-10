# AutomotoNews.in — Cursor Build Plan
**Goal:** Rebuild/extend automotonews.in into a fast, mobile-first, Google AdSense–optimized automotive (car & bike) news website that Cursor can build feature-by-feature.

Drop this file at the root of your Cursor project (e.g. `PLAN.md`). Feed Cursor one **Phase** at a time (Section 9) rather than the whole file at once — it builds far more reliably that way.

---

## 0. Current State (verified from the live site)

- Live at `automotonews.in`, currently running on **WordPress 7.0.3**.
- Content is in **Marathi**, covering EVs, car news, bike news, and upcoming launches.
- Existing categories: Electric Vehicles (EVs), Daily Update, Car News, Sports Bikes, Upcoming Cars.
- Already has the policy pages AdSense expects: About Us, Privacy Policy, Disclaimer, Contact — good foundation, keep and refine these.
- Already has a homepage "Compare Before You Buy" widget and a newsletter signup block — currently non-functional placeholders, worth wiring up for real.
- **Fix before applying for AdSense:** the WhatsApp number and several social links (YouTube/Facebook) on the site are placeholder values (`YOUR_CHANNEL_HERE`, a generic 10-digit number). Google reviewers check these — replace with real links or remove them.

**Key decision Cursor needs from you before Phase 3:** keep WordPress as a *headless* content backend (so you keep the easy WP editor for writing articles, and lose nothing already published) vs. move content into flat Markdown/MDX files inside the repo (simpler, zero backend, but you write posts as files instead of in a CMS UI). The plan below defaults to **headless WordPress**, since it preserves your existing 50+ articles and URLs with the least migration risk. Swap in the MDX approach in Section 2 if you'd rather not run WordPress at all.

---

## 1. Objective & Success Criteria

- **Monetization:** Google AdSense display ads (primary), affiliate/lead links to dealers or comparison tools (optional, later).
- **Audience:** Marathi/Hindi/English-reading car & bike buyers in Maharashtra and across India, majority on mobile.
- **Success looks like:**
  - Passes AdSense review on first submission.
  - Core Web Vitals in the "Good" band on real mobile devices.
  - Ranks for long-tail automotive queries in Marathi and English.
  - Gets picked up in **Google Discover** — for Indian-language publishers this is often the single biggest traffic (and ad revenue) source, bigger than search.

---

## 2. Recommended Tech Stack (current as of mid-2026)

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router, Turbopack, React 19) | Best-in-class for content sites: server components, streaming, image optimization, and it's what you already know from the portfolio project |
| Language | TypeScript | Catches bugs before they hit production |
| Styling | Tailwind CSS | Fast to build a consistent design system, easy for Cursor to generate |
| Content source | Headless WordPress (REST API `/wp-json/wp/v2/`) — *or* local MDX files if you drop WordPress entirely | Keeps existing content/editor workflow |
| Hosting | Vercel (or any Next.js-compatible host) | Native Next.js support, edge caching, free tier is enough to start |
| Images | `next/image` with WebP/AVIF | Required for good LCP scores, which directly affects AdSense RPM |
| Analytics | Google Analytics 4 + Google Search Console | Needed to track what's actually earning |
| Ads | Google AdSense (Auto ads + manual in-content units) | Your monetization layer |

---

## 3. File & Folder Structure

Have Cursor scaffold exactly this — it maps directly to the pages/features below.

```
automotonews/
├── app/
│   ├── layout.tsx                  # root layout: <html>, fonts, header, footer, GA, consent
│   ├── page.tsx                    # homepage
│   ├── (category)/
│   │   ├── [category]/page.tsx     # category listing (EVs, Car News, etc.)
│   │   └── [category]/[slug]/page.tsx  # single article
│   ├── compare/page.tsx            # vehicle comparison tool
│   ├── search/page.tsx
│   ├── about-us/page.tsx
│   ├── privacy-policy/page.tsx
│   ├── disclaimer/page.tsx
│   ├── contact/page.tsx
│   ├── sitemap.ts                  # auto-generated sitemap.xml
│   ├── robots.ts                   # auto-generated robots.txt
│   └── not-found.tsx
├── components/
│   ├── layout/Header.tsx, Footer.tsx, MobileNav.tsx
│   ├── article/ArticleCard.tsx, ArticleBody.tsx, AuthorBio.tsx, RelatedArticles.tsx, TableOfContents.tsx, ShareButtons.tsx
│   ├── ads/AdSlot.tsx, AutoAdsScript.tsx
│   ├── compare/CompareTool.tsx, SpecTable.tsx, CompareTray.tsx
│   ├── home/Hero.tsx, TopStories.tsx, CategoryRail.tsx, NewsletterForm.tsx
│   └── ui/Button.tsx, Badge.tsx, Skeleton.tsx
├── lib/
│   ├── cms.ts                      # fetch helpers for WP REST API (or MDX loader)
│   ├── seo.ts                      # metadata + JSON-LD builders
│   ├── vehicles.ts                 # vehicle spec data for compare tool
│   └── constants.ts                # site name, nav links, social URLs
├── public/
│   ├── ads.txt                     # required for AdSense — must list your publisher ID
│   ├── favicon.ico, logo.svg, og-default.jpg
├── styles/globals.css
├── next.config.ts
├── tailwind.config.ts
├── .env.local                      # WP_API_URL, GA_ID, ADSENSE_CLIENT_ID
└── package.json
```

---

## 4. Content Model

Define these TypeScript types in `lib/types.ts` — Cursor will use them everywhere:

- **Article** — `title, slug, category, tags[], coverImage, excerpt, body, author, publishDate, updatedDate, readTimeMinutes`
- **Category** — EVs, Car News, Bike News, Upcoming Cars, Auto Tech, Comparisons, Daily Update
- **VehicleSpec** (powers the Compare tool and review pages) — `brand, model, variant, priceRangeINR, mileageKmpl or rangeKm(EV), engineOrBattery, seatingCapacity, images[]`
- **Author** — `name, bio, avatarUrl, socialLinks` (needed for Google's E-E-A-T signals — real bylines matter for news/review content)

---

## 5. Pages Required

| Page | Path | Purpose |
|---|---|---|
| Homepage | `/` | Featured story, top stories grid, category rails, compare widget, newsletter |
| Category listing | `/[category]` | Paginated article grid, filterable by tag |
| Article detail | `/[category]/[slug]` | Full article, ads, related posts, share buttons |
| Compare | `/compare` | Pick two vehicles, see specs side-by-side |
| Search | `/search` | Client-side or lightweight server search |
| About Us | `/about-us` | Already exists — required by AdSense |
| Privacy Policy | `/privacy-policy` | Already exists — must mention Google/AdSense cookie & ad personalization use |
| Disclaimer | `/disclaimer` | Already exists |
| Contact | `/contact` | Already exists — use a real email, not just WhatsApp |
| 404 | `not-found.tsx` | Friendly page with links back into content |

---

## 6. Core Features to Build

1. **Homepage sections** (mirrors what already works on the current site — rebuild faster and cleaner): hero/featured story, "Top Stories," "EV Spotlight," "Bikes & Performance," "Compare Before You Buy," "Latest Guides," newsletter signup.
2. **Article page** — `NewsArticle` JSON-LD schema, breadcrumb trail, table of contents for long reads, related-articles module, native share buttons, in-content ad slots every 2–3 sections.
3. **Vehicle Compare tool** — make the existing homepage widget functional: pick two models, render a spec table (price, mileage/range, engine/battery, seating).
4. **Category archive pages** — paginated, filterable, with category-specific hero banner/color.
5. **Search** — instant client-side search over article titles/tags is enough at your current content volume; move to a hosted search service only if the article count grows large.
6. **Newsletter** — wire the existing signup form to a real email service (e.g. Brevo, Mailchimp) instead of leaving it non-functional.
7. **Ad slots** — explicit, reserved-height components so ads never shift layout: below header, 2–3 in-article slots, desktop sidebar rail, mobile sticky footer anchor unit.
8. **Bilingual support** — Marathi is your core content language; keep it primary, optionally add an English toggle for wider reach, with proper `hreflang` tags if you do.
9. **Author bylines & bios** — small addition, meaningful boost to trust signals Google (and AdSense reviewers) look for.

---

## 7. SEO & AdSense Technical Checklist

Google's current AdSense guidance emphasizes genuine editorial value over any specific post count or word count, but a well-run site checklist still holds:

- [ ] `ads.txt` at the domain root listing your AdSense publisher ID (blocks a common rejection reason if missing).
- [ ] `robots.txt` allows crawling; `sitemap.xml` auto-generated and submitted in Search Console.
- [ ] Structured data: `Article`/`NewsArticle`, `BreadcrumbList`, `Organization`, `WebSite`.
- [ ] Unique `<title>` and meta description per page; Open Graph + Twitter Card tags (you already do this well — keep the pattern).
- [ ] Canonical URL on every page.
- [ ] **Core Web Vitals**: LCP under ~2.5s, INP under ~200ms, CLS under ~0.1 — reserve fixed height for every ad slot and image to avoid layout shift, since this is one of the most common AdSense RPM killers.
- [ ] Mobile-first responsive design — most of your traffic will be mobile.
- [ ] All policy pages accurate and complete, with real contact details (fix the placeholder WhatsApp/social links first).
- [ ] Original, substantive content only — Google's Helpful Content system penalizes thin or AI-spun articles, which also hurts AdSense review outcomes.
- [ ] Ad density and placement follows AdSense policy — never place ads in a way that encourages accidental clicks, and don't overload a page with units.

---

## 8. UI/UX & Design Guidelines

- **Mobile-first, thumb-reachable navigation** — sticky header with a visible search icon; most Indian automotive readers are on phones.
- **Devanagari-friendly typography** — pair a Latin font (e.g. Inter) with a proper Devanagari font (e.g. Noto Sans Devanagari) so Marathi headlines render crisply, not as a fallback system font.
- **Card-based article grids** with category tag, publish date, and read time visible at a glance.
- **Spec badges on vehicle cards** — price, mileage/range shown directly on the card so readers don't have to click in just to compare basics.
- **Sticky "Compare" tray** — let users add a car to compare while browsing, then jump to `/compare` with both pre-selected.
- **Reserved space for every ad unit** (fixed aspect-ratio containers) — prevents content jumping around, which both frustrates readers and hurts Core Web Vitals.
- **Category color coding** — e.g. green for EVs, orange for bikes — helps returning readers navigate by sight.
- **Clear breadcrumbs** on every article and category page.

---

## 9. Build Phases — feed these to Cursor one at a time

1. **Phase 1 — Scaffold:** Next.js + TypeScript + Tailwind project, base layout, header, footer, nav.
2. **Phase 2 — Homepage (static/mock data):** build all homepage sections visually before wiring real content.
3. **Phase 3 — Content integration:** connect `lib/cms.ts` to the WordPress REST API (or MDX loader), build dynamic category and article pages.
4. **Phase 4 — SEO layer:** metadata, JSON-LD, `sitemap.ts`, `robots.ts`.
5. **Phase 5 — Ads:** `ads.txt`, `AdSlot` components, AdSense script integration, reserved-space layout.
6. **Phase 6 — Compare tool & search.**
7. **Phase 7 — Performance pass:** target Lighthouse ≥ 90 across all categories; optimize images and fonts.
8. **Phase 8 — Content migration & redirects:** move existing WP articles/URLs over with 301 redirects so you don't lose any SEO value already built up.
9. **Phase 9 — QA & launch:** wire GA4, submit sitemap to Search Console, fix the placeholder contact/social links, then apply for AdSense.

---

## 10. Things to Fix Before You Apply for AdSense

- Replace the placeholder WhatsApp number and `YOUR_CHANNEL_HERE`/`YOUR_PACE_HERE` social links with real ones (or remove those icons).
- Add a real, monitored contact email on the Contact page.
- Make sure Privacy Policy explicitly covers Google/AdSense cookie use and ad personalization, and add a cookie-consent banner if you plan to serve EU visitors.
- Confirm all existing articles are original — no copy-pasted manufacturer press releases without added commentary/analysis.
