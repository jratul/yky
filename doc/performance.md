# Lighthouse 만점 달성 요소

Lighthouse 100점 달성 기준: Performance / Accessibility / Best Practices / SEO 전 항목.

---

## 1. 정적 페이지 생성 (Static Generation)

Next.js App Router의 기본 동작으로, 모든 페이지(`/`, `/career`, `/project`)가 빌드 타임에 HTML로 사전 렌더링된다.

```
○ (Static) prerendered as static content
```

서버 사이드 렌더링이나 클라이언트 렌더링 없이 CDN에서 즉시 응답하므로 TTFB(Time to First Byte)가 최소화된다.

---

## 2. 본문 폰트 비차단 로딩 (next/font)

Manrope, Inter를 `next/font/google`로 로드한다. `display: "optional"`을 사용해 폰트가 캐시에 없을 경우 시스템 폰트로 fallback하며, 레이아웃 시프트(CLS)를 완전히 제거한다.

```ts
// src/app/layout.tsx
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "optional",
});
```

`next/font`는 빌드 타임에 폰트를 다운로드하고 self-hosting하므로 Google Fonts CDN 왕복 요청이 발생하지 않는다.

---

## 3. 아이콘 폰트 비차단 로딩 (Script afterInteractive)

Material Symbols는 아이콘 전용 폰트로, 본문 렌더링과 무관하다. `<head>`에 `<link>`로 넣으면 렌더 블로킹이 발생하므로 `Script strategy="afterInteractive"`로 비동기 로드한다.

```tsx
// src/app/layout.tsx
<Script
  id="material-symbols"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:...&display=block';
      l.onload = () => document.documentElement.classList.add('fonts-loaded');
      document.head.appendChild(l);
    `,
  }}
/>
```

**`display=block` 파라미터**: 폰트 로드 전 fallback 텍스트("terminal" 등) 대신 invisible 처리. FOUT(Flash of Unstyled Text) 방지.

**`fonts-loaded` 클래스 토글**: 폰트 로드 완료 시 `<html>`에 클래스 추가. CSS와 연동해 아이콘 visibility를 제어한다.

---

## 4. 아이콘 FOUT 방지 CSS

```css
/* src/app/globals.css */
.material-symbols-outlined {
  visibility: hidden;
}

.fonts-loaded .material-symbols-outlined {
  visibility: visible;
}
```

폰트가 로드되기 전엔 아이콘 영역이 비어 보이고, 로드 완료 후 즉시 아이콘으로 표시된다. 텍스트가 노출되는 FOUT 없음.

---

## 5. Tailwind CSS 최소 번들

Tailwind v4는 사용된 클래스만 번들에 포함한다. 전체 CSS 파일 크기가 매우 작아 렌더 블로킹 시간이 최소화된다.

---

## 6. next/image 자동 최적화

프로젝트 이미지는 `next/image`의 `<Image>` 컴포넌트로 렌더링된다. WebP 변환, 적절한 `sizes` 지정, lazy loading이 자동 적용된다.

---

## 주의: 렌더 블로킹 유발 패턴

아래 패턴은 FCP를 크게 저하시킨다. 사용 금지.

```html
<!-- ❌ 렌더 블로킹 발생 (FCP 4.1s 관측됨) -->
<head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/..." />
</head>
```

외부 CSS를 `<head>`에 직접 삽입하면 브라우저가 해당 리소스를 받을 때까지 렌더링을 중단한다. 아이콘 폰트처럼 초기 렌더와 무관한 리소스는 반드시 비동기로 로드해야 한다.
