import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "YALLA CHINA",
    short_name: "YALLA CHINA",
    description:
      "Founder-led study guidance for Moroccan students who want to study in China with more clarity and trust.",
    start_url: "/fr",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#8B0000",
    icons: [
      {
        src: "/yalla-china-mark.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
