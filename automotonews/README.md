# AutomotoNews.in (Next.js)

Phase-by-phase rebuild of [automotonews.in](https://automotonews.in/). Spec: `../PLAN.md`. Rules: `../CURSOR_RULES.md`.

## Current phase

**Phase 3** — Headless WordPress content integration (`lib/cms.ts`), category + article routes.

Copy `.env.example` to `.env.local` and set `WP_API_URL`.

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
