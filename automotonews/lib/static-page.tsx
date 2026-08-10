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

async function loadPage(routeSlug: string): Promise<{
  page: CmsPage | null;
  error: string | null;
  configMissing: boolean;
}> {
  if (!isCmsConfigured()) {
    return { page: null, error: null, configMissing: true };
  }

  try {
    const page = await getPageByRouteSlug(routeSlug);
    return { page, error: null, configMissing: false };
  } catch (error) {
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
        <div className="mx-auto max-w-3xl px-4 py-10">
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
        <div className="mx-auto max-w-3xl px-4 py-10">
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
      <article className="mx-auto max-w-3xl px-4 py-8 sm:py-10">
        <JsonLd
          data={buildBreadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: page.title, path },
          ])}
        />
        <Breadcrumbs
          items={[{ label: "Home", href: "/" }, { label: page.title }]}
        />
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {page.title}
        </h1>
        {page.excerpt ? (
          <p className="mt-4 text-lg leading-relaxed text-muted">{page.excerpt}</p>
        ) : null}
        <div className="mt-8">
          <ArticleBody html={page.body} />
        </div>
        {showContactEmail ? <SiteContactEmailBlock /> : null}
      </article>
    );
  }

  return { generateMetadata, Page };
}

function SiteContactEmailBlock() {
  return (
    <aside
      className="mt-8 rounded-xl border border-border bg-surface px-4 py-4 sm:px-5"
      aria-label="Contact email"
    >
      <p className="text-sm font-semibold text-foreground">Email us</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">
        For questions, corrections, or partnership inquiries, write to{" "}
        <a
          href={`mailto:${SITE_CONTACT_EMAIL}`}
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          {SITE_CONTACT_EMAIL}
        </a>
        . We monitor that inbox.
      </p>
    </aside>
  );
}
