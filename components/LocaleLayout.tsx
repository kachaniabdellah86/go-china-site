"use client";

import { useEffect } from "react";
import ConsentAndTracking from "@/components/ConsentAndTracking";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileStickyWhatsapp from "@/components/MobileStickyWhatsapp";

type Props = {
  children: React.ReactNode;
  lang: "fr" | "en" | "ar";
};

export default function LocaleLayout({ children, lang }: Props) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <div
      lang={lang}
      className="min-h-screen overflow-x-clip"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="animate-fade-in">
        <Navbar lang={lang} />
        <main className="gradient-bg pb-24 md:pb-0">{children}</main>
        <Footer lang={lang} />
        <MobileStickyWhatsapp lang={lang} />
        <ConsentAndTracking lang={lang} />
      </div>
    </div>
  );
}
