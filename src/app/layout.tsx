import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Background from "@components/Background";
import Nav from "@components/Nav";

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
      <body className={"font-pretendard tracking-tighter"}>
        <Background>
          <Nav />
          <div className="max-w-3xl mx-auto">{children}</div>
        </Background>
      </body>
    </html>
  );
}
