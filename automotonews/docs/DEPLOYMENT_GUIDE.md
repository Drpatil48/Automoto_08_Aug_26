# AutomotoNews.in — Deployment Guide

> Last updated: 2026-08-31  
> Purpose: Prevent deployment failures on Vercel — follow every step carefully.

---

## Repository Structure

\`\`\`
Automoto_08_Aug_26/ (GitHub repo root)
├── automotonews/          ← Next.js app lives HERE (not at root)
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── public/
│   ├── styles/
│   ├── package.json
│   ├── next.config.ts
│   └── docs/
├── Cursor_automotonews/   ← Legacy design files (ignore)
└── .gitignore
\`\`\`

> ⚠️ IMPORTANT: The Next.js application lives inside `automotonews/` subdirectory.
> Vercel MUST be configured to use `automotonews` as the **Root Directory**.
> If this is not set, every deployment will fail with:
> `Couldn't find any pages or app directory`

---

## One-Time Vercel Setup (Do This Once)

### 1. Set Root Directory

1. Open: https://vercel.com/automoto/automotonews/settings
2. In the left sidebar click **Build & Development Settings**
3. Scroll to **Root Directory**
4. Click **Edit** → enter `automotonews` → click **Save**

### 2. Environment Variables

Go to https://vercel.com/automoto/automotonews/settings/environment-variables and ensure these are set for **Production**:

| Variable | Description | Example |
|---|---|---|
| `WP_API_URL` | WordPress REST API base URL | `https://cms.automotonews.in/wp-json` |
| `NEXT_PUBLIC_GA_ID` | Google Analytics Measurement ID | `G-XXXXXXXXXX` |
| `NEWSLETTER_SECRET` | Secret key for newsletter API | `your-secret-key` |

> ⚠️ WARNING: Never commit `.env.local` to Git. It is and must remain in `.gitignore`.

---

## Standard Deployment Workflow

### Step 1: Develop Locally

\`\`\`bash
# Always work inside the automotonews directory
cd automotonews
npm run dev
\`\`\`

### Step 2: Verify Build Locally Before Pushing

\`\`\`bash
# MUST pass with 0 errors before pushing to GitHub
cd automotonews
npm run build
\`\`\`

Expected output:
\`\`\`
✓ Compiled successfully
✓ Generating static pages (13/13)
\`\`\`

> 🚨 CAUTION: Never push code to `main` without a successful local build.

### Step 3: Commit and Push

\`\`\`bash
# Run from the repository root (parent of automotonews/)
git add -A
git commit -m "feat: describe your change here"
git push origin main
\`\`\`

### Step 4: Monitor Vercel Deployment

1. Open: https://vercel.com/automoto/automotonews/deployments
2. Watch for the new deployment to appear (usually within 30 seconds)
3. Expected: Status goes `Building → Ready`
4. If it fails, scroll to the bottom of the build logs for the exact error

---

## Known Issues & Fixes

### ❌ Error: `Couldn't find any pages or app directory`

**Cause**: Vercel is building from the repo root instead of `automotonews/`  
**Fix**: Set Root Directory = `automotonews` in Vercel Settings (see One-Time Setup above)

---

### ❌ Error: `routes-manifest.json couldn't be found`

**Cause**: `outputDirectory` is misconfigured when using a custom `buildCommand`  
**Fix**: Do NOT add a custom `buildCommand` or `outputDirectory` in a root `vercel.json`.  
Instead, only use the Root Directory setting in the Vercel Dashboard.

---

### ❌ Error: `Cannot patch preview comments when immutable static file upload is enabled`

**Cause**: Next.js version is older than `16.3.0-canary.32`  
**Fix**: This is a Vercel internal warning — it does NOT fail the deployment when Root Directory is correctly set to `automotonews`. If it causes a failure, upgrade Next.js:

\`\`\`bash
cd automotonews
npm install next@latest
npm run build  # verify locally
git add package.json package-lock.json
git commit -m "fix: upgrade next.js"
git push origin main
\`\`\`

---

### ❌ Error: `Both outputFileTracingRoot and turbopack.root are set`

**Cause**: Mismatch between `outputFileTracingRoot` and `turbopack.root` in `next.config.ts`  
**Fix**: In `next.config.ts`, keep `turbopack.root: projectRoot` and do NOT separately set `outputFileTracingRoot`.

---

### ❌ Error: `Another next build process is already running`

**Cause**: A previous build process crashed and left a lock file  
**Fix**:
\`\`\`bash
cd automotonews
rm -rf .next/lock
npm run build
\`\`\`

---

### ❌ Warning: `Failed to fetch one or more git submodules`

**Cause**: The repo references submodules (old Cursor workspace files)  
**Fix**: Safe to ignore — this is a non-fatal warning and does not affect the build.

---

## DNS Setup for automotonews.in

Set these records at your domain registrar (Hostinger/GoDaddy/etc.):

| Type | Name | Value |
|---|---|---|
| **A** | `@` | `216.198.79.1` |
| **CNAME** | `www` | `cname.vercel-dns.com` |

After saving:
1. Go to https://vercel.com/automoto/automotonews/settings/domains
2. Click **Refresh** next to both domains
3. Wait 5–30 minutes for DNS propagation
4. Both domains should show ✅ **Valid Configuration**

---

## What NOT to Do

| ❌ Don't | ✅ Do Instead |
|---|---|
| Add root `vercel.json` with `buildCommand` | Use Vercel Root Directory setting |
| Push without local build passing | Always run `npm run build` first |
| Commit `node_modules/` or `.next/` | They are in `.gitignore` |
| Change Next.js version without testing | Test locally, then push |

---

## Quick Pre-Deployment Checklist

\`\`\`
[ ] cd automotonews && npm run build  → passes with 0 errors
[ ] No TypeScript errors in build output
[ ] All 13 routes generate cleanly
[ ] git status is clean (no unintended files)
[ ] git push origin main
[ ] Vercel build shows: Ready ✅ (not Error ❌)
[ ] Visit https://automotonews.in to verify live site
\`\`\`

---

## Live URLs

| Environment | URL |
|---|---|
| **Production** | https://automotonews.in |
| **Production (www)** | https://www.automotonews.in |
| **Vercel Preview** | https://automotonews-git-main-automoto.vercel.app |
| **CMS (WordPress)** | https://cms.automotonews.in/wp-admin |
| **Vercel Dashboard** | https://vercel.com/automoto/automotonews |
| **GitHub Repo** | https://github.com/Drpatil48/Automoto_08_Aug_26 |
