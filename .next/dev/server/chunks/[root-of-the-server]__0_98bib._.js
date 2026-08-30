module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/build/adapter/setup-node-env.external.js [external] (next/dist/build/adapter/setup-node-env.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/build/adapter/setup-node-env.external.js", () => require("next/dist/build/adapter/setup-node-env.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/memory-cache.external.js [external] (next/dist/server/lib/incremental-cache/memory-cache.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/memory-cache.external.js", () => require("next/dist/server/lib/incremental-cache/memory-cache.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/shared-cache-controls.external.js [external] (next/dist/server/lib/incremental-cache/shared-cache-controls.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js", () => require("next/dist/server/lib/incremental-cache/shared-cache-controls.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/incremental-cache/tags-manifest.external.js [external] (next/dist/server/lib/incremental-cache/tags-manifest.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/incremental-cache/tags-manifest.external.js", () => require("next/dist/server/lib/incremental-cache/tags-manifest.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/lib/router-utils/instrumentation-globals.external.js [external] (next/dist/server/lib/router-utils/instrumentation-globals.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/lib/router-utils/instrumentation-globals.external.js", () => require("next/dist/server/lib/router-utils/instrumentation-globals.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/lib/redirects.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Phase 8 redirect helpers.
 *
 * Static rules are evidence-based (see docs/PHASE8_REDIRECTS.md).
 * Article flat-permalink maps are generated from the live WordPress REST API —
 * never invent per-article destinations.
 */ __turbopack_context__.s([
    "KNOWN_CATEGORY_SLUGS",
    ()=>KNOWN_CATEGORY_SLUGS,
    "RESERVED_SINGLE_SEGMENTS",
    ()=>RESERVED_SINGLE_SEGMENTS,
    "STATIC_REDIRECTS",
    ()=>STATIC_REDIRECTS,
    "TRAILING_SLASH_NORMALIZERS",
    ()=>TRAILING_SLASH_NORMALIZERS,
    "buildWpArticleRedirects",
    ()=>buildWpArticleRedirects,
    "getAllRedirects",
    ()=>getAllRedirects,
    "isReservedOrCategorySegment",
    ()=>isReservedOrCategorySegment,
    "resolveArticleRedirectPath",
    ()=>resolveArticleRedirectPath,
    "resolveArticleRedirectPathById",
    ()=>resolveArticleRedirectPathById
]);
const RESERVED_SINGLE_SEGMENTS = new Set([
    "",
    "compare",
    "search",
    "about-us",
    "about",
    "privacy-policy",
    "disclaimer",
    "contact",
    "contact-us",
    "category",
    "favicon.ico",
    "robots.txt",
    "sitemap.xml",
    "ads.txt"
]);
const KNOWN_CATEGORY_SLUGS = new Set([
    "auto-technology",
    "bikes-news",
    "car-news",
    "daily-update",
    "electric-vehicles-evs",
    "hybrid-vehicles",
    "off-roading",
    "sportsbikes",
    "sports-car",
    "upcoming-cars"
]);
const STATIC_REDIRECTS = [
    // WP page slug `contact-us` → Next route `/contact`
    {
        source: "/contact-us",
        destination: "/contact",
        statusCode: 301
    },
    {
        source: "/contact-us/",
        destination: "/contact",
        statusCode: 301
    },
    // Live WP already 301s `/about` → `/about-us`
    {
        source: "/about",
        destination: "/about-us",
        statusCode: 301
    },
    {
        source: "/about/",
        destination: "/about-us",
        statusCode: 301
    },
    // Legacy `/category/{cat}/{post}` → preferred Next article path (one hop)
    {
        source: "/category/:category/:slug",
        destination: "/:category/:slug",
        statusCode: 301
    },
    {
        source: "/category/:category/:slug/",
        destination: "/:category/:slug",
        statusCode: 301
    },
    // Legacy `/category/{cat}` → flat category archive (same as live WP)
    {
        source: "/category/:slug",
        destination: "/:slug",
        statusCode: 301
    },
    {
        source: "/category/:slug/",
        destination: "/:slug",
        statusCode: 301
    }
];
const TRAILING_SLASH_NORMALIZERS = [
    {
        source: "/:category/:slug/",
        destination: "/:category/:slug",
        statusCode: 301
    },
    // Preferred static app routes (trailing slash → canonical, one hop)
    {
        source: "/contact/",
        destination: "/contact",
        statusCode: 301
    },
    {
        source: "/about-us/",
        destination: "/about-us",
        statusCode: 301
    },
    {
        source: "/privacy-policy/",
        destination: "/privacy-policy",
        statusCode: 301
    },
    {
        source: "/disclaimer/",
        destination: "/disclaimer",
        statusCode: 301
    },
    {
        source: "/compare/",
        destination: "/compare",
        statusCode: 301
    },
    {
        source: "/search/",
        destination: "/search",
        statusCode: 301
    }
];
function categoryTrailingSlashRedirects() {
    return [
        ...KNOWN_CATEGORY_SLUGS
    ].flatMap((slug)=>[
            {
                source: `/${slug}/`,
                destination: `/${slug}`,
                statusCode: 301
            }
        ]);
}
function getWpApiBase() {
    const raw = process.env.WP_API_URL?.trim();
    if (!raw) return null;
    return raw.replace(/\/$/, "");
}
async function fetchJson(url) {
    const response = await fetch(url, {
        headers: {
            Accept: "application/json"
        },
        // Build-time / proxy lookups should see fresh publish state.
        cache: "no-store"
    });
    if (!response.ok) {
        throw new Error(`WP request failed (${response.status}) for ${url}`);
    }
    return await response.json();
}
async function resolveArticleRedirectPathById(postId) {
    const base = getWpApiBase();
    if (!base || !Number.isFinite(postId) || postId <= 0) return null;
    const post = await fetchJson(`${base}/posts/${postId}?_fields=id,slug,categories&status=publish`);
    if (!post?.slug?.trim()) return null;
    const categoryId = post.categories?.[0];
    let categorySlug = "daily-update";
    if (typeof categoryId === "number") {
        const categories = await fetchJson(`${base}/categories?include=${categoryId}&per_page=1&_fields=id,slug`);
        const resolved = categories[0]?.slug?.trim();
        if (resolved) categorySlug = resolved;
    }
    return `/${categorySlug}/${post.slug.trim()}`;
}
async function resolveArticleRedirectPath(postSlug) {
    const base = getWpApiBase();
    if (!base) return null;
    const slug = postSlug.trim();
    if (!slug) return null;
    const posts = await fetchJson(`${base}/posts?slug=${encodeURIComponent(slug)}&per_page=1&status=publish&_fields=id,slug,categories`);
    const post = posts[0];
    if (!post?.slug) return null;
    const categoryId = post.categories?.[0];
    let categorySlug = "daily-update";
    if (typeof categoryId === "number") {
        const categories = await fetchJson(`${base}/categories?include=${categoryId}&per_page=1&_fields=id,slug`);
        const resolved = categories[0]?.slug?.trim();
        if (resolved) categorySlug = resolved;
    }
    return `/${categorySlug}/${post.slug}`;
}
function pushFlatSlugRedirects(redirects, postSlug, destination) {
    redirects.push({
        source: `/${postSlug}`,
        destination,
        statusCode: 301
    }, {
        source: `/${postSlug}/`,
        destination,
        statusCode: 301
    });
}
async function buildWpArticleRedirects() {
    const base = getWpApiBase();
    if (!base) {
        console.warn("[phase8-redirects] WP_API_URL unset — skipping article redirect generation.");
        return [];
    }
    try {
        const categories = await fetchJson(`${base}/categories?per_page=100&hide_empty=false&_fields=id,slug`);
        const idToSlug = new Map();
        for (const category of categories){
            if (typeof category.id === "number" && category.slug?.trim()) {
                idToSlug.set(category.id, category.slug.trim());
            }
        }
        const redirects = [];
        const seenSlugs = new Set();
        let page = 1;
        let totalPages = 1;
        while(page <= totalPages && page <= 50){
            const url = `${base}/posts?per_page=100&page=${page}&status=publish&_fields=id,slug,categories`;
            const response = await fetch(url, {
                headers: {
                    Accept: "application/json"
                },
                cache: "no-store"
            });
            if (!response.ok) {
                throw new Error(`WP posts page ${page} failed (${response.status})`);
            }
            const totalPagesHeader = response.headers.get("X-WP-TotalPages");
            if (totalPagesHeader) {
                totalPages = Math.max(1, Number(totalPagesHeader) || 1);
            }
            const posts = await response.json();
            for (const post of posts){
                const postSlug = post.slug?.trim();
                if (!postSlug || seenSlugs.has(postSlug)) continue;
                if (RESERVED_SINGLE_SEGMENTS.has(postSlug)) continue;
                if (KNOWN_CATEGORY_SLUGS.has(postSlug)) continue;
                seenSlugs.add(postSlug);
                const categoryId = post.categories?.[0];
                const categorySlug = (categoryId != null ? idToSlug.get(categoryId) : undefined) || "daily-update";
                const destination = `/${categorySlug}/${postSlug}`;
                pushFlatSlugRedirects(redirects, postSlug, destination);
            // `?p={id}` shortlinks are handled in proxy.ts so the query can be
            // stripped in one hop (next.config redirects preserve query strings).
            }
            if (!posts.length) break;
            page += 1;
        }
        console.info(`[phase8-redirects] Generated ${redirects.length} WP-derived redirect entries for ${seenSlugs.size} posts.`);
        return redirects;
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.warn(`[phase8-redirects] Could not generate article redirects from WP (${message}). Static redirects only; runtime proxy may still resolve flat post URLs.`);
        return [];
    }
}
async function getAllRedirects() {
    const articleRedirects = await buildWpArticleRedirects();
    return [
        ...STATIC_REDIRECTS,
        ...articleRedirects,
        ...categoryTrailingSlashRedirects(),
        ...TRAILING_SLASH_NORMALIZERS
    ];
}
function isReservedOrCategorySegment(segment) {
    return RESERVED_SINGLE_SEGMENTS.has(segment) || KNOWN_CATEGORY_SLUGS.has(segment);
}
}),
"[project]/proxy.ts [middleware] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "proxy",
    ()=>proxy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [middleware] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redirects$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/redirects.ts [middleware] (ecmascript)");
;
;
function preferredPath(pathname) {
    if (pathname.length > 1 && pathname.endsWith("/")) {
        return pathname.slice(0, -1);
    }
    return pathname;
}
async function proxy(request) {
    const { pathname } = request.nextUrl;
    const postIdParam = request.nextUrl.searchParams.get("p");
    // WP shortlink: `/?p={id}` → preferred article path (strip query).
    if ((pathname === "/" || pathname === "") && postIdParam && /^\d+$/.test(postIdParam)) {
        try {
            const destination = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redirects$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["resolveArticleRedirectPathById"])(Number(postIdParam));
            if (destination) {
                const url = request.nextUrl.clone();
                url.pathname = destination;
                url.search = "";
                return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url, 301);
            }
        } catch  {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
    }
    // Two-segment article path: correct wrong category in one HTTP 301 hop.
    const articleMatch = pathname.match(/^\/([^/]+)\/([^/]+)\/?$/);
    if (articleMatch) {
        const category = articleMatch[1];
        const slug = articleMatch[2];
        if (category && slug && !category.includes(".") && !slug.includes(".") && category !== "category") {
            try {
                const destination = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redirects$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["resolveArticleRedirectPath"])(slug);
                if (destination && destination !== preferredPath(pathname)) {
                    const url = request.nextUrl.clone();
                    url.pathname = destination;
                    url.searchParams.delete("p");
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url, 301);
                }
            } catch  {
            // Fall through to the App Router article page.
            }
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    // Single-segment flat WP permalink fallback (posts published after build).
    const match = pathname.match(/^\/([^/]+)\/?$/);
    if (!match) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    const segment = match[1];
    if (!segment || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redirects$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["isReservedOrCategorySegment"])(segment)) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    if (segment.includes(".")) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
    try {
        const destination = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$redirects$2e$ts__$5b$middleware$5d$__$28$ecmascript$29$__["resolveArticleRedirectPath"])(segment);
        if (!destination) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
        }
        const url = request.nextUrl.clone();
        url.pathname = destination;
        url.searchParams.delete("p");
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].redirect(url, 301);
    } catch  {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$middleware$5d$__$28$ecmascript$29$__["NextResponse"].next();
    }
}
const config = {
    matcher: [
        "/",
        "/((?!_next/static|_next/image|_next/data|api|.*\\..*).*)"
    ]
};
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0_98bib._.js.map