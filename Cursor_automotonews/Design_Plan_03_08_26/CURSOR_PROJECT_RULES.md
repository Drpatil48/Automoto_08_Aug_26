# AutoMotoNews.in — Cursor Project Rules

Place this file at `.cursor/rules/automotonews.mdc` in your repo (or as `.cursorrules`
in the repo root if your Cursor version doesn't support the rules folder). Cursor
reads this automatically and should follow it for every prompt in this project.

## 1. What this project is
- Site: automotonews.in — Marathi/English automotive news & reviews (EVs, car
  launches, bike reviews, comparisons, buying guides)
- Platform: WordPress, custom theme (currently "automotonews-future")
- Hosting: Hostinger
- Audience: Indian readers researching car/bike purchases — mobile-heavy traffic,
  mixed Marathi/English content
- Business goal: reader trust + time-on-page + ad/affiliate revenue, so speed and
  readability matter as much as looks

## 2. Tech stack & structure
- PHP templates (header.php, footer.php, front-page.php or home.php, single.php,
  archive.php, functions.php)
- Custom CSS — do not assume a framework (Tailwind/Bootstrap) is present
- Vanilla or lightly-bundled JS for interactive bits (search, compare tool, counters)
- Images served from wp-content/uploads, mostly .webp

**Before making changes: always inspect the actual file structure first.**
Don't assume file names — read the theme folder and confirm what's really there.

## 3. Design system — Clean Editorial direction
Chosen direction: light, magazine-style, content-first. Replace any
dashboard/telemetry-style UI language ("LIVE_FEED", "TELEMETRY EXCLUSIVE",
"VIEW FULL METRICS") with editorial language — this is a news magazine, not a
dashboard.

**Color palette**
- Background: `#FAFAF8` (warm off-white — easier on the eyes for long reads)
- Text: `#1A1A1A` (ink, not pure black)
- Muted text / metadata: `#6B6B6B`
- Divider / rule lines: `#E5E2DC`
- Primary accent (CTAs, links, active nav): `#B3251E`
- EV-tag accent (reserve only for EV content, so readers learn the color-code): `#0F6E5C`

**Typography**
- Headlines: a serif (Newsreader / Source Serif 4, fallback Georgia) — magazine feel
- Body/UI: a clean sans (Inter, fallback system-ui) — metadata, nav, buttons, captions
- Scale: H1 40–48px desktop / 28–32px mobile, H2 28–32px, body 17–18px
- Body line height: 1.6

**Layout principles**
- Generous whitespace; thin hairline rules instead of heavy card borders/shadows
- Consistent 16:9 image ratio across all card thumbnails
- One clear focal point per section — never two competing "heroes" on one screen
- Category tag as a small uppercase label above the headline, not a loud colored badge

## 4. What NOT to do
- Don't rewrite functions.php wholesale — make targeted, reviewable edits
- Don't remove existing SEO meta / schema markup without an equivalent replacement
- Don't hardcode English-only copy — Marathi headlines/content must keep working
- Don't introduce a CSS framework unless explicitly asked
- Don't silently remove ad slots or affiliate links — flag them instead

## 5. Performance & SEO non-negotiables
- Every image: `width`/`height` attributes + `loading="lazy"` (except the hero image)
- Web fonts: use `font-display: swap` and preconnect to the font host
- Preserve existing meta tags (og:, twitter:, canonical)
- Mobile-first CSS — this audience is majority mobile

## 6. Working style
- One change at a time; explain what changed and why in plain terms
- After any homepage/template change, check it at a 375px viewport
- Flag anything uncertain instead of guessing (e.g. "I don't see where X is defined")
