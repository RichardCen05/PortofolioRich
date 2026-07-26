"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "01<>/[]{}#$%&*+=";

/**
 * Matrix-style text decode: when the element scrolls into view, the string
 * resolves from glitch characters into the real text, left to right.
 * Server-renders the real text (SEO-safe), plays once, and skips entirely
 * for reduced-motion users.
 */
export default function Decode({
  text,
  className,
  duration = 750,
}: {
  text: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;
        const start = performance.now();

        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const solved = Math.floor(p * text.length);
          let out = text.slice(0, solved);
          for (let i = solved; i < text.length; i++) {
            out += text[i] === " " ? " " : CHARS[(Math.random() * CHARS.length) | 0];
          }
          setDisplay(out);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [text, duration]);

  return (
    <span ref={ref} aria-label={text} className={className}>
      {display}
    </span>
  );
}
