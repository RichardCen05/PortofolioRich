"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import ParticleField from "./ParticleField";
import Magnetic from "./Magnetic";
import Icon from "./Icon";
import { profile } from "../data/content";

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const speed = deleting ? 35 : 60;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roleLine);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <ParticleField className="absolute inset-0 w-full h-full" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, var(--bg) 78%)",
        }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-6 grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-12 items-center pt-28 pb-20">
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start mb-5">
            <span className="chip gap-2">
              <span className="dot-live" />
              open to collaborate
            </span>
          </div>

          <p className="font-tech text-neon text-xs sm:text-sm mb-4">
            {"// PROLOGUE"}
          </p>

          <h1 className="text-hero font-bold text-ink">
            Hi, I&apos;m{" "}
            <span className="text-gradient-animated">{profile.name}</span>
          </h1>

          <p className="mt-4 min-h-[2rem] font-tech text-base sm:text-lg md:text-xl text-neon-2 break-words">
            {typed}
            <span className="caret">_</span>
          </p>

          <p className="mt-6 text-ink-dim max-w-lg mx-auto md:mx-0">
            From leading myself to leading others. This is how a team of four
            changed the way I lead.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
            <Magnetic>
              <a href="#lead-self" className="btn-neon text-sm sm:text-base">
                Start the Journey
                <Icon name="arrow" className="w-4 h-4" />
              </a>
            </Magnetic>
            <Magnetic>
              <a href={profile.cvFile} className="btn-ghost text-sm sm:text-base">
                <Icon name="download" className="w-4 h-4" />
                CV
              </a>
            </Magnetic>
          </div>
        </div>

        <div className="order-1 md:order-2 relative mx-auto">
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-neon shadow-[0_0_60px_rgba(61,255,138,0.35)]">
            <Image
              src="/img/Richard.png"
              alt={profile.fullName}
              fill
              sizes="(min-width: 768px) 288px, 224px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -inset-3 sm:-inset-4 rounded-full border border-line animate-[spin_18s_linear_infinite]" />
          <div className="absolute -inset-6 sm:-inset-8 rounded-full border border-line/50 animate-[spin_28s_linear_infinite_reverse]" />

          {/* Floating identity chips (desktop only; wrapper controls visibility
              because .chip sets its own display) */}
          <span className="hidden md:block absolute -left-24 top-2 z-10 float">
            <span className="chip chip-solid">INFJ</span>
          </span>
          <span
            className="hidden md:block absolute -right-24 top-1/4 z-10 float-slow"
            style={{ animationDelay: "1.2s" }}
          >
            <span className="chip chip-solid">Lectura Lead</span>
          </span>
          <span
            className="hidden md:block absolute -left-20 bottom-4 z-10 float"
            style={{ animationDelay: "2.4s" }}
          >
            <span className="chip chip-solid">UB &apos;23</span>
          </span>
        </div>
      </div>

      <a
        href="#lead-self"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 font-tech text-[10px] sm:text-xs text-ink-dim hover:text-neon flex flex-col items-center gap-2"
      >
        SCROLL
        <span className="block w-px h-6 sm:h-8 bg-gradient-to-b from-neon to-transparent" />
      </a>
    </section>
  );
}
