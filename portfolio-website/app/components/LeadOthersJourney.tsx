import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Counter from "./Counter";
import Icon from "./Icon";
import { leadOthersJourney as j, leadOthersTrack } from "../data/content";

export default function LeadOthersJourney() {
  return (
    <section id="lead-others" className="relative py-20 sm:py-28 px-5 sm:px-6 bg-bg-soft/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          kicker={`Chapter 02 · ${leadOthersTrack === "community" ? "Community Option" : "Organization Option"}`}
          title="Lead Others"
          subtitle={j.tagline}
        />

        {/* Identity card */}
        <Reveal className="mt-10 card-neon card-traced p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-h2 font-bold text-gradient-animated leading-none">
                {j.initiativeName}
              </h3>
              <p className="text-ink-dim text-sm mt-2">{j.subTagline}</p>
            </div>
            <a
              href={j.url}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost text-xs sm:text-sm shrink-0"
            >
              Visit site
              <Icon name="arrow" className="w-4 h-4" />
            </a>
          </div>

          <div className="flex flex-wrap gap-2 mt-5">
            <span className="chip">{j.role}</span>
            <span className="chip">{j.period}</span>
          </div>

          <p className="text-ink-dim text-sm leading-relaxed mt-6">{j.summary}</p>
        </Reveal>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {j.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="card-neon p-5 text-center">
              <p className="text-h2 font-bold text-neon text-glow leading-none">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="text-ink-dim text-[11px] sm:text-xs mt-2">{s.label}</p>
            </Reveal>
          ))}
        </div>

        {/* Team */}
        <div className="mt-14">
          <h3 className="font-tech text-neon text-sm mb-5">{"// THE TEAM I LED"}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {j.team.map((t, i) => (
              <Reveal
                key={t.role}
                delay={i * 0.06}
                className={`card-neon p-4 text-center ${i === 0 ? "border-neon/50" : ""}`}
              >
                <div
                  className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center mb-3 ${
                    i === 0 ? "bg-neon text-[#041008]" : "bg-neon-soft text-neon border border-line"
                  }`}
                >
                  <Icon name={t.icon} className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold text-ink leading-tight">{t.role}</p>
                <p className="text-[10px] text-ink-dimmer mt-1 font-tech">{t.note}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mt-14">
          <h3 className="font-tech text-neon text-sm mb-5">{"// WHAT WAS HARD"}</h3>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {j.challenges.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.08} className="card-neon p-5 flex gap-4">
                <span className="shrink-0 w-9 h-9 rounded-lg bg-neon-soft border border-line flex items-center justify-center text-neon">
                  <Icon name={c.icon} className="w-4 h-4" />
                </span>
                <div>
                  <h4 className="font-semibold text-ink text-sm">{c.title}</h4>
                  <p className="text-ink-dim text-xs mt-1">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* How I led */}
        <div className="mt-14">
          <h3 className="font-tech text-neon text-sm mb-5">{"// HOW I LED"}</h3>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {j.practices.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08} className="card-neon card-traced p-5">
                <span className="inline-flex w-9 h-9 rounded-lg bg-neon-soft border border-line items-center justify-center text-neon-2 mb-3">
                  <Icon name={p.icon} className="w-4 h-4" />
                </span>
                <h4 className="font-semibold text-ink text-sm">{p.title}</h4>
                <p className="text-ink-dim text-xs mt-1.5">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Outcomes */}
        <div className="mt-14">
          <h3 className="font-tech text-neon text-sm mb-5">{"// WHAT CAME OUT OF IT"}</h3>
          <div className="space-y-2.5">
            {j.outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 0.06} className="flex gap-3 items-start">
                <span className="shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-neon shadow-[0_0_8px_var(--neon)]" />
                <p className="text-ink-dim text-sm">{o}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Learning */}
        <Reveal className="mt-12 card-neon p-6 sm:p-8 border-l-2 border-l-neon">
          <p className="text-ink text-base sm:text-lg italic leading-relaxed">{j.learning}</p>
        </Reveal>
      </div>
    </section>
  );
}
