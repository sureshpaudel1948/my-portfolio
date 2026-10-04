"use client";

import { useEffect, useState } from "react";
import { ArrowUp, CheckCircle2, GitBranch } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  // Read in the visitor's browser so the year stays current without a rebuild.
  const [year, setYear] = useState(() => new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="mt-12 border-t border-border bg-card/40">
      <div className="container-narrow flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
        <div className="flex items-center gap-3">
          <img
            src={site.images.profile}
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full object-cover object-top ring-2 ring-border"
          />
          <div className="leading-tight">
            <p className="font-display font-semibold text-foreground">{site.name}</p>
            <p className="font-mono text-xs text-muted-foreground">{site.role}</p>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          © <span suppressHydrationWarning>{year}</span> {site.name}. All Rights
          Reserved.
        </p>

        <a href="#home" className="icon-btn" aria-label="Back to top">
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>

      {/* IDE-style status bar */}
      <div className="border-t border-border bg-muted/50">
        <div className="container-narrow flex items-center justify-between gap-4 py-2 font-mono text-[11px] text-muted-foreground">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <GitBranch className="h-3.5 w-3.5 text-primary" />
              main
            </span>
            <span className="hidden items-center gap-1.5 sm:flex">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
              0 problems
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">TypeScript React</span>
            <span>Next.js · Tailwind CSS</span>
            <span className="hidden sm:inline">UTF-8</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
