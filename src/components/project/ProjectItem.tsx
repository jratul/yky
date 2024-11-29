import Link from "next/link";
import { LinkIcon } from "@heroicons/react/20/solid";
import Motion from "@components/Motion";
import { Project } from "@models/project";

interface Props {
  project: Project;
}

export default function ProjectItem({ project }: Props) {
  return (
    <Motion className="flex flex-col gap-2 shadow-lg mx-1 my-4 p-8 border rounded">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl md:text-3xl">{project.title}</div>
        <div className="text-slate-600">{project.period}</div>
      </div>
      <div className="flex justify-start items-center gap-2">
        {project.github && (
          <Link href={project.github} target="_blank">
            <img src="/images/github.png" alt="github" className="w-10 h-10" />
          </Link>
        )}
        {project.link && (
          <Link href={project.link} target="_blank">
            <LinkIcon className="w-10 h-10" />
          </Link>
        )}
      </div>
      <div className="flex flex-wrap gap-1">{project.stacks}</div>
      <div className="my-2 border rounded">{project.hero}</div>
      <div className="text-slate-700 text-sm md:text-lg">{project.desc}</div>
    </Motion>
  );
}
