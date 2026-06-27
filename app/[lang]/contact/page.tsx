import ContactPage from "@/components/ContactPage";
import { getStaticPageMetadata } from "@/lib/seo";
import { Locale } from "@/lib/yalla";

type Props = {
  params: Promise<{ lang: Locale }>;
};

function getSafeLang(lang: string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

export async function generateMetadata({ params }: Props) {
  const { lang } = await params;
  const safeLang = getSafeLang(lang);

  return getStaticPageMetadata(safeLang, "contact", "/contact");
}

export default async function Contact({ params }: Props) {
  const { lang } = await params;
  const safeLang = getSafeLang(lang);

  return <ContactPage lang={safeLang} />;
}
