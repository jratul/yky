import { LinkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export default function Bamdokkabi() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[80vw] h-[85vh]">
        <div className="text-5xl font-bold mb-4">프로젝트</div>
        <div className="text-3xl text-violet-500 font-bold">
          밤도깨비 야시장
        </div>
        <div className="text-2xl text-gray-400 mb-3">2018/06</div>
        <iframe
          src="https://www.youtube.com/embed/PwgYwDbmkDY"
          title="밤도깨비 야시장 홈페이지"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="w-full lg:w-2/3 h-1/2"
        ></iframe>
        <div className="flex gap-3 items-center my-3">
          <div className="w-36">
            <img src="/images/html-js-css.png" alt="html js css" />
          </div>
          <div className="w-12">
            <img src="/images/jquery.png" alt="jquery" />
          </div>
        </div>
        <p>
          밤도깨비 야시장 홍보 페이지입니다.
          <br />
          <span className="text-violet-300">canvas</span>를 활용한 미니 게임
          개발을 진행했습니다.
        </p>
        <div className="flex gap-3 mt-3 items-center">
          <Link
            href="https://github.com/bam-dokkabi"
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
