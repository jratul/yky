# yky-portfolio — CLAUDE.md

유건열(Keonyeol Yu)의 개인 포트폴리오 사이트. 현재 **디자인 revamp + 콘텐츠 추가** 작업 진행 예정.

---

## 프로젝트 개요

- **프레임워크:** Next.js 14 (App Router)
- **언어:** TypeScript
- **스타일링:** Tailwind CSS v3
- **애니메이션:** Motion (motion/react)
- **폰트:** Pretendard Variable (로컬 .ttf, CSS var: `--font-pretendard`)
- **배포:** Vercel

---

## 현재 화면 구성 (3개 페이지)

### `/` — 프로필 홈
- 이름 (유건열, blue 강조, 6xl font-black) + "Web Frontend Developer" 서브타이틀
- 이메일 링크 (jratul3@gmail.com)
- GitHub 링크 (github.com/jratul)
- Programmers 커리어 프로필 링크

### `/career` — 경력
`Work` 컴포넌트 안에 인라인 JSX로 전체 타임라인 하드코딩되어 있음.

| 회사/기관 | 기간 | 역할 |
|---|---|---|
| 삼성전자 | 2018/08 ~ 현재 | Frontend Developer |
| SW 마에스트로 7기 | 2016/06 ~ 2017/08 | 정부 창업 프로그램, 상위 8팀, 창업 인증 |
| 안드로메다 주식회사 | 2015/06 ~ 2016/06 | Android App Developer |
| 한양대학교 | 2009/03 ~ 2018/02 | 컴퓨터공학, GPA 4.0/4.5 |

**삼성전자 상세 프로젝트:**
- Electron 기반 EDA 플로우 자동화 앱 (React, TS, MUI, AG Grid, 10,000노드 트리)
- Qt/C++ 반도체 회로 설계 툴 (OpenAccess API)

**안드로메다 상세:**
- Android 앱 "Adring" — 리워드형 광고 앱, Google Play 10만+ 다운로드, 투자 약 4억 원 유치

### `/project` — 프로젝트
`src/data/projects.tsx` 배열을 순회해 `ProjectItem` 렌더링.

| 제목 | 기간 | 스택 | 링크 |
|---|---|---|---|
| Aldente | 2024/11 | Next.js 15, TS, React Query, Tailwind, Firebase, S3 | aldente2.vercel.app |
| Switchers | 2024/08 | Next.js 14, TS, Tailwind, MongoDB, S3 | switchers.vercel.app |
| 티니핑글 | 2024/09 | Next.js, TS, Styled Components | tnpg.vercel.app |
| Zephyr Meetup 2024 | 2024/08 | Next.js, TS, Tailwind | zephyr-meetup-2024.vercel.app |
| 밤도깨비 야시장 | 2018/06 | HTML5, JS, CSS3, jQuery | YouTube 데모 |
| Lantern | 2017/01~06 | Android, Java, Node.js | YouTube 데모 |

---

## 현재 디렉토리 구조

```
src/
├── app/
│   ├── layout.tsx          # 루트 레이아웃 (폰트, Background, Nav)
│   ├── page.tsx            # 홈(프로필)
│   ├── career/page.tsx     # 경력
│   ├── project/page.tsx    # 프로젝트
│   └── globals.css         # Tailwind + Swiper 스타일 오버라이드
├── components/
│   ├── Background.tsx      # 블러 그라디언트 배경 (상단/하단)
│   ├── Divider.tsx         # border-t 구분선 (Motion 래핑)
│   ├── HighSpan.tsx        # 파란색 강조 인라인 텍스트
│   ├── ImageSwiper.tsx     # Swiper 이미지 캐러셀
│   ├── Intro.tsx           # 이름 + 직함
│   ├── Motion.tsx          # 공통 페이드인 애니메이션 래퍼
│   ├── Nav.tsx             # 상단 네비게이션 바
│   ├── badge/              # shields.io 뱃지 컴포넌트 20개
│   ├── project/
│   │   └── ProjectItem.tsx
│   └── work/
│       ├── Work.tsx            # 경력 전체 (인라인 JSX, 데이터 미분리)
│       ├── WorkItem.tsx
│       └── WorkProjectItem.tsx
├── data/
│   └── projects.tsx        # 프로젝트 데이터 배열
└── models/
    └── project.ts          # Project 인터페이스
```

---

## 현재 데이터 모델

### `Project` (src/models/project.ts)
```ts
interface Project {
  title: string;
  period: string;
  stacks: React.ReactNode[];   // 뱃지 컴포넌트 배열
  hero: React.ReactNode;       // ImageSwiper 또는 iframe
  desc: React.ReactNode;       // JSX 설명문
  github?: string;
  link?: string;
}
```

### Work/Career (현재 데이터 모델 없음)
경력 데이터는 `Work.tsx` 안에 인라인 JSX로 하드코딩. 데이터 파일/인터페이스 분리 필요.

---

## 현재 기술 스택 (package.json)

| 패키지 | 용도 |
|---|---|
| next ^14.2.16 | 프레임워크 |
| react ^18 | UI |
| motion ^11.12.0 | 애니메이션 |
| swiper ^11.1.15 | 이미지 슬라이더 |
| @heroicons/react ^2.2.0 | 아이콘 |
| clsx ^2.1.1 | 조건부 className |

---

## 현재 디자인 시스템

- **컬러:** 파란색 계열 (`blue-500` / `blue-600`) 액센트, 라이트 배경
- **배경:** `from-[#93c5fd] to-[#818cf8]` 그라디언트 블러 폴리곤 (상단 + 하단, 30% opacity)
- **레이아웃:** `max-w-3xl` 중앙 정렬
- **반응형:** `md:` 텍스트 크기, `lg:` Swiper 높이 (300px → 600px)

---

## Revamp 작업 계획

### 목표 디자인 시스템 (레퍼런스 HTML 기준)

**폰트**
- Headline: `Manrope` (700/800/900) — 현재 Pretendard에서 교체
- Body/Label: `Inter` (400/500/600)

**컬러 (Material Design 3 기반)**
- `primary`: `#003ec7` (딥 블루)
- `primary-container`: `#0052ff`
- `secondary`: `#565e74`
- `surface`: `#faf8ff` (배경)
- `surface-container-lowest`: `#ffffff`
- `surface-container`: `#eaedff`
- `secondary-container`: `#dae2fd`
- `on-surface`: `#131b2e`

**아이콘:** `@heroicons/react` → `Material Symbols Outlined` (Google Fonts)

**레이아웃:** `max-w-3xl` → `max-w-7xl`, 좌측 오프셋 editorial 스타일

---

### 목표 페이지 구성 (3개 페이지)

| 경로 | 현재 | 변경 후 |
|---|---|---|
| `/` | 프로필 (이름+링크) | 메인 — 이름/직함 소개 + 연락처 |
| `/project` | 프로젝트 목록 | Portfolio — Bento 그리드 카드 |
| `/career` | 경력 타임라인 | Experience — 타임라인 재디자인 |

- 별도 About 페이지 **없음** — 메인 페이지가 소개 역할
- 연락처: **이메일 + GitHub만** (CTA 버튼 없음)
- 프로필 사진: **나중에 추가** (먼저 사진 없이 구현)
- `/project/[slug]` 상세 페이지 **없음** — 카드에서 GitHub/배포 링크로 직접 연결
- `/stack` 별도 페이지 **없음** — 스택은 경력 카드 + 프로젝트 카드 내에 표시
- 다크모드 **없음**

**네비게이션 변경:** `Profile | Career | Project` → `Home | Experience | Portfolio`

**모바일 하단 탭바 추가** (현재 없음)

---

### 페이지별 주요 UI 변경

#### `/` (About/Home)
- 히어로: 좌측 텍스트(12col 중 7~8) + 우측 프로필 사진(4~5col)
  - 사진에 grayscale → hover:color 효과
  - 사진 위 floating glass card ("Open for Collabs" 등 상태 표시)
- CTA 버튼 2개: "View Portfolio" (filled) + "About Me" (text with underline)
- 하단: Tech Stack 섹션 (4col 그리드, 아이콘 + 이름 + 한줄 설명 카드)

#### `/project` (Portfolio)
- Bento 그리드 (`md:grid-cols-12`):
  - 대형 Featured 카드: `col-span-8`, aspect-video 이미지
  - 중형 세로 카드: `col-span-4`, aspect-4/5
  - 중형 가로 카드: `col-span-5`
  - 복합 카드(이미지+텍스트 나란히): `col-span-7`
- 각 카드: 스택 뱃지 (pill, `secondary-container` 배경), 제목, 설명, 링크
- 하단 CTA 섹션: "Ready to start something?" 블록

#### `/career` (Experience)
- 타임라인 + 학력 분리 표시 예정 (레퍼런스 HTML 잘림으로 상세 미확인)

---

### 데이터 모델 변경 필요

**Project 모델 변경**
```ts
interface Project {
  title: string;
  period: string;
  stacks: string[];       // 변경: ReactNode[] → string[] (이름만)
  images: string[];       // 변경: hero(ReactNode) → 이미지 경로 배열
  highlight: string;      // 신규: 한 줄 핵심 설명
  desc: string;           // 변경: ReactNode → string
  github?: string;
  link?: string;
}
```

**Career 모델 신규 작성** (`src/data/careers.tsx` + `Career` 인터페이스로 분리)

---

### 패키지 변경 예정

| 패키지 | 변경 |
|---|---|
| `@heroicons/react` | 제거 → Material Symbols (Google Fonts CDN 또는 npm) |
| `swiper` | 유지 또는 자체 구현으로 대체 검토 |
| Pretendard (local font) | Manrope + Inter (Google Fonts)로 교체 |

---

### 결정된 사항

- 프로필 사진: 나중에 추가 (먼저 사진 없이 구현)
- 프로젝트 상세 페이지 없음 — 카드에 highlight, 이미지, GitHub/배포 링크만
- `/stack` 별도 페이지 없음 — 각 카드 내 스택 표시
- 다크모드 없음

---

## 구현 완료 현황

### 완료된 작업 (1차 revamp)

| 파일 | 변경 내용 |
|---|---|
| `tailwind.config.ts` | Material Design 3 컬러 토큰 + Manrope/Inter 폰트 변수 |
| `src/app/layout.tsx` | Google Fonts (Manrope+Inter), Material Symbols 아이콘, max-w-7xl |
| `src/app/globals.css` | 새 디자인 기반으로 정리, Swiper 색상 primary로 변경 |
| `src/components/Nav.tsx` | 상단 frosted glass 헤더 + 모바일 하단 탭바, 라벨: Home/Experience/Portfolio |
| `src/components/Background.tsx` | opacity 30→20, 색상 소프트닝 |
| `src/app/page.tsx` | 이름+직함 히어로, 이메일+GitHub 링크 (CTA 없음) |
| `src/app/project/page.tsx` | Bento 그리드 (grid-cols-12), 헤더 추가 |
| `src/components/project/ProjectCard.tsx` | **신규** — 새 카드 컴포넌트 (구 ProjectItem 대체) |
| `src/components/work/WorkItem.tsx` | 타임라인 dot + border-l 디자인 |
| `src/components/work/WorkProjectItem.tsx` | 카드 스타일, title 없을 때 조건부 렌더링 |
| `src/components/work/Work.tsx` | 쿠팡 추가, 삼성전자 퇴사일 수정, 전체 레이아웃 정리 |
| `src/app/career/page.tsx` | 헤더 추가 |

### 프로젝트 Bento 그리드 col-span 배정 (7개)
```
Row 1: [텅장수선소 8] [Aldente 4]
Row 2: [Switchers 7] [티니핑글 5]
Row 3: [Zephyr 4] [밤도깨비 4] [Lantern 4]
```
8번째 프로젝트 추가 시 colSpans 배열에 `"md:col-span-6"` 기본값 적용됨.

### 남아있는 작업
- [ ] 프로필 사진 추가 시 메인 페이지 (`page.tsx`) 좌우 2단 레이아웃으로 업데이트
- [ ] 기존 `ProjectItem.tsx` 삭제 가능 (현재 미사용, `ProjectCard.tsx`로 대체됨)
- [ ] badge 컴포넌트 `<img>` → `<Image />` 교체 (성능 최적화, 낮은 우선순위)
- [ ] 쿠팡 업무 내용 추가 (나중에)
