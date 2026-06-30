import Image from "next/image";
import { projects, type Project } from "@data/portfolio";
import { Reveal } from "./Reveal";
import { SectionHeader, Tag } from "./ui";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal
      as="article"
      className="group flex flex-col overflow-hidden rounded-2xl border border-white/[7%] bg-[#101216] transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[0_18px_50px_-20px_rgb(var(--accent)/0.4)]"
    >
      <div className="relative aspect-[16/10] w-full border-b border-white/[6%] bg-[#0e1014]">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} 스크린샷`}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover"
          />
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3.5 p-[22px]">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[1.3rem] font-semibold">{project.title}</h3>
          <span className="whitespace-nowrap font-mono text-xs text-neutral-500">
            {project.date}
          </span>
        </div>

        {project.points && (
          <ul className="list-disc pl-[17px] text-sm leading-[1.7] text-neutral-300">
            {project.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        )}
        {project.description && (
          <p className="text-sm leading-[1.7] text-neutral-300">{project.description}</p>
        )}

        <div className="mt-auto flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="flex gap-4 border-t border-white/[6%] pt-1.5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-neutral-300 transition-colors hover:text-accent">
              GitHub ↗
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="font-mono text-[13px] text-neutral-300 transition-colors hover:text-accent">
              Live ↗
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export function ProjectsSection() {
  return (
    <section
      id="work"
      className="border-t border-white/[5%] px-[clamp(20px,5vw,80px)] py-[clamp(80px,12vh,150px)] scroll-mt-[72px]"
    >
      <div className="mx-auto max-w-[1180px]">
        <Reveal>
          <SectionHeader eyebrow="02 — Selected Works" title="프로젝트" />
        </Reveal>

        <div className="mt-[58px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
