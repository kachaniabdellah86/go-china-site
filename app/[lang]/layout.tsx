import type { Metadata } from "next";
import type { ReactNode } from "react";
import LocaleLayout from "@/components/LocaleLayout";
import { Locale, siteBaseUrl } from "@/lib/yalla";

type Props = {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

function getSafeLang(lang: string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

const metadataByLang: Record<Locale, Metadata> = {
  fr: {
    title: "Étudier en Chine avec un accompagnement sérieux",
    description:
      "Yalla China accompagne les étudiants marocains et leurs familles sur l’orientation, l’admission, le visa étudiant, la préparation et l’arrivée en Chine.",
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
        "Étudier en Chine avec une guidance sérieuse, du premier échange jusqu’à l’arrivée.",
      url: `${siteBaseUrl}/fr`,
      locale: "fr_MA",
    },
  },

  en: {
    title: "Study in China with serious guidance",
    description:
      "Yalla China supports Moroccan students and families with orientation, admission, student visa, preparation, and arrival support for China.",
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
  },

  ar: {
    title: "الدراسة في الصين مع مرافقة جدية",
    description:
      "يلا تشاينا ترافق الطلبة المغاربة وعائلاتهم في التوجيه والقبول والتأشيرة والتحضير والوصول إلى الصين.",
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
  },
};

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const safeLang = getSafeLang(lang);

  return metadataByLang[safeLang];
}

export default async function LangLayout({ children, params }: Props) {
  const { lang } = await params;
  const safeLang = getSafeLang(lang);

  return <LocaleLayout lang={safeLang}>{children}</LocaleLayout>;
}
