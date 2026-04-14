"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import Container from "./Container";
import LanguageSwitch from "./LanguageSwitch";

type Props = {
  lang: "fr" | "en" | "ar";
};

const nav = {
  fr: [
    { href: "/fr", label: "Accueil" },
    { href: "/fr/services", label: "Services" },
    { href: "/fr/apply", label: "Postuler" },
    { href: "/fr/contact", label: "Contact" },
  ],
  en: [
    { href: "/en", label: "Home" },
    { href: "/en/services", label: "Services" },
    { href: "/en/apply", label: "Apply" },
    { href: "/en/contact", label: "Contact" },
  ],
  ar: [
    { href: "/ar", label: "الرئيسية" },
    { href: "/ar/services", label: "الخدمات" },
    { href: "/ar/apply", label: "قدّم الطلب" },
    { href: "/ar/contact", label: "تواصل معنا" },
  ],
} as const;

const waPrimary = "https://wa.me/212638335452";
const meta = {
  fr: {
    strapline: "Etudes en Chine",
    whatsapp: "Consultation gratuite",
    navigation: "Navigation",
    menuHint: "Choisissez une page ou changez de langue.",
  },
  en: {
    strapline: "Study in China",
    whatsapp: "Free consultation",
    navigation: "Navigation",
    menuHint: "Choose a page or switch language.",
  },
  ar: {
    strapline: "الدراسة في الصين",
    whatsapp: "استشارة مجانية",
    navigation: "التنقل",
    menuHint: "اختر صفحة أو غيّر اللغة.",
  },
} as const;

export default function Navbar({ lang }: Props) {
  const items = nav[lang];
  const t = meta[lang];
  const pathname = usePathname() || `/${lang}`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isArabic = lang === "ar";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070707]/95 shadow-[0_8px_32px_rgba(0,0,0,0.25)] backdrop-blur-xl border-b border-white/10"
          : "bg-[#070707]/80 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-lg border-b border-black/10"
      }`}
    >
      <Container>
        <div className="flex min-h-[76px] items-center justify-between gap-4 py-3">
          <div className="flex min-w-0 items-center gap-4">
            <Link href={`/${lang}`} className="shrink-0 group">
              <BrandLogo size="md" variant="dark" />
            </Link>

            <div className="hidden min-[1180px]:block">
              <p className="section-eyebrow text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40 group-hover:text-white/60 transition-colors duration-200">
                {t.strapline}
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-sm md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 font-medium transition-all duration-200 ${
                  pathname === item.href
                    ? "bg-white text-black shadow-lg shadow-white/10 scale-[1.02]"
                    : "text-white/75 hover:bg-white/[0.08] hover:text-white hover:scale-[1.02]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitch variant="dark" />
            <a
              href={waPrimary}
              className="relative rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(177,127,2,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(177,127,2,0.45)] animate-pulse-gold"
              target="_blank"
              rel="noreferrer"
            >
              <span className="relative z-10">{t.whatsapp}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitch variant="dark" compact />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95"
              aria-label={open ? "Close menu" : "Open menu"}
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
                    open ? "opacity-0 scale-0" : ""
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

        {open && (
          <div className="pb-4 md:hidden animate-fade-in-down">
            <div
              className={`rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-4 shadow-2xl backdrop-blur-xl ${
                isArabic ? "text-right" : "text-left"
              }`}
            >
              <div className="mb-3 border-b border-white/10 pb-3">
                <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                  {t.navigation}
                </p>
                <p className="mt-1 text-sm text-white/75">{t.menuHint}</p>
              </div>

              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                      pathname === item.href
                        ? "bg-white text-black shadow-lg"
                        : "text-white/90 hover:bg-white/10 hover:text-[#B17F02]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a
                href={waPrimary}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(177,127,2,0.3)] transition-all duration-200 hover:shadow-[0_16px_40px_rgba(177,127,2,0.45)] hover:scale-[1.02] active:scale-[0.98]"
                target="_blank"
                rel="noreferrer"
              >
                {t.whatsapp}
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
