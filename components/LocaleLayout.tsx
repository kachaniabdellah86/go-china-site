"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ConsentAndTracking from "@/components/ConsentAndTracking";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyWhatsapp from "@/components/MobileStickyWhatsapp";

type Locale = "fr" | "en" | "ar";

type Props = {
  children: React.ReactNode;
  lang: Locale;
};

function getSafeLang(lang: string): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

export default function LocaleLayout({ children, lang }: Props) {
  const pathname = usePathname() || "/";
  const safeLang = getSafeLang(lang);

  const isImmersiveHome =
    pathname === `/${safeLang}` ||
    pathname === `/${safeLang}/` ||
    pathname === "/";

  useEffect(() => {
    const dir = safeLang === "ar" ? "rtl" : "ltr";

    document.documentElement.lang = safeLang;
    document.documentElement.dir = dir;
    document.body.dir = dir;
  }, [safeLang]);

  return (
    <div
      lang={safeLang}
      className="min-h-screen overflow-x-clip"
      dir={safeLang === "ar" ? "rtl" : "ltr"}
    >
      <div>
        <Navbar lang={safeLang} />

        <main className={isImmersiveHome ? "" : "gradient-bg pb-24 md:pb-0"}>
          {children}
        </main>

        {!isImmersiveHome ? <Footer lang={safeLang} /> : null}

        {!isImmersiveHome ? <MobileStickyWhatsapp lang={safeLang} /> : null}

        <ConsentAndTracking lang={safeLang} />
      </div>
    </div>
  );
}
