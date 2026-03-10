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
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href={`/${lang}`}
            className="shrink-0 text-lg font-extrabold tracking-tight text-zinc-950 sm:text-xl"
          >
            YALLA <span className="text-[#8B0000]">CHINA</span>
            <span className="text-[#EDB80B]">.</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm md:flex">
            {items.map((it) => (
              <Link
                key={it.href}
                href={it.href}
                className="text-zinc-700 transition hover:text-[#8B0000]"
              >
                {it.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitch />
            <a
              href={waPrimary}
              className="rounded-full bg-[#8B0000] px-4 py-2 text-sm text-white transition hover:bg-[#740000]"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <span className="text-xl leading-none">{open ? "×" : "☰"}</span>
          </button>
        </div>

        {open && (
          <div className="border-t border-zinc-100 py-4 md:hidden">
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
                    className="rounded-2xl px-3 py-3 text-sm font-medium text-zinc-800 transition hover:bg-zinc-50"
                  >
                    {it.label}
                  </Link>
                ))}
              </div>

              <a
                href={waPrimary}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-[#8B0000] px-4 py-3 text-sm text-white transition hover:bg-[#740000]"
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