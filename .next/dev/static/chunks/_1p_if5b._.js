(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/compare/CompareTool.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompareTool",
    ()=>CompareTool
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$SpecComparisonTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/SpecComparisonTable.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/VehicleCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/compare/CompareTrayProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function CompareTool({ vehicles, initialA = "", initialB = "", compact = false }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const { addVehicle, removeVehicle, isSelected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompareTray"])();
    const [modelA, setModelA] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialA);
    const [modelB, setModelB] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialB);
    const [syncedInitials, setSyncedInitials] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const selected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareTool.useMemo[selected]": ()=>{
            const a = vehicles.find({
                "CompareTool.useMemo[selected]": (item)=>item.id === modelA
            }["CompareTool.useMemo[selected]"]) ?? null;
            const b = vehicles.find({
                "CompareTool.useMemo[selected]": (item)=>item.id === modelB
            }["CompareTool.useMemo[selected]"]) ?? null;
            return {
                a,
                b
            };
        }
    }["CompareTool.useMemo[selected]"], [
        modelA,
        modelB,
        vehicles
    ]);
    // Filter vehicles for Selector A (same category as B if B is selected)
    const vehiclesForA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareTool.useMemo[vehiclesForA]": ()=>{
            let list = vehicles;
            if (selected.b) {
                const typeB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(selected.b);
                list = list.filter({
                    "CompareTool.useMemo[vehiclesForA]": (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(v) === typeB
                }["CompareTool.useMemo[vehiclesForA]"]);
            }
            return list;
        }
    }["CompareTool.useMemo[vehiclesForA]"], [
        selected.b,
        vehicles
    ]);
    // Filter vehicles for Selector B (same category as A if A is selected)
    const vehiclesForB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CompareTool.useMemo[vehiclesForB]": ()=>{
            let list = vehicles;
            if (selected.a) {
                const typeA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(selected.a);
                list = list.filter({
                    "CompareTool.useMemo[vehiclesForB]": (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(v) === typeA
                }["CompareTool.useMemo[vehiclesForB]"]);
            }
            return list;
        }
    }["CompareTool.useMemo[vehiclesForB]"], [
        selected.a,
        vehicles
    ]);
    const canCompare = selected.a != null && selected.b != null && selected.a.id !== selected.b.id;
    function handleSelectA(id) {
        setModelA(id);
        if (id) {
            const newA = vehicles.find((v)=>v.id === id);
            if (newA && selected.b && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(newA) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(selected.b)) {
                setModelB("");
            }
        }
    }
    function handleSelectB(id) {
        setModelB(id);
        if (id) {
            const newB = vehicles.find((v)=>v.id === id);
            if (newB && selected.a && (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(newB) !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(selected.a)) {
                setModelA("");
            }
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompareTool.useEffect": ()=>{
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
        }
    }["CompareTool.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-2xl border border-zinc-800/80 bg-zinc-950/80 p-5 sm:p-7 shadow-xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VehicleSelector, {
                        id: compact ? "preview-model-a" : "compare-model-a",
                        label: selected.b ? `Vehicle A (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(selected.b) === "bike" ? "बाईक निवडा" : "कार निवडा"})` : "Vehicle A (पहिलं वाहन)",
                        vehicles: vehiclesForA,
                        value: modelA,
                        excludeId: modelB || undefined,
                        onChange: handleSelectA
                    }, void 0, false, {
                        fileName: "[project]/components/compare/CompareTool.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden pb-3 text-center text-xs font-black uppercase tracking-widest text-zinc-500 md:block",
                        children: "VS"
                    }, void 0, false, {
                        fileName: "[project]/components/compare/CompareTool.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VehicleSelector, {
                        id: compact ? "preview-model-b" : "compare-model-b",
                        label: selected.a ? `Vehicle B (${(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVehicleCategoryType"])(selected.a) === "bike" ? "बाईक निवडा" : "कार निवडा"})` : "Vehicle B (दुसरं वाहन)",
                        vehicles: vehiclesForB,
                        value: modelB,
                        excludeId: modelA || undefined,
                        onChange: handleSelectB
                    }, void 0, false, {
                        fileName: "[project]/components/compare/CompareTool.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/CompareTool.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                role: "region",
                "aria-live": "polite",
                "aria-label": "Comparison results",
                children: !selected.a && !selected.b ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-center text-xs font-medium text-zinc-400",
                    children: "तुलना करण्यासाठी दोन वाहने निवडा (Select two vehicles to compare price, mileage/range, and key specs)."
                }, void 0, false, {
                    fileName: "[project]/components/compare/CompareTool.tsx",
                    lineNumber: 150,
                    columnNumber: 11
                }, this) : !canCompare ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 md:grid-cols-2",
                    children: [
                        selected.a ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VehicleCard"], {
                            vehicle: selected.a,
                            action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleTray(selected.a.id),
                                className: "inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white",
                                children: isSelected(selected.a.id) ? "Remove from compare tray" : "Add to compare tray"
                            }, void 0, false, {
                                fileName: "[project]/components/compare/CompareTool.tsx",
                                lineNumber: 159,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 156,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-xs text-zinc-400",
                            children: "Choose Vehicle A above."
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 171,
                            columnNumber: 15
                        }, this),
                        selected.b ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$VehicleCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VehicleCard"], {
                            vehicle: selected.b,
                            action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>toggleTray(selected.b.id),
                                className: "inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white",
                                children: isSelected(selected.b.id) ? "Remove from compare tray" : "Add to compare tray"
                            }, void 0, false, {
                                fileName: "[project]/components/compare/CompareTool.tsx",
                                lineNumber: 179,
                                columnNumber: 19
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 176,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "rounded-xl border border-dashed border-zinc-800 bg-zinc-900/40 p-6 text-xs text-zinc-400",
                            children: "Choose a second, different vehicle to complete the comparison."
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 191,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compare/CompareTool.tsx",
                    lineNumber: 154,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$SpecComparisonTable$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpecComparisonTable"], {
                            vehicleA: selected.a,
                            vehicleB: selected.b
                        }, void 0, false, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 198,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3 sm:flex-row",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        addVehicle(selected.a.id);
                                        addVehicle(selected.b.id);
                                    },
                                    className: "inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-5 text-xs font-bold uppercase tracking-wider text-zinc-200 transition-colors hover:border-red-600/50 hover:bg-zinc-800 hover:text-white",
                                    children: "Save both to compare tray"
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 200,
                                    columnNumber: 15
                                }, this),
                                compact ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/compare?a=${selected.a.id}&b=${selected.b.id}`,
                                    className: "inline-flex min-h-11 items-center justify-center rounded-xl bg-red-600 px-5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-red-950/40 transition-all hover:bg-red-500 hover:shadow-red-900/60",
                                    children: "Open full compare →"
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/CompareTool.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/compare/CompareTool.tsx",
                            lineNumber: 199,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/compare/CompareTool.tsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/compare/CompareTool.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compare/CompareTool.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
_s(CompareTool, "bXK41jxuTEjXxrkr6uM1GxMDHzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$compare$2f$CompareTrayProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCompareTray"]
    ];
});
_c = CompareTool;
var _c;
__turbopack_context__.k.register(_c, "CompareTool");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compare/CompareTool.tsx [app-client] (ecmascript, next/dynamic entry)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/components/compare/CompareTool.tsx [app-client] (ecmascript)"));
}),
"[project]/components/compare/SpecComparisonTable.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SpecComparisonTable",
    ()=>SpecComparisonTable
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-client] (ecmascript)");
;
;
;
function Unavailable() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-zinc-500 italic text-xs",
        children: "N/A"
    }, void 0, false, {
        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c = Unavailable;
function SpecCell({ value }) {
    if (value === "Unavailable") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Unavailable, {}, void 0, false, {
        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
        lineNumber: 26,
        columnNumber: 39
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "font-semibold text-zinc-100",
        children: value
    }, void 0, false, {
        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_c1 = SpecCell;
function SpecComparisonTable({ vehicleA, vehicleB }) {
    const rows = [
        {
            label: "Price (किंमत)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.priceRangeINR),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.priceRangeINR)
        },
        {
            label: "Mileage / Range (मायलेज / रेंज)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMileageOrRange"])(vehicleA),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatMileageOrRange"])(vehicleB)
        },
        {
            label: "Engine / Battery (इंजिन / बॅटरी)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.engineOrBattery),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.engineOrBattery)
        },
        {
            label: "Seating (सीटिंग क्षमता)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.seatingCapacity),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.seatingCapacity)
        },
        {
            label: "Fuel type (इंधन प्रकार)",
            valueA: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleA.fuelType),
            valueB: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicleB.fuelType)
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/80 shadow-2xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-3 border-b border-zinc-800/80 bg-zinc-950/80",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 text-xs font-black uppercase tracking-wider text-zinc-400",
                        children: "Specification"
                    }, void 0, false, {
                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    [
                        vehicleA,
                        vehicleB
                    ].map((vehicle)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border-l border-zinc-800/80 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative mb-3 aspect-[16/10] overflow-hidden rounded-xl bg-zinc-800",
                                    children: vehicle.images[0] ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: vehicle.images[0],
                                        alt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicleFullLabel"])(vehicle),
                                        fill: true,
                                        className: "object-cover",
                                        sizes: "(max-width: 768px) 40vw, 280px"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 70,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-full items-center justify-center text-xs text-zinc-500",
                                        children: "No image"
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                    lineNumber: 68,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] font-black uppercase tracking-widest text-red-500",
                                    children: vehicle.brand
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-sm font-bold text-white sm:text-base",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicle)
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-zinc-400",
                                    children: vehicle.variant
                                }, void 0, false, {
                                    fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, vehicle.id, true, {
                            fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                className: "w-full table-fixed text-left text-xs sm:text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
                        className: "sr-only",
                        children: [
                            "Side-by-side specification comparison for ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicleA),
                            " and",
                            " ",
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicleLabel"])(vehicleB)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                        children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                className: "border-b border-zinc-800/60 last:border-b-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        scope: "row",
                                        className: "bg-zinc-950/40 p-4 align-top text-xs font-bold uppercase tracking-wider text-zinc-400",
                                        children: row.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-l border-zinc-800/60 p-4 align-top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecCell, {
                                            value: row.valueA
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                            lineNumber: 109,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                        className: "border-l border-zinc-800/60 p-4 align-top",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SpecCell, {
                                            value: row.valueB
                                        }, void 0, false, {
                                            fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, row.label, true, {
                                fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/compare/SpecComparisonTable.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/compare/SpecComparisonTable.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
}
_c2 = SpecComparisonTable;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Unavailable");
__turbopack_context__.k.register(_c1, "SpecCell");
__turbopack_context__.k.register(_c2, "SpecComparisonTable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/compare/VehicleCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VehicleCard",
    ()=>VehicleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/vehicles.ts [app-client] (ecmascript)");
;
;
;
function VehicleCard({ vehicle, action }) {
    const image = vehicle.images[0] ?? null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/80 shadow-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-[16/10] bg-zinc-800",
                children: image ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: image,
                    alt: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["vehicleFullLabel"])(vehicle),
                    fill: true,
                    className: "object-cover",
                    sizes: "(max-width: 768px) 100vw, 50vw"
                }, void 0, false, {
                    fileName: "[project]/components/compare/VehicleCard.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-black uppercase tracking-widest text-red-500",
                        children: vehicle.brand
                    }, void 0, false, {
                        fileName: "[project]/components/compare/VehicleCard.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "mt-1 text-lg font-bold text-white",
                        children: [
                            vehicle.model,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 text-xs font-medium text-zinc-400",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$vehicles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSpecValue"])(vehicle.fuelType)
                    }, void 0, false, {
                        fileName: "[project]/components/compare/VehicleCard.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    action ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = VehicleCard;
var _c;
__turbopack_context__.k.register(_c, "VehicleCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1p_if5b._.js.map