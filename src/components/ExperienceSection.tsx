import Image from "next/image";
import { experiences, type Experience } from "@data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader, Tag } from "./ui";

function TimelineDot({ current }: { current?: boolean }) {
  if (current) {
    return (
      <span className="absolute left-0 top-1.5 h-[13px] w-[13px] rounded-full bg-accent shadow-[0_0_0_4px_#0a0a0c,0_0_14px_rgb(var(--accent)/0.7)]" />
    );
  }
  return (
    <span className="absolute left-0 top-1.5 h-[13px] w-[13px] rounded-full border-2 border-[#3a4048] bg-[#23262d] shadow-[0_0_0_4px_#0a0a0c]" />
  );
}

function ExperienceItem({ exp }: { exp: Experience }) {
  return (
    <Reveal className="relative pl-[42px]">
      <TimelineDot current={exp.current} />

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2.5">
        <h3 className="text-[clamp(1.35rem,2.7vw,1.75rem)] font-semibold">
          {exp.company}
        </h3>
        {exp.current && (
          <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/[18%] px-2.5 py-[3px] font-mono text-[11px] tracking-[.04em] text-[#cdd6ff]">
            현재 재직 중
          </span>
        )}
        <span className="font-mono text-[13px] text-neutral-500">{exp.period}</span>
      </div>

      {exp.role && <p className="mt-2 text-[15px] text-neutral-400">{exp.role}</p>}

      {exp.description && (
        <p className="mt-2.5 text-[15px] leading-[1.65] text-neutral-300">
          {exp.description}{" "}
          {exp.links?.map((l) => (
            <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-accent no-underline">
              {l.label}
            </a>
          ))}
        </p>
      )}

      {exp.points && (
        <ul className="mt-2.5 list-disc pl-[18px] text-[14.5px] leading-[1.75] text-neutral-300">
          {exp.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}

      {exp.subProjects && (
        <div className="mt-[22px] flex flex-col gap-[22px]">
          {exp.subProjects.map((sp) => (
            <div key={sp.title} className="rounded-xl border border-white/[7%] bg-white/[2.5%] px-[22px] py-5">
              <h4 className="text-[1.05rem] font-semibold text-neutral-200">
                {sp.title}
                {sp.subtitle && (
                  <span className="text-[0.9em] font-normal text-neutral-500"> · {sp.subtitle}</span>
                )}
              </h4>
              <ul className="mt-3.5 list-disc pl-[18px] text-[14.5px] leading-[1.75] text-neutral-300">
                {sp.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {sp.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {exp.image && (
        <div className="mt-4 overflow-hidden rounded-xl border border-white/[7%]">
          <Image
            src={exp.image}
            alt={`${exp.company} 사진`}
            width={640}
            height={360}
            className="w-full object-cover"
          />
        </div>
      )}

      {exp.youtube && (
        <div className="mt-4 overflow-hidden rounded-xl border border-white/[7%]">
          <iframe
            src={`https://www.youtube.com/embed/${exp.youtube}`}
            title={`${exp.company} 영상`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          />
        </div>
      )}

      {exp.tags && (
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}
    </Reveal>
  );
}

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="px-[clamp(20px,5vw,80px)] py-[clamp(80px,12vh,150px)] scroll-mt-[72px]"
    >
      <div className="mx-auto max-w-[1080px]">
        <Reveal>
          <SectionHeader eyebrow="01 — Experience" title="경력 & 학력" />
        </Reveal>

        <div className="relative mt-[58px] flex flex-col gap-[46px]">
          <div className="absolute left-1.5 top-2.5 bottom-2.5 w-px bg-white/[9%]" />
          {experiences.map((exp) => (
            <ExperienceItem key={exp.company} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
