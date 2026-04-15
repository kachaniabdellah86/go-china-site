"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { Locale, packageFacts } from "@/lib/yalla";

type Mode = "home" | "page";

type PackageCard = {
  id: "pack1" | "pack2";
  name: string;
  price: string;
  audience: string;
  summary: string;
  includes: string[];
  promise: string;
  idealFor: string;
};

type ComparisonRow = {
  label: string;
  pack1: string;
  pack2: string;
  pack1Included: boolean;
  pack2Included: boolean;
};

type Copy = {
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: string;
  description: string;
  packages: PackageCard[];
  comparisonTitle: string;
  comparisonRows: ComparisonRow[];
  recommendation: string;
  consultationEyebrow: string;
  consultationTitle: string;
  consultationText: string;
  consultationPrimary: string;
  consultationSecondary: string;
  consultationPageSecondary: string;
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    eyebrow: "Packs et engagements",
    title:
      "Deux formules simples pour que la famille sache exactement ce qu'elle paie et jusqu'où va l'accompagnement.",
    description:
      "Pack 1 couvre le cœur administratif: dossier, traduction, visa et inscription universitaire. Pack 2 ajoute la dimension voyage et accompagnement jusqu'à l'université.",
    packages: [
      {
        id: "pack1",
        name: "Pack 1",
        price: packageFacts.pack1Price,
        audience: "Dossier, admission, traduction et visa",
        summary:
          "Une base sérieuse pour les familles qui veulent sécuriser le projet administratif et universitaire avec méthode.",
        includes: [
          "Frais de dossier",
          "Traduction et préparation des documents",
          "Service visa",
          "Service d'inscription universitaire",
        ],
        promise:
          "Le projet avance avec un dossier structuré, une logique claire et un suivi sérieux jusqu'à l'admission.",
        idealFor:
          "Idéal pour les familles qui veulent cadrer l'essentiel avec un interlocuteur fiable.",
      },
      {
        id: "pack2",
        name: "Pack 2",
        price: packageFacts.pack2Price,
        audience: "Pack 1 plus voyage, transfert et arrivée",
        summary:
          "La formule la plus rassurante pour les parents qui veulent prolonger l'accompagnement jusqu'au départ et à l'entrée à l'université.",
        includes: [
          "Tous les éléments du Pack 1",
          "Aide à la réservation du billet",
          "Suivi du Maroc jusqu'à l'université",
          "Transport de l'aéroport jusqu'à l'université",
        ],
        promise:
          "L'accompagnement ne s'arrête pas à l'obtention du visa. Il reste visible jusqu'à l'arrivée.",
        idealFor:
          "Idéal pour les familles qui veulent une transition plus sereine entre le Maroc et la vie universitaire en Chine.",
      },
    ],
    comparisonTitle: "Comparer Pack 1 et Pack 2 en quelques secondes",
    comparisonRows: [
      {
        label: "Dossier et traduction",
        pack1: "Inclus",
        pack2: "Inclus",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "Visa étudiant",
        pack1: "Inclus",
        pack2: "Inclus",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "Inscription universitaire",
        pack1: "Inclus",
        pack2: "Inclus",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "Aide billet et voyage",
        pack1: "Non inclus",
        pack2: "Inclus",
        pack1Included: false,
        pack2Included: true,
      },
      {
        label: "Transport aéroport-université",
        pack1: "Non inclus",
        pack2: "Inclus",
        pack1Included: false,
        pack2Included: true,
      },
    ],
    recommendation:
      "Le Pack 2 convient mieux aux familles qui veulent réduire l'incertitude jusqu'aux premiers jours sur place.",
    consultationEyebrow: "Avant de choisir",
    consultationTitle:
      "La consultation gratuite sert à recommander le bon pack, pas à vous pousser vers la formule la plus chère.",
    consultationText:
      "Nous partons du profil de l'étudiant, du budget, des attentes des parents et du niveau d'accompagnement recherché, puis nous orientons vers la formule adaptée.",
    consultationPrimary: "Demander une consultation gratuite",
    consultationSecondary: "Voir la page services",
    consultationPageSecondary: "Commencer ma candidature",
  },
  en: {
    dir: "ltr",
    eyebrow: "Packages and commitments",
    title:
      "Two simple formulas so the family knows exactly what it is paying for and how far the support goes.",
    description:
      "Package 1 covers the administrative core: file, translation, visa, and university registration. Package 2 adds travel help and accompaniment up to the university.",
    packages: [
      {
        id: "pack1",
        name: "Package 1",
        price: packageFacts.pack1Price,
        audience: "File, admission, translation, and visa",
        summary:
          "A serious base for families who want to secure the administrative and university side of the project with structure.",
        includes: [
          "Application file fees",
          "Translation and document preparation",
          "Visa service",
          "University registration service",
        ],
        promise:
          "The project moves forward with a structured file, a clear logic, and serious support up to admission.",
        idealFor:
          "Ideal for families who want the essentials framed by one reliable advisor.",
      },
      {
        id: "pack2",
        name: "Package 2",
        price: packageFacts.pack2Price,
        audience: "Package 1 plus travel, transfer, and arrival",
        summary:
          "The most reassuring formula for parents who want the support to continue through departure and into the university arrival stage.",
        includes: [
          "Everything from Package 1",
          "Ticket reservation help",
          "Support from Morocco to the university",
          "Airport-to-university transport",
        ],
        promise:
          "Support does not stop at visa approval. It stays visible all the way to arrival.",
        idealFor:
          "Ideal for families who want a smoother transition between Morocco and university life in China.",
      },
    ],
    comparisonTitle: "Compare Package 1 and Package 2 in seconds",
    comparisonRows: [
      {
        label: "File and translation",
        pack1: "Included",
        pack2: "Included",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "Student visa",
        pack1: "Included",
        pack2: "Included",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "University registration",
        pack1: "Included",
        pack2: "Included",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "Ticket and travel help",
        pack1: "Not included",
        pack2: "Included",
        pack1Included: false,
        pack2Included: true,
      },
      {
        label: "Airport-to-university transfer",
        pack1: "Not included",
        pack2: "Included",
        pack1Included: false,
        pack2Included: true,
      },
    ],
    recommendation:
      "Package 2 fits families who want less uncertainty through the first days on the ground.",
    consultationEyebrow: "Before choosing",
    consultationTitle:
      "The free consultation exists to recommend the right package, not to push you toward the most expensive one.",
    consultationText:
      "We start from the student's profile, the budget, the parents' expectations, and the desired support level, then recommend the right formula.",
    consultationPrimary: "Request a free consultation",
    consultationSecondary: "View services page",
    consultationPageSecondary: "Start my application",
  },
  ar: {
    dir: "rtl",
    eyebrow: "الباقات والالتزامات",
    title:
      "صيغتان واضحتان حتى تعرف العائلة بالضبط ماذا تدفع وما هو مستوى المرافقة حتى الوصول.",
    description:
      "الباقة 1 تغطي القلب الإداري: الملف والترجمة والتأشيرة والتسجيل الجامعي. الباقة 2 تضيف جانب السفر والمرافقة حتى الجامعة.",
    packages: [
      {
        id: "pack1",
        name: "الباقة 1",
        price: packageFacts.pack1Price,
        audience: "الملف والقبول والترجمة والتأشيرة",
        summary:
          "قاعدة جدية للعائلات التي تريد تأمين الجانب الإداري والجامعي بمنهج واضح.",
        includes: [
          "رسوم الملف",
          "الترجمة وتجهيز الوثائق",
          "خدمة التأشيرة",
          "خدمة التسجيل الجامعي",
        ],
        promise:
          "المشروع يتقدم بملف منظم ومنطق واضح ومتابعة جدية حتى القبول.",
        idealFor:
          "مناسبة للعائلات التي تريد ضبط الأساسيات مع جهة موثوقة واحدة.",
      },
      {
        id: "pack2",
        name: "الباقة 2",
        price: packageFacts.pack2Price,
        audience: "الباقة 1 مع السفر والنقل والوصول",
        summary:
          "الصيغة الأكثر طمأنة للوالدين عندما يريدان استمرار المرافقة حتى السفر والدخول إلى الجامعة.",
        includes: [
          "كل عناصر الباقة 1",
          "مساعدة في حجز التذكرة",
          "متابعة من المغرب إلى الجامعة",
          "النقل من المطار إلى الجامعة",
        ],
        promise:
          "المرافقة لا تتوقف عند التأشيرة، بل تبقى واضحة حتى الوصول.",
        idealFor:
          "مناسبة للعائلات التي تريد انتقالاً أكثر سلاسة بين المغرب والحياة الجامعية في الصين.",
      },
    ],
    comparisonTitle: "قارن بين الباقة 1 والباقة 2 بسرعة",
    comparisonRows: [
      {
        label: "الملف والترجمة",
        pack1: "مشمول",
        pack2: "مشمول",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "تأشيرة الطالب",
        pack1: "مشمول",
        pack2: "مشمول",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "التسجيل الجامعي",
        pack1: "مشمول",
        pack2: "مشمول",
        pack1Included: true,
        pack2Included: true,
      },
      {
        label: "مساعدة التذكرة والسفر",
        pack1: "غير مشمول",
        pack2: "مشمول",
        pack1Included: false,
        pack2Included: true,
      },
      {
        label: "النقل من المطار إلى الجامعة",
        pack1: "غير مشمول",
        pack2: "مشمول",
        pack1Included: false,
        pack2Included: true,
      },
    ],
    recommendation:
      "الباقة 2 تناسب أكثر العائلات التي تريد تقليل الغموض حتى الأيام الأولى في الصين.",
    consultationEyebrow: "قبل الاختيار",
    consultationTitle:
      "الاستشارة المجانية موجودة لاقتراح الباقة المناسبة، لا لدفعكم نحو الصيغة الأغلى.",
    consultationText:
      "ننطلق من ملف الطالب والميزانية وتوقعات الوالدين ومستوى المرافقة المطلوب، ثم نوجّهكم نحو الصيغة الأنسب.",
    consultationPrimary: "اطلب استشارة مجانية",
    consultationSecondary: "شاهد صفحة الخدمات",
    consultationPageSecondary: "ابدأ التقديم",
  },
};

export default function HomeProofSection({
  lang,
  mode = "home",
}: {
  lang: Locale;
  mode?: Mode;
}) {
  const t = copy[lang];
  const [activeId, setActiveId] = useState<"pack1" | "pack2">("pack1");
  const activePackage = t.packages.find((item) => item.id === activeId) ?? t.packages[0];
  const isArabic = t.dir === "rtl";
  const contactHref = `/${lang}/contact`;
  const servicesHref = `/${lang}/services`;
  const applyHref = `/${lang}/apply`;
  const isPage = mode === "page";

  return (
    <section
      className={`${isPage ? "bg-[#f4ede4]" : "bg-[#f2e7da]"} py-14 text-zinc-900 sm:py-18`}
      dir={t.dir}
    >
      <Container>
        <div className="space-y-8">
          <div
            className={`rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-[0_28px_70px_rgba(15,23,42,0.08)] sm:p-10 ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#770304]">
              {t.eyebrow}
            </p>
            <h2 className="display-title mt-4 text-3xl font-black leading-tight sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-8 text-zinc-600 sm:text-base">
              {t.description}
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-3">
                {t.packages.map((item) => {
                  const isActive = item.id === activeId;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveId(item.id)}
                      className={`rounded-[2rem] border px-5 py-5 text-left transition-all duration-200 ${
                        isActive
                          ? "scale-[1.02] border-[#770304] bg-gradient-to-br from-[#770304] to-[#5a0203] text-white shadow-[0_24px_60px_rgba(119,3,4,0.25)]"
                          : "border-zinc-200 bg-[#faf7f3] text-zinc-900 hover:border-[#B17F02] hover:shadow-md"
                      } ${isArabic ? "text-right" : ""}`}
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div>
                          <p className="text-lg font-bold">{item.name}</p>
                          <p
                            className={`mt-1 text-xs uppercase tracking-[0.22em] ${
                              isActive ? "text-white/60" : "text-zinc-500"
                            }`}
                          >
                            {item.audience}
                          </p>
                        </div>
                        <span
                          className={`rounded-full px-3 py-1 text-sm font-semibold ${
                            isActive
                              ? "bg-gradient-to-r from-[#B17F02] to-[#C59F41] text-black shadow-lg"
                              : "bg-white text-zinc-900"
                          }`}
                        >
                          {item.price}
                        </span>
                      </div>
                      <p
                        className={`mt-4 text-sm leading-7 ${
                          isActive ? "text-white/78" : "text-zinc-600"
                        }`}
                      >
                        {item.summary}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="relative overflow-hidden rounded-[2.2rem] bg-[#120405] p-6 text-white shadow-[0_28px_70px_rgba(0,0,0,0.2)] sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,184,11,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.32),transparent_34%)]" />
                <div className="absolute inset-0 opacity-20 shoji-grid" />

                <div className={`relative space-y-5 ${isArabic ? "text-right" : ""}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="section-eyebrow rounded-full border border-white/12 bg-white/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/82">
                      {activePackage.name}
                    </span>
                    <span className="rounded-full bg-[#EDB80B] px-3 py-1 text-sm font-semibold text-black">
                      {activePackage.price}
                    </span>
                  </div>

                  <h3 className="display-title text-2xl font-black leading-tight sm:text-3xl">
                    {activePackage.idealFor}
                  </h3>
                  <p className="text-sm leading-8 text-white/74">{activePackage.promise}</p>

                  <div className="grid gap-3">
                    {activePackage.includes.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.5rem] border border-white/10 bg-white/[0.07] px-4 py-3 text-sm text-white/84"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.3rem] border border-zinc-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8">
            <div className={isArabic ? "text-right" : ""}>
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                {t.comparisonTitle}
              </p>
            </div>

            <div className="mt-6 space-y-3 md:hidden">
              {t.comparisonRows.map((row) => (
                <article
                  key={row.label}
                  className="rounded-[1.8rem] border border-zinc-200 bg-[#faf9f7] p-4 shadow-sm"
                >
                  <h4 className="text-sm font-semibold text-zinc-900">{row.label}</h4>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <MobileComparisonCell
                      name={t.packages[0].name}
                      included={row.pack1Included}
                      text={row.pack1}
                    />
                    <MobileComparisonCell
                      name={t.packages[1].name}
                      included={row.pack2Included}
                      text={row.pack2}
                      premium
                    />
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-6 hidden overflow-hidden rounded-[2rem] border border-zinc-200 shadow-xl md:block">
              <div className="grid grid-cols-[1.1fr_0.95fr_0.95fr] bg-gradient-to-r from-[#770304] to-[#5a0203] text-white">
                <div className="px-5 py-5 text-sm font-semibold text-white/70" />
                <ColumnHeading name={t.packages[0].name} price={t.packages[0].price} />
                <ColumnHeading name={t.packages[1].name} price={t.packages[1].price} premium />
              </div>

              {t.comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.1fr_0.95fr_0.95fr] transition-colors duration-200 hover:bg-[#faf7f3] ${
                    index % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"
                  }`}
                >
                  <div className="flex items-center px-5 py-5">
                    <span className="text-sm font-semibold text-zinc-900">{row.label}</span>
                  </div>
                  <ComparisonCell included={row.pack1Included} text={row.pack1} />
                  <ComparisonCell included={row.pack2Included} text={row.pack2} premium />
                </div>
              ))}
            </div>

            <div
              className={`mt-5 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#B17F02]/10 to-[#B17F02]/5 px-5 py-4 ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <svg className="h-6 w-6 text-[#B17F02]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <p className="text-sm font-medium text-zinc-700">
                <span className="font-semibold text-[#770304]">
                  {lang === "fr"
                    ? "Recommandation:"
                    : lang === "en"
                      ? "Recommendation:"
                      : "التوصية:"}
                </span>{" "}
                {t.recommendation}
              </p>
            </div>
          </div>

          <div className="rounded-[2.3rem] border border-[#770304]/10 bg-gradient-to-br from-[#770304] to-[#5a0203] p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:p-10">
            <div className="grid gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
              <div className={isArabic ? "text-right" : ""}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                  {t.consultationEyebrow}
                </p>
                <h3 className="display-title mt-3 text-3xl font-black leading-tight sm:text-4xl">
                  {t.consultationTitle}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
                  {t.consultationText}
                </p>
              </div>

              <div
                className={`flex flex-col gap-3 ${
                  isArabic ? "sm:items-end" : "mx-auto w-full max-w-sm lg:mx-0"
                }`}
              >
                <Link
                  href={contactHref}
                  className="w-full rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.consultationPrimary}
                </Link>
                <Link
                  href={isPage ? applyHref : servicesHref}
                  className="w-full rounded-full border border-white/18 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15 sm:w-auto"
                >
                  {isPage ? t.consultationPageSecondary : t.consultationSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ColumnHeading({
  name,
  price,
  premium = false,
}: {
  name: string;
  price: string;
  premium?: boolean;
}) {
  return (
    <div className="px-5 py-5 text-center">
      <div className="flex flex-col items-center gap-2">
        <span className={`text-xs font-semibold uppercase tracking-wider ${premium ? "text-white/90" : "text-white/60"}`}>
          {name}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-sm font-bold ${
            premium
              ? "bg-gradient-to-r from-[#B17F02] to-[#C59F41] text-black shadow-lg"
              : "bg-white/20"
          }`}
        >
          {price}
        </span>
      </div>
    </div>
  );
}

function MobileComparisonCell({
  name,
  included,
  text,
  premium = false,
}: {
  name: string;
  included: boolean;
  text: string;
  premium?: boolean;
}) {
  return (
    <div
      className={`rounded-[1.4rem] border px-4 py-3 ${
        premium
          ? "border-[#B17F02]/30 bg-[#fff7e7]"
          : "border-zinc-200 bg-white"
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
        {name}
      </p>
      <div className="mt-3 flex items-center gap-2 text-sm">
        <svg
          className={`h-5 w-5 ${included ? "text-[#B17F02]" : "text-zinc-400"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          {included ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          )}
        </svg>
        <span className={premium ? "font-semibold text-[#770304]" : "text-zinc-700"}>
          {text}
        </span>
      </div>
    </div>
  );
}

function ComparisonCell({
  included,
  text,
  premium = false,
}: {
  included: boolean;
  text: string;
  premium?: boolean;
}) {
  return (
    <div className="flex items-center justify-center px-5 py-5">
      <div className="flex items-center gap-2 text-sm">
        <svg
          className={`h-5 w-5 ${included ? "text-[#B17F02]" : "text-zinc-400"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          {included ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          )}
        </svg>
        <span
          className={
            premium
              ? "font-semibold text-[#770304]"
              : included
                ? "font-medium text-zinc-700"
                : "text-zinc-500"
          }
        >
          {text}
        </span>
      </div>
    </div>
  );
}
