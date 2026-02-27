import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';
import withPWAInit from "@ducanh2912/next-pwa";

const withNextIntl = createNextIntlPlugin();

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
  },
  // @ts-ignore - allowedDevOrigins is a new feature in Next.js 15+
  allowedDevOrigins: ["192.168.100.14"],
};

export default withPWA(withNextIntl(nextConfig));
