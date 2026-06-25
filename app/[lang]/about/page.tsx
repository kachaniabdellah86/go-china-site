import AboutPage from "@/components/AboutPage";
import { getStaticPageMetadata } from "@/lib/seo";
import { Locale } from "@/lib/yalla";

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

function getSafeLang(lang: string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const safeLang = getSafeLang(lang);

  return getStaticPageMetadata(safeLang, "about", "/about");
}

export default async function About({ params }: Props) {
  const { lang } = await params;
  const safeLang = getSafeLang(lang);

  return <AboutPage lang={safeLang} />;
}
