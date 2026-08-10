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
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            Author
          </p>
          <h2 className="mt-1 text-base font-semibold">{author.name}</h2>
          {author.bio ? (
            <p className="mt-2 text-sm leading-relaxed text-muted">{author.bio}</p>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
