import Link from "next/link";
import LanguageSwitch from "./LanguageSwitch";

const labels = {
  fr: { home: "Accueil", services: "Services", apply: "Postuler", contact: "Contact", whatsapp: "WhatsApp" },
  en: { home: "Home", services: "Services", apply: "Apply", contact: "Contact", whatsapp: "WhatsApp" },
  ar: { home: "الرئيسية", services: "الخدمات", apply: "التقديم", contact: "اتصل بنا", whatsapp: "واتساب" },
} as const;

export default function Navbar({ locale }: { locale: "fr" | "en" | "ar" }) {
  const t = labels[locale];

  return (
    <header className="sticky top-0 z-50">
      <div className="glass">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <Link href={`/${locale}`} className="font-semibold tracking-tight text-lg">
            GoChina<span className="text-zinc-400">.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm text-zinc-700">
            <Link href={`/${locale}`}>{t.home}</Link>
            <Link href={`/${locale}/services`}>{t.services}</Link>
            <Link href={`/${locale}/apply`}>{t.apply}</Link>
            <Link href={`/${locale}/contact`}>{t.contact}</Link>
          </nav>

          <div className="flex items-center gap-3">
            <LanguageSwitch/>
            <a
              className="rounded-full bg-zinc-900 text-white px-4 py-2 text-sm soft-shadow hover:bg-zinc-800"
              href="https://wa.me/212600000000"
              target="_blank"
              rel="noreferrer"
            >
              {t.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}