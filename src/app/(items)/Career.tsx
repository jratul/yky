import DashedDivider from "@/components/DashedDivider";
import Divider from "@/components/Divider";
import Link from "next/link";

export default function Career() {
  return (
    <div className="w-screen h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[80vw] h-[85vh]">
        <div className="text-5xl font-bold mb-4">이력 사항</div>
        <div className="text-3xl text-violet-500 font-bold">삼성전자</div>
        <div className="text-2xl text-gray-400 mb-3">
          2018/08 ~ 재직 중(6년)
        </div>
        <div className="ml-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            <div className="mb-3">
              <div className="text-xl text-violet-300 font-semibold">
                EDA(회로 설계 자동화) Flow 자동화 툴 개발
                <div className="text-lg text-gray-400 mb-2">2023/06 ~</div>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-12">
                  <img src="/images/react.png" alt="" />
                </div>
                <div className="w-12">
                  <img src="/images/typescript.png" alt="" />
                </div>
                <div className="w-40">
                  <img src="/images/electron.png" alt="" />
                </div>
              </div>
              <p>
                회로 설계 및 검증 Flow 자동화를 위한
                <br />
                <span className="text-violet-300">웹 기반 네이티브 앱</span>을
                개발했습니다.
              </p>
            </div>
            <DashedDivider />
            <div className="mb-3">
              <div className="text-xl text-violet-300 font-semibold">
                반도체 회로 설계 툴
                <div className="text-lg text-gray-400 mb-2">2018/08 ~</div>
              </div>
              <div className="flex gap-3 items-center mb-3">
                <div className="w-12">
                  <img src="/images/cpp.svg" alt="cpp" />
                </div>
                <div className="w-12">
                  <img src="/images/qt.png" alt="qt" />
                </div>
              </div>
              <p>
                C++ GUI 프레임워크 Qt를 기반으로
                <br />
                회로 설계 자동화 API Open Access를 활용한
                <br />
                <span className="text-violet-300">반도체 회로 설계 툴</span>을
                개발했습니다.
              </p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="text-3xl text-violet-500 font-bold">
          안드로메다 주식회사
          <div className="float-right w-64 lg:w-96">
            <img
              src="images/adring-pic.png"
              alt="adring pic"
              className="float-right"
            />
          </div>
        </div>
        <div className="text-2xl text-gray-400 mb-3">
          2015/06 ~ 2016/06(1년)
        </div>
        <div className="ml-2">
          <div className="text-xl text-violet-300 font-semibold">
            애드링 안드로이드 앱 개발
          </div>
          <div className="w-12 my-3">
            <img src="/images/android.png" alt="android" />
          </div>
          <p>
            전화를 걸 때 광고를 듣고 리워드를 적립받는{" "}
            <span className="text-violet-300">안드로이드 앱</span>
            <br />
            애드링 개발에 참여했습니다.
          </p>
          <iframe
            src="https://www.youtube.com/embed/c_4iwOAzdmo"
            title="애드링 홍보영상"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            className="my-2 w-[300px] h-[150px] lg:w-[400px] lg:h-[250px]"
          ></iframe>

          <Link
            href="https://ccei.creativekorea.or.kr/daejeon/case/caseDetail.do?rnum=3&no=206&storyList=story"
            target="_blank"
            className="hover:text-violet-300 underline mr-3"
          >
            관련 기사
          </Link>
          <Link
            href="https://www.yna.co.kr/view/PYH20160403092600013"
            target="_blank"
            className="hover:text-violet-300 underline mr-3"
          >
            구글 플레이스토어 10만 다운로드
          </Link>
          <Link
            href="https://www.datanet.co.kr/news/articleView.html?idxno=96477"
            target="_blank"
            className="hover:text-violet-300 underline mr-3"
          >
            4억 투자 유치
          </Link>
        </div>
      </div>
    </div>
  );
}