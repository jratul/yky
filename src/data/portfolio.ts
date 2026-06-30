export interface Link {
  label: string;
  href: string;
}

export interface SubProject {
  title: string;
  subtitle?: string;
  points: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  period: string;
  role?: string;
  current?: boolean;
  description?: string;
  subProjects?: SubProject[];
  points?: string[];
  tags?: string[];
  links?: Link[];
}

export interface Project {
  slug: string;
  title: string;
  date: string;
  points?: string[];
  description?: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const profile = {
  nameKo: "유건열",
  nameEn: "Keonyeol Yu",
  role: "Web Frontend Developer",
  intro:
    "6년간 삼성전자에서 대규모 사내 개발 도구를 만들었고, 지금은 쿠팡에서 프론트엔드를 개발합니다. React와 Next.js로 복잡한 화면을 단단하게 구현하는 일을 좋아합니다.",
  email: "jratul3@gmail.com",
  github: "https://github.com/jratul",
  githubLabel: "github.com/jratul",
};

export const experiences: Experience[] = [
  {
    company: "쿠팡",
    period: "2025.02 — 현재",
    role: "프론트엔드 개발자",
    current: true,
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    company: "삼성전자",
    period: "2018.08 — 2025.02 · 6년",
    role: "프론트엔드 개발자 · EDA(회로 설계 자동화) 솔루션 개발",
    subProjects: [
      {
        title: "EDA Flow 자동화 앱",
        subtitle: "웹 기반 네이티브 앱",
        points: [
          "MUI 기반의 일관된 디자인 시스템 구성",
          "AG Grid 연동으로 10,000개 규모 Node 트리 구현",
          "Jira 이슈 관리, Bitbucket 형상관리 및 코드 리뷰",
        ],
        tags: ["React", "TypeScript", "Electron", "MUI"],
      },
      {
        title: "반도체 회로 설계 프로그램",
        points: [
          "C++ GUI 프레임워크 Qt 기반 데스크톱 프로그램",
          "회로 설계 자동화 API OpenAccess 활용",
        ],
        tags: ["Qt", "C++"],
      },
    ],
  },
  {
    company: "SW Maestro 7기",
    period: "2016.06 — 2017.08",
    description:
      "SW 인재 육성 정부 지원 사업 연수생 · 최종 8팀 선정, 창업인증 수상",
    links: [
      {
        label: "관련 내용 →",
        href: "https://blog.naver.com/sw_maestro/221120923020",
      },
    ],
  },
  {
    company: "안드로메다",
    period: "2015.06 — 2016.06 · 1년",
    role: "안드로이드 앱 개발자",
    description:
      "통화 시 광고를 듣고 리워드를 적립받는 앱 '애드링' 개발 · Google Play 10만+ 다운로드, 4억 투자 유치",
    tags: ["Android"],
  },
  {
    company: "한양대학교",
    period: "2009.03 — 2018.02",
    description: "컴퓨터공학 전공 · 학사 · 학점 4.0 / 4.5",
  },
];

export const projects: Project[] = [
  {
    slug: "tjsss",
    title: "텅장수선소",
    date: "2026.02",
    points: [
      "돈·절약 콘텐츠 SEO 최적화 블로그",
      "Next.js App Router + 마크다운 콘텐츠 관리",
      "sitemap · robots.txt · OG 태그 SEO 대응",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    github: "https://github.com/jratul/tjsss",
    live: "https://tjsss.vercel.app",
    image: "/projects/tjsss.webp",
  },
  {
    slug: "aldente",
    title: "Aldente",
    date: "2024.11",
    points: [
      "식당 리뷰 공유 서비스",
      "Infinite Scroll 기반 리뷰 페이지네이션",
      "카카오 지도 API 위치 지정 · S3 이미지 업로드",
      "NextAuth Google OAuth 로그인",
    ],
    tags: ["Next.js", "React Query", "Firebase", "AWS S3"],
    github: "https://github.com/jratul/aldente",
    live: "https://aldente2.vercel.app",
    image: "/projects/aldente.webp",
  },
  {
    slug: "teeniepingle",
    title: "티니핑글",
    date: "2024.09",
    description: "\"당신의 티니핑을 찾아보세요\" — 캐릭터를 추리하는 미니 웹게임.",
    tags: ["Next.js", "TypeScript", "styled-components"],
    github: "https://github.com/jratul/teeniepingle",
    live: "https://tnpg.vercel.app",
    image: "/projects/teeniepingle.webp",
  },
  {
    slug: "switchers",
    title: "Switchers",
    date: "2024.08",
    points: [
      "닌텐도 스위치 쇼핑몰",
      "NextAuth JWT Credential 인증 구현",
      "Route Handler 기반 API 구성",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "AWS S3"],
    github: "https://github.com/jratul/switchers",
    live: "https://switchers.vercel.app",
    image: "/projects/switchers.webp",
  },
  {
    slug: "zephyr",
    title: "Zephyr Meetup 2024",
    date: "2024.08",
    description: "가상의 DB 솔루션 Zephyr의 컨퍼런스 랜딩 페이지.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/jratul/zephyr-meetup-2024",
    live: "https://zephyr-meetup-2024.vercel.app",
    image: "/projects/zephyr.webp",
  },
  {
    slug: "bamdokkabi",
    title: "밤도깨비 야시장",
    date: "2018.06",
    points: [
      "밤도깨비 야시장 홍보 페이지",
      "HTML5 Canvas 기반 미니 게임 개발",
    ],
    tags: ["HTML5", "JavaScript", "jQuery"],
    github: "https://github.com/bam-dokkabi",
  },
  {
    slug: "lantern",
    title: "Lantern",
    date: "2017.01 — 06",
    points: [
      "Android 성능 측정 툴 (APM)",
      "Android SDK · Node.js 백엔드 API 개발",
      "CPU·메모리 Dump와 Activity 기록으로 사용자 흐름 인사이트 제공",
    ],
    tags: ["Android", "Java", "Node.js"],
    github: "https://github.com/TeamThresh",
  },
];
