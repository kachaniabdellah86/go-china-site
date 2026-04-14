"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { ArabicText } from "@/lib/ArabicText";


type Locale = "fr" | "en" | "ar";
type Mode = "home" | "page";

type PackageCard = {
  id: string;
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
  essential: string;
  premium: string;
};

type Copy = {
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: string;
  description: string;
  packages: PackageCard[];
  comparisonTitle: string;
  comparisonRows: ComparisonRow[];
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
    eyebrow: "Packs clairs, garanties visibles",
    title:
      "Choisissez une formule simple a comprendre, puis avancez avec un cadre qui rassure les parents et motive l'etudiant.",
    description:
      "Les packs sont presentes comme deux niveaux d'accompagnement tres lisibles: une base solide pour securiser le dossier, puis une formule premium pour aller jusqu'au depart et a l'arrivee.",
    packages: [
      {
        id: "essential",
        name: "Pack Essentiel",
        price: "15 000 MAD",
        audience: "Pour demarrer avec une methode claire",
        summary:
          "Une formule structuree pour l'universite, le dossier, la traduction, la candidature et le visa etudiant.",
        includes: [
          "Choix d'universites adaptees au profil",
          "Preparation et verification du dossier",
          "Traduction et organisation des documents",
          "Suivi de la candidature universitaire",
          "Accompagnement visa jusqu'au depot",
        ],
        promise:
          "Vous avancez avec un dossier mieux maitrise et une direction claire a chaque etape importante.",
        idealFor:
          "Ideal pour les familles qui veulent un accompagnement serieux sur les etapes decisives.",
      },
      {
        id: "premium",
        name: "Pack Premium",
        price: "23 000 MAD",
        audience: "Pour une prise en charge plus complete jusqu'a l'arrivee",
        summary:
          "Tout le Pack Essentiel, avec un niveau de confort supplementaire pour le billet, le suivi et les premiers jours en Chine.",
        includes: [
          "Tous les elements du Pack Essentiel",
          "Aide a la reservation du billet",
          "Suivi du Maroc jusqu'a l'universite",
          "Organisation du transfert a l'arrivee",
          "Presence plus rassurante pour la famille",
        ],
        promise:
          "Le projet parait plus premium parce que l'accompagnement ne s'arrete pas a l'admission.",
        idealFor:
          "Ideal pour les parents qui veulent un suivi visible jusqu'aux premiers jours en Chine.",
      },
    ],
    comparisonTitle: "Comparez les deux formules en quelques secondes",
    comparisonRows: [
      {
        label: "Choix de l'universite et admission",
        essential: "Inclus",
        premium: "Inclus avec suivi renforce",
      },
      {
        label: "Visa etudiant",
        essential: "Inclus",
        premium: "Inclus",
      },
      {
        label: "Billet d'avion",
        essential: "Non inclus",
        premium: "Aide a la reservation",
      },
      {
        label: "Suivi jusqu'a l'arrivee",
        essential: "Cadre standard",
        premium: "Accompagnement premium",
      },
    ],
    consultationEyebrow: "Consultation gratuite",
    consultationTitle:
      "Commencez par un echange simple, puis choisissez le pack adapte quand le projet devient parfaitement clair.",
    consultationText:
      "La consultation gratuite est la vraie premiere etape: comprendre la situation, rassurer la famille et orienter vers la meilleure formule avant toute decision.",
    consultationPrimary: "Demander une consultation gratuite",
    consultationSecondary: "Voir la page services",
    consultationPageSecondary: "Commencer ma candidature",
  },
  en: {
    dir: "ltr",
    eyebrow: "Clear packages, visible guarantees",
    title:
      "Choose a formula that is easy to understand, then move forward with a structure that reassures parents and motivates the student.",
    description:
      "The packages are presented as two clear levels of support: a strong base for the application journey, then a premium formula that continues through departure and arrival.",
    packages: [
      {
        id: "essential",
        name: "Essential Package",
        price: "15,000 MAD",
        audience: "For a clear and well-framed start",
        summary:
          "A structured formula for university choice, file preparation, translation, application, and the student visa.",
        includes: [
          "University selection adapted to the profile",
          "Preparation and review of the file",
          "Translation and document organization",
          "Follow-up on the university application",
          "Visa support until submission",
        ],
        promise:
          "You move forward with a stronger file and clearer guidance at every important step.",
        idealFor:
          "Ideal for families who want serious support on the decisive stages.",
      },
      {
        id: "premium",
        name: "Premium Package",
        price: "23,000 MAD",
        audience: "For fuller support up to departure and arrival",
        summary:
          "Everything in the Essential Package, with additional comfort around travel, follow-up, and the first days in China.",
        includes: [
          "Everything from the Essential Package",
          "Ticket booking support",
          "Follow-up from Morocco to the university",
          "Arrival transfer organization",
          "A more reassuring level of support for the family",
        ],
        promise:
          "The project feels more premium because support does not stop at admission.",
        idealFor:
          "Ideal for parents who want visible follow-up through the first days in China.",
      },
    ],
    comparisonTitle: "Compare both formulas in a few seconds",
    comparisonRows: [
      {
        label: "University choice and admission",
        essential: "Included",
        premium: "Included with stronger follow-up",
      },
      {
        label: "Student visa",
        essential: "Included",
        premium: "Included",
      },
      {
        label: "Flight ticket",
        essential: "Not included",
        premium: "Help with booking",
      },
      {
        label: "Follow-up until arrival",
        essential: "Standard structure",
        premium: "Premium support",
      },
    ],
    consultationEyebrow: "Free consultation",
    consultationTitle:
      "Start with a simple conversation, then choose the right package once the project is fully clear.",
    consultationText:
      "The free consultation should feel like the real first step: understand the situation, reassure the family, and guide the best next move before any commitment.",
    consultationPrimary: "Request a free consultation",
    consultationSecondary: "View services page",
    consultationPageSecondary: "Start my application",
  },
  ar: {
    dir: "rtl",
    eyebrow: "باقات واضحة وضمانات ظاهرة",
    title:
      "اختاروا الصيغة المناسبة ثم تقدموا داخل مسار واضح يطمئن الوالدين ويعطي الطالب رؤية عملية.",
    description:
      "الباقات هنا معروضة كمستويين واضحين جدا: باقة اساسية لتامين الملف والمراحل الحاسمة، ثم باقة مميزة لمرافقة اشمل حتى السفر والوصول.",
    packages: [
      {
        id: "essential",
        name: "الباقة الاساسية",
        price: "15 000 درهم",
        audience: "لبداية قوية ومنظمة",
        summary:
          "صيغة واضحة لاختيار الجامعة وتجهيز الملف والترجمة والتقديم ومرافقة التاشيرة.",
        includes: [
          "اختيار جامعات مناسبة للملف",
          "تجهيز ومراجعة الملف",
          "ترجمة وتنظيم الوثائق",
          "متابعة التقديم الجامعي",
          "مرافقة التاشيرة حتى الايداع",
        ],
        promise:
          "تتقدم العائلة داخل مسار اوضح وملف اكثر تماسكا في المراحل المهمة.",
        idealFor:
          "مناسبة للعائلات التي تريد مرافقة جدية في الخطوات الحاسمة.",
      },
      {
        id: "premium",
        name: "الباقة المميزة",
        price: "23 000 درهم",
        audience: "لمرافقة اكمل حتى السفر والوصول",
        summary:
          "كل ما في الباقة الاساسية مع راحة اكبر في التذكرة والمتابعة والوصول واول الايام في الصين.",
        includes: [
          "جميع عناصر الباقة الاساسية",
          "مساعدة في حجز التذكرة",
          "متابعة من المغرب حتى الجامعة",
          "تنظيم النقل عند الوصول",
          "مرافقة اكثر طمانينة للعائلة",
        ],
        promise:
          "يبدو المشروع اكثر فخامة لان المرافقة لا تتوقف عند القبول.",
        idealFor:
          "مناسبة للوالدين الذين يريدون متابعة واضحة حتى الايام الاولى في الصين.",
      },
    ],
    comparisonTitle: "قارنوا بين الصيغتين بسرعة",
    comparisonRows: [
      {
        label: "اختيار الجامعة والقبول",
        essential: "مشمول",
        premium: "مشمول مع متابعة اقوى",
      },
      {
        label: "تاشيرة الطالب",
        essential: "مشمول",
        premium: "مشمول",
      },
      {
        label: "تذكرة الطيران",
        essential: "غير مشمول",
        premium: "مساعدة في الحجز",
      },
      {
        label: "المتابعة حتى الوصول",
        essential: "هيكل اساسي",
        premium: "مرافقة مميزة",
      },
    ],
    consultationEyebrow: "استشارة مجانية",
    consultationTitle:
      "ابدؤوا اولا بمكالمة واضحة، ثم اختاروا الباقة المناسبة عندما تصبح الصورة مفهومة تماما.",
    consultationText:
      "الاستشارة المجانية هي الخطوة الطبيعية الاولى: فهم الوضع، طمانة العائلة، ثم تحديد الصيغة المناسبة قبل اي التزام.",
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
  const [activeId, setActiveId] = useState(t.packages[0].id);
  const activePackage =
    t.packages.find((item) => item.id === activeId) ?? t.packages[0];
  const isArabic = t.dir === "rtl";
  const contactHref = `/${lang}/contact`;
  const servicesHref = `/${lang}/services`;
  const applyHref = `/${lang}/apply`;
  const isPage = mode === "page";

  return (
    <section
      className={`${
        isPage ? "bg-[#f4ede4]" : "bg-[#f2e7da]"
      } py-14 text-zinc-900 sm:py-18`}
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
                {t.packages.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`rounded-[2rem] border px-5 py-5 transition-all duration-200 ${
                      item.id === activeId
                        ? "border-[#770304] bg-gradient-to-br from-[#770304] to-[#5a0203] text-white shadow-[0_24px_60px_rgba(119,3,4,0.25)] scale-[1.02]"
                        : "border-zinc-200 bg-[#faf7f3] text-zinc-900 hover:border-[#B17F02] hover:shadow-md"
                    } ${isArabic ? "text-right" : "text-left"}`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <p className="text-lg font-bold">{item.name}</p>
                        <p
                          className={`mt-1 text-xs uppercase tracking-[0.22em] ${
                            item.id === activeId
                              ? "text-white/55"
                              : "text-zinc-500"
                          }`}
                        >
                          {item.audience}
                        </p>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          item.id === activeId
                            ? "bg-gradient-to-r from-[#B17F02] to-[#C59F41] text-black shadow-lg"
                            : "bg-white text-zinc-900"
                        }`}
                      >
                        {item.price}
                      </span>
                    </div>
                    <p
                      className={`mt-4 text-sm leading-7 ${
                        item.id === activeId ? "text-white/78" : "text-zinc-600"
                      }`}
                    >
                      {item.summary}
                    </p>
                  </button>
                ))}
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
                  <p className="text-sm leading-8 text-white/74">
                    {activePackage.promise}
                  </p>

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

            <div className="mt-6 overflow-hidden rounded-[2rem] border border-zinc-200 shadow-xl">
              {/* Table Header */}
              <div className="grid grid-cols-[1.1fr_0.95fr_0.95fr] bg-gradient-to-r from-[#770304] to-[#5a0203] text-white">
                <div className="px-5 py-5 text-sm font-semibold text-white/70">
                  {/* Empty corner */}
                </div>
                <div className="px-5 py-5 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/60">Pack Essentiel</span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-bold">15,000 MAD</span>
                  </div>
                </div>
                <div className="px-5 py-5 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <span className="relative text-xs font-semibold uppercase tracking-wider text-white/90">
                      Pack Premium
                      <span className="absolute -right-1 -top-3 flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#B17F02] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#B17F02]"></span>
                      </span>
                    </span>
                    <span className="rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-3 py-1 text-sm font-bold text-black shadow-lg">23,000 MAD</span>
                  </div>
                </div>
              </div>

              {/* Table Rows */}
              {t.comparisonRows.map((row, index) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.1fr_0.95fr_0.95fr] transition-colors duration-200 hover:bg-[#faf7f3] ${
                    index % 2 === 0 ? "bg-white" : "bg-[#faf9f7]"
                  }`}
                >
                  <div className="flex items-center px-5 py-5">
                    <span className="text-sm font-semibold text-zinc-900">
                      {row.label}
                    </span>
                  </div>
                  <div className="flex items-center justify-center px-5 py-5">
                    <div className="flex items-center gap-2 text-sm text-zinc-700">
                      {row.essential.includes("Non") || row.essential.includes("standard") ? (
                        <>
                          <svg className="h-5 w-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          <span className="text-zinc-500">{row.essential}</span>
                        </>
                      ) : (
                        <>
                          <svg className="h-5 w-5 text-[#B17F02]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="font-medium">{row.essential}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-center px-5 py-5">
                    <div className="flex items-center gap-2 text-sm">
                      <svg className="h-5 w-5 text-[#B17F02]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold text-[#770304]">{row.premium}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Premium badge at bottom */}
            <div className={`mt-5 flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#B17F02]/10 to-[#B17F02]/5 px-5 py-4 ${isArabic ? "flex-row-reverse" : ""}`}>
              <svg className="h-6 w-6 text-[#B17F02]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <p className="text-sm font-medium text-zinc-700">
                <span className="font-semibold text-[#770304]">Recommendation:</span> Le Pack Premium offre un accompagnement complet jusqu'à votre arrivée en Chine
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
                  {isPage
                    ? t.consultationPageSecondary
                    : t.consultationSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
