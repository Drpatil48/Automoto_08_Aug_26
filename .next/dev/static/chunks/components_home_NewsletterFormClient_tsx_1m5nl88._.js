(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
]);

//# sourceMappingURL=components_home_NewsletterFormClient_tsx_1m5nl88._.js.map