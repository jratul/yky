import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "유건열 · Keonyeol Yu — Web Frontend Developer",
  description:
    "6년간 삼성전자에서 대규모 사내 개발 도구를 만들었고, 지금은 쿠팡에서 프론트엔드를 개발합니다.",
  openGraph: {
    title: "유건열 · Keonyeol Yu — Web Frontend Developer",
    description: "React · Next.js · TypeScript 프론트엔드 개발자 포트폴리오",
    type: "website",
    locale: "ko_KR",
  },
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  variable: "--font-pretendard",
  display: "optional",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains",
  display: "optional",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ko"
      className={`${pretendard.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
