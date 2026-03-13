"use client";

import { useState } from "react";
import Link from "next/link";
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
};

const waPrimary = "https://wa.me/212638335452";

export default function Navbar({ lang }: Props) {
  const items = nav[lang];
  const [open, setOpen] = useState(false);
  const isArabic = lang === "ar";

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/75 backdrop-blur-xl">
      <Container>
        <div className="flex h-18 items-center justify-between py-3">
          <Link
            href={`/${lang}`}
            className="shrink-0 text-lg font-black uppercase tracking-tight text-white sm:text-2xl"
          >
            YALLA <span className="text-white">CHINA</span>
            <span className="text-[#EDB80B]">.</span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm md:flex">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="font-medium text-white/80 transition hover:text-[#EDB80B]"
              >
                {it.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitch />
            <a
              href={waPrimary}
              className="rounded-full border border-[#EDB80B] bg-[#EDB80B] px-4 py-2 text-sm font-semibold text-black transition hover:opacity-90"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>

        {open && (
          <div className="border-t border-white/10 py-4 md:hidden">
            <div className={`flex flex-col gap-3 ${isArabic ? "text-right" : "text-left"}`}>
              <div className="pb-2">
                <LanguageSwitch />
              </div>

              <div className="flex flex-col gap-2">
                {items.map((it) => (
                  <Link
                    key={it.href}
                    href={it.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-3 py-3 text-sm font-medium text-white/90 transition hover:bg-white/5 hover:text-[#EDB80B]"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>

              <a
                href={waPrimary}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#EDB80B] px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}