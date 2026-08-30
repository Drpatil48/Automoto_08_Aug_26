"use client";

import { useEffect, useState } from "react";

export function ReadingProgressBar() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    function updateScrollCompletion() {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight > 0) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100,
        );
      }
    }

    window.addEventListener("scroll", updateScrollCompletion);
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-50 h-1 bg-zinc-900"
      role="progressbar"
      aria-label="Reading progress"
      aria-valuenow={completion}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-red-500 transition-all duration-150 ease-out"
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}
