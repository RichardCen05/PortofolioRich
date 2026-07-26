import Reveal from "./Reveal";
import Decode from "./Decode";

export default function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "left",
}: {
  kicker: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      <p className="font-tech text-[10px] sm:text-xs text-neon uppercase tracking-widest mb-3">
        {kicker}
      </p>
      <h2 className="text-h2 font-bold text-ink text-glow tracking-tight">
        <Decode text={title} />
      </h2>
      {subtitle && (
        <p className={`mt-4 text-ink-dim text-sm sm:text-base max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-px w-20 divider-glow ${centered ? "mx-auto" : ""}`} />
    </Reveal>
  );
}
