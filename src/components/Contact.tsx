import { profile } from "@data/portfolio";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/[5%] px-[clamp(20px,5vw,80px)] py-[clamp(90px,14vh,170px)] scroll-mt-[72px]"
    >
      <div className="pointer-events-none absolute -bottom-[40%] left-1/2 h-[500px] w-[min(800px,120vw)] -translate-x-1/2 blur-[20px] [background:radial-gradient(ellipse_at_center,rgb(var(--accent)/0.13),transparent_70%)]" />

      <div className="relative mx-auto max-w-[900px] text-center">
        <Reveal as="p" className="font-mono text-[13px] uppercase tracking-[0.2em] text-accent">
          03 — Contact
        </Reveal>
        <Reveal as="h2" delay={60} className="mt-3.5 text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.2] tracking-[-0.025em]">
          언제든 편하게 연락 주세요.
        </Reveal>
        <Reveal as="p" delay={120} className="mt-[18px] text-base text-neutral-400">
          새로운 기회와 함께 만들 좋은 제품을 기다리고 있어요.
        </Reveal>

        <Reveal delay={180}>
          <a
            href={`mailto:${profile.email}`}
            className="mt-[38px] inline-block border-b-2 border-transparent text-[clamp(1.7rem,5.5vw,3.3rem)] font-bold tracking-[-0.02em] text-neutral-200 transition-colors hover:border-accent hover:text-accent"
          >
            {profile.email}
          </a>
        </Reveal>

        <Reveal delay={240} className="mt-9 flex justify-center gap-3.5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-[10px] border border-white/10 bg-white/[3%] px-5 py-[11px] font-mono text-sm text-neutral-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
          >
            {profile.githubLabel} ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2.5 border-t border-white/[6%] px-[clamp(20px,5vw,80px)] py-[34px]">
      <span className="font-mono text-[13px] text-neutral-600">
        © 2026 유건열 · Keonyeol Yu
      </span>
      <a href="#top" className="font-mono text-[13px] text-neutral-500 transition-colors hover:text-accent">
        맨 위로 ↑
      </a>
    </footer>
  );
}
