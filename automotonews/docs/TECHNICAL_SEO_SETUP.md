# Technical SEO Setup — automotonews.in (Next.js)

Your site serves images through `/_next/image?url=...`, which confirms a Next.js
frontend. These snippets assume the App Router (Next.js 13.3+) — adjust the
import paths if you're still on the Pages Router.

---

## 1. Dynamic sitemap.xml

Next.js can auto-generate `sitemap.xml` from a single `app/sitemap.ts` file — no
manual XML maintenance, no plugin.

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'

async function getAllPosts() {
  // Replace with your real data source (WP REST API, headless CMS, or local content)
  const res = await fetch('https://automotonews.in/api/posts', { next: { revalidate: 3600 } })
  return res.json() // expects [{ slug, category, updatedAt }]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: 'https://automotonews.in/', lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: 'https://automotonews.in/electric-vehicles-evs', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://automotonews.in/car-news', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://automotonews.in/sportsbikes', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://automotonews.in/upcoming-cars', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://automotonews.in/auto-technology', lastModified: new Date(), changeFrequency: 'daily', priority: 0.8 },
  ]

  const postRoutes: MetadataRoute.Sitemap = posts.map((post: any) => ({
    url: `https://automotonews.in/${post.category}/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...postRoutes]
}
```

After deploying, confirm it's live at `automotonews.in/sitemap.xml`, then submit
it in Google Search Console. **Only include the final, redirected-to URLs** —
don't list both the old flat slugs and the new category-prefixed ones.

---

## 2. Article schema (JSON-LD)

Add to each post page component:

```tsx
function ArticleSchema({ post }: { post: any }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    image: [post.featuredImage],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { '@type': 'Person', name: 'Dhanraj Patil' },
    publisher: {
      '@type': 'Organization',
      name: 'AutomotoNews.in',
      logo: { '@type': 'ImageObject', url: 'https://automotonews.in/logo.png' },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://automotonews.in/${post.category}/${post.slug}`,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## 3. FAQ schema (JSON-LD)

You already write FAQ sections in every post (good instinct) — this is what
makes them eligible for the FAQ rich result in search:

```tsx
function FaqSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## 4. BreadcrumbList schema

Your pages already show a breadcrumb-style nav (Home / category / article) —
this makes it show up as breadcrumbs in the actual search result too:

```tsx
function BreadcrumbSchema({
  category, categoryUrl, title, url,
}: { category: string; categoryUrl: string; title: string; url: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://automotonews.in/' },
      { '@type': 'ListItem', position: 2, name: category, item: categoryUrl },
      { '@type': 'ListItem', position: 3, name: title, item: url },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## After deploying

- Test each page at https://search.google.com/test/rich-results
- Resubmit `sitemap.xml` in Google Search Console
- Fix the old-vs-new URL issue first (see chat) — make sure it's a real 301,
  not a 302 or a client-side rewrite, before you rely on the sitemap above
