import { BadgeCheck, Briefcase, Globe2, MapPin, UserRound } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

const highlights = [
  { icon: UserRound, label: "Also known", value: site.alias },
  { icon: Briefcase, label: "Currently", value: "Frontend Developer @ City Wallet" },
  { icon: MapPin, label: "Based in", value: site.location },
  { icon: Globe2, label: "Open to", value: "Relocation to Europe" },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-narrow">
        <SectionHeading
          index="01"
          eyebrow="about"
          title="Engineering interfaces that scale."
        />

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          {/* Identity card */}
          <Reveal className="glass relative mx-auto w-full max-w-sm overflow-hidden p-3 lg:sticky lg:top-28">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <img
                src={site.images.profile}
                alt={`Portrait of ${site.name}`}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                <div>
                  <p className="font-display text-xl font-semibold">{site.name}</p>
                  <p className="font-mono text-xs text-white/75">{site.role}</p>
                </div>
                <BadgeCheck className="h-6 w-6 text-cyan-300" aria-hidden />
              </div>
            </div>
            <ul className="mt-3 space-y-1">
              {highlights.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm"
                >
                  <Icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">
                    {label}
                  </span>
                  <span className="truncate text-foreground">{value}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="min-w-0 space-y-8">
            <Reveal delay={80} className="space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I&apos;m a <span className="font-medium text-foreground">Frontend Developer</span> with
                2+ years of experience (including internship) building scalable web
                applications using React.js, Next.js and Node.js.
              </p>
              <p>
                I&apos;ve delivered full-stack features in production environments,
                serving <span className="font-medium text-foreground">2,000+ active users</span>,
                integrating APIs, building internal tools and shipping maintainable,
                well-tested TypeScript code. I care about clean architecture,
                reusable design systems and fast, accessible user experiences.
              </p>
              <p>
                Comfortable working in English-speaking, cross-functional teams and
                open to relocation to Europe.
              </p>
              <p className="border-l-2 border-primary/40 pl-4 text-base">
                You may also know me as{" "}
                <span className="font-medium text-foreground">{site.alias}</span>,
                the name on my LinkedIn and GitHub profiles.
              </p>
            </Reveal>

            {/* Code editor card */}
            <Reveal delay={160} className="glass overflow-hidden">
              <div className="window-bar">
                <span className="window-dot bg-red-400" />
                <span className="window-dot bg-amber-400" />
                <span className="window-dot bg-emerald-400" />
                <span className="ml-3 rounded-md bg-background/70 px-3 py-1 font-mono text-xs text-muted-foreground">
                  anupam.ts
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 sm:text-sm">
                <code>
                  <span className="tok-com">{"// Quick profile snapshot"}</span>
                  {"\n"}
                  <span className="tok-kw">const</span>{" "}
                  <span className="tok-fn">developer</span> = {"{"}
                  {"\n  "}
                  <span className="tok-key">name</span>:{" "}
                  <span className="tok-str">&quot;{site.name}&quot;</span>,
                  {"\n  "}
                  <span className="tok-key">role</span>:{" "}
                  <span className="tok-str">&quot;{site.role}&quot;</span>,
                  {"\n  "}
                  <span className="tok-key">alias</span>:{" "}
                  <span className="tok-str">&quot;{site.alias}&quot;</span>,
                  {"\n  "}
                  <span className="tok-key">experience</span>:{" "}
                  <span className="tok-str">&quot;2+ years&quot;</span>,
                  {"\n  "}
                  <span className="tok-key">stack</span>: [
                  <span className="tok-str">&quot;React&quot;</span>,{" "}
                  <span className="tok-str">&quot;Next.js&quot;</span>,{" "}
                  <span className="tok-str">&quot;TypeScript&quot;</span>,{" "}
                  <span className="tok-str">&quot;Node.js&quot;</span>],
                  {"\n  "}
                  <span className="tok-key">focus</span>: [
                  <span className="tok-str">&quot;Performance&quot;</span>,{" "}
                  <span className="tok-str">&quot;Design Systems&quot;</span>,{" "}
                  <span className="tok-str">&quot;DX&quot;</span>],
                  {"\n  "}
                  <span className="tok-key">usersServed</span>:{" "}
                  <span className="tok-num">2000</span>,
                  {"\n  "}
                  <span className="tok-key">openToRelocation</span>:{" "}
                  <span className="tok-kw">true</span>,
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
