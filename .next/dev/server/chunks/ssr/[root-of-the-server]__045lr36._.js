module.exports = [
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
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

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
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/components/ads/AdSenseIns.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdSenseIns",
    ()=>AdSenseIns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function AdSenseIns({ clientId, slotId, size, minHeight }) {
    const pushed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (pushed.current) return;
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
            pushed.current = true;
        } catch  {
        // Ad blockers / script failures must not break the page.
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ins", {
        className: "adsbygoogle",
        style: {
            display: "block",
            minHeight
        },
        "data-ad-client": clientId,
        "data-ad-slot": slotId,
        "data-ad-format": size === "banner" ? "horizontal" : "auto",
        "data-full-width-responsive": "true"
    }, void 0, false, {
        fileName: "[project]/components/ads/AdSenseIns.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/analytics/GoogleAnalyticsScript.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleAnalyticsScript",
    ()=>GoogleAnalyticsScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gtag.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function GoogleAnalyticsScript() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isGaEnabled"])() || !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GA_TRACKING_ID"]) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GA_TRACKING_ID"]}`
            }, void 0, false, {
                fileName: "[project]/components/analytics/GoogleAnalyticsScript.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                id: "gtag-init",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GA_TRACKING_ID"]}', {
              page_path: window.location.pathname,
            });
          `
                }
            }, void 0, false, {
                fileName: "[project]/components/analytics/GoogleAnalyticsScript.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/analytics/GoogleAnalyticsScript.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/compare/CompareTray.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompareTray",
    ()=>CompareTray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/CompareTrayProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function CompareTray() {
    const { selectedVehicles, trayCategory, errorMessage, removeVehicle, clear, clearError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompareTray"])();
    if (selectedVehicles.length === 0 && !errorMessage) return null;
    const href = selectedVehicles.length === 2 ? `/compare?a=${selectedVehicles[0].id}&b=${selectedVehicles[1].id}` : `/compare?a=${selectedVehicles[0]?.id ?? ""}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950/95 text-zinc-100 backdrop-blur-md shadow-2xl",
        role: "region",
        "aria-label": "Compare tray",
        "data-compare-tray": true,
        children: [
            errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-950 border-b border-red-800 px-4 py-2 text-center text-xs font-bold text-red-200 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "⚠️ ",
                            errorMessage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/CompareTray.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: clearError,
                        className: "ml-2 rounded bg-red-900/60 px-2 py-0.5 text-xs text-white hover:bg-red-800",
                        children: "Dismiss"
                    }, void 0, false, {
                        fileName: "[project]/components/compare/CompareTray.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/CompareTray.tsx",
                lineNumber: 27,
                columnNumber: 9
            }, this) : null,
            selectedVehicles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-extrabold uppercase tracking-wider text-red-500 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: trayCategory === "bike" ? "🏍️ Bike Compare" : "🚗 Car Compare"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/CompareTray.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-zinc-400 font-normal",
                                        children: [
                                            "(",
                                            selectedVehicles.length,
                                            "/2)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/compare/CompareTray.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/compare/CompareTray.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            selectedVehicles.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-7 w-11 overflow-hidden rounded-md bg-zinc-800",
                                            children: vehicle.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: vehicle.images[0],
                                                alt: "",
                                                fill: true,
                                                className: "object-cover",
                                                sizes: "44px"
                                            }, void 0, false, {
                                                fileName: "[project]/components/compare/CompareTray.tsx",
                                                lineNumber: 53,
                                                columnNumber: 21
                                            }, this) : null
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/CompareTray.tsx",
                                            lineNumber: 51,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "max-w-[9rem] truncate text-xs font-bold text-white",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle)
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/CompareTray.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>removeVehicle(vehicle.id),
                                            className: "flex size-6 items-center justify-center rounded-full text-xs font-bold text-zinc-400 hover:bg-zinc-800 hover:text-white",
                                            "aria-label": `Remove ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle)} from compare`,
                                            children: "✕"
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/CompareTray.tsx",
                                            lineNumber: 65,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, vehicle.id, true, {
                                    fileName: "[project]/components/compare/CompareTray.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/CompareTray.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clear,
                                className: "inline-flex min-h-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/components/compare/CompareTray.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: href,
                                className: "inline-flex min-h-10 items-center justify-center rounded-xl bg-red-600 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 transition-all hover:bg-red-500 hover:shadow-red-900/60",
                                children: selectedVehicles.length === 2 ? "Compare Now →" : "Open Compare"
                            }, void 0, false, {
                                fileName: "[project]/components/compare/CompareTray.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/CompareTray.tsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/CompareTray.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/compare/CompareTray.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/compare/CompareTrayProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompareTrayProvider",
    ()=>CompareTrayProvider,
    "useCompareTray",
    ()=>useCompareTray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const STORAGE_KEY = "automotonews.compareTray";
const MAX_COMPARE = 2;
const EMPTY_IDS = [];
const CompareTrayContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
function readStoredIds() {
    if ("TURBOPACK compile-time truthy", 1) return [];
    //TURBOPACK unreachable
    ;
}
let memoryIds = null;
const listeners = new Set();
function getClientIds() {
    if (memoryIds == null) {
        memoryIds = readStoredIds();
    }
    return memoryIds;
}
function subscribe(listener) {
    listeners.add(listener);
    return ()=>{
        listeners.delete(listener);
    };
}
function setStoredIds(next) {
    const current = getClientIds();
    const resolved = typeof next === "function" ? next(current) : next;
    if (resolved.length === current.length && resolved.every((id, index)=>id === current[index])) {
        return;
    }
    memoryIds = resolved;
    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(resolved));
    } catch  {
    // Ignore quota / private mode failures.
    }
    listeners.forEach((listener)=>listener());
}
function CompareTrayProvider({ children }) {
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getClientIds, ()=>EMPTY_IDS);
    const selectedVehicles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedIds.map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleById"])(id)).filter((vehicle)=>vehicle != null), [
        selectedIds
    ]);
    const trayCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selectedVehicles.length === 0) return null;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(selectedVehicles[0]);
    }, [
        selectedVehicles
    ]);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setErrorMessage(null), []);
    const addVehicle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const newVehicle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleById"])(id);
        if (!newVehicle) {
            return {
                success: false,
                message: "Vehicle not found."
            };
        }
        const newCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(newVehicle);
        // Validate category matching against existing tray items
        const currentVehicles = getClientIds().map((item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleById"])(item)).filter((v)=>v != null);
        if (currentVehicles.length > 0) {
            const existingCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(currentVehicles[0]);
            if (newCategory !== existingCategory) {
                const msg = `You can't compare a ${newCategory === "car" ? "Car" : "Bike"} with a ${existingCategory === "car" ? "Car" : "Bike"}. Clear tray to compare ${newCategory === "car" ? "Cars" : "Bikes"}.`;
                setErrorMessage(msg);
                return {
                    success: false,
                    message: msg
                };
            }
        }
        setErrorMessage(null);
        setStoredIds((current)=>{
            if (current.includes(id)) return current;
            if (current.length >= MAX_COMPARE) {
                return [
                    current[1] ?? current[0],
                    id
                ].filter(Boolean);
            }
            return [
                ...current,
                id
            ];
        });
        return {
            success: true
        };
    }, []);
    const removeVehicle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setErrorMessage(null);
        setStoredIds((current)=>current.filter((item)=>item !== id));
    }, []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setErrorMessage(null);
        setStoredIds([]);
    }, []);
    const isSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>selectedIds.includes(id), [
        selectedIds
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectedIds,
            selectedVehicles,
            trayCategory,
            errorMessage,
            addVehicle,
            removeVehicle,
            clear,
            isSelected,
            clearError
        }), [
        selectedIds,
        selectedVehicles,
        trayCategory,
        errorMessage,
        addVehicle,
        removeVehicle,
        clear,
        isSelected,
        clearError
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompareTrayContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/compare/CompareTrayProvider.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
function useCompareTray() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CompareTrayContext);
    if (!context) {
        throw new Error("useCompareTray must be used within CompareTrayProvider");
    }
    return context;
}
}),
"[project]/components/layout/MobileNav.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MobileNav() {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const panelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!open) return;
        const onKeyDown = (event)=>{
            if (event.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        document.body.style.overflow = "hidden";
        return ()=>{
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = "";
        };
    }, [
        open
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "inline-flex size-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-200 transition-colors hover:border-red-600/50 hover:text-white",
                "aria-expanded": open,
                "aria-controls": panelId,
                "aria-label": open ? "Close menu" : "Open menu",
                onClick: ()=>setOpen((value)=>!value),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-4 bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-4 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-4 bg-current transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/MobileNav.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/MobileNav.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden",
                        "aria-label": "Close menu",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: panelId,
                        className: "absolute inset-x-0 top-full z-50 border-b border-zinc-800 bg-zinc-950/95 p-4 shadow-2xl backdrop-blur-md",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Mobile",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col gap-1",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMARY_NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "block rounded-lg px-4 py-3 text-sm font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:bg-zinc-900 hover:text-red-400",
                                                onClick: ()=>setOpen(false),
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MobileNav.tsx",
                                                lineNumber: 66,
                                                columnNumber: 21
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/components/layout/MobileNav.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 63,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 flex flex-col gap-1 border-t border-zinc-800/80 pt-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UTILITY_NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "block rounded-lg px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-400 hover:bg-zinc-900 hover:text-white",
                                                onClick: ()=>setOpen(false),
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MobileNav.tsx",
                                                lineNumber: 79,
                                                columnNumber: 21
                                            }, this)
                                        }, item.href, false, {
                                            fileName: "[project]/components/layout/MobileNav.tsx",
                                            lineNumber: 78,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/MobileNav.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/MobileNav.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FOOTER_NAV",
    ()=>FOOTER_NAV,
    "PRIMARY_NAV",
    ()=>PRIMARY_NAV,
    "SITE_CONTACT_EMAIL",
    ()=>SITE_CONTACT_EMAIL,
    "SITE_DESCRIPTION",
    ()=>SITE_DESCRIPTION,
    "SITE_NAME",
    ()=>SITE_NAME,
    "SITE_TAGLINE",
    ()=>SITE_TAGLINE,
    "SOCIAL_LINKS",
    ()=>SOCIAL_LINKS,
    "UTILITY_NAV",
    ()=>UTILITY_NAV
]);
const SITE_NAME = "AutomotoNews.in";
const SITE_TAGLINE = "मराठी ऑटो न्यूज — EV, कार आणि बाईक अपडेट्स";
const SITE_DESCRIPTION = "Maharashtra and India automotive news: electric vehicles, car launches, bike reviews, and buying guides in Marathi.";
const SITE_CONTACT_EMAIL = "contact@automotonews.in";
const PRIMARY_NAV = [
    {
        label: "मुख्यपृष्ठ",
        href: "/"
    },
    {
        label: "EV Spotlight",
        href: "/electric-vehicles-evs"
    },
    {
        label: "Car News",
        href: "/car-news"
    },
    {
        label: "Bikes & Performance",
        href: "/sportsbikes"
    },
    {
        label: "Upcoming Cars",
        href: "/upcoming-cars"
    },
    {
        label: "Guides & Tech",
        href: "/auto-technology"
    },
    {
        label: "Compare Tool",
        href: "/compare"
    }
];
const FOOTER_NAV = [
    {
        label: "About Us",
        href: "/about-us"
    },
    {
        label: "Privacy Policy",
        href: "/privacy-policy"
    },
    {
        label: "Disclaimer",
        href: "/disclaimer"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
const UTILITY_NAV = [
    {
        label: "Compare",
        href: "/compare"
    },
    {
        label: "Search",
        href: "/search"
    }
];
const SOCIAL_LINKS = [];
}),
"[project]/lib/gtag.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GA_TRACKING_ID",
    ()=>GA_TRACKING_ID,
    "isGaEnabled",
    ()=>isGaEnabled,
    "trackEvent",
    ()=>trackEvent
]);
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
function isGaEnabled() {
    return typeof GA_TRACKING_ID === "string" && /^G-[A-Z0-9]+$/i.test(GA_TRACKING_ID);
}
function trackEvent({ action, category, label, value }) {
    if ("TURBOPACK compile-time truthy", 1) {
        return;
    }
    //TURBOPACK unreachable
    ;
}
}),
"[project]/lib/vehicles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__045lr36._.js.map