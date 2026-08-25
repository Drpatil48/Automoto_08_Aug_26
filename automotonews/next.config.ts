import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getAllRedirects } from "./lib/redirects";
import { getWordPressOrigin } from "./lib/wordpress-origin";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  poweredByHeader: false,
  compress: true,
  // Phase 8: avoid Next's automatic 308 slash redirect chaining with our 301 maps.
  // Trailing-slash old URLs are handled explicitly in lib/redirects.ts (one hop).
  skipTrailingSlashRedirect: true,
  turbopack: {
    // Keep Turbopack rooted on this app when a parent lockfile exists.
    root: projectRoot,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.automotonews.in",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "automotonews.in",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "www.automotonews.in",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        pathname: "/avatar/**",
      },
    ],
  },
  async redirects() {
    // Phase 8: evidence-based static rules + WP API–generated flat post maps.
    // See docs/PHASE8_REDIRECTS.md.
    return getAllRedirects();
  },
  // beforeFiles so /wp-* beats the App Router [category] catch-all after apex cutover.
  async rewrites() {
    const wp = getWordPressOrigin();
    return {
      beforeFiles: [
        {
          source: "/wp-json/:path*",
          destination: `${wp}/wp-json/:path*`,
        },
        {
          source: "/wp-admin/:path*",
          destination: `${wp}/wp-admin/:path*`,
        },
        {
          source: "/wp-content/:path*",
          destination: `${wp}/wp-content/:path*`,
        },
        {
          source: "/wp-includes/:path*",
          destination: `${wp}/wp-includes/:path*`,
        },
      ],
    };
  },
  async headers() {
    return [
      {
        source: "/placeholders/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/ads.txt",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
