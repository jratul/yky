import { LinkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Zephyr() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[70vw] lg:w-[80vw] h-[85vh]">
        <div className="text-2xl lg:text-5xl font-bold mb-4">프로젝트</div>
        <div className="text-lg lg:text-3xl text-violet-500 font-bold">
          Zephyr Meetup 2024
        </div>
        <div className="text-md lg:text-2xl text-gray-400 mb-3">2024/08</div>
        <div className="flex gap-3 items-center mb-3">
          <div className="w-24">
            <img src="/images/nextjs.png" alt="nextjs" />
          </div>
          <div className="w-12">
            <img src="/images/typescript.png" alt="typescript" />
          </div>
          <div className="w-12">
            <img src="/images/tailwindcss.png" alt="tailwindcss" />
          </div>
        </div>
        <div className="lg:w-2/3 mb-3">
          <img src="/images/zephyr-screenshot.png" alt="zephyr" />
        </div>

        <p>
          가상의 DB 솔루션 <span className="text-violet-300">Zephyr</span>의{" "}
          <br />
          컨퍼런스 랜딩 페이지입니다.
        </p>
        <div className="flex gap-3 mt-3 items-center">
          <Link
            href="https://zephyr-meetup-2024.vercel.app/"
            target="_blank"
            className="hover:text-violet-300 underline mb-5"
          >
            <LinkIcon className="w-10 h-10" />
          </Link>
          <Link
            href="https://github.com/jratul/zephyr-meetup-2024"
            target="_blank"
            className="hover:scale-105 underline mb-5 transition-transform duration-100"
          >
            <div className="w-12 h-12">
              <img src="/images/github.png" alt="switchers github" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
