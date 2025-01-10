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
import Image from "next/image";
import Divider from "@components/Divider";

export default function Work() {
  return (
    <div className="my-4">
      <WorkItem
        title="삼성전자"
        period="2018/08 ~ 재직 중(6년)"
        job="프론트엔드 개발자"
        workProjects={[
          <WorkProjectItem
            key="portal"
            title="EDA(회로 설계 자동화) Flow 자동화 앱"
            stacks={[
              <ReactBadge key="react" />,
              <TypescriptBadge key="typescript" />,
              <ElectronBadge key="electron" />,
              <MUIBadge key="mui" />,
            ]}
            desc={
              <ul className="ml-4 list-disc">
                <li>
                  <HighSpan>웹 기반 네이티브 앱</HighSpan>
                </li>
                <li>
                  <Link
                    href="https://mui.com/"
                    target="_blank"
                    className="underline"
                  >
                    MUI
                  </Link>
                  를 사용하여 일관적인 디자인 구성
                </li>
                <li>AG Grid를 연동하여 10,000개에 달하는 Node의 Tree 구현</li>
                <li>
                  Jira를 통한 issue 관리, Bitbucket을 통한 형상 관리 및 코드
                  리뷰
                </li>
              </ul>
            }
          />,
          <WorkProjectItem
            key="bts"
            title="반도체 회로 설계 프로그램"
            stacks={[<QtBadge key="qt" />, <CPPBadge key="cpp" />]}
            desc={
              <ul className="ml-4 list-disc">
                <li>C++ GUI 프레임워크 Qt 기반</li>
                <li>
                  회로 설계 자동화 API{" "}
                  <Link
                    href="https://si2.org/openaccess-coalition/"
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    Open Access
                  </Link>
                  &nbsp;활용
                </li>
              </ul>
            }
          />,
        ]}
      />
      <Divider />
      <WorkItem
        title="SW Maestro 7기 창업 인증"
        period="2016/06 ~ 2017/08"
        job=""
        workProjects={[
          <div key="sw-maestro" className="p-2">
            <Image
              src="/images/swmaestro.webp"
              alt="sw-maestro"
              width={700}
              height={400}
              className="my-2 rounded w-full"
              priority
            />
            SW 인재 육성 정부 지원 사업
            <br />
            <HighSpan>SW Maestro 7기</HighSpan> 연수생 활동
            <br />
            최종 8팀 선정, <HighSpan>창업인증</HighSpan> 수상
            <br />
            <Link
              href="https://blog.naver.com/sw_maestro/221120923020"
              target="_blank"
              className="underline"
            >
              관련 내용
            </Link>
          </div>,
        ]}
      />
      <Divider />
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
                  className="my-2 rounded w-full aspect-video"
                ></iframe>
                전화를 걸 때 광고를 듣고 리워드를 적립받는
                <br />
                <HighSpan>안드로이드 앱</HighSpan> 애드링
                <br />
                <Link
                  href="https://ccei.creativekorea.or.kr/daejeon/case/caseDetail.do?rnum=3&no=206&storyList=story"
                  target="_blank"
                  className="underline"
                >
                  관련 기사
                </Link>
                <br />
                <Link
                  href="https://www.yna.co.kr/view/PYH20160403092600013"
                  target="_blank"
                  className="underline"
                >
                  구글 플레이스토어 10만 다운로드
                </Link>
                <br />
                <Link
                  href="https://www.datanet.co.kr/news/articleView.html?idxno=96477"
                  target="_blank"
                  className="underline"
                >
                  4억 투자 유치
                </Link>
              </>
            }
          />,
        ]}
      />
      <Divider />
      <WorkItem
        title="한양대학교"
        period="2009/03 ~ 2018/02"
        job="컴퓨터 공학 전공 / 학사"
        workProjects={[<div key="hyu">4.0 / 4.5 학점</div>]}
      />
    </div>
  );
}
