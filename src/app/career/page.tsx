import Work from "@components/work/Work";

export default function WorkPage() {
  return (
    <div>
      <div className="mb-12">
        <span className="text-primary font-label text-xs font-semibold uppercase tracking-widest mb-3 block">
          Career & Education
        </span>
        <h1 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tight text-on-surface">
          Experience
        </h1>
      </div>
      <Work />
    </div>
  );
}
