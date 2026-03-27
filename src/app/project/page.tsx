import ProjectCard from "@components/project/ProjectCard";
import { projects } from "@data/projects";

// 7개 프로젝트 bento 레이아웃 col-span 배정
// Row 1: [8] [4]
// Row 2: [7] [5]
// Row 3: [4] [4] [4]
const colSpans = [
  "md:col-span-8",
  "md:col-span-4",
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
];

export default function ProjectPage() {
  return (
    <div>
      {/* 헤더 */}
      <div className="mb-12">
        <span className="text-primary font-label text-xs font-semibold uppercase tracking-widest mb-3 block">
          Selected Works
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface">
          Portfolio
        </h1>
      </div>

      {/* Bento 그리드 */}
      <div className="grid grid-cols-12 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            colSpan={colSpans[index] ?? "md:col-span-6"}
          />
        ))}
      </div>
    </div>
  );
}
