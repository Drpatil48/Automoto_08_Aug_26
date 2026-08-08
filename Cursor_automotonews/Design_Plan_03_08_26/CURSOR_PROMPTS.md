# AutoMotoNews.in — Cursor Prompts

Paste these into Cursor's Composer/Agent one at a time (Cmd/Ctrl+I). Don't run all
of them in a single giant prompt — go step by step and review each change.

## 0. Run this first, always
> Inspect this WordPress theme's folder structure. List the template files
> (header, footer, homepage, single post, archive), the main CSS file(s), and any
> JS files handling the homepage stat counters and the "Compare Before You Buy"
> tool. Don't change anything yet — just report back what you find.

## Phase 1 — Homepage

**1. Design tokens**
> Add CSS custom properties (variables) at the top of the main stylesheet for a
> Clean Editorial design system: background #FAFAF8, text #1A1A1A, muted text
> #6B6B6B, divider #E5E2DC, primary accent #B3251E, EV accent #0F6E5C. Add
> font-family variables for a serif headline font (Newsreader, falling back to
> Georgia) and a sans body/UI font (Inter, falling back to system-ui). Don't apply
> them anywhere yet — just define the variables.

**2. Fix the stat counters**
> Find the homepage block showing "0 Articles / 0 Monthly Readers / 0 Car Reviews
> / 0 Free Content" — it's currently displaying zero for all four. Show me where
> these values come from (hardcoded, a counter script, or a database query) so I
> can decide whether to populate real numbers or remove this section.

**3. Replace dashboard-style language**
> Replace the labels "LIVE_FEED", "TELEMETRY EXCLUSIVE", and "VIEW FULL METRICS"
> on the homepage with editorial equivalents: "Latest", "Featured Story", and
> "Read Full Story". Keep the underlying links/functionality the same — just
> change the visible text and remove any all-caps monospace/dashboard styling
> tied to those labels.

**4. Hero section**
> Redesign the homepage hero section using the new design tokens: one large
> featured story with a serif headline (36–48px), the featured image using the
> full-width layout it already has, and a single clear "Read Full Story" button
> styled with the primary accent color. Remove any telemetry-style timestamp
> formatting and replace with a simple readable date.

**5. Top Stories list**
> Rebuild the "Top Stories" list to use a consistent 16:9 thumbnail for every
> item, a thin hairline divider (#E5E2DC) between list items instead of the
> current styling, and the category name as a small uppercase label above each
> headline in the muted text color.

**6. Category grid sections**
> Apply the same card design to "EV Spotlight", "Car Launches & Reviews", and
> "Bikes & Performance" sections: consistent 16:9 image, serif headline, muted
> metadata line (category + date + read time), and hairline divider — no drop
> shadows or heavy borders. Make sure all three sections look visually identical
> in structure, just different content.

**7. Compare tool visual polish**
> Restyle the "Compare Before You Buy" tool to match the new Clean Editorial
> palette — light background, hairline borders instead of boxes with shadows,
> and the primary accent color for the "Compare" button. Don't change its
> functionality, only the visual styling.

**8. Guides section**
> Restyle "Latest Guides" (Best EV Under 15L, Top Family SUV Picks, Mileage
> Kings, Best City Bikes) as tappable cards with a short one-line description
> under each title, using the new design tokens. If these currently link
> nowhere, flag that instead of guessing a destination.

**9. Mobile check**
> Check the homepage at a 375px viewport width. Fix any elements that overflow,
> overlap, or become illegible at that width, especially the hero section and
> the category grids.

## Phase 2 preview (for later)
> Redesign the single article/review template: serif headline, body text at
> 17–18px with 1.6 line height and a max ~700px content width, a metadata row
> (category, date, read time) below the headline, and — for review posts
> specifically — style any spec/price tables as a clean bordered comparison
> block using the new design tokens.
