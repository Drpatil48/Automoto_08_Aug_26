# Implementation Plan — Technical SEO & Google Discover Optimization

Implement technical SEO enhancements, Google Discover meta tags (`max-image-preview:large`), enriched `NewsArticle` JSON-LD structured data, and author E-E-A-T metadata for [AutomotoNews.in](https://automotonews.in/).

## User Review Required

> [!IMPORTANT]
> - **Google Discover Image Meta**: Adding `maxImagePreview: 'large'` and `maxSnippet: -1` to root and page-level metadata.
> - **Structured Data**: Upgrading `NewsArticle` schema to include rich `publisher`, `author`, `isAccessibleForFree`, and language tags.

## Proposed Changes

### 1. SEO Metadata Engine (`lib/seo.ts`)

#### [MODIFY] [lib/seo.ts](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/lib/seo.ts)
- Add Discover-specific robots tags (`maxImagePreview: 'large'`, `maxSnippet: -1`, `maxVideoPreview: -1`) to `buildPageMetadata`.
- Enrich `buildArticleMetadata` with OpenGraph article parameters (`publishedTime`, `modifiedTime`, `authors`, `section`, `tags`).
- Enhance `buildArticleJsonLd` with `isAccessibleForFree: true`, enriched publisher logo object, and author E-E-A-T `sameAs` signals.

---

### 2. Root Layout Metadata (`app/layout.tsx`)

#### [MODIFY] [app/layout.tsx](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/app/layout.tsx)
- Ensure root `metadata` contains `robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } }`.

---

### 3. SEO Helper Utilities (`lib/normalize.ts`)

#### [MODIFY] [lib/normalize.ts](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/lib/normalize.ts)
- Add `ensureEnglishSlug(slug)` helper to guarantee clean, ASCII URL slugs without Devanagari encoding breakages.

---

## Verification Plan

### Automated Tests
- Type checking: `npx tsc --noEmit`
- Linting: `npm run lint`

### Manual Verification
- View source of homepage and article page to verify:
  - `<meta name="robots" content="..., max-image-preview:large">`
  - Canonical links pointing to apex `https://automotonews.in`
  - Valid `NewsArticle` JSON-LD schema
