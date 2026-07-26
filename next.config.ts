import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "woodencloudsacademy.com",
      },
      {
        protocol: "https",
        hostname: "api.woodenclouds.tech",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
