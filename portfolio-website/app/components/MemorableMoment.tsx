import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { memorableMoment as m } from "../data/content";

export default function MemorableMoment() {
  return (
    <section id="memorable" className="relative py-20 sm:py-28 px-5 sm:px-6">
      <div className="relative max-w-3xl mx-auto">
        <SectionHeading
          kicker="Snapshot"
          title="Most Memorable Moment"
          align="center"
        />

        <Reveal className="card-neon card-traced mt-12 p-8 sm:p-12 text-center">
          <span className="font-tech text-5xl sm:text-6xl text-neon/25 leading-none block">
            &ldquo;
          </span>
          <h3 className="text-h3 font-bold text-ink mt-1 mb-5">{m.title}</h3>
          <p className="text-ink-dim text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            {m.story}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
