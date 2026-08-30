# CMS Subdomain Issue — `cms.automotonews.in` vs Live WordPress

**Project:** AutomotoNews.in  
**Status:** Content gate + apex DNS cutover largely complete 2026-08-12. Full day log: [`CUTOVER_LOG_2026-08-12.md`](./CUTOVER_LOG_2026-08-12.md).  
**Open:** `www` A → Vercel; WordPress `home`/`siteurl` → `cms` (admin still redirects to apex).  
**Related:** [`STEPS_FOR_DEPLOYMENT.md`](./STEPS_FOR_DEPLOYMENT.md) · [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md) · [`CUTOVER_LOG_2026-08-12.md`](./CUTOVER_LOG_2026-08-12.md)

---

## Summary

**Resolved 2026-08-12:** `cms.automotonews.in` serves the same WordPress as the main install (**57** posts) via symlink `public_html/cms` → `public_html`. Apex `@` DNS points to Vercel; public site is Next.js with `/wp-*` rewrites to cms.

| Host | Role (after cutover) | Post count (`x-wp-total`) |
|------|----------------------|---------------------------|
| `https://automotonews.in` | Next.js on Vercel (public) | API via rewrite → **57** |
| `https://cms.automotonews.in` | WordPress on Hostinger (CMS) | **57** (symlink) |
| `https://automotonews.vercel.app` | Next.js production alias | **57** |

---

## Why this matters

After DNS cutover, visitors open **Next.js** on `automotonews.in`, but WordPress must stay reachable for:

- REST API (`/wp-json/…`) — articles, categories, search
- Media (`/wp-content/uploads/…`) — images in posts
- Admin (`/wp-admin/…`) — editing in WordPress

Vercel **rewrites** these paths to a WordPress host that is **not** the public apex domain (otherwise requests loop back to Next.js).

**Target architecture after cutover:**

```
Visitors  →  automotonews.in  →  Vercel (Next.js)
Editors   →  cms.automotonews.in  →  Hostinger (WordPress)
API/media →  proxied via Vercel rewrites  →  cms.automotonews.in
```

If `cms` only has 1 post, the public site would show **Hello world** instead of your Marathi articles.

---

## How the issue happened

1. A subdomain **`cms.automotonews.in`** was created in Hostinger with its own **DNS A record** and **SSL** — that part is correct.
2. Hostinger also created a **new website** (or new WordPress install) for `cms`, with its **own database** and default “Hello world!” post.
3. Adding `cms` as an **alias** on the main `automotonews.in` site failed with: **“Domain is already hosted”** — because `cms` already exists as a separate website.
4. Result: two WordPress installs on one account:
   - **Main site** → 57 real articles
   - **cms site** → 1 default post

Changing only the DNS A record for `cms` is **not enough**. The **document root** (folder) and **database** must match the live site.

---

## Verification (run before and after fix)

### Quick check (terminal)

```bash
curl -sI "https://automotonews.in/wp-json/wp/v2/posts?per_page=1" | grep -i x-wp-total
curl -sI "https://cms.automotonews.in/wp-json/wp/v2/posts?per_page=1" | grep -i x-wp-total
```

**Success:** both lines show the same number (e.g. `x-wp-total: 57`).

**Failure:** cms shows `x-wp-total: 1` while apex shows `57`.

### Browser check

Open:

- https://cms.automotonews.in/wp-json/wp/v2/posts?per_page=1

You should see JSON with your **real article titles** (Marathi/English automotive news), not only `"Hello world!"`.

### SSL check

```bash
curl -sI "https://cms.automotonews.in/wp-json/wp/v2/" | head -5
```

Expect `HTTP/2 200` and `content-type: application/json`.

---

## Solution — Step by step (Hostinger hPanel)

### Prerequisites

- hPanel login for the AutomotoNews hosting account
- Do **not** delete `automotonews.in` or its database
- Do **not** change apex (`@`) or `www` DNS to Vercel until verification passes

---

### Step 1 — Identify the main site folder

1. Log in to [hPanel](https://hpanel.hostinger.com).
2. Go to **Websites**.
3. Click **Manage** on **`automotonews.in`** (the site with your real content).
4. Open **File Manager** or **Website settings**.
5. Note the **document root** — usually:
   - `public_html`
6. Write it down — you will use the **exact same path** for `cms`.

---

### Step 2 — Point `cms` to the same folder (recommended)

Because `cms` is already a separate website, use **document root**, not “add alias”.

1. Go back to **Websites**.
2. Click **Manage** on **`cms.automotonews.in`** (the empty / Hello world site).
3. Open **Website settings** → **Advanced** / **General** (labels vary).
4. Find **Document root** / **Root directory** / **Website files path**.
5. It may currently be something like:
   - `public_html/cms.automotonews.in`
   - `domains/cms.automotonews.in/public_html`
6. Change it to the **same path as Step 1** (usually `public_html`).
7. **Save** changes.

**If you see “Domain is already hosted”** when trying to add an alias on the main site — that is expected. Use this document-root method instead.

---

### Step 3 — SSL for `cms`

1. In hPanel, open **SSL** for **`cms.automotonews.in`**.
2. Wait until status is **Active** (Let’s Encrypt).
3. Enable **Force HTTPS** if offered.

---

### Step 4 — Verify content (required gate)

Run the verification commands from [Verification](#verification-run-before-and-after-fix).

Both hosts must report the **same** `x-wp-total` (~57).

If cms still shows `1`:

- Document root may not have saved — recheck Step 2.
- Hostinger may still be serving a separate vhost — contact support (Step 6).

---

### Step 5 — Optional cleanup (only after Step 4 passes)

Only if Hostinger created a **duplicate empty** website folder you no longer need:

- Ask Hostinger support to remove the **empty** cms website **after** confirming cms serves 57 posts.
- **Never** delete the main `automotonews.in` website or its MySQL database.

---

### Step 6 — Hostinger support (if stuck)

Paste this into live chat:

> Please configure `cms.automotonews.in` to use the **same WordPress document root and database** as `automotonews.in`.  
> Currently `cms` is a separate WordPress with 1 post (“Hello world”). The live site on `automotonews.in` has 57 posts.  
> Do not create a new WordPress install. Do not delete the main site or its database.  
> I need `https://cms.automotonews.in/wp-json/wp/v2/posts` to return the same `x-wp-total` as the apex site.

---

## After cms shows 57 posts — engineering steps

These are done by the developer / Vercel (not in hPanel):

### 1. Update Vercel environment (Production)

| Variable | Value |
|----------|--------|
| `NEXT_PUBLIC_SITE_URL` | `https://automotonews.in` |
| `WP_API_URL` | `https://cms.automotonews.in/wp-json/wp/v2` |
| `WORDPRESS_ORIGIN` (optional) | `https://cms.automotonews.in` |

Ensure `vercel.json` / `next.config.ts` rewrites point `/wp-json`, `/wp-admin`, `/wp-content`, `/wp-includes` → `https://cms.automotonews.in`.

### 2. Redeploy

```bash
cd automotonews
npx vercel --prod --yes
```

Smoke test: https://automotonews.vercel.app should show real articles (not Hello world).

### 3. DNS cutover (owner — Hostinger DNS)

**Keep Hostinger nameservers** (preserves email MX).

| Type | Host | Value | Action |
|------|------|-------|--------|
| **A** | `@` | `76.76.21.21` | Point to Vercel |
| **A** | `www` | `76.76.21.21` | Point to Vercel |
| **A** | `cms` | *(current Hostinger IP)* | **Keep unchanged** |
| **MX** | `@` | Hostinger mail records | **Do not delete** |

Wait 5–60 minutes for propagation.

### 4. Post-cutover checks

- [ ] https://automotonews.in — Next.js homepage with real articles
- [ ] https://automotonews.in/wp-json/wp/v2/ — JSON (via rewrite → cms)
- [ ] Article images load (`/wp-content/uploads/…`)
- [ ] https://cms.automotonews.in/wp-admin — WordPress login
- [ ] Sample Phase 8 redirect: flat `/post-slug/` → `/{category}/{slug}` (301)

---

## Interim workaround (current)

While `cms` is not fixed, production on Vercel uses:

- `WP_API_URL=https://automotonews.in/wp-json/wp/v2` (apex still on Hostinger)

This makes **https://automotonews.vercel.app** show all 57 articles.

**This must not be used after apex DNS points to Vercel** — API calls would loop to Next.js instead of WordPress. Switch back to `cms` **before** DNS flip.

---

## Common mistakes

| Mistake | What happens |
|---------|----------------|
| Only add DNS A record for `cms` | Separate WordPress remains → still 1 post |
| Install fresh WordPress on `cms` | Empty site → 1 post |
| Delete main site database | Lose all 57 articles |
| Flip apex DNS before cms gate | Public site shows Hello world / broken images |
| Point rewrites to `automotonews.in` after DNS cutover | Infinite proxy loop on `/wp-json` and `/wp-content` |
| Remove `cms` A record | WordPress API unreachable after cutover |

---

## Decision log

| Date | Decision |
|------|----------|
| 2026-08-11 | Use `cms.automotonews.in` as permanent WordPress host after apex → Vercel |
| 2026-08-11 | Block apex DNS until `x-wp-total` matches on cms and apex |
| 2026-08-11 | Interim: Vercel `WP_API_URL` → apex while apex stays on Hostinger |
| 2026-08-11 | Hostinger login blocked for automation (Cloudflare / browser MCP) — owner fixes cms in hPanel |
| 2026-08-12 | Sync cms with symlink `public_html/cms` → `.` (Hostinger forced subfolder) |
| 2026-08-12 | Vercel `WP_API_URL` + `WORDPRESS_ORIGIN` + `vercel.json` → cms; prod deploy |
| 2026-08-12 | Delete Hostinger ALIAS `@` (CDN); add A `@` → `76.76.21.21`; apex HTTPS Next.js live |
| 2026-08-12 | Keep `cms` ALIAS/A + MX on Hostinger; do not switch nameservers to Vercel |

Full narrative: [`CUTOVER_LOG_2026-08-12.md`](./CUTOVER_LOG_2026-08-12.md).

---

## When to notify the developer

Content gate is **passed**. Remaining owner items:

1. Confirm `www` A → `76.76.21.21`
2. Set WordPress `home` / `siteurl` to `https://cms.automotonews.in` (SSH `wp option update` or `wp-config.php`)
3. Confirm https://cms.automotonews.in/wp-admin no longer redirects to apex

---

## Related documentation

- [`CUTOVER_LOG_2026-08-12.md`](./CUTOVER_LOG_2026-08-12.md) — full day cutover record  
- [`STEPS_FOR_DEPLOYMENT.md`](./STEPS_FOR_DEPLOYMENT.md) — full Vercel deploy and DNS checklist  
- [`PHASE8_REDIRECTS.md`](./PHASE8_REDIRECTS.md) — URL redirects after cutover  
- [`PHASE9_LAUNCH_CHECKLIST.md`](./PHASE9_LAUNCH_CHECKLIST.md) — launch readiness  
- [`.env.example`](../.env.example) — environment variables
