# Implementation Plan — GA4 Analytics & Newsletter Service Integration

Integrate Google Analytics 4 (GA4) and build a production-ready Newsletter API endpoint with multi-provider support (Brevo/Mailchimp/Webhook) for [AutomotoNews.in](https://automotonews.in/).

## User Review Required

> [!IMPORTANT]
> - **GA4 Measurement ID**: Set `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX` in `.env.local` or host environment variables once created in Google Analytics console.
> - **Newsletter Provider Credentials**: Configure `NEWSLETTER_PROVIDER` (`brevo` | `mailchimp` | `webhook`), `NEWSLETTER_API_KEY`, and `NEWSLETTER_LIST_ID` in `.env.local`. When unconfigured, the UI will cleanly inform subscribers that subscriptions are currently disabled.

## Proposed Changes

### 1. Analytics (`lib/gtag.ts`, `components/analytics/GoogleAnalyticsScript.tsx`)

#### [NEW] [lib/gtag.ts](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/lib/gtag.ts)
- Define TypeScript types and event helper `trackEvent(action, category, label, value)` for GA4 custom event tracking (e.g., newsletter signup, compare interactions, search queries).

#### [NEW] [components/analytics/GoogleAnalyticsScript.tsx](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/components/analytics/GoogleAnalyticsScript.tsx)
- Render official Next.js Google Analytics component or async gtag script in `app/layout.tsx` safely when `NEXT_PUBLIC_GA_ID` is set and valid (`G-XXXXXXXXXX`).

#### [MODIFY] [app/layout.tsx](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/app/layout.tsx)
- Embed `GoogleAnalyticsScript` component into root layout.

---

### 2. Newsletter Backend (`lib/newsletter.ts`, `app/api/newsletter/route.ts`)

#### [NEW] [lib/newsletter.ts](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/lib/newsletter.ts)
- Support **Brevo (Sendinblue)** v3 REST API (`https://api.brevo.com/v3/contacts`), **Mailchimp** v3 API, or generic webhook endpoint.
- Returns structured responses: `{ success: boolean; code: 'SUCCESS' | 'NOT_CONFIGURED' | 'ALREADY_SUBSCRIBED' | 'INVALID_EMAIL' | 'ERROR'; message: string }`.

#### [NEW] [app/api/newsletter/route.ts](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/app/api/newsletter/route.ts)
- POST endpoint with email validation, rate-limiting/honeypot check, consent check, and response JSON handling.

#### [MODIFY] [components/home/NewsletterFormClient.tsx](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/components/home/NewsletterFormClient.tsx)
- Update form submit to fetch `/api/newsletter` via POST.
- Track subscription event via `trackEvent('subscribe', 'newsletter', email)` upon success.
- Render appropriate success/error feedback state in Marathi/English UI.

---

### 3. Environment & Documentation (`.env.example`)

#### [MODIFY] [.env.example](file:///Users/dhanrajpatil/AI%20-%20LLM/Cursor_Workspace/automotonews/.env.example)
- Add documented environment variable definitions:
  - `NEXT_PUBLIC_GA_ID`
  - `NEWSLETTER_PROVIDER`
  - `NEWSLETTER_API_KEY`
  - `NEWSLETTER_LIST_ID`

---

## Verification Plan

### Automated Tests
- Type checking: `npx tsc --noEmit`
- Linting: `npm run lint`

### Manual Verification
- Test `/api/newsletter` with invalid email, missing consent, and missing provider credentials (returns clean response).
- Test `/api/newsletter` with mock provider credentials.
- Verify GA4 script renders properly in HTML `<head>` when `NEXT_PUBLIC_GA_ID` is set.
