import "./globals.css";
import type { Metadata } from "next";
import { headers } from "next/headers";
import { siteBaseUrl } from "@/lib/yalla";

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  title: {
    default: "YALLA CHINA",
    template: "%s | YALLA CHINA",
  },
  description:
    "YALLA CHINA helps Moroccan students study in China with clear guidance around scholarship options, university choice, admission, visa, travel, and arrival support.",
  applicationName: "YALLA CHINA",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/yalla-china-mark.svg",
    shortcut: "/yalla-china-mark.svg",
  },
  openGraph: {
    title: "YALLA CHINA",
    description:
      "Founder-led study guidance for students who want to study in China with more clarity and more trust.",
    url: siteBaseUrl,
    siteName: "YALLA CHINA",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YALLA CHINA",
    description:
      "Study in China with serious guidance around admission, visa, travel, and arrival.",
  },
  alternates: {
    languages: {
      fr: "/fr",
      en: "/en",
      ar: "/ar",
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localeHeader = (await headers()).get("x-yalla-locale");
  const locale =
    localeHeader === "fr" || localeHeader === "en" || localeHeader === "ar"
      ? localeHeader
      : "fr";

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className="min-h-screen bg-[#faf8f5] text-zinc-900 antialiased">
        {children}
      </body>
    </html>
  );
}
