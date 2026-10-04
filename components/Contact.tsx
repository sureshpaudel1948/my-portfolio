import {
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

type ContactItem = {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
};

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+977 9826170721 / 9748429924",
    href: "tel:+9779826170721",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: `${site.alias} · in/suresh-paudel`,
    href: site.socials.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@sureshpaudel1948",
    href: site.socials.github,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tinkune, Kathmandu, Nepal",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-narrow">
        <SectionHeading
          index="06"
          eyebrow="contact"
          title="Let's build something great."
          description="I'm open to full-time roles, collaborations and freelance projects: locally, remotely or abroad. My inbox is always open."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
          {/* CTA terminal card */}
          <Reveal className="glass relative min-w-0 overflow-hidden lg:col-span-3">
            <div className="window-bar">
              <span className="window-dot bg-red-400" />
              <span className="window-dot bg-amber-400" />
              <span className="window-dot bg-emerald-400" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                zsh — hire-me
              </span>
            </div>
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-500/25 to-cyan-400/20 blur-3xl" />
            <div className="relative p-6 md:p-8">
              <div className="space-y-2 font-mono text-[13px] leading-6 sm:text-sm">
                <p>
                  <span className="text-emerald-600 dark:text-emerald-400">➜</span>{" "}
                  <span className="text-primary">~</span>{" "}
                  <span className="text-foreground">npx hire anupam</span>
                </p>
                <p className="text-muted-foreground">
                  ✔ Checking availability…{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">available</span>
                </p>
                <p className="text-muted-foreground">
                  ✔ Relocation…{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">open to Europe</span>
                </p>
                <p className="text-muted-foreground">
                  ✔ Response time…{" "}
                  <span className="text-emerald-600 dark:text-emerald-400">&lt; 24h</span>
                </p>
                <p>
                  <span className="text-emerald-600 dark:text-emerald-400">➜</span>{" "}
                  <span className="text-primary">~</span>{" "}
                  <span className="caret text-foreground" />
                </p>
              </div>

              <h3 className="mt-8 text-2xl font-semibold text-foreground md:text-3xl">
                Have a role or project in mind?
              </h3>
              <p className="mt-3 max-w-md text-muted-foreground">
                Send me a message or grab my CV. I&apos;ll get back to you as
                soon as possible.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${site.email}`} className="btn-primary">
                  <Send className="h-4 w-4" />
                  Say hello
                </a>
                <a
                  href={site.cv.href}
                  download={site.cv.downloadName}
                  className="btn-ghost"
                >
                  <Download className="h-4 w-4" />
                  Download CV
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact details */}
          <div className="flex min-w-0 flex-col gap-3 lg:col-span-2">
            {contactItems.map((item, index) => {
              const Icon = item.icon;
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="block truncate font-medium text-foreground">
                      {item.value}
                    </span>
                  </span>
                  {item.href && (
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  )}
                </>
              );

              return (
                <Reveal key={item.label} delay={index * 60}>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="glass glass-hover group flex items-center gap-4 p-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="glass flex items-center gap-4 p-4">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
