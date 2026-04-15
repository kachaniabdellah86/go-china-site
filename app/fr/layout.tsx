import type { Metadata } from "next";
import type { ReactNode } from "react";
import LocaleLayout from "@/components/LocaleLayout";
import { siteBaseUrl } from "@/lib/yalla";

export const metadata: Metadata = {
  title: "Étudier en Chine avec un accompagnement sérieux",
  description:
    "Yalla China accompagne les étudiants marocains et leurs familles sur l'orientation, l'admission, le visa, le voyage et l'arrivée en Chine.",
  alternates: {
    canonical: "/fr",
    languages: {
      fr: "/fr",
      en: "/en",
      ar: "/ar",
    },
  },
  openGraph: {
    title: "YALLA CHINA en français",
    description:
      "Étudier en Chine avec une guidance sérieuse, du premier échange jusqu'à l'arrivée.",
    url: `${siteBaseUrl}/fr`,
    locale: "fr_MA",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <LocaleLayout lang="fr">{children}</LocaleLayout>;
}
