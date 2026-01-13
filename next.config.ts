import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100], // Allow quality 100 to fix warning
  },
};

export default nextConfig;
