import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="font-mono text-[11px] text-neutral-400 px-2.5 py-1 rounded-md bg-white/[4%] border border-white/[8%]">
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
