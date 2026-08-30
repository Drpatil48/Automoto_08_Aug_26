(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/article/ArticleAudioPlayer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArticleAudioPlayer",
    ()=>ArticleAudioPlayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/normalize.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ArticleAudioPlayer({ title, body }) {
    _s();
    const [supported, setSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPaused, setIsPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rate, setRate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [utterance, setUtterance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ArticleAudioPlayer.useEffect": ()=>{
            if (("TURBOPACK compile-time value", "object") !== "undefined" && "speechSynthesis" in window) {
                setSupported(true);
                const updateUtterance = {
                    "ArticleAudioPlayer.useEffect.updateUtterance": ()=>{
                        const plainText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$normalize$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stripHtml"])(body);
                        const fullText = `${title}. ${plainText}`;
                        const msg = new SpeechSynthesisUtterance(fullText);
                        const voices = window.speechSynthesis.getVoices();
                        const marathiVoice = voices.find({
                            "ArticleAudioPlayer.useEffect.updateUtterance.marathiVoice": (v)=>v.lang.includes("mr") || v.lang.includes("IN")
                        }["ArticleAudioPlayer.useEffect.updateUtterance.marathiVoice"]);
                        if (marathiVoice) {
                            msg.voice = marathiVoice;
                        }
                        msg.rate = rate;
                        msg.onend = ({
                            "ArticleAudioPlayer.useEffect.updateUtterance": ()=>{
                                setIsPlaying(false);
                                setIsPaused(false);
                            }
                        })["ArticleAudioPlayer.useEffect.updateUtterance"];
                        msg.onerror = ({
                            "ArticleAudioPlayer.useEffect.updateUtterance": ()=>{
                                setIsPlaying(false);
                                setIsPaused(false);
                            }
                        })["ArticleAudioPlayer.useEffect.updateUtterance"];
                        setUtterance(msg);
                    }
                }["ArticleAudioPlayer.useEffect.updateUtterance"];
                updateUtterance();
                if (window.speechSynthesis.onvoiceschanged !== undefined) {
                    window.speechSynthesis.onvoiceschanged = updateUtterance;
                }
            }
            return ({
                "ArticleAudioPlayer.useEffect": ()=>{
                    if (("TURBOPACK compile-time value", "object") !== "undefined" && "speechSynthesis" in window) {
                        window.speechSynthesis.cancel();
                    }
                }
            })["ArticleAudioPlayer.useEffect"];
        }
    }["ArticleAudioPlayer.useEffect"], [
        title,
        body,
        rate
    ]);
    if (!supported) return null;
    function togglePlay() {
        if (!utterance) return;
        if (isPlaying && !isPaused) {
            window.speechSynthesis.pause();
            setIsPaused(true);
        } else if (isPaused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        } else {
            window.speechSynthesis.cancel();
            utterance.rate = rate;
            window.speechSynthesis.speak(utterance);
            setIsPlaying(true);
            setIsPaused(false);
        }
    }
    function handleRateChange(newRate) {
        setRate(newRate);
        if (utterance) {
            utterance.rate = newRate;
        }
        if (isPlaying && !isPaused) {
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        }
    }
    function stop() {
        window.speechSynthesis.cancel();
        setIsPlaying(false);
        setIsPaused(false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-label": "Listen to article",
        className: "my-6 rounded-2xl border border-indigo-900/60 bg-gradient-to-r from-indigo-950/80 via-zinc-900 to-zinc-950 p-4 sm:p-5 shadow-lg backdrop-blur-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex size-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-900/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-lg",
                                children: "🔊"
                            }, void 0, false, {
                                fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xs font-black uppercase tracking-wider text-indigo-300",
                                    children: "बातमी ऐका (LISTEN TO ARTICLE)"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-zinc-400",
                                    children: isPlaying ? isPaused ? "पॉज केले आहे (Paused)..." : "ऑडिओ वाचन सुरू आहे (Reading aloud)..." : "ऐकण्यासाठी प्ले दाबा (Press play to listen)"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: togglePlay,
                            className: "inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-red-950/40 transition-all hover:bg-red-500",
                            children: isPlaying && !isPaused ? "⏸ PAUSE" : isPaused ? "▶ RESUME" : "▶ LISTEN NOW"
                        }, void 0, false, {
                            fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        isPlaying || isPaused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: stop,
                            className: "inline-flex min-h-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-3 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:bg-zinc-800 hover:text-white",
                            children: "⏹ STOP"
                        }, void 0, false, {
                            fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-1 rounded-xl border border-zinc-800 bg-zinc-900/90 p-1",
                            children: [
                                1,
                                1.25,
                                1.5,
                                2
                            ].map((r)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>handleRateChange(r),
                                    className: `rounded-lg px-2 py-1 text-[10px] font-extrabold transition-colors ${rate === r ? "bg-indigo-600 text-white" : "text-zinc-400 hover:text-white"}`,
                                    children: [
                                        r,
                                        "x"
                                    ]
                                }, r, true, {
                                    fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
            lineNumber: 106,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/article/ArticleAudioPlayer.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(ArticleAudioPlayer, "G/B61YqN/QEMuWXd9Jxyx9O9hFc=");
_c = ArticleAudioPlayer;
var _c;
__turbopack_context__.k.register(_c, "ArticleAudioPlayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/article/FontResizer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FontResizer",
    ()=>FontResizer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FontResizer() {
    _s();
    const [size, setSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("base");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FontResizer.useEffect": ()=>{
            const saved = localStorage.getItem("article_font_size");
            if (saved && [
                "sm",
                "base",
                "lg",
                "xl"
            ].includes(saved)) {
                setSize(saved);
                applyFontSize(saved);
            }
        }
    }["FontResizer.useEffect"], []);
    function applyFontSize(newSize) {
        const el = document.querySelector(".article-body");
        if (!el) return;
        el.classList.remove("text-sm", "text-base", "text-lg", "text-xl", "text-[1.05rem]");
        switch(newSize){
            case "sm":
                el.classList.add("text-sm", "leading-6");
                break;
            case "base":
                el.classList.add("text-[1.05rem]", "leading-8");
                break;
            case "lg":
                el.classList.add("text-lg", "leading-8");
                break;
            case "xl":
                el.classList.add("text-xl", "leading-9");
                break;
        }
    }
    function handleSizeChange(newSize) {
        setSize(newSize);
        localStorage.setItem("article_font_size", newSize);
        applyFontSize(newSize);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-1.5 rounded-xl border border-zinc-800 bg-zinc-900/90 p-1",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "px-1 text-[10px] font-extrabold uppercase tracking-wider text-zinc-400",
                children: "FONT:"
            }, void 0, false, {
                fileName: "[project]/components/article/FontResizer.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>handleSizeChange("sm"),
                className: `rounded-lg px-2 py-0.5 text-xs font-black transition-colors ${size === "sm" ? "bg-red-600 text-white" : "text-zinc-400 hover:text-white"}`,
                "aria-label": "Small font size",
                children: "A-"
            }, void 0, false, {
                fileName: "[project]/components/article/FontResizer.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>handleSizeChange("base"),
                className: `rounded-lg px-2 py-0.5 text-xs font-black transition-colors ${size === "base" ? "bg-red-600 text-white" : "text-zinc-400 hover:text-white"}`,
                "aria-label": "Standard font size",
                children: "A"
            }, void 0, false, {
                fileName: "[project]/components/article/FontResizer.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>handleSizeChange("lg"),
                className: `rounded-lg px-2.5 py-0.5 text-sm font-black transition-colors ${size === "lg" || size === "xl" ? "bg-red-600 text-white" : "text-zinc-400 hover:text-white"}`,
                "aria-label": "Large font size",
                children: "A+"
            }, void 0, false, {
                fileName: "[project]/components/article/FontResizer.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/article/FontResizer.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_s(FontResizer, "PtP92HJOua1W1AK+OOmCmL0OyUA=");
_c = FontResizer;
var _c;
__turbopack_context__.k.register(_c, "FontResizer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/article/ReadingProgressBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadingProgressBar",
    ()=>ReadingProgressBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ReadingProgressBar() {
    _s();
    const [completion, setCompletion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReadingProgressBar.useEffect": ()=>{
            function updateScrollCompletion() {
                const currentProgress = window.scrollY;
                const scrollHeight = document.body.scrollHeight - window.innerHeight;
                if (scrollHeight > 0) {
                    setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
                }
            }
            window.addEventListener("scroll", updateScrollCompletion);
            return ({
                "ReadingProgressBar.useEffect": ()=>window.removeEventListener("scroll", updateScrollCompletion)
            })["ReadingProgressBar.useEffect"];
        }
    }["ReadingProgressBar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 top-0 z-50 h-1 bg-zinc-900",
        role: "progressbar",
        "aria-label": "Reading progress",
        "aria-valuenow": completion,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full bg-gradient-to-r from-red-600 via-amber-500 to-red-500 transition-all duration-150 ease-out",
            style: {
                width: `${completion}%`
            }
        }, void 0, false, {
            fileName: "[project]/components/article/ReadingProgressBar.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/article/ReadingProgressBar.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(ReadingProgressBar, "PwkU/RztghSusaYwjxG0R7WrSy8=");
_c = ReadingProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ReadingProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/article/StickyMobileShareBar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StickyMobileShareBar",
    ()=>StickyMobileShareBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function StickyMobileShareBar({ title, url }) {
    _s();
    const [copied, setCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const encodedTitle = encodeURIComponent(title);
    const encodedUrl = encodeURIComponent(url);
    const waHref = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
    const tgHref = `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;
    async function handleShare() {
        if (typeof navigator !== "undefined" && navigator.share) {
            try {
                await navigator.share({
                    title,
                    url
                });
            } catch  {}
        } else {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(()=>setCopied(false), 2000);
        }
    }
    const pill = "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide transition-transform active:scale-95 whitespace-nowrap";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-label": "Mobile article quick actions",
        className: "fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800/80 bg-zinc-950/96 backdrop-blur-sm shadow-xl md:hidden",
        style: {
            paddingBottom: "env(safe-area-inset-bottom, 0px)"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center gap-2 px-3 py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: waHref,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Share on WhatsApp",
                    className: `${pill} bg-[#25D366] text-white shadow-md shadow-emerald-950/40`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "15",
                            height: "15",
                            viewBox: "0 0 32 32",
                            fill: "white",
                            "aria-hidden": "true",
                            style: {
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.72 1.78 6.7L2 30l7.53-1.74A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.4 11.4 0 0 1-5.82-1.59l-.42-.25-4.33 1 1.02-4.2-.28-.44A11.43 11.43 0 0 1 4.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5z"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M22.2 19.1c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.2.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.74-1.8-1.02-2.47-.27-.65-.54-.56-.74-.57-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.42-.3.33-1.16 1.13-1.16 2.76s1.19 3.2 1.35 3.42c.17.22 2.34 3.58 5.68 5.02.79.34 1.41.55 1.89.7.79.25 1.52.22 2.09.13.64-.1 1.96-.8 2.24-1.58.28-.77.28-1.44.19-1.58-.08-.14-.3-.22-.63-.39z"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "WhatsApp"
                        }, void 0, false, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: tgHref,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    "aria-label": "Share on Telegram",
                    className: `${pill} bg-[#2AABEE] text-white shadow-md shadow-sky-950/40`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "15",
                            height: "15",
                            viewBox: "0 0 24 24",
                            fill: "white",
                            "aria-hidden": "true",
                            style: {
                                flexShrink: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                            }, void 0, false, {
                                fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                lineNumber: 52,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Telegram"
                        }, void 0, false, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 54,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: handleShare,
                    "aria-label": "Share or copy link",
                    className: `${pill} border border-zinc-700 bg-zinc-800 text-zinc-200`,
                    children: [
                        copied ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "#4ade80",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            "aria-hidden": "true",
                            style: {
                                flexShrink: 0
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                points: "20 6 9 17 4 12"
                            }, void 0, false, {
                                fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            "aria-hidden": "true",
                            style: {
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "18",
                                    cy: "5",
                                    r: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "6",
                                    cy: "12",
                                    r: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 45
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "18",
                                    cy: "19",
                                    r: "3"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 67,
                                    columnNumber: 75
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "8.59",
                                    y1: "13.51",
                                    x2: "15.42",
                                    y2: "17.49"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "15.41",
                                    y1: "6.51",
                                    x2: "8.59",
                                    y2: "10.49"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 68,
                                    columnNumber: 65
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 66,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: copied ? "Copied!" : "Share"
                        }, void 0, false, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/compare",
                    className: `${pill} border border-red-900/60 bg-red-950/80 text-red-400`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2.5",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            "aria-hidden": "true",
                            style: {
                                flexShrink: 0
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M18 20V10"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 20V4"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 78,
                                    columnNumber: 34
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6 20v-6"
                                }, void 0, false, {
                                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                                    lineNumber: 78,
                                    columnNumber: 54
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Compare"
                        }, void 0, false, {
                            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/article/StickyMobileShareBar.tsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/article/StickyMobileShareBar.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/article/StickyMobileShareBar.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(StickyMobileShareBar, "NE86rL3vg4NVcTTWDavsT0hUBJs=");
_c = StickyMobileShareBar;
var _c;
__turbopack_context__.k.register(_c, "StickyMobileShareBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/home/NewsletterFormClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NewsletterFormClient",
    ()=>NewsletterFormClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gtag.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function NewsletterFormClient() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [consent, setConsent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tone, setTone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("info");
    async function onSubmit(event) {
        event.preventDefault();
        const trimmed = email.trim();
        if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
            setTone("error");
            setMessage("Please enter a valid email address.");
            return;
        }
        if (!consent) {
            setTone("error");
            setMessage("Please accept the privacy notice to continue.");
            return;
        }
        setLoading(true);
        setMessage(null);
        try {
            const response = await fetch("/api/newsletter", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: trimmed,
                    consent
                })
            });
            const data = await response.json().catch(()=>null);
            if (response.ok && data?.success) {
                setTone("success");
                setMessage(data.message || "Thank you for subscribing!");
                setEmail("");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gtag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trackEvent"])({
                    action: "subscribe",
                    category: "newsletter",
                    label: trimmed
                });
            } else {
                setTone(data?.code === "NOT_CONFIGURED" ? "info" : "error");
                setMessage(data?.message || "Subscriptions are currently unconfigured or unavailable.");
            }
        } catch  {
            setTone("error");
            setMessage("A network error occurred. Please try again later.");
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: onSubmit,
        className: "max-w-2xl rounded-2xl border border-zinc-800/90 bg-zinc-900/80 p-5 sm:p-8 shadow-xl",
        "aria-label": "Newsletter signup",
        noValidate: true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-3 sm:flex-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "sr-only",
                        htmlFor: "newsletter-email",
                        children: "Email address"
                    }, void 0, false, {
                        fileName: "[project]/components/home/NewsletterFormClient.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "newsletter-email",
                        name: "email",
                        type: "email",
                        required: true,
                        autoComplete: "email",
                        disabled: loading,
                        value: email,
                        onChange: (event)=>setEmail(event.target.value),
                        placeholder: "Enter your email address",
                        className: "min-h-12 w-full flex-1 rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-sm text-zinc-100 placeholder-zinc-500 focus:border-red-600 focus:outline-none disabled:opacity-60"
                    }, void 0, false, {
                        fileName: "[project]/components/home/NewsletterFormClient.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "inline-flex min-h-12 items-center justify-center rounded-xl bg-red-600 px-6 text-sm font-bold text-white transition-all hover:bg-red-500 hover:shadow-lg hover:shadow-red-950/40 disabled:opacity-60 shrink-0",
                        children: loading ? "Subscribing..." : "Subscribe Now"
                    }, void 0, false, {
                        fileName: "[project]/components/home/NewsletterFormClient.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/NewsletterFormClient.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "mt-4 flex items-start gap-3 text-xs leading-relaxed text-zinc-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        name: "consent",
                        disabled: loading,
                        checked: consent,
                        onChange: (event)=>setConsent(event.target.checked),
                        className: "mt-0.5 size-4 rounded border-zinc-800 bg-zinc-950 text-red-600 focus:ring-red-600",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/components/home/NewsletterFormClient.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            "I agree to receive daily email updates and understand I can unsubscribe anytime. Read our",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/privacy-policy",
                                className: "font-medium text-zinc-200 underline underline-offset-4 hover:text-white",
                                children: "Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/components/home/NewsletterFormClient.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/home/NewsletterFormClient.tsx",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/home/NewsletterFormClient.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            message ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `mt-4 text-xs ${tone === "error" ? "text-red-400 font-semibold" : tone === "success" ? "text-emerald-400 font-medium" : "text-zinc-300"}`,
                role: "status",
                children: message
            }, void 0, false, {
                fileName: "[project]/components/home/NewsletterFormClient.tsx",
                lineNumber: 120,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/home/NewsletterFormClient.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
_s(NewsletterFormClient, "NwTCXdANKTBHkpGzFBTQsNC1JpU=");
_c = NewsletterFormClient;
var _c;
__turbopack_context__.k.register(_c, "NewsletterFormClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/category-style.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/types.ts [app-client] (ecmascript)");
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
        href: overrides?.href ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["categoryHref"])(slug),
        tone: overrides?.tone ?? fallback?.tone ?? toneForCategorySlug(slug),
        id: overrides?.id,
        count: overrides?.count
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/normalize.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/category-style.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/constants.ts [app-client] (ecmascript)");
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
    const mailto = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONTACT_EMAIL"]}`;
    const notice = '<aside class="cms-form-notice" role="note">' + "<p>The WordPress contact form plugin does not work on this headless front-end. " + `Please email us at <a href="${mailto}">${__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE_CONTACT_EMAIL"]}</a> — we monitor that inbox.</p>` + "</aside>";
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(slug, {
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
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$category$2d$style$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildCategoryMeta"])(slug);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "articleHref",
    ()=>articleHref,
    "categoryHref",
    ()=>categoryHref
]);
function articleHref(article) {
    return `/${article.category}/${article.slug}`;
}
function categoryHref(slug) {
    return `/${slug}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_1be7_vy._.js.map