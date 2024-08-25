import Divider from "@/components/Divider";
import Link from "next/link";

export default function Career2() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[80vw] h-[85vh]">
        <div className="text-5xl font-bold mb-4">
          이력 사항
          <div className="float-right">
            <img src="/images/swmaestro.jpg" alt="swmaestro" className="my-5" />
          </div>
        </div>
        <div className="text-3xl text-violet-500 font-bold">
          SW Maestro 7기 창업 인증
        </div>
        <div className="text-2xl text-gray-400 mb-3">2016/06 ~ 2017/08</div>
        <p>
          SW 인재 육성 정부 지원 사업인
          <br />
          <span className="text-violet-300">SW Maestro 7기</span> 연수생으로
          활동했습니다.
          <br />
        </p>
        <Link
          href="https://blog.naver.com/sw_maestro/221120923020"
          target="_blank"
          className="hover:text-violet-300 underline mb-5"
        >
          관련 내용
        </Link>
        <Divider />
        <div className="text-3xl text-violet-500 font-bold">한양대학교</div>
        <div className="text-2xl text-gray-400 mb-3">2016/06 ~ 2017/08</div>
        <div>컴퓨터 공학 전공 / 학사</div>
        <div>4.0 / 4.5 학점</div>
      </div>
    </div>
  );
}
