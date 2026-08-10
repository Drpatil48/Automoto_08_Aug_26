import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  isReservedOrCategorySegment,
  resolveArticleRedirectPath,
  resolveArticleRedirectPathById,
} from "@/lib/redirects";

function preferredPath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

/**
 * Phase 8 runtime fallback for WordPress flat permalinks, `?p=` shortlinks,
 * and wrong-category article paths.
 *
 * Build-time redirects in `next.config.ts` cover known flat post URLs. This
 * proxy resolves data-driven cases via the WP REST API — never invented maps.
 *
 * Next.js 16: `middleware` was renamed to `proxy`.
 */
export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const postIdParam = request.nextUrl.searchParams.get("p");

  // WP shortlink: `/?p={id}` → preferred article path (strip query).
  if (
    (pathname === "/" || pathname === "") &&
    postIdParam &&
    /^\d+$/.test(postIdParam)
  ) {
    try {
      const destination = await resolveArticleRedirectPathById(
        Number(postIdParam),
      );
      if (destination) {
        const url = request.nextUrl.clone();
        url.pathname = destination;
        url.search = "";
        return NextResponse.redirect(url, 301);
      }
    } catch {
      return NextResponse.next();
    }
  }

  // Two-segment article path: correct wrong category in one HTTP 301 hop.
  const articleMatch = pathname.match(/^\/([^/]+)\/([^/]+)\/?$/);
  if (articleMatch) {
    const category = articleMatch[1];
    const slug = articleMatch[2];
    if (
      category &&
      slug &&
      !category.includes(".") &&
      !slug.includes(".") &&
      category !== "category"
    ) {
      try {
        const destination = await resolveArticleRedirectPath(slug);
        if (destination && destination !== preferredPath(pathname)) {
          const url = request.nextUrl.clone();
          url.pathname = destination;
          url.searchParams.delete("p");
          return NextResponse.redirect(url, 301);
        }
      } catch {
        // Fall through to the App Router article page.
      }
    }
    return NextResponse.next();
  }

  // Single-segment flat WP permalink fallback (posts published after build).
  const match = pathname.match(/^\/([^/]+)\/?$/);
  if (!match) {
    return NextResponse.next();
  }

  const segment = match[1];
  if (!segment || isReservedOrCategorySegment(segment)) {
    return NextResponse.next();
  }

  if (segment.includes(".")) {
    return NextResponse.next();
  }

  try {
    const destination = await resolveArticleRedirectPath(segment);
    if (!destination) {
      return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = destination;
    url.searchParams.delete("p");
    return NextResponse.redirect(url, 301);
  } catch {
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/",
    "/((?!_next/static|_next/image|_next/data|api|.*\\..*).*)",
  ],
};
