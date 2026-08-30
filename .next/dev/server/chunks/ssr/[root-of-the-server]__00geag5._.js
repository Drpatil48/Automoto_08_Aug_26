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
    const { selectedVehicles, removeVehicle, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompareTray"])();
    if (selectedVehicles.length === 0) return null;
    const href = selectedVehicles.length === 2 ? `/compare?a=${selectedVehicles[0].id}&b=${selectedVehicles[1].id}` : `/compare?a=${selectedVehicles[0].id}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 bottom-[4.5rem] z-50 border-t border-border bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/90 md:bottom-0",
        role: "region",
        "aria-label": "Compare tray",
        "data-compare-tray": true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 flex-wrap items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold",
                            children: [
                                "Compare (",
                                selectedVehicles.length,
                                "/2)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compare/CompareTray.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        selectedVehicles.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 rounded-md border border-border bg-background px-2 py-1.5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-8 w-12 overflow-hidden rounded bg-muted/20",
                                        children: vehicle.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: vehicle.images[0],
                                            alt: "",
                                            fill: true,
                                            className: "object-cover",
                                            sizes: "48px"
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/CompareTray.tsx",
                                            lineNumber: 35,
                                            columnNumber: 19
                                        }, this) : null
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/CompareTray.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "max-w-[9rem] truncate text-sm font-medium",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle)
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/CompareTray.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>removeVehicle(vehicle.id),
                                        className: "min-h-8 min-w-8 rounded text-sm text-muted hover:bg-background hover:text-foreground",
                                        "aria-label": `Remove ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle)} from compare`,
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/CompareTray.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, vehicle.id, true, {
                                fileName: "[project]/components/compare/CompareTray.tsx",
                                lineNumber: 29,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compare/CompareTray.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: clear,
                            className: "inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 text-sm font-medium hover:bg-background",
                            children: "Clear"
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTray.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: href,
                            className: "inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-4 text-sm font-semibold text-white hover:bg-accent-dark",
                            children: selectedVehicles.length === 2 ? "Compare now" : "Open compare"
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTray.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compare/CompareTray.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/compare/CompareTray.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/compare/CompareTray.tsx",
        lineNumber: 19,
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
    const selectedIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(subscribe, getClientIds, ()=>EMPTY_IDS);
    const addVehicle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
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
    }, []);
    const removeVehicle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        setStoredIds((current)=>current.filter((item)=>item !== id));
    }, []);
    const clear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>setStoredIds([]), []);
    const isSelected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>selectedIds.includes(id), [
        selectedIds
    ]);
    const selectedVehicles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>selectedIds.map((id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleById"])(id)).filter((vehicle)=>vehicle != null), [
        selectedIds
    ]);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            selectedIds,
            selectedVehicles,
            addVehicle,
            removeVehicle,
            clear,
            isSelected
        }), [
        selectedIds,
        selectedVehicles,
        addVehicle,
        removeVehicle,
        clear,
        isSelected
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CompareTrayContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/compare/CompareTrayProvider.tsx",
        lineNumber: 128,
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
                className: "inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/20 text-header-text",
                "aria-expanded": open,
                "aria-controls": panelId,
                "aria-label": open ? "Close menu" : "Open menu",
                onClick: ()=>setOpen((value)=>!value),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    "aria-hidden": "true",
                    className: "flex flex-col gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-5 bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`
                        }, void 0, false, {
                            fileName: "[project]/components/layout/MobileNav.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `block h-0.5 w-5 bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`
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
                        className: "fixed inset-0 z-30 bg-black/40 md:hidden",
                        "aria-label": "Close menu",
                        onClick: ()=>setOpen(false)
                    }, void 0, false, {
                        fileName: "[project]/components/layout/MobileNav.tsx",
                        lineNumber: 52,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        id: panelId,
                        className: "absolute inset-x-0 top-full z-40 border-b border-border bg-surface shadow-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "aria-label": "Mobile",
                            className: "px-4 py-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col gap-1",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PRIMARY_NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "block min-h-11 rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-background",
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
                                    className: "mt-3 flex flex-col gap-1 border-t border-border pt-3",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UTILITY_NAV"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "block min-h-11 rounded-md px-3 py-3 text-base font-medium text-muted hover:bg-background hover:text-foreground",
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
        label: "Electric Vehicles (EVs)",
        href: "/electric-vehicles-evs"
    },
    {
        label: "Daily Update",
        href: "/daily-update"
    },
    {
        label: "Car News",
        href: "/car-news"
    },
    {
        label: "Sports Bikes",
        href: "/sportsbikes"
    },
    {
        label: "Upcoming Cars",
        href: "/upcoming-cars"
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
"[project]/lib/vehicles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__00geag5._.js.map