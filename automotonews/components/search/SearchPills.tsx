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
      <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
        TRENDING SEARCHES <span className="font-normal text-zinc-400">| लोकप्रिय शोध</span>
      </p>
      <div className="mt-2 flex flex-wrap gap-2">
        {POPULAR_TOPICS.map((topic) => {
          const isActive = currentQuery?.toLowerCase() === topic.query.toLowerCase();

          return (
            <Link
              key={topic.query}
              href={`/search?q=${encodeURIComponent(topic.query)}`}
              className={`inline-flex items-center rounded-full border px-3.5 py-1 text-xs font-semibold transition-all ${
                isActive
                  ? "border-red-600 bg-red-600 text-white shadow-md shadow-red-950/40"
                  : "border-zinc-800 bg-zinc-900/80 text-zinc-300 hover:border-red-600/50 hover:bg-zinc-800 hover:text-white"
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
