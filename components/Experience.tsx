import { Calendar, ChevronRight, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const experiences = [
  {
    hash: "c1tyw4l",
    current: true,
    role: "Frontend Developer",
    company: "City Wallet Private Limited",
    location: "Kathmandu, Nepal",
    period: "Jan 2024 — Present",
    highlights: [
      "Built and shipped production React and Next.js features serving 2,000+ active users, with a TypeScript codebase tested using Jest and React Testing Library.",
      "Developed a CMS portal with Node.js and PostgreSQL that reduced content update time by 70% for non-technical teams.",
      "Built a TDS Report Generator automating tax compliance workflows, eliminating manual data entry and cutting processing time from hours to minutes.",
      "Created a reusable MUI component library with SCSS (BEM), adopted across 3+ internal products for design consistency.",
      "Set up and maintained CI/CD pipelines with GitHub Actions, reducing deployment friction and enabling faster release cycles.",
      "Collaborated with designers and backend engineers in Jira-managed sprints to ship features on tight deadlines.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "MUI", "Jest", "GitHub Actions"],
  },
  {
    hash: "5w1f7st",
    current: false,
    role: "Frontend Developer Intern",
    company: "SwiftStack Solutions Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "Jul 2022 — Dec 2023",
    highlights: [
      "Developed frontend applications using React.js and Gatsby with HTML5, CSS3 and SCSS (SMACSS), contributing to the company-wide JavaScript design system.",
      "Worked on Node.js and Express backend tasks, integrating frontend applications with REST and GraphQL APIs using OpenAPI specifications.",
      "Configured build pipelines using Webpack and Babel; worked in Linux environments with Bash scripting for development automation.",
      "Implemented WebSocket-based real-time features for an internal dashboard, using MongoDB and PostgreSQL for data persistence.",
      "Managed version control and workflows with Git, GitHub and Jira; participated in peer code reviews to ensure code quality.",
    ],
    stack: ["React", "Gatsby", "SCSS", "Node.js", "Express", "GraphQL", "Webpack", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-narrow">
        <SectionHeading
          index="03"
          eyebrow="experience"
          title="Where I've shipped code"
          description="A log of the teams I've worked with and the impact I've delivered."
        />

        <div className="relative">
          {/* commit graph line */}
          <div className="absolute bottom-6 left-[11px] top-6 w-px bg-gradient-to-b from-primary via-accent/60 to-transparent md:left-[15px]" />

          <ol className="space-y-10">
            {experiences.map((exp, index) => (
              <Reveal as="li" key={exp.hash} delay={index * 80} className="relative pl-10 md:pl-14">
                <span
                  className={cn(
                    "absolute left-0 top-6 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-background md:h-8 md:w-8",
                    exp.current ? "border-primary" : "border-muted-foreground/40"
                  )}
                >
                  <span
                    className={cn(
                      "h-2 w-2 rounded-full md:h-2.5 md:w-2.5",
                      exp.current ? "bg-primary" : "bg-muted-foreground/50"
                    )}
                  />
                </span>

                <article className="glass glass-hover overflow-hidden">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b border-border bg-muted/40 px-5 py-2.5 font-mono text-xs">
                    <span className="text-amber-600 dark:text-amber-300">commit {exp.hash}</span>
                    {exp.current && (
                      <span className="text-muted-foreground">
                        (<span className="text-accent">HEAD</span> →{" "}
                        <span className="text-emerald-600 dark:text-emerald-400">main</span>)
                      </span>
                    )}
                    <span className="ml-auto flex items-center gap-1.5 text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="p-5 md:p-7">
                    <div className="mb-5 flex flex-wrap items-end justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                          {exp.role}
                        </h3>
                        <p className="mt-1 font-medium text-primary">{exp.company}</p>
                      </div>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.highlights.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                          <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                      {exp.stack.map((tech) => (
                        <span key={tech} className="chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
