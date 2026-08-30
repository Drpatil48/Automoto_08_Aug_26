module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/app/search/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPage,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/ArticleCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/Breadcrumbs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$seo$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/seo/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CmsStateMessage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cms.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/mock-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/search.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/seo.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
const SEARCH_PER_PAGE = 12;
async function generateMetadata({ searchParams }) {
    const { q } = await searchParams;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildSearchMetadata"])(q);
}
async function loadResults(query, page) {
    if (!query) {
        return {
            articles: [],
            total: 0,
            totalPages: 0,
            source: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCmsConfigured"])() ? "cms" : "mock"
        };
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCmsConfigured"])()) {
        const ranked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterAndRankArticles"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$mock$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MOCK_ARTICLES"], query);
        const totalPages = Math.max(1, Math.ceil(ranked.length / SEARCH_PER_PAGE));
        const start = (page - 1) * SEARCH_PER_PAGE;
        return {
            articles: ranked.slice(start, start + SEARCH_PER_PAGE),
            total: ranked.length,
            totalPages,
            source: "mock"
        };
    }
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["searchArticles"])(query, {
            page,
            perPage: SEARCH_PER_PAGE
        });
        return {
            articles: result.articles,
            total: result.total,
            totalPages: result.totalPages,
            source: "cms"
        };
    } catch (error) {
        const message = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsRequestError"] ? error.message : "Search is temporarily unavailable.";
        return {
            articles: [],
            total: 0,
            totalPages: 0,
            error: message,
            source: "cms"
        };
    }
}
async function SearchPage({ searchParams }) {
    const { q, page: pageParam } = await searchParams;
    const query = q?.trim() ?? "";
    const page = Math.max(1, Number(pageParam ?? "1") || 1);
    const { articles, total, totalPages, error, source } = await loadResults(query, page);
    if (query && !error && page > 1 && page > totalPages) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    function searchHref(nextPage) {
        const params = new URLSearchParams();
        params.set("q", query);
        if (nextPage > 1) params.set("page", String(nextPage));
        return `/search?${params.toString()}`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-3xl px-4 py-8 sm:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$seo$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildBreadcrumbJsonLd"])([
                    {
                        name: "Home",
                        path: "/"
                    },
                    {
                        name: "Search",
                        path: "/search"
                    }
                ])
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                items: [
                    {
                        label: "Home",
                        href: "/"
                    },
                    {
                        label: "Search"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold tracking-tight",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-base leading-relaxed text-muted",
                children: "Find articles by title, tags, category, or excerpt."
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "mt-6",
                role: "search",
                action: "/search",
                method: "get",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "site-search",
                        className: "sr-only",
                        children: "Search articles"
                    }, void 0, false, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 sm:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "site-search",
                                name: "q",
                                type: "search",
                                defaultValue: query,
                                placeholder: "Search titles, tags, categories…",
                                className: "min-h-11 w-full flex-1 rounded-md border border-border bg-surface px-3 text-sm",
                                autoComplete: "off"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-dark",
                                children: "Search"
                            }, void 0, false, {
                                fileName: "[project]/app/search/page.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/search/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: !query ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "empty",
                    title: "Start searching",
                    message: "Enter a keyword to search article titles, tags, categories, and excerpts."
                }, void 0, false, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 150,
                    columnNumber: 11
                }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "error",
                    title: "Search failed",
                    message: error
                }, void 0, false, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this) : articles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "empty",
                    title: `No results for “${query}”`,
                    message: "Try another keyword, a category name, or a shorter phrase."
                }, void 0, false, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 162,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mb-4 text-sm text-muted",
                            children: [
                                total,
                                " result",
                                total === 1 ? "" : "s",
                                " for “",
                                query,
                                "”",
                                source === "mock" ? " (sample content — configure WP_API_URL for live search)" : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "grid gap-4",
                            children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleCard"], {
                                        article: article
                                    }, void 0, false, {
                                        fileName: "[project]/app/search/page.tsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, this)
                                }, `${article.category}-${article.slug}`, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 173,
                            columnNumber: 13
                        }, this),
                        totalPages > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "mt-10 flex items-center justify-between gap-4",
                            "aria-label": "Search pagination",
                            children: [
                                page > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: searchHref(page - 1),
                                    className: "inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-4 text-sm font-semibold hover:bg-background",
                                    children: "Previous"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted",
                                    children: [
                                        "Page ",
                                        page,
                                        " of ",
                                        totalPages
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 195,
                                    columnNumber: 17
                                }, this),
                                page < totalPages ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: searchHref(page + 1),
                                    className: "inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-4 text-sm font-semibold hover:bg-background",
                                    children: "Next"
                                }, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 199,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/app/search/page.tsx",
                                    lineNumber: 206,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/search/page.tsx",
                            lineNumber: 181,
                            columnNumber: 15
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/search/page.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/search/page.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/search/page.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/search/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/search/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/components/article/ArticleCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleCard",
    ()=>ArticleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-style.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
function formatDate(value) {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).format(new Date(value));
}
function ArticleCard({ article, variant = "standard", priority = false }) {
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(article.category, {
        name: article.categoryName
    });
    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articleHref"])(article);
    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articleCoverSrc"])(article);
    const imageAlt = article.coverImageAlt || article.title;
    if (variant === "compact") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "flex gap-3 rounded-lg border border-border bg-surface p-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    className: "relative block h-20 w-28 shrink-0 overflow-hidden rounded-md bg-border",
                    tabIndex: -1,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: imageSrc,
                        alt: "",
                        fill: true,
                        className: "object-cover",
                        sizes: "112px"
                    }, void 0, false, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/article/ArticleCard.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                            tone: category.tone,
                            children: category.name
                        }, void 0, false, {
                            fileName: "[project]/components/article/ArticleCard.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "mt-1 text-sm font-semibold leading-snug",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "hover:text-accent",
                                children: article.title
                            }, void 0, false, {
                                fileName: "[project]/components/article/ArticleCard.tsx",
                                lineNumber: 53,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/article/ArticleCard.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-muted",
                            children: [
                                formatDate(article.publishDate),
                                " · ",
                                article.readTimeMinutes,
                                " min"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/article/ArticleCard.tsx",
                            lineNumber: 57,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article/ArticleCard.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/article/ArticleCard.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: "relative block aspect-[16/9] bg-border",
                tabIndex: -1,
                "aria-hidden": "true",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: imageSrc,
                    alt: imageAlt,
                    fill: true,
                    priority: priority,
                    className: "object-cover",
                    sizes: "(max-width: 768px) 100vw, 33vw"
                }, void 0, false, {
                    fileName: "[project]/components/article/ArticleCard.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/article/ArticleCard.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col gap-2 p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                        tone: category.tone,
                        children: category.name
                    }, void 0, false, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold leading-snug",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            className: "hover:text-accent",
                            children: article.title
                        }, void 0, false, {
                            fileName: "[project]/components/article/ArticleCard.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    variant === "guide" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm leading-relaxed text-muted",
                        children: article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "line-clamp-2 text-sm leading-relaxed text-muted",
                        children: article.excerpt
                    }, void 0, false, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-auto pt-2 text-xs text-muted",
                        children: [
                            formatDate(article.publishDate),
                            " · ",
                            article.readTimeMinutes,
                            " min read"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/article/ArticleCard.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/article/ArticleCard.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/article/Breadcrumbs.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumbs",
    ()=>Breadcrumbs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function Breadcrumbs({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Breadcrumb",
        className: "mb-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
            className: "flex flex-wrap items-center gap-2 text-sm text-muted",
            children: items.map((item, index)=>{
                const isLast = index === items.length - 1;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    className: "inline-flex items-center gap-2",
                    children: [
                        index > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/components/article/Breadcrumbs.tsx",
                            lineNumber: 20,
                            columnNumber: 28
                        }, this) : null,
                        item.href && !isLast ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: "hover:text-accent",
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/article/Breadcrumbs.tsx",
                            lineNumber: 22,
                            columnNumber: 17
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: isLast ? "font-medium text-foreground" : undefined,
                            "aria-current": isLast ? "page" : undefined,
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/components/article/Breadcrumbs.tsx",
                            lineNumber: 26,
                            columnNumber: 17
                        }, this)
                    ]
                }, `${item.label}-${index}`, true, {
                    fileName: "[project]/components/article/Breadcrumbs.tsx",
                    lineNumber: 19,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/components/article/Breadcrumbs.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/article/Breadcrumbs.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/Badge.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
const toneClasses = {
    ev: "bg-emerald-100 text-emerald-900",
    bike: "bg-orange-100 text-orange-950",
    car: "bg-sky-100 text-sky-950",
    guide: "bg-amber-100 text-amber-950",
    daily: "bg-zinc-200 text-zinc-900",
    neutral: "bg-stone-200 text-stone-900"
};
function Badge({ children, tone = "neutral", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold tracking-wide ${toneClasses[tone]} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ui/Badge.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/ui/CmsStateMessage.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmsStateMessage",
    ()=>CmsStateMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function CmsStateMessage({ title, message, tone = "info" }) {
    const styles = tone === "error" ? "border-red-200 bg-red-50 text-red-950" : tone === "empty" ? "border-dashed border-border bg-surface text-muted" : "border-amber-200 bg-amber-50 text-amber-950";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `rounded-xl border p-5 ${styles}`,
        role: "status",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold text-foreground",
                children: title
            }, void 0, false, {
                fileName: "[project]/components/ui/CmsStateMessage.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm leading-relaxed",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/ui/CmsStateMessage.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/CmsStateMessage.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/category-style.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORY_FALLBACKS",
    ()=>CATEGORY_FALLBACKS,
    "articleCoverSrc",
    ()=>articleCoverSrc,
    "buildCategoryMeta",
    ()=>buildCategoryMeta,
    "categoryCoverPlaceholder",
    ()=>categoryCoverPlaceholder,
    "toneForCategorySlug",
    ()=>toneForCategorySlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-rsc] (ecmascript)");
;
const TONE_BY_SLUG = {
    "electric-vehicles-evs": "ev",
    "hybrid-vehicles": "ev",
    "sports-bikes": "bike",
    sportsbikes: "bike",
    "bikes-news": "bike",
    "car-news": "car",
    "upcoming-cars": "car",
    "sports-car": "car",
    "buying-guide": "guide",
    "auto-technology": "guide",
    "daily-update": "daily",
    "off-roading": "neutral"
};
function toneForCategorySlug(slug) {
    return TONE_BY_SLUG[slug] ?? "neutral";
}
const CATEGORY_FALLBACKS = {
    "electric-vehicles-evs": {
        name: "EV Spotlight",
        description: "Charging, battery health, range, and the latest EV launches.",
        tone: "ev"
    },
    sportsbikes: {
        name: "Bikes & Performance",
        description: "Sports bikes, mileage champions, and new two-wheeler launches.",
        tone: "bike"
    },
    "sports-bikes": {
        name: "Bikes & Performance",
        description: "Sports bikes, mileage champions, and new two-wheeler launches.",
        tone: "bike"
    },
    "car-news": {
        name: "Car News",
        description: "Launches, facelifts, and market updates for Indian cars.",
        tone: "car"
    },
    "buying-guide": {
        name: "Latest Guides",
        description: "Actionable recommendations by budget and use case.",
        tone: "guide"
    },
    "daily-update": {
        name: "Daily Update",
        description: "Quick daily roundups for busy readers.",
        tone: "daily"
    },
    "upcoming-cars": {
        name: "Upcoming Cars",
        description: "Expected launches, timelines, and early specifications.",
        tone: "car"
    }
};
function categoryCoverPlaceholder(slug) {
    switch(toneForCategorySlug(slug)){
        case "ev":
            return "/placeholders/cover-ev.svg";
        case "bike":
            return "/placeholders/cover-bike.svg";
        case "car":
            return "/placeholders/cover-car.svg";
        case "guide":
            return "/placeholders/cover-guide.svg";
        default:
            return "/placeholders/cover-daily.svg";
    }
}
function articleCoverSrc(article) {
    return article.coverImage || categoryCoverPlaceholder(article.category);
}
function buildCategoryMeta(slug, overrides) {
    const fallback = CATEGORY_FALLBACKS[slug];
    return {
        slug,
        name: overrides?.name ?? fallback?.name ?? slug,
        description: overrides?.description ?? fallback?.description ?? "Automotive news and updates from AutomotoNews.in.",
        href: overrides?.href ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["categoryHref"])(slug),
        tone: overrides?.tone ?? fallback?.tone ?? toneForCategorySlug(slug),
        id: overrides?.id,
        count: overrides?.count
    };
}
}),
"[project]/lib/cms.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CmsConfigError",
    ()=>CmsConfigError,
    "CmsRequestError",
    ()=>CmsRequestError,
    "getArticleBySlug",
    ()=>getArticleBySlug,
    "getArticlesByCategorySlug",
    ()=>getArticlesByCategorySlug,
    "getArticlesForSitemap",
    ()=>getArticlesForSitemap,
    "getCategories",
    ()=>getCategories,
    "getCategoryBySlug",
    ()=>getCategoryBySlug,
    "getCmsStatusMessage",
    ()=>getCmsStatusMessage,
    "getLatestArticles",
    ()=>getLatestArticles,
    "getPageByRouteSlug",
    ()=>getPageByRouteSlug,
    "getRelatedArticles",
    ()=>getRelatedArticles,
    "isCmsConfigured",
    ()=>isCmsConfigured,
    "requireCmsConfig",
    ()=>requireCmsConfig,
    "searchArticles",
    ()=>searchArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/normalize.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/search.ts [app-rsc] (ecmascript)");
;
;
class CmsConfigError extends Error {
    constructor(message){
        super(message);
        this.name = "CmsConfigError";
    }
}
class CmsRequestError extends Error {
    status;
    constructor(message, status){
        super(message);
        this.name = "CmsRequestError";
        this.status = status;
    }
}
const DEFAULT_REVALIDATE_SECONDS = 300;
/** Categories change rarely — cache longer than posts. */ const CATEGORY_REVALIDATE_SECONDS = 600;
function getApiBase() {
    const raw = process.env.WP_API_URL?.trim();
    if (!raw) return null;
    return raw.replace(/\/$/, "");
}
function isCmsConfigured() {
    return Boolean(getApiBase());
}
function requireCmsConfig() {
    const base = getApiBase();
    if (!base) {
        throw new CmsConfigError("WP_API_URL is not set. Add it to .env.local (see .env.example).");
    }
    return base;
}
async function wpFetch(path, { searchParams, revalidate = DEFAULT_REVALIDATE_SECONDS } = {}) {
    const base = requireCmsConfig();
    const url = new URL(`${base}${path.startsWith("/") ? path : `/${path}`}`);
    if (searchParams) {
        for (const [key, value] of Object.entries(searchParams)){
            if (value === undefined || value === "") continue;
            url.searchParams.set(key, typeof value === "boolean" ? value ? "true" : "false" : String(value));
        }
    }
    let response;
    try {
        response = await fetch(url.toString(), {
            headers: {
                Accept: "application/json"
            },
            ...revalidate === false ? {
                cache: "no-store"
            } : {
                next: {
                    revalidate
                }
            }
        });
    } catch  {
        throw new CmsRequestError("Unable to reach the WordPress REST API. Check WP_API_URL and network access.");
    }
    if (!response.ok) {
        throw new CmsRequestError(`WordPress API request failed (${response.status}) for ${url.pathname}.`, response.status);
    }
    const totalHeader = response.headers.get("X-WP-Total");
    const totalPagesHeader = response.headers.get("X-WP-TotalPages");
    const data = await response.json();
    return {
        data,
        total: totalHeader ? Number(totalHeader) : null,
        totalPages: totalPagesHeader ? Number(totalPagesHeader) : null
    };
}
async function getCategories() {
    const { data } = await wpFetch("/categories", {
        searchParams: {
            per_page: 100,
            hide_empty: true
        },
        revalidate: CATEGORY_REVALIDATE_SECONDS
    });
    return data.map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeCategory"]).filter((item)=>item != null).sort((a, b)=>a.name.localeCompare(b.name));
}
async function getCategoryBySlug(slug) {
    const { data } = await wpFetch("/categories", {
        searchParams: {
            slug,
            per_page: 1
        },
        revalidate: CATEGORY_REVALIDATE_SECONDS
    });
    const category = data[0] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeCategory"])(data[0]) : null;
    return category;
}
async function getLatestArticles(limit = 10) {
    const { data } = await wpFetch("/posts", {
        searchParams: {
            per_page: limit,
            _embed: 1,
            status: "publish"
        }
    });
    return data.map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeArticle"]).filter((item)=>item != null);
}
async function getArticlesByCategorySlug(slug, { page = 1, perPage = 12 } = {}) {
    const category = await getCategoryBySlug(slug);
    if (!category?.id) {
        return {
            articles: [],
            total: 0,
            totalPages: 0,
            page
        };
    }
    const { data, total, totalPages } = await wpFetch("/posts", {
        searchParams: {
            categories: category.id,
            page,
            per_page: perPage,
            _embed: 1,
            status: "publish"
        }
    });
    return {
        articles: data.map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeArticle"]).filter((item)=>item != null),
        total: total ?? data.length,
        totalPages: totalPages ?? 1,
        page
    };
}
async function getArticleBySlug(slug) {
    const { data } = await wpFetch("/posts", {
        searchParams: {
            slug,
            per_page: 1,
            _embed: 1,
            status: "publish"
        }
    });
    const post = data[0];
    return post ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeArticle"])(post) : null;
}
async function getRelatedArticles(article, limit = 4) {
    const { articles } = await getArticlesByCategorySlug(article.category, {
        perPage: limit + 1
    });
    return articles.filter((item)=>item.slug !== article.slug).slice(0, limit);
}
/** Map Next.js route slugs to WordPress page slugs when they differ. */ const PAGE_SLUG_ALIASES = {
    contact: [
        "contact",
        "contact-us"
    ],
    "about-us": [
        "about-us",
        "about"
    ],
    "privacy-policy": [
        "privacy-policy"
    ],
    disclaimer: [
        "disclaimer"
    ]
};
async function getPageByRouteSlug(routeSlug) {
    const candidates = PAGE_SLUG_ALIASES[routeSlug] ?? [
        routeSlug
    ];
    for (const slug of candidates){
        const { data } = await wpFetch("/pages", {
            searchParams: {
                slug,
                per_page: 1,
                status: "publish"
            }
        });
        const page = data[0] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizePage"])(data[0]) : null;
        if (page) return page;
    }
    return null;
}
async function getArticlesForSitemap(maxPages = 20) {
    const perPage = 100;
    const entries = [];
    const categories = await getCategories();
    const idToSlug = new Map(categories.filter((category)=>typeof category.id === "number").map((category)=>[
            category.id,
            category.slug
        ]));
    for(let page = 1; page <= maxPages; page += 1){
        const { data, totalPages } = await wpFetch("/posts", {
            searchParams: {
                page,
                per_page: perPage,
                status: "publish",
                _fields: "slug,modified,date,categories"
            }
        });
        for (const post of data){
            const slug = post.slug?.trim();
            if (!slug) continue;
            const categoryId = post.categories?.[0];
            const category = (categoryId != null ? idToSlug.get(categoryId) : undefined) || "daily-update";
            entries.push({
                category,
                slug,
                updatedDate: post.modified || post.date || new Date().toISOString()
            });
        }
        if (!totalPages || page >= totalPages) break;
    }
    return entries;
}
async function searchArticles(query, { page = 1, perPage = 12 } = {}) {
    const trimmed = query.trim();
    if (!trimmed) {
        return {
            articles: [],
            total: 0,
            totalPages: 0,
            page
        };
    }
    // Fetch a slightly larger page so local ranking can prefer title/tag hits.
    const fetchSize = Math.min(Math.max(perPage * 2, 20), 50);
    const { data } = await wpFetch("/posts", {
        searchParams: {
            search: trimmed,
            per_page: fetchSize,
            page: 1,
            _embed: 1,
            status: "publish"
        },
        revalidate: 60
    });
    const ranked = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$search$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["filterAndRankArticles"])(data.map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeArticle"]).filter((item)=>item != null), trimmed);
    const total = ranked.length;
    const totalPages = Math.max(1, Math.ceil(total / perPage));
    const start = (page - 1) * perPage;
    return {
        articles: ranked.slice(start, start + perPage),
        total,
        totalPages,
        page
    };
}
function getCmsStatusMessage() {
    if (isCmsConfigured()) return null;
    return "WordPress CMS is not configured. Set WP_API_URL in .env.local to enable live content.";
}
}),
"[project]/lib/mock-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CATEGORIES",
    ()=>CATEGORIES,
    "MOCK_ARTICLES",
    ()=>MOCK_ARTICLES,
    "MOCK_VEHICLES",
    ()=>MOCK_VEHICLES,
    "getArticlesByCategory",
    ()=>getArticlesByCategory,
    "getCategoryMeta",
    ()=>getCategoryMeta,
    "getFeaturedArticle",
    ()=>getFeaturedArticle,
    "getGuideArticles",
    ()=>getGuideArticles,
    "getTopStories",
    ()=>getTopStories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-style.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-rsc] (ecmascript)");
;
;
const MOCK_VEHICLES = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["VEHICLES"];
const author = {
    name: "AutomotoNews Desk",
    bio: "Editorial desk covering EVs, cars, and bikes for Maharashtra readers.",
    avatarUrl: null,
    socialLinks: []
};
function article(partial) {
    return {
        author,
        body: partial.body ?? partial.excerpt,
        updatedDate: partial.updatedDate ?? partial.publishDate,
        tags: partial.tags ?? [],
        categoryName: partial.categoryName ?? partial.category,
        coverImageAlt: partial.coverImageAlt ?? partial.title,
        ...partial
    };
}
const CATEGORIES = [
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])("electric-vehicles-evs", {
        name: "EV Spotlight",
        description: "Charging, battery health, range, and the latest EV launches."
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])("sportsbikes", {
        name: "Bikes & Performance",
        description: "Sports bikes, mileage champions, and new two-wheeler launches."
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])("car-news", {
        name: "Car News",
        description: "Launches, facelifts, and market updates for Indian cars."
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])("buying-guide", {
        name: "Latest Guides",
        description: "Actionable recommendations by budget and use case."
    }),
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])("daily-update", {
        name: "Daily Update",
        description: "Quick daily roundups for busy readers."
    })
];
const MOCK_ARTICLES = [
    article({
        title: "टाटा नेक्सॉन EV फेसलिफ्ट: रेंज, किंमत आणि महत्त्वाचे बदल",
        slug: "tata-nexon-ev-facelift-range-price",
        category: "electric-vehicles-evs",
        coverImage: "/placeholders/cover-ev.svg",
        excerpt: "नव्या बॅटरी पर्याय, अपडेटेड इंटीरियर आणि शहर वापरासाठी काय फरक पडतो याचा सोपा आढावा.",
        publishDate: "2026-08-08",
        readTimeMinutes: 6,
        tags: [
            "Tata",
            "Nexon EV",
            "Facelift"
        ]
    }),
    article({
        title: "महाराष्ट्रातील टॉप ५ इलेक्ट्रिक स्कूटर — ऑगस्ट २०२६",
        slug: "top-electric-scooters-maharashtra-august-2026",
        category: "electric-vehicles-evs",
        coverImage: "/placeholders/cover-ev.svg",
        excerpt: "रेंज, चार्जिंग सुविधा आणि किंमत या तीन निकषांवर शहरासाठी उपयुक्त स्कूटर शॉर्टलिस्ट.",
        publishDate: "2026-08-07",
        readTimeMinutes: 5,
        tags: [
            "Scooter",
            "EV"
        ]
    }),
    article({
        title: "माझदा CX-5 डीझेल भारतात कधी? अपेक्षित किंमत आणि स्पेक्स",
        slug: "mazda-cx-5-india-expected-price",
        category: "upcoming-cars",
        coverImage: "/placeholders/cover-car.svg",
        excerpt: "SUV खरेदीदारांसाठी महत्त्वाचे इंजिन पर्याय, सेफ्टी फीचर्स आणि लाँच टाइमलाइन.",
        publishDate: "2026-08-06",
        readTimeMinutes: 4,
        tags: [
            "Mazda",
            "SUV"
        ]
    }),
    article({
        title: "रॉयल एनफिल्ड हिमालयान: हिल ड्राइव्ह अनुभव आणि मायलेज",
        slug: "royal-enfield-himalayan-hill-drive",
        category: "sportsbikes",
        coverImage: "/placeholders/cover-bike.svg",
        excerpt: "लांब ट्रिप आणि घाट रस्त्यांसाठी सस्पेंशन, सीटिंग आणि रिअल-वर्ल्ड मायलेज काय सांगतात.",
        publishDate: "2026-08-05",
        readTimeMinutes: 7,
        tags: [
            "Royal Enfield",
            "Adventure"
        ]
    }),
    article({
        title: "आजचे ऑटो अपडेट: ३ मोठ्या बातमी एका नजरेत",
        slug: "daily-auto-update-three-headlines",
        category: "daily-update",
        coverImage: "/placeholders/cover-daily.svg",
        excerpt: "EV सबसिडी चर्चा, नवीन बाईक टीझर आणि एक कॉम्पॅक्ट एसयूव्ही लाँच अपडेट.",
        publishDate: "2026-08-10",
        readTimeMinutes: 3,
        tags: [
            "Daily"
        ]
    }),
    article({
        title: "१५ लाखांखाली बेस्ट फॅमिली कार कशी निवडावी?",
        slug: "best-family-car-under-15-lakh",
        category: "buying-guide",
        coverImage: "/placeholders/cover-guide.svg",
        excerpt: "स्पेस, सेफ्टी रेटिंग, सर्व्हिस कॉस्ट आणि रीसेल व्हॅल्यू यावर आधारित खरेदी फ्रेमवर्क.",
        publishDate: "2026-08-04",
        readTimeMinutes: 8,
        tags: [
            "Buying Guide",
            "Family Car"
        ]
    }),
    article({
        title: "हुंडई क्रेटा vs किआ सेल्टॉस: कोणती एसयूव्ही तुमच्यासाठी?",
        slug: "creta-vs-seltos-comparison",
        category: "car-news",
        coverImage: "/placeholders/cover-car.svg",
        excerpt: "फीचर लिस्ट, इंजिन पर्याय आणि शहर + हायवे ड्राइव्ह यातील फरक स्पष्ट शब्दांत.",
        publishDate: "2026-08-03",
        readTimeMinutes: 6,
        tags: [
            "Creta",
            "Seltos",
            "Compare"
        ]
    }),
    article({
        title: "TVS अपाची RTR 160: परफॉर्मन्स आणि रोजच्या वापराचा बॅलन्स",
        slug: "tvs-apache-rtr-160-review-notes",
        category: "sportsbikes",
        coverImage: "/placeholders/cover-bike.svg",
        excerpt: "पॉवर डिलिव्हरी, ब्रेकिंग आणि कम्युटसाठी आराम — नव्या बायर्ससाठी शॉर्ट नोट्स.",
        publishDate: "2026-08-02",
        readTimeMinutes: 5,
        tags: [
            "TVS",
            "Apache"
        ]
    }),
    article({
        title: "घरच्या चार्जिंगसाठी वॉलबॉक्स निवडताना या ४ गोष्टी तपासा",
        slug: "home-ev-wallbox-checklist",
        category: "electric-vehicles-evs",
        coverImage: "/placeholders/cover-ev.svg",
        excerpt: "लोड क्षमता, सेफ्टी सर्टिफिकेशन, अ‍ॅप मॉनिटरिंग आणि इन्स्टॉलेशन खर्च समजून घ्या.",
        publishDate: "2026-08-01",
        readTimeMinutes: 5,
        tags: [
            "Charging",
            "Home EV"
        ]
    }),
    article({
        title: "बेस्ट EV Under 15L — शॉर्टलिस्ट २०२६",
        slug: "best-ev-under-15-lakh-2026",
        category: "buying-guide",
        coverImage: "/placeholders/cover-guide.svg",
        excerpt: "बजेट, रेंज अँझायटी आणि सिटी चार्जिंग रियलिटी लक्षात घेऊन व्यावहारिक शॉर्टलिस्ट.",
        publishDate: "2026-07-30",
        readTimeMinutes: 7,
        tags: [
            "EV",
            "Budget"
        ]
    }),
    article({
        title: "पहिली बाईक खरेदी: १२५cc vs 160cc — काय योग्य?",
        slug: "first-bike-125-vs-160",
        category: "buying-guide",
        coverImage: "/placeholders/cover-guide.svg",
        excerpt: "नवशिक्यांसाठी कंट्रोल, इन्शुरन्स खर्च आणि मायलेज यांची तुलना.",
        publishDate: "2026-07-28",
        readTimeMinutes: 4,
        tags: [
            "First Bike"
        ]
    }),
    article({
        title: "पेट्रोल कार खरेदी करताना टोल आणि फ्युएल बजेट कसे मोजावे",
        slug: "petrol-car-ownership-budget",
        category: "buying-guide",
        coverImage: "/placeholders/cover-guide.svg",
        excerpt: "EMI नंतरही दरमहा किती खर्च येतो हे समजण्यासाठी साधी कॅल्क्युलेशन पद्धत.",
        publishDate: "2026-07-26",
        readTimeMinutes: 5,
        tags: [
            "Ownership Cost"
        ]
    })
];
function getFeaturedArticle() {
    return MOCK_ARTICLES[0];
}
function getTopStories(limit = 4) {
    return MOCK_ARTICLES.slice(1, 1 + limit);
}
function getArticlesByCategory(category, limit = 4) {
    return MOCK_ARTICLES.filter((item)=>item.category === category).slice(0, limit);
}
function getGuideArticles(limit = 4) {
    return getArticlesByCategory("buying-guide", limit);
}
function getCategoryMeta(slug) {
    return CATEGORIES.find((item)=>item.slug === slug) ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(slug);
}
}),
"[project]/lib/normalize.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ensureEnglishSlug",
    ()=>ensureEnglishSlug,
    "estimateReadTimeMinutes",
    ()=>estimateReadTimeMinutes,
    "getCategoryMeta",
    ()=>getCategoryMeta,
    "normalizeArticle",
    ()=>normalizeArticle,
    "normalizeCategory",
    ()=>normalizeCategory,
    "normalizePage",
    ()=>normalizePage,
    "sanitizeWpHtml",
    ()=>sanitizeWpHtml,
    "stripHtml",
    ()=>stripHtml
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-style.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-rsc] (ecmascript)");
;
;
const DEFAULT_AUTHOR = {
    name: "AutomotoNews Desk",
    bio: "",
    avatarUrl: null,
    socialLinks: []
};
function decodeEntities(value) {
    return value.replace(/&nbsp;/gi, " ").replace(/&amp;/gi, "&").replace(/&quot;/gi, '"').replace(/&#039;/gi, "'").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&#(\d+);/g, (_, code)=>String.fromCharCode(Number(code))).replace(/&#x([0-9a-f]+);/gi, (_, hex)=>String.fromCharCode(parseInt(hex, 16)));
}
function stripHtml(value) {
    return decodeEntities(value.replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();
}
function ensureEnglishSlug(slug) {
    return slug.toLowerCase().trim().replace(/[\u0900-\u097F]+/g, "") // remove Devanagari Unicode block if mixed
    .replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "");
}
/**
 * Contact Form 7 markup cannot submit from the headless Next.js front-end.
 * Replace it with an honest notice so readers do not see a broken form.
 */ function replaceNonFunctionalWpForms(html) {
    if (!/\bwpcf7\b/i.test(html)) return html;
    const mailto = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONTACT_EMAIL"]}`;
    const notice = '<aside class="cms-form-notice" role="note">' + "<p>The WordPress contact form plugin does not work on this headless front-end. " + `Please email us at <a href="${mailto}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SITE_CONTACT_EMAIL"]}</a> — we monitor that inbox.</p>` + "</aside>";
    return html.replace(/<div[^>]*\bclass="[^"]*\bwpcf7\b[^"]*"[^>]*>[\s\S]*?<\/form>[\s\S]*?<\/div>/gi, notice).replace(/<form[^>]*\bwpcf7-form\b[^>]*>[\s\S]*?<\/form>/gi, notice);
}
function sanitizeWpHtml(html) {
    return replaceNonFunctionalWpForms(html).replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, "").replace(/\son\w+="[^"]*"/gi, "").replace(/\son\w+='[^']*'/gi, "").replace(/javascript:/gi, "");
}
function estimateReadTimeMinutes(htmlOrText) {
    const words = stripHtml(htmlOrText).split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.round(words / 200));
}
function pickFeaturedImage(media) {
    if (!media) return {
        url: null,
        alt: ""
    };
    const mediumLarge = media.media_details?.sizes?.medium_large?.source_url;
    const large = media.media_details?.sizes?.large?.source_url;
    const url = mediumLarge || large || media.source_url || null;
    return {
        url,
        alt: media.alt_text?.trim() || ""
    };
}
function normalizeAuthor(user) {
    if (!user?.name?.trim()) return DEFAULT_AUTHOR;
    const avatar = user.avatar_urls?.["96"] || user.avatar_urls?.["48"] || user.avatar_urls?.["24"] || null;
    const socialLinks = user.url && /^https?:\/\//i.test(user.url) ? [
        {
            label: "Website",
            href: user.url
        }
    ] : [];
    return {
        name: user.name.trim(),
        bio: stripHtml(user.description ?? ""),
        avatarUrl: avatar,
        socialLinks
    };
}
function termsByTaxonomy(post, taxonomy) {
    const groups = post._embedded?.["wp:term"] ?? [];
    return groups.flat().filter((term)=>term?.taxonomy === taxonomy);
}
function normalizeCategory(raw) {
    const slug = raw.slug?.trim();
    if (!slug) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(slug, {
        id: raw.id,
        name: raw.name?.trim() || slug,
        description: stripHtml(raw.description ?? ""),
        count: raw.count
    });
}
function normalizeArticle(post) {
    const slug = post.slug?.trim();
    if (!slug) return null;
    const title = stripHtml(post.title?.rendered ?? "");
    if (!title) return null;
    const categories = termsByTaxonomy(post, "category");
    const primary = categories[0];
    const categorySlug = primary?.slug?.trim() || "daily-update";
    const categoryName = primary?.name?.trim() || categorySlug;
    const tags = termsByTaxonomy(post, "post_tag").map((term)=>term.name?.trim() || term.slug?.trim() || "").filter(Boolean);
    const media = post._embedded?.["wp:featuredmedia"]?.[0];
    const image = pickFeaturedImage(media);
    const excerptHtml = post.excerpt?.rendered ?? "";
    const bodyHtml = sanitizeWpHtml(post.content?.rendered ?? "");
    const excerpt = stripHtml(excerptHtml);
    return {
        id: post.id,
        title,
        slug,
        category: categorySlug,
        categoryName,
        tags,
        coverImage: image.url,
        coverImageAlt: image.alt || title,
        excerpt,
        body: bodyHtml,
        author: normalizeAuthor(post._embedded?.author?.[0]),
        publishDate: post.date ?? new Date(0).toISOString(),
        updatedDate: post.modified ?? post.date ?? new Date(0).toISOString(),
        readTimeMinutes: estimateReadTimeMinutes(bodyHtml || excerpt),
        sourceUrl: post.link
    };
}
function normalizePage(page) {
    const slug = page.slug?.trim();
    if (!slug) return null;
    const title = stripHtml(page.title?.rendered ?? "");
    if (!title) return null;
    const bodyHtml = sanitizeWpHtml(page.content?.rendered ?? "");
    const excerpt = stripHtml(page.excerpt?.rendered ?? "");
    return {
        id: page.id,
        title,
        slug,
        excerpt,
        body: bodyHtml,
        publishDate: page.date ?? new Date(0).toISOString(),
        updatedDate: page.modified ?? page.date ?? new Date(0).toISOString(),
        sourceUrl: page.link
    };
}
function getCategoryMeta(slug) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(slug);
}
}),
"[project]/lib/search.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articleMatchesQuery",
    ()=>articleMatchesQuery,
    "filterAndRankArticles",
    ()=>filterAndRankArticles,
    "scoreArticleMatch",
    ()=>scoreArticleMatch
]);
function normalizeQuery(query) {
    return query.trim().toLowerCase();
}
function scoreArticleMatch(article, query) {
    const needle = normalizeQuery(query);
    if (!needle) return 0;
    let score = 0;
    const title = article.title.toLowerCase();
    const excerpt = article.excerpt.toLowerCase();
    const category = article.category.toLowerCase();
    const categoryName = article.categoryName.toLowerCase();
    const tags = article.tags.map((tag)=>tag.toLowerCase());
    if (title === needle) score += 100;
    else if (title.includes(needle)) score += 40;
    else if (needle.split(/\s+/).every((part)=>title.includes(part))) score += 25;
    for (const tag of tags){
        if (tag === needle) score += 30;
        else if (tag.includes(needle) || needle.includes(tag)) score += 18;
    }
    if (categoryName.includes(needle) || category.includes(needle)) score += 20;
    if (excerpt.includes(needle)) score += 10;
    return score;
}
function filterAndRankArticles(articles, query) {
    const needle = normalizeQuery(query);
    if (!needle) return [];
    return articles.map((article)=>({
            article,
            score: scoreArticleMatch(article, needle)
        })).filter((item)=>item.score > 0).sort((a, b)=>b.score - a.score || a.article.title.localeCompare(b.article.title)).map((item)=>item.article);
}
function articleMatchesQuery(article, query) {
    return scoreArticleMatch(article, query) > 0;
}
}),
"[project]/lib/vehicles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VEHICLES",
    ()=>VEHICLES,
    "formatMileageOrRange",
    ()=>formatMileageOrRange,
    "formatSpecValue",
    ()=>formatSpecValue,
    "getAllVehicles",
    ()=>getAllVehicles,
    "getVehicleById",
    ()=>getVehicleById,
    "getVehiclesByIds",
    ()=>getVehiclesByIds,
    "vehicleFullLabel",
    ()=>vehicleFullLabel,
    "vehicleLabel",
    ()=>vehicleLabel
]);
const VEHICLES = [
    {
        id: "nexon-ev",
        brand: "Tata",
        model: "Nexon EV",
        variant: "Fearless+",
        priceRangeINR: "₹14.5–17.5 Lakh",
        mileageKmpl: null,
        rangeKm: 465,
        engineOrBattery: "45 kWh battery",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-ev.svg"
        ],
        fuelType: "electric"
    },
    {
        id: "creta",
        brand: "Hyundai",
        model: "Creta",
        variant: "SX (O)",
        priceRangeINR: "₹14–20 Lakh",
        mileageKmpl: 17.4,
        rangeKm: null,
        engineOrBattery: "1.5L petrol",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-car.svg"
        ],
        fuelType: "petrol"
    },
    {
        id: "seltos",
        brand: "Kia",
        model: "Seltos",
        variant: "HTX",
        priceRangeINR: "₹13–20 Lakh",
        mileageKmpl: 17.0,
        rangeKm: null,
        engineOrBattery: "1.5L petrol",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-car.svg"
        ],
        fuelType: "petrol"
    },
    {
        id: "apache-rtr-160",
        brand: "TVS",
        model: "Apache RTR 160",
        variant: "4V",
        priceRangeINR: "₹1.2–1.4 Lakh",
        mileageKmpl: 45,
        rangeKm: null,
        engineOrBattery: "160cc petrol",
        seatingCapacity: 2,
        images: [
            "/placeholders/cover-bike.svg"
        ],
        fuelType: "petrol"
    },
    {
        id: "tiago-ev",
        brand: "Tata",
        model: "Tiago EV",
        variant: "XT LR",
        priceRangeINR: "₹8–12 Lakh",
        mileageKmpl: null,
        rangeKm: 315,
        engineOrBattery: "24 kWh battery",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-ev.svg"
        ],
        fuelType: "electric"
    }
];
function getAllVehicles() {
    return VEHICLES;
}
function getVehicleById(id) {
    return VEHICLES.find((vehicle)=>vehicle.id === id) ?? null;
}
function getVehiclesByIds(ids) {
    return ids.map((id)=>getVehicleById(id)).filter((vehicle)=>vehicle != null);
}
function vehicleLabel(vehicle) {
    return `${vehicle.brand} ${vehicle.model}`;
}
function vehicleFullLabel(vehicle) {
    return `${vehicle.brand} ${vehicle.model} ${vehicle.variant}`.trim();
}
function formatMileageOrRange(vehicle) {
    if (vehicle.rangeKm != null) return `${vehicle.rangeKm} km`;
    if (vehicle.mileageKmpl != null) return `${vehicle.mileageKmpl} kmpl`;
    return "Unavailable";
}
function formatSpecValue(value, suffix = "") {
    if (value == null || value === "") return "Unavailable";
    return `${value}${suffix}`;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1bs_d97._.js.map