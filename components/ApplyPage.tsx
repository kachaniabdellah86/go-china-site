"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import {
  buildWhatsappUrl,
  Locale,
  primaryWhatsappNumberDisplay,
  supportedCities,
} from "@/lib/yalla";

type Copy = {
  dir: "ltr" | "rtl";
  hero: {
    badge: string;
    title: string;
    description: string;
    stats: { label: string; value: string }[];
    panelEyebrow: string;
    panelTitle: string;
    panelItems: string[];
  };
  side: {
    beforeEyebrow: string;
    beforeTitle: string;
    beforeText: string;
    beforeItems: string[];
    nextEyebrow: string;
    nextTitle: string;
    steps: { title: string; desc: string }[];
    supportTitle: string;
    supportText: string;
    supportButton: string;
    supportCitiesTitle: string;
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    chips: string[];
    success: string;
    fallbackError: string;
    unavailableError: string;
    objectiveLabel: string;
    objectivePlaceholder: string;
    objectives: { value: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    consent: string;
    privacyPrefix: string;
    privacyLink: string;
    reassurance: string;
    whatsappAlternative: string;
    submit: string;
    submitting: string;
    fields: {
      fullName: string;
      fullNamePlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      city: string;
      cityPlaceholder: string;
      studyLevel: string;
      studyLevelPlaceholder: string;
      fieldOfStudy: string;
      fieldOfStudyPlaceholder: string;
    };
  };
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    hero: {
      badge: "Candidature • Études en Chine",
      title:
        "Envoyez une demande structurée pour que nous puissions vous orienter sérieusement avant le dossier complet.",
      description:
        "La candidature ne sert pas à vous compliquer la vie. Elle sert à comprendre votre niveau, votre projet, vos priorités et le niveau d'accompagnement attendu par votre famille.",
      stats: [
        { label: "Objectif", value: "Comprendre le profil avant le pack" },
        { label: "Lecture", value: "Bourse, université, visa, arrivée" },
        { label: "Alternative", value: "WhatsApp direct si besoin" },
      ],
      panelEyebrow: "Ce que vous lancez ici",
      panelTitle: "Une demande claire avant toute décision engageante.",
      panelItems: [
        "Votre niveau d'étude et votre projet",
        "Votre ville, domaine et attentes principales",
        "Vos questions sur bourse, université, visa ou arrivée",
      ],
    },
    side: {
      beforeEyebrow: "Avant d'envoyer",
      beforeTitle: "Nous avons besoin de peu d'informations, mais de bonnes informations.",
      beforeText:
        "Pas besoin de préparer tout votre dossier maintenant. Nous avons surtout besoin de ce qui permet d'orienter correctement la suite.",
      beforeItems: [
        "Nom complet et téléphone principal",
        "Ville actuelle et niveau d'étude",
        "Domaine visé ou spécialité recherchée",
        "Objectif: bourse, université, conseil, ou autre besoin",
      ],
      nextEyebrow: "Après l'envoi",
      nextTitle: "Ce qui se passe ensuite",
      steps: [
        {
          title: "01. Lecture du profil",
          desc: "Nous lisons la demande pour comprendre le projet et les zones à clarifier.",
        },
        {
          title: "02. Retour personnalisé",
          desc: "Un échange sur WhatsApp ou par téléphone permet de poser les bonnes bases avant d'aller plus loin.",
        },
        {
          title: "03. Recommandation",
          desc: "Nous orientons vers le bon pack, la bonne logique d'université et la prochaine étape utile.",
        },
      ],
      supportTitle: "Vous préférez commencer directement ?",
      supportText:
        "Si vous avez déjà une question précise sur la bourse, le visa ou le voyage, ouvrez WhatsApp et expliquez votre situation sans attendre.",
      supportButton: `WhatsApp : ${primaryWhatsappNumberDisplay}`,
      supportCitiesTitle: "Villes déjà présentes dans notre parcours de service",
    },
    form: {
      eyebrow: "Votre demande",
      title: "Envoyer ma candidature",
      description:
        "Remplissez l'essentiel. Nous utilisons ces informations pour vous répondre plus vite et de manière plus utile.",
      chips: ["Rapide à remplir", "Pensé mobile", "Parents & étudiants"],
      success: "Merci, votre demande a bien été envoyée.",
      fallbackError: "Une erreur est survenue. Merci de réessayer ou de nous écrire sur WhatsApp.",
      unavailableError:
        "Le formulaire est momentanément indisponible. Merci de nous écrire directement sur WhatsApp.",
      objectiveLabel: "Objectif *",
      objectivePlaceholder: "Choisir...",
      objectives: [
        { value: "Scholarship", label: "Chercher une bourse" },
        { value: "University", label: "Trouver une bonne université" },
        { value: "Visa", label: "Comprendre le visa" },
        { value: "Advice", label: "Recevoir un conseil d'abord" },
      ],
      messageLabel: "Message",
      messagePlaceholder:
        "Expliquez brièvement votre projet, vos questions sur la bourse, l'université, le visa, le coût ou l'arrivée",
      consent:
        "En envoyant ce formulaire, vous acceptez d'être recontacté par WhatsApp ou téléphone pour la suite du projet.",
      privacyPrefix: "J'ai lu la",
      privacyLink: "politique de confidentialité",
      reassurance:
        "Aucun paiement n'est demandé à cette étape. Le but est d'évaluer le profil et de recommander la bonne suite.",
      whatsappAlternative: "Vous préférez parler directement sur WhatsApp ?",
      submit: "Envoyer ma demande",
      submitting: "Envoi...",
      fields: {
        fullName: "Nom complet *",
        fullNamePlaceholder: "Votre nom complet",
        phone: "Téléphone / WhatsApp *",
        phonePlaceholder: "+212...",
        email: "Email",
        emailPlaceholder: "contact@exemple.com",
        city: "Ville *",
        cityPlaceholder: "Agadir, Casablanca...",
        studyLevel: "Niveau d'étude *",
        studyLevelPlaceholder: "Bac, Licence, Master...",
        fieldOfStudy: "Domaine visé",
        fieldOfStudyPlaceholder: "Médecine, ingénierie, commerce...",
      },
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Application • Study in China",
      title:
        "Send a structured request so we can guide you seriously before the full file begins.",
      description:
        "The application is not here to complicate things. It exists to understand your level, your project, your priorities, and the support level expected by your family.",
      stats: [
        { label: "Goal", value: "Understand the profile before the package" },
        { label: "Reading", value: "Scholarship, university, visa, arrival" },
        { label: "Alternative", value: "Direct WhatsApp when needed" },
      ],
      panelEyebrow: "What starts here",
      panelTitle: "A clear request before any heavy commitment.",
      panelItems: [
        "Your study level and project",
        "Your city, field, and main expectations",
        "Your questions about scholarship, university, visa, or arrival",
      ],
    },
    side: {
      beforeEyebrow: "Before you submit",
      beforeTitle: "We need only a few details, but they need to be the right ones.",
      beforeText:
        "There is no need to prepare the whole file now. We mainly need the information that helps us orient the next step correctly.",
      beforeItems: [
        "Full name and main phone number",
        "Current city and study level",
        "Target field or specialization",
        "Objective: scholarship, university, advice, or another need",
      ],
      nextEyebrow: "After submission",
      nextTitle: "What happens next",
      steps: [
        {
          title: "01. Profile review",
          desc: "We read the request to understand the project and the areas that need clarification.",
        },
        {
          title: "02. Personal follow-up",
          desc: "A WhatsApp or phone exchange helps build the right foundation before going further.",
        },
        {
          title: "03. Recommendation",
          desc: "We point you toward the right package, the right university logic, and the next useful step.",
        },
      ],
      supportTitle: "Would you rather begin directly?",
      supportText:
        "If you already have a precise question about scholarship, visa, or travel, open WhatsApp and tell us about your situation immediately.",
      supportButton: `WhatsApp: ${primaryWhatsappNumberDisplay}`,
      supportCitiesTitle: "Cities already present in our service route",
    },
    form: {
      eyebrow: "Your request",
      title: "Send my application",
      description:
        "Fill in the essentials. We use this information to answer faster and in a more useful way.",
      chips: ["Quick to complete", "Mobile first", "Parents & students"],
      success: "Thank you, your request has been sent.",
      fallbackError: "Something went wrong. Please try again or contact us on WhatsApp.",
      unavailableError:
        "The form is temporarily unavailable. Please contact us directly on WhatsApp.",
      objectiveLabel: "Objective *",
      objectivePlaceholder: "Select...",
      objectives: [
        { value: "Scholarship", label: "Look for a scholarship" },
        { value: "University", label: "Find a strong university" },
        { value: "Visa", label: "Understand the visa process" },
        { value: "Advice", label: "Get advice first" },
      ],
      messageLabel: "Message",
      messagePlaceholder:
        "Briefly explain your project or your questions about scholarship, university, visa, cost, or arrival",
      consent:
        "By sending this form, you agree to be contacted by WhatsApp or phone for the next step of the project.",
      privacyPrefix: "I have read the",
      privacyLink: "privacy policy",
      reassurance:
        "No payment is requested at this stage. The goal is to assess the profile and recommend the right next step.",
      whatsappAlternative: "Would you rather speak directly on WhatsApp?",
      submit: "Send my request",
      submitting: "Sending...",
      fields: {
        fullName: "Full name *",
        fullNamePlaceholder: "Your full name",
        phone: "Phone / WhatsApp *",
        phonePlaceholder: "+212...",
        email: "Email",
        emailPlaceholder: "contact@example.com",
        city: "City *",
        cityPlaceholder: "Agadir, Casablanca...",
        studyLevel: "Study level *",
        studyLevelPlaceholder: "High school, Bachelor, Master...",
        fieldOfStudy: "Target field",
        fieldOfStudyPlaceholder: "Medicine, engineering, business...",
      },
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "التقديم • الدراسة في الصين",
      title:
        "أرسل طلباً منظماً حتى نستطيع توجيهك بجدية قبل الدخول في الملف الكامل.",
      description:
        "التقديم هنا ليس لتعقيد حياتك، بل لفهم مستواك ومشروعك وأولوياتك ومستوى المرافقة الذي تتوقعه عائلتك.",
      stats: [
        { label: "الهدف", value: "فهم الملف قبل اختيار الباقة" },
        { label: "القراءة", value: "منحة، جامعة، تأشيرة، وصول" },
        { label: "البديل", value: "واتساب مباشر عند الحاجة" },
      ],
      panelEyebrow: "ما الذي يبدأ هنا",
      panelTitle: "طلب واضح قبل أي التزام ثقيل.",
      panelItems: [
        "مستواك الدراسي ومشروعك",
        "مدينتك ومجالك وتوقعاتك الأساسية",
        "أسئلتك حول المنحة أو الجامعة أو التأشيرة أو الوصول",
      ],
    },
    side: {
      beforeEyebrow: "قبل الإرسال",
      beforeTitle: "نحتاج معلومات قليلة، لكن يجب أن تكون المعلومات الصحيحة.",
      beforeText:
        "لا حاجة إلى تجهيز الملف كله الآن. نحن نحتاج فقط إلى ما يساعد على توجيه الخطوة التالية بشكل صحيح.",
      beforeItems: [
        "الاسم الكامل ورقم الهاتف الرئيسي",
        "المدينة الحالية والمستوى الدراسي",
        "المجال أو التخصص المطلوب",
        "الهدف: منحة أو جامعة أو استشارة أو حاجة أخرى",
      ],
      nextEyebrow: "بعد الإرسال",
      nextTitle: "ما الذي يحدث بعد ذلك",
      steps: [
        {
          title: "01. قراءة الملف",
          desc: "نراجع الطلب لفهم المشروع والنقاط التي تحتاج إلى توضيح.",
        },
        {
          title: "02. متابعة شخصية",
          desc: "تواصل على واتساب أو الهاتف يساعد على وضع الأساس الصحيح قبل التقدم أكثر.",
        },
        {
          title: "03. التوصية",
          desc: "نوجّهك إلى الباقة المناسبة ومنطق الجامعة والخطوة التالية المفيدة.",
        },
      ],
      supportTitle: "هل تفضل أن تبدأ مباشرة؟",
      supportText:
        "إذا كان لديك سؤال محدد عن المنحة أو التأشيرة أو السفر، افتح واتساب واشرح وضعك مباشرة.",
      supportButton: `WhatsApp: ${primaryWhatsappNumberDisplay}`,
      supportCitiesTitle: "مدن موجودة فعلاً في مسار خدمتنا",
    },
    form: {
      eyebrow: "طلبك",
      title: "إرسال الطلب",
      description:
        "املأ الأساسيات فقط. نستخدم هذه المعلومات حتى نجيبك بسرعة وبشكل أكثر فائدة.",
      chips: ["سريع في الملء", "مناسب للهاتف", "للوالدين والطلبة"],
      success: "شكراً، تم إرسال طلبك بنجاح.",
      fallbackError: "حدث خطأ ما. حاول مرة أخرى أو راسلنا على واتساب.",
      unavailableError: "الاستمارة غير متاحة مؤقتاً. راسلنا مباشرة على واتساب.",
      objectiveLabel: "الهدف *",
      objectivePlaceholder: "اختر...",
      objectives: [
        { value: "Scholarship", label: "البحث عن منحة" },
        { value: "University", label: "إيجاد جامعة جيدة" },
        { value: "Visa", label: "فهم التأشيرة" },
        { value: "Advice", label: "أحتاج نصيحة أولاً" },
      ],
      messageLabel: "الرسالة",
      messagePlaceholder:
        "اشرح بإيجاز مشروعك أو أسئلتك حول المنحة أو الجامعة أو التأشيرة أو التكلفة أو الوصول",
      consent:
        "بإرسال هذا النموذج فإنك توافق على التواصل معك عبر واتساب أو الهاتف بخصوص الخطوة التالية من المشروع.",
      privacyPrefix: "لقد قرأت",
      privacyLink: "سياسة الخصوصية",
      reassurance:
        "لا يُطلب أي دفع في هذه المرحلة. الهدف هو تقييم الملف واقتراح الخطوة المناسبة.",
      whatsappAlternative: "هل تفضّل التحدث مباشرة عبر واتساب؟",
      submit: "إرسال الطلب",
      submitting: "جار الإرسال...",
      fields: {
        fullName: "الاسم الكامل *",
        fullNamePlaceholder: "اسمك الكامل",
        phone: "الهاتف / WhatsApp *",
        phonePlaceholder: "+212...",
        email: "البريد الإلكتروني",
        emailPlaceholder: "contact@example.com",
        city: "المدينة *",
        cityPlaceholder: "أكادير، الدار البيضاء...",
        studyLevel: "المستوى الدراسي *",
        studyLevelPlaceholder: "ثانوي، إجازة، ماستر...",
        fieldOfStudy: "المجال المطلوب",
        fieldOfStudyPlaceholder: "طب، هندسة، تجارة...",
      },
    },
  },
};

export default function ApplyPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const privacyHref = `/${lang}/privacy`;
  const whatsappHref = buildWhatsappUrl();
  const heroImageAlt =
    lang === "fr"
      ? "Candidature Yalla China pour les études en Chine"
      : lang === "en"
        ? "Yalla China application guidance for studying in China"
        : "التقديم مع يلا تشاينا للدراسة في الصين";
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        if (data?.errorCode === "db_unavailable") {
          throw new Error(t.form.unavailableError);
        }

        throw new Error(t.form.fallbackError);
      }

      setDone(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : t.form.fallbackError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#050505] text-white" dir={t.dir} lang={lang}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,3,4,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(177,127,2,0.14),transparent_20%),linear-gradient(135deg,#190506_0%,#28080a_38%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <Container>
          <div className="relative grid gap-8 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:py-20">
            <div className={`space-y-7 ${isArabic ? "text-right" : "text-center lg:text-left"}`}>
              <p className="section-eyebrow inline-flex max-w-full flex-wrap justify-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/90 sm:text-sm sm:tracking-[0.22em] lg:justify-start lg:text-left">
                {t.hero.badge}
              </p>

              <div className="space-y-4">
                <h1
                  className={`display-title text-[2.25rem] font-black leading-[1.02] tracking-[-0.04em] sm:text-[3.25rem] lg:text-6xl ${
                    isArabic ? "max-w-4xl" : "mx-auto max-w-4xl lg:mx-0"
                  }`}
                >
                  {t.hero.title}
                </h1>

                <p
                  className={`max-w-2xl text-base leading-8 text-white/78 sm:text-lg ${
                    isArabic ? "" : "mx-auto lg:mx-0"
                  }`}
                >
                  {t.hero.description}
                </p>
              </div>

              <div
                className={`grid gap-3 sm:grid-cols-2 xl:grid-cols-3 ${
                  isArabic ? "" : "mx-auto max-w-xl lg:mx-0 lg:max-w-none"
                }`}
              >
                {t.hero.stats.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-[1.7rem] border border-white/10 bg-black/20 p-4 backdrop-blur-md ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-sm text-white/65">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/20 shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
                <div className="relative h-[20rem] w-full sm:h-[28rem]">
                  <Image
                    src="/fr-apply-hero.jpg"
                    alt={heroImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 44vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div
                className={`relative mt-4 rounded-[1.8rem] border border-white/10 bg-black/70 p-5 shadow-xl backdrop-blur-md md:absolute md:bottom-4 md:left-4 md:right-4 md:mt-0 ${
                  isArabic ? "text-right" : "text-center md:text-left"
                }`}
              >
                <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                  {t.hero.panelEyebrow}
                </p>
                <h2 className="display-title mt-3 text-2xl font-black leading-tight text-white">
                  {t.hero.panelTitle}
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {t.hero.panelItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/82"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4ede4] py-12 text-zinc-900 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="order-2 space-y-5 lg:order-1">
              <div
                className={`rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                  {t.side.beforeEyebrow}
                </p>
                <h2 className="display-title mt-3 text-2xl font-black tracking-tight">
                  {t.side.beforeTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">{t.side.beforeText}</p>

                <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                  {t.side.beforeItems.map((item) => (
                    <li key={item} className="rounded-2xl bg-zinc-50 px-4 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className={`rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 shadow-sm sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                  {t.side.nextEyebrow}
                </p>
                <h3 className="display-title mt-3 text-2xl font-black tracking-tight">
                  {t.side.nextTitle}
                </h3>

                <div className="mt-5 space-y-4">
                  {t.side.steps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-[1.6rem] border border-zinc-200 bg-white p-4"
                    >
                      <h4 className="text-sm font-bold text-zinc-900 sm:text-base">{step.title}</h4>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`rounded-[2rem] bg-[#090909] p-6 text-white shadow-[0_24px_55px_rgba(0,0,0,0.16)] sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                  {t.side.supportTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">{t.side.supportText}</p>
                <a
                  href={buildWhatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B17F02] px-5 py-3 font-semibold text-black transition hover:opacity-90 sm:w-auto"
                >
                  {t.side.supportButton}
                </a>

                <div className="mt-6">
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                    {t.side.supportCitiesTitle}
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {supportedCities[lang].map((city) => (
                      <div
                        key={city}
                        className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/82"
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:sticky lg:top-24 lg:order-2">
              <div
                className={`rounded-[2.2rem] border border-zinc-200 bg-white p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                  {t.form.eyebrow}
                </p>
                <h2 className="display-title mt-3 text-3xl font-black tracking-tight">
                  {t.form.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">{t.form.description}</p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {t.form.chips.map((chip) => (
                    <div
                      key={chip}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-center text-sm font-medium"
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                {done ? (
                  <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
                    {t.form.success}
                  </div>
                ) : null}

                {error ? (
                  <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
                ) : null}

                <form onSubmit={onSubmit} className="mt-6 space-y-5">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label={t.form.fields.fullName}
                      name="fullName"
                      placeholder={t.form.fields.fullNamePlaceholder}
                      required
                      rtl={isArabic}
                    />
                    <Field
                      label={t.form.fields.phone}
                      name="phone"
                      placeholder={t.form.fields.phonePlaceholder}
                      required
                      rtl={isArabic}
                      latin
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label={t.form.fields.email}
                      name="email"
                      placeholder={t.form.fields.emailPlaceholder}
                      rtl={isArabic}
                      latin
                      type="email"
                    />
                    <Field
                      label={t.form.fields.city}
                      name="city"
                      placeholder={t.form.fields.cityPlaceholder}
                      required
                      rtl={isArabic}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label={t.form.fields.studyLevel}
                      name="studyLevel"
                      placeholder={t.form.fields.studyLevelPlaceholder}
                      required
                      rtl={isArabic}
                    />
                    <Field
                      label={t.form.fields.fieldOfStudy}
                      name="fieldOfStudy"
                      placeholder={t.form.fields.fieldOfStudyPlaceholder}
                      rtl={isArabic}
                    />
                  </div>

                  <div>
                    <label htmlFor="objective" className="text-sm font-medium">
                      {t.form.objectiveLabel}
                    </label>
                    <select
                      id="objective"
                      name="objective"
                      required
                      defaultValue=""
                      className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#770304] sm:text-base ${
                        isArabic ? "text-right" : ""
                      }`}
                    >
                      <option value="" disabled>
                        {t.form.objectivePlaceholder}
                      </option>
                      {t.form.objectives.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium">
                      {t.form.messageLabel}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder={t.form.messagePlaceholder}
                      className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#770304] sm:text-base ${
                        isArabic ? "text-right" : ""
                      }`}
                    />
                  </div>

                  <label
                    className={`flex items-start gap-3 rounded-[1.4rem] border border-zinc-200 bg-[#faf7f3] px-4 py-4 text-sm leading-6 text-zinc-700 ${
                      isArabic ? "flex-row-reverse text-right" : ""
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="consent"
                      value="accepted"
                      required
                      className="mt-1 h-4 w-4 rounded border-zinc-300 text-[#770304] focus:ring-[#770304]"
                    />
                    <span>
                      {t.form.consent} {t.form.privacyPrefix}{" "}
                      <Link
                        href={privacyHref}
                        className="font-semibold text-[#770304] underline underline-offset-4"
                      >
                        {t.form.privacyLink}
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    disabled={loading}
                    data-track="apply_submit"
                    data-track-value={lang}
                    className="w-full rounded-full bg-[#770304] px-5 py-3 font-semibold text-white transition hover:bg-[#740000] disabled:opacity-60"
                  >
                    {loading ? t.form.submitting : t.form.submit}
                  </button>

                  <div
                    className={`flex flex-col gap-3 rounded-[1.5rem] border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between ${
                      isArabic ? "sm:flex-row-reverse text-right" : ""
                    }`}
                  >
                    <p className="leading-6">{t.form.reassurance}</p>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      data-track="apply_whatsapp_alternative"
                      data-track-value={lang}
                      className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#770304]/15 bg-white px-4 py-2.5 font-medium text-[#770304] transition hover:bg-[#fff7f2]"
                    >
                      {t.form.whatsappAlternative}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  rtl = false,
  latin = false,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rtl?: boolean;
  latin?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        dir={latin && rtl ? "ltr" : undefined}
        inputMode={type === "email" ? "email" : latin ? "tel" : undefined}
        className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#770304] sm:text-base ${
          latin && rtl ? "force-ltr" : rtl ? "text-right" : ""
        }`}
      />
    </div>
  );
}
