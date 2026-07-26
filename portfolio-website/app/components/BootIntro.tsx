"use client";

import { useEffect, useState } from "react";

const SCRIPT = [
  "> init richard.leadership_portfolio",
  "> mount chapters: [lead_self, lead_others]",
  "> inject trust ... ok",
  "> render journey",
];

/**
 * Terminal boot sequence shown once per browser session: four lines type in
 * (~1.6s total), then the overlay fades and unmounts. Click anywhere to skip.
 * Skipped entirely for reduced-motion users and on repeat visits.
 */
export default function BootIntro() {
  const [phase, setPhase] = useState<"hidden" | "typing" | "fading">("hidden");
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem("rc-boot") === "1") return;
      sessionStorage.setItem("rc-boot", "1");
    } catch {
      return;
    }

    setPhase("typing");
    const full = SCRIPT.join("\n");
    let i = 0;
    let fadeTimer = 0;
    const interval = window.setInterval(() => {
      i += 3; // three chars per tick keeps it snappy
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        window.clearInterval(interval);
        fadeTimer = window.setTimeout(() => setPhase("fading"), 420);
      }
    }, 16);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    if (phase !== "fading") return;
    const t = window.setTimeout(() => setPhase("hidden"), 550);
    return () => window.clearTimeout(t);
  }, [phase]);

  if (phase === "hidden") return null;

  return (
    <div
      role="presentation"
      onClick={() => setPhase("fading")}
      className={`fixed inset-0 z-[60] bg-bg flex items-center justify-center px-6 cursor-pointer transition-opacity duration-500 ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <pre className="font-tech text-neon text-xs sm:text-sm leading-7 whitespace-pre-wrap">
        {typed}
        <span className="caret">▮</span>
      </pre>
    </div>
  );
}
