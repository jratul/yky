import Motion from "@components/Motion";

interface Props {
  title: string;
  period: string;
  job: string;
  workProjects: React.ReactNode[];
}

export default function WorkItem({ title, period, job, workProjects }: Props) {
  return (
    <Motion className="relative pl-6 border-l-2 border-outline-variant/40 ml-3">
      {/* 타임라인 dot */}
      <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary-fixed border-2 border-primary" />

      <div className="mb-4">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-headline font-bold text-2xl md:text-3xl text-on-surface">
            {title}
          </h2>
          <span className="text-xs font-label font-semibold text-secondary uppercase tracking-widest">
            {period}
          </span>
        </div>
        {job && (
          <div className="mt-1 text-sm font-label font-semibold text-primary uppercase tracking-wider">
            {job}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {workProjects.map((workProject) => workProject)}
      </div>
    </Motion>
  );
}
