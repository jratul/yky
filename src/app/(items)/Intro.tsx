import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[80vw] h-[80vh]">
        <p className="text-5xl lg:text-9xl">
          안녕하세요
          <br /> 웹 프론트엔드 개발자
          <br /> <span className="text-violet-600 font-bold">유건열</span>
          입니다.
        </p>
        <br />
        <div className="flex gap-3 items-center text-2xl lg:text-5xl">
          <EnvelopeIcon className="w-5 h-5 lg:w-10 lg:h-10" /> jratul3@gmail.com
        </div>
        <div className="flex gap-3 items-center text-2xl lg:text-5xl">
          <div className="w-5 h-5">
            <img src="/images/github.png" alt="github" />
          </div>
          <Link
            href="https://github.com/jratul"
            target="_blank"
            className="hover:text-violet-300 hover:underline"
          >
            https://github.com/jratul
          </Link>
        </div>
      </div>
    </div>
  );
}
