# AutomotoNews.in — SEO + UI/UX + Growth Master Plan

**Project:** AutomotoNews.in  
**Positioning:** Marathi-first automotive publication for India  
**Primary goals:** Better Google visibility, better UX, stronger Discover/News potential, higher returning users, stronger trust, and AdSense readiness.

> This plan is based on a live review of the current homepage plus current Google Search guidance available in August 2026. Treat this as the product/SEO roadmap, not a guarantee of rankings.

---

## 1. Current Website Diagnosis

### What is already good

- Clear Marathi automotive positioning.
- Main topics are visible: EVs, Daily Updates, Car News, Sports Bikes, Upcoming Cars.
- Homepage has featured content, category sections, a comparison feature, newsletter signup, and legal/trust pages.
- The site is mobile-first in its positioning.
- There is an existing vehicle comparison concept that can become a major SEO/product differentiator.

### Highest-priority issues observed

1. **Content freshness is weak on the homepage**
   - The homepage currently surfaces articles from 2025 and even 2024.
   - A news site needs a strong "latest" experience and a clear distinction between current news and evergreen guides.

2. **Category/content mismatch**
   - Some sections do not appear semantically aligned with their labels. For example, "Hybrid Vehicles" currently contains older mixed automotive stories, while "Sports Bikes" and "Bikes News" also appear as separate concepts.
   - Consolidate taxonomy so every category has a clear purpose.

3. **Homepage hierarchy can be much stronger**
   - The site should immediately answer:
     - What is new today?
     - What is trending?
     - What should I read next?
     - What vehicle/category do I care about?
   - Reduce repetitive category blocks and give more visual priority to current stories.

4. **News-site trust signals need to be prominent**
   - Build strong author pages, editorial policy, corrections policy, source methodology, updated timestamps, contact information, and transparent ownership.

5. **Article pages should be designed as products, not only blog posts**
   - Add quick summary, key facts, price/spec tables where relevant, pros/cons, source links, related stories, author, updated date, reading progress, and "next story" navigation.

6. **Search/discovery opportunities are underdeveloped**
   - Build topic clusters around EVs, new car launches, bike launches, prices, mileage/range, comparisons, ownership costs, charging, government policies, and buying guides.

---

# 2. Product Vision

Build AutomotoNews into:

> **"The easiest Marathi website to understand what is happening in India's car, bike and EV market — and decide what to buy."**

The site should serve 4 user intents:

| User intent | Product experience |
|---|---|
| Latest news | Fast, chronological news feed |
| Research | Deep evergreen guides |
| Compare | Vehicle comparison tools |
| Buy/decision | Price, specs, running cost, pros/cons, alternatives |

---

# 3. New Information Architecture

## Primary navigation

Recommended:

- मुख्यपृष्ठ
- लेटेस्ट ऑटो न्यूज
- कार
- बाईक्स
- EV
- Upcoming
- Reviews
- Comparisons
- Buying Guides

### Suggested category hierarchy

```text
/
├── latest/
├── cars/
│   ├── launches/
│   ├── price/
│   ├── reviews/
│   ├── comparisons/
│   └── upcoming/
├── bikes/
│   ├── launches/
│   ├── reviews/
│   ├── price/
│   └── upcoming/
├── ev/
│   ├── cars/
│   ├── bikes/
│   ├── charging/
│   ├── battery/
│   └── ev-guides/
├── guides/
├── comparisons/
├── reviews/
└── author/
```

Do not create a new category unless it can support multiple genuinely useful pages.

---

# 4. Homepage Redesign

## Above the fold

Use this structure:

```text
[Logo] [Latest] [Cars] [Bikes] [EV] [Reviews] [Compare] [Search] [☰]

--------------------------------------------------

LATEST AUTOMOTIVE NEWS
मराठीत भारतातील ऑटो सेक्टरमधील ताज्या बातम्या

[MAIN STORY — large image]
Headline
2-line summary
Updated time

[Story] [Story] [Story]

--------------------------------------------------

🔥 TRENDING NOW
1. ...
2. ...
3. ...
4. ...

--------------------------------------------------

⚡ EV ZONE
[Large feature] [4 supporting stories]

🚗 CAR NEWS
[Large feature] [4 supporting stories]

🏍️ BIKE NEWS
[Large feature] [4 supporting stories]

📊 COMPARE BEFORE YOU BUY
[Vehicle A] VS [Vehicle B]

💰 BUYING GUIDES
[5 useful evergreen guides]

📰 LATEST UPDATES
Chronological feed

📩 DAILY AUTO UPDATES
Newsletter / preferred-source CTA

[Footer]
```

## UX rules

- Mobile-first.
- Keep the header compact.
- Sticky bottom navigation on mobile is optional; test it before permanent adoption.
- Search must be easy to find.
- Do not overload the homepage with huge cards.
- Use consistent image ratios.
- Avoid layout shifts.
- Keep advertisements visually separated from editorial content.
- Never use deceptive click targets.
- Every important card should have a clear headline and destination.

---

# 5. Visual Design System

## Recommended direction

**Style:** Modern Indian automotive editorial publication.

Use:

- White/light neutral background.
- One strong brand accent.
- Dark text with high contrast.
- Large editorial photography.
- Rounded cards used sparingly.
- Strong typography hierarchy.
- Compact metadata.
- Consistent spacing.
- Minimal gradients.
- Avoid excessive animations.

## Typography hierarchy

```text
H1: 40–52px desktop / 30–36px mobile
H2: 28–36px desktop / 24–28px mobile
H3: 20–24px
Body: 17–19px
Metadata: 13–14px
```

For Marathi, verify the selected font renders Devanagari correctly and remains fast.

---

# 6. Article Page Blueprint

Every important article should follow:

```text
Breadcrumbs

Category badge

H1: Specific, useful headline

Short dek/summary

Author | Published | Updated | Reading time

Hero image
Image credit/source

TL;DR / झटपट माहिती

Key facts / Important numbers

Main article

[Relevant table]

Why this matters

What changed?

Price / Specs / Range / Mileage
(if relevant)

Pros & Cons
(if relevant)

Our analysis / Editorial view
(if genuinely original)

Sources

Related articles

More from this topic

Author box

Newsletter

Comments / feedback (optional)

Next article
```

## Important

Do not make every article look like AI-generated generic content.

For news, add original value such as:

- verified facts
- source comparison
- context
- historical comparison
- local Indian relevance
- buyer implications
- calculations
- original tables
- original photography when available
- clearly identified editorial analysis

---

# 7. SEO Foundation

## Technical SEO checklist

- [ ] HTTPS everywhere
- [ ] One canonical URL per page
- [ ] XML sitemap
- [ ] News sitemap if eligible/appropriate
- [ ] Correct robots.txt
- [ ] Clean 301 redirects
- [ ] No accidental noindex
- [ ] No duplicate category URLs
- [ ] Consistent trailing-slash strategy
- [ ] Correct pagination handling
- [ ] Breadcrumbs
- [ ] Descriptive URLs
- [ ] Proper title tags
- [ ] Meta descriptions
- [ ] One clear H1
- [ ] Semantic HTML
- [ ] Descriptive image alt text
- [ ] Open Graph metadata
- [ ] Twitter/X metadata
- [ ] Correct canonical tags
- [ ] Author information
- [ ] Updated timestamps
- [ ] Search Console monitoring

Google's current documentation emphasizes canonicalization when duplicate or highly similar URLs exist, so URL consistency should be treated as a core technical requirement.

---

# 8. Structured Data

Implement only schema that accurately describes the page.

## Site-wide

- Organization
- WebSite
- BreadcrumbList

## Article pages

Use the appropriate Article/NewsArticle markup based on the actual content.

Include accurate:

- headline
- image
- datePublished
- dateModified
- author
- publisher
- mainEntityOfPage

## Vehicle/product pages

Where genuinely applicable:

- Product
- Offer
- Review
- AggregateRating

Do not fabricate ratings, reviews, prices, specifications, authors, or dates.

## Important 2026 note

Do not waste development time trying to restore old FAQ rich-result tactics. Google removed the FAQ rich-result feature from its documentation in 2026.

---

# 9. Google Discover + News Strategy

Discover is not a guaranteed traffic channel. Build for usefulness first.

## Every news article should have

- Strong original headline
- High-quality representative image
- Large image suitable for discovery surfaces
- Clear publication date
- Clear updated date when updated
- Author identity
- Original value
- Accurate information
- No clickbait
- Strong mobile experience

Google's current documentation specifically highlights preferred-source functionality and has expanded guidance around Discover and generative-search experiences.

## Add a preferred-source CTA

When eligible, consider Google's "Add to preferred sources" experience so readers can choose AutomotoNews as a preferred source.

This should be treated as an audience-retention feature, not an SEO trick.

---

# 10. E-E-A-T / Trust Layer

Create these pages:

```text
/about/
/contact/
/editorial-policy/
/corrections-policy/
/privacy-policy/
/disclaimer/
/terms/
/authors/
```

## Author profile

Every author should have:

- Real name
- Photo
- Short bio
- Areas of expertise
- Published articles
- Social/profile links where appropriate

## Editorial policy

Explain:

- How stories are researched
- How sources are verified
- How corrections happen
- How sponsored content is labeled
- How AI tools are used, if used
- Who reviews technical claims

---

# 11. Content Strategy

Do NOT publish random articles just to increase article count.

Use topic clusters.

## Pillar 1 — EV

Examples:

- Best EV cars in India
- EV charging guide
- EV battery life
- EV running cost
- EV vs petrol cost
- Charging station guides
- EV subsidy/policy updates
- Upcoming EV launches

## Pillar 2 — Cars

- New launches
- Price updates
- Mileage
- Variants
- Features
- Comparisons
- Ownership cost
- Upcoming cars

## Pillar 3 — Bikes

- New launches
- Mileage
- Price
- Performance
- Comparisons
- Reviews
- Upcoming bikes

## Pillar 4 — Buying Guides

Examples:

- Best car under ₹10 lakh
- Best EV for city driving
- Best bike for daily commute
- Best family SUV
- EV vs petrol
- Automatic vs manual

## Pillar 5 — Automotive Explainers

Examples:

- What is ADAS?
- What is regenerative braking?
- What is battery degradation?
- What is torque?
- What is hybrid technology?

---

# 12. Content Quality Rules

Before publishing any article:

- [ ] Primary facts verified
- [ ] Manufacturer/official source checked when relevant
- [ ] Date checked
- [ ] Price checked
- [ ] Specifications checked
- [ ] Claims supported
- [ ] No copied paragraphs
- [ ] No spun content
- [ ] No generic AI filler
- [ ] Original introduction
- [ ] Useful tables where appropriate
- [ ] Original analysis/context
- [ ] Internal links added
- [ ] Author assigned
- [ ] Image source/credit handled correctly
- [ ] SEO title reviewed
- [ ] Meta description reviewed
- [ ] Schema validated

---

# 13. AI Content Workflow

Gemini/AI should be used as an assistant, not as an automatic publishing machine.

Recommended:

```text
Research
   ↓
Official/credible source verification
   ↓
Human editorial outline
   ↓
AI-assisted draft
   ↓
Fact verification
   ↓
Original analysis
   ↓
Human editing
   ↓
SEO optimization
   ↓
Schema validation
   ↓
Publish
   ↓
Search Console monitoring
```

Never ask Gemini to "rewrite this article so it passes Google."

Instead ask it to:

- identify unsupported claims
- detect repetition
- suggest missing context
- improve clarity
- create comparison tables from verified facts
- generate internal-link suggestions
- inspect semantic HTML
- audit metadata
- find UX issues

---

# 14. Internal Linking System

Every article should link to:

1. One parent category.
2. 2–5 related articles.
3. One relevant pillar page.
4. One comparison/guide when appropriate.

Example:

```text
EV article
   ↓
EV category
   ↓
EV pillar guide
   ↓
Battery guide
   ↓
Charging guide
   ↓
EV comparison
```

Use descriptive anchor text.

Avoid:

- "click here"
- "read more" as the only contextual anchor
- excessive exact-match anchors

---

# 15. Search UX

Build a proper site search.

Features:

- Instant suggestions
- Recent searches
- Category filtering
- Search by vehicle/model
- Search by topic
- Search results with image + date
- No-result recommendations

Potential future:

```text
Search: "Creta"

Results:
Hyundai Creta
Creta EV
Creta vs Seltos
Creta price
Creta mileage
Creta variants
```

---

# 16. Vehicle Comparison Tool — Major Growth Opportunity

Make this one of the site's signature features.

Allow:

```text
Select Vehicle A
Select Vehicle B

Price
Engine
Power
Torque
Mileage / Range
Battery
Charging
Dimensions
Safety
Features
Warranty
Running cost
Pros
Cons
Best for
```

Add unique URLs:

```text
/compare/hyundai-creta-vs-kia-seltos/
/compare/tata-nexon-ev-vs-mg-windsor-ev/
```

These pages can become long-term evergreen search assets.

Do not generate thousands of thin combinations automatically.

Only index comparison pages with meaningful content and demand.

---

# 17. Performance / Core Web Vitals

Target:

- LCP ≤ 2.5s
- INP ≤ 200ms
- CLS ≤ 0.1

Priorities:

1. Optimize hero image.
2. Use responsive images.
3. Use modern image formats.
4. Lazy-load below-the-fold images.
5. Do not lazy-load the main LCP image.
6. Reserve image dimensions.
7. Reduce JavaScript.
8. Remove unused CSS.
9. Avoid heavy third-party scripts.
10. Delay non-essential ad/analytics work where technically appropriate.
11. Use caching/CDN.
12. Preload only truly critical resources.

Measure real users, not only Lighthouse.

---

# 18. Ads + AdSense UX

Because the site wants monetization:

## Do

- Keep ads clearly distinguishable.
- Protect article readability.
- Keep mobile layout stable.
- Avoid excessive ads above content.
- Keep navigation usable.
- Make consent/privacy implementation correct for the audience and ad stack.

## Do not

- Place ads where they look like navigation.
- Create fake download buttons.
- Use aggressive interstitials.
- Cover the article with ads.
- Make accidental clicks likely.
- Publish thin pages mainly to show ads.

Build the editorial product first and monetization second.

---

# 19. Analytics

Connect:

- Google Search Console
- Google Analytics
- PageSpeed Insights / CrUX where available

Track:

### SEO

- Impressions
- Clicks
- CTR
- Average position
- Indexed pages
- Excluded pages
- Discover traffic
- Google News traffic

### UX

- Bounce/engagement signals
- Scroll depth
- Search usage
- Article completion
- Related article clicks
- Comparison-tool usage

### Growth

- Returning users
- Newsletter subscribers
- Preferred-source interactions
- Social traffic
- Top landing pages

---

# 20. Weekly SEO Dashboard

Create a simple dashboard:

```text
Organic clicks:
Organic impressions:
CTR:
Average position:

Top 10 pages:
Top rising pages:
Top declining pages:

New indexed pages:
Pages excluded:

Discover:
Google News:

Newsletter subscribers:

Top queries:
Queries with high impressions + low CTR:
Queries ranking 4–20:
```

The "ranking 4–20" group is especially useful for finding pages that need better titles, content depth, internal links, or intent matching.

---

# 21. Content Publishing Cadence

Do not optimize for maximum volume.

Suggested weekly structure:

### News

3–7 genuinely useful updates/day only when there is real news.

### Evergreen

2–4 high-quality guides/week.

### Comparison

1–3 meaningful comparisons/week.

### Refresh

5–10 existing articles/week where facts have changed or the page has search potential.

The exact number should be adjusted based on your editorial capacity.

---

# 22. Article Refresh System

For old articles:

```text
Keep
 ↓
Check facts
 ↓
Check price
 ↓
Check specifications
 ↓
Update date only if substantial update occurred
 ↓
Improve title if intent is weak
 ↓
Add current information
 ↓
Add internal links
 ↓
Improve images
 ↓
Validate schema
 ↓
Request recrawl if appropriate
```

Do not mass-change publication dates without meaningful updates.

---

# 23. URL Strategy

Prefer:

```text
/ev/tata-nexon-ev-price-range/
/cars/hyundai-creta-price/
/bikes/kawasaki-z400-india-launch/
/compare/creta-vs-seltos/
```

Avoid:

```text
/?p=123
/2025/11/random-title/
/article?id=123
```

Keep URLs short, readable, stable, and topic-oriented.

---

# 24. Image SEO

For every article:

- Use a relevant original/licensed image.
- Use descriptive filenames.
- Add accurate alt text.
- Define width/height.
- Use responsive sizes.
- Use a preferred image in social metadata.
- Avoid unnecessarily huge files.
- Keep image subject aligned with article intent.

Example:

```text
hyundai-creta-ev-front-profile-india.webp
```

not:

```text
IMG_83921.webp
```

---

# 25. Mobile UX

Test these devices/classes:

- Low-end Android
- Mid-range Android
- iPhone
- Desktop
- Slow 4G
- Fast Wi-Fi

Check:

- Header
- Search
- Article readability
- Tables
- Images
- Ads
- Sticky elements
- Cookie/consent UI
- Newsletter
- Comparison tool

---

# 26. Accessibility

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper labels
- Sufficient contrast
- Descriptive link text
- Alt text
- Accessible forms
- Accessible menus
- Reduced-motion support

Accessibility should be part of the component system, not a final cleanup task.

---

# 27. Development Architecture

Keep content, SEO, and UI concerns reusable.

Recommended components:

```text
Header
MobileNav
Search
Breadcrumbs
ArticleCard
FeaturedStory
TrendingList
CategorySection
ArticleHeader
ArticleBody
KeyFacts
SpecsTable
ProsCons
RelatedArticles
AuthorBox
Newsletter
ComparisonTool
Footer
AdSlot
SEOHead
JsonLd
```

Create reusable data structures for:

```text
Article
Author
Category
Vehicle
Comparison
Source
```

---

# 28. SEO Metadata Architecture

Every route should have a dedicated metadata function.

Example concept:

```text
getArticleMetadata(article)
getCategoryMetadata(category)
getVehicleMetadata(vehicle)
getComparisonMetadata(vehicleA, vehicleB)
```

Never generate identical titles/descriptions for every page.

---

# 29. Database / Content Model

Suggested Article fields:

```text
id
slug
title
dek
content
excerpt
category
tags
author
featuredImage
imageCredit
publishedAt
updatedAt
sources[]
readingTime
isFeatured
isTrending
seoTitle
seoDescription
canonicalUrl
status
```

Vehicle:

```text
id
brand
model
variant
vehicleType
fuelType
price
engine
power
torque
mileage
range
battery
charging
dimensions
safety
features
launchDate
lastVerifiedAt
officialSource
```

---

# 30. Security + Reliability

- Validate all form inputs.
- Protect newsletter endpoints.
- Rate-limit search.
- Sanitize user-generated content.
- Use secure headers.
- Prevent XSS.
- Keep dependencies updated.
- Monitor broken links.
- Add error pages.
- Log server errors.
- Back up content/database.

---

# 31. 30 / 60 / 90 Day Roadmap

## Days 1–30 — Foundation

### P0

- [ ] Full technical SEO audit
- [ ] Fix sitemap/robots/canonical issues
- [ ] Fix taxonomy/category mismatch
- [ ] Redesign header/navigation
- [ ] Redesign homepage
- [ ] Improve article template
- [ ] Add author system
- [ ] Add editorial policy
- [ ] Improve About/Contact/Privacy/Disclaimer
- [ ] Add proper Article/NewsArticle schema
- [ ] Add Organization/WebSite/Breadcrumb schema
- [ ] Improve image handling
- [ ] Measure Core Web Vitals
- [ ] Connect Search Console + Analytics

## Days 31–60 — Growth

- [ ] Launch topic clusters
- [ ] Build latest-news page
- [ ] Improve search
- [ ] Build related-content engine
- [ ] Build comparison system
- [ ] Create 10–20 high-value evergreen guides
- [ ] Refresh highest-potential old articles
- [ ] Improve internal linking
- [ ] Add newsletter growth system
- [ ] Add preferred-source CTA when eligible
- [ ] Start weekly SEO dashboard

## Days 61–90 — Scale

- [ ] Expand comparison pages selectively
- [ ] Launch vehicle/model landing pages
- [ ] Build buying-guide hub
- [ ] Improve Discover-ready editorial workflow
- [ ] Improve social/video distribution
- [ ] Automate SEO QA in CI
- [ ] Build content refresh alerts
- [ ] Build broken-link monitoring
- [ ] Build search-query opportunity workflow
- [ ] Review ad placement only after UX is stable

---

# 32. Priority Matrix

| Priority | Feature | Impact | Effort |
|---|---|---:|---:|
| P0 | Homepage redesign | Very High | Medium |
| P0 | Article template | Very High | Medium |
| P0 | Technical SEO | Very High | Medium |
| P0 | Author/trust system | Very High | Medium |
| P0 | Content taxonomy cleanup | High | Low |
| P0 | Core Web Vitals | Very High | Medium |
| P1 | Search | High | Medium |
| P1 | Internal linking | High | Medium |
| P1 | Comparison tool | Very High | High |
| P1 | Buying guides | High | Medium |
| P1 | Newsletter | Medium | Low |
| P2 | Vehicle database | Very High | High |
| P2 | Personalization | Medium | High |
| P2 | PWA/app | Low initially | High |

---

# 33. Antigravity Development Strategy

Use Antigravity as an agentic development environment, but do not ask one giant prompt to rebuild everything.

Google's current Antigravity documentation describes browser-based verification, parallel agents, artifacts, and end-to-end development workflows. Use those capabilities to divide the project into small, testable tasks.

Recommended agent roles:

```text
Agent 1 — SEO Auditor
Agent 2 — UX/UI Designer
Agent 3 — Frontend Engineer
Agent 4 — Technical SEO Engineer
Agent 5 — Content Architecture Engineer
Agent 6 — Performance Engineer
Agent 7 — QA / Browser Testing Agent
```

Run independent audits in parallel, then have one implementation agent integrate the approved plan.

---

# 34. Antigravity Task Sequence

### Task 1 — Audit only

Tell Gemini:

```text
Audit the existing AutomotoNews.in codebase.

Do not change code.

Inspect:
- routes
- components
- SEO metadata
- schema
- sitemap
- robots
- canonical URLs
- image loading
- performance
- accessibility
- mobile UX
- category architecture
- article templates
- internal linking

Use browser verification where possible.

Create:
AUTOMOTONEWS_AUDIT.md

Rank every issue P0/P1/P2/P3.
```

### Task 2 — UX redesign

```text
Read AUTOMOTONEWS_SEO_UX_MASTER_PLAN.md.

Do not change backend/content yet.

Redesign:
- header
- navigation
- homepage
- article cards
- category pages
- article page

Keep the existing brand identity but make it feel like a premium Marathi automotive publication.

Verify desktop + mobile in the browser.
Do not invent content.
```

### Task 3 — Technical SEO

```text
Implement the technical SEO requirements from the master plan.

Before changing code:
1. inspect current implementation
2. explain conflicts
3. create a safe implementation plan

Then implement.

Verify:
- source HTML
- canonical
- metadata
- JSON-LD
- robots
- sitemap
- breadcrumbs
- Open Graph
- mobile rendering
```

### Task 4 — Performance

```text
Audit Core Web Vitals and frontend performance.

Target:
LCP <= 2.5s
INP <= 200ms
CLS <= 0.1

Do not optimize by breaking image quality or UX.

Identify the actual LCP element and largest JS/image costs first.
Implement fixes.
Verify with browser testing.
```

### Task 5 — QA

```text
Act as a senior QA engineer.

Test:
- homepage
- category pages
- article pages
- search
- comparison
- mobile menu
- newsletter
- 404
- redirects

Test desktop and mobile.

Report:
PASS
FAIL
WARNING

Do not modify code until failures are documented.
```

---

# 35. Git / Change Management

For every major task:

```text
1. Audit
2. Plan
3. Implement
4. Test
5. Review diff
6. Browser verification
7. Commit
```

Use small commits:

```text
feat: redesign homepage
fix: canonical metadata
feat: article schema
perf: optimize article images
feat: vehicle comparison
fix: category taxonomy
```

Never allow an AI agent to perform a massive undocumented rewrite.

---

# 36. SEO Acceptance Criteria

A feature is not complete until:

- [ ] No unintended indexation changes
- [ ] No broken canonical URLs
- [ ] No broken internal links
- [ ] No major CLS
- [ ] Mobile works
- [ ] Desktop works
- [ ] Structured data validates
- [ ] Metadata is unique
- [ ] Accessibility basics pass
- [ ] Existing content still resolves
- [ ] Redirects are tested
- [ ] Browser QA passes

---

# 37. Growth Flywheel

```text
Better research
      ↓
Better original articles
      ↓
Better Search visibility
      ↓
More visitors
      ↓
More returning users
      ↓
More newsletter subscribers
      ↓
More direct traffic
      ↓
More brand searches
      ↓
Stronger audience
      ↓
Better long-term business
```

Do not rely only on Google.

Build:

- Google Search
- Discover
- Google News
- YouTube Shorts
- Instagram Reels
- WhatsApp/Telegram distribution where appropriate
- Newsletter
- Direct traffic

Google's 2026 Search Console updates also provide broader visibility into social/video performance, so treat social content as part of the same measurement system.

---

# 38. What NOT to Do

Avoid:

- Mass AI-generated articles.
- Keyword stuffing.
- Fake authors.
- Fake reviews.
- Fake ratings.
- Fake specifications.
- Copying manufacturer/news-site paragraphs.
- Mass low-value comparison pages.
- Changing dates without meaningful updates.
- Buying backlinks.
- Hidden text.
- Excessive ads.
- Aggressive popups.
- Huge JavaScript bundles.
- Redesigning everything without backups.
- Removing old URLs without redirects.
- Creating categories with one or two articles.

---

# 39. Final Success Targets

Set 90-day targets around quality and user behavior rather than guaranteed rankings.

### Technical

- Core Web Vitals: Good for the majority of field traffic.
- Zero critical indexing/canonical errors.
- Stable mobile experience.

### SEO

- More indexed high-quality pages.
- More queries in positions 4–20.
- Better organic CTR.
- More non-brand impressions.
- More internal-link depth.

### Product

- Higher article engagement.
- More pages/session where appropriate.
- More comparison usage.
- More search usage.
- More returning users.
- More newsletter subscribers.

### Editorial

- Consistent publishing.
- Better source verification.
- More original analysis.
- Clear author accountability.
- Regular article refreshes.

---

# 40. First 10 Things to Build

If you want the fastest practical improvement, build in this exact order:

1. **Technical SEO audit + fixes**
2. **Homepage redesign**
3. **Premium article template**
4. **Clean category/taxonomy structure**
5. **Author + editorial trust system**
6. **Latest news + trending system**
7. **Internal linking engine**
8. **Search**
9. **Comparison tool**
10. **Core Web Vitals optimization**

After these, start scaling high-quality content clusters.

---

## Reference Notes

The roadmap aligns with current Google guidance on Search, Discover, preferred sources, canonicalization, structured data, and Core Web Vitals. Google currently recommends Core Web Vitals targets of LCP ≤ 2.5s, INP ≤ 200ms, and CLS ≤ 0.1 at the 75th percentile. Google also introduced a preferred-source experience that can help readers choose a publication as a preferred source in Search/AI surfaces.

The site review found the current homepage has useful building blocks but also a mixture of older 2024/2025 stories and category/content inconsistencies. Prioritize freshness, taxonomy, article quality, trust, and technical foundations before adding large numbers of new pages.

**Official references:**
- Google Search Central: https://developers.google.com/search/
- Google Search documentation updates: https://developers.google.com/search/updates
- Google Preferred Sources: https://developers.google.com/search/docs/appearance/preferred-sources
- Google canonicalization: https://developers.google.com/search/docs/crawling-indexing/canonicalization
- Web Vitals: https://web.dev/articles/vitals
- Google Antigravity: https://antigravity.google/
