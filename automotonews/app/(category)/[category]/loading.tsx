import { Skeleton } from "@/components/ui/Skeleton";

export default function CategoryLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10" aria-busy="true">
      <Skeleton className="mb-6 h-4 w-40" />
      <Skeleton className="mb-3 h-10 w-2/3 max-w-md" />
      <Skeleton className="mb-8 h-4 w-full max-w-xl" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="overflow-hidden rounded-xl border border-border">
            <Skeleton className="aspect-[16/9] w-full rounded-none" />
            <div className="space-y-3 p-4">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-4/5" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
