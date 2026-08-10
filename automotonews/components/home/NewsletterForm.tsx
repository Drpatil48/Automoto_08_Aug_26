import { NewsletterFormClient } from "@/components/home/NewsletterFormClient";
import { SectionHeading } from "@/components/home/SectionHeading";

/**
 * Server-rendered newsletter section; only the form is a client island.
 */
export function NewsletterForm() {
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
        <NewsletterFormClient />
      </div>
    </section>
  );
}
