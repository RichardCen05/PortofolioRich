import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tilt from "./Tilt";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          kicker="In Their Words"
          title="From the Team"
          align="center"
        />

        <div className="mt-12 grid md:grid-cols-2 gap-4 sm:gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.12} className="h-full">
              <Tilt className="card-neon p-7 sm:p-8 h-full">
                <span className="font-tech text-4xl text-neon/25 leading-none block mb-1">
                  &ldquo;
                </span>
                <p className="text-ink-dim text-sm leading-relaxed italic">{t.quote}</p>
                <div className="mt-6 pt-4 border-t border-line">
                  <p className="font-semibold text-ink text-sm">{t.author}</p>
                  <p className="font-tech text-[11px] text-neon-2 mt-0.5">{t.role}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
