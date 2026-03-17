"use client";

import { useState } from "react";
import Container from "@/components/Container";
import FounderStories from "@/components/FounderStories";

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
    summaryEyebrow: string;
    summaryTitle: string;
    summaryText: string;
    summaryItems: string[];
    stepsEyebrow: string;
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
    contactTitle: string;
    profileTitle: string;
    projectTitle: string;
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
      whatsapp: string;
      whatsappPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      city: string;
      cityPlaceholder: string;
      address: string;
      addressPlaceholder: string;
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
      badge: "Candidature • YALLA CHINA",
      title: "Votre avenir d'étudiant en Chine peut commencer aujourd'hui.",
      description:
        "Dites-nous où vous en êtes, ce que vous visez, et ce que vous rêvez de construire. Nous revenons vers vous rapidement avec une direction claire, rassurante et réaliste.",
      stats: [
        { label: "Réponse rapide", value: "Sous 24-48h" },
        { label: "Suivi personnalisé", value: "WhatsApp ou téléphone" },
        { label: "Accompagnement complet", value: "Du profil au visa" },
      ],
      panelEyebrow: "Ce que vous ouvrez",
      panelTitle: "Une vraie porte d'entrée vers votre projet d'études.",
      panelItems: [
        "Un échange adapté à votre profil",
        "Une direction claire dès le premier contact",
        "Une candidature mieux préparée",
      ],
    },
    side: {
      summaryEyebrow: "Avant d'envoyer",
      summaryTitle: "Les informations qui nous aident à bien vous orienter.",
      summaryText:
        "En quelques minutes, vous nous donnez juste ce qu'il faut pour comprendre votre niveau, votre ville, votre objectif et le meilleur chemin pour avancer.",
      summaryItems: [
        "Vos coordonnées complètes",
        "Votre ville et votre niveau d'étude",
        "Votre objectif en Chine",
        "Un message si vous avez des questions",
      ],
      stepsEyebrow: "Ce qui se passe ensuite",
      steps: [
        {
          title: "01. Vous envoyez votre demande",
          desc: "Nous recevons votre profil avec les informations importantes.",
        },
        {
          title: "02. Nous revenons vers vous",
          desc: "Un échange rapide nous aide à comprendre votre projet en profondeur.",
        },
        {
          title: "03. Nous clarifions la suite",
          desc: "Orientation, dossier, admission et visa deviennent plus simples.",
        },
      ],
      supportTitle: "Vous voulez aller plus vite ?",
      supportText:
        "Si vous préférez commencer immédiatement, ouvrez WhatsApp et parlez-nous directement de votre projet.",
      supportButton: "WhatsApp : +212 638-335452",
    },
    form: {
      eyebrow: "Votre candidature",
      title: "Postuler maintenant",
      description:
        "Plus votre demande est précise, plus notre réponse peut être utile, claire et stratégique.",
      chips: ["Réponse humaine", "Étudiants & parents", "Projet structuré"],
      success: "Merci, votre demande a bien été envoyée.",
      fallbackError: "Erreur",
      contactTitle: "Contact",
      profileTitle: "Profil académique",
      projectTitle: "Projet",
      objectiveLabel: "Objectif *",
      objectivePlaceholder: "Choisir...",
      objectives: [
        { value: "Études", label: "Études" },
        { value: "Langue", label: "Langue" },
        { value: "Autre", label: "Autre" },
      ],
      messageLabel: "Message",
      messagePlaceholder: "Décrivez votre projet ou vos questions",
      consent:
        "En envoyant ce formulaire, vous acceptez d'être contacté par WhatsApp ou téléphone.",
      submit: "Envoyer ma demande",
      submitting: "Envoi...",
      fields: {
        fullName: "Nom complet *",
        fullNamePlaceholder: "Votre nom complet",
        phone: "Téléphone *",
        phonePlaceholder: "+212...",
        whatsapp: "WhatsApp",
        whatsappPlaceholder: "+212...",
        email: "Email",
        emailPlaceholder: "ex: nom@gmail.com",
        city: "Ville *",
        cityPlaceholder: "Agadir, Casablanca...",
        address: "Adresse",
        addressPlaceholder: "Optionnel",
        studyLevel: "Niveau d'étude *",
        studyLevelPlaceholder: "Bac, Licence...",
        fieldOfStudy: "Filière",
        fieldOfStudyPlaceholder: "Ex: Informatique",
      },
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Application • YALLA CHINA",
      title: "Your student future in China can start here today.",
      description:
        "Tell us where you are now, what you want to study, and what kind of future you want to build. We come back with a clear, realistic, and reassuring direction.",
      stats: [
        { label: "Fast response", value: "Within 24-48h" },
        { label: "Personal follow-up", value: "WhatsApp or phone" },
        { label: "Full support", value: "From profile to visa" },
      ],
      panelEyebrow: "What opens here",
      panelTitle: "A real gateway into your study project.",
      panelItems: [
        "Guidance matched to your profile",
        "Clear direction from the first conversation",
        "A better prepared application",
      ],
    },
    side: {
      summaryEyebrow: "Before you send",
      summaryTitle: "The details that help us guide you well.",
      summaryText:
        "In just a few minutes, you give us the essentials we need to understand your level, city, objective, and the best path to move forward.",
      summaryItems: [
        "Your contact details",
        "Your city and study level",
        "Your goal in China",
        "A message if you have questions",
      ],
      stepsEyebrow: "What happens next",
      steps: [
        {
          title: "01. You send your request",
          desc: "We receive your profile with the important details we need.",
        },
        {
          title: "02. We contact you back",
          desc: "A quick exchange helps us understand the project more deeply.",
        },
        {
          title: "03. We clarify the route",
          desc: "Orientation, file preparation, admission, and visa become easier.",
        },
      ],
      supportTitle: "Want to move faster?",
      supportText:
        "If you would rather start immediately, open WhatsApp and tell us about your project directly.",
      supportButton: "WhatsApp: +212 638-335452",
    },
    form: {
      eyebrow: "Your application",
      title: "Apply now",
      description:
        "The more precise your request is, the more useful, clear, and strategic our answer can be.",
      chips: ["Human reply", "Students & parents", "Structured project"],
      success: "Thank you, your request has been sent.",
      fallbackError: "Error",
      contactTitle: "Contact",
      profileTitle: "Academic profile",
      projectTitle: "Project",
      objectiveLabel: "Objective *",
      objectivePlaceholder: "Select...",
      objectives: [
        { value: "Studies", label: "Studies" },
        { value: "Language", label: "Language" },
        { value: "Other", label: "Other" },
      ],
      messageLabel: "Message",
      messagePlaceholder: "Describe your project or your questions",
      consent:
        "By sending this form, you agree to be contacted by WhatsApp or phone.",
      submit: "Send my request",
      submitting: "Sending...",
      fields: {
        fullName: "Full name *",
        fullNamePlaceholder: "Your full name",
        phone: "Phone *",
        phonePlaceholder: "+212...",
        whatsapp: "WhatsApp",
        whatsappPlaceholder: "+212...",
        email: "Email",
        emailPlaceholder: "example@gmail.com",
        city: "City *",
        cityPlaceholder: "Agadir, Casablanca...",
        address: "Address",
        addressPlaceholder: "Optional",
        studyLevel: "Study level *",
        studyLevelPlaceholder: "High school, Bachelor...",
        fieldOfStudy: "Field of study",
        fieldOfStudyPlaceholder: "Example: Computer Science",
      },
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "التقديم • YALLA CHINA",
      title: "مستقبلك الدراسي في الصين يمكن أن يبدأ من هنا اليوم.",
      description:
        "أخبرنا أين وصلت الآن، وماذا تريد أن تدرس، وما نوع المستقبل الذي تريد بناءه. سنعود إليك باتجاه واضح وواقعي ومطمئن.",
      stats: [
        { label: "رد سريع", value: "خلال 24-48 ساعة" },
        { label: "متابعة شخصية", value: "واتساب أو هاتف" },
        { label: "مرافقة كاملة", value: "من الملف إلى التأشيرة" },
      ],
      panelEyebrow: "ما الذي يفتح من هنا",
      panelTitle: "بوابة حقيقية نحو مشروعك الدراسي.",
      panelItems: [
        "توجيه مناسب لملفك",
        "اتجاه واضح من أول حديث",
        "طلب أكثر جاهزية وقوة",
      ],
    },
    side: {
      summaryEyebrow: "قبل الإرسال",
      summaryTitle: "المعطيات التي تساعدنا على توجيهك بالشكل الصحيح.",
      summaryText:
        "في بضع دقائق فقط تعطينا المعلومات الأساسية التي تمكّننا من فهم مستواك ومدينتك وهدفك وأفضل طريق مناسب لك.",
      summaryItems: [
        "معلومات الاتصال الخاصة بك",
        "مدينتك ومستواك الدراسي",
        "هدفك في الصين",
        "رسالة إذا كانت لديك أسئلة",
      ],
      stepsEyebrow: "ما الذي يحدث بعد ذلك",
      steps: [
        {
          title: "01. ترسل طلبك",
          desc: "نستقبل ملفك مع المعلومات الأساسية المهمة.",
        },
        {
          title: "02. نعود للتواصل معك",
          desc: "محادثة قصيرة تساعدنا على فهم المشروع بشكل أعمق.",
        },
        {
          title: "03. نوضح الطريق",
          desc: "يصبح التوجيه والملف والقبول والتأشيرة أسهل وأوضح.",
        },
      ],
      supportTitle: "هل تريد التحرك أسرع؟",
      supportText:
        "إذا كنت تفضل البداية مباشرة، افتح واتساب وحدثنا الآن عن مشروعك.",
      supportButton: "واتساب: +212 638-335452",
    },
    form: {
      eyebrow: "طلبك",
      title: "قدّم الآن",
      description:
        "كلما كان طلبك أدق، كان ردنا عليك أوضح وأكثر فائدة واستراتيجية.",
      chips: ["رد إنساني", "للطلبة والآباء", "مشروع منظم"],
      success: "شكرًا لك، تم إرسال طلبك بنجاح.",
      fallbackError: "خطأ",
      contactTitle: "التواصل",
      profileTitle: "الملف الأكاديمي",
      projectTitle: "المشروع",
      objectiveLabel: "الهدف *",
      objectivePlaceholder: "اختر...",
      objectives: [
        { value: "الدراسة", label: "الدراسة" },
        { value: "اللغة", label: "اللغة" },
        { value: "أخرى", label: "أخرى" },
      ],
      messageLabel: "الرسالة",
      messagePlaceholder: "اكتب مشروعك أو أسئلتك",
      consent:
        "بإرسال هذه الاستمارة فإنك توافق على أن يتم التواصل معك عبر واتساب أو الهاتف.",
      submit: "إرسال الطلب",
      submitting: "جارٍ الإرسال...",
      fields: {
        fullName: "الاسم الكامل *",
        fullNamePlaceholder: "اسمك الكامل",
        phone: "الهاتف *",
        phonePlaceholder: "+212...",
        whatsapp: "واتساب",
        whatsappPlaceholder: "+212...",
        email: "البريد الإلكتروني",
        emailPlaceholder: "example@gmail.com",
        city: "المدينة *",
        cityPlaceholder: "أكادير، الدار البيضاء...",
        address: "العنوان",
        addressPlaceholder: "اختياري",
        studyLevel: "المستوى الدراسي *",
        studyLevelPlaceholder: "ثانوي، إجازة...",
        fieldOfStudy: "التخصص",
        fieldOfStudyPlaceholder: "مثال: الإعلاميات",
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
    <main className="bg-[#050505] text-white">
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(237,184,11,0.14),transparent_20%),linear-gradient(135deg,#190506_0%,#28080a_38%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <Container>
          <div className="relative grid gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
            <div className={`space-y-7 ${isArabic ? "text-right" : ""}`}>
              <p className="section-eyebrow inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-sm">
                {t.hero.badge}
              </p>

              <div className="space-y-4">
                <h1 className="display-title max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  {t.hero.title}
                </h1>

                <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  {t.hero.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
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
                  className="h-[22rem] w-full object-cover sm:h-[28rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div
                className={`absolute bottom-4 left-4 right-4 rounded-[1.8rem] border border-white/10 bg-black/70 p-5 shadow-xl backdrop-blur-md ${
                  isArabic ? "text-right" : ""
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

      <FounderStories lang={lang} variant="compact" />

      <section className="bg-[#f4ede4] py-12 text-zinc-900 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="space-y-5">
              <div
                className={`rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
                  {t.side.summaryEyebrow}
                </p>
                <h2 className="display-title mt-3 text-2xl font-black tracking-tight">
                  {t.side.summaryTitle}
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-600 sm:text-base">
                  {t.side.summaryText}
                </p>

                <ul className="mt-5 space-y-3 text-sm text-zinc-700">
                  {t.side.summaryItems.map((item) => (
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
                  {t.side.stepsEyebrow}
                </p>

                <div className="mt-5 space-y-4">
                  {t.side.steps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-[1.6rem] border border-zinc-200 bg-white p-4"
                    >
                      <h3 className="text-sm font-bold text-zinc-900 sm:text-base">
                        {step.title}
                      </h3>
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
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#EDB80B] px-5 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  {isArabic ? (
                    <>
                      <span>واتساب</span>
                      <span className="contact-inline">+212 638-335452</span>
                    </>
                  ) : (
                    t.side.supportButton
                  )}
                </a>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
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

                <form onSubmit={onSubmit} className="mt-6 space-y-6">
                  <div className="space-y-4">
                    <SectionTitle title={t.form.contactTitle} rtl={isArabic} />
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
                        label={t.form.fields.whatsapp}
                        name="whatsapp"
                        placeholder={t.form.fields.whatsappPlaceholder}
                        rtl={isArabic}
                        latin
                      />
                      <Field
                        label={t.form.fields.email}
                        name="email"
                        placeholder={t.form.fields.emailPlaceholder}
                        type="email"
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
                        label={t.form.fields.address}
                        name="address"
                        placeholder={t.form.fields.addressPlaceholder}
                        rtl={isArabic}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title={t.form.profileTitle} rtl={isArabic} />
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
                  </div>

                  <div className="space-y-4">
                    <SectionTitle title={t.form.projectTitle} rtl={isArabic} />
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

function SectionTitle({ title, rtl = false }: { title: string; rtl?: boolean }) {
  return (
    <div className="border-b border-zinc-200 pb-3">
      <p
        className={`section-eyebrow text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 ${
          rtl ? "text-right" : ""
        }`}
      >
        {title}
      </p>
    </div>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
  rtl = false,
  latin = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
  rtl?: boolean;
  latin?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        dir={latin && rtl ? "ltr" : undefined}
        inputMode={latin ? (type === "email" ? "email" : "tel") : undefined}
        className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base ${
          latin && rtl ? "force-ltr" : rtl ? "text-right" : ""
        }`}
      />
    </div>
  );
}
