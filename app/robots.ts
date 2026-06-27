import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/yalla";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/api"],
      },
    ],
    sitemap: `${siteBaseUrl}/sitemap.xml`,
  };
}
