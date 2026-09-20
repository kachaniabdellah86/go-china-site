import Link from "next/link";

const copy = [
  {
    lang: "fr",
    dir: "ltr",
    eyebrow: "Page introuvable",
    title: "Cette page n’existe pas ou a été déplacée.",
    cta: "Retour à l’accueil",
  },
  {
    lang: "en",
    dir: "ltr",
    eyebrow: "Page not found",
    title: "This page doesn’t exist or has moved.",
    cta: "Back to home",
  },
  {
    lang: "ar",
    dir: "rtl",
    eyebrow: "الصفحة غير موجودة",
    title: "هذه الصفحة غير موجودة أو تم نقلها.",
    cta: "العودة إلى الرئيسية",
  },
] as const;

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050202] px-6 py-24 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(237,184,11,0.16),transparent_38%),radial-gradient(circle_at_80%_80%,rgba(119,3,4,0.38),transparent_42%)]"
      />
      <div className="relative w-full max-w-3xl">
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#EDB80B]">
          Yalla China · 404
        </p>
        <div className="mt-8 grid gap-6">
          {copy.map((entry) => (
            <section
              key={entry.lang}
              lang={entry.lang}
              dir={entry.dir}
              className="rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl sm:p-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-white/50">
                {entry.eyebrow}
              </p>
              <h1 className="mt-2 text-xl font-black leading-tight sm:text-2xl">
                {entry.title}
              </h1>
              <Link
                href={`/${entry.lang}`}
                className="mt-4 inline-flex rounded-full bg-[#EDB80B] px-5 py-2.5 text-sm font-black text-black transition hover:-translate-y-0.5"
              >
                {entry.cta}
              </Link>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
