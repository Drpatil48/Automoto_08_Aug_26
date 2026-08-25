import Link from "next/link";

const POPULAR_TOPICS = [
  { label: "⚡ Nexon EV", query: "Nexon EV" },
  { label: "🚗 Maruti Swift", query: "Swift" },
  { label: "🚙 Jeep Compass", query: "Jeep Compass" },
  { label: "🔋 EV Charging", query: "EV Charging" },
  { label: "🏍️ CNG Bikes", query: "CNG" },
  { label: "🚐 Innova Crysta", query: "Innova" },
];

type SearchPillsProps = {
  currentQuery?: string;
};

export function SearchPills({ currentQuery }: SearchPillsProps) {
  return (
    <div className="mt-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
        Trending Searches · लोकप्रिय शोध
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {POPULAR_TOPICS.map((topic) => {
          const isActive = currentQuery?.toLowerCase() === topic.query.toLowerCase();

          return (
            <Link
              key={topic.query}
              href={`/search?q=${encodeURIComponent(topic.query)}`}
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                isActive
                  ? "border-accent bg-accent text-white"
                  : "border-border bg-surface text-foreground/80 hover:border-accent hover:text-accent"
              }`}
            >
              {topic.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
