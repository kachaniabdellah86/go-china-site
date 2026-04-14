"use client";

import { useState } from "react";
import Container from "@/components/Container";
import { ArabicText, ArabicStepNumber } from "@/lib/ArabicText";

// Helper to extract and render step titles with proper number handling for Arabic
function StepTitle({ title, isArabic }: { title: string; isArabic: boolean }) {
  if (!isArabic) {
    return <span>{title}</span>;
  }
  
  const match = title.match(/^(\d+)\.\s*(.+)$/);
  if (match) {
    const [, number, text] = match;
    return (
      <>
        <ArabicStepNumber number={`${number}.`} />
        {text}
      </>
    );
  }
  
  return <span>{title}</span>;
}


type Locale = "fr" | "en" | "ar";

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
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    chips: string[];
    success: string;
    fallbackError: string;
    objectiveLabel: string;
    objectivePlaceholder: string;
    objectives: { value: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    consent: string;
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
      badge: "Candidature • Etudes en Chine",
      title:
        "Envoyez votre demande et recevez une orientation claire avant le dossier complet.",
      description:
        "Cette candidature nous aide a comprendre votre niveau, votre projet et le type d'accompagnement le plus adapte pour avancer serieusement.",
      stats: [
        { label: "Formulaire rapide", value: "Seulement les infos utiles" },
        { label: "Reponse claire", value: "Sous 24 a 48h" },
        { label: "Alternative directe", value: "WhatsApp reste visible" },
      ],
      panelEyebrow: "Ce que vous lancez ici",
      panelTitle: "Une premiere demande simple avant le dossier complet.",
      panelItems: [
        "Votre niveau et votre objectif",
        "Votre ville et votre domaine vise",
        "Un premier message pour cadrer la suite",
      ],
    },
    side: {
      beforeEyebrow: "Avant d'envoyer",
      beforeTitle: "Ce qu'il faut nous dire pour bien vous orienter.",
      beforeText:
        "Pas besoin de remplir un long dossier maintenant. Nous avons seulement besoin des informations qui nous permettent de vous repondre utilement.",
      beforeItems: [
        "Nom complet et telephone",
        "Ville et niveau d'etude",
        "Domaine ou specialite visee",
        "Objectif en Chine et premieres questions",
      ],
      nextEyebrow: "Apres l'envoi",
      nextTitle: "Ce qui se passe ensuite",
      steps: [
        {
          title: "01. Nous lisons votre demande",
          desc: "Nous regardons les points essentiels pour comprendre rapidement votre profil.",
        },
        {
          title: "02. Nous revenons vers vous",
          desc: "Un echange sur WhatsApp ou par telephone permet de clarifier la bonne suite.",
        },
        {
          title: "03. Nous vous orientons",
          desc: "Vous savez plus clairement quelle formule choisir et comment avancer proprement.",
        },
      ],
      supportTitle: "Vous preferez commencer directement ?",
      supportText:
        "Si vous avez deja une question precise, ouvrez WhatsApp et expliquez-nous votre projet sans attendre.",
      supportButton: "WhatsApp : +212 638-335452",
    },
    form: {
      eyebrow: "Votre demande",
      title: "Envoyer ma candidature",
      description:
        "Remplissez l'essentiel. Nous utilisons ces informations pour vous repondre de facon plus claire, plus utile et plus strategique.",
      chips: ["Rapide a remplir", "Mobile friendly", "Parents & etudiants"],
      success: "Merci, votre demande a bien ete envoyee.",
      fallbackError: "Erreur",
      objectiveLabel: "Objectif *",
      objectivePlaceholder: "Choisir...",
      objectives: [
        { value: "Etudes universitaires", label: "Etudes universitaires" },
        { value: "Cours de langue", label: "Cours de langue" },
        { value: "Je veux d'abord des conseils", label: "Je veux d'abord des conseils" },
        { value: "Autre", label: "Autre" },
      ],
      messageLabel: "Message",
      messagePlaceholder:
        "Decrivez brievement votre projet, vos questions sur le visa, la bourse, le cout ou le type d'universite recherche",
      consent:
        "En envoyant ce formulaire, vous acceptez d'etre contacte par WhatsApp ou telephone pour la suite du projet.",
      submit: "Envoyer ma demande",
      submitting: "Envoi...",
      fields: {
        fullName: "Nom complet *",
        fullNamePlaceholder: "Votre nom complet",
        phone: "Telephone / WhatsApp *",
        phonePlaceholder: "+212...",
        email: "Email",
        emailPlaceholder: "contact@exemple.com",
        city: "Ville *",
        cityPlaceholder: "Agadir, Casablanca...",
        studyLevel: "Niveau d'etude *",
        studyLevelPlaceholder: "Bac, Licence, Master...",
        fieldOfStudy: "Domaine vise",
        fieldOfStudyPlaceholder: "Medecine, ingenierie, commerce...",
      },
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Application • Study in China",
      title:
        "Send your request and get a clear direction before the full application file.",
      description:
        "This application helps us understand your level, your project, and the type of support that fits best so you can move forward seriously.",
      stats: [
        { label: "Fast form", value: "Only useful information" },
        { label: "Clear reply", value: "Within 24 to 48h" },
        { label: "Direct alternative", value: "WhatsApp stays visible" },
      ],
      panelEyebrow: "What you begin here",
      panelTitle: "A simple first request before the full file.",
      panelItems: [
        "Your level and your objective",
        "Your city and target field",
        "A first message to frame the next step",
      ],
    },
    side: {
      beforeEyebrow: "Before you submit",
      beforeTitle: "What we need to know to guide you well.",
      beforeText:
        "There is no need to fill a heavy file now. We only need the information that helps us answer you in a useful way.",
      beforeItems: [
        "Full name and phone number",
        "City and study level",
        "Target field or specialization",
        "Objective in China and first questions",
      ],
      nextEyebrow: "After you submit",
      nextTitle: "What happens next",
      steps: [
        {
          title: "01. We read your request",
          desc: "We review the essential points to understand your profile quickly.",
        },
        {
          title: "02. We contact you back",
          desc: "A WhatsApp or phone exchange helps clarify the right next step.",
        },
        {
          title: "03. We guide you",
          desc: "You understand more clearly which formula fits and how to move forward properly.",
        },
      ],
      supportTitle: "Would you rather start directly?",
      supportText:
        "If you already have a precise question, open WhatsApp and tell us about your project right away.",
      supportButton: "WhatsApp: +212 638-335452",
    },
    form: {
      eyebrow: "Your request",
      title: "Send my application",
      description:
        "Fill in the essentials. We use this information to answer in a clearer, more useful, and more strategic way.",
      chips: ["Quick to complete", "Mobile friendly", "Parents & students"],
      success: "Thank you, your request has been sent.",
      fallbackError: "Error",
      objectiveLabel: "Objective *",
      objectivePlaceholder: "Select...",
      objectives: [
        { value: "University studies", label: "University studies" },
        { value: "Language courses", label: "Language courses" },
        { value: "I need advice first", label: "I need advice first" },
        { value: "Other", label: "Other" },
      ],
      messageLabel: "Message",
      messagePlaceholder:
        "Briefly describe your project or your questions about visa, scholarship, cost, or universities",
      consent:
        "By sending this form, you agree to be contacted by WhatsApp or phone for the next step of the project.",
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
        "ارسل طلبك واحصل على توجيه واضح قبل الملف الكامل.",
      description:
        "هذا الطلب يساعدنا على فهم مستواك ومشروعك ونوع المرافقة المناسب حتى تتقدم بشكل جدي وواضح.",
      stats: [
        { label: "استمارة سريعة", value: "فقط المعلومات المفيدة" },
        { label: "رد اوضح", value: "خلال 24 الى 48 ساعة" },
        { label: "بديل مباشر", value: "WhatsApp يبقى ظاهرا" },
      ],
      panelEyebrow: "ما الذي تبدأه هنا",
      panelTitle: "طلب اول بسيط قبل الملف الكامل.",
      panelItems: [
        "مستواك وهدفك",
        "مدينتك والمجال الذي تستهدفه",
        "رسالة اولى لتوضيح الخطوة التالية",
      ],
    },
    side: {
      beforeEyebrow: "قبل الارسال",
      beforeTitle: "ما الذي نحتاج اليه لنوجهك بشكل صحيح.",
      beforeText:
        "لا حاجة لملف طويل الان. نحتاج فقط الى المعلومات التي تساعدنا على الرد عليك بشكل مفيد.",
      beforeItems: [
        "الاسم الكامل ورقم الهاتف",
        "المدينة والمستوى الدراسي",
        "التخصص او المجال المطلوب",
        "الهدف في الصين والاسئلة الاولى",
      ],
      nextEyebrow: "بعد الارسال",
      nextTitle: "ما الذي يحدث بعد ذلك",
      steps: [
        {
          title: "01. نقرأ الطلب",
          desc: "نراجع النقاط الاساسية لفهم الملف بسرعة.",
        },
        {
          title: "02. نعود للتواصل معك",
          desc: "يساعد التواصل عبر WhatsApp او الهاتف على توضيح الخطوة المناسبة.",
        },
        {
          title: "03. نوجهك",
          desc: "تصبح الصورة اوضح حول الصيغة المناسبة وكيفية التقدم بشكل صحيح.",
        },
      ],
      supportTitle: "هل تفضل ان تبدأ مباشرة؟",
      supportText:
        "اذا كان لديك سؤال محدد الان، افتح WhatsApp واشرح لنا مشروعك مباشرة.",
      supportButton: "WhatsApp: +212 638-335452",
    },
    form: {
      eyebrow: "طلبك",
      title: "ارسال الطلب",
      description:
        "املأ الاساسيات فقط. نستخدم هذه المعلومات لنجيبك بشكل اوضح واكثر فائدة واستراتيجية.",
      chips: ["سريع في الملء", "مناسب للهاتف", "للوالدين والطلبة"],
      success: "شكرا، تم ارسال طلبك بنجاح.",
      fallbackError: "خطأ",
      objectiveLabel: "الهدف *",
      objectivePlaceholder: "اختر...",
      objectives: [
        { value: "دراسة جامعية", label: "دراسة جامعية" },
        { value: "دورات لغة", label: "دورات لغة" },
        { value: "احتاج نصيحة اولا", label: "احتاج نصيحة اولا" },
        { value: "اخرى", label: "اخرى" },
      ],
      messageLabel: "الرسالة",
      messagePlaceholder:
        "اشرح باختصار مشروعك او اسئلتك حول التاشيرة او المنحة او التكلفة او نوع الجامعة",
      consent:
        "بارسال هذه الاستمارة فانك توافق على التواصل معك عبر WhatsApp او الهاتف من اجل الخطوة التالية.",
      submit: "ارسال الطلب",
      submitting: "جار الارسال...",
      fields: {
        fullName: "الاسم الكامل *",
        fullNamePlaceholder: "اسمك الكامل",
        phone: "الهاتف / WhatsApp *",
        phonePlaceholder: "+212...",
        email: "البريد الالكتروني",
        emailPlaceholder: "contact@example.com",
        city: "المدينة *",
        cityPlaceholder: "اكادير، الدار البيضاء...",
        studyLevel: "المستوى الدراسي *",
        studyLevelPlaceholder: "ثانوي، اجازة، ماستر...",
        fieldOfStudy: "المجال المطلوب",
        fieldOfStudyPlaceholder: "طب، هندسة، تجارة...",
      },
    },
  },
};

export default function ApplyPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
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

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || t.form.fallbackError);

      setDone(true);
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || t.form.fallbackError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#050505] text-white" dir={t.dir}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,3,4,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(177,127,2,0.14),transparent_20%),linear-gradient(135deg,#190506_0%,#28080a_38%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <Container>
          <div className="relative grid gap-8 py-12 lg:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
            <div
              className={`space-y-7 ${
                isArabic ? "text-right" : "text-center lg:text-left"
              }`}
            >
              <p className="section-eyebrow inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/90 sm:text-sm sm:tracking-[0.22em]">
                {t.hero.badge}
              </p>

              <div className="space-y-4">
                <h1
                  className={`display-title text-[2.7rem] font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${
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
                className={`grid gap-3 sm:grid-cols-3 ${
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
                    <p className="text-sm font-semibold text-white">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-white/65">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/20 shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
                <img
                  src="/fr-apply-hero.jpg"
                  alt="Apply with YALLA CHINA"
                  className="h-[20rem] w-full object-cover sm:h-[28rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div
                className={`relative mt-4 rounded-[1.8rem] border border-white/10 bg-black/70 p-5 shadow-xl backdrop-blur-md sm:absolute sm:bottom-4 sm:left-4 sm:right-4 sm:mt-0 ${
                  isArabic ? "text-right" : "text-center sm:text-left"
                }`}
              >
                <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                  {t.hero.panelEyebrow}
                </p>
                <h2 className="display-title mt-3 text-2xl font-black leading-tight text-white">
                  {t.hero.panelTitle}
                </h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
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
                <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                  {t.side.beforeText}
                </p>

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
                      <h4 className="text-sm font-bold text-zinc-900 sm:text-base">
                        <StepTitle title={step.title} isArabic={isArabic} />
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-zinc-600">
                        {step.desc}
                      </p>
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
                <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">
                  {t.side.supportText}
                </p>
                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#B17F02] px-5 py-3 font-semibold text-black transition hover:opacity-90 sm:w-auto"
                >
                  {t.side.supportButton}
                </a>
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
                <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                  {t.form.description}
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-3">
                  {t.form.chips.map((chip) => (
                    <div
                      key={chip}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-center text-sm font-medium"
                    >
                      {chip}
                    </div>
                  ))}
                </div>

                {done && (
                  <div className="mt-5 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-700">
                    {t.form.success}
                  </div>
                )}

                {error && (
                  <div className="mt-5 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <form onSubmit={onSubmit} className="mt-6 space-y-5">
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
                    <label className="text-sm font-medium">
                      {t.form.objectiveLabel}
                    </label>
                    <select
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
                    <label className="text-sm font-medium">
                      {t.form.messageLabel}
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder={t.form.messagePlaceholder}
                      className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#770304] sm:text-base ${
                        isArabic ? "text-right" : ""
                      }`}
                    />
                  </div>

                  <button
                    disabled={loading}
                    className="w-full rounded-full bg-[#770304] px-5 py-3 font-semibold text-white transition hover:bg-[#740000] disabled:opacity-60"
                  >
                    {loading ? t.form.submitting : t.form.submit}
                  </button>

                  <p className="text-xs leading-5 text-zinc-500">
                    {t.form.consent}
                  </p>
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
      <label className="text-sm font-medium">{label}</label>
      <input
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
