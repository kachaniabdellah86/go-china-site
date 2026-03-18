"use client";

import { useState } from "react";
import Container from "@/components/Container";

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
      city: string;
      cityPlaceholder: string;
      studyLevel: string;
      studyLevelPlaceholder: string;
    };
  };
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    hero: {
      badge: "Candidature • YALLA CHINA",
      title: "Commencez votre candidature simplement et avancez avec plus de clarté.",
      description:
        "Donnez l'essentiel pour recevoir une réponse claire sur la suite: votre niveau, votre objectif et la meilleure direction pour avancer.",
      stats: [
        { label: "Formulaire rapide", value: "Les champs vraiment utiles" },
        { label: "Réponse claire", value: "Sous 24-48h" },
        { label: "Alternative directe", value: "WhatsApp toujours visible" },
      ],
      panelEyebrow: "Ce que vous lancez ici",
      panelTitle: "Une première étape sérieuse, sans friction inutile.",
      panelItems: [
        "Votre niveau et votre objectif",
        "La ville depuis laquelle vous partez",
        "Un premier message pour cadrer la suite",
      ],
    },
    side: {
      beforeEyebrow: "Avant d'envoyer",
      beforeTitle: "Ce que nous avons besoin de comprendre tout de suite.",
      beforeText:
        "Le but n'est pas de vous faire remplir un long dossier ici. Nous avons surtout besoin des informations qui nous aident à vous orienter rapidement.",
      beforeItems: [
        "Votre nom et votre téléphone",
        "Votre ville",
        "Votre niveau d'étude",
        "Votre objectif en Chine",
      ],
      nextEyebrow: "Après l'envoi",
      nextTitle: "Ce qui se passe ensuite",
      steps: [
        {
          title: "01. Nous lisons votre demande",
          desc: "Nous regardons les informations essentielles pour comprendre votre projet rapidement.",
        },
        {
          title: "02. Nous revenons vers vous",
          desc: "Un échange sur WhatsApp ou par téléphone aide à clarifier les choix les plus importants.",
        },
        {
          title: "03. Nous vous indiquons la suite",
          desc: "Vous savez plus clairement quelle voie suivre, quoi préparer, et comment avancer correctement.",
        },
      ],
      supportTitle: "Vous préférez commencer directement ?",
      supportText:
        "Si vous avez déjà une question précise, ouvrez WhatsApp et parlez-nous directement de votre projet.",
      supportButton: "WhatsApp : +212 638-335452",
    },
    form: {
      eyebrow: "Votre candidature",
      title: "Envoyer ma demande",
      description:
        "Remplissez l'essentiel. Nous utiliserons ces informations pour vous répondre de manière plus utile, plus claire et plus stratégique.",
      chips: ["Rapide à remplir", "Mobile friendly", "Étudiants & parents"],
      success: "Merci, votre demande a bien été envoyée.",
      fallbackError: "Erreur",
      objectiveLabel: "Objectif *",
      objectivePlaceholder: "Choisir...",
      objectives: [
        { value: "Études", label: "Études" },
        { value: "Langue", label: "Langue" },
        { value: "Autre", label: "Autre" },
      ],
      messageLabel: "Message",
      messagePlaceholder: "Décrivez brièvement votre projet ou vos questions",
      consent:
        "En envoyant ce formulaire, vous acceptez d'être contacté par WhatsApp ou téléphone.",
      submit: "Envoyer ma demande",
      submitting: "Envoi...",
      fields: {
        fullName: "Nom complet *",
        fullNamePlaceholder: "Votre nom complet",
        phone: "Téléphone / WhatsApp *",
        phonePlaceholder: "+212...",
        city: "Ville *",
        cityPlaceholder: "Agadir, Casablanca...",
        studyLevel: "Niveau d'étude *",
        studyLevelPlaceholder: "Bac, Licence...",
      },
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Application • YALLA CHINA",
      title: "Start your application simply and move forward with more clarity.",
      description:
        "Share the essentials so you can get a clearer answer about what comes next: your level, your goal, and the best direction to move forward.",
      stats: [
        { label: "Fast form", value: "Only the fields that matter first" },
        { label: "Clear answer", value: "Within 24-48h" },
        { label: "Direct alternative", value: "WhatsApp always visible" },
      ],
      panelEyebrow: "What you begin here",
      panelTitle: "A serious first step, without unnecessary friction.",
      panelItems: [
        "Your level and your objective",
        "The city you are applying from",
        "A first message to frame the next move",
      ],
    },
    side: {
      beforeEyebrow: "Before you send",
      beforeTitle: "What we need to understand immediately.",
      beforeText:
        "The goal is not to make you fill in a long file here. We mainly need the details that help us guide you quickly.",
      beforeItems: [
        "Your name and phone",
        "Your city",
        "Your study level",
        "Your goal in China",
      ],
      nextEyebrow: "After you submit",
      nextTitle: "What happens next",
      steps: [
        {
          title: "01. We read your request",
          desc: "We review the essential details to understand your project quickly.",
        },
        {
          title: "02. We contact you back",
          desc: "A WhatsApp or phone exchange helps clarify the most important choices.",
        },
        {
          title: "03. We show the next route",
          desc: "You know more clearly which path to follow, what to prepare, and how to move forward correctly.",
        },
      ],
      supportTitle: "Would you rather start directly?",
      supportText:
        "If you already have a specific question, open WhatsApp and tell us about your project directly.",
      supportButton: "WhatsApp: +212 638-335452",
    },
    form: {
      eyebrow: "Your application",
      title: "Send my request",
      description:
        "Fill in the essentials. We use this information to answer in a clearer, more useful, and more strategic way.",
      chips: ["Quick to complete", "Mobile friendly", "Students & parents"],
      success: "Thank you, your request has been sent.",
      fallbackError: "Error",
      objectiveLabel: "Objective *",
      objectivePlaceholder: "Select...",
      objectives: [
        { value: "Studies", label: "Studies" },
        { value: "Language", label: "Language" },
        { value: "Other", label: "Other" },
      ],
      messageLabel: "Message",
      messagePlaceholder: "Briefly describe your project or your questions",
      consent:
        "By sending this form, you agree to be contacted by WhatsApp or phone.",
      submit: "Send my request",
      submitting: "Sending...",
      fields: {
        fullName: "Full name *",
        fullNamePlaceholder: "Your full name",
        phone: "Phone / WhatsApp *",
        phonePlaceholder: "+212...",
        city: "City *",
        cityPlaceholder: "Agadir, Casablanca...",
        studyLevel: "Study level *",
        studyLevelPlaceholder: "High school, Bachelor...",
      },
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "التقديم • YALLA CHINA",
      title: "ابدأ طلبك ببساطة وتقدم بخطوات أوضح.",
      description:
        "أعطنا المعلومات الأساسية فقط حتى نعود إليك بجواب أوضح حول الخطوة التالية: مستواك، هدفك، وأفضل طريق للتقدم.",
      stats: [
        { label: "استمارة سريعة", value: "الحقول المهمة فقط في البداية" },
        { label: "جواب واضح", value: "خلال 24 إلى 48 ساعة" },
        { label: "بديل مباشر", value: "واتساب ظاهر دائمًا" },
      ],
      panelEyebrow: "ما الذي تبدأه هنا",
      panelTitle: "أول خطوة جادة من دون تعقيد غير ضروري.",
      panelItems: [
        "مستواك الدراسي وهدفك",
        "المدينة التي تنطلق منها",
        "رسالة أولى تساعد على توضيح الطريق",
      ],
    },
    side: {
      beforeEyebrow: "قبل الإرسال",
      beforeTitle: "ما الذي نحتاج إلى فهمه مباشرة.",
      beforeText:
        "الهدف ليس أن نطلب منك ملفًا طويلًا هنا. نحن نحتاج فقط إلى المعلومات التي تساعدنا على توجيهك بسرعة.",
      beforeItems: [
        "اسمك ورقم هاتفك",
        "مدينتك",
        "مستواك الدراسي",
        "هدفك في الصين",
      ],
      nextEyebrow: "بعد الإرسال",
      nextTitle: "ماذا يحدث بعد ذلك",
      steps: [
        {
          title: "01. نقرأ طلبك",
          desc: "نراجع المعطيات الأساسية حتى نفهم مشروعك بسرعة.",
        },
        {
          title: "02. نعود للتواصل معك",
          desc: "محادثة على واتساب أو الهاتف تساعد على توضيح أهم الخيارات.",
        },
        {
          title: "03. نوضح لك الطريق التالي",
          desc: "تصبح الصورة أوضح حول المسار المناسب وما الذي يجب تحضيره وكيف تبدأ بشكل صحيح.",
        },
      ],
      supportTitle: "هل تفضل أن تبدأ مباشرة؟",
      supportText:
        "إذا كان لديك سؤال محدد من الآن، افتح واتساب وحدثنا مباشرة عن مشروعك.",
      supportButton: "واتساب: +212 638-335452",
    },
    form: {
      eyebrow: "طلبك",
      title: "إرسال الطلب",
      description:
        "املأ المعلومات الأساسية فقط. سنستخدمها لنرد عليك بشكل أوضح وأكثر فائدة وواقعية.",
      chips: ["سريع في الملء", "مناسب للهاتف", "للطلبة والعائلات"],
      success: "شكرًا لك، تم إرسال طلبك بنجاح.",
      fallbackError: "خطأ",
      objectiveLabel: "الهدف *",
      objectivePlaceholder: "اختر...",
      objectives: [
        { value: "الدراسة", label: "الدراسة" },
        { value: "اللغة", label: "اللغة" },
        { value: "أخرى", label: "أخرى" },
      ],
      messageLabel: "الرسالة",
      messagePlaceholder: "اكتب باختصار مشروعك أو أسئلتك",
      consent:
        "بإرسال هذه الاستمارة فإنك توافق على أن يتم التواصل معك عبر واتساب أو الهاتف.",
      submit: "إرسال الطلب",
      submitting: "جارٍ الإرسال...",
      fields: {
        fullName: "الاسم الكامل *",
        fullNamePlaceholder: "اسمك الكامل",
        phone: "الهاتف / واتساب *",
        phonePlaceholder: "+212...",
        city: "المدينة *",
        cityPlaceholder: "أكادير، الدار البيضاء...",
        studyLevel: "المستوى الدراسي *",
        studyLevelPlaceholder: "ثانوي، إجازة...",
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(237,184,11,0.14),transparent_20%),linear-gradient(135deg,#190506_0%,#28080a_38%,#070707_100%)]" />
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
                <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
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
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
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
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
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
                        {step.title}
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
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                  {t.side.supportTitle}
                </p>
                <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">
                  {t.side.supportText}
                </p>
                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#EDB80B] px-5 py-3 font-semibold text-black transition hover:opacity-90 sm:w-auto"
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
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
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
                      label={t.form.fields.city}
                      name="city"
                      placeholder={t.form.fields.cityPlaceholder}
                      required
                      rtl={isArabic}
                    />
                    <Field
                      label={t.form.fields.studyLevel}
                      name="studyLevel"
                      placeholder={t.form.fields.studyLevelPlaceholder}
                      required
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
                      className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base ${
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
                      className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base ${
                        isArabic ? "text-right" : ""
                      }`}
                    />
                  </div>

                  <button
                    disabled={loading}
                    className="w-full rounded-full bg-[#8B0000] px-5 py-3 font-semibold text-white transition hover:bg-[#740000] disabled:opacity-60"
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
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rtl?: boolean;
  latin?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        dir={latin && rtl ? "ltr" : undefined}
        inputMode={latin ? "tel" : undefined}
        className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base ${
          latin && rtl ? "force-ltr" : rtl ? "text-right" : ""
        }`}
      />
    </div>
  );
}
