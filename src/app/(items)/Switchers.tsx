import { LinkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Switchers() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[70vw] lg:w-[80vw] h-[85vh] lg:pl-[20vw] lg:h-auto lg:m-auto">
        <div className="text-2xl lg:text-5xl font-bold mb-4">프로젝트</div>
        <div className="text-lg lg:text-3xl text-violet-500 font-bold">
          Switchers
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
          <div className="w-24">
            <img src="/images/mongodb.png" alt="mongodb" />
          </div>
        </div>
        <div className="lg:w-2/3 mb-3">
          <img src="/images/switchers-screenshot.webp" alt="switchers" />
        </div>

        <p>
          닌텐도 스위치 쇼핑몰 <span className="text-violet-300">스위쳐스</span>
          입니다.
          <br />
          <a
            href="https://next-auth.js.org/"
            target="_blank"
            className="underline hover:text-violet-300"
          >
            Next Auth
          </a>
          를 이용하여 <br />
          jwt credential provider로
          <br /> 인증 구현했습니다.
          <br />
          Next JS 14버전의 <span className="text-violet-300">App Router</span>
          구조를 사용했고, <br />
          <span className="text-violet-300">Route Handler</span>로 API
          구성했습니다.
        </p>
        <div className="flex gap-3 mt-3 items-center">
          <Link
            href="https://switchers.vercel.app"
            target="_blank"
            className="hover:text-violet-300 underline mb-5"
          >
            <LinkIcon className="w-10 h-10" />
          </Link>
          <Link
            href="https://github.com/jratul/switchers"
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
