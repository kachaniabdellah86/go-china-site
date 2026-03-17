"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LanguageSwitchProps = {
  variant?: "dark" | "light";
  compact?: boolean;
};

export default function LanguageSwitch({
  variant = "light",
  compact = false,
}: LanguageSwitchProps) {
  const pathname = usePathname() || "/fr";

  const seg = pathname.split("/")[1];
  const current = seg === "fr" || seg === "en" || seg === "ar" ? seg : "fr";

  const to = (loc: "fr" | "en" | "ar") => {
    if (/^\/(fr|en|ar)(\/|$)/.test(pathname)) {
      return pathname.replace(/^\/(fr|en|ar)(?=\/|$)/, `/${loc}`);
    }
    return `/${loc}`;
  };

  const base = compact
    ? "rounded-full border px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] transition sm:text-xs"
    : "rounded-full border px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition sm:text-sm";
  const active =
    variant === "dark"
      ? "border-[#EDB80B] bg-[#EDB80B] text-black shadow-[0_8px_24px_rgba(237,184,11,0.25)]"
      : "border-[#8B0000] bg-[#8B0000] text-white shadow-[0_8px_20px_rgba(139,0,0,0.16)]";
  const idle =
    variant === "dark"
      ? "border-white/15 bg-white/[0.06] text-white/80 hover:border-white/30 hover:bg-white/[0.12] hover:text-white"
      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50";

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full ${
        variant === "dark" ? "bg-black/20 p-1 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <Link
        href={to("fr")}
        aria-current={current === "fr" ? "page" : undefined}
        className={`${base} ${current === "fr" ? active : idle}`}
      >
        FR
      </Link>
      <Link
        href={to("en")}
        aria-current={current === "en" ? "page" : undefined}
        className={`${base} ${current === "en" ? active : idle}`}
      >
        EN
      </Link>
      <Link
        href={to("ar")}
        aria-current={current === "ar" ? "page" : undefined}
        className={`${base} ${current === "ar" ? active : idle}`}
      >
        AR
      </Link>
    </div>
  );
}
