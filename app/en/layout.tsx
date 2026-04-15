import type { Metadata } from "next";
import type { ReactNode } from "react";
import LocaleLayout from "@/components/LocaleLayout";
import { siteBaseUrl } from "@/lib/yalla";

export const metadata: Metadata = {
  title: "Study in China with serious guidance",
  description:
    "Yalla China supports Moroccan students and families with orientation, admission, visa, travel, and arrival support for China.",
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/fr",
      en: "/en",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "YALLA CHINA in English",
    description:
      "Founder-led study guidance for families planning a serious university journey to China.",
    url: `${siteBaseUrl}/en`,
    locale: "en_US",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <LocaleLayout lang="en">{children}</LocaleLayout>;
}
