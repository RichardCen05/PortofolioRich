import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { growthPlan as g } from "../data/content";

export default function DevelopmentPlan() {
  return (
    <section id="growth-plan" className="relative py-20 sm:py-28 px-5 sm:px-6 bg-bg-soft/60">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          kicker="Chapter 03 · Still Unfolding"
          title="Where I'm Headed"
          align="center"
        />

        {/* Vision */}
        <Reveal className="mt-12 card-neon card-traced p-7 sm:p-10 text-center">
          <p className="text-h3 font-medium text-ink leading-relaxed">{g.vision}</p>
        </Reveal>

        {/* Assessments */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4">
          {g.assessments.map((a, i) => (
            <Reveal key={a.label} delay={i * 0.1} className="card-neon p-6 text-center">
              <p className="font-tech text-[10px] text-ink-dimmer uppercase tracking-widest">
                {a.label}
              </p>
              <p className="text-h2 font-bold text-gradient leading-none my-2">{a.value}</p>
              <p className="text-ink-dim text-xs">{a.note}</p>
            </Reveal>
          ))}
        </div>

        {/* Plan rows */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3 sm:gap-4">
          {g.rows.map((r, i) => (
            <Reveal key={r.value} delay={(i % 2) * 0.08} className="card-neon p-5 flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-lg bg-neon-soft border border-line flex items-center justify-center text-neon">
                <Icon name={r.icon} className="w-4 h-4" />
              </span>
              <div>
                <p className="font-tech text-[10px] text-neon-2 uppercase tracking-widest mb-1">
                  {r.label}
                </p>
                <p className="text-ink-dim text-sm">{r.value}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 text-center">
          <p className="text-ink italic text-base sm:text-lg max-w-2xl mx-auto">
            &ldquo;{g.closing}&rdquo;
          </p>
        </Reveal>
      </div>
    </section>
  );
}
