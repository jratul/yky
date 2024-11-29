import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Intro from "@components/Intro";
import Motion from "@components/Motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mt-4">
      <Intro />
      <Motion
        delay={0.2}
        className="flex justify-center items-center gap-3 my-1 text-md md:text-lg"
      >
        <EnvelopeIcon className="w-5 h-5" /> jratul3@gmail.com
      </Motion>
      <Motion
        delay={0.3}
        className="flex justify-center items-center gap-3 my-1 text-md md:text-lg"
      >
        <img className="w-5 h-5" src="/images/github.png" alt="github" />
        <Link
          href="https://github.com/jratul"
          target="_blank"
          className="underline"
        >
          https://github.com/jratul
        </Link>
      </Motion>
      <Motion delay={0.6} className="flex flex-col items-center mt-4">
        <img
          className="h-8"
          src="/images/programmers-logo-dark.png"
          alt="programmers"
        />
        <Link
          href="https://career.programmers.co.kr/pr/jratul3_8774"
          target="_blank"
          className="underline"
        >
          https://career.programmers.co.kr/pr/jratul3_8774
        </Link>
      </Motion>
    </div>
  );
}
