"use client";

import { useState, type FormEvent } from "react";

/**
 * Newsletter UI only — no email provider is wired yet.
 * Do not pretend signup succeeded until Brevo/Mailchimp (or similar) is configured.
 */
export function NewsletterFormClient() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [tone, setTone] = useState<"error" | "info">("info");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
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

    setTone("info");
    setMessage(
      "Newsletter delivery is not configured yet. An email provider (for example Brevo or Mailchimp) must be connected before subscriptions can be accepted.",
    );
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
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          className="min-h-11 w-full flex-1 rounded-md border border-white/20 bg-white px-3 text-sm text-foreground"
        />
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 text-sm font-semibold text-white hover:bg-accent-dark"
        >
          Subscribe
        </button>
      </div>

      <label className="mt-4 flex items-start gap-3 text-sm text-white/80">
        <input
          type="checkbox"
          name="consent"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1 size-4"
          required
        />
        <span>
          I agree to receive email updates and understand I can unsubscribe
          anytime. See the site Privacy Policy for details.
        </span>
      </label>

      {message ? (
        <p
          className={`mt-4 text-sm ${tone === "error" ? "text-red-200" : "text-white/90"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
