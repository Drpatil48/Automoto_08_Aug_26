# Cutover log — 2026-08-12

**Project:** AutomotoNews.in  
**Date:** 2026-08-12 (IST)  
**Related:** [`CMS_SUBDOMAIN_ISSUE.md`](./CMS_SUBDOMAIN_ISSUE.md) · [`STEPS_FOR_DEPLOYMENT.md`](./STEPS_FOR_DEPLOYMENT.md)

This document records everything completed on the cutover day so the owner and developers have a single source of truth.

---

## Outcome (end of day)

| Item | Status |
|------|--------|
| `cms` content gate (57 posts = apex) | **Done** — symlink |
| Vercel Production env → cms | **Done** |
| Production deploy (rewrites → cms) | **Done** |
| Apex DNS `@` → Vercel `76.76.21.21` | **Done** |
| HTTPS apex → Next.js | **Done** (verified) |
| Apex `/wp-json` rewrite → 57 posts | **Done** (verified) |
| `www` DNS → Vercel | **Pending** (no A/CNAME when last checked) |
| WordPress `home` / `siteurl` → cms | **Pending** (admin still redirects to apex) |

**Public Next.js site:** https://automotonews.in  
**WordPress API / media host:** https://cms.automotonews.in  
**Preview alias:** https://automotonews.vercel.app

---

## Architecture after today’s cutover

```
Visitors  →  automotonews.in (@ → 76.76.21.21)  →  Vercel (Next.js)
Editors   →  cms.automotonews.in                →  Hostinger (WordPress)
API/media →  Vercel rewrites /wp-*              →  cms.automotonews.in
Email MX  →  Hostinger (unchanged)
```

---

## Chronological work log

### 1. CMS content gate (Hostinger)

**Problem:** `cms.automotonews.in` was a separate/empty WordPress. Hostinger forced subdomain directory to `…/public_html/cms`. Creating subdomain again failed with “Subdomain is already hosted.” Document-root UI could not point at main `public_html`.

**What we tried:**
- Delete separate empty cms **website** in hPanel
- Recreate subdomain under `automotonews.in` with “Use public_html directory”
- Hostinger still created directory `…/public_html/cms` (subfolder), not shared root
- Support path for document-root change did not resolve the empty install

**Fix that worked (SSH):**

```bash
cd ~/domains/automotonews.in/public_html
mv cms cms_broken_backup
ln -s . cms
ls -la cms   # expected: cms -> .
```

**Verified:**

```bash
curl -sI "https://cms.automotonews.in/wp-json/wp/v2/posts?per_page=1" | grep -i x-wp-total
# x-wp-total: 57
```

Sample title matched live content (e.g. EV Registration India 2025…).  
Backup folder left on server: `public_html/cms_broken_backup` (old empty install).

**SSH notes:**
- Host: `u985237087@82.112.239.61` port `65002`
- Failed password attempts caused temporary `Connection reset by peer`; owner reset SSH password and connected successfully
- Do not share Hostinger passwords in chat

---

### 2. Repo / config changes (before deploy)

| File | Change |
|------|--------|
| `vercel.json` | Rewrites `/wp-json`, `/wp-admin`, `/wp-content`, `/wp-includes` → `https://cms.automotonews.in` (was apex) |
| `.env.example` | `WP_API_URL` default → `https://cms.automotonews.in/wp-json/wp/v2` |
| `lib/wordpress-origin.ts` | Fallback origin → `https://cms.automotonews.in` |
| `docs/CMS_SUBDOMAIN_ISSUE.md` | Status updated for gate pass |
| `docs/STEPS_FOR_DEPLOYMENT.md` | Content gate table updated to 57/57 |

`next.config.ts` already derives rewrites from `WORDPRESS_ORIGIN` / `WP_API_URL` via `getWordPressOrigin()`.

---

### 3. Vercel Production environment + deploy

**Project:** `automoto/automotonews`  
**CLI:** `npx vercel@58.9.2` (owner logged in as `dhanrajpatil488-7744`)

**Env updates (Production):**

| Variable | Value set |
|----------|-----------|
| `WP_API_URL` | `https://cms.automotonews.in/wp-json/wp/v2` (replaced interim apex URL) |
| `WORDPRESS_ORIGIN` | `https://cms.automotonews.in` (added) |
| `NEXT_PUBLIC_SITE_URL` | already `https://automotonews.in` (kept) |

**Deploy command:**

```bash
cd automotonews
npx vercel@58.9.2 --prod --yes
```

**Deploy result:**
- Deployment ID: `dpl_Bp69Ua1wx1mupLJqDX41DfThzHD3`
- Inspect: https://vercel.com/automoto/automotonews/Bp69Ua1wx1mupLJqDX41DfThzHD3
- Build: Next.js 16.3.0; Phase 8 generated **114** WP-derived redirects for **57** posts
- Aliased production / domain attachment includes `automotonews.in`

**Smoke (pre-DNS, on vercel.app):**
- Homepage sections (Top Stories, EV, etc.) present
- `/wp-json/wp/v2/posts?per_page=1` → `x-wp-total: 57`

---

### 4. DNS cutover (Hostinger DNS Zone)

**Blocker discovered:** Root **ALIAS** `@` → `automotonews.in.cdn.hstgr.net` conflicted with adding A record:

> DNS record validation error: RRset automotonews.in IN ALIAS must not be used with A on the same name.

**Actions taken:**

| Record | Action |
|--------|--------|
| **ALIAS** `@` → `automotonews.in.cdn.hstgr.net` | **Deleted** |
| **A** `@` → `76.76.21.21` | **Added** |
| **ALIAS** `cms` → `cms.automotonews.in.cdn.hstgr.net` | **Kept** (WordPress must stay on Hostinger) |
| MX / DKIM / mail CNAMEs | **Kept** |
| `www` Hostinger CDN CNAME | Removed / cleared; **A `www` → 76.76.21.21 still needs confirm** |

**Verified after `@` flip:**

```bash
dig automotonews.in A +short
# 76.76.21.21

curl -sI "https://automotonews.in/" | grep -i server
# server: Vercel

curl -sL "https://automotonews.in/" | grep -o '<title>[^<]*'
# AutomotoNews.in — मराठी ऑटो न्यूज — …

curl -sI "https://automotonews.in/wp-json/wp/v2/posts?per_page=1" | grep -i x-wp-total
# x-wp-total: 57
```

Early after flip, HTTPS briefly failed (`SSL_ERROR_SYSCALL`) until Vercel finished certificate provisioning; later HTTPS returned **200** from Vercel.

**Nameserver note:** Vercel domain inspect still reports intended NS `ns1/ns2.vercel-dns.com` vs current third-party NS (`dns-parking` / Hostinger). Cutover used **A-record pointing** while keeping Hostinger DNS/MX — do **not** switch nameservers unless intentionally moving all DNS to Vercel.

---

### 5. Remaining owner actions (open)

1. **`www` DNS** — ensure A record exists:
   - Name: `www`
   - Value: `76.76.21.21`
   - Confirm: `dig www.automotonews.in A +short` → `76.76.21.21`

2. **WordPress site URL** (required for admin after apex → Next):

```bash
cd ~/domains/automotonews.in/public_html
wp option update home 'https://cms.automotonews.in'
wp option update siteurl 'https://cms.automotonews.in'
```

Or in `wp-config.php` (above “That’s all, stop editing”):

```php
define('WP_HOME', 'https://cms.automotonews.in');
define('WP_SITEURL', 'https://cms.automotonews.in');
```

Last check: `https://cms.automotonews.in/wp-admin/` still **302** → `https://automotonews.in/wp-login.php` (breaks login because apex is Next.js).

3. **Post-cutover QA** (owner):
   - [ ] Article pages + images on https://automotonews.in
   - [ ] Sample Phase 8 flat URL → preferred path (301)
   - [ ] https://cms.automotonews.in/wp-admin login works after siteurl fix
   - [ ] Google Search Console sitemap resubmit when ready

---

## Verification commands (keep handy)

```bash
# DNS
dig automotonews.in A +short
dig www.automotonews.in A +short
dig cms.automotonews.in A +short

# Public Next
curl -sI "https://automotonews.in/" | grep -iE 'server:|x-vercel'
curl -sI "https://automotonews.in/wp-json/wp/v2/posts?per_page=1" | grep -i x-wp-total

# WordPress cms
curl -sI "https://cms.automotonews.in/wp-json/wp/v2/posts?per_page=1" | grep -i x-wp-total
curl -sI "https://cms.automotonews.in/wp-admin/" | grep -iE 'HTTP/|location'
```

---

## Decision log (2026-08-12)

| Decision | Detail |
|----------|--------|
| Sync cms via symlink | Hostinger forced `public_html/cms`; `ln -s . cms` shares main WP files/DB |
| Keep Hostinger nameservers | Preserve MX/email; point only `@`/`www` A to Vercel |
| Delete apex ALIAS before A | Required to avoid ALIAS+A conflict |
| Never point post-cutover rewrites to apex | Would loop `/wp-*` into Next.js |
| Keep `cms` ALIAS/A on Hostinger | WordPress must remain reachable after apex flip |
| WP home/siteurl → cms | Required so wp-admin does not redirect to Vercel apex |

---

## Related files / URLs

- Deploy inspect: https://vercel.com/automoto/automotonews/Bp69Ua1wx1mupLJqDX41DfThzHD3  
- Live site: https://automotonews.in  
- CMS: https://cms.automotonews.in  
- Docs: [`STEPS_FOR_DEPLOYMENT.md`](./STEPS_FOR_DEPLOYMENT.md), [`CMS_SUBDOMAIN_ISSUE.md`](./CMS_SUBDOMAIN_ISSUE.md), [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md), [`PHASE9_LAUNCH_CHECKLIST.md`](./PHASE9_LAUNCH_CHECKLIST.md)
