import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Magnetic from "./Magnetic";
import Icon from "./Icon";
import { profile } from "../data/content";

const links = [
  { icon: "mail", label: profile.email, href: `mailto:${profile.email}` },
  { icon: "linkedin", label: "linkedin.com/in/richard05", href: profile.linkedin },
  { icon: "github", label: "github.com/RichardCen05", href: profile.github },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-5 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          kicker="Connect"
          title="Get In Touch"
          align="center"
        />

        <div className="mt-12 grid sm:grid-cols-3 gap-3 sm:gap-4">
          {links.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.08}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="card-neon card-traced p-6 flex flex-col items-center gap-3 text-center h-full"
              >
                <span className="w-11 h-11 rounded-full bg-neon-soft border border-line flex items-center justify-center text-neon">
                  <Icon name={l.icon} className="w-5 h-5" />
                </span>
                <span className="text-ink-dim text-xs break-all">{l.label}</span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8 text-center">
          <Magnetic>
            <a href={`mailto:${profile.email}`} className="btn-neon text-sm">
              <Icon name="mail" className="w-4 h-4" />
              Say Hello
            </a>
          </Magnetic>
        </Reveal>
      </div>
    </section>
  );
}
