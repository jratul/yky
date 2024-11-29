import Motion from "@components/Motion";

interface Props {
  title: string;
  stacks: React.ReactNode[];
  desc: React.ReactNode;
}

export default function WorkProjectItem({ title, stacks, desc }: Props) {
  return (
    <Motion>
      <div className="rounded mx-1 my-2 p-4 shadow flex flex-col gap-2">
        <div className="font-semibold text-lg">{title}</div>
        <div className="flex flex-wrap gap-1">{stacks}</div>
        <div>{desc}</div>
      </div>
    </Motion>
  );
}
