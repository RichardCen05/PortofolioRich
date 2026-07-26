"use client";

import { useEffect, useState } from "react";
import { chapters } from "../data/content";

export default function ChapterRail() {
  const [active, setActive] = useState(chapters[0].id);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const sections = chapters
      .map((c) => document.getElementById(c.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));

    function onScroll() {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? (scrollTop / max) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile: top progress bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-0.5 bg-line z-50">
        <div
          className="h-full bg-neon transition-[width] duration-150"
          style={{ width: `${progress}%`, boxShadow: "0 0 8px var(--neon)" }}
        />
      </div>

      {/* Desktop: chapter rail */}
      <nav
        className="hidden lg:flex flex-col gap-5 fixed right-8 top-1/2 -translate-y-1/2 z-50"
        aria-label="Chapter list"
      >
        {chapters.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group flex items-center gap-3 justify-end"
          >
            <span
              className={`font-tech text-[11px] uppercase tracking-wider whitespace-nowrap opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 ${
                active === c.id ? "text-neon" : "text-ink-dim"
              }`}
            >
              {c.label}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                active === c.id
                  ? "w-3 h-3 bg-neon shadow-[0_0_10px_var(--neon)]"
                  : "w-2 h-2 bg-ink-dimmer group-hover:bg-neon-2"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
