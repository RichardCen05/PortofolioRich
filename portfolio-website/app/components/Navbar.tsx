"use client";

import { useEffect, useState } from "react";
import { profile } from "../data/content";

const links = [
  { href: "#lead-self", label: "Lead Self" },
  { href: "#lead-others", label: "Lead Others" },
  { href: "#lectura", label: "Lectura" },
  { href: "#teladan", label: "Character" },
  { href: "#growth-plan", label: "Growth" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled || open ? "bg-bg/90 backdrop-blur border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-tech text-neon text-glow text-sm shrink-0">
          &lt;{profile.name}/&gt;
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-dim hover:text-neon transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden w-11 h-11 -mr-2 flex items-center justify-center text-neon"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative w-5 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-current transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile sheet */}
      <nav
        className={`lg:hidden overflow-hidden border-t border-line bg-bg/95 backdrop-blur transition-[max-height,opacity] duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
        }`}
      >
        <div className="px-5 py-3 flex flex-col">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-ink-dim hover:text-neon transition-colors py-3 border-b border-line/50 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
