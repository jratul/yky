import { EnvelopeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Intro() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[70vw] lg:w-[60vw] h-[45vh] my-auto md:pl-20">
        <p className="text-2xl lg:text-6xl">
          안녕하세요
          <br /> 웹 프론트엔드 개발자
          <br /> <span className="text-violet-600 font-bold">유건열</span>
          입니다.
        </p>
        <br />
        <div className="flex gap-3 items-center text-md lg:text-5xl mb-3">
          <EnvelopeIcon className="w-5 h-5 lg:w-10 lg:h-10" /> jratul3@gmail.com
        </div>
        <div className="flex gap-3 items-center text-md lg:text-5xl mb-5">
          <div className="w-5 h-5 lg:w-10 lg:h-10">
            <img src="/images/github.png" alt="github" />
          </div>
          <Link
            href="https://github.com/jratul"
            target="_blank"
            className="hover:text-violet-300 underline"
          >
            https://github.com/jratul
          </Link>
        </div>
        <div className="w-32 lg:w-64 -ml-3">
          <img src="/images/programmers.png" alt="programmers" />
        </div>
        <div className="flex gap-3 items-center mb-5">
          <Link
            href="https://career.programmers.co.kr/pr/jratul3_8774"
            target="_blank"
            className="hover:text-violet-300 underline text-sm lg:text-4xl"
          >
            https://career.programmers.co.kr/pr/jratul3_8774
          </Link>
        </div>
      </div>
    </div>
  );
}
