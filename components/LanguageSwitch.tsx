"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitch() {
  const pathname = usePathname() || "/fr";

  const seg = pathname.split("/")[1];
  const current = seg === "fr" || seg === "en" || seg === "ar" ? seg : "fr";

  const to = (loc: "fr" | "en" | "ar") => {
    if (/^\/(fr|en|ar)(\/|$)/.test(pathname)) {
      return pathname.replace(/^\/(fr|en|ar)(?=\/|$)/, `/${loc}`);
    }
    return `/${loc}`;
  };

  const base =
    "rounded-full border px-3 py-1.5 text-xs font-medium transition sm:text-sm";
  const active = "border-[#8B0000] bg-[#8B0000] text-white";
  const idle = "border-zinc-200 text-zinc-700 hover:bg-zinc-50";

  return (
    <div className="flex items-center gap-2">
      <Link href={to("fr")} className={`${base} ${current === "fr" ? active : idle}`}>
        FR
      </Link>
      <Link href={to("en")} className={`${base} ${current === "en" ? active : idle}`}>
        EN
      </Link>
      <Link href={to("ar")} className={`${base} ${current === "ar" ? active : idle}`}>
        AR
      </Link>
    </div>
  );
}