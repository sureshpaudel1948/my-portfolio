import { ArrowRight, Download, MapPin, Github, Linkedin } from "lucide-react";
import { site } from "@/lib/site";

const stats = [
  { value: "2+", label: "years_experience" },
  { value: "2,000+", label: "active_users_served" },
  { value: "70%", label: "faster_content_updates" },
  { value: "3+", label: "products_on_shared_ui" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-10 pt-28 md:justify-center md:pb-16"
    >
      {/* Background photo */}
      <img
        src={site.images.heroBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[68%_center] md:object-[85%_center]"
      />
      {/* Overlays for legibility in both themes */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-background via-background/75 to-background/20 md:bg-gradient-to-r md:from-background md:via-background/85 md:to-background/0" />
      <div className="absolute inset-x-0 bottom-0 -z-20 h-40 bg-gradient-to-t from-background to-transparent" />
      <div className="bg-grid mask-radial absolute inset-y-0 left-0 -z-10 w-full md:w-3/5" />
      <div className="absolute -left-40 top-1/4 -z-10 h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[120px]" />

      <div className="container-narrow">
        <div className="max-w-2xl">
          <div className="animate-hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-foreground/80 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities &amp; relocation
          </div>

          <p
            className="animate-hero-in mb-3 font-mono text-sm text-muted-foreground"
            style={{ animationDelay: "40ms" }}
          >
            <span className="text-emerald-600 dark:text-emerald-400">anupam@dev</span>
            <span>:</span>
            <span className="text-primary">~</span>
            <span>$ </span>
            <span className="caret text-foreground">whoami</span>
          </p>

          <h1
            className="animate-hero-in text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            {site.name}
            <span className="mt-2 block text-gradient">
              Building fast, scalable web products.
            </span>
          </h1>

          <p
            className="animate-hero-in mt-4 font-mono text-xs text-muted-foreground sm:text-sm"
            style={{ animationDelay: "120ms" }}
          >
            {"// also known as "}
            <span className="text-foreground/90">{site.alias}</span>
          </p>

          <p
            className="animate-hero-in mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "160ms" }}
          >
            {site.role} with 2+ years of experience shipping production
            applications with{" "}
            <span className="font-medium text-foreground">React</span>,{" "}
            <span className="font-medium text-foreground">Next.js</span>,{" "}
            <span className="font-medium text-foreground">TypeScript</span> and{" "}
            <span className="font-medium text-foreground">Node.js</span>.
          </p>

          <div
            className="animate-hero-in mt-4 flex items-center gap-2 font-mono text-xs text-muted-foreground sm:text-sm"
            style={{ animationDelay: "200ms" }}
          >
            <MapPin className="h-4 w-4 text-accent" />
            {site.location}
          </div>

          <div
            className="animate-hero-in mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "260ms" }}
          >
            <a href="#projects" className="btn-primary">
              View my work
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={site.cv.href}
              download={site.cv.downloadName}
              className="btn-ghost"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
            <div className="ml-1 flex items-center gap-2">
              <a
                href={site.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="icon-btn !p-3"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="icon-btn !p-3"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <dl
          className="animate-hero-in mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border backdrop-blur-xl md:mt-20 md:grid-cols-4"
          style={{ animationDelay: "340ms" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background/80 px-5 py-5 md:px-6">
              <dt className="truncate font-mono text-[11px] text-muted-foreground md:text-xs">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold text-foreground md:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
