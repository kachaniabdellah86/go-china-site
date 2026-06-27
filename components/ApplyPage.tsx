"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import {
  buildWhatsappUrl,
  contactEmail,
  instagramHandle,
  instagramUrl,
  Locale,
  primaryWhatsappNumberDisplay,
  secondaryWhatsappNumberDisplay,
  secondaryWhatsappNumberRaw,
} from "@/lib/yalla";

type Copy = {
  dir: "ltr" | "rtl";
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    panelEyebrow: string;
    panelTitle: string;
    panelItems: string[];
  };
  side: {
    beforeEyebrow: string;
    beforeTitle: string;
    beforeText: string;
    beforeItems: string[];
    supportEyebrow: string;
    supportTitle: string;
    supportText: string;
    supportButton: string;
    contactTitle: string;
    nextEyebrow: string;
    nextTitle: string;
    steps: { title: string; desc: string }[];
  };
  form: {
    eyebrow: string;
    title: string;
    description: string;
    chips: string[];
    success: string;
    successTitle: string;
    successText: string;
    successWhatsapp: string;
    fallbackError: string;
    unavailableError: string;
    rateLimitError: string;
    objectiveLabel: string;
    objectivePlaceholder: string;
    objectives: { value: string; label: string }[];
    packageInterestLabel: string;
    packageInterestPlaceholder: string;
    packageInterests: { value: string; label: string }[];
    requesterRoleLabel: string;
    requesterRolePlaceholder: string;
    requesterRoles: { value: string; label: string }[];
    contactTimeLabel: string;
    contactTimePlaceholder: string;
    contactTimes: { value: string; label: string }[];
    documentReadinessLabel: string;
    documentReadinessPlaceholder: string;
    documentReadinessOptions: { value: string; label: string }[];
    detailsTitle: string;
    details: {
      packageInterest: string;
      requesterRole: string;
      contactTime: string;
      documentReadiness: string;
      message: string;
    };
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
      title: "Envoyez votre demande. Nous vous orientons sérieusement.",
      description:
        "Quelques informations suffisent pour comprendre votre profil, votre objectif et le niveau d’accompagnement adapté.",
      primaryCta: "Envoyer ma demande",
      secondaryCta: "Parler sur WhatsApp",
      panelEyebrow: "Ce que vous lancez ici",
      panelTitle: "Une demande claire avant toute décision engageante.",
      panelItems: [
        "Niveau d’étude",
        "Ville et domaine visé",
        "Objectif principal",
      ],
    },
    side: {
      beforeEyebrow: "Avant d’envoyer",
      beforeTitle: "Nous avons besoin de peu d’informations, mais des bonnes.",
      beforeText:
        "Pas besoin de préparer tout votre dossier maintenant. L’objectif est de comprendre le projet avant de vous orienter.",
      beforeItems: [
        "Nom complet et téléphone principal",
        "Ville actuelle et niveau d’étude",
        "Domaine ou spécialité recherchée",
        "Objectif : bourse, université, visa ou conseil",
      ],
      supportEyebrow: "Contact direct",
      supportTitle: "Vous préférez commencer directement ?",
      supportText:
        "Si votre question est urgente ou précise, ouvrez WhatsApp et expliquez votre situation.",
      supportButton: `WhatsApp : ${primaryWhatsappNumberDisplay}`,
      contactTitle: "Coordonnées",
      nextEyebrow: "Après l’envoi",
      nextTitle: "Ce qui se passe ensuite",
      steps: [
        {
          title: "01. Lecture du profil",
          desc: "Nous regardons votre niveau, votre ville, votre objectif et vos priorités.",
        },
        {
          title: "02. Retour personnalisé",
          desc: "Nous vous répondons avec les points à clarifier et la meilleure suite.",
        },
        {
          title: "03. Orientation",
          desc: "Nous vous guidons vers le bon niveau d’accompagnement.",
        },
      ],
    },
    form: {
      eyebrow: "Votre demande",
      title: "Envoyer ma candidature",
      description:
        "Remplissez l’essentiel. Nous utilisons ces informations pour vous répondre rapidement et utilement.",
      chips: ["Rapide", "Mobile", "Parents & étudiants"],
      success: "Merci, votre demande a bien été envoyée.",
      successTitle: "Demande reçue",
      successText:
        "Nous allons lire votre profil et revenir vers vous avec les points à clarifier. Vous pouvez aussi ouvrir WhatsApp si vous voulez ajouter un détail important.",
      successWhatsapp: "Ajouter un détail sur WhatsApp",
      fallbackError:
        "Une erreur est survenue. Merci de réessayer ou de nous écrire sur WhatsApp.",
      unavailableError:
        "Le formulaire est momentanément indisponible. Merci de nous écrire directement sur WhatsApp.",
      rateLimitError:
        "Trop de demandes ont été envoyées depuis votre connexion. Merci de patienter quelques minutes ou de nous écrire sur WhatsApp.",
      objectiveLabel: "Objectif *",
      objectivePlaceholder: "Choisir...",
      objectives: [
        { value: "Scholarship", label: "Chercher une bourse" },
        { value: "University", label: "Trouver une bonne université" },
        { value: "Visa", label: "Comprendre le visa" },
        { value: "Advice", label: "Recevoir un conseil d’abord" },
      ],
      packageInterestLabel: "Formule envisagée *",
      packageInterestPlaceholder: "Choisir...",
      packageInterests: [
        { value: "Standard", label: "Pack Standard" },
        { value: "Premium", label: "Pack Premium" },
        { value: "Not sure", label: "Je ne suis pas encore sûr" },
      ],
      requesterRoleLabel: "Vous êtes *",
      requesterRolePlaceholder: "Choisir...",
      requesterRoles: [
        { value: "Student", label: "L’étudiant" },
        { value: "Parent", label: "Un parent" },
        { value: "Other", label: "Je fais la demande pour quelqu’un" },
      ],
      contactTimeLabel: "Moment de contact préféré",
      contactTimePlaceholder: "Choisir...",
      contactTimes: [
        { value: "Morning", label: "Matin" },
        { value: "Afternoon", label: "Après-midi" },
        { value: "Evening", label: "Soir" },
        { value: "Anytime WhatsApp", label: "WhatsApp à tout moment" },
      ],
      documentReadinessLabel: "Documents disponibles",
      documentReadinessPlaceholder: "Choisir...",
      documentReadinessOptions: [
        { value: "Passport ready", label: "Passeport disponible" },
        { value: "Diploma ready", label: "Diplôme / relevés disponibles" },
        { value: "Not ready", label: "Pas encore prêts" },
      ],
      detailsTitle: "Détails de qualification",
      details: {
        packageInterest: "Formule envisagée",
        requesterRole: "Profil du demandeur",
        contactTime: "Moment de contact préféré",
        documentReadiness: "Documents disponibles",
        message: "Message",
      },
      messageLabel: "Message",
      messagePlaceholder:
        "Expliquez brièvement votre projet, vos questions sur la bourse, l’université, le visa, le coût ou l’arrivée.",
      consent:
        "En envoyant ce formulaire, vous acceptez d’être recontacté par WhatsApp ou téléphone pour la suite du projet.",
      privacyPrefix: "J’ai lu la",
      privacyLink: "politique de confidentialité",
      reassurance:
        "Aucun paiement n’est demandé à cette étape. Le but est d’évaluer votre profil et de recommander la bonne suite.",
      whatsappAlternative: "WhatsApp direct",
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
        studyLevel: "Niveau d’étude *",
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
      title: "Send your request. We guide you seriously.",
      description:
        "A few clear details are enough to understand your profile, your goal, and the right level of support.",
      primaryCta: "Send my request",
      secondaryCta: "Talk on WhatsApp",
      panelEyebrow: "What starts here",
      panelTitle: "A clear request before any heavy commitment.",
      panelItems: ["Study level", "City and target field", "Main objective"],
    },
    side: {
      beforeEyebrow: "Before you submit",
      beforeTitle: "We need only a few details, but the right ones.",
      beforeText:
        "You do not need to prepare the whole file now. The goal is to understand the project before guiding you.",
      beforeItems: [
        "Full name and main phone number",
        "Current city and study level",
        "Target field or specialization",
        "Objective: scholarship, university, visa, or advice",
      ],
      supportEyebrow: "Direct contact",
      supportTitle: "Would you rather begin directly?",
      supportText:
        "If your question is urgent or precise, open WhatsApp and explain your situation.",
      supportButton: `WhatsApp: ${primaryWhatsappNumberDisplay}`,
      contactTitle: "Contact details",
      nextEyebrow: "After submission",
      nextTitle: "What happens next",
      steps: [
        {
          title: "01. Profile review",
          desc: "We look at your level, city, objective, and priorities.",
        },
        {
          title: "02. Personal reply",
          desc: "We answer with the points to clarify and the best next step.",
        },
        {
          title: "03. Guidance",
          desc: "We guide you toward the right level of support.",
        },
      ],
    },
    form: {
      eyebrow: "Your request",
      title: "Send my application",
      description:
        "Fill in the essentials. We use this information to reply quickly and usefully.",
      chips: ["Fast", "Mobile", "Parents & students"],
      success: "Thank you, your request has been sent.",
      successTitle: "Request received",
      successText:
        "We will review your profile and come back with the points to clarify. You can also open WhatsApp if you want to add an important detail.",
      successWhatsapp: "Add a detail on WhatsApp",
      fallbackError:
        "Something went wrong. Please try again or contact us on WhatsApp.",
      unavailableError:
        "The form is temporarily unavailable. Please contact us directly on WhatsApp.",
      rateLimitError:
        "Too many requests were sent from your connection. Please wait a few minutes or contact us on WhatsApp.",
      objectiveLabel: "Objective *",
      objectivePlaceholder: "Select...",
      objectives: [
        { value: "Scholarship", label: "Look for a scholarship" },
        { value: "University", label: "Find a strong university" },
        { value: "Visa", label: "Understand the visa process" },
        { value: "Advice", label: "Get advice first" },
      ],
      packageInterestLabel: "Package interest *",
      packageInterestPlaceholder: "Select...",
      packageInterests: [
        { value: "Standard", label: "Standard Pack" },
        { value: "Premium", label: "Premium Pack" },
        { value: "Not sure", label: "Not sure yet" },
      ],
      requesterRoleLabel: "You are *",
      requesterRolePlaceholder: "Select...",
      requesterRoles: [
        { value: "Student", label: "The student" },
        { value: "Parent", label: "A parent" },
        { value: "Other", label: "Applying for someone else" },
      ],
      contactTimeLabel: "Preferred contact time",
      contactTimePlaceholder: "Select...",
      contactTimes: [
        { value: "Morning", label: "Morning" },
        { value: "Afternoon", label: "Afternoon" },
        { value: "Evening", label: "Evening" },
        { value: "Anytime WhatsApp", label: "WhatsApp anytime" },
      ],
      documentReadinessLabel: "Document readiness",
      documentReadinessPlaceholder: "Select...",
      documentReadinessOptions: [
        { value: "Passport ready", label: "Passport ready" },
        { value: "Diploma ready", label: "Diploma / transcripts ready" },
        { value: "Not ready", label: "Not ready yet" },
      ],
      detailsTitle: "Qualification details",
      details: {
        packageInterest: "Package interest",
        requesterRole: "Requester role",
        contactTime: "Preferred contact time",
        documentReadiness: "Document readiness",
        message: "Message",
      },
      messageLabel: "Message",
      messagePlaceholder:
        "Briefly explain your project or your questions about scholarship, university, visa, cost, or arrival.",
      consent:
        "By sending this form, you agree to be contacted by WhatsApp or phone for the next step of the project.",
      privacyPrefix: "I have read the",
      privacyLink: "privacy policy",
      reassurance:
        "No payment is requested at this stage. The goal is to assess your profile and recommend the right next step.",
      whatsappAlternative: "Direct WhatsApp",
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
      title: "أرسل طلبك. نوجّهك بجدية.",
      description:
        "معلومات قليلة وواضحة تكفي لفهم ملفك وهدفك ومستوى المرافقة المناسب.",
      primaryCta: "إرسال الطلب",
      secondaryCta: "التواصل على واتساب",
      panelEyebrow: "ما الذي يبدأ هنا",
      panelTitle: "طلب واضح قبل أي التزام كبير.",
      panelItems: ["المستوى الدراسي", "المدينة والمجال", "الهدف الأساسي"],
    },
    side: {
      beforeEyebrow: "قبل الإرسال",
      beforeTitle: "نحتاج معلومات قليلة، لكن يجب أن تكون صحيحة.",
      beforeText:
        "لا حاجة إلى تجهيز الملف كله الآن. الهدف هو فهم المشروع قبل توجيهك.",
      beforeItems: [
        "الاسم الكامل ورقم الهاتف الرئيسي",
        "المدينة الحالية والمستوى الدراسي",
        "المجال أو التخصص المطلوب",
        "الهدف: منحة أو جامعة أو تأشيرة أو استشارة",
      ],
      supportEyebrow: "تواصل مباشر",
      supportTitle: "هل تفضّل البدء مباشرة؟",
      supportText:
        "إذا كان سؤالك عاجلاً أو محدداً، افتح واتساب واشرح وضعك.",
      supportButton: `WhatsApp: ${primaryWhatsappNumberDisplay}`,
      contactTitle: "معلومات التواصل",
      nextEyebrow: "بعد الإرسال",
      nextTitle: "ماذا يحدث بعد ذلك",
      steps: [
        {
          title: "01. قراءة الملف",
          desc: "نراجع مستواك ومدينتك وهدفك وأولوياتك.",
        },
        {
          title: "02. رد شخصي",
          desc: "نجيبك بالنقاط التي تحتاج إلى توضيح والخطوة المناسبة.",
        },
        {
          title: "03. توجيه",
          desc: "نرشدك نحو مستوى المرافقة المناسب.",
        },
      ],
    },
    form: {
      eyebrow: "طلبك",
      title: "إرسال الطلب",
      description:
        "املأ الأساسيات فقط. نستخدم هذه المعلومات حتى نجيبك بسرعة وبشكل مفيد.",
      chips: ["سريع", "مناسب للهاتف", "للوالدين والطلبة"],
      success: "شكراً، تم إرسال طلبك بنجاح.",
      successTitle: "تم استلام الطلب",
      successText:
        "سنراجع ملفك ونعود إليك بالنقاط التي تحتاج إلى توضيح. يمكنك أيضاً فتح واتساب إذا أردت إضافة تفصيل مهم.",
      successWhatsapp: "إضافة تفصيل عبر واتساب",
      fallbackError: "حدث خطأ ما. حاول مرة أخرى أو راسلنا على واتساب.",
      unavailableError: "الاستمارة غير متاحة مؤقتاً. راسلنا مباشرة على واتساب.",
      rateLimitError:
        "تم إرسال عدد كبير من الطلبات من اتصالك. انتظر بضع دقائق أو راسلنا على واتساب.",
      objectiveLabel: "الهدف *",
      objectivePlaceholder: "اختر...",
      objectives: [
        { value: "Scholarship", label: "البحث عن منحة" },
        { value: "University", label: "إيجاد جامعة جيدة" },
        { value: "Visa", label: "فهم التأشيرة" },
        { value: "Advice", label: "أحتاج نصيحة أولاً" },
      ],
      packageInterestLabel: "الباقة المناسبة *",
      packageInterestPlaceholder: "اختر...",
      packageInterests: [
        { value: "Standard", label: "الباقة العادية" },
        { value: "Premium", label: "الباقة المميزة" },
        { value: "Not sure", label: "لست متأكداً بعد" },
      ],
      requesterRoleLabel: "من يرسل الطلب *",
      requesterRolePlaceholder: "اختر...",
      requesterRoles: [
        { value: "Student", label: "الطالب" },
        { value: "Parent", label: "أحد الوالدين" },
        { value: "Other", label: "أقدم الطلب لشخص آخر" },
      ],
      contactTimeLabel: "وقت التواصل المفضل",
      contactTimePlaceholder: "اختر...",
      contactTimes: [
        { value: "Morning", label: "الصباح" },
        { value: "Afternoon", label: "بعد الظهر" },
        { value: "Evening", label: "المساء" },
        { value: "Anytime WhatsApp", label: "واتساب في أي وقت" },
      ],
      documentReadinessLabel: "جاهزية الوثائق",
      documentReadinessPlaceholder: "اختر...",
      documentReadinessOptions: [
        { value: "Passport ready", label: "جواز السفر موجود" },
        { value: "Diploma ready", label: "الدبلوم / النقط موجودة" },
        { value: "Not ready", label: "ليست جاهزة بعد" },
      ],
      detailsTitle: "تفاصيل التأهيل",
      details: {
        packageInterest: "الباقة المناسبة",
        requesterRole: "صفة مرسل الطلب",
        contactTime: "وقت التواصل المفضل",
        documentReadiness: "جاهزية الوثائق",
        message: "الرسالة",
      },
      messageLabel: "الرسالة",
      messagePlaceholder:
        "اشرح بإيجاز مشروعك أو أسئلتك حول المنحة أو الجامعة أو التأشيرة أو التكلفة أو الوصول.",
      consent:
        "بإرسال هذا النموذج فإنك توافق على التواصل معك عبر واتساب أو الهاتف بخصوص الخطوة التالية من المشروع.",
      privacyPrefix: "لقد قرأت",
      privacyLink: "سياسة الخصوصية",
      reassurance:
        "لا يُطلب أي دفع في هذه المرحلة. الهدف هو تقييم الملف واقتراح الخطوة المناسبة.",
      whatsappAlternative: "واتساب مباشر",
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

  const contactLabels = {
    fr: {
      main: "WhatsApp principal",
      secondary: "WhatsApp secondaire",
      email: "Email",
      instagram: "Instagram",
    },
    en: {
      main: "Main WhatsApp",
      secondary: "Secondary WhatsApp",
      email: "Email",
      instagram: "Instagram",
    },
    ar: {
      main: "واتساب الرئيسي",
      secondary: "واتساب إضافي",
      email: "البريد الإلكتروني",
      instagram: "إنستغرام",
    },
  }[lang];

  const directItems = [
    {
      label: contactLabels.main,
      value: primaryWhatsappNumberDisplay,
      href: whatsappHref,
    },
    {
      label: contactLabels.secondary,
      value: secondaryWhatsappNumberDisplay,
      href: buildWhatsappUrl(undefined, secondaryWhatsappNumberRaw),
    },
    {
      label: contactLabels.email,
      value: contactEmail,
      href: `mailto:${contactEmail}`,
    },
    {
      label: contactLabels.instagram,
      value: instagramHandle,
      href: instagramUrl,
    },
  ];

  const heroImageAlt =
    lang === "fr"
      ? "Candidature Yalla China pour les études en Chine"
      : lang === "en"
        ? "Yalla China application guidance for studying in China"
        : "التقديم مع يلا تشاينا للدراسة في الصين";

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function optionLabel(
    options: { value: string; label: string }[],
    value: unknown,
  ) {
    const rawValue = typeof value === "string" ? value : "";
    return options.find((option) => option.value === rawValue)?.label || rawValue;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formElement = e.currentTarget;

    setError(null);
    setDone(false);
    setLoading(true);

    const form = new FormData(formElement);
    const payload = Object.fromEntries(
      Array.from(form.entries()).map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim() : value,
      ]),
    );
    const originalMessage =
      typeof payload.message === "string" ? payload.message : "";

    const details = [
      `${t.form.details.packageInterest}: ${optionLabel(
        t.form.packageInterests,
        payload.packageInterest,
      )}`,
      `${t.form.details.requesterRole}: ${optionLabel(
        t.form.requesterRoles,
        payload.requesterRole,
      )}`,
      payload.contactTime
        ? `${t.form.details.contactTime}: ${optionLabel(
            t.form.contactTimes,
            payload.contactTime,
          )}`
        : "",
      payload.documentReadiness
        ? `${t.form.details.documentReadiness}: ${optionLabel(
            t.form.documentReadinessOptions,
            payload.documentReadiness,
          )}`
        : "",
    ].filter(Boolean);

    payload.message = [
      `${t.form.detailsTitle}:`,
      ...details,
      originalMessage
        ? `\n${t.form.details.message}:\n${originalMessage}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");

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

        if (data?.errorCode === "rate_limited") {
          throw new Error(t.form.rateLimitError);
        }

        throw new Error(t.form.fallbackError);
      }

      setDone(true);
      formElement.reset();
    } catch (err) {
      console.error("Application form submission failed", err);

      const knownErrors = [
        t.form.fallbackError,
        t.form.unavailableError,
        t.form.rateLimitError,
      ];
      const message = err instanceof Error ? err.message : "";

      setError(knownErrors.includes(message) ? message : t.form.fallbackError);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#050505] text-white" dir={t.dir} lang={lang}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(119,3,4,0.82),transparent_34%),radial-gradient(circle_at_86%_14%,rgba(244,189,0,0.18),transparent_30%),linear-gradient(135deg,#190506_0%,#260708_42%,#050202_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] shoji-grid" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-[#f4ede4]" />

        <Container>
          <div className="relative grid gap-8 pb-12 pt-24 sm:pt-28 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:pb-16 lg:pt-28">
            <div
              className={`space-y-6 ${
                isArabic ? "text-right" : "text-center lg:text-left"
              }`}
            >
              <p className="section-eyebrow inline-flex max-w-full flex-wrap justify-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-center text-[10px] font-black uppercase leading-relaxed tracking-[0.22em] text-[#f4bd00] shadow-[0_16px_45px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:text-xs lg:justify-start">
                {t.hero.badge}
              </p>

              <div className="space-y-4">
                <h1
                  className={`display-title text-[2.1rem] font-black leading-[1] tracking-[-0.04em] sm:text-[3.35rem] lg:text-[4.15rem] lg:leading-[0.96] lg:tracking-[-0.055em] xl:text-[4.85rem] ${
                    isArabic ? "max-w-4xl" : "mx-auto max-w-4xl lg:mx-0"
                  }`}
                >
                  {t.hero.title}
                </h1>

                <p
                  className={`max-w-2xl text-base font-medium leading-8 text-white/72 sm:text-lg ${
                    isArabic ? "" : "mx-auto lg:mx-0"
                  }`}
                >
                  {t.hero.description}
                </p>
              </div>

              <div
                className={`flex flex-col gap-3 sm:flex-row ${
                  isArabic
                    ? "sm:justify-end"
                    : "justify-center lg:justify-start"
                }`}
              >
                <a
                  href="#apply-form"
                  className="inline-flex items-center justify-center rounded-full bg-[#f4bd00] px-6 py-3 text-sm font-black text-black shadow-[0_18px_45px_rgba(244,189,0,0.22)] transition hover:-translate-y-1 hover:bg-[#ffd12d]"
                >
                  {t.hero.primaryCta}
                </a>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-[#f4bd00]/40 hover:bg-white/[0.14]"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.8rem] bg-[linear-gradient(135deg,rgba(244,189,0,0.18),rgba(255,255,255,0.05),rgba(119,3,4,0.35))] blur-[2px]" />
              <div className="relative overflow-hidden rounded-[2.1rem] border border-white/12 bg-black/30 p-3 shadow-[0_32px_95px_rgba(0,0,0,0.48)] backdrop-blur-2xl">
                <div className="relative h-[18rem] overflow-hidden rounded-[1.5rem] sm:h-[23rem] lg:h-[26rem]">
                  <Image
                    src="/fr-apply-hero.jpg"
                    alt={heroImageAlt}
                    fill
                    sizes="(max-width: 1023px) 100vw, 48vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.72)),radial-gradient(circle_at_top_right,rgba(244,189,0,0.18),transparent_34%)]" />
                </div>

                <div
                  className={`relative mt-3 rounded-[1.5rem] border border-white/10 bg-black/72 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-xl sm:p-5 ${
                    isArabic ? "text-right" : "text-left"
                  }`}
                >
                  <p className="section-eyebrow text-[10px] font-black uppercase tracking-[0.22em] text-[#f4bd00]">
                    {t.hero.panelEyebrow}
                  </p>

                  <h2 className="display-title mt-2 text-xl font-black leading-tight text-white sm:text-2xl">
                    {t.hero.panelTitle}
                  </h2>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {t.hero.panelItems.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-3 text-sm font-semibold text-white/78"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="apply-form"
        className="relative overflow-hidden bg-[#f4ede4] py-10 text-zinc-950 sm:py-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(119,3,4,0.10),transparent_32%),radial-gradient(circle_at_88%_18%,rgba(244,189,0,0.18),transparent_30%)]" />
        <Container>
          <div className="relative grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <aside className="order-2 space-y-5 lg:order-1">
              <InfoCard isArabic={isArabic}>
                <p className="section-eyebrow text-xs font-black uppercase tracking-[0.22em] text-[#770304]">
                  {t.side.beforeEyebrow}
                </p>

                <h2 className="display-title mt-3 text-2xl font-black leading-tight tracking-[-0.03em] sm:text-3xl">
                  {t.side.beforeTitle}
                </h2>

                <p className="mt-3 text-sm font-medium leading-7 text-zinc-600 sm:text-base">
                  {t.side.beforeText}
                </p>

                <ul className="mt-5 space-y-2 text-sm font-medium text-zinc-700">
                  {t.side.beforeItems.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-zinc-50 px-4 py-3"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </InfoCard>

              <div
                className={`relative overflow-hidden rounded-[2rem] bg-[#090909] p-6 text-white shadow-[0_24px_55px_rgba(0,0,0,0.16)] sm:p-7 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_12%,rgba(244,189,0,0.16),transparent_34%),radial-gradient(circle_at_14%_82%,rgba(119,3,4,0.42),transparent_38%)]" />
                <div className="relative">
                <p className="section-eyebrow text-xs font-black uppercase tracking-[0.22em] text-[#f4bd00]">
                  {t.side.supportEyebrow}
                </p>

                <h3 className="display-title mt-3 text-2xl font-black leading-tight">
                  {t.side.supportTitle}
                </h3>

                <p className="mt-3 text-sm font-medium leading-7 text-white/68 sm:text-base">
                  {t.side.supportText}
                </p>

                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#f4bd00] px-5 py-3 text-sm font-black text-black transition hover:bg-[#ffd12d] sm:w-auto"
                  >
                    {t.side.supportButton}
                  </a>

                <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-white/[0.045] p-4">
                  <p className="section-eyebrow text-xs font-black uppercase tracking-[0.22em] text-[#f4bd00]">
                    {t.side.contactTitle}
                  </p>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {directItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="rounded-[1.25rem] border border-white/10 bg-black/20 px-4 py-3 transition hover:border-[#f4bd00]/35 hover:bg-white/[0.07]"
                      >
                        <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-white/40">
                          {item.label}
                        </span>
                        <span className="mt-1 block break-words text-sm font-black text-white">
                          {item.value}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
                </div>
              </div>

              <InfoCard isArabic={isArabic}>
                <p className="section-eyebrow text-xs font-black uppercase tracking-[0.22em] text-[#770304]">
                  {t.side.nextEyebrow}
                </p>

                <h3 className="display-title mt-3 text-2xl font-black tracking-tight">
                  {t.side.nextTitle}
                </h3>

                <div className="mt-5 space-y-3">
                  {t.side.steps.map((step) => (
                    <div
                      key={step.title}
                      className="rounded-[1.45rem] border border-zinc-200 bg-white p-4"
                    >
                      <h4 className="text-sm font-black text-zinc-950 sm:text-base">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm font-medium leading-7 text-zinc-600">
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </InfoCard>
            </aside>

            <div className="order-1 lg:sticky lg:top-24 lg:order-2">
              <div
                className={`relative overflow-hidden rounded-[2.2rem] border border-[#770304]/10 bg-white p-6 shadow-[0_28px_80px_rgba(54,1,2,0.10)] sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#770304] via-[#f4bd00] to-[#770304]" />
                <div className="absolute right-[-7rem] top-[-7rem] h-56 w-56 rounded-full bg-[#f4bd00]/18 blur-3xl" />
                <div className="absolute bottom-[-7rem] left-[-7rem] h-56 w-56 rounded-full bg-[#770304]/10 blur-3xl" />
                <div className="relative">
                  <p className="section-eyebrow text-xs font-black uppercase tracking-[0.22em] text-[#770304]">
                    {t.form.eyebrow}
                  </p>

                  <h2 className="display-title mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                    {t.form.title}
                  </h2>

                  <p className="mt-3 text-sm font-medium leading-7 text-zinc-600 sm:text-base">
                    {t.form.description}
                  </p>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {t.form.chips.map((chip) => (
                      <div
                        key={chip}
                        className="rounded-full border border-[#770304]/10 bg-[#faf7f3] px-4 py-3 text-center text-sm font-bold text-zinc-700"
                      >
                        {chip}
                      </div>
                    ))}
                  </div>

                  <div aria-live="polite">
                    {done ? (
                      <div className="mt-5 rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-800">
                        <p className="font-black">{t.form.successTitle}</p>
                        <p className="mt-2 font-semibold leading-6">{t.form.success}</p>
                        <p className="mt-2 leading-6 text-emerald-700">{t.form.successText}</p>
                        <a
                          href={whatsappHref}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-4 inline-flex rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-black text-white transition hover:bg-emerald-800"
                        >
                          {t.form.successWhatsapp}
                        </a>
                      </div>
                    ) : null}
                  </div>

                  <div aria-live="assertive">
                    {error ? (
                      <div
                        role="alert"
                        className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold leading-6 text-amber-900"
                      >
                        {error}
                      </div>
                    ) : null}
                  </div>

                <form onSubmit={onSubmit} aria-busy={loading} className="mt-6 space-y-5">
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
                      autoComplete="name"
                    />

                    <Field
                      label={t.form.fields.phone}
                      name="phone"
                      placeholder={t.form.fields.phonePlaceholder}
                      required
                      rtl={isArabic}
                      latin
                      autoComplete="tel"
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
                      autoComplete="email"
                    />

                    <Field
                      label={t.form.fields.city}
                      name="city"
                      placeholder={t.form.fields.cityPlaceholder}
                      required
                      rtl={isArabic}
                      autoComplete="address-level2"
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
                    <SelectField
                      label={t.form.objectiveLabel}
                      name="objective"
                      placeholder={t.form.objectivePlaceholder}
                      options={t.form.objectives}
                      required
                      rtl={isArabic}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <SelectField
                      label={t.form.packageInterestLabel}
                      name="packageInterest"
                      placeholder={t.form.packageInterestPlaceholder}
                      options={t.form.packageInterests}
                      required
                      rtl={isArabic}
                    />

                    <SelectField
                      label={t.form.requesterRoleLabel}
                      name="requesterRole"
                      placeholder={t.form.requesterRolePlaceholder}
                      options={t.form.requesterRoles}
                      required
                      rtl={isArabic}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <SelectField
                      label={t.form.contactTimeLabel}
                      name="contactTime"
                      placeholder={t.form.contactTimePlaceholder}
                      options={t.form.contactTimes}
                      rtl={isArabic}
                    />

                    <SelectField
                      label={t.form.documentReadinessLabel}
                      name="documentReadiness"
                      placeholder={t.form.documentReadinessPlaceholder}
                      options={t.form.documentReadinessOptions}
                      rtl={isArabic}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-bold">
                      {t.form.messageLabel}
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t.form.messagePlaceholder}
                      className={`mt-2 w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#770304] sm:text-base ${
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
                        className="font-black text-[#770304] underline underline-offset-4"
                      >
                        {t.form.privacyLink}
                      </Link>
                      .
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    data-track="apply_submit"
                    data-track-value={lang}
                    className="w-full rounded-full bg-[#770304] px-5 py-3.5 text-sm font-black text-white shadow-[0_18px_45px_rgba(119,3,4,0.22)] transition hover:-translate-y-1 hover:bg-[#640203] disabled:translate-y-0 disabled:cursor-wait disabled:opacity-60"
                  >
                    {loading ? t.form.submitting : t.form.submit}
                  </button>

                  <div
                    className={`flex flex-col gap-3 rounded-[1.5rem] border border-zinc-200 bg-zinc-50 px-4 py-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between ${
                      isArabic ? "text-right sm:flex-row-reverse" : ""
                    }`}
                  >
                    <p className="leading-6">{t.form.reassurance}</p>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      data-track="apply_whatsapp_alternative"
                      data-track-value={lang}
                      className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#770304]/15 bg-white px-4 py-2.5 font-bold text-[#770304] transition hover:bg-[#fff7f2]"
                    >
                      {t.form.whatsappAlternative}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

function InfoCard({
  children,
  isArabic,
}: {
  children: React.ReactNode;
  isArabic: boolean;
}) {
  return (
    <div
      className={`rounded-[2rem] border border-[#770304]/10 bg-white/92 p-6 shadow-[0_20px_45px_rgba(54,1,2,0.06)] backdrop-blur-xl sm:p-7 ${
        isArabic ? "text-right" : ""
      }`}
    >
      {children}
    </div>
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
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rtl?: boolean;
  latin?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold">
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        dir={latin && rtl ? "ltr" : undefined}
        inputMode={type === "email" ? "email" : latin ? "tel" : undefined}
        className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-zinc-400 focus:border-[#770304] sm:text-base ${
          latin && rtl ? "force-ltr" : rtl ? "text-right" : ""
        }`}
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  placeholder,
  options,
  required,
  rtl = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  options: { value: string; label: string }[];
  required?: boolean;
  rtl?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-bold">
        {label}
      </label>

      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className={`mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#770304] sm:text-base ${
          rtl ? "text-right" : ""
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
}
