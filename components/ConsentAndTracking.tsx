"use client";

import { useEffect, useMemo, useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";
import { Locale } from "@/lib/yalla";
import {
  readTrackingConsent,
  trackEvent,
  TrackingConsent,
  trackingConsentChangedEvent,
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

function subscribeToTrackingConsent(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(trackingConsentChangedEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(trackingConsentChangedEvent, callback);
  };
}

export default function ConsentAndTracking({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const consent = useSyncExternalStore(
    subscribeToTrackingConsent,
    readTrackingConsent,
    () => null
  );
  const isArabic = lang === "ar";

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
    if (value === "accepted") {
      trackEvent("cookie_consent_accepted", { locale: lang });
    }
  }

  return (
    <>
      {consent === "accepted" ? <Analytics /> : null}

      {consent === null ? (
        <div
          role="dialog"
          aria-label={t.title}
          className="fixed inset-x-3 bottom-[5.5rem] z-[90] sm:inset-x-6 sm:bottom-5"
        >
          <div
            className={`mx-auto flex max-w-4xl flex-col gap-3 rounded-[1.4rem] border border-white/10 bg-[#0d0d0d]/94 p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:flex-row sm:items-center sm:gap-5 sm:px-5 ${
              isArabic ? "text-right" : ""
            }`}
          >
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#EDB80B]">
                {t.title}
              </p>
              <p className="mt-1 text-xs leading-5 text-white/72 sm:text-[13px]">
                {t.text}{" "}
                <Link href={links.privacy} className="underline decoration-white/30 underline-offset-2 hover:text-white">
                  {t.privacy}
                </Link>
                {" · "}
                <Link href={links.terms} className="underline decoration-white/30 underline-offset-2 hover:text-white">
                  {t.terms}
                </Link>
              </p>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => saveConsent("essential")}
                className="flex-1 rounded-full border border-white/18 bg-white/8 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-white/14 sm:flex-none"
              >
                {t.essential}
              </button>
              <button
                type="button"
                onClick={() => saveConsent("accepted")}
                className="flex-1 rounded-full bg-[#EDB80B] px-4 py-2.5 text-xs font-black text-black transition hover:opacity-95 sm:flex-none"
              >
                {t.accept}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
