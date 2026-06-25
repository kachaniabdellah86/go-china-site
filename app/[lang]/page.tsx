import HomeLanding from "@/components/HomeLanding";
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

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const safeLang = getSafeLang(lang);

  return getStaticPageMetadata(safeLang, "home", "");
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const safeLang = getSafeLang(lang);

  return <HomeLanding lang={safeLang} />;
}
