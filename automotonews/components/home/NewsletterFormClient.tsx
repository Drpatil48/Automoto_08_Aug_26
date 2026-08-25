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
      className="max-w-xl rounded-2xl border border-white/15 bg-white/5 p-4 sm:p-6"
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
          placeholder="Enter your email"
          className="min-h-11 w-full flex-1 rounded-md border border-white/20 bg-white px-3 text-sm text-foreground disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={loading}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-dark disabled:opacity-60"
        >
          {loading ? "Subscribing..." : "Subscribe"}
        </button>
      </div>

      <label className="mt-4 flex items-start gap-3 text-sm text-white/80">
        <input
          type="checkbox"
          name="consent"
          disabled={loading}
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 size-4"
          required
        />
        <span>
          I agree to receive email updates and understand I can unsubscribe
          anytime. See the site{" "}
          <Link
            href="/privacy-policy"
            className="font-medium text-white underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>{" "}
          for details.
        </span>
      </label>

      {message ? (
        <p
          className={`mt-4 text-sm ${
            tone === "error"
              ? "text-red-200"
              : tone === "success"
                ? "text-emerald-300 font-medium"
                : "text-white/90"
          }`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
