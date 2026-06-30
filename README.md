# yky.dev — 유건열 포트폴리오

유건열(Keonyeol Yu)의 개인 포트폴리오 사이트.

**[yky.dev](https://yky.dev)** · [GitHub](https://github.com/jratul)

---

## 기술 스택

| | |
|---|---|
| **프레임워크** | Next.js 16 (App Router) |
| **언어** | TypeScript 6 |
| **스타일링** | Tailwind CSS v4 |
| **폰트** | Pretendard Variable (로컬) + JetBrains Mono (Google Fonts) |
| **배포** | Vercel |
| **Node.js** | ≥ 24 |

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run lint
```

## 구조

```
src/
├── app/
│   ├── icon.svg           # 파비콘
│   ├── layout.tsx         # 루트 레이아웃 (폰트 로드)
│   ├── page.tsx           # 단일 페이지 (스크롤 섹션 조합)
│   └── globals.css        # Tailwind v4 + 글로벌 스타일
├── components/
│   ├── Header.tsx         # 고정 상단 내비게이션
│   ├── Hero.tsx           # 히어로 섹션 (이름, 역할, 연락처)
│   ├── ExperienceSection.tsx  # 경력 타임라인
│   ├── ProjectsSection.tsx    # 프로젝트 카드 그리드
│   ├── Reveal.tsx         # IntersectionObserver 페이드인 래퍼
│   └── ui.tsx             # Tag, SectionHeader 공통 컴포넌트
└── data/
    └── portfolio.ts       # 모든 콘텐츠 데이터 (profile, experiences, projects)
```

## 콘텐츠 수정

모든 콘텐츠(경력, 프로젝트)는 [`src/data/portfolio.ts`](src/data/portfolio.ts) 한 파일에서 관리합니다.

프로젝트 썸네일 이미지는 `public/projects/` 에 WebP 형식으로 저장합니다.
