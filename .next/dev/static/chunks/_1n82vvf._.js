(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ads/AdSenseIns.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdSenseIns",
    ()=>AdSenseIns
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function AdSenseIns({ clientId, slotId, size, minHeight }) {
    _s();
    const pushed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AdSenseIns.useEffect": ()=>{
            if (pushed.current) return;
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                pushed.current = true;
            } catch  {
            // Ad blockers / script failures must not break the page.
            }
        }
    }["AdSenseIns.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ins", {
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
_s(AdSenseIns, "GZuJL4RXmfcu0YS6tz2VXf4dZI4=");
_c = AdSenseIns;
var _c;
__turbopack_context__.k.register(_c, "AdSenseIns");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/analytics/GoogleAnalyticsScript.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GoogleAnalyticsScript",
    ()=>GoogleAnalyticsScript
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gtag.ts [app-client] (ecmascript)");
"use client";
;
;
;
function GoogleAnalyticsScript() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isGaEnabled"])() || !__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GA_TRACKING_ID"]) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                strategy: "afterInteractive",
                src: `https://www.googletagmanager.com/gtag/js?id=${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GA_TRACKING_ID"]}`
            }, void 0, false, {
                fileName: "[project]/components/analytics/GoogleAnalyticsScript.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "gtag-init",
                strategy: "afterInteractive",
                dangerouslySetInnerHTML: {
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GA_TRACKING_ID"]}', {
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
_c = GoogleAnalyticsScript;
var _c;
__turbopack_context__.k.register(_c, "GoogleAnalyticsScript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compare/CompareTray.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompareTray",
    ()=>CompareTray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/CompareTrayProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function CompareTray() {
    _s();
    const { selectedVehicles, trayCategory, errorMessage, removeVehicle, clear, clearError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompareTray"])();
    if (selectedVehicles.length === 0 && !errorMessage) return null;
    const href = selectedVehicles.length === 2 ? `/compare?a=${selectedVehicles[0].id}&b=${selectedVehicles[1].id}` : `/compare?a=${selectedVehicles[0]?.id ?? ""}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 bottom-0 z-50 border-t border-zinc-800 bg-zinc-950/95 text-zinc-100 backdrop-blur-md shadow-2xl",
        role: "region",
        "aria-label": "Compare tray",
        "data-compare-tray": true,
        children: [
            errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-950 border-b border-red-800 px-4 py-2 text-center text-xs font-bold text-red-200 flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "⚠️ ",
                            errorMessage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/CompareTray.tsx",
                        lineNumber: 28,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            selectedVehicles.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-1 flex-wrap items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-extrabold uppercase tracking-wider text-red-500 flex items-center gap-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: trayCategory === "bike" ? "🏍️ Bike Compare" : "🚗 Car Compare"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/CompareTray.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                            selectedVehicles.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-3 py-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative h-7 w-11 overflow-hidden rounded-md bg-zinc-800",
                                            children: vehicle.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "max-w-[9rem] truncate text-xs font-bold text-white",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle)
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/CompareTray.tsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>removeVehicle(vehicle.id),
                                            className: "flex size-6 items-center justify-center rounded-full text-xs font-bold text-zinc-400 hover:bg-zinc-800 hover:text-white",
                                            "aria-label": `Remove ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle)} from compare`,
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: clear,
                                className: "inline-flex min-h-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-xs font-bold uppercase tracking-wider text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",
                                children: "Clear"
                            }, void 0, false, {
                                fileName: "[project]/components/compare/CompareTray.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(CompareTray, "ASz+nf+/EhQdCBNFOfEAFr4y9Zk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompareTray"]
    ];
});
_c = CompareTray;
var _c;
__turbopack_context__.k.register(_c, "CompareTray");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compare/CompareTrayProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompareTrayProvider",
    ()=>CompareTrayProvider,
    "useCompareTray",
    ()=>useCompareTray
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const STORAGE_KEY = "automotonews.compareTray";
const MAX_COMPARE = 2;
const EMPTY_IDS = [];
const CompareTrayContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function readStoredIds() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed.filter((item)=>typeof item === "string").slice(0, MAX_COMPARE);
    } catch  {
        return [];
    }
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
    _s();
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const selectedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getClientIds, {
        "CompareTrayProvider.useSyncExternalStore[selectedIds]": ()=>EMPTY_IDS
    }["CompareTrayProvider.useSyncExternalStore[selectedIds]"]);
    const selectedVehicles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareTrayProvider.useMemo[selectedVehicles]": ()=>selectedIds.map({
                "CompareTrayProvider.useMemo[selectedVehicles]": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleById"])(id)
            }["CompareTrayProvider.useMemo[selectedVehicles]"]).filter({
                "CompareTrayProvider.useMemo[selectedVehicles]": (vehicle)=>vehicle != null
            }["CompareTrayProvider.useMemo[selectedVehicles]"])
    }["CompareTrayProvider.useMemo[selectedVehicles]"], [
        selectedIds
    ]);
    const trayCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareTrayProvider.useMemo[trayCategory]": ()=>{
            if (selectedVehicles.length === 0) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategory"])(selectedVehicles[0]);
        }
    }["CompareTrayProvider.useMemo[trayCategory]"], [
        selectedVehicles
    ]);
    const clearError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CompareTrayProvider.useCallback[clearError]": ()=>setErrorMessage(null)
    }["CompareTrayProvider.useCallback[clearError]"], []);
    const addVehicle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CompareTrayProvider.useCallback[addVehicle]": (id)=>{
            const newVehicle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleById"])(id);
            if (!newVehicle) {
                return {
                    success: false,
                    message: "Vehicle not found."
                };
            }
            const newCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategory"])(newVehicle);
            // Validate category matching against existing tray items
            const currentVehicles = getClientIds().map({
                "CompareTrayProvider.useCallback[addVehicle].currentVehicles": (item)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleById"])(item)
            }["CompareTrayProvider.useCallback[addVehicle].currentVehicles"]).filter({
                "CompareTrayProvider.useCallback[addVehicle].currentVehicles": (v)=>v != null
            }["CompareTrayProvider.useCallback[addVehicle].currentVehicles"]);
            if (currentVehicles.length > 0) {
                const existingCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategory"])(currentVehicles[0]);
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
            setStoredIds({
                "CompareTrayProvider.useCallback[addVehicle]": (current)=>{
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
                }
            }["CompareTrayProvider.useCallback[addVehicle]"]);
            return {
                success: true
            };
        }
    }["CompareTrayProvider.useCallback[addVehicle]"], []);
    const removeVehicle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CompareTrayProvider.useCallback[removeVehicle]": (id)=>{
            setErrorMessage(null);
            setStoredIds({
                "CompareTrayProvider.useCallback[removeVehicle]": (current)=>current.filter({
                        "CompareTrayProvider.useCallback[removeVehicle]": (item)=>item !== id
                    }["CompareTrayProvider.useCallback[removeVehicle]"])
            }["CompareTrayProvider.useCallback[removeVehicle]"]);
        }
    }["CompareTrayProvider.useCallback[removeVehicle]"], []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CompareTrayProvider.useCallback[clear]": ()=>{
            setErrorMessage(null);
            setStoredIds([]);
        }
    }["CompareTrayProvider.useCallback[clear]"], []);
    const isSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CompareTrayProvider.useCallback[isSelected]": (id)=>selectedIds.includes(id)
    }["CompareTrayProvider.useCallback[isSelected]"], [
        selectedIds
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareTrayProvider.useMemo[value]": ()=>({
                selectedIds,
                selectedVehicles,
                trayCategory,
                errorMessage,
                addVehicle,
                removeVehicle,
                clear,
                isSelected,
                clearError
            })
    }["CompareTrayProvider.useMemo[value]"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompareTrayContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/compare/CompareTrayProvider.tsx",
        lineNumber: 188,
        columnNumber: 5
    }, this);
}
_s(CompareTrayProvider, "DYVaW8F5ubkb1Ci28JdwhtXSWkg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"]
    ];
});
_c = CompareTrayProvider;
function useCompareTray() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CompareTrayContext);
    if (!context) {
        throw new Error("useCompareTray must be used within CompareTrayProvider");
    }
    return context;
}
_s1(useCompareTray, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CompareTrayProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/layout/MobileNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SocialIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/SocialIcons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function MobileNav() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const panelId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileNav.useEffect": ()=>{
            setMounted(true);
        }
    }["MobileNav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MobileNav.useEffect": ()=>{
            if (!open) return;
            const onKeyDown = {
                "MobileNav.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") setOpen(false);
                }
            }["MobileNav.useEffect.onKeyDown"];
            document.addEventListener("keydown", onKeyDown);
            document.body.style.overflow = "hidden";
            return ({
                "MobileNav.useEffect": ()=>{
                    document.removeEventListener("keydown", onKeyDown);
                    document.body.style.overflow = "";
                }
            })["MobileNav.useEffect"];
        }
    }["MobileNav.useEffect"], [
        open
    ]);
    function handleSearchSubmit(event) {
        event.preventDefault();
        if (!searchQuery.trim()) return;
        setOpen(false);
        router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
    const drawerContent = open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: panelId,
        className: "fixed inset-0 z-[9999] flex flex-col justify-between overflow-y-auto bg-zinc-950 p-6 text-white shadow-2xl animate-in fade-in duration-200",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": "Mobile Navigation Drawer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-lg mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pb-6 border-b border-zinc-800/80",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex size-8 items-center justify-center rounded-lg bg-red-600 font-black text-white text-sm shadow-md",
                                        children: "A"
                                    }, void 0, false, {
                                        fileName: "[project]/components/layout/MobileNav.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-base font-extrabold tracking-tight text-white",
                                        children: [
                                            "AUTOMOTO",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-red-600",
                                                children: "NEWS"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MobileNav.tsx",
                                                lineNumber: 65,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-zinc-400 font-normal ml-0.5",
                                                children: ".in"
                                            }, void 0, false, {
                                                fileName: "[project]/components/layout/MobileNav.tsx",
                                                lineNumber: 66,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/layout/MobileNav.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen(false),
                                className: "flex size-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white",
                                "aria-label": "Close menu",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSearchSubmit,
                        className: "my-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "search",
                                    value: searchQuery,
                                    onChange: (e)=>setSearchQuery(e.target.value),
                                    placeholder: "Search ... (शोध घ्या)",
                                    className: "w-full rounded-2xl border border-zinc-800 bg-zinc-900 px-5 py-3.5 pr-12 text-sm font-semibold text-white placeholder-zinc-500 focus:border-red-600 focus:bg-zinc-900 focus:outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    "aria-label": "Search",
                                    className: "absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white",
                                    children: "🔍"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Mobile Menu Categories",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-col divide-y divide-zinc-800/60",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PRIMARY_NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "block py-3.5 text-base font-black uppercase tracking-wider text-zinc-100 transition-colors hover:text-red-500",
                                            onClick: ()=>setOpen(false),
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/MobileNav.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    }, item.href, false, {
                                        fileName: "[project]/components/layout/MobileNav.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-6 flex flex-wrap gap-2 pt-6 border-t border-zinc-800/80",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UTILITY_NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: item.href,
                                            className: "inline-block rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:border-red-600 hover:text-white",
                                            onClick: ()=>setOpen(false),
                                            children: item.label
                                        }, void 0, false, {
                                            fileName: "[project]/components/layout/MobileNav.tsx",
                                            lineNumber: 118,
                                            columnNumber: 17
                                        }, this)
                                    }, item.href, false, {
                                        fileName: "[project]/components/layout/MobileNav.tsx",
                                        lineNumber: 117,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/MobileNav.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-lg mx-auto pt-6 mt-6 border-t border-zinc-800/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-bold uppercase tracking-widest text-zinc-500 mb-4 text-center",
                        children: "Follow Us"
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.facebook.com/automotonews.in",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Facebook",
                                className: "flex size-11 items-center justify-center rounded-2xl bg-[#1877F2] text-white shadow-lg shadow-blue-900/40 hover:bg-[#0d6fd8] transition-colors active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SocialIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FacebookIcon"], {
                                    className: "size-5 fill-current"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://x.com/automotonews",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "X (Twitter)",
                                className: "flex size-11 items-center justify-center rounded-2xl bg-zinc-800 border border-zinc-700 text-white shadow-lg hover:bg-zinc-700 transition-colors active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SocialIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XIcon"], {
                                    className: "size-5 fill-current"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 144,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.youtube.com/@automotonews",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "YouTube",
                                className: "flex size-11 items-center justify-center rounded-2xl bg-[#FF0000] text-white shadow-lg shadow-red-900/40 hover:bg-[#cc0000] transition-colors active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SocialIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YouTubeIcon"], {
                                    className: "size-5 fill-current"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.instagram.com/automotonews.in",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "Instagram",
                                className: "flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] text-white shadow-lg shadow-pink-900/40 hover:opacity-90 transition-opacity active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$SocialIcons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramIcon"], {
                                    className: "size-5 fill-current"
                                }, void 0, false, {
                                    fileName: "[project]/components/layout/MobileNav.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/layout/MobileNav.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/layout/MobileNav.tsx",
                lineNumber: 132,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/MobileNav.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "md:hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "inline-flex size-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/80 text-zinc-200 transition-colors hover:border-red-600/50 hover:text-white",
                "aria-expanded": open,
                "aria-controls": panelId,
                "aria-label": open ? "Close menu" : "Open menu",
                onClick: ()=>setOpen((value)=>!value),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    className: "flex flex-col gap-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-4 bg-current transition-transform duration-300 ${open ? "translate-y-1.5 rotate-45" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 187,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-4 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-4 bg-current transition-transform duration-300 ${open ? "-translate-y-1.5 -rotate-45" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/layout/MobileNav.tsx",
                    lineNumber: 186,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/layout/MobileNav.tsx",
                lineNumber: 178,
                columnNumber: 7
            }, this),
            mounted && open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(drawerContent, document.body) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/layout/MobileNav.tsx",
        lineNumber: 177,
        columnNumber: 5
    }, this);
}
_s(MobileNav, "ypu3SIonCZsgZeG73C1O+T2CM3E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/SocialIcons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FacebookIcon",
    ()=>FacebookIcon,
    "InstagramIcon",
    ()=>InstagramIcon,
    "TelegramIcon",
    ()=>TelegramIcon,
    "WhatsAppIcon",
    ()=>WhatsAppIcon,
    "XIcon",
    ()=>XIcon,
    "YouTubeIcon",
    ()=>YouTubeIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function WhatsAppIcon({ className = "size-5" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
        }, void 0, false, {
            fileName: "[project]/components/ui/SocialIcons.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/SocialIcons.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = WhatsAppIcon;
function TelegramIcon({ className = "size-5" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
        }, void 0, false, {
            fileName: "[project]/components/ui/SocialIcons.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/SocialIcons.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_c1 = TelegramIcon;
function FacebookIcon({ className = "size-5" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        }, void 0, false, {
            fileName: "[project]/components/ui/SocialIcons.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/SocialIcons.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c2 = FacebookIcon;
function XIcon({ className = "size-5" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        }, void 0, false, {
            fileName: "[project]/components/ui/SocialIcons.tsx",
            lineNumber: 58,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/SocialIcons.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c3 = XIcon;
function YouTubeIcon({ className = "size-5" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
        }, void 0, false, {
            fileName: "[project]/components/ui/SocialIcons.tsx",
            lineNumber: 73,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/SocialIcons.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_c4 = YouTubeIcon;
function InstagramIcon({ className = "size-5" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        className: className,
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
        }, void 0, false, {
            fileName: "[project]/components/ui/SocialIcons.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/SocialIcons.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_c5 = InstagramIcon;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "WhatsAppIcon");
__turbopack_context__.k.register(_c1, "TelegramIcon");
__turbopack_context__.k.register(_c2, "FacebookIcon");
__turbopack_context__.k.register(_c3, "XIcon");
__turbopack_context__.k.register(_c4, "YouTubeIcon");
__turbopack_context__.k.register(_c5, "InstagramIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gtag.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GA_TRACKING_ID",
    ()=>GA_TRACKING_ID,
    "isGaEnabled",
    ()=>isGaEnabled,
    "trackEvent",
    ()=>trackEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const GA_TRACKING_ID = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GA_ID;
function isGaEnabled() {
    return typeof GA_TRACKING_ID === "string" && /^G-[A-Z0-9]+$/i.test(GA_TRACKING_ID);
}
function trackEvent({ action, category, label, value }) {
    if (("TURBOPACK compile-time value", "object") === "undefined" || typeof window.gtag !== "function") {
        return;
    }
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/vehicles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1n82vvf._.js.map