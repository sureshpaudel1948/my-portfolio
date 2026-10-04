import {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  FlaskConical,
  Wrench,
  Container,
  BarChart3,
  Bot,
  GitBranch,
  Palette,
  type LucideIcon,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SkillCategory = {
  title: string;
  path: string;
  icon: LucideIcon;
  skills: string[];
  featured?: boolean;
  note?: string;
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    path: "src/frontend",
    icon: LayoutTemplate,
    featured: true,
    note: "Component-driven UIs, design systems and micro-frontend architecture for products at scale.",
    skills: [
      "React.js",
      "Next.js",
      "Gatsby",
      "HTML5",
      "CSS3",
      "SCSS (BEM, SMACSS)",
      "MUI",
      "Micro-frontends",
      "Webpack Module Federation",
    ],
  },
  {
    title: "Languages",
    path: "src/languages",
    icon: Code2,
    skills: ["JavaScript", "TypeScript", "ECMAScript", "Python"],
  },
  {
    title: "Backend",
    path: "src/backend",
    icon: Server,
    skills: ["Node.js", "Express", "NestJS", "REST", "GraphQL", "WebSockets"],
  },
  {
    title: "Data, Search & Messaging",
    path: "src/data",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "Elasticsearch", "Lucene Query"],
  },
  {
    title: "Testing",
    path: "tests/",
    icon: FlaskConical,
    skills: ["Jest", "React Testing Library", "Mocha", "Chai", "Enzyme"],
  },
  {
    title: "Build Tools",
    path: "config/build",
    icon: Wrench,
    skills: ["Webpack", "Babel", "Gulp", "Grunt"],
  },
  {
    title: "DevOps & CI/CD",
    path: ".github/workflows",
    icon: Container,
    skills: ["Docker", "Kubernetes", "GitHub Actions", "GitLab CI", "Linux", "Bash"],
  },
  {
    title: "Visualization",
    path: "src/charts",
    icon: BarChart3,
    skills: ["D3.js", "Chart.js", "Canvas"],
  },
  {
    title: "AI Integration",
    path: "src/ai",
    icon: Bot,
    skills: ["MCP Servers", "Agentic AI workflows", "OpenAPI integrations", "Search-backed AI"],
  },
  {
    title: "Version Control & PM",
    path: ".git",
    icon: GitBranch,
    skills: ["Git", "GitHub", "GitLab", "Jira"],
  },
  {
    title: "UI/UX Design",
    path: "design/",
    icon: Palette,
    skills: ["Figma", "Canva", "Photoshop"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section overflow-hidden">
      <div className="bg-dots mask-fade-y pointer-events-none absolute inset-0 -z-10 opacity-60" />
      <div className="container-narrow">
        <SectionHeading
          index="02"
          eyebrow="skills"
          title="Tech stack & expertise"
          description="Tools and technologies I use to design, build, test and ship production software."
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Reveal
                key={category.title}
                delay={(index % 3) * 70}
                className={cn(
                  "glass glass-hover group flex flex-col p-6",
                  category.featured &&
                    "relative overflow-hidden md:col-span-2 lg:col-span-2"
                )}
              >
                {category.featured && (
                  <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 blur-3xl" />
                )}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <span className="hidden font-mono text-[11px] text-muted-foreground/80 sm:block">
                    {category.path}
                  </span>
                </div>
                {category.note && (
                  <p className="relative mb-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
                    {category.note}
                  </p>
                )}
                <div className="relative mt-auto flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="chip group-hover:border-primary/30 group-hover:text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
