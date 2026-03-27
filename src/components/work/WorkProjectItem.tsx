interface Props {
  title: string;
  stacks: React.ReactNode[];
  desc: React.ReactNode;
}

export default function WorkProjectItem({ title, stacks, desc }: Props) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-5 shadow-[0_2px_12px_rgba(19,27,46,0.06)] flex flex-col gap-3">
      {title && (
        <div className="font-headline font-semibold text-base text-on-surface">
          {title}
        </div>
      )}
      {stacks.length > 0 && (
        <div className="flex flex-wrap gap-1.5">{stacks}</div>
      )}
      <div className="text-secondary text-sm leading-relaxed">{desc}</div>
    </div>
  );
}
