import { redirect } from "next/navigation";
import { Locale } from "@/lib/yalla";

type Props = {
  params: Promise<{ lang: Locale }>;
};

function getSafeLang(lang: string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

export default async function ContactRedirectPage({ params }: Props) {
  const { lang } = await params;
  redirect(`/${getSafeLang(lang)}/apply`);
}
