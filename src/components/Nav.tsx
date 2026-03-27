"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/career", label: "Experience" },
  { href: "/project", label: "Portfolio" },
];

const mobileNavItems = [
  { href: "/", label: "Home", icon: "home_app_logo" },
  { href: "/project", label: "Portfolio", icon: "layers" },
  { href: "/career", label: "Experience", icon: "timeline" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <>
      {/* 데스크탑 상단 헤더 */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(19,27,46,0.06)]">
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-xl">
              terminal
            </span>
            <span className="font-headline font-black text-lg text-on-surface uppercase tracking-tighter">
              yky.dev
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "font-headline font-bold text-base tracking-tight transition-colors duration-200 relative",
                    active
                      ? "text-primary after:content-[''] after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full"
                      : "text-secondary hover:text-primary"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* 모바일 하단 탭바 */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-3 bg-white/90 backdrop-blur-xl border-t border-outline-variant/30 shadow-[0_-4px_24px_rgba(19,27,46,0.06)]">
        {mobileNavItems.map(({ href, label, icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={clsx(
                "flex flex-col items-center gap-1 transition-all duration-200",
                active ? "text-primary scale-110" : "text-secondary"
              )}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={
                  active
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {icon}
              </span>
              <span className="font-label text-[10px] font-semibold uppercase tracking-widest">
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
