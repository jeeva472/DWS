import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/ai-automation",
        destination: "/services/ai-automation",
        permanent: true,
      },
      {
        source: "/seo",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/digital-marketing",
        destination: "/services/digital-marketing",
        permanent: true,
      },
      {
        source: "/vibe-code-development",
        destination: "/services/vibe-code-development",
        permanent: true,
      },
      {
        source: "/chatbot-development",
        destination: "/services/chatbot-development",
        permanent: true,
      },
      {
        source: "/api-integration",
        destination: "/services/api-integration",
        permanent: true,
      },
      {
        source: "/web-development",
        destination: "/services/web-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
