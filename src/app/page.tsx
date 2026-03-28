import Motion from "@components/Motion";
import Link from "next/link";

export default function Home() {
  return (
    <section className="py-16">
      <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-label font-semibold uppercase tracking-widest mb-6">
        Web Frontend Developer
      </span>

      <h1 className="font-headline font-extrabold text-6xl md:text-8xl tracking-tighter text-on-surface leading-[1.05] mb-6">
        유건열
        <br />
        <span className="text-primary">Keonyeol Yu.</span>
      </h1>

      <Motion delay={0.1}>
        <div className="flex flex-col sm:flex-row gap-4 text-sm font-label font-semibold">
          <a
            href="mailto:jratul3@gmail.com"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-base">mail</span>
            jratul3@gmail.com
          </a>
          <Link
            href="https://github.com/jratul"
            target="_blank"
            className="flex items-center gap-2 text-secondary hover:text-primary transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-base">
              code_blocks
            </span>
            github.com/jratul
          </Link>
        </div>
      </Motion>
    </section>
  );
}
