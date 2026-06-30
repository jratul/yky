import type { ReactNode } from "react";

const TECH_COLORS: Record<string, { bg: string; fg: string }> = {
  "React":             { bg: "rgba(97,218,251,.12)",  fg: "#61dafb" },
  "Next.js":           { bg: "rgba(255,255,255,.08)", fg: "#e2e8f0" },
  "TypeScript":        { bg: "rgba(49,120,198,.15)",  fg: "#60a5fa" },
  "JavaScript":        { bg: "rgba(247,223,30,.11)",  fg: "#eab308" },
  "Tailwind":          { bg: "rgba(6,182,212,.12)",   fg: "#22d3ee" },
  "shadcn/ui":         { bg: "rgba(255,255,255,.08)", fg: "#e2e8f0" },
  "React Query":       { bg: "rgba(255,65,84,.12)",   fg: "#ff6b7a" },
  "Firebase":          { bg: "rgba(255,196,0,.11)",   fg: "#fbbf24" },
  "AWS S3":            { bg: "rgba(255,153,0,.12)",   fg: "#fb923c" },
  "styled-components": { bg: "rgba(219,112,147,.12)", fg: "#db7093" },
  "MongoDB":           { bg: "rgba(71,162,72,.12)",   fg: "#4ade80" },
  "Node.js":           { bg: "rgba(51,153,51,.12)",   fg: "#4ade80" },
  "Electron":          { bg: "rgba(71,132,143,.12)",  fg: "#5eead4" },
  "MUI":               { bg: "rgba(0,127,255,.12)",   fg: "#60a5fa" },
  "Qt":                { bg: "rgba(65,205,82,.12)",   fg: "#4ade80" },
  "C++":               { bg: "rgba(0,89,156,.14)",    fg: "#7eb3f5" },
  "Android":           { bg: "rgba(61,220,132,.12)",  fg: "#3ddc84" },
  "Java":              { bg: "rgba(237,139,0,.12)",   fg: "#f59e0b" },
  "HTML5":             { bg: "rgba(227,79,38,.12)",   fg: "#fb923c" },
  "jQuery":            { bg: "rgba(7,105,173,.13)",   fg: "#60a5fa" },
};

export function Tag({ children }: { children: ReactNode }) {
  const key = typeof children === "string" ? children : "";
  const color = TECH_COLORS[key];

  return (
    <span
      className="font-mono text-[11px] px-2.5 py-1 rounded-md border"
      style={
        color
          ? {
              backgroundColor: color.bg,
              color: color.fg,
              borderColor: `${color.fg}30`,
            }
          : {
              backgroundColor: "rgba(255,255,255,.04)",
              color: "#9aa0a8",
              borderColor: "rgba(255,255,255,.08)",
            }
      }
    >
      {children}
    </span>
  );
}

export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <>
      <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-2.5 text-[clamp(2.1rem,4.4vw,3.1rem)] font-bold tracking-[-0.025em]">
        {title}
      </h2>
    </>
  );
}
