import Image from "next/image";
import type { Author } from "@/lib/types";

type AuthorBioProps = {
  author: Author;
};

export function AuthorBio({ author }: AuthorBioProps) {
  return (
    <aside className="mt-10 rounded-xl border border-border bg-surface p-4 sm:p-5">
      <div className="flex gap-4">
        {author.avatarUrl ? (
          <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-border">
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
            className="flex size-14 shrink-0 items-center justify-center rounded-full bg-border text-sm font-semibold text-muted"
            aria-hidden="true"
          >
            {author.name.slice(0, 1).toUpperCase()}
          </div>
        )}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-muted">
              Written by
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <svg className="size-3 fill-current" viewBox="0 0 16 16">
                <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0z" />
              </svg>
              Verified Automotive Editor
            </span>
          </div>
          <h2 className="mt-1 text-base font-bold text-foreground">{author.name}</h2>
          {author.bio ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">{author.bio}</p>
          ) : (
            <p className="mt-1 text-xs text-muted">
              Editorial team member covering Indian car, bike, and EV developments with factual verification.
            </p>
          )}
        </div>
      </div>
    </aside>
  );
}
