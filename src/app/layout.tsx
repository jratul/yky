import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Background from "@components/Background";
import Nav from "@components/Nav";

export const metadata: Metadata = {
  title: "Keonyeol Yu",
  description: "Web Frontend Developer",
};

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
        />
      </head>
      <body className="font-body bg-surface text-on-surface">
        <Background>
          <Nav />
          <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
            {children}
          </main>
        </Background>
      </body>
    </html>
  );
}
