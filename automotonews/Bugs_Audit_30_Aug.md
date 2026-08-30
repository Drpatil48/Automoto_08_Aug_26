# UI/UX Bug Audit & Resolution Plan (30 Aug 2026)

This document lists all identified UI/UX issues, responsive layout bugs, and accessibility improvements across **AutomotoNews.in**, alongside step-by-step resolutions.

---

## 📋 Identified UI/UX Bugs & Severity

| Bug ID | Component / Area | Description | Severity | Status |
|---|---|---|---|---|
| **BUG-01** | `ArticleBody.tsx` / `globals.css` | Raw WP article HTML `<img>` and `<table>` tags overflow container on mobile screens. | 🔴 High | ✅ RESOLVED |
| **BUG-02** | `app/(category)/[category]/[slug]/page.tsx` | Mobile article page lacks bottom padding (`pb-24`), causing `StickyMobileShareBar` to cover footer links. | 🔴 High | ✅ RESOLVED |
| **BUG-03** | `SpecComparisonTable.tsx` | Spec table columns get squished on narrow mobile viewports (<390px). | 🟡 Medium | ✅ RESOLVED |
| **BUG-04** | `AuthorBio.tsx` | Multi-word author name initials overflow circular avatar badge. | 🟢 Low | ✅ RESOLVED |
| **BUG-05** | `ArticleAudioPlayer.tsx` | Speech synthesis voices loaded asynchronously by Chrome/Safari return empty on first render. | 🟡 Medium | ✅ RESOLVED |
| **BUG-06** | `app/compare/page.tsx` | Compare page missing bottom padding for floating `CompareTray`. | 🟡 Medium | ✅ RESOLVED |

---

## 🛠️ Step-by-Step Fix Execution Log

1. **Fixed BUG-01 & BUG-02**: Added responsive CSS rules in `styles/globals.css` for `.article-body img`, `.article-body table`, and reserved bottom padding for `StickyMobileShareBar` (`pb-20`).
2. **Fixed BUG-03**: Wrapped `SpecComparisonTable.tsx` in a horizontal scroll container with min-width column constraints (`min-w-[130px]`).
3. **Fixed BUG-04**: Capped author initials to 2 characters max (`.slice(0, 2)`) in `AuthorBio.tsx`.
4. **Fixed BUG-05**: Added `window.speechSynthesis.onvoiceschanged` listener to `ArticleAudioPlayer.tsx` to handle async voice loading.
5. **Fixed BUG-06**: Added bottom padding reservation in `styles/globals.css` for floating `[data-compare-tray]`.
