import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { lecturaFeatures, lecturaSteps, leadOthersJourney } from "../data/content";

export default function LecturaShowcase() {
  return (
    <section id="lectura" className="relative py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          kicker="The Product"
          title="What We Shipped"
          subtitle="Lectura Compass, plus the modules students actually use."
          align="center"
        />

        {/* Steps */}
        <div className="mt-12 grid sm:grid-cols-3 gap-3 sm:gap-4">
          {lecturaSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1} className="relative card-neon p-6">
              <span className="font-tech text-4xl sm:text-5xl text-neon/15 absolute top-3 right-4 leading-none">
                {s.step}
              </span>
              <h4 className="font-semibold text-ink text-sm relative">{s.title}</h4>
              <p className="text-ink-dim text-xs mt-2 relative">{s.body}</p>
            </Reveal>
          ))}
        </div>

        {/* Feature grid */}
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {lecturaFeatures.map((f, i) => (
            <Reveal
              key={f.title}
              delay={(i % 3) * 0.07}
              className="card-neon card-traced p-5 group"
            >
              <span className="inline-flex w-11 h-11 rounded-xl bg-neon-soft border border-line items-center justify-center text-neon mb-4 transition-transform duration-300 group-hover:scale-110">
                <Icon name={f.icon} className="w-5 h-5" />
              </span>
              <h4 className="font-semibold text-ink text-sm leading-snug">{f.title}</h4>
              <p className="text-ink-dim text-xs mt-1.5">{f.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={leadOthersJourney.url}
            target="_blank"
            rel="noreferrer"
            className="btn-neon text-sm"
          >
            Open lectura.web.id
            <Icon name="arrow" className="w-4 h-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
