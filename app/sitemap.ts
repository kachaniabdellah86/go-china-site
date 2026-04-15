import type { MetadataRoute } from "next";
import { guideSlugs } from "@/lib/guides";
import { siteBaseUrl } from "@/lib/yalla";

const locales = ["fr", "en", "ar"] as const;
const staticPaths = [
  "",
  "/about",
  "/services",
  "/faq",
  "/apply",
  "/contact",
  "/privacy",
  "/terms",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries = locales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${siteBaseUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }))
  );

  const guideEntries = locales.flatMap((locale) =>
    guideSlugs.map((slug) => ({
      url: `${siteBaseUrl}/${locale}/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );

  return [...staticEntries, ...guideEntries];
}
