"use client";

import { useEffect, useMemo, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { Locale } from "@/lib/yalla";
import {
  readTrackingConsent,
  trackEvent,
  TrackingConsent,
  writeTrackingConsent,
} from "@/lib/tracking";

const copy = {
  fr: {
    title: "Cookies et mesure d'audience",
    text:
      "Nous utilisons des cookies essentiels pour le fonctionnement du site et, avec votre accord, des mesures d'audience pour améliorer les parcours.",
    accept: "Accepter l'analyse",
    essential: "Essentiel uniquement",
    privacy: "Confidentialité",
    terms: "Conditions",
  },
  en: {
    title: "Cookies and analytics",
    text:
      "We use essential cookies for site operation and, with your consent, analytics cookies to improve journeys and CTA performance.",
    accept: "Accept analytics",
    essential: "Essential only",
    privacy: "Privacy",
    terms: "Terms",
  },
  ar: {
    title: "الكوكيز والتحليلات",
    text:
      "نستخدم كوكيز أساسية لتشغيل الموقع، ومع موافقتك نستخدم تحليلات لتحسين المسارات وأداء الدعوات إلى الإجراء.",
    accept: "أوافق على التحليلات",
    essential: "الأساسي فقط",
    privacy: "الخصوصية",
    terms: "الشروط",
  },
} as const;

export default function ConsentAndTracking({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const [consent, setConsent] = useState<TrackingConsent | null>(null);
  const isArabic = lang === "ar";

  useEffect(() => {
    setConsent(readTrackingConsent());
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) {
        return;
      }

      const tracked = target.closest<HTMLElement>("[data-track]");
      const anchor = target.closest<HTMLAnchorElement>("a[href]");

      if (tracked?.dataset.track) {
        trackEvent(tracked.dataset.track, {
          locale: lang,
          value: tracked.dataset.trackValue || tracked.getAttribute("href") || "",
        });
        return;
      }

      if (anchor?.href.includes("wa.me")) {
        trackEvent("whatsapp_click", {
          locale: lang,
          value: anchor.href,
        });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [lang]);

  const links = useMemo(
    () => ({
      privacy: `/${lang}/privacy`,
      terms: `/${lang}/terms`,
    }),
    [lang]
  );

  function saveConsent(value: TrackingConsent) {
    writeTrackingConsent(value);
    setConsent(value);
    if (value === "accepted") {
      trackEvent("cookie_consent_accepted", { locale: lang });
    }
  }

  return (
    <>
      {consent === "accepted" ? <Analytics /> : null}

      {consent === null ? (
        <div className="fixed inset-x-4 bottom-24 z-[90] sm:bottom-6">
          <div
            className={`mx-auto max-w-3xl rounded-[1.8rem] border border-white/10 bg-[#0d0d0d]/94 p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EDB80B]">
              {t.title}
            </p>
            <p className="mt-3 text-sm leading-7 text-white/78">{t.text}</p>

            <div
              className={`mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
                isArabic ? "sm:justify-end" : ""
              }`}
            >
              <button
                type="button"
                onClick={() => saveConsent("accepted")}
                className="rounded-full bg-[#EDB80B] px-5 py-3 text-sm font-semibold text-black transition hover:opacity-95"
              >
                {t.accept}
              </button>
              <button
                type="button"
                onClick={() => saveConsent("essential")}
                className="rounded-full border border-white/18 bg-white/8 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/14"
              >
                {t.essential}
              </button>
              <div className={`flex items-center gap-3 text-sm text-white/70 ${isArabic ? "sm:mr-auto" : "sm:ml-auto"}`}>
                <Link href={links.privacy} className="hover:text-white">
                  {t.privacy}
                </Link>
                <Link href={links.terms} className="hover:text-white">
                  {t.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
