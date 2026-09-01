"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { trackEvent } from "@/lib/gtag";

export function NewsletterFormClient() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [tone, setTone] = useState<"error" | "info" | "success">("info");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, consent }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success) {
        setTone("success");
        setMessage(data.message || "Thank you for subscribing!");
        setEmail("");
        trackEvent({
          action: "subscribe",
          category: "newsletter",
          label: trimmed,
        });
      } else {
        setTone(data?.code === "NOT_CONFIGURED" ? "info" : "error");
        setMessage(
          data?.message || "Subscriptions are currently unconfigured or unavailable."
        );
      }
    } catch {
      setTone("error");
      setMessage("A network error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="max-w-2xl rounded-2xl border border-zinc-800/90 bg-zinc-900/80 p-5 sm:p-8 shadow-xl"
      aria-label="Newsletter signup"
      noValidate
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          disabled={loading}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email address"
          className="min-h-12 w-full flex-1 rounded-xl border border-zinc-800 bg-zinc-950 px-4 text-base text-zinc-100 placeholder-zinc-500 focus:border-red-600 focus:outline-none disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-red-600 px-7 text-base font-bold text-white transition-all hover:bg-red-500 hover:shadow-lg hover:shadow-red-950/40 disabled:opacity-60 shrink-0"
        >
          {loading ? "Subscribing..." : "Subscribe Now"}
        </button>
      </div>

      <label className="mt-4 flex items-start gap-3 text-xs sm:text-sm leading-relaxed text-zinc-300">
        <input
          type="checkbox"
          name="consent"
          disabled={loading}
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 size-4 rounded border-zinc-800 bg-zinc-950 text-red-600 focus:ring-red-600"
          required
        />
        <span>
          I agree to receive daily email updates and understand I can unsubscribe anytime. Read our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-zinc-100 underline underline-offset-4 hover:text-white"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {message ? (
        <p
          className={`mt-4 text-sm font-semibold ${
            tone === "error"
              ? "text-red-400"
              : tone === "success"
                ? "text-emerald-400"
                : "text-zinc-200"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
