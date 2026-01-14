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
  title: "Pombo Mbe Alban| Full Stack Developer",
  description: "Développeur Web Full-Stack agé de 22 ans, passionné par la création d’application moderne et intuitives, je transforme des idées complexes en code élégant. curieux et créatif, j’ai acquis de solides compétences en développement front-end et back-end, me permettant de concevoir des solutions complètes et performantes.",
  icons: {
    icon: "/logo.png",
  },
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
