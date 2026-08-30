# Steps for Deployment

**Project:** AutomotoNews.in (Next.js App Router)  
**Status (2026-08-12):** Apex cutover live — https://automotonews.in serves Next.js on Vercel; WordPress on `cms.automotonews.in` (57 posts via symlink). Full day record: [`CUTOVER_LOG_2026-08-12.md`](./CUTOVER_LOG_2026-08-12.md).  
**Open:** `www` A → `76.76.21.21`; WP `home`/`siteurl` → cms.  
**Related docs:** [`CUTOVER_LOG_2026-08-12.md`](./CUTOVER_LOG_2026-08-12.md) · [`CMS_SUBDOMAIN_ISSUE.md`](./CMS_SUBDOMAIN_ISSUE.md) · [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md) · [`PHASE9_LAUNCH_CHECKLIST.md`](./PHASE9_LAUNCH_CHECKLIST.md)

---

## Owner approval required

- [x] **Deploy** — Production on Vercel (`automoto/automotonews` / `https://automotonews.vercel.app`).
- [x] **DNS cutover (apex `@`)** — A → `76.76.21.21`; HTTPS Next.js verified 2026-08-12.
- [ ] **DNS `www`** — add/confirm A → `76.76.21.21` (missing when last checked).
- [x] **CMS subdomain DNS + SSL** — `cms.automotonews.in` on Hostinger (ALIAS/CDN kept).
- [x] **CMS content** — same WordPress as main install (`x-wp-total: 57`) via `public_html/cms` → `.` symlink.
- [x] **Vercel rewrites** — `/wp-*` → `https://cms.automotonews.in` (`vercel.json` + env).
- [x] **`WP_API_URL` / `WORDPRESS_ORIGIN`** — Production set to cms (2026-08-12 deploy).
- [ ] **WP `home` / `siteurl`** — must be `https://cms.automotonews.in` (admin still 302 → apex login).
- [x] **Do not delete WordPress** — WordPress remains the CMS, API source, and media host after cutover.
- [x] Do not invent credentials (AdSense, GA4, newsletter keys, WP admin passwords).

---

## 1. Architecture after cutover

| Role | System | Notes |
|------|--------|--------|
| Public website | **Next.js** on Vercel | Serves pages, SEO, redirects, compare, search |
| CMS / content editing | **WordPress** on `cms.automotonews.in` | Editors use WP admin on the cms host |
| Content API | **WordPress REST API** | Next fetches via `WP_API_URL` → cms |
| Media / uploads | **WordPress** `wp-content/uploads` | Public via cms host; apex paths rewritten to cms after DNS flip |

```
Editors → WordPress (cms.automotonews.in)
                ↓ REST API
Visitors → Next.js (automotonews.in on Vercel)
                ↓ rewrites /wp-* → cms
```

WordPress is **not** removed.

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
| `WP_API_URL` | `https://cms.automotonews.in/wp-json/wp/v2` |

**Optional — leave empty / unset until real IDs exist** (placeholders stay in UI; do not invent values):

| Variable | Guidance |
|----------|----------|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Leave empty until AdSense approval (`ca-pub-…`) |
| `NEXT_PUBLIC_ADSENSE_SLOT_*` | Leave empty until units exist |
| `NEXT_PUBLIC_ADSENSE_AUTO_ADS` | Keep unset / `false` until reviewed |
| `NEXT_PUBLIC_GA_ID` | Leave empty until GA4 property exists (`G-…`); app wiring may still be pending — see Phase 9 |
| `NEWSLETTER_*` | Leave empty until a real provider is chosen |

See `.env.example` for the full list. Never commit `.env.local` or live secrets.

### 2.4 Deploy

- [x] Production deploy after cms gate (rewrites + cms `WP_API_URL`).
- [ ] Smoke `https://automotonews.vercel.app` before flipping apex DNS.
- [ ] Only after smoke OK: owner flips apex/`www` DNS (see §4).

---

## 3. Preview testing checklist

Test on the Vercel Preview / Production URL (or apex **after** cutover). Prefer HTTPS.

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

### Cutover status (2026-08-12)

| Item | Status |
|------|--------|
| Vercel project | `automoto/automotonews` — production deploy `dpl_Bp69Ua1wx1mupLJqDX41DfThzHD3` |
| Domains on Vercel | `automotonews.in` + `www.automotonews.in` attached |
| `cms.automotonews.in` | **57 posts** via symlink; Hostinger ALIAS/CDN kept |
| Vercel rewrites | `vercel.json` → `https://cms.automotonews.in` for `/wp-*` |
| `WP_API_URL` / `WORDPRESS_ORIGIN` | Production → cms |
| Apex `@` DNS | **A `76.76.21.21`** — HTTPS Next.js verified |
| `www` DNS | **Pending confirm** A → `76.76.21.21` |
| WP siteurl/home | **Pending** → `https://cms.automotonews.in` |
| Day log | [`CUTOVER_LOG_2026-08-12.md`](./CUTOVER_LOG_2026-08-12.md) |

### Exact Hostinger DNS (hPanel → Domains → DNS for `automotonews.in`)

Prefer **keeping Hostinger nameservers** and only changing records (preserves Hostinger email MX).

| Type | Name / host | Value | Action |
|------|-------------|-------|--------|
| **A** | `@` (apex) | `76.76.21.21` | **Done** (deleted conflicting ALIAS `@` → Hostinger CDN first) |
| **A** | `www` | `76.76.21.21` | **Confirm** (remove Hostinger CDN CNAME if present) |
| **ALIAS/A** | `cms` | Hostinger CDN / IPs | **Keep** |
| **MX** | `@` | Leave Hostinger MX (`mx1`/`mx2.hostinger.com`) | Do not delete if you use Hostinger mail |

**Do not** switch nameservers to `ns1/ns2.vercel-dns.com` unless you intentionally move **all** DNS (including MX and `cms`) to Vercel DNS.

**Do not** change Hostinger DNS from this agent environment (no hPanel API).

### Content gate (verified 2026-08-12)

| Host | Posts (`x-wp-total`) | Notes |
|------|----------------------|-------|
| `https://cms.automotonews.in/wp-json/…` | **57** | Symlink `public_html/cms` → `public_html` |
| `https://automotonews.in/wp-json/…` (post-cutover) | **57** | Via Vercel rewrite → cms |

### Cutover checklist

1. [x] Smoke `https://automotonews.vercel.app` (real articles).
2. [x] Apex `@` A → `76.76.21.21`; **keep** `cms`.
3. [ ] Confirm `www` A → `76.76.21.21`.
4. [ ] Set WP `home`/`siteurl` to cms; verify wp-admin.
5. After DNS propagates:
   - [x] Apex resolves to Next (Vercel) over HTTPS
   - [x] `https://automotonews.in/wp-json/wp/v2/` answers (rewrite → cms, 57)
   - [ ] Media under `/wp-content/uploads` spot-check
   - [ ] Re-run preview checklist on `https://automotonews.in`
6. Post-cutover (human): submit sitemap in Google Search Console; monitor coverage for flat URLs → 301s.

---

## 5. Critical Hostinger / WordPress notes

Keep WordPress alive as the backend even when the public domain points at Next.

- [ ] **Keep WordPress installed** — do not uninstall or wipe the site to “make room” for Next.
- [ ] **Keep the REST API enabled** — `WP_API_URL` must remain reachable from Vercel at `https://cms.automotonews.in/wp-json/wp/v2`.
- [ ] **Keep media / uploads** — `wp-content/uploads` must stay public on cms; images allowlisted for `cms.automotonews.in` (and legacy apex hosts) in `next.config.ts`.
- [ ] **Do not bulk-delete or bulk-edit WP posts** for the migration — redirects live in Next; content stays in WP.
- [x] WP admin / API / media stay on **`cms.automotonews.in`**; apex visitors hit Next, with path rewrites for `/wp-*`.
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
| **Apex DNS flip** | Owner must set Hostinger A `@` / `www` → `76.76.21.21` and keep `cms` |

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

- [`CMS_SUBDOMAIN_ISSUE.md`](./CMS_SUBDOMAIN_ISSUE.md) — **cms vs apex content issue and fix steps**  
- [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md) — redirect evidence, maps, cutover SEO notes  
- [`PHASE9_LAUNCH_CHECKLIST.md`](./PHASE9_LAUNCH_CHECKLIST.md) — full QA / launch readiness checklist  
- [`.env.example`](../.env.example) — environment variable templates (no secrets)
