module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/(category)/[category]/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticlePage,
    "generateMetadata",
    ()=>generateMetadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$ArticleBodyWithAds$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ads/ArticleBodyWithAds.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$SidebarAd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ads/SidebarAd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$AuthorBio$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/AuthorBio.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/Breadcrumbs.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$RelatedArticles$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/RelatedArticles.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$seo$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/seo/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CmsStateMessage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cms.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-style.ts [app-rsc] (ecmascript)");
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
;
;
;
;
const revalidate = 300;
function formatDate(value) {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    }).format(new Date(value));
}
async function generateMetadata({ params }) {
    const { category: categorySlug, slug } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCmsConfigured"])()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPageMetadata"])({
            title: slug,
            path: `/${categorySlug}/${slug}`
        });
    }
    try {
        const article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticleBySlug"])(slug);
        if (!article) return {
            title: "Article not found"
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildArticleMetadata"])(article);
    } catch  {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildPageMetadata"])({
            title: slug,
            path: `/${categorySlug}/${slug}`
        });
    }
}
async function ArticlePage({ params }) {
    const { category: categorySlug, slug } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCmsConfigured"])()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl px-4 py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                tone: "info",
                title: "WordPress API not configured",
                message: "Set WP_API_URL in .env.local (see .env.example), then restart the Next.js server to load live articles."
            }, void 0, false, {
                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    let article = null;
    let related = [];
    let loadError = null;
    try {
        article = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticleBySlug"])(slug);
        if (article) {
            related = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRelatedArticles"])(article, 4);
        }
    } catch (error) {
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsConfigError"]) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-3xl px-4 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "info",
                    title: "WordPress API not configured",
                    message: error.message
                }, void 0, false, {
                    fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                    lineNumber: 93,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this);
        }
        loadError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsRequestError"] ? error.message : "Unexpected error while loading this article.";
    }
    if (loadError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-3xl px-4 py-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                tone: "error",
                title: "Could not load article",
                message: loadError
            }, void 0, false, {
                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                lineNumber: 111,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this);
    }
    if (!article) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    if (article.category !== categorySlug) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])(`/${article.category}/${article.slug}`);
    }
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(article.category, {
        name: article.categoryName
    });
    const imageSrc = article.coverImage;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl px-4 py-8 sm:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$seo$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildBreadcrumbJsonLd"])([
                        {
                            name: "Home",
                            path: "/"
                        },
                        {
                            name: category.name,
                            path: category.href
                        },
                        {
                            name: article.title,
                            path: `/${article.category}/${article.slug}`
                        }
                    ]),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildArticleJsonLd"])(article)
                ]
            }, void 0, false, {
                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 lg:grid-cols-[minmax(0,1fr)_300px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$Breadcrumbs$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Breadcrumbs"], {
                                items: [
                                    {
                                        label: "Home",
                                        href: "/"
                                    },
                                    {
                                        label: category.name,
                                        href: category.href
                                    },
                                    {
                                        label: article.title
                                    }
                                ]
                            }, void 0, false, {
                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                                className: "mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                        tone: category.tone,
                                        children: category.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl",
                                        children: article.title
                                    }, void 0, false, {
                                        fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-sm text-muted",
                                        children: [
                                            article.author.name,
                                            " · ",
                                            formatDate(article.publishDate),
                                            article.updatedDate !== article.publishDate ? ` · Updated ${formatDate(article.updatedDate)}` : "",
                                            " · ",
                                            article.readTimeMinutes,
                                            " min read"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                        lineNumber: 162,
                                        columnNumber: 13
                                    }, this),
                                    article.tags.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "mt-4 flex flex-wrap gap-2",
                                        children: article.tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rounded-md bg-background px-2 py-1 text-xs font-medium text-muted",
                                                children: tag
                                            }, tag, false, {
                                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                                lineNumber: 173,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            imageSrc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative mb-8 aspect-[16/9] overflow-hidden rounded-xl bg-border",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    src: imageSrc,
                                    alt: article.coverImageAlt || article.title,
                                    fill: true,
                                    priority: true,
                                    fetchPriority: "high",
                                    className: "object-cover",
                                    sizes: "(max-width: 1024px) 100vw, 768px"
                                }, void 0, false, {
                                    fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this) : null,
                            article.excerpt ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-8 text-lg leading-relaxed text-muted",
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$ArticleBodyWithAds$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleBodyWithAds"], {
                                html: article.body
                            }, void 0, false, {
                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$AuthorBio$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AuthorBio"], {
                                author: article.author
                            }, void 0, false, {
                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$RelatedArticles$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RelatedArticles"], {
                                articles: related
                            }, void 0, false, {
                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-10 text-sm text-muted",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: category.href,
                                    className: "font-semibold text-accent hover:text-accent-dark",
                                    children: [
                                        "← Back to ",
                                        category.name
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                                lineNumber: 208,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$SidebarAd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SidebarAd"], {}, void 0, false, {
                        fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                        lineNumber: 218,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(category)/[category]/[slug]/page.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(category)/[category]/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(category)/[category]/[slug]/page.tsx [app-rsc] (ecmascript)"));
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
"[project]/components/ads/ArticleBodyWithAds.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleBodyWithAds",
    ()=>ArticleBodyWithAds
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$AdSlot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ads/AdSlot.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleBody$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/ArticleBody.tsx [app-rsc] (ecmascript)");
;
;
;
function ArticleBodyWithAds({ html }) {
    const chunks = splitHtmlIntoChunks(html, 3);
    if (chunks.length <= 1) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleBody$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleBody"], {
                    html: html
                }, void 0, false, {
                    fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "my-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$AdSlot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdSlot"], {
                        placement: "inArticle",
                        size: "rectangle"
                    }, void 0, false, {
                        fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this);
    }
    const midIndex = Math.max(1, Math.floor(chunks.length / 2));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: chunks.map((chunk, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleBody$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleBody"], {
                        html: chunk
                    }, void 0, false, {
                        fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this),
                    index === 0 || index === midIndex ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$AdSlot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdSlot"], {
                            placement: "inArticle",
                            size: "rectangle"
                        }, void 0, false, {
                            fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
                            lineNumber: 35,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this) : null
                ]
            }, `article-chunk-${index}`, true, {
                fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
                lineNumber: 31,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/ads/ArticleBodyWithAds.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
function splitHtmlIntoChunks(html, paragraphsPerChunk) {
    const trimmed = html.trim();
    if (!trimmed) return [];
    const parts = trimmed.split(/(?<=<\/p>)/i).filter((part)=>part.trim());
    if (parts.length <= paragraphsPerChunk) return [
        trimmed
    ];
    const chunks = [];
    for(let i = 0; i < parts.length; i += paragraphsPerChunk){
        chunks.push(parts.slice(i, i + paragraphsPerChunk).join(""));
    }
    return chunks;
}
}),
"[project]/components/ads/SidebarAd.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SidebarAd",
    ()=>SidebarAd
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$AdSlot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ads/AdSlot.tsx [app-rsc] (ecmascript)");
;
;
function SidebarAd() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "hidden lg:block",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sticky top-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ads$2f$AdSlot$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AdSlot"], {
                placement: "sidebar",
                size: "rectangle"
            }, void 0, false, {
                fileName: "[project]/components/ads/SidebarAd.tsx",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ads/SidebarAd.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ads/SidebarAd.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/article/ArticleBody.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleBody",
    ()=>ArticleBody
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ArticleBody({ html }) {
    if (!html.trim()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-muted",
            children: "This article does not have body content yet."
        }, void 0, false, {
            fileName: "[project]/components/article/ArticleBody.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "article-body max-w-none text-[1.05rem] leading-8 text-foreground",
        dangerouslySetInnerHTML: {
            __html: html
        }
    }, void 0, false, {
        fileName: "[project]/components/article/ArticleBody.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
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
    const imageSrc = article.coverImage ?? "/placeholders/cover-daily.svg";
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
"[project]/components/article/AuthorBio.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthorBio",
    ()=>AuthorBio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
function AuthorBio({ author }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "mt-10 rounded-xl border border-border bg-surface p-4 sm:p-5",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex gap-4",
            children: [
                author.avatarUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative size-14 shrink-0 overflow-hidden rounded-full bg-border",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: author.avatarUrl,
                        alt: "",
                        fill: true,
                        className: "object-cover",
                        sizes: "56px"
                    }, void 0, false, {
                        fileName: "[project]/components/article/AuthorBio.tsx",
                        lineNumber: 14,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/article/AuthorBio.tsx",
                    lineNumber: 13,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex size-14 shrink-0 items-center justify-center rounded-full bg-border text-sm font-semibold text-muted",
                    "aria-hidden": "true",
                    children: author.name.slice(0, 1).toUpperCase()
                }, void 0, false, {
                    fileName: "[project]/components/article/AuthorBio.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "min-w-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs font-semibold uppercase tracking-wide text-muted",
                            children: "Author"
                        }, void 0, false, {
                            fileName: "[project]/components/article/AuthorBio.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-1 text-base font-semibold",
                            children: author.name
                        }, void 0, false, {
                            fileName: "[project]/components/article/AuthorBio.tsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        author.bio ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm leading-relaxed text-muted",
                            children: author.bio
                        }, void 0, false, {
                            fileName: "[project]/components/article/AuthorBio.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article/AuthorBio.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/article/AuthorBio.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/article/AuthorBio.tsx",
        lineNumber: 10,
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
"[project]/components/article/RelatedArticles.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelatedArticles",
    ()=>RelatedArticles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/ArticleCard.tsx [app-rsc] (ecmascript)");
;
;
;
function RelatedArticles({ articles }) {
    if (articles.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-12 border-t border-border pt-8",
        "aria-labelledby": "related-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 flex items-end justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "related-heading",
                        className: "text-xl font-bold",
                        children: "Related articles"
                    }, void 0, false, {
                        fileName: "[project]/components/article/RelatedArticles.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${articles[0].category}`,
                        className: "text-sm font-semibold text-accent hover:text-accent-dark",
                        children: "More in category"
                    }, void 0, false, {
                        fileName: "[project]/components/article/RelatedArticles.tsx",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/article/RelatedArticles.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleCard"], {
                        article: article
                    }, article.slug, false, {
                        fileName: "[project]/components/article/RelatedArticles.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/article/RelatedArticles.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/article/RelatedArticles.tsx",
        lineNumber: 13,
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
    "buildCategoryMeta",
    ()=>buildCategoryMeta,
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
"[project]/lib/normalize.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
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
function sanitizeWpHtml(html) {
    return html.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "").replace(/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/gi, "").replace(/\son\w+="[^"]*"/gi, "").replace(/\son\w+='[^']*'/gi, "").replace(/javascript:/gi, "");
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__06d1782._.js.map