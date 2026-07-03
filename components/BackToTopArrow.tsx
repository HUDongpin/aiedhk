"use client";

import { useEffect, useState } from "react";

type ScrollProgressMetrics = {
  scrollTop: number;
  scrollHeight: number;
  clientHeight: number;
};

const progressCircleRadius = 22.5;
const progressCircleCircumference = 2 * Math.PI * progressCircleRadius;

export function getScrollProgress({ scrollTop, scrollHeight, clientHeight }: ScrollProgressMetrics) {
  const maxScroll = Math.max(0, scrollHeight - clientHeight);
  if (maxScroll === 0) return 0;

  const progress = (scrollTop / maxScroll) * 100;
  return Math.round(Math.min(100, Math.max(0, progress)));
}

export default function BackToTopArrow() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressOffset = progressCircleCircumference * (1 - scrollProgress / 100);

  useEffect(() => {
    let animationFrame = 0;

    function updateProgress() {
      animationFrame = 0;
      const root = document.documentElement;
      const body = document.body;

      setScrollProgress(
        getScrollProgress({
          scrollTop: window.scrollY || root.scrollTop || body?.scrollTop || 0,
          scrollHeight: Math.max(root.scrollHeight, body?.scrollHeight ?? 0),
          clientHeight: window.innerHeight || root.clientHeight,
        })
      );
    }

    function requestProgressUpdate() {
      if (animationFrame !== 0) return;
      animationFrame = window.requestAnimationFrame(updateProgress);
    }

    requestProgressUpdate();
    window.addEventListener("scroll", requestProgressUpdate, { passive: true });
    window.addEventListener("resize", requestProgressUpdate);
    window.visualViewport?.addEventListener("resize", requestProgressUpdate);

    return () => {
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestProgressUpdate);
      window.removeEventListener("resize", requestProgressUpdate);
      window.visualViewport?.removeEventListener("resize", requestProgressUpdate);
    };
  }, []);

  function handleClick() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "auto" : "smooth",
    });
  }

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={handleClick}
      className="focus-ring group fixed bottom-[calc(5.25rem+env(safe-area-inset-bottom))] right-4 z-[65] h-14 w-14 rounded-full transition duration-300 hover:-translate-y-0.5 sm:bottom-[calc(5.65rem+env(safe-area-inset-bottom))] sm:right-5"
    >
      <svg
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={scrollProgress}
        viewBox="0 0 56 56"
        className="pointer-events-none h-full w-full overflow-visible rounded-full drop-shadow-[0_16px_42px_rgba(15,23,42,0.14)] transition group-hover:drop-shadow-[0_22px_56px_rgba(15,23,42,0.16)]"
      >
        <g data-artwork="back-to-top-base" aria-hidden="true">
          <circle cx="28" cy="31.5" r="21" fill="#d8e0e9" opacity="0.45" />
          <circle cx="28" cy="28" r="21.3" fill="#fbfdff" />
          <circle data-track="page-progress-track" cx="28" cy="28" r={progressCircleRadius} fill="none" stroke="#dfe6ee" strokeWidth="2.6" />
          <path
            d="M28 37.5V20.5M19.5 29 28 20.5 36.5 29"
            fill="none"
            stroke="#172033"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <circle
          cx="28"
          cy="28"
          r={progressCircleRadius}
          fill="none"
          stroke="#48d5e8"
          strokeWidth="2.6"
          strokeLinecap="round"
          data-track="page-progress-arc"
          strokeDasharray={progressCircleCircumference}
          strokeDashoffset={progressOffset}
          transform="rotate(-90 28 28)"
          style={{ transition: "stroke-dashoffset 140ms linear" }}
        />
      </svg>
      <span className="pointer-events-none absolute bottom-full right-0 mb-3 hidden whitespace-nowrap rounded-full border border-slate-200/80 bg-white/95 px-3 py-1.5 text-xs font-black text-slate-700 opacity-0 shadow-lg shadow-slate-950/10 transition group-hover:-translate-y-1 group-hover:opacity-100 sm:block">
        Back to top
      </span>
    </button>
  );
}
