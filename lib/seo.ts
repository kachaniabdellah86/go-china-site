import type { Metadata } from "next";
import { GuideSlug } from "@/lib/guides";
import { Locale, siteBaseUrl } from "@/lib/yalla";

type StaticPageKey =
  | "home"
  | "services"
  | "apply"
  | "contact"
  | "about"
  | "faq"
  | "privacy"
  | "terms";

const pageMeta: Record<
  Locale,
  Record<StaticPageKey, { title: string; description: string }>
> = {
  fr: {
    home: {
      title: "Étudier en Chine avec un accompagnement sérieux",
      description:
        "Yalla China aide les étudiants marocains et leurs familles sur l'orientation, l'admission, le visa, le voyage et l'arrivée en Chine.",
    },
    services: {
      title: "Services, packs et accompagnement Yalla China",
      description:
        "Comparez Pack 1 et Pack 2, découvrez ce qui est inclus sur le dossier, le visa, le voyage, l'arrivée et la consultation gratuite.",
    },
    apply: {
      title: "Candidature étude en Chine",
      description:
        "Envoyez une première demande claire pour recevoir une orientation adaptée à votre profil, votre projet et votre niveau de besoin.",
    },
    contact: {
      title: "Contact, WhatsApp et consultation gratuite",
      description:
        "Contactez Yalla China par WhatsApp, email ou formulaire pour poser vos questions sur la bourse, l'université, le visa et l'arrivée.",
    },
    about: {
      title: "À propos de Yalla China et d'Aymane Badri",
      description:
        "Découvrez l'histoire d'Aymane Badri, son expérience d'études en Chine et pourquoi Yalla China a été créé pour mieux guider les étudiants.",
    },
    faq: {
      title: "FAQ études en Chine",
      description:
        "Réponses sur les bourses, le choix d'université, les coûts, le visa, le voyage, l'arrivée et les différences entre les packs Yalla China.",
    },
    privacy: {
      title: "Politique de confidentialité",
      description:
        "Consultez la politique de confidentialité de Yalla China sur l'usage des formulaires, des données de contact et des mesures d'analyse du site.",
    },
    terms: {
      title: "Conditions générales d'utilisation",
      description:
        "Lisez les conditions d'utilisation de Yalla China concernant le site, les demandes d'information et les limites de service.",
    },
  },
  en: {
    home: {
      title: "Study in China with serious guidance",
      description:
        "Yalla China supports Moroccan students and families with orientation, admission, visa, travel, and arrival support for China.",
    },
    services: {
      title: "Yalla China services and packages",
      description:
        "Compare Package 1 and Package 2 and see what is included around the file, visa, travel, arrival, and free consultation.",
    },
    apply: {
      title: "Apply to study in China",
      description:
        "Send a first clear request to receive guidance adapted to your profile, project, and support needs.",
    },
    contact: {
      title: "Contact, WhatsApp, and free consultation",
      description:
        "Contact Yalla China by WhatsApp, email, or form for questions about scholarships, universities, visa support, and arrival.",
    },
    about: {
      title: "About Yalla China and Aymane Badri",
      description:
        "Discover Aymane Badri's story, his real study experience in China, and why Yalla China was created to guide students more honestly.",
    },
    faq: {
      title: "Study in China FAQ",
      description:
        "Answers about scholarships, university choice, cost, visa questions, travel support, arrival, and what is included in each Yalla China package.",
    },
    privacy: {
      title: "Privacy Policy",
      description:
        "Read Yalla China's privacy policy on contact forms, personal data usage, cookies, and analytics settings.",
    },
    terms: {
      title: "Terms of Service",
      description:
        "Read Yalla China's terms covering website use, enquiry forms, and service limitations.",
    },
  },
  ar: {
    home: {
      title: "الدراسة في الصين مع مرافقة جدية",
      description:
        "يلا تشاينا ترافق الطلبة المغاربة وعائلاتهم في التوجيه والقبول والتأشيرة والسفر والوصول إلى الصين.",
    },
    services: {
      title: "خدمات وباقات يلا تشاينا",
      description:
        "قارن بين الباقة 1 والباقة 2 واكتشف ما هو مشمول في الملف والتأشيرة والسفر والوصول والاستشارة المجانية.",
    },
    apply: {
      title: "التقديم للدراسة في الصين",
      description:
        "أرسل طلباً أولياً واضحاً لتحصل على توجيه مناسب لملفك ومشروعك ومستوى المرافقة الذي تحتاجه.",
    },
    contact: {
      title: "التواصل وواتساب والاستشارة المجانية",
      description:
        "تواصل مع يلا تشاينا عبر واتساب أو البريد أو الاستمارة لطرح أسئلتك حول المنحة والجامعة والتأشيرة والوصول.",
    },
    about: {
      title: "من نحن وقصة أيمن بدري",
      description:
        "اكتشف قصة أيمن بدري وتجربته الحقيقية في الدراسة داخل الصين ولماذا تأسست يلا تشاينا لتوجيه الطلبة بشكل أوضح وأكثر صدقاً.",
    },
    faq: {
      title: "الأسئلة الشائعة حول الدراسة في الصين",
      description:
        "أجوبة حول المنح واختيار الجامعة والتكلفة والتأشيرة والسفر والوصول وما الذي تتضمنه باقات يلا تشاينا.",
    },
    privacy: {
      title: "سياسة الخصوصية",
      description:
        "اطلع على سياسة خصوصية يلا تشاينا بخصوص الاستمارات وبيانات التواصل والكوكيز وإعدادات التحليلات.",
    },
    terms: {
      title: "شروط الاستخدام",
      description:
        "اقرأ شروط استخدام يلا تشاينا المتعلقة بالموقع وطلبات التواصل وحدود الخدمة.",
    },
  },
};

const guideMeta: Record<
  Locale,
  Record<GuideSlug, { title: string; description: string }>
> = {
  fr: {
    "personal-experience": {
      title: "Expérience personnelle en Chine",
      description:
        "Découvrez comment une expérience réelle en Chine aide à mieux préparer l'étudiant et à rassurer les parents.",
    },
    "study-steps": {
      title: "Les étapes des études en Chine",
      description:
        "Comprenez la séquence orientation, dossier, admission, visa et départ pour étudier en Chine plus sereinement.",
    },
    "why-china": {
      title: "Pourquoi choisir la Chine",
      description:
        "Un guide pour savoir quand la Chine représente une vraie opportunité universitaire et personnelle pour l'étudiant.",
    },
    "how-to-study": {
      title: "Comment étudier en Chine",
      description:
        "Les bons premiers pas pour transformer une envie générale en projet structuré d'études en Chine.",
    },
  },
  en: {
    "personal-experience": {
      title: "Personal experience in China",
      description:
        "See how real experience in China helps students prepare better and helps parents feel more reassured.",
    },
    "study-steps": {
      title: "The study steps for China",
      description:
        "Understand the sequence of orientation, file, admission, visa, and departure for a calmer China study journey.",
    },
    "why-china": {
      title: "Why choose China",
      description:
        "A guide to understand when China becomes a serious academic and personal opportunity for the student.",
    },
    "how-to-study": {
      title: "How to study in China",
      description:
        "The right first steps to turn a general idea into a structured plan for studying in China.",
    },
  },
  ar: {
    "personal-experience": {
      title: "التجربة الشخصية في الصين",
      description:
        "اكتشف كيف تساعد التجربة الحقيقية في الصين على إعداد الطالب بشكل أفضل وطمأنة الوالدين.",
    },
    "study-steps": {
      title: "مراحل الدراسة في الصين",
      description:
        "افهم تسلسل التوجيه والملف والقبول والتأشيرة والسفر من أجل مسار أكثر وضوحاً نحو الدراسة في الصين.",
    },
    "why-china": {
      title: "لماذا تختار الصين",
      description:
        "دليل يساعدك على معرفة متى تصبح الصين فرصة أكاديمية وشخصية حقيقية للطالب.",
    },
    "how-to-study": {
      title: "كيف تدرس في الصين",
      description:
        "أول الخطوات الصحيحة لتحويل فكرة عامة إلى مشروع منظم للدراسة في الصين.",
    },
  },
};

function buildLanguageAlternates(pathByLocale: Record<Locale, string>) {
  return {
    fr: `${siteBaseUrl}${pathByLocale.fr}`,
    en: `${siteBaseUrl}${pathByLocale.en}`,
    ar: `${siteBaseUrl}${pathByLocale.ar}`,
  };
}

export function getStaticPageMetadata(
  locale: Locale,
  key: StaticPageKey,
  path: string
): Metadata {
  const meta = pageMeta[locale][key];
  const paths = {
    fr: `/fr${path}`,
    en: `/en${path}`,
    ar: `/ar${path}`,
  } satisfies Record<Locale, string>;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: paths[locale],
      languages: buildLanguageAlternates(paths),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteBaseUrl}${paths[locale]}`,
      locale: locale === "fr" ? "fr_MA" : locale === "en" ? "en_US" : "ar_MA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}

export function getGuideMetadata(locale: Locale, slug: GuideSlug): Metadata {
  const meta = guideMeta[locale][slug];
  const paths = {
    fr: `/fr/guides/${slug}`,
    en: `/en/guides/${slug}`,
    ar: `/ar/guides/${slug}`,
  } satisfies Record<Locale, string>;

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: paths[locale],
      languages: buildLanguageAlternates(paths),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${siteBaseUrl}${paths[locale]}`,
      locale: locale === "fr" ? "fr_MA" : locale === "en" ? "en_US" : "ar_MA",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
    },
  };
}
