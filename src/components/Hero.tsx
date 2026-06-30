import { profile } from "@data/portfolio";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-[clamp(20px,5vw,80px)] pb-[90px] pt-[130px]"
    >
      {/* 포인트 컬러 글로우 */}
      <div className="pointer-events-none absolute -top-[10%] left-1/2 h-[600px] w-[min(900px,120vw)] -translate-x-1/2 animate-[glowPulse_7s_ease-in-out_infinite] blur-[20px] [background:radial-gradient(ellipse_at_center,rgb(var(--accent)/0.16),transparent_70%)]" />
      {/* 그리드 */}
      <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,.022)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.022)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_35%,#000_30%,transparent_75%)]" />

      <div className="relative mx-auto w-full max-w-[1080px]">
        <Reveal as="p" className="font-mono text-[13px] uppercase tracking-[0.22em] text-accent">
          {profile.role}
        </Reveal>
        <Reveal as="h1" delay={80} className="mt-0 text-[clamp(3.2rem,11vw,7.5rem)] font-bold leading-[0.95] tracking-[-0.035em]">
          {profile.nameKo}
        </Reveal>
        <Reveal as="p" delay={140} className="mt-3.5 font-mono text-[clamp(1rem,2.2vw,1.5rem)] tracking-[0.02em] text-neutral-500">
          {profile.nameEn}
        </Reveal>
        <Reveal delay={220} className="mt-10 flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-[10px] border border-accent/45 bg-accent/[16%] px-[22px] py-[13px] text-[15px] font-medium text-neutral-200 transition hover:-translate-y-0.5 hover:bg-accent/[26%]"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/10 bg-white/[3%] px-[22px] py-[13px] font-mono text-[15px] font-medium text-neutral-300 transition hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
          >
            {profile.githubLabel} ↗
          </a>
        </Reveal>
      </div>

      {/* 스크롤 큐 */}
      <div className="absolute bottom-[30px] left-1/2 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="font-mono text-[11px] tracking-[0.2em] text-neutral-600">SCROLL</span>
        <span className="animate-[bobY_2.2s_ease-in-out_infinite] text-lg text-accent">↓</span>
      </div>
    </section>
  );
}
