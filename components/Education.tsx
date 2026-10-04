import { Award, GraduationCap, School } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const degree = {
  title: "B.Sc. Computer Science & Information Technology (CSIT)",
  institution: "Madan Bhandari Memorial College",
  university: "Tribhuvan University",
  period: "2021 — 2025",
  description:
    "Comprehensive computer science curriculum integrating theory and practice: data structures & algorithms, software engineering, databases, networking, web technologies and AI.",
};

const schooling = [
  { title: "+2 Science", institution: "Prativa Secondary School, Pokhara", period: "2020" },
  { title: "SEE", institution: "Beni Community Secondary School, Myagdi", period: "2018" },
];

const certifications = [
  {
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University",
    date: "Nov 2024",
    credential: "XTCSIKYUN8Q8",
  },
  { title: "Frontend Development", issuer: "CodSoft", date: "Oct 2023", credential: "d9fabc3" },
  { title: "UI/UX Designing Workshop", issuer: "Madan Bhandari Memorial College", date: "2023" },
  { title: "JS/React Workshop", issuer: "Madan Bhandari Memorial College", date: "2023" },
  {
    title: "Internet Fundamentals",
    issuer: "codedamn",
    date: "Nov 2022",
    credential: "186388673a0b30e43e0588a7055e1477a3bcdc0a",
  },
  { title: "Frontend Development", issuer: "Great Learning", date: "Jul 2022" },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-narrow">
        <SectionHeading
          index="05"
          eyebrow="education"
          title="Education & certifications"
          description="A strong computer science foundation, continuously sharpened through hands-on learning."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal className="glass relative overflow-hidden p-6 md:p-8 lg:col-span-3">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 blur-3xl" />
            <div className="relative">
              <div className="mb-6 flex items-center justify-between gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <span className="chip">{degree.period}</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground md:text-2xl">
                {degree.title}
              </h3>
              <p className="mt-2 font-medium text-primary">{degree.institution}</p>
              <p className="font-mono text-sm text-muted-foreground">{degree.university}</p>
              <p className="mt-5 leading-relaxed text-muted-foreground">{degree.description}</p>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {schooling.map((item, index) => (
              <Reveal
                key={item.title}
                delay={80 + index * 80}
                className="glass glass-hover flex flex-1 items-start gap-4 p-6"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-muted text-muted-foreground">
                  <School className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">· {item.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.institution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mb-6 mt-16 flex items-center gap-3">
          <Award className="h-5 w-5 text-accent" />
          <h3 className="text-xl font-semibold text-foreground md:text-2xl">Certifications</h3>
          <span className="h-px flex-1 bg-border" />
          <span className="font-mono text-xs text-muted-foreground">
            {certifications.length} items
          </span>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <Reveal
              key={`${cert.title}-${cert.issuer}`}
              delay={(index % 3) * 70}
              className="glass glass-hover flex flex-col p-5"
            >
              <div className="mb-3 flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{cert.date}</span>
                {cert.credential && (
                  <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-emerald-600 dark:text-emerald-400">
                    verified
                  </span>
                )}
              </div>
              <h4 className="font-semibold leading-snug text-foreground">{cert.title}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{cert.issuer}</p>
              {cert.credential && (
                <p className="mt-4 truncate rounded-md border border-border bg-muted/60 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground" title={cert.credential}>
                  id: {cert.credential}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
