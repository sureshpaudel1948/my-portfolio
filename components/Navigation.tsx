"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    const sections = ["home", ...navLinks.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled || isMobileMenuOpen
          ? "border-b border-border/70 bg-background/75 py-3 backdrop-blur-xl"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-narrow flex items-center justify-between gap-4">
        <button
          onClick={() => scrollToSection("home")}
          className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Back to top"
        >
          <span className="relative block h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-indigo-400 to-cyan-300 p-[2px] transition-transform duration-300 group-hover:scale-105">
            <img
              src={site.images.profile}
              alt={site.name}
              className="h-full w-full rounded-full object-cover object-top"
            />
          </span>
          <span className="text-left leading-tight">
            <span className="block font-display text-base font-semibold text-foreground">
              {site.name}
            </span>
            <span className="block font-mono text-[11px] text-muted-foreground">
              ~/frontend-developer
            </span>
          </span>
        </button>

        <div className="hidden items-center gap-1 rounded-full border border-border bg-card/60 p-1 backdrop-blur-md lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                activeId === link.id
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.cv.href}
            download={site.cv.downloadName}
            className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="icon-btn lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="container-narrow lg:hidden">
          <div className="mt-4 flex h-[calc(100dvh-5rem)] flex-col gap-1 pb-8">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "animate-hero-in rounded-xl px-4 py-3 text-left font-display text-2xl font-semibold transition-colors",
                  activeId === link.id
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={site.cv.href}
              download={site.cv.downloadName}
              className="btn-primary mt-6 w-full"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
