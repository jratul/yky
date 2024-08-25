import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keonyeol Yu",
  description: "Portfolio",
};

const pretendard = localFont({
  src: "./fonts/PretendardVariable.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={"font-pretendard tracking-tight text-white"}>
        {children}
      </body>
    </html>
  );
}
