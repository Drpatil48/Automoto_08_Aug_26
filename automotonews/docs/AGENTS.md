# AGENTS.md — AutomotoNews.in Development Rules

## Mission

You are working on AutomotoNews.in, a Marathi-first Indian automotive publication.

Primary goals:

1. Improve SEO.
2. Improve UI/UX.
3. Improve performance.
4. Improve trust and editorial quality.
5. Increase useful organic traffic and returning users.
6. Preserve existing content and URLs unless a migration plan exists.

Read `AUTOMOTONEWS_SEO_UX_MASTER_PLAN.md` before making major changes.

---

## Non-Negotiable Rules

### 1. Inspect before changing

Never rewrite a major feature immediately.

First inspect:

- current architecture
- routes
- components
- data model
- metadata
- schema
- sitemap
- robots
- canonical URLs
- images
- analytics
- existing content
- dependencies

Then create a concise implementation plan.

### 2. Preserve SEO equity

Never delete or rename indexed URLs casually.

Before changing a URL:

```text
old URL
→ 301 redirect
→ new canonical URL
```

Check internal links after migration.

### 3. No fake information

Never invent:

- prices
- specifications
- range
- mileage
- launch dates
- reviews
- ratings
- author identities
- sources

If data is unavailable, clearly mark it as unavailable.

### 4. No mass AI publishing

AI may assist with:

- outlines
- editing
- summaries
- SEO QA
- internal-link suggestions
- code
- test generation

AI must not be treated as an automatic factual source.

### 5. Mobile first

Every UI change must be verified at mobile widths before completion.

### 6. Accessibility

Use:

- semantic HTML
- keyboard support
- visible focus
- accessible labels
- correct heading hierarchy
- accurate alt text

### 7. Performance

Protect:

- LCP
- INP
- CLS

Target:

```text
LCP <= 2.5s
INP <= 200ms
CLS <= 0.1
```

Do not add a library when a small native implementation is sufficient.

### 8. SEO metadata

Every indexable page needs:

- unique title
- useful meta description
- canonical
- correct robots behavior
- Open Graph metadata
- appropriate structured data

### 9. Structured data must be truthful

Only output schema matching visible page content.

Never fabricate:

- AggregateRating
- Review
- Product price
- Author
- Date

### 10. UI consistency

Use the existing design system when possible.

Create reusable components instead of page-specific duplicated UI.

---

# Agent Workflow

For every major task:

```text
AUDIT
↓
PLAN
↓
IMPLEMENT
↓
TEST
↓
BROWSER VERIFY
↓
SEO VERIFY
↓
PERFORMANCE VERIFY
↓
REPORT
```

---

# Browser Verification

Use browser verification for:

- homepage
- category pages
- article pages
- navigation
- search
- comparison
- forms
- responsive behavior

Check:

```text
Desktop
Mobile
Slow network
Long article
Large image
Empty state
Error state
```

---

# SEO Verification Checklist

Before declaring a page complete:

- [ ] One H1
- [ ] Correct title
- [ ] Correct description
- [ ] Canonical
- [ ] Robots
- [ ] Breadcrumbs
- [ ] Structured data
- [ ] OG image
- [ ] Descriptive image alt
- [ ] Internal links
- [ ] No broken links
- [ ] No duplicate content created
- [ ] Correct datePublished/dateModified
- [ ] Correct author

---

# Content Architecture Rules

Preferred categories:

```text
Latest
Cars
Bikes
EV
Reviews
Comparisons
Upcoming
Buying Guides
Auto Technology
```

Do not create overlapping categories such as multiple versions of "Bike News" unless their purpose is clearly different.

---

# Component Rules

Prefer reusable components:

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
JsonLd
```

---

# Data Rules

Use typed data structures for:

```text
Article
Author
Category
Vehicle
Comparison
Source
```

Vehicle facts should include a verification/source field where practical.

---

# Image Rules

- Use responsive images.
- Reserve dimensions.
- Optimize file size.
- Do not lazy-load the primary LCP image.
- Lazy-load below-the-fold images.
- Use descriptive filenames.
- Use accurate alt text.
- Preserve image credit/source information.

---

# Ad Rules

Ads must never:

- resemble navigation
- cover content
- cause layout shifts
- create accidental clicks
- interrupt the user immediately with aggressive overlays

Keep editorial content clearly distinguishable from advertising.

---

# Change Safety

Before destructive changes:

1. Explain what will be changed.
2. Identify affected routes/components.
3. Identify SEO risks.
4. Create a rollback path.
5. Test existing pages.

Do not perform a complete project rewrite simply because a cleaner architecture is possible.

---

# Definition of Done

A task is complete only when:

```text
Code works
+
Browser test passes
+
Mobile test passes
+
SEO test passes
+
No important regressions
+
Performance remains acceptable
+
Changes are documented
```

---

# Preferred Agent Output

At the end of every major task, report:

```text
## Completed

## Files Changed

## SEO Impact

## UX Impact

## Performance Impact

## Tests Performed

## Remaining Risks

## Next Recommended Task
```
