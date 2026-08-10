# Steps for Deployment

**Project:** AutomotoNews.in (Next.js App Router)  
**Status:** Guidance only — **do not deploy or change DNS without owner approval.**  
**Related docs:** [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md) · [`PHASE9_LAUNCH_CHECKLIST.md`](./PHASE9_LAUNCH_CHECKLIST.md)

---

## Owner approval required

- [ ] **Do not deploy** the Next.js app to production without explicit owner approval.
- [ ] **Do not change DNS** for `automotonews.in` / `www` without explicit owner approval.
- [ ] **Do not delete WordPress** — WordPress remains the CMS, API source, and media host after cutover.
- [ ] Do not invent credentials (AdSense, GA4, newsletter keys, WP admin passwords).

---

## 1. Architecture after cutover

| Role | System | Notes |
|------|--------|--------|
| Public website | **Next.js** (recommended: Vercel) | Serves pages, SEO, redirects, compare, search |
| CMS / content editing | **WordPress** (Hostinger or current host) | Editors continue to publish in WP admin |
| Content API | **WordPress REST API** | Next fetches via `WP_API_URL` |
| Media / uploads | **WordPress** `wp-content/uploads` | Must stay publicly reachable; Next `next/image` allowlists the WP host |

```
Editors → WordPress (admin + media)
                ↓ REST API
Visitors → Next.js (public site) → renders articles from WP
```

WordPress is **not** removed. After DNS points the apex domain at Next, keep WP reachable for `/wp-json/`, `/wp-admin/`, and `/wp-content/uploads/` (subdomain, same host path, or reverse-proxy rules — owner/hosting decision).

---

## 2. Recommended path: Vercel

### 2.1 Prepare the repo

- [ ] Confirm production build locally: `npm ci && npm run build`
- [ ] Confirm lint: `npm run lint`
- [ ] Push the approved branch to GitHub (owner / CI process)

### 2.2 Create the Vercel project

1. Import the `automotonews` Next.js app into Vercel.
2. Framework preset: **Next.js** (default).
3. Root directory: the folder that contains `package.json` / `app/` (this project root if the repo is only `automotonews`).
4. Build command: `npm run build` (default).
5. Output: Next.js (no static export required).

### 2.3 Environment variables (Vercel → Project → Settings → Environment Variables)

Set for **Production** (and Preview if you want WP-backed previews):

| Variable | Value / guidance |
|----------|------------------|
| `NEXT_PUBLIC_SITE_URL` | `https://automotonews.in` |
| `WP_API_URL` | `https://automotonews.in/wp-json/wp/v2` |

**Optional — leave empty / unset until real IDs exist** (placeholders stay in UI; do not invent values):

| Variable | Guidance |
|----------|----------|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Leave empty until AdSense approval (`ca-pub-…`) |
| `NEXT_PUBLIC_ADSENSE_SLOT_*` | Leave empty until units exist |
| `NEXT_PUBLIC_ADSENSE_AUTO_ADS` | Keep unset / `false` until reviewed |
| `NEXT_PUBLIC_GA_ID` | Leave empty until GA4 property exists (`G-…`); app wiring may still be pending — see Phase 9 |
| `NEWSLETTER_*` | Leave empty until a real provider is chosen |

See `.env.example` for the full list. Never commit `.env.local` or live secrets.

### 2.4 Deploy a Preview first

- [ ] Trigger a Preview deployment (PR or branch deploy).
- [ ] Note the `*.vercel.app` URL.
- [ ] Run the [preview testing checklist](#3-preview-testing-checklist) against that URL.
- [ ] Only after owner approval: promote to Production and proceed to [domain / DNS cutover](#4-domain--dns-cutover).

---

## 3. Preview testing checklist

Test on the Vercel Preview URL (or Production **after** cutover). Prefer HTTPS.

### Core routes

- [ ] **Home** `/` — hero, top stories, category rails, compare preview, newsletter section
- [ ] **Category** e.g. `/electric-vehicles-evs` — list + pagination
- [ ] **Article** preferred path e.g. `/electric-vehicles-evs/{slug}` — title, date, author, images, related
- [ ] **Compare** `/compare` — select vehicles, table, tray; unavailable specs handled honestly
- [ ] **Search** `/search?q=ev` — results; empty query and no-results states
- [ ] **Contact** `/contact` — honest contact path (mailto / notice; not a fake CF7 submit)
- [ ] Policy pages: `/about-us`, `/privacy-policy`, `/disclaimer`
- [ ] Unknown path → friendly 404 UI

### Phase 8 redirects (expect **301**, one hop)

See [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md) for the full map. Spot-check:

- [ ] Flat WP post → preferred path (e.g. `/ev-registration-india-2025/` → `/electric-vehicles-evs/ev-registration-india-2025`)
- [ ] `/contact-us/` → `/contact`
- [ ] `/about/` → `/about-us`
- [ ] `/category/electric-vehicles-evs/` → `/electric-vehicles-evs`
- [ ] `/?p={knownId}` → preferred article path

### SEO smoke checks

- [ ] Canonical / OG tags use `NEXT_PUBLIC_SITE_URL`
- [ ] `/sitemap.xml` and `/robots.txt` load
- [ ] `/ads.txt` reachable on the public host after cutover

Full launch QA: [`PHASE9_LAUNCH_CHECKLIST.md`](./PHASE9_LAUNCH_CHECKLIST.md).

---

## 4. Domain / DNS cutover

**Only with owner approval.**

1. In Vercel: add domain `automotonews.in` (and `www` if used).
2. At the DNS provider (often Hostinger): set the records Vercel shows (typically A / CNAME — follow Vercel’s current UI exactly).
3. Avoid redirect chains (e.g. apex → www → Vercel → another host). Prefer one clean hop.
4. After DNS propagates:
   - [ ] Apex and `www` resolve to Next
   - [ ] WordPress API still answers at the configured `WP_API_URL`
   - [ ] Media URLs under `wp-content/uploads` still load in articles
   - [ ] Re-run the preview checklist on `https://automotonews.in`
5. Post-cutover (human): submit sitemap in Google Search Console; monitor coverage for flat URLs → 301s.

---

## 5. Critical Hostinger / WordPress notes

Keep WordPress alive as the backend even when the public domain points at Next.

- [ ] **Keep WordPress installed** — do not uninstall or wipe the site to “make room” for Next.
- [ ] **Keep the REST API enabled** — `WP_API_URL` must remain reachable from Vercel (CORS/firewall/host allowlists if needed).
- [ ] **Keep media / uploads** — `wp-content/uploads` must stay public; images are loaded from the WP host (see `next.config` image remote patterns).
- [ ] **Do not bulk-delete or bulk-edit WP posts** for the migration — redirects live in Next; content stays in WP.
- [ ] Plan how WP admin and API remain reachable after the apex domain points at Vercel (common options: keep WP on the same hosting with path/proxy rules, or move WP/API/media to a subdomain such as `cms.` / `wp.` — **owner decides**; update `WP_API_URL` and image allowlists if the WP host URL changes).
- [ ] Clean WP theme placeholders (social / WhatsApp) before or at cutover — see Phase 9 gaps below.

---

## 6. Pre-launch gaps still open

Do not claim “fully launched” until these are decided and configured. **Do not invent IDs or keys.**

| Gap | Status / action |
|-----|-----------------|
| **GA4** (`NEXT_PUBLIC_GA_ID`) | Not wired / ID not provided — create property, then set ID + confirm script integration |
| **AdSense client / slots** | Owner does not have AdSense yet — leave env empty; UI stays in reserved-height placeholder mode |
| **Newsletter** | Provider not configured — form must not claim successful delivery until `NEWSLETTER_*` are real |
| **WP placeholders** | Live WP theme still had `YOUR_CHANNEL_HERE`, `YOUR_PACE_HERE`, fake WhatsApp — clean in WP; Next footer keeps `SOCIAL_LINKS` empty until real URLs exist |
| **Compare vehicle data** | Provisional sample specs — replace with verified data or `null` before marketing as factual |
| **Owner deploy approval** | Explicit yes required before Production + DNS |

Details: [`PHASE9_LAUNCH_CHECKLIST.md`](./PHASE9_LAUNCH_CHECKLIST.md).

---

## 7. Optional: Hostinger-only Node path (secondary)

Use only if the owner prefers **not** to use Vercel. Shorter notes — Vercel remains the recommended path.

1. Confirm Hostinger plan supports a long-running **Node.js** app (not PHP-only shared hosting alone).
2. Deploy the Next app (`npm run build` + `npm run start`, or Hostinger’s Node startup docs).
3. Set the same env vars as in §2.3 (`NEXT_PUBLIC_SITE_URL`, `WP_API_URL`; leave AdSense/GA/newsletter empty until real).
4. Point the public domain at the Node app **only after owner approval**.
5. Keep WordPress + API + uploads available as in §5 (often harder on a single shared host — plan carefully).

Trade-offs vs Vercel: more ops responsibility, SSL/process management, and WP/Next coexistence on one host. Prefer Vercel unless Hostinger Node is an explicit requirement.

---

## Related documentation

- [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md) — redirect evidence, maps, cutover SEO notes  
- [`PHASE9_LAUNCH_CHECKLIST.md`](./PHASE9_LAUNCH_CHECKLIST.md) — full QA / launch readiness checklist  
- [`.env.example`](../.env.example) — environment variable templates (no secrets)
