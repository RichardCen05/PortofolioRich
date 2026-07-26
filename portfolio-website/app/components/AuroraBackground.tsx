"use client";

/**
 * Fixed, GPU-cheap ambient layer: a few large blurred gradient orbs that drift
 * behind everything. Pure CSS animation so it costs nothing per frame in JS,
 * and it sits behind a grid overlay to give the page depth.
 */
export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="blob float-slow"
        style={{
          width: "42vw",
          height: "42vw",
          minWidth: 260,
          minHeight: 260,
          top: "-8%",
          left: "-6%",
          background: "radial-gradient(circle, rgba(61,255,138,0.5), transparent 65%)",
          opacity: 0.35,
        }}
      />
      <div
        className="blob float"
        style={{
          width: "38vw",
          height: "38vw",
          minWidth: 240,
          minHeight: 240,
          top: "38%",
          right: "-10%",
          background: "radial-gradient(circle, rgba(0,229,199,0.45), transparent 65%)",
          opacity: 0.3,
          animationDelay: "1.5s",
        }}
      />
      <div
        className="blob float-slow"
        style={{
          width: "34vw",
          height: "34vw",
          minWidth: 220,
          minHeight: 220,
          bottom: "-6%",
          left: "22%",
          background: "radial-gradient(circle, rgba(124,255,178,0.4), transparent 65%)",
          opacity: 0.22,
          animationDelay: "3s",
        }}
      />
      {/* faint grid on top of the glow, fading out toward the bottom */}
      <div
        className="absolute inset-0 bg-grid opacity-40"
        style={{
          maskImage: "linear-gradient(to bottom, #000, transparent 85%)",
          WebkitMaskImage: "linear-gradient(to bottom, #000, transparent 85%)",
        }}
      />
      {/* film grain for texture */}
      <div className="grain" />
    </div>
  );
}
