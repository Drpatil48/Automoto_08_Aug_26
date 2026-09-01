import Image from "next/image";
import type { Author } from "@/lib/types";

type AuthorBioProps = {
  author: Author;
};

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <aside className="mt-10 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-5 sm:p-6">
      <div className="flex gap-4">
        {author.avatarUrl ? (
          <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-zinc-700 bg-zinc-800">
            <Image
              src={author.avatarUrl}
              alt=""
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
        ) : (
          <div
            className="flex size-14 shrink-0 items-center justify-center rounded-full bg-red-950 border border-red-800 text-sm font-black text-red-400 tracking-wider"
            aria-hidden="true"
          >
            {author.name
              .split(" ")
              .map((part) => part[0])
              .filter(Boolean)
              .slice(0, 2)
              .join("")
              .toUpperCase()}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              WRITTEN BY
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
              <svg className="size-3 fill-current" viewBox="0 0 16 16">
                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
              </svg>
              Verified Automotive Editor
            </span>
          </div>
          <h2 className="mt-1.5 text-xl font-black text-white">{author.name}</h2>
          {author.bio ? (
            <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-zinc-300">{author.bio}</p>
          ) : (
            <p className="mt-2 text-sm text-zinc-300">
              Editorial team member covering Indian car, bike, and EV developments with factual verification.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
