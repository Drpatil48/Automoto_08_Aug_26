module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

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
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/newsletter/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$newsletter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/newsletter.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const body = await request.json().catch(()=>null);
        if (!body || typeof body.email !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                code: "INVALID_EMAIL",
                message: "Email address is required."
            }, {
                status: 400
            });
        }
        if (!body.consent) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                code: "CONSENT_REQUIRED",
                message: "Please accept the privacy policy to subscribe."
            }, {
                status: 400
            });
        }
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$newsletter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["subscribeToNewsletter"])(body.email);
        const statusCode = result.success ? 200 : result.code === "NOT_CONFIGURED" ? 503 : 400;
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(result, {
            status: statusCode
        });
    } catch (error) {
        console.error("API /api/newsletter error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            code: "ERROR",
            message: "An internal server error occurred."
        }, {
            status: 500
        });
    }
}
}),
"[project]/lib/newsletter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "subscribeToNewsletter",
    ()=>subscribeToNewsletter
]);
async function subscribeToNewsletter(email) {
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
        return {
            success: false,
            code: "INVALID_EMAIL",
            message: "Please enter a valid email address."
        };
    }
    const provider = process.env.NEWSLETTER_PROVIDER?.toLowerCase().trim();
    const apiKey = process.env.NEWSLETTER_API_KEY?.trim();
    const listId = process.env.NEWSLETTER_LIST_ID?.trim();
    const webhookUrl = process.env.NEWSLETTER_WEBHOOK_URL?.trim();
    if (!provider) {
        return {
            success: false,
            code: "NOT_CONFIGURED",
            message: "Newsletter subscriptions are not enabled yet. An email service provider (such as Brevo or Mailchimp) must be configured in system settings."
        };
    }
    try {
        if (provider === "brevo") {
            if (!apiKey) {
                return {
                    success: false,
                    code: "NOT_CONFIGURED",
                    message: "Brevo API key is missing from environment settings."
                };
            }
            const listIds = listId ? [
                parseInt(listId, 10)
            ] : [
                1
            ];
            const res = await fetch("https://api.brevo.com/v3/contacts", {
                method: "POST",
                headers: {
                    "api-key": apiKey,
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify({
                    email: trimmedEmail,
                    listIds,
                    updateEnabled: true
                })
            });
            if (res.ok) {
                return {
                    success: true,
                    code: "SUCCESS",
                    message: "Thank you for subscribing to AutomotoNews updates!"
                };
            }
            const errData = await res.json().catch(()=>null);
            if (errData?.code === "duplicate_parameter") {
                return {
                    success: true,
                    code: "ALREADY_SUBSCRIBED",
                    message: "You are already subscribed to our newsletter."
                };
            }
            return {
                success: false,
                code: "ERROR",
                message: errData?.message || "Failed to subscribe. Please try again later."
            };
        }
        if (provider === "mailchimp") {
            if (!apiKey || !listId) {
                return {
                    success: false,
                    code: "NOT_CONFIGURED",
                    message: "Mailchimp API key or List ID is missing from environment settings."
                };
            }
            const dc = apiKey.split("-")[1] || "us1";
            const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${apiKey}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email_address: trimmedEmail,
                    status: "subscribed"
                })
            });
            if (res.ok) {
                return {
                    success: true,
                    code: "SUCCESS",
                    message: "Thank you for subscribing to AutomotoNews updates!"
                };
            }
            const errData = await res.json().catch(()=>null);
            if (errData?.title === "Member Exists") {
                return {
                    success: true,
                    code: "ALREADY_SUBSCRIBED",
                    message: "You are already subscribed to our newsletter."
                };
            }
            return {
                success: false,
                code: "ERROR",
                message: errData?.detail || "Failed to subscribe. Please try again later."
            };
        }
        if (provider === "webhook" && webhookUrl) {
            const res = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: trimmedEmail,
                    subscribedAt: new Date().toISOString()
                })
            });
            if (res.ok) {
                return {
                    success: true,
                    code: "SUCCESS",
                    message: "Thank you for subscribing to AutomotoNews updates!"
                };
            }
            return {
                success: false,
                code: "ERROR",
                message: "Webhook newsletter delivery returned an error."
            };
        }
        return {
            success: false,
            code: "NOT_CONFIGURED",
            message: `Unsupported or incomplete newsletter provider settings for provider '${provider}'.`
        };
    } catch (error) {
        console.error("Newsletter service error:", error);
        return {
            success: false,
            code: "ERROR",
            message: "An unexpected network error occurred. Please try again."
        };
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0p55kli._.js.map