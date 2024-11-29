import { Project } from "@models/project";

import FirebaseBadge from "@components/badge/FirebaseBadge";
import NextJSBadge from "@components/badge/NextJSBadge";
import ReactQueryBadge from "@components/badge/ReactQueryBadge";
import TailwindcssBadge from "@components/badge/TailwindcssBadge";
import TypescriptBadge from "@components/badge/TypescriptBadge";
import Image from "next/image";
import MongoDBBadge from "@components/badge/MongoDBBadge";
import StyledComponentsBadge from "@components/badge/StyledComponentsBadge";
import HTML5Badge from "@components/badge/HTML5Badge";
import JavascriptBadge from "@components/badge/JavascriptBadge";
import CSS3Badge from "@components/badge/CSS3Badge";
import JQueryBadge from "@components/badge/JQueryBadge";
import AndroidBadge from "@components/badge/AndroidBadge";
import NodeJSBadge from "@components/badge/NodeJSBadge";

export const projects: Project[] = [
  {
    title: "Aldente",
    period: "2024/11",
    stacks: [
      <NextJSBadge key="nextjs" />,
      <TypescriptBadge key="typescript" />,
      <ReactQueryBadge key="react-query" />,
      <TailwindcssBadge key="tailwindcss" />,
      <FirebaseBadge key="firebase" />,
    ],
    hero: (
      <Image
        src="/images/aldente-screenshot.webp"
        alt="aldente"
        width={800}
        height={800}
        priority
      />
    ),
    desc: (
      <ul className="ml-4 list-disc">
        <li>식당 리뷰 공유 프로젝트</li>
        <li>Next.js 15 App router</li>
        <li>Infinite Scroll Component로 리뷰 데이터 가져오기</li>
        <li>카카오 지도 API 연동으로 식당 위치 지정</li>
        <li>AWS S3에 리뷰 이미지 저장</li>
        <li>Next Auth Google Provider로 Google Oauth 로그인</li>
      </ul>
    ),
    github: "https://github.com/jratul/aldente",
    link: "https://aldente2.vercel.app",
  },
  {
    title: "Switchers",
    period: "2024/08",
    stacks: [
      <NextJSBadge key="nextjs" />,
      <TypescriptBadge key="typescript" />,
      <TailwindcssBadge key="tailwindcss" />,
      <MongoDBBadge key="mongo-db" />,
    ],
    hero: (
      <Image
        src="/images/switchers-screenshot.webp"
        alt="switchers"
        width={800}
        height={800}
        priority
      />
    ),
    desc: (
      <ul className="ml-4 list-disc">
        <li>닌텐도 스위치 쇼핑몰 프로젝트</li>
        <li>Next.js 14 App router</li>
        <li>Next Auth jwt credential provider 인증 구현</li>
        <li>Route Handler로 API 구성</li>
      </ul>
    ),
    github: "https://github.com/jratul/switchers",
    link: "https://switchers.vercel.app",
  },
  {
    title: "티니핑글",
    period: "2024/09",
    stacks: [
      <NextJSBadge key="nextjs" />,
      <TypescriptBadge key="typescript" />,
      <StyledComponentsBadge key="style-components" />,
    ],
    hero: (
      <Image
        src="/images/teeniepingle-screenshot.webp"
        alt="teeniepingle"
        width={800}
        height={800}
        priority
      />
    ),
    desc: <>당신의 티니핑을 찾아 보세요</>,
    github: "https://github.com/jratul/teeniepingle",
    link: "https://tnpg.vercel.app",
  },
  {
    title: "Zephyr Meetup 2024",
    period: "2024/08",
    stacks: [
      <NextJSBadge key="nextjs" />,
      <TypescriptBadge key="typescript" />,
      <TailwindcssBadge key="tailwindcss" />,
    ],
    hero: (
      <Image
        src="/images/zephyr-screenshot.webp"
        alt="zephyr"
        width={800}
        height={800}
        priority
      />
    ),
    desc: <>가상의 DB 솔루션 Zephyr의 컨퍼런스 랜딩 페이지</>,
    github: "https://github.com/jratul/zephyr-meetup-2024",
    link: "https://zephyr-meetup-2024.vercel.app",
  },
  {
    title: "밤도깨비 야시장",
    period: "2018/06",
    stacks: [
      <HTML5Badge key="html5" />,
      <JavascriptBadge key="javascript" />,
      <CSS3Badge key="css3" />,
      <JQueryBadge key="jquery" />,
    ],
    hero: (
      <iframe
        src="https://www.youtube.com/embed/PwgYwDbmkDY"
        title="밤도깨비 야시장 홈페이지"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-video"
      />
    ),
    desc: (
      <ul className="ml-4 list-disc">
        <li>밤도깨비 야시장 홍보 페이지</li>
        <li>HTML5 canvas를 활용한 미니 게임 개발</li>
      </ul>
    ),
    github: "https://github.com/bam-dokkabi",
  },
  {
    title: "Lantern",
    period: "2017/01 ~ 2017/06",
    stacks: [<AndroidBadge key="android" />, <NodeJSBadge key="nodejs" />],
    hero: (
      <iframe
        src="https://www.youtube.com/embed/hi7Fvphwkh8"
        title="[LANTERN] 우주최강 안드로이드 APM - LANTERN 소개영상"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="w-full aspect-video"
      />
    ),
    desc: (
      <ul className="ml-4 list-disc">
        <li>Android 성능 측정 툴(Application Performance Management)</li>
        <li>Android SDK 개발</li>
        <li>Node.js 백엔드 api 개발</li>
      </ul>
    ),
    github: "https://github.com/bam-dokkabi",
  },
];
