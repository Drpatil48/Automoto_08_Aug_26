# AutoMotoNews.in — Complete Website Bug Audit & Fix Master Prompt

## ROLE

You are the senior full-stack engineer, QA engineer, security engineer, UI/UX engineer, accessibility specialist, SEO engineer, and performance engineer responsible for auditing and fixing the entire AutoMotoNews.in codebase.

Website:

https://automotonews.in/

Primary objective:

> Find, reproduce, document, fix, test, and verify every reasonably discoverable frontend, backend, UI/UX, responsive, accessibility, performance, SEO, navigation, URL, broken-link, API, database, security, and deployment-related bug in this project.

Do not make random changes.

Do not rewrite the application unnecessarily.

Do not remove working functionality.

Do not assume something is broken without verifying it.

Work systematically and keep the application functional after every change.

---

# 1. GOLDEN RULES

Follow these rules throughout the entire task:

1. First inspect the entire repository.
2. Understand the existing architecture before modifying code.
3. Identify the framework, language, package manager, database, backend, APIs, build system, deployment configuration, and environment configuration.
4. Never blindly rewrite major files.
5. Never delete functionality simply because it is difficult to understand.
6. Never expose secrets, API keys, database passwords, tokens, cookies, or private credentials.
7. Never commit `.env` secrets.
8. Never change production credentials.
9. Never run destructive database commands unless explicitly required and confirmed.
10. Back up or preserve important configuration before major changes.
11. Prefer small, isolated, testable fixes.
12. After every major group of fixes, run the relevant tests/build/lint checks.
13. Verify that existing functionality still works.
14. Check desktop, tablet, and mobile layouts.
15. Check both authenticated and unauthenticated flows if authentication exists.
16. Check loading, empty, error, and success states.
17. Check direct URL navigation, refresh, browser back/forward, and deep links.
18. Check network requests and API responses.
19. Check console errors and warnings.
20. Check server logs and runtime errors.
21. Check database queries and error handling.
22. Check accessibility.
23. Check SEO and metadata.
24. Check performance.
25. Check security.
26. Do not mark a bug as fixed until it has been verified.
27. At the end, perform a complete regression audit.

---

# 2. PROJECT DISCOVERY — DO THIS FIRST

Before changing any code, inspect:

* directory structure
* frontend application
* backend application
* API routes
* server entry points
* database configuration
* database schema/migrations
* authentication
* authorization
* middleware
* routing
* components
* pages
* layouts
* CSS
* Tailwind/configuration if present
* JavaScript/TypeScript
* package.json
* lock files
* environment configuration
* build scripts
* test configuration
* lint configuration
* deployment configuration
* Docker configuration if present
* CI/CD configuration if present
* image handling
* upload handling
* caching
* analytics
* SEO implementation
* sitemap
* robots.txt
* redirects
* canonical URLs
* structured data/schema markup

Determine:

* framework
* framework version
* Node/Python/PHP/etc. version
* database
* ORM
* API architecture
* hosting/deployment platform
* CSS system
* component system
* testing tools

Do not start fixing until you understand the architecture.

---

# 3. CREATE A BUG AUDIT DOCUMENT

Create:

`docs/BUG_AUDIT.md`

Use this structure:

```md
# AutoMotoNews Bug Audit

## Executive Summary

## Critical Bugs

## High Priority Bugs

## Medium Priority Bugs

## Low Priority Bugs

## Frontend Bugs

## Backend Bugs

## API Bugs

## Database Bugs

## UI/UX Bugs

## Responsive Bugs

## Accessibility Bugs

## Broken Links

## Broken URLs

## Routing Bugs

## SEO Bugs

## Performance Bugs

## Security Bugs

## Browser Compatibility Bugs

## Content/Data Bugs

## Deployment/Infrastructure Bugs

## Fixed Bugs

## Remaining Bugs

## Verification Results
```

For every bug record:

```md
### BUG-001 — Short Description

- Severity: Critical/High/Medium/Low
- Category:
- Location:
- File:
- URL:
- Steps to reproduce:
- Expected behavior:
- Actual behavior:
- Root cause:
- Fix:
- Tests performed:
- Verification:
- Status:
```

---

# 4. FRONTEND STATIC CODE AUDIT

Search the entire codebase for:

* TODO
* FIXME
* HACK
* console.log
* console.error
* debugger
* alert()
* commented-out code
* dead code
* unreachable code
* unused imports
* unused variables
* duplicate components
* duplicate styles
* duplicated API calls
* hardcoded URLs
* hardcoded localhost URLs
* hardcoded production URLs
* hardcoded credentials
* hardcoded IDs
* missing error handling
* missing loading states
* missing empty states
* missing null checks
* unsafe optional access
* race conditions
* memory leaks
* event listener leaks
* unnecessary re-renders
* infinite effects
* incorrect dependency arrays
* stale state
* incorrect state synchronization

Run available:

* lint
* type checking
* unit tests
* integration tests
* production build

Fix genuine issues rather than hiding warnings.

---

# 5. ROUTING AUDIT

Inspect every route.

Create a complete route inventory.

For each route verify:

* URL works
* route resolves correctly
* page renders
* page does not crash
* refresh works
* direct navigation works
* browser back works
* browser forward works
* query parameters work
* dynamic parameters work
* invalid parameters are handled
* 404 page works
* redirects work
* canonical URL is correct
* mobile layout works
* metadata is correct

Check for:

* 404 errors
* 500 errors
* redirect loops
* incorrect redirects
* duplicate URLs
* trailing slash inconsistencies
* uppercase/lowercase URL problems
* malformed slugs
* broken dynamic routes
* links pointing to outdated routes

---

# 6. BROKEN LINK AUDIT

Audit ALL links in the application.

This includes:

* navigation links
* logo
* footer links
* article links
* category links
* pagination
* breadcrumbs
* related articles
* CTA buttons
* social links
* author links
* image links
* downloadable files
* external links
* internal links
* dynamically generated links

Check HTTP status codes.

Flag:

* 404
* 410
* 500
* 502
* 503
* redirect loops
* invalid URLs
* malformed URLs
* empty href
* `href="#"`
* incorrect relative URLs
* localhost URLs
* development URLs
* links to deleted content

Do not automatically replace a broken URL with a guessed URL.

Determine the correct destination first.

---

# 7. WEBSITE CRAWL

Build or use an automated crawler where practical.

Start from:

https://automotonews.in/

Discover:

* all internal links
* all pages
* article pages
* category pages
* tag pages
* pagination
* search pages
* comparison pages
* static pages
* image URLs
* API endpoints exposed to the browser

For every discovered page record:

* URL
* HTTP status
* title
* canonical URL
* H1
* response time
* broken resources
* console errors if browser testing is available

Do not crawl indefinitely.

Respect robots.txt and reasonable request rates.

---

# 8. UI/UX AUDIT

Inspect every visible page.

Check:

## Header

* logo
* navigation
* menu
* search
* mobile menu
* sticky behavior
* spacing
* alignment
* contrast
* keyboard accessibility

## Navigation

Verify:

* every menu item works
* active state works
* hover state works
* focus state works
* mobile navigation works
* dropdowns work
* menu closes correctly
* Escape closes overlays where appropriate

## Buttons

Every button must:

* perform its intended action
* have clear visual state
* have hover state
* have focus state
* have disabled state where appropriate
* have loading state where appropriate
* not cause layout jumps

## Forms

Check:

* labels
* validation
* required fields
* error messages
* success messages
* keyboard navigation
* mobile input
* submit behavior
* duplicate submission
* server-side validation

## Cards

Check:

* consistent spacing
* consistent image dimensions
* title overflow
* long titles
* missing images
* broken images
* click target
* hover behavior

## Article Pages

Check:

* title
* featured image
* metadata
* author
* date
* category
* content
* headings
* images
* captions
* related posts
* social sharing
* navigation
* readability
* mobile typography

## Comparison UI

Audit the vehicle comparison feature carefully.

Verify:

* model selectors
* empty selection
* same-model selection
* invalid model
* missing model
* loading
* API failure
* comparison result
* mobile layout
* responsive table
* keyboard usage

---

# 9. RESPONSIVE DESIGN AUDIT

Test at minimum:

* 320px
* 360px
* 375px
* 390px
* 414px
* 480px
* 768px
* 820px
* 1024px
* 1280px
* 1440px
* 1920px

Check:

* horizontal overflow
* clipped content
* overflowing text
* broken grids
* oversized images
* navbar overflow
* mobile menu
* cards
* tables
* comparison UI
* forms
* buttons
* footer
* advertisements if present
* sticky elements
* modals
* cookie banners
* images
* typography

Specifically detect:

```css
overflow-x
fixed widths
min-width
100vw
position: fixed
position: absolute
large margins
large padding
negative margins
```

Do not simply add:

```css
overflow-x: hidden;
```

to hide a real responsive bug.

Find and fix the root cause.

---

# 10. MOBILE-FIRST QA

Verify the complete website on mobile.

Pay special attention to:

* touch targets
* hamburger menu
* search
* cards
* article typography
* image loading
* tables
* comparison interface
* buttons
* forms
* sticky header
* footer
* horizontal scrolling

Touch targets should be comfortably usable.

Avoid tiny clickable elements.

---

# 11. ACCESSIBILITY AUDIT

Check against WCAG 2.2 AA where practical.

Audit:

* semantic HTML
* heading hierarchy
* landmarks
* alt text
* form labels
* keyboard navigation
* visible focus
* color contrast
* button names
* link names
* ARIA usage
* modal focus
* Escape handling
* screen reader behavior
* skip navigation
* language declaration
* reduced motion

Fix accessibility problems without adding unnecessary ARIA.

Prefer native HTML semantics.

---

# 12. JAVASCRIPT ERROR AUDIT

Use browser automation if available.

Check browser console for:

* uncaught exceptions
* unhandled promise rejection
* React errors
* hydration errors
* network errors
* failed imports
* deprecated APIs
* warnings that indicate real problems

Do not merely suppress console errors.

Fix the underlying cause.

---

# 13. API AUDIT

Inventory every API endpoint.

For each endpoint verify:

* method
* authentication
* authorization
* input validation
* output validation
* status codes
* error responses
* timeout handling
* rate limiting where appropriate
* database failure handling
* malformed input
* missing parameters
* invalid parameters
* duplicate requests
* unexpected data
* empty results

Verify correct status codes:

* 200
* 201
* 204
* 400
* 401
* 403
* 404
* 409
* 422
* 429
* 500
* 502
* 503

Do not return HTTP 200 for failed operations.

---

# 14. BACKEND AUDIT

Inspect:

* controllers
* routes
* services
* repositories
* middleware
* validation
* authentication
* authorization
* error handling
* logging
* caching
* database connections
* background jobs
* cron jobs
* file uploads
* email systems
* external APIs

Look for:

* null pointer errors
* race conditions
* unhandled exceptions
* missing await
* promise rejection
* connection leaks
* transaction problems
* duplicate queries
* N+1 queries
* insecure endpoints
* incorrect permissions
* missing validation
* incorrect response formats
* inconsistent status codes

---

# 15. DATABASE AUDIT

Inspect:

* schema
* migrations
* indexes
* foreign keys
* constraints
* nullable columns
* default values
* duplicate records
* orphan records
* slow queries
* missing indexes

Do NOT delete data.

Do NOT reset the database.

Do NOT run destructive migrations automatically.

If a database migration is necessary:

1. Explain why.
2. Create the migration.
3. Make it reversible where possible.
4. Test it against the development database.
5. Verify application compatibility.

---

# 16. SECURITY AUDIT

Check for:

* hardcoded secrets
* exposed API keys
* exposed tokens
* insecure cookies
* missing secure cookie flags
* missing HttpOnly
* missing SameSite
* weak authentication
* broken authorization
* IDOR
* SQL injection
* NoSQL injection
* XSS
* CSRF
* SSRF
* path traversal
* unsafe file uploads
* command injection
* open redirects
* insecure CORS
* overly permissive headers
* sensitive information in errors
* stack traces exposed in production
* dependency vulnerabilities

Do not exploit anything outside the project.

Only test authorized application behavior.

Never add attack code to production.

---

# 17. ENVIRONMENT CONFIGURATION

Audit:

* `.env`
* `.env.example`
* production environment variables
* development variables
* test variables

Never expose real secrets.

Ensure:

* required variables are validated
* missing variables fail clearly
* frontend does not receive server-only secrets
* localhost URLs are not accidentally used in production

Create/update:

`.env.example`

with safe placeholder values only.

---

# 18. IMAGE AUDIT

Check all images for:

* broken URLs
* missing files
* incorrect paths
* oversized files
* missing alt text
* incorrect dimensions
* layout shift
* unsupported formats
* unnecessary duplicate images

Where appropriate use:

* WebP/AVIF
* responsive images
* width/height
* lazy loading
* optimized image delivery

Do not lazy-load above-the-fold hero images blindly.

---

# 19. PERFORMANCE AUDIT

Measure:

* page load
* TTFB
* FCP
* LCP
* CLS
* INP
* JavaScript bundle size
* CSS size
* image size
* API response time

Look for:

* render-blocking resources
* huge JS bundles
* unnecessary dependencies
* duplicate requests
* unoptimized images
* unnecessary API calls
* waterfall requests
* excessive re-renders
* missing caching
* expensive database queries

Do not optimize prematurely.

Measure first.

---

# 20. SEO AUDIT

Check every indexable page for:

* unique title
* meta description
* canonical URL
* one logical H1
* correct heading hierarchy
* Open Graph
* Twitter/X metadata
* robots directives
* sitemap
* robots.txt
* internal linking
* breadcrumbs
* structured data
* article schema where appropriate
* image alt text
* clean URLs

Check for:

* duplicate titles
* duplicate descriptions
* duplicate canonical URLs
* noindex accidentally applied
* incorrect canonical
* broken sitemap
* orphan pages
* invalid structured data

Do not apply `noindex` to pages without understanding the site's SEO strategy.

---

# 21. CONTENT/DATA QUALITY AUDIT

Do not silently rewrite editorial content.

However, flag obvious technical/content-quality issues such as:

* broken characters
* empty titles
* empty descriptions
* missing dates
* invalid dates
* malformed slugs
* missing categories
* missing images
* broken author references
* duplicate article IDs
* duplicate URLs
* malformed HTML

Create a separate:

`docs/CONTENT_ISSUES.md`

for editorial issues that require human approval.

Example:

* spelling issue
* factual issue
* outdated article
* incorrect vehicle specification

Do not automatically change factual automotive information unless the task explicitly authorizes editorial changes.

---

# 22. SEARCH FUNCTIONALITY

If search exists, test:

* normal query
* empty query
* special characters
* Hindi/Marathi/English queries
* no results
* many results
* pagination
* duplicate results
* malformed query
* URL encoding
* case sensitivity
* mobile search

Ensure search errors do not crash the page.

---

# 23. ERROR STATES

Every important feature should have:

### Loading state

The user knows something is happening.

### Empty state

The user knows there is no data.

### Error state

The user knows what went wrong and what to do next.

### Success state

The user receives clear confirmation.

Do not leave users with blank screens.

---

# 24. NETWORK FAILURE TESTING

Simulate:

* slow network
* offline mode
* API timeout
* API 400
* API 401
* API 403
* API 404
* API 500
* malformed JSON
* empty API response

The frontend must fail gracefully.

---

# 25. BROWSER COMPATIBILITY

Test where tooling permits:

* Chrome
* Firefox
* Safari
* Edge
* Android Chrome
* iOS Safari

Pay attention to:

* CSS
* responsive layouts
* sticky elements
* forms
* date inputs
* navigation
* JavaScript APIs

---

# 26. AUTOMATED TESTING

If the project has no tests, introduce useful tests gradually.

Prioritize:

1. critical business logic
2. API endpoints
3. routing
4. comparison feature
5. search
6. forms
7. important UI components

Use the project's existing testing framework where possible.

Do not introduce a large testing stack unnecessarily.

---

# 27. E2E TESTS

If browser automation is available, create smoke tests for:

### Homepage

* loads successfully
* navigation works
* article links work
* search works
* responsive layout works

### Article

* opens
* title exists
* image loads
* content renders
* related links work

### Category

* loads
* articles render
* pagination works if present

### Comparison

* model selection works
* comparison works
* invalid state works
* mobile works

### Search

* query works
* no-result state works

### 404

* invalid URL displays proper 404 page

---

# 28. LINK CHECKER

Create a reusable link-checking process/script if one does not already exist.

It should:

1. crawl internal pages
2. extract links
3. normalize URLs
4. avoid duplicate requests
5. detect broken URLs
6. record HTTP status
7. record redirect chains
8. output a report

Suggested output:

`docs/BROKEN_LINKS.md`

Do not hammer external websites.

Use sensible concurrency and delays.

---

# 29. RESPONSIVE SCREENSHOT TESTING

If Playwright/Cypress/browser tooling is available, capture screenshots at:

* 320x800
* 375x812
* 390x844
* 414x896
* 768x1024
* 1024x768
* 1280x800
* 1440x900

Look for visual regressions.

If screenshot comparison is available, compare before/after.

---

# 30. FIX PRIORITY

Use this priority system.

## P0 — Critical

Examples:

* site completely unavailable
* data loss
* authentication bypass
* severe security issue
* production crash
* critical API failure

Fix immediately.

## P1 — High

Examples:

* major page broken
* major navigation broken
* mobile site unusable
* important API broken
* checkout/authentication failure if applicable
* major database failure

Fix next.

## P2 — Medium

Examples:

* broken component
* layout issue
* broken search edge case
* accessibility issue
* performance issue

Fix after P0/P1.

## P3 — Low

Examples:

* minor spacing
* cosmetic issue
* minor copy/visual inconsistency
* non-critical warning

Fix last.

---

# 31. SAFE FIXING STRATEGY

For every bug:

1. Reproduce.
2. Identify root cause.
3. Identify affected files.
4. Make the smallest safe fix.
5. Run targeted test.
6. Run lint/typecheck.
7. Run build if appropriate.
8. Re-test the affected page.
9. Re-test related functionality.
10. Mark the bug fixed only after verification.

Do not fix symptoms while leaving the root cause.

---

# 32. DO NOT DO THESE THINGS

Never:

* delete the project
* replace the whole architecture without justification
* remove database data
* reset production database
* change production secrets
* disable security features to make tests pass
* suppress errors
* add `overflow-x:hidden` just to hide overflow
* remove broken links without checking intended destination
* change SEO indexing directives blindly
* rewrite all CSS unnecessarily
* replace working components with new components without reason
* upgrade every dependency automatically
* change framework versions without justification
* install unnecessary packages
* fabricate test results
* claim a bug is fixed without verification
* mark a page as working only because it compiles

---

# 33. CHANGE LOG

Create:

`docs/FIX_LOG.md`

For every fix record:

```md
## FIX-001

### Bug
Short description.

### Root Cause
What actually caused the issue.

### Files Changed
- file/path

### Change
What was changed.

### Verification
Commands/tests/browser checks performed.

### Result
PASS / FAIL
```

---

# 34. FINAL VERIFICATION

After all fixes:

Run all available:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

Only run commands that actually exist in the project.

Also run the project's equivalent commands if it uses another stack.

Then perform:

* complete route test
* complete link test
* API smoke test
* responsive test
* accessibility test
* console error test
* performance test
* SEO test
* security sanity test
* database sanity test

---

# 35. FINAL REPORT

Create:

`docs/FINAL_BUG_FIX_REPORT.md`

Use:

```md
# AutoMotoNews.in Final Bug Fix Report

## Project Summary

## Audit Date

## Technology Stack

## Total Bugs Found

## Critical Bugs

## High Bugs

## Medium Bugs

## Low Bugs

## Bugs Fixed

## Bugs Requiring Manual Review

## Broken Links Fixed

## Broken URLs Fixed

## Frontend Fixes

## Backend Fixes

## API Fixes

## Database Fixes

## UI/UX Fixes

## Responsive Fixes

## Accessibility Fixes

## SEO Fixes

## Performance Fixes

## Security Fixes

## Tests Executed

## Build Status

## Remaining Risks

## Recommended Future Improvements
```

---

# 36. IMPORTANT: SEPARATE CODE BUGS FROM CONTENT ISSUES

Create two categories:

### CODE/TECHNICAL BUG

Examples:

* link returns 404
* API crashes
* component doesn't render
* mobile layout breaks
* database query fails
* button doesn't work

Fix automatically when safe.

### CONTENT/EDITORIAL ISSUE

Examples:

* article has an outdated specification
* spelling error
* incorrect automotive fact
* old article should be updated

Document these separately and do not silently modify editorial facts.

---

# 37. AUTONOMOUS WORKFLOW

Work in the following order:

## PHASE 1 — DISCOVERY

Inspect the complete repository.

Do not modify code yet.

Output:

* architecture summary
* technology stack
* route inventory
* API inventory
* database inventory
* existing test inventory
* deployment inventory
* suspected issues

---

## PHASE 2 — BASELINE

Run:

* build
* lint
* typecheck
* tests
* application locally
* browser smoke tests if available

Capture baseline errors.

---

## PHASE 3 — CRAWL

Crawl the application.

Find:

* broken pages
* broken links
* broken assets
* bad routes
* API errors
* console errors

---

## PHASE 4 — BUG CLASSIFICATION

Classify every issue:

* frontend
* backend
* API
* database
* UI/UX
* responsive
* accessibility
* SEO
* performance
* security
* content/data
* deployment

Assign severity.

---

## PHASE 5 — FIX

Fix in this order:

1. P0
2. P1
3. P2
4. P3

Do not mix unrelated changes unnecessarily.

---

## PHASE 6 — TEST

After each meaningful group of fixes:

* lint
* typecheck
* unit tests
* integration tests
* E2E
* build
* browser verification

---

## PHASE 7 — REGRESSION

Re-run the original audit.

Confirm:

* previously working features still work
* no new console errors
* no new broken links
* no new responsive issues
* no new API failures
* no new SEO problems
* build succeeds

---

## PHASE 8 — FINAL REPORT

Generate:

* `docs/BUG_AUDIT.md`
* `docs/BROKEN_LINKS.md`
* `docs/CONTENT_ISSUES.md`
* `docs/FIX_LOG.md`
* `docs/FINAL_BUG_FIX_REPORT.md`

---

# 38. CURSOR EXECUTION RULE

You are working inside Cursor.

Use the repository as the source of truth.

Do not rely solely on the public website.

When the repository and live website disagree:

1. Identify the difference.
2. Determine whether it is caused by local code, deployment, cache, environment variables, database, or hosting.
3. Do not assume the local version is automatically correct.
4. Report the discrepancy.

---

# 39. ASK BEFORE HIGH-RISK CHANGES

Do not proceed automatically with:

* production database migrations
* destructive data changes
* authentication architecture changes
* major framework migration
* production infrastructure changes
* domain/DNS changes
* payment-related changes
* deleting large amounts of code
* changing production environment variables
* removing important dependencies

Instead report:

```text
HIGH-RISK CHANGE DETECTED

Change:
Reason:
Affected systems:
Risk:
Recommended action:

Please approve before proceeding.
```

Safe local code fixes can be performed autonomously.

---

# 40. DEFINITION OF DONE

The project is NOT considered complete merely because:

* it compiles
* the homepage opens
* lint passes

The task is complete only when:

* critical bugs are fixed
* high-priority bugs are fixed
* important medium-priority bugs are fixed
* broken internal links are resolved
* routes work
* API failures are handled
* frontend errors are resolved
* responsive layouts work
* mobile UI works
* major accessibility issues are resolved
* important SEO issues are resolved
* performance problems are addressed
* security issues are addressed
* automated tests pass
* production build passes
* browser smoke tests pass
* final regression audit passes
* remaining issues are documented

---

# 41. FIRST COMMAND / FIRST ACTION

Do NOT immediately edit code.

First:

1. Inspect repository.
2. Identify technology stack.
3. Inspect package scripts.
4. Inspect route structure.
5. Inspect API/backend structure.
6. Inspect database structure.
7. Inspect configuration.
8. Run baseline tests/build.
9. Create `docs/BUG_AUDIT.md`.
10. Produce an initial audit summary.

Then begin fixing the highest-priority verified bug.

---

# 42. FINAL RESPONSE FORMAT

When you finish a work session, report:

```text
AUTO MOTONEWS BUG-FIX SESSION

Audit:
- Pages checked:
- Routes checked:
- APIs checked:
- Links checked:
- Responsive sizes checked:

Bugs:
- Critical found:
- High found:
- Medium found:
- Low found:

Fixed:
- Critical:
- High:
- Medium:
- Low:

Tests:
- Lint:
- Typecheck:
- Unit tests:
- E2E:
- Build:

Remaining:
- Issue:
- Reason:
- Recommended next action:

Files changed:
- ...

Documentation:
- docs/BUG_AUDIT.md
- docs/BROKEN_LINKS.md
- docs/CONTENT_ISSUES.md
- docs/FIX_LOG.md
- docs/FINAL_BUG_FIX_REPORT.md
```

Never claim PASS if the test was not actually executed.

Never claim "all bugs fixed" unless the corresponding audit and regression tests were actually performed.

---

# START NOW

Begin with repository discovery and baseline audit.

Do not make destructive changes.

Do not rewrite the application.

Do not skip verification.

Find the real root causes, fix them safely, test every fix, and perform a final regression audit before declaring the project complete.
