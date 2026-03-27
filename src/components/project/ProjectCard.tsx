import Link from "next/link";
import Motion from "@components/Motion";
import { Project } from "@models/project";
import clsx from "clsx";

interface Props {
  project: Project;
  colSpan?: string; // tailwind col-span class (e.g. "md:col-span-8")
}

export default function ProjectCard({ project, colSpan }: Props) {
  return (
    <Motion
      className={clsx(
        "col-span-12 group",
        colSpan
      )}
    >
      <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(19,27,46,0.07)] hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
        {/* Hero */}
        <div className="overflow-hidden bg-surface-container">
          {project.hero}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col gap-3 flex-1">
          {/* Stacks */}
          <div className="flex flex-wrap gap-1.5">
            {project.stacks}
          </div>

          {/* Title + period */}
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="font-headline font-bold text-xl text-on-surface group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <span className="text-xs text-secondary shrink-0">{project.period}</span>
          </div>

          {/* Description */}
          <div className="text-secondary text-sm leading-relaxed flex-1">
            {project.desc}
          </div>

          {/* Links */}
          {(project.github || project.link) && (
            <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/30">
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1.5 text-xs font-label font-semibold text-secondary hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base">code</span>
                  GitHub
                </Link>
              )}
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="flex items-center gap-1.5 text-xs font-label font-semibold text-secondary hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-base">open_in_new</span>
                  Live
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </Motion>
  );
}
