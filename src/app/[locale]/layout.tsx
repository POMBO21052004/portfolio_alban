import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Use JetBrains Mono
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import InstallPWA from "@/components/InstallPWA";
import { Analytics } from "@vercel/analytics/react";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("https://portfolio-alban.vercel.app"),
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/logo.png",
    },
    manifest: "/manifest.json",
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: "https://portfolio-alban.vercel.app", // Fallback URL, typically set via env
      siteName: "Pombo Mbe Alban Portfolio",
      images: [
        {
          url: "/logo.png",
          width: 800,
          height: 600,
          alt: t("title"),
        },
      ],
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/logo.png"],
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: "default",
      title: t("title"),
    },
    formatDetection: {
      telephone: false,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} antialiased pt-[60px] xl:pt-[80px]`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <PageTransition>{children}</PageTransition>
          <InstallPWA />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
