"use client";

import { useState } from "react";
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
    whatsapp: "WhatsApp",
    navigation: "Navigation",
    menuHint: "Choisissez une page ou changez de langue.",
  },
  en: {
    strapline: "Study in China",
    whatsapp: "WhatsApp",
    navigation: "Navigation",
    menuHint: "Choose a page or switch language.",
  },
  ar: {
    strapline: "الدراسة في الصين",
    whatsapp: "واتساب",
    navigation: "التنقل",
    menuHint: "اختر صفحة أو غيّر اللغة.",
  },
} as const;

export default function Navbar({ lang }: Props) {
  const items = nav[lang];
  const t = meta[lang];
  const pathname = usePathname() || `/${lang}`;
  const [open, setOpen] = useState(false);
  const isArabic = lang === "ar";

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#070707]/90 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <Container>
        <div className="flex min-h-[76px] items-center justify-between gap-4 py-3">
          <div className="flex min-w-0 items-center gap-4">
            <Link href={`/${lang}`} className="shrink-0">
              <BrandLogo size="md" variant="dark" />
            </Link>

            <div className="hidden min-[1180px]:block">
              <p className="section-eyebrow text-[11px] font-semibold uppercase tracking-[0.3em] text-white/40">
                {t.strapline}
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1.5 text-sm md:flex">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 font-medium transition ${
                  pathname === item.href
                    ? "bg-white text-black shadow-sm"
                    : "text-white/78 hover:bg-white/[0.08] hover:text-white"
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
              className="rounded-full border border-[#EDB80B] bg-[#EDB80B] px-4 py-2 text-sm font-semibold text-black shadow-[0_10px_30px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
              target="_blank"
              rel="noreferrer"
            >
              {t.whatsapp}
            </a>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitch variant="dark" compact />
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition duration-200 ${
                    open ? "translate-y-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[7px] h-0.5 w-full rounded-full bg-current transition duration-200 ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`absolute left-0 top-[14px] h-0.5 w-full rounded-full bg-current transition duration-200 ${
                    open ? "-translate-y-[7px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="pb-4 md:hidden">
            <div
              className={`rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4 shadow-2xl backdrop-blur-xl ${
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
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      pathname === item.href
                        ? "bg-white text-black"
                        : "text-white/90 hover:bg-white/5 hover:text-[#EDB80B]"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <a
                href={waPrimary}
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#EDB80B] px-4 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(237,184,11,0.22)] transition hover:opacity-95"
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
