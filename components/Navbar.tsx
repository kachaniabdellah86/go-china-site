"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import LanguageSwitch from "./LanguageSwitch";
import { buildWhatsappUrl, founderName, Locale } from "@/lib/yalla";

type Props = {
  lang: Locale | string;
};

type NavItem = {
  href: string;
  label: string;
  shortLabel?: string;
};

function getSafeLang(lang: string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

const navigation: Record<Locale, NavItem[]> = {
  fr: [
    { href: "/fr", label: "Accueil", shortLabel: "Accueil" },
    { href: "/fr/about", label: "À propos", shortLabel: "À propos" },
    { href: "/fr/services", label: "Services", shortLabel: "Services" },
    { href: "/fr/apply", label: "Candidature", shortLabel: "Postuler" },
  ],
  en: [
    { href: "/en", label: "Home", shortLabel: "Home" },
    { href: "/en/about", label: "About", shortLabel: "About" },
    { href: "/en/services", label: "Services", shortLabel: "Services" },
    { href: "/en/apply", label: "Apply", shortLabel: "Apply" },
  ],
  ar: [
    { href: "/ar", label: "الرئيسية", shortLabel: "الرئيسية" },
    { href: "/ar/about", label: "من نحن", shortLabel: "من نحن" },
    { href: "/ar/services", label: "الخدمات", shortLabel: "الخدمات" },
    { href: "/ar/apply", label: "التقديم", shortLabel: "التقديم" },
  ],
};

const meta: Record<
  Locale,
  {
    strapline: string;
    founder: string;
    whatsapp: string;
    whatsappShort: string;
    navigation: string;
    language: string;
    menuHint: string;
    open: string;
    close: string;
  }
> = {
  fr: {
    strapline: "Études en Chine • Admission • Visa • Arrivée",
    founder: `Accompagnement fondé par ${founderName}`,
    whatsapp: "Consultation",
    whatsappShort: "Consulter",
    navigation: "Navigation",
    language: "Langue",
    menuHint: "Choisissez une page ou changez de langue.",
    open: "Ouvrir le menu",
    close: "Fermer le menu",
  },
  en: {
    strapline: "Study in China • Admission • Visa • Arrival",
    founder: `Guidance founded by ${founderName}`,
    whatsapp: "Consultation",
    whatsappShort: "Consult",
    navigation: "Navigation",
    language: "Language",
    menuHint: "Choose a page or switch language.",
    open: "Open menu",
    close: "Close menu",
  },
  ar: {
    strapline: "الدراسة في الصين • قبول • تأشيرة • وصول",
    founder: `إشراف مؤسس من ${founderName}`,
    whatsapp: "استشارة",
    whatsappShort: "استشارة",
    navigation: "التنقل",
    language: "اللغة",
    menuHint: "اختر الصفحة أو غيّر اللغة.",
    open: "افتح القائمة",
    close: "أغلق القائمة",
  },
};

function isActivePath(pathname: string, href: string) {
  if (href === "/fr" || href === "/en" || href === "/ar") {
    return pathname === href || pathname === `${href}/`;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar({ lang }: Props) {
  const safeLang = getSafeLang(lang);
  const items = navigation[safeLang];
  const t = meta[safeLang];
  const pathname = usePathname() || `/${safeLang}`;

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isArabic = safeLang === "ar";
  const whatsappHref = buildWhatsappUrl();
  const mobileMenuId = `mobile-navigation-${safeLang}`;

  const isHomePage =
    pathname === `/${safeLang}` || pathname === `/${safeLang}/` || pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-2 transition-all duration-500 sm:px-4 ${
        scrolled ? "pt-2 sm:pt-3" : "pt-3 sm:pt-4"
      }`}
    >
      <div
        className={`mx-auto w-full max-w-[1340px] overflow-hidden rounded-[1.15rem] border backdrop-blur-2xl transition-all duration-500 sm:rounded-[1.45rem] ${
          scrolled
            ? "border-white/12 bg-[#070202]/88 shadow-[0_24px_80px_rgba(0,0,0,0.40)]"
            : isHomePage
              ? "border-white/10 bg-[#070202]/46 shadow-[0_18px_70px_rgba(0,0,0,0.24)]"
              : "border-white/10 bg-[#070202]/78 shadow-[0_18px_65px_rgba(0,0,0,0.30)]"
        }`}
      >
        <div className="relative">
          <div
            aria-hidden="true"
            className={`absolute inset-0 transition-opacity duration-500 ${
              scrolled || !isHomePage ? "opacity-100" : "opacity-70"
            } bg-[radial-gradient(circle_at_top_left,rgba(237,184,11,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(139,0,0,0.30),transparent_34%)]`}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.07] shoji-grid"
          />

          <div className="relative grid min-h-[54px] grid-cols-[auto_1fr_auto] items-center gap-2 px-2.5 sm:min-h-[68px] sm:gap-3 sm:px-4 lg:px-5">
            <Link
              href={`/${safeLang}`}
              className="group flex min-w-0 items-center gap-3"
              data-track="nav_logo"
              data-track-value={safeLang}
              aria-label="Yalla China"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[#EDB80B]/36 bg-[#EDB80B]/10 shadow-[0_0_32px_rgba(237,184,11,0.12)] transition duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
                <BrandLogo
                  mode="mark"
                  size="sm"
                  variant="dark"
                  className="p-0"
                />
              </span>

              <span className="hidden min-w-0 md:block">
                <span className="block text-[12px] font-black uppercase tracking-[0.25em] text-white">
                  Yalla <span className="text-[#EDB80B]">China</span>
                </span>
                <span className="mt-1 block text-[8.5px] font-bold uppercase tracking-[0.28em] text-white/42">
                  Dream. Trust. Achieve.
                </span>
              </span>
            </Link>

            <div className="hidden min-w-0 justify-center lg:flex">
              <nav className="flex min-w-0 items-center gap-1 rounded-full border border-white/10 bg-white/[0.052] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                {items.map((item) => {
                  const active = isActivePath(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      data-track="nav_link"
                      data-track-value={item.href}
                      className={`rounded-full px-3 py-2 text-[12px] font-black transition-all duration-300 xl:px-4 xl:text-sm ${
                        active
                          ? "bg-[#EDB80B] text-black shadow-[0_12px_30px_rgba(237,184,11,0.22)]"
                          : "text-white/68 hover:bg-white/[0.08] hover:text-white"
                      }`}
                    >
                      <span className="hidden xl:inline">{item.label}</span>
                      <span className="xl:hidden">{item.shortLabel ?? item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="hidden shrink-0 items-center gap-2 lg:flex">
              <div className="rounded-full border border-white/10 bg-black/16 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <LanguageSwitch variant="dark" compact />
              </div>

              <a
                href={whatsappHref}
                data-track="nav_whatsapp_cta"
                data-track-value={safeLang}
                className="rounded-full bg-[#EDB80B] px-4 py-3 text-[11px] font-black uppercase tracking-[0.13em] text-black shadow-[0_16px_42px_rgba(237,184,11,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_55px_rgba(237,184,11,0.30)] xl:px-5 xl:text-xs"
                target="_blank"
                rel="noreferrer"
              >
                <span className="xl:hidden">{t.whatsappShort}</span>
                <span className="hidden xl:inline">{t.whatsapp}</span>
              </a>
            </div>

            <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 lg:hidden">
              <div className="hidden rounded-full border border-white/10 bg-black/16 p-1 sm:block">
                <LanguageSwitch variant="dark" compact />
              </div>

              <button
                type="button"
                onClick={() => setOpen((value) => !value)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/[0.07] text-white shadow-sm transition hover:bg-white/[0.12] sm:h-11 sm:w-11"
                aria-label={open ? t.close : t.open}
                aria-expanded={open}
                aria-controls={mobileMenuId}
              >
                <span className="relative block h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                      open ? "translate-y-[7px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                      open ? "scale-0 opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-[14px] h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                      open ? "-translate-y-[7px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>

          {open ? (
            <div
              id={mobileMenuId}
              className="relative px-2.5 pb-2.5 animate-fade-in-down sm:px-3 sm:pb-3 lg:hidden"
            >
              <div
                className={`max-h-[calc(100svh-5.5rem)] overflow-y-auto overscroll-contain rounded-[1.05rem] border border-white/10 bg-black/42 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.24)] backdrop-blur-2xl sm:rounded-[1.25rem] sm:p-4 ${
                  isArabic ? "text-right" : "text-left"
                }`}
              >
                <div className="mb-3 border-b border-white/10 pb-3 sm:mb-4 sm:pb-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#EDB80B] sm:text-[11px] sm:tracking-[0.24em]">
                    {t.strapline}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-white/62 sm:text-sm sm:leading-6">
                    {t.founder}
                  </p>
                </div>

                <div className="mb-3 rounded-2xl border border-white/10 bg-white/[0.045] p-3 sm:hidden">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#EDB80B]">
                    {t.language}
                  </p>

                  <div className={`mt-2 flex ${isArabic ? "justify-end" : ""}`}>
                    <LanguageSwitch variant="dark" compact />
                  </div>
                </div>

                <div className="mb-3 border-b border-white/10 pb-3">
                  <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#EDB80B] sm:text-xs sm:tracking-[0.24em]">
                    {t.navigation}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-white/58 sm:text-sm">
                    {t.menuHint}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {items.map((item) => {
                    const active = isActivePath(pathname, item.href);

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        data-track="mobile_nav_link"
                        data-track-value={item.href}
                        className={`flex min-h-11 items-center justify-center rounded-2xl px-3 py-2.5 text-center text-[13px] font-black transition-all duration-200 sm:px-4 sm:py-3 sm:text-sm ${
                          active
                            ? "bg-[#EDB80B] text-black shadow-[0_12px_30px_rgba(237,184,11,0.20)]"
                            : "text-white/76 hover:bg-white/[0.08] hover:text-white"
                        }`}
                      >
                        {item.label}
                      </Link>
                    );
                  })}
                </div>

                <a
                  href={whatsappHref}
                  data-track="mobile_nav_whatsapp_cta"
                  data-track-value={safeLang}
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#EDB80B] px-4 py-3 text-sm font-black text-black shadow-[0_14px_35px_rgba(237,184,11,0.22)] transition hover:-translate-y-0.5 sm:mt-4"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.whatsapp}
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
