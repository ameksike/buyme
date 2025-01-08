import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
  /*
  // [CanaryOnlyError: The experimental feature "experimental.ppr" can only be enabled when using the latest canary version of Next.js.]
  experimental: {
    ppr: "incremental",
    // after: true,
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },*/
};

export default nextConfig;
