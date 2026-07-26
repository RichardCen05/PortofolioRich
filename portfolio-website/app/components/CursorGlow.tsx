"use client";

import { useEffect, useRef } from "react";

/**
 * A soft neon light that trails the pointer. Desktop only: it bails out
 * entirely on touch devices and when reduced motion is requested, and it
 * writes straight to the transform so React never re-renders per frame.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const el = ref.current;
    if (!el) return;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const loop = () => {
      // simple lerp so the glow lags slightly behind the cursor
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };

    el.style.opacity = "1";
    window.addEventListener("pointermove", onMove, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-30 opacity-0 transition-opacity duration-700 hidden md:block"
      style={{
        width: 380,
        height: 380,
        background: "radial-gradient(circle, rgba(61,255,138,0.10), transparent 62%)",
        filter: "blur(28px)",
      }}
    />
  );
}
