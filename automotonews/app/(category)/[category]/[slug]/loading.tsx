import { Skeleton } from "@/components/ui/Skeleton";

export default function ArticleLoading() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10" aria-busy="true">
      <Skeleton className="mb-6 h-4 w-48" />
      <Skeleton className="mb-3 h-10 w-full" />
      <Skeleton className="mb-3 h-10 w-4/5" />
      <Skeleton className="mb-8 h-4 w-56" />
      <Skeleton className="mb-8 aspect-[16/9] w-full" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}
