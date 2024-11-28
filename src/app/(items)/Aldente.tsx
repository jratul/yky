import { LinkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Aldente() {
  return (
    <div className="max-w-2xl mx-auto h-screen flex justify-center items-center">
      <div className="w-[70vw] lg:w-[80vw] h-[85vh] lg:h-auto lg:mx-auto">
        <div className="text-2xl lg:text-5xl font-bold mb-4">프로젝트</div>
        <div className="text-lg lg:text-3xl text-violet-500 font-bold">
          Aldente
        </div>
        <div className="text-md lg:text-2xl text-gray-400 mb-3">2024/09</div>
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
            <img src="/images/firebase.png" alt="firebase" />
          </div>
        </div>
        <div className="w-2/3 mb-3">
          <img src="/images/aldente-screenshot.png" alt="aldente" />
        </div>
        식당 리뷰 공유 프로젝트입니다.
        <ol className="text-sm list-disc md:text-base">
          <li>
            <span className="text-violet-300">Next js 15</span> App router
          </li>
          <li>
            <a
              href="https://next-auth.js.org/"
              target="_blank"
              className="underline hover:text-violet-300"
            >
              Next Auth
            </a>
            &nbsp; Google Oauth 로그인
          </li>
          <li>firebase의 firestore, AWS S3에 리뷰 데이터 저장</li>
          <li>tanstack react query로 data fetching hook 분리 작성</li>
        </ol>
        <div className="flex gap-3 mt-3 items-center">
          <Link
            href="https://aldente2.vercel.app"
            target="_blank"
            className="hover:text-violet-300 underline mb-5"
          >
            <LinkIcon className="w-10 h-10" />
          </Link>
          <Link
            href="https://github.com/jratul/aldente"
            target="_blank"
            className="hover:scale-105 underline mb-5 transition-transform duration-100"
          >
            <div className="w-12 h-12">
              <img src="/images/github.png" alt="aldente-github" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
