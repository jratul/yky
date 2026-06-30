# yky-portfolio — CLAUDE.md

유건열(Keonyeol Yu)의 개인 포트폴리오 사이트.

---

## 프로젝트 개요

- **프레임워크:** Next.js 16 (App Router)
- **언어:** TypeScript 6
- **스타일링:** Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline`)
- **애니메이션:** 자체 구현 `Reveal` 컴포넌트 (IntersectionObserver)
- **폰트:** Pretendard Variable (로컬 .ttf, `next/font/local`) + JetBrains Mono (`next/font/google`)
- **Node.js:** ≥ 24 (`.nvmrc`: 24)
- **배포:** Vercel

---

## 아키텍처 — 단일 페이지 스크롤

`/` 하나의 페이지에 섹션을 쌓는 싱글 페이지 구조. 별도 라우트(`/career`, `/project`)는 없음.

```
page.tsx
  ├── <Header />           # 고정 상단 바 (앵커 링크: #experience, #work)
  ├── <Hero id="top" />    # 이름 · 역할 · 이메일 · GitHub 링크
  ├── <ExperienceSection id="experience" />   # 경력 타임라인
  └── <ProjectsSection id="work" />           # 프로젝트 카드 그리드
```

---

## 디자인 시스템

| 항목 | 값 |
|---|---|
| 배경 | `#0a0a0c` |
| 액센트 | `#5b8cff` (`--color-accent`, `--accent: 91 140 255`) |
| 텍스트 기본 | `neutral-200` |
| 텍스트 약 | `neutral-400` / `neutral-500` |
| 보더 | `border-white/[7%]` (카드), `border-white/6` (헤더) |
| 카드 배경 | `#101216` |
| 헤더 배경 | `bg-[#0a0a0c]/55 backdrop-blur-xl` |
| 폰트 헤드라인 | Pretendard Variable (`font-sans`) |
| 폰트 모노 | JetBrains Mono (`font-mono`) |
| 파비콘 | `src/app/icon.svg` — 다크 배경 + 파란 `❯` 쉐브론 |

`--accent` (RGB 채널 분리 변수)는 `rgb(var(--accent)/0.4)` 형태의 임의값 CSS 표현식 안에서 필요하므로 `--color-accent`와 별도로 유지.

---

## 디렉토리 구조

```
src/
├── app/
│   ├── fonts/PretendardVariable.ttf
│   ├── icon.svg           # 파비콘 (SVG)
│   ├── layout.tsx         # 루트 레이아웃 — 폰트 로드, metadata
│   ├── page.tsx           # 단일 페이지
│   └── globals.css        # Tailwind v4 + @theme + @keyframes + 글로벌 스타일
├── components/
│   ├── Header.tsx         # 고정 상단 내비게이션
│   ├── Hero.tsx           # 히어로 섹션
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── Reveal.tsx         # IntersectionObserver 페이드인 래퍼
│   └── ui.tsx             # Tag (기술 스택 배지), SectionHeader
└── data/
    └── portfolio.ts       # 모든 콘텐츠 데이터
```

---

## 데이터 모델 (`src/data/portfolio.ts`)

### `profile`
```ts
const profile = {
  nameKo: string;
  nameEn: string;
  role: string;
  email: string;
  github: string;
  githubLabel: string;
}
```

### `Experience`
```ts
interface Experience {
  company: string;
  period: string;
  role?: string;
  current?: boolean;
  description?: string;
  subProjects?: SubProject[];  // 하위 프로젝트 카드
  points?: string[];
  tags?: string[];             // 기술 스택 (Tag 컴포넌트로 렌더)
  links?: Link[];              // 인라인 외부 링크
  youtube?: string;            // YouTube 동영상 ID (embed)
  image?: string;              // 이미지 경로 (next/image)
}
```

### `Project`
```ts
interface Project {
  slug: string;
  title: string;
  date: string;
  points?: string[];
  description?: string;
  tags: string[];
  github?: string;
  live?: string;
  image?: string;              // public/projects/*.webp
}
```

---

## 현재 콘텐츠

### 경력 (experiences)

| 회사 | 기간 | 비고 |
|---|---|---|
| 쿠팡 | 2025.02 — 현재 | current: true |
| 삼성전자 | 2018.08 — 2025.02 | EDA Flow 앱, 회로 설계 툴 (subProjects) |
| SW Maestro 7기 | 2016.06 — 2017.08 | |
| 안드로메다 | 2015.06 — 2016.06 | youtube: "c_4iwOAzdmo" |
| 한양대학교 | 2009.03 — 2018.02 | |

### 프로젝트 (projects, 날짜 내림차순)

| slug | 제목 | 날짜 | 이미지 |
|---|---|---|---|
| dowsing-dex | 다우징덱스 | 2026.06 | dowsing-dex.webp |
| mokiru | 모키루 | 2026.04 | mokiru.webp |
| tjsss | 텅장수선소 | 2026.02 | tjsss.webp |
| aldente | Aldente | 2024.11 | aldente.webp |
| teeniepingle | 티니핑글 | 2024.09 | teeniepingle.webp |
| switchers | Switchers | 2024.08 | switchers.webp |
| zephyr | Zephyr Meetup 2024 | 2024.08 | zephyr.webp |
| bamdokkabi | 밤도깨비 야시장 | 2018.06 | bamdokkabi.jpg |
| lantern | Lantern | 2017.01 — 06 | lantern.jpg |

---

## 기술 스택 배지 (`ui.tsx` — TECH_COLORS)

`Tag` 컴포넌트는 `TECH_COLORS` 맵에서 기술명으로 배경/전경색을 lookup. 맵에 없는 기술은 neutral 색상으로 fallback.

현재 등록된 기술: React, Next.js, TypeScript, JavaScript, Tailwind, shadcn/ui, React Query, Firebase, AWS S3, styled-components, MongoDB, Node.js, Electron, MUI, Qt, C++, Android, Java, HTML5, jQuery

새 기술 추가 시 `ui.tsx`의 `TECH_COLORS`에 항목을 추가한다.

**태그 정규화 규칙:** `portfolio.ts`에서 "Tailwind CSS"가 아닌 **"Tailwind"** 사용 (TECH_COLORS 키와 일치).

---

## 이미지 규칙

- 프로젝트 썸네일: `public/projects/*.webp` (품질 90, `cwebp -q 90`)
- 원본 스크린샷: `.ref/screenshot/` (git 추적 제외)
- `next/image` `sizes` prop: `"(max-width: 768px) 100vw, 380px"`

---

## 남아있는 작업

- [ ] 쿠팡 업무 상세 내용 추가 (`portfolio.ts` 쿠팡 항목에 `points` 또는 `subProjects`)
- [ ] 프로필 사진 추가 시 Hero 섹션 좌우 2단 레이아웃으로 변경
