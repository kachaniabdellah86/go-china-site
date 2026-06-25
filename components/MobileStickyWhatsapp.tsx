"use client";

import BrandLogo from "@/components/BrandLogo";
import { buildWhatsappUrl, Locale } from "@/lib/yalla";

const copy = {
  fr: {
    label: "WhatsApp",
    helper: "Consultation gratuite",
    action: "Ouvrir",
  },
  en: {
    label: "WhatsApp",
    helper: "Free consultation",
    action: "Open",
  },
  ar: {
    label: "واتساب",
    helper: "استشارة مجانية",
    action: "افتح",
  },
} as const;

export default function MobileStickyWhatsapp({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = lang === "ar";

  return (
    <div className="fixed inset-x-3 bottom-3 z-[80] pb-[env(safe-area-inset-bottom)] sm:inset-x-4 sm:bottom-4 md:hidden">
      <a
        href={buildWhatsappUrl()}
        target="_blank"
        rel="noreferrer"
        data-track="mobile_whatsapp_cta"
        data-track-value={lang}
        className={`mx-auto flex max-w-md items-center justify-between rounded-[1.2rem] border border-[#EDB80B]/40 bg-[#0f0f0f]/94 px-3 py-2.5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[1.5rem] sm:px-4 sm:py-3 ${
          isArabic ? "flex-row-reverse text-right" : ""
        }`}
      >
        <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
          <BrandLogo mode="mark" size="xs" variant="dark" className="bg-white/0 p-0" />
          <div className="min-w-0">
            <p className="text-sm font-semibold">{t.label}</p>
            <p className="truncate text-xs text-white/62">{t.helper}</p>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-[#EDB80B] px-3 py-1 text-xs font-semibold text-black">
          {t.action}
        </span>
      </a>
    </div>
  );
}
