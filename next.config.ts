import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.misionary.misionary.com.ar",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
