import Reveal from "@/components/Reveal";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 max-w-2xl md:mb-16">
      <p className="mb-4 flex items-center gap-3 font-mono text-xs text-accent sm:text-sm">
        <span className="text-primary">{index}.</span>
        <span>
          <span className="text-muted-foreground">{"// "}</span>
          {eyebrow}
        </span>
        <span className="h-px w-12 bg-gradient-to-r from-accent/70 to-transparent" />
      </p>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
