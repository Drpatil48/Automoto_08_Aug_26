"use client";

import { useEffect, useState } from "react";
import { stripHtml } from "@/lib/normalize";

type ArticleAudioPlayerProps = {
  title: string;
  body: string;
};

export function ArticleAudioPlayer({ title, body }: ArticleAudioPlayerProps) {
  const [supported, setSupported] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [rate, setRate] = useState<number>(1);
  const [utterance, setUtterance] = useState<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      setSupported(true);

      const updateUtterance = () => {
        const plainText = stripHtml(body);
        const fullText = `${title}. ${plainText}`;
        const msg = new SpeechSynthesisUtterance(fullText);

        const voices = window.speechSynthesis.getVoices();
        const marathiVoice = voices.find(
          (v) => v.lang.includes("mr") || v.lang.includes("IN"),
        );
        if (marathiVoice) {
          msg.voice = marathiVoice;
        }

        msg.rate = rate;

        msg.onend = () => {
          setIsPlaying(false);
          setIsPaused(false);
        };

        msg.onerror = () => {
          setIsPlaying(false);
          setIsPaused(false);
        };

        setUtterance(msg);
      };

      updateUtterance();

      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = updateUtterance;
      }
    }

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [title, body, rate]);

  if (!supported) return null;

  function togglePlay() {
    if (!utterance) return;

    if (isPlaying && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    } else if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    } else {
      window.speechSynthesis.cancel();
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
      setIsPlaying(true);
      setIsPaused(false);
    }
  }

  function handleRateChange(newRate: number) {
    setRate(newRate);
    if (utterance) {
      utterance.rate = newRate;
    }
    if (isPlaying && !isPaused) {
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance!);
    }
  }

  function stop() {
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  }

  return (
    <div
      aria-label="Listen to article"
      className="my-6 rounded-2xl border border-indigo-900/60 bg-gradient-to-r from-indigo-950/80 via-zinc-900 to-zinc-950 p-4 sm:p-5 shadow-lg backdrop-blur-md"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-900/50">
            <span className="text-lg">🔊</span>
          </div>
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-indigo-300">
              बातमी ऐका (LISTEN TO ARTICLE)
            </h3>
            <p className="text-xs font-medium text-zinc-400">
              {isPlaying
                ? isPaused
                  ? "पॉज केले आहे (Paused)..."
                  : "ऑडिओ वाचन सुरू आहे (Reading aloud)..."
                : "ऐकण्यासाठी प्ले दाबा (Press play to listen)"}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Play/Pause Button */}
          <button
            type="button"
            onClick={togglePlay}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-red-950/40 transition-all hover:bg-red-500"
          >
            {isPlaying && !isPaused ? "⏸ PAUSE" : isPaused ? "▶ RESUME" : "▶ LISTEN NOW"}
          </button>

          {/* Stop Button */}
          {isPlaying || isPaused ? (
            <button
              type="button"
              onClick={stop}
              className="inline-flex min-h-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 px-3 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:bg-zinc-800 hover:text-white"
            >
              ⏹ STOP
            </button>
          ) : null}

          {/* Speed Selector */}
          <div className="flex items-center gap-1 rounded-xl border border-zinc-800 bg-zinc-900/90 p-1">
            {[1, 1.25, 1.5, 2].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => handleRateChange(r)}
                className={`rounded-lg px-2 py-1 text-[10px] font-extrabold transition-colors ${
                  rate === r
                    ? "bg-indigo-600 text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {r}x
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
