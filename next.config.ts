import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100], // Allow quality 100 to fix warning
  },
};

export default withNextIntl(nextConfig);
