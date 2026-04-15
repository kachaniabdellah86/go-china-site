"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import LanguageSwitch from "./LanguageSwitch";
import {
  buildWhatsappUrl,
  founderName,
  Locale,
} from "@/lib/yalla";

type Props = {
  lang: Locale;
};

const navigation = {
  fr: [
    { href: "/fr", label: "Accueil" },
    { href: "/fr/about", label: "À propos" },
    { href: "/fr/services", label: "Services" },
    { href: "/fr/faq", label: "FAQ" },
    { href: "/fr/apply", label: "Candidature" },
    { href: "/fr/contact", label: "Contact" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/about", label: "About" },
    { href: "/en/services", label: "Services" },
    { href: "/en/faq", label: "FAQ" },
    { href: "/en/apply", label: "Apply" },
    { href: "/en/contact", label: "Contact" },
  ],
  ar: [
    { href: "/ar", label: "الرئيسية" },
    { href: "/ar/about", label: "من نحن" },
    { href: "/ar/services", label: "الخدمات" },
    { href: "/ar/faq", label: "الأسئلة الشائعة" },
    { href: "/ar/apply", label: "التقديم" },
    { href: "/ar/contact", label: "تواصل معنا" },
  ],
} as const;

const meta = {
  fr: {
    strapline: "Bourses, admission, visa, arrivée",
    founder: `Guidance fondée par ${founderName}`,
    whatsapp: "Consultation gratuite",
    whatsappShort: "Consultation",
    navigation: "Navigation",
    menuHint: "Choisissez une page ou changez de langue.",
  },
  en: {
    strapline: "Scholarship, admission, visa, arrival",
    founder: `Guidance founded by ${founderName}`,
    whatsapp: "Free consultation",
    whatsappShort: "Consultation",
    navigation: "Navigation",
    menuHint: "Choose a page or switch language.",
  },
  ar: {
    strapline: "منحة، قبول، تأشيرة، وصول",
    founder: `إشراف مؤسس من ${founderName}`,
    whatsapp: "استشارة مجانية",
    whatsappShort: "استشارة",
    navigation: "التنقل",
    menuHint: "اختر الصفحة أو غيّر اللغة.",
  },
} as const;

export default function Navbar({ lang }: Props) {
  const items = navigation[lang];
  const t = meta[lang];
  const pathname = usePathname() || `/${lang}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isArabic = lang === "ar";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const whatsappHref = buildWhatsappUrl();

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050505]/92 shadow-[0_12px_42px_rgba(0,0,0,0.28)] backdrop-blur-xl"
          : "border-b border-white/6 bg-[#050505]/78 backdrop-blur-lg"
      }`}
    >
      <div className="mx-auto w-full max-w-[1360px] px-4 sm:px-6 xl:px-8">
        <div className="grid min-h-[84px] grid-cols-[auto_1fr_auto] items-center gap-3 py-3 xl:gap-5">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href={`/${lang}`}
              className="shrink-0"
              data-track="nav_logo"
              data-track-value={lang}
            >
              <BrandLogo size="sm" variant="dark" />
            </Link>
          </div>

          <div className="hidden min-w-0 flex-1 justify-center xl:flex">
            <nav className="flex min-w-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-[15px] shadow-[0_18px_40px_rgba(0,0,0,0.14)]">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  data-track="nav_link"
                  data-track-value={item.href}
                  className={`rounded-full px-3.5 py-2 font-medium transition-all duration-200 2xl:px-4 ${
                    pathname === item.href
                      ? "bg-white text-black shadow-lg shadow-white/10"
                      : "text-white/74 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-3">
            <LanguageSwitch variant="dark" />
            <a
              href={whatsappHref}
              data-track="nav_whatsapp_cta"
              data-track-value={lang}
              className="rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_10px_28px_rgba(177,127,2,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(177,127,2,0.42)]"
              target="_blank"
              rel="noreferrer"
            >
              <span className="2xl:hidden">{t.whatsappShort}</span>
              <span className="hidden 2xl:inline">{t.whatsapp}</span>
            </a>
          </div>

          <div className="flex shrink-0 items-center gap-2 xl:hidden">
            <LanguageSwitch variant="dark" compact />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              aria-label={
                open
                  ? lang === "fr"
                    ? "Fermer le menu"
                    : lang === "en"
                      ? "Close menu"
                      : "أغلق القائمة"
                  : lang === "fr"
                    ? "Ouvrir le menu"
                    : lang === "en"
                      ? "Open menu"
                      : "افتح القائمة"
              }
              aria-expanded={open}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                    open ? "scale-0 opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-full rounded-full bg-current transition-all duration-200 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <div className="pb-4 animate-fade-in-down xl:hidden">
            <div
              className={`rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-4 shadow-2xl backdrop-blur-xl ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <div className="mb-4 border-b border-white/10 pb-4">
                <div className={`mb-3 ${isArabic ? "flex justify-end" : ""}`}>
                  <BrandLogo size="sm" variant="dark" />
                </div>
                <p className="section-eyebrow text-[11px] font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
                  {t.strapline}
                </p>
                <p className="mt-2 text-sm text-white/68">{t.founder}</p>
              </div>

              <div className="mb-3 border-b border-white/10 pb-3">
                <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
                  {t.navigation}
                </p>
                <p className="mt-1 text-sm text-white/74">{t.menuHint}</p>
              </div>

              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    data-track="mobile_nav_link"
                    data-track-value={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-white text-black shadow-lg"
                        : "text-white/88 hover:bg-white/10 hover:text-[#EDB80B]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a
                href={whatsappHref}
                data-track="mobile_nav_whatsapp_cta"
                data-track-value={lang}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(177,127,2,0.3)] transition hover:opacity-95"
                target="_blank"
                rel="noreferrer"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
