import type { Metadata } from "next";
import { notFound } from "next/navigation";
import GuidePage from "@/components/GuidePage";
import { guideSlugs, isGuideSlug } from "@/lib/guides";
import { getGuideMetadata } from "@/lib/seo";
import { Locale } from "@/lib/yalla";

type Props = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

function getSafeLang(lang: string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

export function generateStaticParams() {
  return ["fr", "en", "ar"].flatMap((lang) =>
    guideSlugs.map((slug) => ({
      lang,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const safeLang = getSafeLang(lang);

  if (!isGuideSlug(slug)) {
    return {};
  }

  return getGuideMetadata(safeLang, slug);
}

export default async function GuidePageRoute({ params }: Props) {
  const { lang, slug } = await params;
  const safeLang = getSafeLang(lang);

  if (!isGuideSlug(slug)) {
    notFound();
  }

  return <GuidePage lang={safeLang} slug={slug} />;
}
