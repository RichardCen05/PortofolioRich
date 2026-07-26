import Image from "next/image";
import Reveal from "./Reveal";
import { transition } from "../data/content";

export default function Transition() {
  return (
    <section id="transition" className="relative py-20 sm:py-32 px-5 sm:px-6 overflow-hidden">
      <div className="relative max-w-4xl mx-auto">
        {/* Chapter marker */}
        <Reveal className="flex items-center justify-center gap-3 sm:gap-4 font-tech text-[10px] sm:text-xs mb-12 flex-wrap">
          <span className="text-ink-dimmer">CH. 01 LEAD SELF</span>
          <span className="text-neon tracking-[0.4em] animate-pulse">{">>>"}</span>
          <span className="text-neon">CH. 02 LEAD OTHERS</span>
        </Reveal>

        {/* The fear */}
        <Reveal>
          <p className="text-h3 font-medium leading-relaxed text-ink-dim text-center max-w-2xl mx-auto">
            &ldquo;{transition.quote}&rdquo;
          </p>
        </Reveal>

        {/* Photo */}
        <Reveal delay={0.15} className="mt-12">
          <div className="relative rounded-2xl overflow-hidden border border-line-strong shadow-[0_0_60px_-15px_rgba(61,255,138,0.4)]">
            <div className="relative aspect-video">
              <Image
                src={transition.image}
                alt={transition.imageCaption}
                fill
                sizes="(min-width: 768px) 56rem, 100vw"
                className="object-cover"
              />
              {/* neon wash + scanline */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
              <div
                className="absolute inset-x-0 h-24 opacity-30 pointer-events-none"
                style={{
                  background: "linear-gradient(to bottom, transparent, rgba(61,255,138,0.35), transparent)",
                  animation: "scan 7s linear infinite",
                }}
              />
            </div>
            <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
              <p className="font-tech text-[10px] sm:text-xs text-neon">
                {transition.imageCaption}
              </p>
            </div>
          </div>
        </Reveal>

        {/* The answer */}
        <Reveal delay={0.2} className="mt-12">
          <p className="text-h3 font-medium leading-relaxed text-ink text-glow text-center max-w-2xl mx-auto">
            {transition.answer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
