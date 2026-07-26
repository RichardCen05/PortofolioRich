import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tilt from "./Tilt";
import Icon from "./Icon";
import { teladanCharacters } from "../data/content";

export default function TeladanGrowth() {
  return (
    <section id="teladan" className="relative py-20 sm:py-28 px-5 sm:px-6 bg-bg-soft/60">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          kicker="TELADAN"
          title="Top 3 Characters I Value Most"
          subtitle="The three that grew the most while leading Lectura."
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-3 gap-4 sm:gap-5">
          {teladanCharacters.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.12} className="h-full">
              <Tilt className="card-neon card-traced p-6 sm:p-7 h-full">
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex w-12 h-12 rounded-xl bg-neon-soft border border-line-strong items-center justify-center text-neon">
                    <Icon name={c.icon} className="w-6 h-6" />
                  </span>
                  <span className="font-tech text-3xl text-neon/15 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-h3 font-bold text-ink leading-tight">{c.name}</h3>
                <p className="font-tech text-[11px] text-neon-2 mt-2 mb-4">{c.tagline}</p>
                <div className="h-px w-full divider-glow opacity-50 mb-4" />
                <p className="text-ink-dim text-sm leading-relaxed">{c.story}</p>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
