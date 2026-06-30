const NAV = [
  { label: "경력", href: "#experience" },
  { label: "프로젝트", href: "#work" },
];

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-4 px-[clamp(20px,5vw,80px)] py-4 backdrop-blur-xl bg-[#0a0a0c]/55 border-b border-white/6">
      <a
        href="#top"
        className="font-mono text-[15px] font-medium tracking-[.01em] text-neutral-200"
      >
        <span className="text-accent">❯</span> yky.dev
      </a>
      <nav className="flex items-center gap-[clamp(16px,2.6vw,34px)]">
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            className="text-sm text-neutral-400 transition-colors hover:text-neutral-200"
          >
            {n.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
