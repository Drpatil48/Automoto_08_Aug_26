"use client";

import { useState, type FormEvent } from "react";
import { SectionHeading } from "@/components/home/SectionHeading";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!consent) {
      setMessage("Please accept the privacy notice to continue.");
      return;
    }
    // Phase 2: UI only. Real email provider wiring comes later.
    setMessage(
      "Thanks — newsletter signup UI is ready. Delivery service will be connected in a later phase.",
    );
    setEmail("");
    setConsent(false);
  }

  return (
    <section
      id="newsletter"
      className="border-t border-border bg-header text-header-text"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10">
        <SectionHeading
          id="newsletter-heading"
          title="Subscribe for Daily Auto Updates"
          description="Get the latest EV news, car launches, and bike reviews in your inbox."
          tone="dark"
        />

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
              anytime. Privacy details will follow the site Privacy Policy.
            </span>
          </label>

          {message ? (
            <p className="mt-4 text-sm text-white/90" role="status">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
