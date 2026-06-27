import path from "path";
import type { NextConfig } from "next";

const projectRoot = __dirname;

// Use .next-copy locally, but default .next on Vercel/production
const isVercel = process.env.VERCEL === '1' || process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  distDir: isVercel ? ".next" : ".next-copy",
  images: {
    formats: ["image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|mp4)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  turbopack: {
    root: projectRoot,
  },
  webpack: (config, { dir }) => {
    config.resolve ??= {};
    config.resolve.alias ??= {};

    const existingModules: unknown[] = Array.isArray(config.resolve.modules)
      ? config.resolve.modules
      : config.resolve.modules
        ? [config.resolve.modules]
        : [];

    if (
      !Array.isArray(config.resolve.alias) &&
      typeof config.resolve.alias === "object"
    ) {
      config.resolve.alias.tailwindcss = path.join(dir, "node_modules", "tailwindcss");
      config.resolve.alias["@tailwindcss/postcss"] = path.join(
        dir,
        "node_modules",
        "@tailwindcss",
        "postcss"
      );
    }

    config.resolve.modules = [
      path.join(dir, "node_modules"),
      ...existingModules.filter(
        (modulePath): modulePath is string => typeof modulePath === "string"
      ),
    ];

    return config;
  },
};

export default nextConfig;
