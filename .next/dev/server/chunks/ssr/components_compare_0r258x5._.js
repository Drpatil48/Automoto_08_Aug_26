module.exports = [
"[project]/components/compare/AddToCompareButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AddToCompareButton",
    ()=>AddToCompareButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/CompareTrayProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function AddToCompareButton({ vehicleId }) {
    const { addVehicle, removeVehicle, isSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompareTray"])();
    const selected = isSelected(vehicleId);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: ()=>selected ? removeVehicle(vehicleId) : addVehicle(vehicleId),
        className: "inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border text-sm font-medium hover:bg-background",
        children: selected ? "Remove from tray" : "Add to compare tray"
    }, void 0, false, {
        fileName: "[project]/components/compare/AddToCompareButton.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/compare/CompareTool.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompareTool",
    ()=>CompareTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$SpecComparisonTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/SpecComparisonTable.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/VehicleCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/VehicleSelector.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/CompareTrayProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
function CompareTool({ vehicles, initialA = "", initialB = "", compact = false }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { addVehicle, removeVehicle, isSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCompareTray"])();
    const [modelA, setModelA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialA);
    const [modelB, setModelB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(initialB);
    const [syncedInitials, setSyncedInitials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        a: initialA,
        b: initialB
    });
    if (initialA !== syncedInitials.a || initialB !== syncedInitials.b) {
        setSyncedInitials({
            a: initialA,
            b: initialB
        });
        setModelA(initialA);
        setModelB(initialB);
    }
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const a = vehicles.find((item)=>item.id === modelA) ?? null;
        const b = vehicles.find((item)=>item.id === modelB) ?? null;
        return {
            a,
            b
        };
    }, [
        modelA,
        modelB,
        vehicles
    ]);
    // Determine active category mode ("car" | "bike" | null)
    const activeCategoryMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (selected.a) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(selected.a);
        if (selected.b) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(selected.b);
        return null;
    }, [
        selected.a,
        selected.b
    ]);
    const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateComparison"])(modelA, modelB), [
        modelA,
        modelB
    ]);
    // Filter vehicles for Selector A
    const vehiclesForA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let list = vehicles;
        if (activeCategoryMode) {
            list = list.filter((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(v) === activeCategoryMode);
        }
        return list;
    }, [
        activeCategoryMode,
        vehicles
    ]);
    // Filter vehicles for Selector B
    const vehiclesForB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let list = vehicles;
        if (activeCategoryMode) {
            list = list.filter((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(v) === activeCategoryMode);
        }
        return list;
    }, [
        activeCategoryMode,
        vehicles
    ]);
    function handleSelectA(id) {
        setModelA(id);
        if (id) {
            const newA = vehicles.find((v)=>v.id === id);
            if (newA && selected.b && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(newA) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(selected.b)) {
                setModelB("");
            }
        }
    }
    function handleSelectB(id) {
        setModelB(id);
        if (id) {
            const newB = vehicles.find((v)=>v.id === id);
            if (newB && selected.a && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(newB) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(selected.a)) {
                setModelA("");
            }
        }
    }
    function handleSetMode(mode) {
        // If current selections don't match target mode, reset them
        if (selected.a && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(selected.a) !== mode) {
            setModelA("");
        }
        if (selected.b && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(selected.b) !== mode) {
            setModelB("");
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (compact || pathname !== "/compare") return;
        const params = new URLSearchParams(searchParams.toString());
        if (modelA) params.set("a", modelA);
        else params.delete("a");
        if (modelB) params.set("b", modelB);
        else params.delete("b");
        const next = params.toString();
        const current = searchParams.toString();
        if (next !== current) {
            router.replace(next ? `${pathname}?${next}` : pathname, {
                scroll: false
            });
        }
    }, [
        compact,
        modelA,
        modelB,
        pathname,
        router,
        searchParams
    ]);
    function toggleTray(id) {
        if (isSelected(id)) removeVehicle(id);
        else addVehicle(id);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-5 sm:p-7 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSetMode("car"),
                                className: `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition-all ${activeCategoryMode === "car" || !activeCategoryMode && true ? "bg-red-600 text-white shadow-md shadow-red-950/40" : "border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"}`,
                                children: "🚗 Compare Cars"
                            }, void 0, false, {
                                fileName: "[project]/components/compare/CompareTool.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>handleSetMode("bike"),
                                className: `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-black uppercase tracking-wider transition-all ${activeCategoryMode === "bike" ? "bg-amber-600 text-white shadow-md shadow-amber-950/40" : "border border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"}`,
                                children: "🏍️ Compare Bikes"
                            }, void 0, false, {
                                fileName: "[project]/components/compare/CompareTool.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/CompareTool.tsx",
                        lineNumber: 138,
                        columnNumber: 9
                    }, this),
                    activeCategoryMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs font-bold text-zinc-400",
                        children: [
                            "Comparing: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "text-white uppercase",
                                children: activeCategoryMode === "bike" ? "Bikes & Scooters" : "Cars & SUVs"
                            }, void 0, false, {
                                fileName: "[project]/components/compare/CompareTool.tsx",
                                lineNumber: 164,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/CompareTool.tsx",
                        lineNumber: 163,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/CompareTool.tsx",
                lineNumber: 137,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VehicleSelector"], {
                        id: compact ? "preview-model-a" : "compare-model-a",
                        label: activeCategoryMode ? `Vehicle A (${activeCategoryMode === "bike" ? "बाईक निवडा" : "कार निवडा"})` : "Vehicle A (पहिलं वाहन)",
                        vehicles: vehiclesForA,
                        value: modelA,
                        excludeId: modelB || undefined,
                        category: activeCategoryMode || undefined,
                        onChange: handleSelectA
                    }, void 0, false, {
                        fileName: "[project]/components/compare/CompareTool.tsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden pb-3 text-center text-xs font-black uppercase tracking-widest text-zinc-500 md:block",
                        children: "VS"
                    }, void 0, false, {
                        fileName: "[project]/components/compare/CompareTool.tsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleSelector$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VehicleSelector"], {
                        id: compact ? "preview-model-b" : "compare-model-b",
                        label: activeCategoryMode ? `Vehicle B (${activeCategoryMode === "bike" ? "बाईक निवडा" : "कार निवडा"})` : "Vehicle B (दुसरं वाहन)",
                        vehicles: vehiclesForB,
                        value: modelB,
                        excludeId: modelA || undefined,
                        category: activeCategoryMode || undefined,
                        onChange: handleSelectB
                    }, void 0, false, {
                        fileName: "[project]/components/compare/CompareTool.tsx",
                        lineNumber: 186,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/CompareTool.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                role: "region",
                "aria-live": "polite",
                "aria-label": "Comparison results",
                children: !validation.isValid && validation.errorType === "mismatch" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-red-800 bg-red-950/40 p-6 text-center shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-red-900/60 text-xl text-red-400",
                            children: "⚠️"
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 210,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-base font-extrabold uppercase tracking-wide text-white",
                            children: "Category Mismatch"
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-xs sm:text-sm font-medium text-red-200",
                            children: validation.message
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 flex flex-wrap justify-center gap-3",
                            children: [
                                selected.a ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModelB(""),
                                    className: "rounded-xl border border-red-700 bg-red-900/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-800",
                                    children: [
                                        "Clear Vehicle B & Keep ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(selected.a)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 221,
                                    columnNumber: 17
                                }, this) : null,
                                selected.b ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setModelA(""),
                                    className: "rounded-xl border border-red-700 bg-red-900/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-red-800",
                                    children: [
                                        "Clear Vehicle A & Keep ",
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(selected.b)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setModelA("");
                                        setModelB("");
                                    },
                                    className: "rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white",
                                    children: "Reset Both"
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 238,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compare/CompareTool.tsx",
                    lineNumber: 209,
                    columnNumber: 11
                }, this) : !selected.a && !selected.b ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-center text-xs font-medium text-zinc-400",
                    children: "तुलना करण्यासाठी दोन वाहने निवडा (Select two cars or two bikes to compare price, mileage/range, and key specs)."
                }, void 0, false, {
                    fileName: "[project]/components/compare/CompareTool.tsx",
                    lineNumber: 251,
                    columnNumber: 11
                }, this) : !validation.isValid ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rounded-xl border border-amber-900/40 bg-amber-950/20 p-4 text-center text-xs font-semibold text-amber-300",
                            children: validation.message
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 256,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 md:grid-cols-2",
                            children: [
                                selected.a ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VehicleCard"], {
                                    vehicle: selected.a,
                                    action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleTray(selected.a.id),
                                        className: "inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white",
                                        children: isSelected(selected.a.id) ? "Remove from compare tray" : "Add to compare tray"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/CompareTool.tsx",
                                        lineNumber: 264,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 261,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-xs text-zinc-400",
                                    children: "Choose Vehicle A above."
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 276,
                                    columnNumber: 17
                                }, this),
                                selected.b ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VehicleCard"], {
                                    vehicle: selected.b,
                                    action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>toggleTray(selected.b.id),
                                        className: "inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white",
                                        children: isSelected(selected.b.id) ? "Remove from compare tray" : "Add to compare tray"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/CompareTool.tsx",
                                        lineNumber: 284,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-xs text-zinc-400",
                                    children: [
                                        "Choose a second ",
                                        activeCategoryMode === "bike" ? "bike" : "car",
                                        " to complete the comparison."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 296,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 259,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compare/CompareTool.tsx",
                    lineNumber: 255,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$SpecComparisonTable$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SpecComparisonTable"], {
                            vehicleA: selected.a,
                            vehicleB: selected.b,
                            category: validation.category
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 304,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        addVehicle(selected.a.id);
                                        addVehicle(selected.b.id);
                                    },
                                    className: "inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-5 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white",
                                    children: "Save both to compare tray"
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 310,
                                    columnNumber: 15
                                }, this),
                                compact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/compare?a=${selected.a.id}&b=${selected.b.id}`,
                                    className: "inline-flex min-h-11 items-center justify-center rounded-xl bg-red-600 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 transition-all hover:bg-red-500 hover:shadow-red-900/60",
                                    children: "Open full compare →"
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 321,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 309,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compare/CompareTool.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/compare/CompareTool.tsx",
                lineNumber: 201,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compare/CompareTool.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/compare/SpecComparisonTable.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpecComparisonTable",
    ()=>SpecComparisonTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-ssr] (ecmascript)");
;
;
;
function Unavailable() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-zinc-500 italic text-xs",
        children: "N/A"
    }, void 0, false, {
        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SpecCell({ value }) {
    if (value === "Unavailable") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Unavailable, {}, void 0, false, {
        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
        lineNumber: 28,
        columnNumber: 39
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-semibold text-zinc-100",
        children: value
    }, void 0, false, {
        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
function SpecComparisonTable({ vehicleA, vehicleB, category: propCategory }) {
    const activeCategory = propCategory ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getVehicleCategory"])(vehicleA);
    const isBike = activeCategory === "bike";
    const carRows = [
        {
            label: "Price Range (किंमत)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.priceRangeINR),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.priceRangeINR)
        },
        {
            label: "Engine / Battery (इंजिन / बॅटरी)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.engineOrBattery),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.engineOrBattery)
        },
        {
            label: "Mileage / Range (मायलेज / रेंज)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMileageOrRange"])(vehicleA),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMileageOrRange"])(vehicleB)
        },
        {
            label: "Fuel Type (इंधन प्रकार)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.fuelType ? vehicleA.fuelType.toUpperCase() : null),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.fuelType ? vehicleB.fuelType.toUpperCase() : null)
        },
        {
            label: "Seating Capacity (सीटिंग क्षमता)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.seatingCapacity, " Seats"),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.seatingCapacity, " Seats")
        },
        {
            label: "Boot Space (बूट स्पेस)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.bootSpaceLiters, " Liters"),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.bootSpaceLiters, " Liters")
        },
        {
            label: "Ground Clearance (ग्राउंड क्लिअरन्स)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.groundClearanceMm, " mm"),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.groundClearanceMm, " mm")
        },
        {
            label: "Airbags Safety (एअरबॅग्स)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.airbagsCount, " Airbags"),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.airbagsCount, " Airbags")
        },
        {
            label: "ABS & ESP Safety (सुरक्षा वैशिष्ट्ये)",
            valueA: vehicleA.hasABS ? "ABS + ESP" : "Standard",
            valueB: vehicleB.hasABS ? "ABS + ESP" : "Standard"
        },
        {
            label: "Dimensions L x W x H (आकारमान)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.dimensionsMm),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.dimensionsMm)
        }
    ];
    const bikeRows = [
        {
            label: "Price Range (किंमत)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.priceRangeINR),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.priceRangeINR)
        },
        {
            label: "Engine / Powertrain (इंजिन क्षमता)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.engineOrBattery),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.engineOrBattery)
        },
        {
            label: "Max Power (जास्तीत जास्त पॉवर)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.maxPowerPs),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.maxPowerPs)
        },
        {
            label: "Max Torque (टॉर्क)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.maxTorqueNm),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.maxTorqueNm)
        },
        {
            label: "Mileage / Range (मायलेज / रेंज)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMileageOrRange"])(vehicleA),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatMileageOrRange"])(vehicleB)
        },
        {
            label: "Fuel Type (इंधन प्रकार)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.fuelType ? vehicleA.fuelType.toUpperCase() : null),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.fuelType ? vehicleB.fuelType.toUpperCase() : null)
        },
        {
            label: "Kerb Weight (वजन)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.kerbWeightKg, " kg"),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.kerbWeightKg, " kg")
        },
        {
            label: "Fuel Tank Capacity (फ्युएल टँक)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.fuelTankCapacityLiters, " L"),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.fuelTankCapacityLiters, " L")
        },
        {
            label: "Seat Height (सीटची उंची)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.seatHeightMm, " mm"),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.seatHeightMm, " mm")
        },
        {
            label: "Brakes System (ब्रेकिंग सिस्टम)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.brakes),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.brakes)
        },
        {
            label: "Top Speed (टॉप स्पीड)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.topSpeedKmph, " km/h"),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.topSpeedKmph, " km/h")
        }
    ];
    const rows = isBike ? bikeRows : carRows;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/80 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-zinc-800/80 bg-zinc-950 px-5 py-3 text-xs font-black uppercase tracking-wider text-zinc-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "Specification Comparison (",
                            isBike ? "🏍️ Bike vs Bike" : "🚗 Car vs Car",
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-[11px] font-bold text-red-400",
                        children: isBike ? "Motorcycle / Scooter Specs" : "Automobile Specs"
                    }, void 0, false, {
                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 border-b border-zinc-800/80 bg-zinc-950/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 text-xs font-black uppercase tracking-wider text-zinc-400",
                        children: "Model Details"
                    }, void 0, false, {
                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    [
                        vehicleA,
                        vehicleB
                    ].map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l border-zinc-800/80 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-3 aspect-[16/10] overflow-hidden rounded-xl bg-zinc-800",
                                    children: vehicle.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: vehicle.images[0],
                                        alt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleFullLabel"])(vehicle),
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 40vw, 280px"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 168,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-center justify-center text-xs text-zinc-500",
                                        children: "No image"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 176,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-black uppercase tracking-widest text-red-500",
                                    children: vehicle.brand
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                    lineNumber: 181,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm font-bold text-white sm:text-base",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle)
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                    lineNumber: 184,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-400",
                                    children: vehicle.variant
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, vehicle.id, true, {
                            fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                            lineNumber: 165,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full table-fixed text-left text-xs sm:text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                        className: "sr-only",
                        children: [
                            "Side-by-side specification comparison for ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicleA),
                            " and",
                            " ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicleB)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-zinc-800/60 last:border-b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "row",
                                        className: "bg-zinc-950/40 p-4 align-top text-xs font-bold uppercase tracking-wider text-zinc-400",
                                        children: row.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 200,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-l border-zinc-800/60 p-4 align-top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecCell, {
                                            value: row.valueA
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                            lineNumber: 207,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 206,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-l border-zinc-800/60 p-4 align-top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecCell, {
                                            value: row.valueB
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 209,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, row.label, true, {
                                fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                lineNumber: 199,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                lineNumber: 192,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/compare/VehicleCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VehicleCard",
    ()=>VehicleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-ssr] (ecmascript)");
;
;
;
function VehicleCard({ vehicle, action }) {
    const image = vehicle.images[0] ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/80 shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/10] bg-zinc-800",
                children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleFullLabel"])(vehicle),
                    fill: true,
                    className: "object-cover",
                    sizes: "(max-width: 768px) 100vw, 50vw"
                }, void 0, false, {
                    fileName: "[project]/components/compare/VehicleCard.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full items-center justify-center text-xs text-zinc-500",
                    children: "No image"
                }, void 0, false, {
                    fileName: "[project]/components/compare/VehicleCard.tsx",
                    lineNumber: 26,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/compare/VehicleCard.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-black uppercase tracking-widest text-red-500",
                        children: vehicle.brand
                    }, void 0, false, {
                        fileName: "[project]/components/compare/VehicleCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-1 text-lg font-bold text-white",
                        children: [
                            vehicle.model,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs font-normal text-zinc-400",
                                children: vehicle.variant
                            }, void 0, false, {
                                fileName: "[project]/components/compare/VehicleCard.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/VehicleCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs font-medium text-zinc-400",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicle.fuelType)
                    }, void 0, false, {
                        fileName: "[project]/components/compare/VehicleCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    action ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4",
                        children: action
                    }, void 0, false, {
                        fileName: "[project]/components/compare/VehicleCard.tsx",
                        lineNumber: 42,
                        columnNumber: 19
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/VehicleCard.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compare/VehicleCard.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/compare/VehicleSelector.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VehicleSelector",
    ()=>VehicleSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-ssr] (ecmascript)");
"use client";
;
;
function VehicleSelector({ id, label, vehicles, value, excludeId, category, onChange }) {
    const filtered = excludeId ? vehicles.filter((vehicle)=>vehicle.id !== excludeId) : vehicles;
    const cars = filtered.filter((v)=>!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBike"])(v));
    const bikes = filtered.filter((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBike"])(v));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: id,
                className: "mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-300",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/compare/VehicleSelector.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                id: id,
                value: value,
                onChange: (event)=>onChange(event.target.value),
                className: "min-h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm font-semibold text-white focus:border-red-600 focus:outline-none cursor-pointer",
                "aria-label": label,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        className: "bg-zinc-900 text-zinc-400",
                        children: category === "bike" ? "Select a bike..." : category === "car" ? "Select a car..." : "Select a vehicle..."
                    }, void 0, false, {
                        fileName: "[project]/components/compare/VehicleSelector.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    (!category || category === "car") && cars.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                        label: "🚗 Cars / 4-Wheelers",
                        className: "bg-zinc-900 text-red-500 font-bold",
                        children: cars.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: vehicle.id,
                                className: "bg-zinc-900 text-white font-normal",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle),
                                    " ",
                                    vehicle.variant ? `(${vehicle.variant})` : ""
                                ]
                            }, vehicle.id, true, {
                                fileName: "[project]/components/compare/VehicleSelector.tsx",
                                lineNumber: 55,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/compare/VehicleSelector.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this) : null,
                    (!category || category === "bike") && bikes.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("optgroup", {
                        label: "🏍️ Bikes & Scooters",
                        className: "bg-zinc-900 text-amber-500 font-bold",
                        children: bikes.map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                value: vehicle.id,
                                className: "bg-zinc-900 text-white font-normal",
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle),
                                    " ",
                                    vehicle.variant ? `(${vehicle.variant})` : ""
                                ]
                            }, vehicle.id, true, {
                                fileName: "[project]/components/compare/VehicleSelector.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/compare/VehicleSelector.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/VehicleSelector.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compare/VehicleSelector.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=components_compare_0r258x5._.js.map