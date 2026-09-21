"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ConsentAndTracking from "@/components/ConsentAndTracking";
import Navbar from "@/components/Navbar";
import MobileStickyWhatsapp from "@/components/MobileStickyWhatsapp";
import SmoothScroll from "@/components/SmoothScroll";

type Locale = "fr" | "en" | "ar";

type Props = {
  children: React.ReactNode;
  lang: Locale;
  /**
   * Footer is a server component, but importing it here would pull it — and its
   * full trilingual copy — across the client boundary. Passing it in as a slot
   * keeps it rendering on the server.
   */
  footer: React.ReactNode;
};

function getSafeLang(lang: string): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

export default function LocaleLayout({ children, lang, footer }: Props) {
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
    <SmoothScroll enabled={!isImmersiveHome}>
      <div
        lang={safeLang}
        className="min-h-screen overflow-x-clip"
        dir={safeLang === "ar" ? "rtl" : "ltr"}
      >
        <div>
          <Navbar lang={safeLang} />

          <main className={isImmersiveHome ? "pb-24 md:pb-0" : "gradient-bg pb-24 md:pb-0"}>
            {children}
          </main>

          {footer}

          <MobileStickyWhatsapp lang={safeLang} />

          <ConsentAndTracking lang={safeLang} />
        </div>
      </div>
    </SmoothScroll>
  );
}
