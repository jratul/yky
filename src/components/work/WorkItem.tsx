import Motion from "@components/Motion";

interface Props {
  title: string;
  period: string;
  job: string;
  workProjects: React.ReactNode[];
}

export default function WorkItem({ title, period, job, workProjects }: Props) {
  return (
    <Motion className="my-10 mx-1">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">{title}</div>
        <div className="text-slate-600">{period}</div>
      </div>
      <div className="text-blue-600">{job}</div>
      {workProjects.map((workProject) => workProject)}
    </Motion>
  );
}
