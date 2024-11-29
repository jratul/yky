import ProjectItem from "@components/project/ProjectItem";
import { projects } from "@data/projects";

export default function Project() {
  return (
    <div>
      {projects.map((project) => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </div>
  );
}
