import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-10 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        <span className="monogram text-2xl font-bold tracking-widest">&lt;RC/&gt;</span>
        <span className="font-tech text-xs text-ink-dim">
          {profile.fullName} Leadership Portfolio
        </span>
        <span className="text-[11px] text-ink-dimmer">
          © {new Date().getFullYear()} {profile.fullName}. Designed and built with intention,
          from Lead Self to Lead Others.
        </span>
      </div>
    </footer>
  );
}
