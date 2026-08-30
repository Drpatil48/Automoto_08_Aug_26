"use client";

import Link from "next/link";
import { useState } from "react";

type Props = { title: string; url: string };

export function StickyMobileShareBar({ title, url }: Props) {
  const [copied, setCopied] = useState(false);

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl   = encodeURIComponent(url);
  const waHref  = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  const tgHref  = `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`;

  async function handleShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try { await navigator.share({ title, url }); } catch { /* noop */ }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  const pill = "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold tracking-wide transition-transform active:scale-95 whitespace-nowrap";

  return (
    <div
      aria-label="Mobile article quick actions"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-800/80 bg-zinc-950/96 backdrop-blur-sm shadow-xl md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-center justify-center gap-2 px-3 py-2">

        {/* WhatsApp */}
        <a href={waHref} target="_blank" rel="noopener noreferrer"
          aria-label="Share on WhatsApp"
          className={`${pill} bg-[#25D366] text-white shadow-md shadow-emerald-950/40`}>
          <svg width="15" height="15" viewBox="0 0 32 32" fill="white" aria-hidden="true" style={{flexShrink:0}}>
            <path d="M16 2C8.28 2 2 8.28 2 16c0 2.44.65 4.72 1.78 6.7L2 30l7.53-1.74A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.4 11.4 0 0 1-5.82-1.59l-.42-.25-4.33 1 1.02-4.2-.28-.44A11.43 11.43 0 0 1 4.5 16C4.5 9.6 9.6 4.5 16 4.5S27.5 9.6 27.5 16 22.4 27.5 16 27.5z"/>
            <path d="M22.2 19.1c-.33-.17-1.96-.97-2.27-1.08-.3-.11-.52-.17-.74.17-.22.33-.85 1.08-1.04 1.3-.19.22-.39.25-.72.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.14-.68.15-.15.33-.39.5-.58.17-.2.22-.33.33-.55.11-.22.06-.42-.03-.58-.08-.17-.74-1.8-1.02-2.47-.27-.65-.54-.56-.74-.57-.19-.01-.41-.01-.63-.01-.22 0-.58.08-.88.42-.3.33-1.16 1.13-1.16 2.76s1.19 3.2 1.35 3.42c.17.22 2.34 3.58 5.68 5.02.79.34 1.41.55 1.89.7.79.25 1.52.22 2.09.13.64-.1 1.96-.8 2.24-1.58.28-.77.28-1.44.19-1.58-.08-.14-.3-.22-.63-.39z"/>
          </svg>
          <span>WhatsApp</span>
        </a>

        {/* Telegram */}
        <a href={tgHref} target="_blank" rel="noopener noreferrer"
          aria-label="Share on Telegram"
          className={`${pill} bg-[#2AABEE] text-white shadow-md shadow-sky-950/40`}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="white" aria-hidden="true" style={{flexShrink:0}}>
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
          <span>Telegram</span>
        </a>

        {/* Share */}
        <button type="button" onClick={handleShare}
          aria-label="Share or copy link"
          className={`${pill} border border-zinc-700 bg-zinc-800 text-zinc-200`}>
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:0}}>
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:0}}>
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
          )}
          <span>{copied ? "Copied!" : "Share"}</span>
        </button>

        {/* Compare */}
        <Link href="/compare"
          className={`${pill} border border-red-900/60 bg-red-950/80 text-red-400`}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{flexShrink:0}}>
            <path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>
          </svg>
          <span>Compare</span>
        </Link>

      </div>
    </div>
  );
}
