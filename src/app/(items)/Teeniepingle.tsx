import { LinkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Teeniepingle() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[70vw] lg:w-[80vw] h-[85vh] lg:pl-[20vw] lg:h-auto lg:m-auto">
        <div className="text-2xl lg:text-5xl font-bold mb-4">프로젝트</div>
        <div className="text-lg lg:text-3xl text-violet-500 font-bold">
          티니핑글
        </div>
        <div className="text-md lg:text-2xl text-gray-400 mb-3">2024/09</div>
        <div className="flex gap-3 items-center mb-3">
          <div className="w-24">
            <img src="/images/nextjs.png" alt="nextjs" />
          </div>
          <div className="w-12">
            <img src="/images/typescript.png" alt="typescript" />
          </div>
          <div className="w-24">
            <img src="/images/emotion.webp" alt="emotion" />
          </div>
        </div>
        <div className="lg:w-2/3 mb-3">
          <img src="/images/teeniepingle-screenshot.webp" alt="teeniepingle" />
        </div>

        <p>당신의 티니핑을 찾아보세요</p>
        <div className="flex gap-3 mt-3 items-center">
          <Link
            href="https://tnpg.vercel.app"
            target="_blank"
            className="hover:text-violet-300 underline mb-5"
          >
            <LinkIcon className="w-10 h-10" />
          </Link>
          <Link
            href="https://github.com/jratul/teeniepingle"
            target="_blank"
            className="hover:scale-105 underline mb-5 transition-transform duration-100"
          >
            <div className="w-12 h-12">
              <img src="/images/github.png" alt="teepingle github" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
