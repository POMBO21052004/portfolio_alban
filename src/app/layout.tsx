import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Use JetBrains Mono
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Alban Pombo | Full Stack Developer",
  description: "Portfolio of Alban Pombo, Full Stack Developer skilled in React, Next.js, Django, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} antialiased pt-[60px] xl:pt-[80px]`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
