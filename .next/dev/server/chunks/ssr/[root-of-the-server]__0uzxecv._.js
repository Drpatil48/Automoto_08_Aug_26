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
"[project]/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "generateMetadata",
    ()=>generateMetadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/ArticleCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CategoryRail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/CategoryRail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ComparePreview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/ComparePreview.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/Hero.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$NewsletterForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/NewsletterForm.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/SectionHeading.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$TopStories$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/TopStories.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$TrendingNow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/TrendingNow.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$seo$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/seo/JsonLd.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/CmsStateMessage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cms.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-style.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-rsc] (ecmascript)");
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
const generateMetadata = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildHomeMetadata"];
const revalidate = 300;
const VEHICLES = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllVehicles"])();
async function loadCategoryRail(slug, fallbackName, fallbackDescription, excludedSlug) {
    try {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getArticlesByCategorySlug"])(slug, {
            perPage: 12
        });
        const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(slug, {
            // The rail represents the requested archive, not the first post's
            // primary category (posts can belong to more than one WP category).
            name: fallbackName,
            description: fallbackDescription
        });
        return {
            category,
            // Do not surface cross-listed car/EV posts inside a dedicated rail.
            articles: result.articles.filter((article)=>article.category === slug && article.slug !== excludedSlug).slice(0, 4)
        };
    } catch (error) {
        const message = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsRequestError"] ? error.message : "Failed to load category articles.";
        return {
            category: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(slug, {
                name: fallbackName,
                description: fallbackDescription
            }),
            articles: [],
            error: message
        };
    }
}
async function HomePage() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCmsConfigured"])()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl space-y-8 px-4 py-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "info",
                    title: "WordPress API not configured",
                    message: "Set WP_API_URL in .env.local (see .env.example), then restart the server to load live AutomotoNews content. Compare and newsletter UI remain available below."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ComparePreview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ComparePreview"], {
                    vehicles: VEHICLES
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$NewsletterForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NewsletterForm"], {}, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 71,
            columnNumber: 7
        }, this);
    }
    let latest = [];
    let latestError = null;
    try {
        latest = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLatestArticles"])(8);
    } catch (error) {
        latestError = error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cms$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsRequestError"] ? error.message : "Failed to load latest articles from WordPress.";
    }
    const featured = latest[0] ?? null;
    const topStories = latest.slice(1, 5);
    const [evRail, carRail, bikeRail, guideRail] = await Promise.all([
        loadCategoryRail("electric-vehicles-evs", "EV Spotlight", "Charging, battery health, range, and the latest EV launches.", featured?.slug),
        loadCategoryRail("car-news", "Car News", "Latest car launches, price updates, and reviews."),
        loadCategoryRail("sportsbikes", "Bikes & Performance", "Sports bikes, mileage champions, and new two-wheeler launches."),
        loadCategoryRail("auto-technology", "Latest Guides", "Tech explainers and practical automotive guidance.")
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$seo$2f$JsonLd$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["JsonLd"], {
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$seo$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildBreadcrumbJsonLd"])([
                    {
                        name: "Home",
                        path: "/"
                    }
                ])
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            latestError ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 pt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "error",
                    title: "Could not load homepage stories",
                    message: latestError
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this) : null,
            featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$Hero$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Hero"], {
                article: featured
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 137,
                columnNumber: 19
            }, this) : null,
            !latestError && !featured ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "empty",
                    title: "No published articles",
                    message: "WordPress returned no published posts for the homepage."
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 141,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 140,
                columnNumber: 9
            }, this) : null,
            topStories.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$TopStories$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TopStories"], {
                articles: topStories
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 149,
                columnNumber: 32
            }, this) : null,
            latest.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$TrendingNow$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TrendingNow"], {
                articles: latest.slice(0, 4)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 151,
                columnNumber: 28
            }, this) : null,
            evRail.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "error",
                    title: "EV Spotlight unavailable",
                    message: evRail.error
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CategoryRail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategoryRail"], {
                sectionId: "ev",
                category: evRail.category,
                articles: evRail.articles
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            carRail.articles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CategoryRail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategoryRail"], {
                sectionId: "cars",
                category: carRail.category,
                articles: carRail.articles
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 170,
                columnNumber: 9
            }, this) : null,
            bikeRail.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-6xl px-4 py-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "error",
                    title: "Bikes section unavailable",
                    message: bikeRail.error
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 178,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$CategoryRail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CategoryRail"], {
                sectionId: "bikes",
                category: bikeRail.category,
                articles: bikeRail.articles
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ComparePreview$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ComparePreview"], {
                vehicles: VEHICLES
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            guideRail.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto max-w-7xl px-4 py-6 sm:px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                    tone: "error",
                    title: "Guides unavailable",
                    message: guideRail.error
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 196,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "guides",
                className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10",
                "aria-labelledby": "guides-heading",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                        id: "guides-heading",
                        title: `💡 ${guideRail.category.name}`,
                        description: guideRail.category.description,
                        href: guideRail.category.href
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, this),
                    guideRail.articles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$CmsStateMessage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CmsStateMessage"], {
                        tone: "empty",
                        title: "No guide articles yet",
                        message: "No published posts were found for this section."
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 216,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                        children: guideRail.articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleCard"], {
                                article: article,
                                variant: "guide"
                            }, article.slug, false, {
                                fileName: "[project]/app/page.tsx",
                                lineNumber: 224,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.tsx",
                        lineNumber: 222,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$NewsletterForm$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NewsletterForm"], {}, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 235,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.tsx [app-rsc] (ecmascript)"));
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
            className: "group flex gap-3.5 rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-3.5 transition-all duration-300 hover:border-red-600/50 hover:bg-zinc-900/90 hover:shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: href,
                    className: "relative block h-20 w-28 shrink-0 overflow-hidden rounded-lg bg-zinc-800",
                    tabIndex: -1,
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: imageSrc,
                        alt: "",
                        fill: true,
                        className: "object-cover transition-transform duration-500 group-hover:scale-105",
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
                    className: "min-w-0 flex-1",
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
                            className: "mt-1.5 text-xs font-bold leading-snug text-zinc-100 transition-colors group-hover:text-red-400 sm:text-sm",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
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
                            className: "mt-2 text-[11px] text-zinc-400",
                            children: [
                                formatDate(article.publishDate),
                                " · ",
                                article.readTimeMinutes,
                                " min read"
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
        className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-red-600/50 hover:bg-zinc-900/95 hover:shadow-xl hover:shadow-red-950/20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: "relative block aspect-[16/9] overflow-hidden bg-zinc-800",
                tabIndex: -1,
                "aria-hidden": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: imageSrc,
                        alt: imageAlt,
                        fill: true,
                        priority: priority,
                        className: "object-cover transition-transform duration-500 group-hover:scale-105",
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    }, void 0, false, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                    }, void 0, false, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/article/ArticleCard.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-1 flex-col justify-between p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-2.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                    tone: category.tone,
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "[project]/components/article/ArticleCard.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/article/ArticleCard.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-base font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-red-400 sm:text-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    children: article.title
                                }, void 0, false, {
                                    fileName: "[project]/components/article/ArticleCard.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/article/ArticleCard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            variant === "guide" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2.5 text-xs leading-relaxed text-zinc-400 sm:text-sm",
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "[project]/components/article/ArticleCard.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2.5 line-clamp-2 text-xs leading-relaxed text-zinc-400 sm:text-sm",
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "[project]/components/article/ArticleCard.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex items-center justify-between border-t border-zinc-800/60 pt-3.5 text-[11px] font-medium text-zinc-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: formatDate(article.publishDate)
                            }, void 0, false, {
                                fileName: "[project]/components/article/ArticleCard.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    article.readTimeMinutes,
                                    " min read"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/article/ArticleCard.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/article/ArticleCard.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/article/ArticleCard.tsx",
                lineNumber: 83,
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
"[project]/components/home/CategoryRail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CategoryRail",
    ()=>CategoryRail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/ArticleCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/SectionHeading.tsx [app-rsc] (ecmascript)");
;
;
;
function CategoryRail({ category, articles, sectionId }) {
    const sectionIconMap = {
        ev: "⚡ ",
        cars: "🚗 ",
        "car-news": "🚗 ",
        bikes: "🏍️ ",
        sportsbikes: "🏍️ ",
        guides: "💡 ",
        "auto-technology": "💡 "
    };
    const titleWithIcon = `${sectionIconMap[sectionId] ?? ""}${category.name}`;
    const headingId = `${sectionId}-heading`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: sectionId,
        className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10",
        "aria-labelledby": headingId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                id: headingId,
                title: titleWithIcon,
                description: category.description,
                href: category.href
            }, void 0, false, {
                fileName: "[project]/components/home/CategoryRail.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            articles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-sm text-zinc-400",
                children: "No published articles found in this category yet."
            }, void 0, false, {
                fileName: "[project]/components/home/CategoryRail.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
                children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleCard"], {
                        article: article
                    }, article.slug, false, {
                        fileName: "[project]/components/home/CategoryRail.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/home/CategoryRail.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/CategoryRail.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/ComparePreview.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparePreview",
    ()=>ComparePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ComparePreviewTool$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/ComparePreviewTool.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/SectionHeading.tsx [app-rsc] (ecmascript)");
;
;
;
function ComparePreview({ vehicles }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "compare",
        className: "border-y border-zinc-800/80 bg-zinc-950/80 px-4 py-8 sm:px-6 lg:py-12",
        "aria-labelledby": "compare-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    id: "compare-heading",
                    title: "COMPARE BEFORE YOU BUY | वाहनांची तुलना करा",
                    description: "Select two vehicles to compare specs, prices, mileage/range, and key features side-by-side.",
                    href: "/compare",
                    linkLabel: "Full Compare Tool"
                }, void 0, false, {
                    fileName: "[project]/components/home/ComparePreview.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 rounded-2xl border border-zinc-800/90 bg-zinc-900/70 p-4 sm:p-6 lg:p-8 shadow-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ComparePreviewTool$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ComparePreviewTool"], {
                        vehicles: vehicles
                    }, void 0, false, {
                        fileName: "[project]/components/home/ComparePreview.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/ComparePreview.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/ComparePreview.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/ComparePreview.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/ComparePreviewTool.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparePreviewTool",
    ()=>ComparePreviewTool
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ComparePreviewTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ComparePreviewTool() from the server but ComparePreviewTool is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/ComparePreviewTool.tsx", "ComparePreviewTool");
}),
"[project]/components/home/ComparePreviewTool.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ComparePreviewTool",
    ()=>ComparePreviewTool
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ComparePreviewTool = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ComparePreviewTool() from the server but ComparePreviewTool is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/ComparePreviewTool.tsx <module evaluation>", "ComparePreviewTool");
}),
"[project]/components/home/ComparePreviewTool.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ComparePreviewTool$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/home/ComparePreviewTool.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ComparePreviewTool$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/home/ComparePreviewTool.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$ComparePreviewTool$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/home/Hero.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
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
function Hero({ article }) {
    const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(article.category, {
        name: article.categoryName
    });
    const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articleHref"])(article);
    const imageSrc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articleCoverSrc"])(article);
    const imageAlt = article.coverImageAlt || article.title;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "hero-heading",
        className: "border-b border-zinc-800/80 bg-zinc-950 px-4 py-8 sm:px-6 lg:py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-12 lg:items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: href,
                        className: "group relative block aspect-[16/9] overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 shadow-2xl lg:col-span-7",
                        tabIndex: -1,
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                src: imageSrc,
                                alt: imageAlt,
                                fill: true,
                                priority: true,
                                fetchPriority: "high",
                                className: "object-cover transition-transform duration-500 group-hover:scale-105",
                                sizes: "(max-width: 1024px) 100vw, 58vw"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent lg:hidden"
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center lg:col-span-5 lg:pl-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-red-950/80 border border-red-800/60 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-red-400",
                                        children: "FEATURED STORY"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-zinc-400 font-medium",
                                        children: "• मराठीत ताज्या बातम्या"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                    tone: category.tone,
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 56,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                id: "hero-heading",
                                className: "mt-3 text-2xl font-black leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    className: "transition-colors hover:text-red-500",
                                    children: article.title
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base",
                                children: article.excerpt
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 flex items-center gap-3 text-xs text-zinc-400 border-t border-zinc-800/60 pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-zinc-300",
                                        children: article.author.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatDate(article.publishDate)
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 74,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            article.readTimeMinutes,
                                            " min read"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/home/Hero.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 70,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: href,
                                    className: "inline-flex items-center justify-center rounded-xl bg-red-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition-all hover:bg-red-500 hover:shadow-red-900/60 hover:scale-[1.02]",
                                    children: "संपूर्ण बातमी वाचा →"
                                }, void 0, false, {
                                    fileName: "[project]/components/home/Hero.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/home/Hero.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/Hero.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/Hero.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/home/Hero.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/Hero.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/NewsletterForm.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterForm",
    ()=>NewsletterForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$NewsletterFormClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/NewsletterFormClient.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/SectionHeading.tsx [app-rsc] (ecmascript)");
;
;
;
function NewsletterForm() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "newsletter",
        className: "border-t border-zinc-800/80 bg-zinc-950 px-4 py-8 sm:px-6 lg:py-12",
        "aria-labelledby": "newsletter-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    id: "newsletter-heading",
                    title: "SUBSCRIBE FOR DAILY AUTO UPDATES | ऑटो न्यूज अपडेट्स",
                    description: "Get the latest EV news, car launches, bike reviews, and buying guides straight to your inbox."
                }, void 0, false, {
                    fileName: "[project]/components/home/NewsletterForm.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$NewsletterFormClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NewsletterFormClient"], {}, void 0, false, {
                        fileName: "[project]/components/home/NewsletterForm.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/home/NewsletterForm.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/NewsletterForm.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/NewsletterForm.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/NewsletterFormClient.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterFormClient",
    ()=>NewsletterFormClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const NewsletterFormClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NewsletterFormClient() from the server but NewsletterFormClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/NewsletterFormClient.tsx", "NewsletterFormClient");
}),
"[project]/components/home/NewsletterFormClient.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterFormClient",
    ()=>NewsletterFormClient
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const NewsletterFormClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call NewsletterFormClient() from the server but NewsletterFormClient is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/components/home/NewsletterFormClient.tsx <module evaluation>", "NewsletterFormClient");
}),
"[project]/components/home/NewsletterFormClient.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$NewsletterFormClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/components/home/NewsletterFormClient.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$NewsletterFormClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/components/home/NewsletterFormClient.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$NewsletterFormClient$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/components/home/SectionHeading.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
function SectionHeading({ id, title, description, href, linkLabel = "View all" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-zinc-800/80 pb-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-6 w-1.5 rounded-full bg-red-600"
                            }, void 0, false, {
                                fileName: "[project]/components/home/SectionHeading.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: id,
                                className: "text-xl font-black uppercase tracking-tight text-white sm:text-2xl",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/home/SectionHeading.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/SectionHeading.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this),
                    description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1.5 pl-4 text-xs leading-relaxed text-zinc-400 sm:text-sm",
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/components/home/SectionHeading.tsx",
                        lineNumber: 32,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/SectionHeading.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: href,
                className: "group inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-red-500 hover:text-red-400 sm:self-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: linkLabel
                    }, void 0, false, {
                        fileName: "[project]/components/home/SectionHeading.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "transition-transform group-hover:translate-x-1",
                        children: "→"
                    }, void 0, false, {
                        fileName: "[project]/components/home/SectionHeading.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/SectionHeading.tsx",
                lineNumber: 38,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/SectionHeading.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/TopStories.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TopStories",
    ()=>TopStories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/article/ArticleCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/home/SectionHeading.tsx [app-rsc] (ecmascript)");
;
;
;
function TopStories({ articles }) {
    if (articles.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "top-stories",
            className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10",
            "aria-labelledby": "top-stories-heading",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                    id: "top-stories-heading",
                    title: "Top Stories"
                }, void 0, false, {
                    fileName: "[project]/components/home/TopStories.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-sm text-zinc-400",
                    children: "No top stories available right now."
                }, void 0, false, {
                    fileName: "[project]/components/home/TopStories.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/TopStories.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this);
    }
    const [lead, ...rest] = articles;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "top-stories",
        className: "mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-10",
        "aria-labelledby": "top-stories-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$home$2f$SectionHeading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SectionHeading"], {
                id: "top-stories-heading",
                title: "Top Stories | महत्त्वाच्या घडामोडी",
                description: "The latest automotive headlines readers are following today."
            }, void 0, false, {
                fileName: "[project]/components/home/TopStories.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-6 lg:grid-cols-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "lg:col-span-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleCard"], {
                            article: lead
                        }, void 0, false, {
                            fileName: "[project]/components/home/TopStories.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/home/TopStories.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4 lg:col-span-2",
                        children: rest.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$article$2f$ArticleCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ArticleCard"], {
                                article: article,
                                variant: "compact"
                            }, article.slug, false, {
                                fileName: "[project]/components/home/TopStories.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/home/TopStories.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/TopStories.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/TopStories.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/home/TrendingNow.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingNow",
    ()=>TrendingNow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Badge.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-style.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-rsc] (ecmascript)");
;
;
;
;
;
function formatDate(value) {
    return new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short"
    }).format(new Date(value));
}
function TrendingNow({ articles }) {
    if (articles.length === 0) return null;
    const items = articles.slice(0, 4);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "trending-now",
        className: "border-y border-zinc-800/80 bg-zinc-950/60 px-4 py-8 sm:px-6",
        "aria-labelledby": "trending-heading",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/60 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "relative flex size-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TrendingNow.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "relative inline-flex size-3 rounded-full bg-red-600"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TrendingNow.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TrendingNow.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    id: "trending-heading",
                                    className: "text-lg font-black uppercase tracking-wide text-white sm:text-xl",
                                    children: [
                                        "TRENDING NOW ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-normal text-zinc-400",
                                            children: "| ट्रेंडिंग अपडेट्स"
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TrendingNow.tsx",
                                            lineNumber: 39,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TrendingNow.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/home/TrendingNow.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "rounded-full bg-red-950/80 border border-red-800/50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-400",
                            children: "BREAKING NEWS"
                        }, void 0, false, {
                            fileName: "[project]/components/home/TrendingNow.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/home/TrendingNow.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                    children: items.map((article, index)=>{
                        const category = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(article.category, {
                            name: article.categoryName
                        });
                        const href = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["articleHref"])(article);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative flex flex-col justify-between rounded-xl border border-zinc-800/80 bg-zinc-900/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-600/50 hover:bg-zinc-900/90 hover:shadow-lg hover:shadow-red-950/20",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-black italic tracking-tighter text-zinc-700 transition-colors group-hover:text-red-500",
                                                    children: [
                                                        "0",
                                                        index + 1
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/home/TrendingNow.tsx",
                                                    lineNumber: 61,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Badge$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Badge"], {
                                                    tone: category.tone,
                                                    children: category.name
                                                }, void 0, false, {
                                                    fileName: "[project]/components/home/TrendingNow.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TrendingNow.tsx",
                                            lineNumber: 60,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-3 text-sm font-bold leading-snug tracking-tight text-zinc-100 transition-colors group-hover:text-red-400",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                href: href,
                                                className: "before:absolute before:inset-0",
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/home/TrendingNow.tsx",
                                                lineNumber: 67,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TrendingNow.tsx",
                                            lineNumber: 66,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TrendingNow.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex items-center justify-between text-[11px] text-zinc-400 border-t border-zinc-800/40 pt-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: formatDate(article.publishDate)
                                        }, void 0, false, {
                                            fileName: "[project]/components/home/TrendingNow.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                article.readTimeMinutes,
                                                " min read"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/home/TrendingNow.tsx",
                                            lineNumber: 75,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/home/TrendingNow.tsx",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, article.slug, true, {
                            fileName: "[project]/components/home/TrendingNow.tsx",
                            lineNumber: 55,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/components/home/TrendingNow.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/home/TrendingNow.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/home/TrendingNow.tsx",
        lineNumber: 23,
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
    ev: "bg-emerald-950/80 border border-emerald-800/60 text-emerald-400 font-bold",
    bike: "bg-amber-950/80 border border-amber-800/60 text-amber-400 font-bold",
    car: "bg-red-950/80 border border-red-800/60 text-red-400 font-bold",
    guide: "bg-blue-950/80 border border-blue-800/60 text-blue-400 font-bold",
    daily: "bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold",
    neutral: "bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold"
};
function Badge({ children, tone = "neutral", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] uppercase tracking-wider ${toneClasses[tone]} ${className}`,
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
    name: "Dhanraj Patil",
    bio: "Automotive journalist & Founder of AutomotoNews.in, covering EVs, cars, and bikes for Indian readers with factual verification and in-depth analysis.",
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
    const avatar = user?.avatar_urls?.["96"] || user?.avatar_urls?.["48"] || user?.avatar_urls?.["24"] || null;
    const socialLinks = user?.url && /^https?:\/\//i.test(user.url) ? [
        {
            label: "Website",
            href: user.url
        }
    ] : [];
    return {
        name: "Dhanraj Patil",
        bio: stripHtml(user?.description ?? "") || DEFAULT_AUTHOR.bio,
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
    "canCompare",
    ()=>canCompare,
    "formatMileageOrRange",
    ()=>formatMileageOrRange,
    "formatSpecValue",
    ()=>formatSpecValue,
    "getAllVehicles",
    ()=>getAllVehicles,
    "getComparableVehicles",
    ()=>getComparableVehicles,
    "getVehicleById",
    ()=>getVehicleById,
    "getVehicleCategory",
    ()=>getVehicleCategory,
    "getVehicleCategoryType",
    ()=>getVehicleCategoryType,
    "getVehiclesByIds",
    ()=>getVehiclesByIds,
    "isBike",
    ()=>isBike,
    "isCar",
    ()=>isCar,
    "validateComparison",
    ()=>validateComparison,
    "vehicleFullLabel",
    ()=>vehicleFullLabel,
    "vehicleLabel",
    ()=>vehicleLabel
]);
const VEHICLES = [
    // Electric Cars
    {
        id: "nexon-ev",
        brand: "Tata",
        model: "Nexon EV",
        variant: "Fearless+ Long Range",
        category: "car",
        priceRangeINR: "₹14.49–19.49 Lakh",
        mileageKmpl: null,
        rangeKm: 465,
        engineOrBattery: "45 kWh Battery (143 PS)",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-ev.svg"
        ],
        fuelType: "electric",
        bootSpaceLiters: 350,
        airbagsCount: 6,
        hasABS: true,
        hasESP: true,
        dimensionsMm: "3994 x 1811 x 1616",
        groundClearanceMm: 190
    },
    {
        id: "tiago-ev",
        brand: "Tata",
        model: "Tiago EV",
        variant: "XZ+ Tech LUX",
        category: "car",
        priceRangeINR: "₹7.99–11.89 Lakh",
        mileageKmpl: null,
        rangeKm: 315,
        engineOrBattery: "24 kWh Battery (75 PS)",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-ev.svg"
        ],
        fuelType: "electric",
        bootSpaceLiters: 240,
        airbagsCount: 2,
        hasABS: true,
        hasESP: false,
        dimensionsMm: "3769 x 1677 x 1536",
        groundClearanceMm: 166
    },
    {
        id: "mg-windsor-ev",
        brand: "MG",
        model: "Windsor EV",
        variant: "Essence",
        category: "car",
        priceRangeINR: "₹13.50–15.50 Lakh",
        mileageKmpl: null,
        rangeKm: 331,
        engineOrBattery: "38 kWh Battery (136 PS)",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-ev.svg"
        ],
        fuelType: "electric",
        bootSpaceLiters: 604,
        airbagsCount: 6,
        hasABS: true,
        hasESP: true,
        dimensionsMm: "4295 x 1850 x 1677",
        groundClearanceMm: 186
    },
    // Electric Bikes / Scooters
    {
        id: "ola-s1-pro",
        brand: "Ola Electric",
        model: "S1 Pro",
        variant: "Gen 2",
        category: "bike",
        priceRangeINR: "₹1.34 Lakh",
        mileageKmpl: null,
        rangeKm: 195,
        engineOrBattery: "4 kWh Battery (11 kW Peak)",
        seatingCapacity: 2,
        images: [
            "/placeholders/cover-ev.svg"
        ],
        fuelType: "electric",
        seatHeightMm: 805,
        kerbWeightKg: 116,
        fuelTankCapacityLiters: null,
        brakes: "Disc (Front & Rear) with CBS",
        topSpeedKmph: 120,
        maxPowerPs: "15 PS (11 kW)",
        maxTorqueNm: "58 Nm"
    },
    {
        id: "ather-450x",
        brand: "Ather",
        model: "450X",
        variant: "3.7 kWh",
        category: "bike",
        priceRangeINR: "₹1.45 Lakh",
        mileageKmpl: null,
        rangeKm: 150,
        engineOrBattery: "3.7 kWh Battery (6.4 kW)",
        seatingCapacity: 2,
        images: [
            "/placeholders/cover-ev.svg"
        ],
        fuelType: "electric",
        seatHeightMm: 780,
        kerbWeightKg: 111.6,
        fuelTankCapacityLiters: null,
        brakes: "Disc (Front & Rear) with CBS",
        topSpeedKmph: 90,
        maxPowerPs: "8.7 PS (6.4 kW)",
        maxTorqueNm: "26 Nm"
    },
    // ICE Cars (Petrol / Diesel)
    {
        id: "creta",
        brand: "Hyundai",
        model: "Creta",
        variant: "SX (O) 1.5 Turbo",
        category: "car",
        priceRangeINR: "₹11.00–20.15 Lakh",
        mileageKmpl: 18.4,
        rangeKm: null,
        engineOrBattery: "1.5L Turbo Petrol (160 PS)",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-car.svg"
        ],
        fuelType: "petrol",
        bootSpaceLiters: 433,
        airbagsCount: 6,
        hasABS: true,
        hasESP: true,
        dimensionsMm: "4330 x 1790 x 1635",
        groundClearanceMm: 190
    },
    {
        id: "swift",
        brand: "Maruti Suzuki",
        model: "Swift",
        variant: "ZXi+ Dual Tone",
        category: "car",
        priceRangeINR: "₹6.49–9.64 Lakh",
        mileageKmpl: 25.75,
        rangeKm: null,
        engineOrBattery: "1.2L Z-Series Petrol (82 PS)",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-car.svg"
        ],
        fuelType: "petrol",
        bootSpaceLiters: 265,
        airbagsCount: 6,
        hasABS: true,
        hasESP: true,
        dimensionsMm: "3860 x 1735 x 1520",
        groundClearanceMm: 163
    },
    {
        id: "punch",
        brand: "Tata",
        model: "Punch",
        variant: "Creative Flagship",
        category: "car",
        priceRangeINR: "₹6.13–10.20 Lakh",
        mileageKmpl: 20.09,
        rangeKm: null,
        engineOrBattery: "1.2L Revotron Petrol (88 PS)",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-car.svg"
        ],
        fuelType: "petrol",
        bootSpaceLiters: 366,
        airbagsCount: 2,
        hasABS: true,
        hasESP: false,
        dimensionsMm: "3827 x 1742 x 1615",
        groundClearanceMm: 187
    },
    {
        id: "seltos",
        brand: "Kia",
        model: "Seltos",
        variant: "GTX+ Turbo",
        category: "car",
        priceRangeINR: "₹10.90–20.35 Lakh",
        mileageKmpl: 17.7,
        rangeKm: null,
        engineOrBattery: "1.5L TGDi Petrol (160 PS)",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-car.svg"
        ],
        fuelType: "petrol",
        bootSpaceLiters: 433,
        airbagsCount: 6,
        hasABS: true,
        hasESP: true,
        dimensionsMm: "4365 x 1800 x 1645",
        groundClearanceMm: 190
    },
    {
        id: "thar",
        brand: "Mahindra",
        model: "Thar ROXX",
        variant: "AX7L 4WD",
        category: "car",
        priceRangeINR: "₹12.99–22.49 Lakh",
        mileageKmpl: 15.2,
        rangeKm: null,
        engineOrBattery: "2.2L mHawk Diesel (175 PS)",
        seatingCapacity: 5,
        images: [
            "/placeholders/cover-car.svg"
        ],
        fuelType: "diesel",
        bootSpaceLiters: 644,
        airbagsCount: 6,
        hasABS: true,
        hasESP: true,
        dimensionsMm: "4428 x 1870 x 1923",
        groundClearanceMm: 219
    },
    // Motorcycles & Bikes
    {
        id: "classic-350",
        brand: "Royal Enfield",
        model: "Classic 350",
        variant: "Chrome Red",
        category: "bike",
        priceRangeINR: "₹1.93–2.30 Lakh",
        mileageKmpl: 36.2,
        rangeKm: null,
        engineOrBattery: "349cc Air-Oil Cooled (20.2 bhp)",
        seatingCapacity: 2,
        images: [
            "/placeholders/cover-bike.svg"
        ],
        fuelType: "petrol",
        seatHeightMm: 805,
        kerbWeightKg: 195,
        fuelTankCapacityLiters: 13,
        brakes: "Disc (Front 300mm / Rear 270mm) Dual ABS",
        topSpeedKmph: 114,
        maxPowerPs: "20.2 PS @ 6100 rpm",
        maxTorqueNm: "27 Nm @ 4000 rpm"
    },
    {
        id: "apache-rtr-160",
        brand: "TVS",
        model: "Apache RTR 160",
        variant: "4V Special Edition",
        category: "bike",
        priceRangeINR: "₹1.24–1.38 Lakh",
        mileageKmpl: 45.0,
        rangeKm: null,
        engineOrBattery: "159.7cc Oil-Cooled (17.55 PS)",
        seatingCapacity: 2,
        images: [
            "/placeholders/cover-bike.svg"
        ],
        fuelType: "petrol",
        seatHeightMm: 800,
        kerbWeightKg: 144,
        fuelTankCapacityLiters: 12,
        brakes: "Disc (Front & Rear) Single ABS",
        topSpeedKmph: 114,
        maxPowerPs: "17.55 PS @ 9250 rpm",
        maxTorqueNm: "14.73 Nm @ 7250 rpm"
    },
    {
        id: "pulsar-ns200",
        brand: "Bajaj",
        model: "Pulsar NS200",
        variant: "Dual ABS USD",
        category: "bike",
        priceRangeINR: "₹1.58 Lakh",
        mileageKmpl: 40.3,
        rangeKm: null,
        engineOrBattery: "199.5cc Liquid-Cooled (24.5 PS)",
        seatingCapacity: 2,
        images: [
            "/placeholders/cover-bike.svg"
        ],
        fuelType: "petrol",
        seatHeightMm: 805,
        kerbWeightKg: 158,
        fuelTankCapacityLiters: 12,
        brakes: "Disc (Front 300mm / Rear 230mm) Dual ABS",
        topSpeedKmph: 136,
        maxPowerPs: "24.5 PS @ 9750 rpm",
        maxTorqueNm: "18.74 Nm @ 8000 rpm"
    },
    {
        id: "freedom-125",
        brand: "Bajaj",
        model: "Freedom 125",
        variant: "NG04 Disc LED",
        category: "bike",
        priceRangeINR: "₹95,000–1.10 Lakh",
        mileageKmpl: 102.0,
        rangeKm: null,
        engineOrBattery: "125cc CNG + Petrol Hybrid",
        seatingCapacity: 2,
        images: [
            "/placeholders/cover-bike.svg"
        ],
        fuelType: "cng",
        seatHeightMm: 785,
        kerbWeightKg: 149,
        fuelTankCapacityLiters: 2,
        brakes: "Disc (Front) / Drum (Rear) Sync Braking",
        topSpeedKmph: 90,
        maxPowerPs: "9.5 PS @ 8000 rpm",
        maxTorqueNm: "9.7 Nm @ 5000 rpm"
    }
];
function getAllVehicles() {
    return VEHICLES;
}
function getVehicleById(id) {
    const cleanId = id.trim().toLowerCase();
    return VEHICLES.find((vehicle)=>vehicle.id.toLowerCase() === cleanId) ?? null;
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
function getVehicleCategory(vehicle) {
    return vehicle.category ?? (vehicle.seatingCapacity === 2 ? "bike" : "car");
}
function isBike(vehicle) {
    return getVehicleCategory(vehicle) === "bike";
}
function isCar(vehicle) {
    return getVehicleCategory(vehicle) === "car";
}
function getVehicleCategoryType(vehicle) {
    return getVehicleCategory(vehicle);
}
function getComparableVehicles(category) {
    if (!category) return VEHICLES;
    return VEHICLES.filter((vehicle)=>getVehicleCategory(vehicle) === category);
}
function canCompare(vehicleA, vehicleB) {
    if (!vehicleA || !vehicleB) return false;
    if (vehicleA.id === vehicleB.id) return false;
    return getVehicleCategory(vehicleA) === getVehicleCategory(vehicleB);
}
function validateComparison(aId, bId) {
    if (!aId && !bId) {
        return {
            isValid: false,
            errorType: "empty",
            message: "Please select two cars or two bikes to compare."
        };
    }
    const vehicleA = aId ? getVehicleById(aId) : null;
    const vehicleB = bId ? getVehicleById(bId) : null;
    if (aId && !vehicleA) {
        return {
            isValid: false,
            errorType: "not_found",
            message: `Vehicle "${aId}" was not found. Please select a valid car or bike to compare.`,
            vehicleA: null,
            vehicleB
        };
    }
    if (bId && !vehicleB) {
        return {
            isValid: false,
            errorType: "not_found",
            message: `Vehicle "${bId}" was not found. Please select a valid car or bike to compare.`,
            vehicleA,
            vehicleB: null
        };
    }
    if (vehicleA && vehicleB) {
        if (vehicleA.id === vehicleB.id) {
            return {
                isValid: false,
                errorType: "same",
                message: `You selected the same vehicle twice (${vehicleLabel(vehicleA)}). Please select two different vehicles.`,
                vehicleA,
                vehicleB
            };
        }
        const categoryA = getVehicleCategory(vehicleA);
        const categoryB = getVehicleCategory(vehicleB);
        if (categoryA !== categoryB) {
            return {
                isValid: false,
                errorType: "mismatch",
                message: `You cannot compare a ${categoryA === "car" ? "Car" : "Bike"} (${vehicleLabel(vehicleA)}) with a ${categoryB === "car" ? "Car" : "Bike"} (${vehicleLabel(vehicleB)}). Please select two cars or two bikes.`,
                vehicleA,
                vehicleB
            };
        }
        return {
            isValid: true,
            category: categoryA,
            vehicleA,
            vehicleB
        };
    }
    return {
        isValid: false,
        errorType: "partial",
        message: "Please select a second vehicle of the same category to complete the comparison.",
        vehicleA,
        vehicleB
    };
}
function formatMileageOrRange(vehicle) {
    if (vehicle.rangeKm != null) return `${vehicle.rangeKm} km`;
    if (vehicle.mileageKmpl != null) return `${vehicle.mileageKmpl} kmpl`;
    return "Unavailable";
}
function formatSpecValue(value, suffix = "") {
    if (value == null || value === "") return "Unavailable";
    if (typeof value === "boolean") return value ? "Yes (होय)" : "No (नाही)";
    return `${value}${suffix}`;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0uzxecv._.js.map