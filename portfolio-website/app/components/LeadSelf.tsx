import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tilt from "./Tilt";
import Icon from "./Icon";
import {
  identity, approach, mission, skills, projects,
  experience, education, achievements, profile,
} from "../data/content";

const gallery = ["Untar.jpg", "ITCC.jpg", "4C.JPEG", "Unity2.png"];

export default function LeadSelf() {
  return (
    <section id="lead-self" className="relative py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          kicker="Chapter 01"
          title="Lead Self"
          subtitle="Knowing myself, before learning to lead anyone else."
        />

        {/* Photo strip */}
        <Reveal className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {gallery.map((img, i) => (
            <div
              key={img}
              className="relative aspect-square rounded-xl overflow-hidden border border-line group"
            >
              <Image
                src={`/img/${img}`}
                alt="Richard"
                fill
                sizes="(min-width: 1024px) 22vw, 45vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
              <span className="absolute bottom-2 left-3 font-tech text-[10px] text-neon">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </Reveal>

        {/* Who I am */}
        <div className="mt-16 sm:mt-20">
          <h3 className="font-tech text-neon text-sm mb-6">{"// WHO I AM"}</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {identity.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} className="card-neon card-traced p-6">
                <div className="w-11 h-11 rounded-full bg-neon-soft border border-line-strong flex items-center justify-center font-tech text-neon text-lg mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-ink mb-2">{item.title}</h4>
                <p className="text-ink-dim text-sm leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Approach */}
        <div className="mt-14 sm:mt-16">
          <h3 className="font-tech text-neon text-sm mb-6">{"// HOW I WORK"}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="card-neon p-5">
                <h4 className="font-semibold text-ink text-sm mb-2">{item.title}</h4>
                <p className="text-ink-dim text-sm">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mission */}
        <Reveal className="mt-14 sm:mt-16 card-neon card-traced p-7 sm:p-10 text-center">
          <div className="w-12 h-12 rounded-full bg-neon-soft border border-line-strong flex items-center justify-center mx-auto mb-5 text-neon">
            <Icon name="zap" className="w-6 h-6" />
          </div>
          <h4 className="text-h3 font-bold text-ink mb-3">{mission.title}</h4>
          <p className="text-ink-dim text-sm max-w-2xl mx-auto">{mission.body}</p>
        </Reveal>

        {/* Skills marquee */}
        <div className="mt-14 sm:mt-16">
          <h3 className="font-tech text-neon text-sm mb-6 text-center">{"// TOOLKIT"}</h3>
          <div className="mask-fade-x overflow-hidden">
            <div className="marquee-track gap-3">
              {[...skills, ...skills].map((s, i) => (
                <span key={`${s}-${i}`} className="chip whitespace-nowrap">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mt-16 sm:mt-20">
          <h3 className="font-tech text-neon text-sm mb-6">{"// BUILT SO FAR"}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={(i % 3) * 0.08} className="h-full">
                <Tilt className="card-neon overflow-hidden group h-full">
                  <div className="relative h-40 sm:h-44 overflow-hidden rounded-t-[inherit]">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                    <h4 className="absolute bottom-3 left-4 font-bold text-ink text-lg">{p.name}</h4>
                  </div>
                  <div className="p-5">
                    <p className="text-ink-dim text-sm mb-4">{p.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span key={t} className="chip text-[11px]">{t}</span>
                      ))}
                    </div>
                  </div>
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Experience + Education */}
        <div className="mt-16 sm:mt-20 grid md:grid-cols-2 gap-10 md:gap-12">
          {[
            { label: "// EXPERIENCE", items: experience, dot: "bg-neon" },
            { label: "// EDUCATION", items: education, dot: "bg-neon-2" },
          ].map((col) => (
            <div key={col.label}>
              <h3 className="font-tech text-neon text-sm mb-6">{col.label}</h3>
              <div className="space-y-6 border-l border-line pl-6">
                {col.items.map((e) => (
                  <Reveal key={e.title} className="relative">
                    <span
                      className={`absolute -left-[29px] top-1.5 w-3 h-3 rounded-full ${col.dot} shadow-[0_0_8px_currentColor]`}
                    />
                    <h4 className="font-semibold text-ink text-sm sm:text-base">{e.title}</h4>
                    <p className="text-[11px] font-tech text-neon-2 mt-1">
                      {e.org} · {e.period}
                    </p>
                    <p className="text-ink-dim text-sm mt-2">{e.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements */}
        <div className="mt-16 sm:mt-20">
          <h3 className="font-tech text-neon text-sm mb-6">{"// AWARDS"}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={(i % 3) * 0.06} className="card-neon p-5 flex gap-4">
                <span className="font-tech text-neon text-sm shrink-0 pt-0.5">{a.rank}</span>
                <div>
                  <h4 className="font-semibold text-ink text-sm leading-snug">{a.title}</h4>
                  <p className="text-ink-dim text-xs mt-1.5">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-10">
            <a href={profile.cvFile} className="btn-ghost text-sm">
              <Icon name="download" className="w-4 h-4" />
              Full Resume
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
              <Icon name="linkedin" className="w-4 h-4" />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost text-sm">
              <Icon name="github" className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
