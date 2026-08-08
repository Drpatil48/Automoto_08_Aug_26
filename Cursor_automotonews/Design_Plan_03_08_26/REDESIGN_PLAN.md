# AutoMotoNews.in — Redesign Plan (Clean Editorial)

Priority order: **Homepage first**, then everything else. Each phase lists goals,
concrete tasks, and a "done when" check.

## Phase 0 — Safety net (do this before anything else)
- [x] Create a new git branch: `redesign/clean-editorial`
- [ ] Take a full backup via Hostinger (Files + Database) before touching the live theme
- [ ] Set up a staging copy if your Hostinger plan allows it, so changes aren't live
      until you review them
- **Done when**: you can revert to the current site in one click if something breaks

## Phase 1 — Homepage (current priority)
Goals: fix visual hierarchy, replace telemetry-style UI language with editorial
tone, fix the broken/zeroed stat counters.

- [x] Fix the "0 Articles / 0 Monthly Readers / 0 Car Reviews / 0 Free Content"
      counters — currently showing 0; either populate real numbers or remove the block
- [x] Replace "LIVE_FEED", "TELEMETRY EXCLUSIVE", "VIEW FULL METRICS" with editorial
      equivalents ("Latest", "Featured Story", "Read Full Story")
- [x] Redesign hero section: one large featured story, clean serif headline, single
      clear CTA
- [x] Rebuild "Top Stories" list with consistent thumbnail ratio + hairline dividers
- [x] Apply the new color palette & typography as CSS variables site-wide (centralized
      for easy future changes)
- [x] Rework category sections (EV Spotlight, Car Launches & Reviews, Bikes &
      Performance) into one consistent card grid
- [x] Polish "Compare Before You Buy" visually to match the new design (functionality
      stays the same — just needs the editorial skin)
- [x] Compare tool: vehicle thumbnail headers, visual pickers, editorial spec layout
- [x] Restyle "Latest Guides" as clear tappable cards, not bare text links
- **Done when**: homepage has one clear focal point, no leftover dashboard-style
  labels, consistent card design throughout, and looks right at 375px, 768px, and
  1440px widths

## Phase 2 — Article & Review template
- [ ] Improve reading typography (serif headline, larger body text, ~65–75 character
      line length)
- [ ] Add a clear metadata row: category tag, date, read time, author if available
- [ ] Style spec tables for review posts (price, mileage, features) as a clean
      comparison block
- [ ] Related-articles section at the end, matching the new card system
- **Done when**: a reader can scan a review's key specs in 5 seconds and read the
  full article comfortably on mobile

## Phase 3 — Mobile & Speed
- [ ] Audit and fix layout shift (CLS) from images missing dimensions
- [ ] Lazy-load below-the-fold images
- [ ] Test the nav menu (ELECTRIC / REVIEWS / SUV dropdowns) on a real phone —
      confirm tap targets are large enough
- [ ] Run PageSpeed Insights before/after and note the score
- **Done when**: mobile PageSpeed score improves and nav/menus work cleanly on
  a real phone

## Phase 4 — Compare tool & Guides expansion
- [ ] Make "Compare Before You Buy" fully functional if it isn't already
- [ ] Flesh out "Latest Guides" (Best EV Under 15L, Top Family SUV Picks, etc.)
      into real linked pages if they aren't already
- **Done when**: both features are fully functional, not placeholders

## Phase 5 — SEO & bilingual polish
- [ ] Confirm mixed Marathi/English titles render cleanly in the new fonts
      (Devanagari support)
- [ ] Re-check meta descriptions, image alt text, and schema markup are intact
      after the redesign
- **Done when**: Marathi text displays cleanly in the new fonts, and the Lighthouse
  SEO score is unchanged or better

## Phase 6 — QA & launch
- [ ] Cross-browser check (Chrome, Safari mobile)
- [ ] Merge `redesign/clean-editorial`, push to Hostinger
- [ ] Monitor analytics for 48 hours post-launch
- **Done when**: live site matches staging, no console errors, traffic/engagement
  steady or improved
