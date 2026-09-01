# AutomotoNews.in — Automated E2E Test Suite (Playwright)

This directory contains the automated end-to-end regression test suite for **AutomotoNews.in**.

## 🚀 Running the Tests

### 1. Run Complete E2E Suite
```bash
npm run test:e2e
```

### 2. Run with UI Mode (Interactive Debugger)
```bash
npx playwright test --ui
```

### 3. Run Specific Test Suite
```bash
# Category & Article pages
npx playwright test tests/e2e/category-and-articles.spec.ts

# Vehicle Compare & Search Tool
npx playwright test tests/e2e/search-and-compare.spec.ts

# Compare Tray Flow
npx playwright test tests/e2e/compare-tray.spec.ts

# Theme System (Light & Dark Mode)
npx playwright test tests/e2e/theme-toggle.spec.ts

# Article Interactive (Font resizer, Audio reader, Scroll progress)
npx playwright test tests/e2e/article-interactive.spec.ts

# Homepage & Navigation
npx playwright test tests/e2e/home-and-nav.spec.ts

# Newsletter API & Form Submissions
npx playwright test tests/e2e/newsletter-and-api.spec.ts

# Static Legal Pages, Robots & Sitemap
npx playwright test tests/e2e/static-and-seo.spec.ts

# Links & 301 Redirects
npx playwright test tests/e2e/links-and-redirects.spec.ts
```

### 4. View Test Reports
```bash
npx playwright show-report
```

---

## 📁 Test Coverage Summary

| Test File | Description | Critical Checks |
| :--- | :--- | :--- |
| [`home-and-nav.spec.ts`](./e2e/home-and-nav.spec.ts) | Homepage, Header, Mobile Nav Drawer | Branding, console errors, network errors, drawer opening/closing, escape key handling. |
| [`theme-toggle.spec.ts`](./e2e/theme-toggle.spec.ts) | Light / Dark Theme System | Header toggle, storage sync, FOUC prevention, refresh persistence, cross-route persistence. |
| [`category-and-articles.spec.ts`](./e2e/category-and-articles.spec.ts) | Category Archives & Article Detail Views | Strict 1:1 H1 hierarchy, breadcrumbs, JSON-LD schemas. |
| [`article-interactive.spec.ts`](./e2e/article-interactive.spec.ts) | Article Interactive Features | Font resizer, speech audio reader, scroll progress bar. |
| [`search-and-compare.spec.ts`](./e2e/search-and-compare.spec.ts) | Search Engine & Vehicle Comparison Engine | Query execution, car vs car, bike vs bike mode switching, category mismatch validation. |
| [`compare-tray.spec.ts`](./e2e/compare-tray.spec.ts) | Compare Tray | Vehicle selection, tray bottom float, max 2 limit, clear tray, Compare Now routing. |
| [`newsletter-and-api.spec.ts`](./e2e/newsletter-and-api.spec.ts) | Newsletter API & Form UI | HTTP 400 validation for invalid email/missing consent, graceful fallback, UI form submission. |
| [`static-and-seo.spec.ts`](./e2e/static-and-seo.spec.ts) | Policy Pages, Robots, Sitemap, 404 Handler | `/about-us`, `/contact`, `/disclaimer`, `/privacy-policy`, `/robots.txt`, `/sitemap.xml`, 404 page. |
| [`links-and-redirects.spec.ts`](./e2e/links-and-redirects.spec.ts) | Links, Security & 301 Redirects | Skip-to-content accessibility, rel="noopener" on external links, flat WP URL 301 redirects. |

---

## ⚙️ Configuration

Test configuration is maintained in [`playwright.config.ts`](../playwright.config.ts):
- **Desktop Chrome** (1280x720)
- **Mobile Chrome** (Pixel 7 / 393x851)
- Auto webServer starter (`npm run start` on port 3000)
- Parallel execution with 4 workers
