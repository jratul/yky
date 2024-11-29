"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <div className="top-0 z-10 sticky flex justify-center gap-4 backdrop-blur-md p-2 h-10 font-semibold text-base md:text-lg">
      <Link href="/" className={clsx(pathname === "/" && "text-blue-500")}>
        Profile
      </Link>
      <Link
        href="/career"
        className={clsx(pathname === "/career" && "text-blue-500")}
      >
        Career
      </Link>
      <Link
        href="/project"
        className={clsx(pathname === "/project" && "text-blue-500")}
      >
        Project
      </Link>
    </div>
  );
}
