# AutomotoNews.in — UI Bugs & Resolution Plan (31 Aug 2026)

This document tracks all visual, layout, and contrast bugs identified across AutomotoNews.in during the Kinetic Automotive dark theme redesign, along with their resolution steps.

---

## 🐛 Identified UI Bugs

### 1. Vehicle Comparison Tool & Spec Table Contrast (`CompareTool.tsx` & `SpecComparisonTable.tsx`)
- **Issue**: Embedded comparison widgets used legacy light-theme classes (`bg-background`, `border-border`, `text-muted`), causing bright white boxes, unstyled table cells, and poor text contrast on dark backgrounds.
- **Fix**: Updated background to `bg-zinc-950/80`, borders to `border-zinc-800/80`, table headers to dark zinc, and text to high-contrast `text-zinc-100`.

### 2. Vehicle Selector & Card Styling (`VehicleSelector.tsx` & `VehicleCard.tsx`)
- **Issue**: Select dropdown inputs (`<select>`) used default browser white backgrounds with black text, breaking the dark theme aesthetic. Vehicle cards lacked dark elevation and hover states.
- **Fix**: Styled `<select>` with `bg-zinc-900 border-zinc-800 text-white focus:border-red-600`. Redesigned `VehicleCard.tsx` with rounded dark surfaces, brand badges, and red accent buttons.

### 3. Compare Floating Tray Alignment (`CompareTray.tsx`)
- **Issue**: Floating tray used hardcoded mobile offset `bottom-[4.5rem]` and light-mode borders, clashing with the modern header and fixed footer.
- **Fix**: Set floating tray to `bottom-0`, added glassmorphism `bg-zinc-950/95 backdrop-blur border-t border-zinc-800`, and styled action buttons with red accents (`Compare Now →`).

### 4. Article Detail View Styling (`app/(category)/[category]/[slug]/page.tsx`, `QuickSummaryBox.tsx`, `AuthorBio.tsx`)
- **Issue**: Article pages used light background containers, raw unformatted prose text, and basic metadata boxes.
- **Fix**: Wrapped article body in dark kinetic container (`bg-zinc-950/70 border-zinc-800/80 rounded-2xl`), styled `KEY TAKEAWAYS` with red accent borders (`bg-red-950/20 border-red-900/50`), and upgraded verified editor badges in `AuthorBio.tsx`.

### 5. Search Page UI (`app/search/page.tsx` & `SearchPills.tsx`)
- **Issue**: Search input field and empty state message used light grey borders and light text.
- **Fix**: Upgraded search form input with dark zinc styling, red submit button, interactive trending search pills (`border-zinc-800 bg-zinc-900/80`), and responsive 2-column card grid.

### 6. Legal & Policy Pages (`app/about-us/page.tsx`, `privacy-policy`, `disclaimer`, `contact`, `lib/static-page.tsx`)
- **Issue**: Legal pages lacked consistent dark theme card wrappers and clear heading indicators.
- **Fix**: Wrapped content in kinetic dark cards (`bg-zinc-950/70 border-zinc-800/80 rounded-2xl`) with red category headers and clean typography.

---

## 🛠️ Resolution Progress

- [x] Fix `CompareTool.tsx` theme tokens & spec comparison table
- [x] Fix `VehicleSelector.tsx` select input styling
- [x] Fix `VehicleCard.tsx` card layout
- [x] Fix `CompareTray.tsx` floating bottom tray positioning & glassmorphism
- [x] Fix `app/(category)/[category]/[slug]/page.tsx` & `ArticleBody.tsx` article page styling
- [x] Fix `QuickSummaryBox.tsx` & `AuthorBio.tsx` dark theme styling
- [x] Fix `app/search/page.tsx` & `SearchPills.tsx` search page dark theme
- [x] Fix Legal & Policy pages (`lib/static-page.tsx`)
- [x] Verify local build with `npm run build`
