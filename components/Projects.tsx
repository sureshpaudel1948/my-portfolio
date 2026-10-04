import { ArrowUpRight, Lock } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "CityPay — Corporate Website & CMS",
    description:
      "Corporate website and CMS serving 2,000+ active users, enabling non-technical staff to manage content and reducing update time by 70%.",
    highlights: [
      "Modular React component architecture with embedded maps and app download flows",
      "RESTful API endpoints with a PostgreSQL schema ensuring data integrity for financial content",
    ],
    stack: ["React.js", "Node.js", "PostgreSQL"],
    url: "https://citywallet.com.np",
    image: "/citypay.png",
  },
  {
    title: "Stellar HR Consultancy (Malta)",
    description:
      "International corporate website built with Next.js SSR and SSG, achieving sub-2s load times and improved search visibility.",
    highlights: [
      "SEO-structured pages with semantic HTML and rich metadata",
      "Delivered remotely with async Git collaboration, meeting every milestone",
    ],
    stack: ["Next.js", "React", "Git"],
    url: "https://sureshpaudel1948.github.io/bigedu-malta-cms/",
    image: "/stellar.png",
  },
  {
    title: "PSP Association Nepal",
    description:
      "Official website for the Payment Service Providers Association of Nepal, accessible across all modern browsers and devices.",
    highlights: [
      "Fully responsive layouts for consistent UX on mobile, tablet and desktop",
    ],
    stack: ["HTML", "CSS", "Bootstrap"],
    url: "https://pspan.org.np",
    image: "/psp.png",
  },
  {
    title: "Param Satya",
    description:
      "Engaging, fact-based landing page focused on clean visual hierarchy and responsive design.",
    highlights: ["Hand-crafted responsive layout with vanilla web technologies"],
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://sureshpaudel1948.github.io/CODSOFT-Web-Dev-Task-2-Landing-Page/",
    image: "/param.png",
  },
];

const displayUrl = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="bg-grid mask-fade-y pointer-events-none absolute inset-0 -z-10" />
      <div className="container-narrow">
        <SectionHeading
          index="04"
          eyebrow="projects"
          title="Selected work"
          description="Production websites and applications I've designed, built and deployed."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 90}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass glass-hover group flex h-full flex-col overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {/* Browser chrome */}
                <div className="window-bar">
                  <span className="window-dot bg-red-400" />
                  <span className="window-dot bg-amber-400" />
                  <span className="window-dot bg-emerald-400" />
                  <span className="ml-2 flex min-w-0 flex-1 items-center gap-1.5 rounded-md bg-background/70 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                    <Lock className="h-3 w-3 shrink-0" />
                    <span className="truncate">{displayUrl(project.url)}</span>
                  </span>
                </div>

                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition duration-300 group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                    {project.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                        <span className="font-mono text-accent">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {project.stack.map((tech) => (
                      <span key={tech} className="chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
