"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-border bg-muted/70 p-1 backdrop-blur-md transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
    >
      <Sun className="absolute left-2 h-3.5 w-3.5 text-amber-500" aria-hidden />
      <Moon className="absolute right-2 h-3.5 w-3.5 text-indigo-300" aria-hidden />
      <span
        className={cn(
          "relative z-10 flex h-7 w-7 items-center justify-center rounded-full bg-card shadow-md ring-1 ring-border transition-transform duration-300 ease-out",
          isDark ? "translate-x-7" : "translate-x-0",
          !mounted && "opacity-0"
        )}
      >
        {isDark ? (
          <Moon className="h-3.5 w-3.5 text-indigo-400" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-amber-500" />
        )}
      </span>
    </button>
  );
}
