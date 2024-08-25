import Link from "next/link";

export default function Lantern() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[80vw] h-[85vh]">
        <div className="text-5xl font-bold mb-4">프로젝트</div>
        <div className="text-3xl text-violet-500 font-bold">Lantern</div>
        <div className="text-2xl text-gray-400 mb-3">2017/01 ~ 2017/06</div>
        <div className="flex gap-3 items-center my-5">
          <div className="w-12">
            <img src="/images/android.png" alt="android" />
          </div>
          <div className="w-12">
            <img src="/images/nodejs.png" alt="nodejs" />
          </div>
        </div>
        <iframe
          src="https://www.youtube.com/embed/hi7Fvphwkh8"
          title="[LANTERN] 우주최강 안드로이드 APM - LANTERN 소개영상"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full lg:w-2/3 h-1/2 my-3"
        />
        <p>
          안드로이드 성능 측정 툴<br />
          Lantern <span className="text-violet-300">APM</span>(Application
          Performance Manager)의 SDK 개발 및 <br />
          node.js 백엔드 api 개발 진행했습니다.
        </p>
        <div className="flex gap-3 mt-3 items-center">
          <Link
            href="https://github.com/TeamThresh/Lantern-sdk"
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
