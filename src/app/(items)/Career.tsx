import Link from "next/link";
import Divider from "@/components/Divider";
import DashedDivider from "@/components/DashedDivider";

export default function Career() {
  return (
    <div className="w-screen h-auto lg:h-screen flex-shrink-0 flex justify-center items-center">
      <div className="w-[70vw] lg:w-[60vw] mt-16">
        <div className="text-2xl lg:text-5xl font-bold mb-4">이력 사항</div>
        <div className="text-lg lg:text-3xl text-violet-500 font-bold">
          삼성전자
        </div>
        <div className="text-md lg:text-2xl text-gray-400 mb-3">
          2018/08 ~ 재직 중(6년)
        </div>
        <div className="ml-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 ">
            <div className="mb-1">
              <div className="text-md lg:text-xl text-violet-300 font-semibold">
                EDA(회로 설계 자동화) Flow 자동화 툴 개발
              </div>
              <div className="text-sm lg:text-lg text-gray-400 mb-2">
                2022/06 ~
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-12">
                  <img src="/images/react.png" alt="react js" />
                </div>
                <div className="w-12">
                  <img src="/images/typescript.png" alt="typescript" />
                </div>
                <div className="w-12">
                  <img src="/images/mui.png" alt="mui" />
                </div>
                <div className="w-40">
                  <img src="/images/electron.png" alt="electron" />
                </div>
              </div>
              <p>
                회로 설계 및 검증 Flow 자동화를 위한
                <br />
                <span className="text-violet-300">웹 기반 네이티브 앱</span>을
                개발했습니다.
                <br />
                <a
                  href="https://mui.com/"
                  target="_blank"
                  className="underline hover:text-violet-300"
                >
                  MUI
                </a>
                를 사용하여 일관적인 디자인을 구성했습니다.
              </p>
            </div>
            <div className="lg:hidden">
              <DashedDivider />
            </div>
            <div className="mb-3">
              <div className="text-md lg:text-xl text-violet-300 font-semibold">
                반도체 회로 설계 툴
              </div>
              <div className="text-sm lg:text-lg text-gray-400 mb-2">
                2018/08 ~
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
                회로 설계 자동화 API{" "}
                <a
                  href="https://si2.org/openaccess-coalition/"
                  target="_blank"
                  className="underline hover:text-violet-300"
                >
                  Open Access
                </a>
                를 활용한
                <br />
                <span className="text-violet-300">반도체 회로 설계 툴</span>을
                개발했습니다.
              </p>
            </div>
          </div>
        </div>
        <Divider />
        <div className="text-lg lg:text-3xl text-violet-500 font-bold">
          안드로메다 주식회사
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="col-span-1">
            <div className="text-md lg:text-2xl text-gray-400 mb-3">
              2015/06 ~ 2016/06(1년)
            </div>
            <div className="ml-2">
              <div className="text-md lg:text-xl text-violet-300 font-semibold">
                애드링 안드로이드 앱 개발
              </div>
              <div className="w-12 my-3">
                <img src="/images/android.png" alt="android" />
              </div>
              <p>
                전화를 걸 때 광고를 듣고 리워드를 적립받는
                <br />
                <span className="text-violet-300">안드로이드 앱</span> 애드링
                개발에 참여했습니다.
              </p>

              <Link
                href="https://ccei.creativekorea.or.kr/daejeon/case/caseDetail.do?rnum=3&no=206&storyList=story"
                target="_blank"
                className="hover:text-violet-300 underline mr-3"
              >
                관련 기사
              </Link>
              <br />
              <Link
                href="https://www.yna.co.kr/view/PYH20160403092600013"
                target="_blank"
                className="hover:text-violet-300 underline mr-3"
              >
                구글 플레이스토어 10만 다운로드
              </Link>
              <br />
              <Link
                href="https://www.datanet.co.kr/news/articleView.html?idxno=96477"
                target="_blank"
                className="hover:text-violet-300 underline mr-3"
              >
                4억 투자 유치
              </Link>
            </div>
          </div>
          <div className="col-span-1 mb-12 lg:my-2 lg:mb-2 ">
            <iframe
              src="https://www.youtube.com/embed/c_4iwOAzdmo"
              title="애드링 홍보영상"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-[300px] h-[150px] lg:w-full lg:h-[300px]"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
