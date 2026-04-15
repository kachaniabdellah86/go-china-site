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
    <div className="fixed inset-x-4 bottom-4 z-[80] pb-[env(safe-area-inset-bottom)] md:hidden">
      <a
        href={buildWhatsappUrl()}
        target="_blank"
        rel="noreferrer"
        data-track="mobile_whatsapp_cta"
        data-track-value={lang}
        className={`flex items-center justify-between rounded-[1.5rem] border border-[#EDB80B]/40 bg-[#0f0f0f]/94 px-4 py-3 text-white shadow-[0_18px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl ${
          isArabic ? "flex-row-reverse text-right" : ""
        }`}
      >
        <div className={`flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
          <BrandLogo mode="mark" size="xs" variant="dark" className="bg-white/0 p-0" />
          <div>
            <p className="text-sm font-semibold">{t.label}</p>
            <p className="text-xs text-white/62">{t.helper}</p>
          </div>
        </div>
        <span className="rounded-full bg-[#EDB80B] px-3 py-1 text-xs font-semibold text-black">
          {t.action}
        </span>
      </a>
    </div>
  );
}
