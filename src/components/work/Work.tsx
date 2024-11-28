import Motion from "@components/Motion";
import WorkItem from "./WorkItem";
import WorkProjectItem from "./WorkProjectItem";
import ReactBadge from "@components/badge/ReactBadge";
import TypescriptBadge from "@components/badge/TypescriptBadge";
import ElectronBadge from "@components/badge/ElectronBadge";
import MUIBadge from "@components/badge/MUIBadge";
import QtBadge from "@components/badge/QtBadge";
import CPPBadge from "@components/badge/CPPBadge";
import HighSpan from "@components/HighSpan";
import Link from "next/link";
import AndroidBadge from "@components/badge/AndroidBadge";

export default function Work() {
  return (
    <div className="my-4">
      <Motion className="text-3xl font-bold text-slate-700">이력</Motion>
      <WorkItem
        title="삼성전자"
        period="2018/08 ~ 재직 중(6년)"
        job="프론트엔드 개발자"
        workProjects={[
          <WorkProjectItem
            key="portal"
            title="EDA(회로 설계 자동화) Flow 자동화 툴 개발"
            stacks={[
              <ReactBadge key="react" />,
              <TypescriptBadge key="typescript" />,
              <ElectronBadge key="electron" />,
              <MUIBadge key="mui" />,
            ]}
            desc={
              <>
                회로 설계 및 검증 Flow 자동화를 위한
                <br />
                <HighSpan>웹 기반 네이티브 앱</HighSpan>을 개발했습니다.
                <br />
                MUI를 사용하여 일관적인 디자인을 구성했습니다.
              </>
            }
          />,
          <WorkProjectItem
            key="bts"
            title="반도체 회로 설계 툴"
            stacks={[<QtBadge key="qt" />, <CPPBadge key="cpp" />]}
            desc={
              <>
                C++ GUI 프레임워크 Qt를 기반으로
                <br />
                회로 설계 자동화 API{" "}
                <Link
                  href="https://si2.org/openaccess-coalition/"
                  target="_blank"
                  className="underline text-blue-600"
                >
                  Open Access
                </Link>
                를 활용한
                <br />
                반도체 회로 설계 툴을 개발했습니다.
              </>
            }
          />,
        ]}
      />
      <WorkItem
        title="안드로메다 주식회사"
        period="2015/06 ~ 2016/06(1년)"
        job="안드로이드 앱 개발자"
        workProjects={[
          <WorkProjectItem
            key="adring"
            title="애드링 안드로이드 앱 개발"
            stacks={[<AndroidBadge key="android" />]}
            desc={
              <>
                <iframe
                  src="https://www.youtube.com/embed/c_4iwOAzdmo"
                  title="애드링 홍보영상"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  className="w-full aspect-video"
                ></iframe>
                전화를 걸 때 광고를 듣고 리워드를 적립받는
                <br />
                <HighSpan>안드로이드 앱</HighSpan> 애드링 개발에 참여했습니다.
                <Link
                  href="https://ccei.creativekorea.or.kr/daejeon/case/caseDetail.do?rnum=3&no=206&storyList=story"
                  target="_blank"
                  className="underline block"
                >
                  관련 기사
                </Link>
                <Link
                  href="https://www.yna.co.kr/view/PYH20160403092600013"
                  target="_blank"
                  className="underline block"
                >
                  구글 플레이스토어 10만 다운로드
                </Link>
                <Link
                  href="https://www.datanet.co.kr/news/articleView.html?idxno=96477"
                  target="_blank"
                  className="underline block"
                >
                  4억 투자 유치
                </Link>
              </>
            }
          />,
        ]}
      />
    </div>
  );
}
