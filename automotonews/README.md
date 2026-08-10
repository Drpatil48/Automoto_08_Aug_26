# AutomotoNews.in (Next.js)

Phase-by-phase rebuild of [automotonews.in](https://automotonews.in/). Spec: `../PLAN.md`. Rules: `../.cursor/rules/automotonews.mdc`.

## Current phase

**Phase 9** — QA & launch preparation (audit, checklist, safe fixes only — **no deploy**).

Previous: Phase 8 (redirects), Phase 7 (performance), Phase 6 (compare + search), Phase 5 (AdSense).

Launch checklist: [`docs/PHASE9_LAUNCH_CHECKLIST.md`](docs/PHASE9_LAUNCH_CHECKLIST.md).  
Redirect strategy: [`docs/PHASE8_REDIRECTS.md`](docs/PHASE8_REDIRECTS.md).  
Deployment steps: [`docs/STEPS_FOR_DEPLOYMENT.md`](docs/STEPS_FOR_DEPLOYMENT.md).

Ads stay in **placeholder mode** until you set `NEXT_PUBLIC_ADSENSE_CLIENT_ID`
(and optional slot IDs) in `.env.local`. See `.env.example`. The AdSense script
is not loaded when the client ID is unset.

`public/ads.txt` matches the live AutomotoNews publisher line.

Newsletter signup UI validates input but does **not** claim delivery until a real
provider is configured.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Performance notes (Phase 7)

- Hero / article cover images use `priority` for LCP; below-fold cards stay lazy.
- Inter + Noto Sans Devanagari via `next/font` (`display: swap`, preloaded).
- Homepage compare tool is dynamically imported (`ssr: false`) below the fold.
- AdSense uses `lazyOnload` and only mounts a client island when slots are live.
- CMS fetches revalidate every 300s (categories 600s); key pages export `revalidate = 300`.
