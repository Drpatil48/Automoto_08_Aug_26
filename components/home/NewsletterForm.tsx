import { NewsletterFormClient } from "@/components/home/NewsletterFormClient";
import { SectionHeading } from "@/components/home/SectionHeading";

export function NewsletterForm() {
  return (
    <section
      id="newsletter"
      className="border-t border-zinc-800/80 bg-zinc-950 px-4 py-8 sm:px-6 lg:py-12"
      aria-labelledby="newsletter-heading"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="newsletter-heading"
          title="SUBSCRIBE FOR DAILY AUTO UPDATES | ऑटो न्यूज अपडेट्स"
          description="Get the latest EV news, car launches, bike reviews, and buying guides straight to your inbox."
        />
        <div className="mt-6">
          <NewsletterFormClient />
        </div>
      </div>
    </section>
  );
}
