import type { Metadata } from "next";
import type { ReactNode } from "react";
import LocaleLayout from "@/components/LocaleLayout";
import { siteBaseUrl } from "@/lib/yalla";

export const metadata: Metadata = {
  title: "الدراسة في الصين مع مرافقة جدية",
  description:
    "يلا تشاينا ترافق الطلبة المغاربة وعائلاتهم في التوجيه والقبول والتأشيرة والسفر والوصول إلى الصين.",
  alternates: {
    canonical: "/ar",
    languages: {
      fr: "/fr",
      en: "/en",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "YALLA CHINA بالعربية",
    description:
      "مرافقة يقودها مؤسس عاش التجربة بنفسه من أول تواصل حتى الوصول إلى الجامعة في الصين.",
    url: `${siteBaseUrl}/ar`,
    locale: "ar_MA",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <LocaleLayout lang="ar">{children}</LocaleLayout>;
}
