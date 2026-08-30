import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article/ArticleBody";
import { Breadcrumbs } from "@/components/article/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { CmsStateMessage } from "@/components/ui/CmsStateMessage";
import {
  CmsConfigError,
  CmsRequestError,
  getPageByRouteSlug,
  isCmsConfigured,
} from "@/lib/cms";
import { SITE_CONTACT_EMAIL } from "@/lib/constants";
import {
  buildBreadcrumbJsonLd,
  buildStaticPageMetadata,
} from "@/lib/seo";
import type { CmsPage } from "@/lib/types";

type StaticPageConfig = {
  routeSlug: string;
  path: string;
  fallbackTitle: string;
  /** When true, show the public site contact email below CMS body content. */
  showContactEmail?: boolean;
};

import { FALLBACK_POLICIES } from "@/lib/policy-fallbacks";

async function loadPage(routeSlug: string): Promise<{
  page: CmsPage | null;
  error: string | null;
  configMissing: boolean;
}> {
  if (!isCmsConfigured()) {
    const fallback = FALLBACK_POLICIES[routeSlug];
    if (fallback) {
      return {
        page: {
          title: fallback.title,
          slug: routeSlug,
          excerpt: fallback.excerpt,
          body: fallback.bodyHtml,
          publishDate: new Date().toISOString(),
          updatedDate: new Date().toISOString(),
        },
        error: null,
        configMissing: false,
      };
    }
    return { page: null, error: null, configMissing: true };
  }

  try {
    const page = await getPageByRouteSlug(routeSlug);
    if (!page) {
      const fallback = FALLBACK_POLICIES[routeSlug];
      if (fallback) {
        return {
          page: {
            title: fallback.title,
            slug: routeSlug,
            excerpt: fallback.excerpt,
            body: fallback.bodyHtml,
            publishDate: new Date().toISOString(),
            updatedDate: new Date().toISOString(),
          },
          error: null,
          configMissing: false,
        };
      }
    }
    return { page, error: null, configMissing: false };
  } catch (error) {
    const fallback = FALLBACK_POLICIES[routeSlug];
    if (fallback) {
      return {
        page: {
          title: fallback.title,
          slug: routeSlug,
          excerpt: fallback.excerpt,
          body: fallback.bodyHtml,
          publishDate: new Date().toISOString(),
          updatedDate: new Date().toISOString(),
        },
        error: null,
        configMissing: false,
      };
    }
    if (error instanceof CmsConfigError) {
      return { page: null, error: error.message, configMissing: true };
    }
    return {
      page: null,
      error:
        error instanceof CmsRequestError
          ? error.message
          : "Unexpected error while loading this page.",
      configMissing: false,
    };
  }
}

export function createStaticPage({
  routeSlug,
  path,
  fallbackTitle,
  showContactEmail = false,
}: StaticPageConfig) {
  async function generateMetadata() {
    const { page } = await loadPage(routeSlug);
    return buildStaticPageMetadata({
      title: page?.title || fallbackTitle,
      description: page?.excerpt || null,
      path,
    });
  }

  async function Page() {
    const { page, error, configMissing } = await loadPage(routeSlug);

    if (configMissing) {
      return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <CmsStateMessage
            tone="info"
            title="WordPress API not configured"
            message="Set WP_API_URL in .env.local to load this policy page from WordPress."
          />
          {showContactEmail ? <SiteContactEmailBlock /> : null}
        </div>
      );
    }

    if (error) {
      return (
        <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
          <CmsStateMessage
            tone="error"
            title="Could not load page"
            message={error}
          />
          {showContactEmail ? <SiteContactEmailBlock /> : null}
        </div>
      );
    }

    if (!page) notFound();

    return (
      <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        <JsonLd
          data={buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: page.title, path },
          ])}
        />
        <div className="rounded-2xl border border-zinc-800/80 bg-zinc-950/70 p-6 sm:p-10 shadow-xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: page.title }]}
          />
          <h1 className="text-3xl font-black uppercase tracking-tight text-white sm:text-4xl">
            {page.title}
          </h1>
          {page.excerpt ? (
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">{page.excerpt}</p>
          ) : null}
          <div className="mt-8 border-t border-zinc-800/80 pt-6">
            <ArticleBody html={page.body} />
          </div>
          {showContactEmail ? <SiteContactEmailBlock /> : null}
        </div>
      </article>
    );
  }

  return { generateMetadata, Page };
}

function SiteContactEmailBlock() {
  return (
    <aside
      className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900/80 p-5"
      aria-label="Contact email"
    >
      <p className="text-xs font-black uppercase tracking-wider text-red-500">Email Us</p>
      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-zinc-300">
        For questions, corrections, or editorial inquiries, write to{" "}
        <a
          href={`mailto:${SITE_CONTACT_EMAIL}`}
          className="font-bold text-red-400 underline underline-offset-4 hover:text-white"
        >
          {SITE_CONTACT_EMAIL}
        </a>
        .
      </p>
    </aside>
  );
}
