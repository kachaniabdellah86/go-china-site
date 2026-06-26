"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { founderName, Locale, supportedCities } from "@/lib/yalla";

type Pack = {
  name: string;
  price: string;
  tag: string;
  desc: string;
  items: string[];
  cta: string;
};

type Checkpoint = {
  kind: "admission" | "visa" | "preparation" | "arrival";
  chapter: string;
  title: string;
  description: string;
  label: string;
  artifactTitle: string;
  artifactText: string;
  image: string;
  items: string[];
};

type SceneCopy = {
  dir: "ltr" | "rtl";
  hero: {
    badge: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    start: string;
    end: string;
    cardTitle: string;
    cardText: string;
    stats: { label: string; value: string }[];
  };
  vision: {
    chapter: string;
    title: string;
    description: string;
    note: string;
    artifactTitle: string;
    artifactText: string;
  };
  doubts: {
    chapter: string;
    title: string;
    description: string;
    questions: string[];
  };
  method: {
    chapter: string;
    title: string;
    description: string;
    points: { title: string; desc: string }[];
  };
  checkpoints: {
    admission: Checkpoint;
    visa: Checkpoint;
    preparation: Checkpoint;
    arrival: Checkpoint;
  };
  packs: {
    chapter: string;
    title: string;
    description: string;
    standard: Pack;
    premium: Pack;
  };
  final: {
    chapter: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

const images = {
  hero: "/yalla-hero-student-china.jpg",
  vision: "/yalla-campus-vision.jpg",
  family: "/yalla-family-trust.jpg",
  method: "/aymen-badri.png",
  admission: "/yalla-admission-documents.jpg",
  visa: "/yalla-student-visa.jpg",
  preparation: "/yalla-preparation-desk.jpg",
  arrival: "/yalla-campus-arrival.jpg",
  academic: "/yalla-academic-ambition.jpg",
};

const copy: Record<Locale, SceneCopy> = {
  fr: {
    dir: "ltr",
    hero: {
      badge: "YALLA CHINA • ÉTUDES EN CHINE",
      title:
        "Étudier en Chine avec un accompagnement qui rassure toute la famille.",
      description:
        "D’un premier échange jusqu’à l’arrivée sur le campus, Yalla China transforme un projet complexe en parcours clair et accompagné.",
      primary: "Commencer par une consultation",
      secondary: "Comparer les packs",
      start: "Maroc",
      end: "Campus en Chine",
      cardTitle: "Projet étudiant",
      cardText: "Orientation • Admission • Visa • Arrivée",
      stats: [
        { label: "Objectif", value: "Université fiable" },
        { label: "Priorité", value: "Famille rassurée" },
        { label: "Suivi", value: "Jusqu’au campus" },
      ],
    },
    vision: {
      chapter: "Chapitre 01 — L’ambition",
      title:
        "Étudier en Chine, ce n’est pas seulement partir. C’est construire un avenir.",
      description:
        "Une université, une ville, une bourse possible, un environnement international et une famille qui veut être sûre que chaque étape est bien encadrée.",
      note: "Yalla China transforme cette ambition en parcours académique sérieux, lisible et accompagné.",
      artifactTitle: "Objectif académique",
      artifactText:
        "Université fiable • Dossier solide • Visa préparé • Arrivée encadrée",
    },
    doubts: {
      chapter: "Chapitre 02 — Les vraies inquiétudes",
      title:
        "Avant de décider, une famille veut comprendre, comparer et se sentir en confiance.",
      description:
        "Le frein n’est pas seulement le prix. C’est l’incertitude : université, documents, visa, communication et arrivée.",
      questions: [
        "Quelle université correspond vraiment au profil ?",
        "Le dossier est-il assez solide ?",
        "Comment préparer le visa étudiant ?",
        "Qui suit l’étudiant après l’admission ?",
        "Comment rassurer la famille à chaque étape ?",
      ],
    },
    method: {
      chapter: "Chapitre 03 — La méthode Yalla China",
      title: "Une méthode claire, portée par une vraie expérience de la Chine.",
      description: `${founderName} a étudié en Chine. Cette expérience réelle devient aujourd’hui une méthode structurée pour accompagner les étudiants marocains avec sérieux, proximité et transparence.`,
      points: [
        {
          title: "Diagnostic du profil",
          desc: "On analyse le niveau, les objectifs, le budget, la ville souhaitée et les attentes de la famille.",
        },
        {
          title: "Choix académique intelligent",
          desc: "On vise les universités et les villes qui correspondent au projet, pas des choix au hasard.",
        },
        {
          title: "Suivi jusqu’à l’arrivée",
          desc: "Le parcours continue après l’admission : visa, préparation, arrivée et premiers repères.",
        },
      ],
    },
    checkpoints: {
      admission: {
        kind: "admission",
        chapter: "Étape 04 — Admission",
        title: "Le projet devient une vraie candidature universitaire.",
        description:
          "Le dossier est structuré, les documents sont vérifiés, les traductions sont préparées et l’inscription est suivie avec méthode.",
        label: "Admission",
        artifactTitle: "Dossier académique prêt",
        artifactText:
          "Université sélectionnée • Documents vérifiés • Candidature suivie",
        image: images.admission,
        items: [
          "Choix universités",
          "Préparation dossier",
          "Traductions",
          "Inscription",
          "Suivi admission",
        ],
      },
      visa: {
        kind: "visa",
        chapter: "Étape 05 — Visa étudiant",
        title: "Le visa étudiant devient une étape claire et organisée.",
        description:
          "Le visa ne doit pas être une zone de stress. Les documents, les délais et les démarches sont préparés clairement.",
        label: "Visa étudiant",
        artifactTitle: "Visa en préparation",
        artifactText: "Documents • Vérification • Rendez-vous • Suivi",
        image: images.visa,
        items: [
          "Documents visa",
          "Vérification",
          "Rendez-vous",
          "Suivi",
          "Brief avant départ",
        ],
      },
      preparation: {
        kind: "preparation",
        chapter: "Étape 06 — Préparation",
        title: "Avant l’arrivée en Chine, chaque détail doit être anticipé.",
        description:
          "Billet, communication, documents, timing, installation et premiers repères : une bonne préparation réduit le stress de toute la famille.",
        label: "Préparation",
        artifactTitle: "Préparation organisée",
        artifactText: "Billet • Briefing • Documents • Support WhatsApp",
        image: images.preparation,
        items: [
          "Aide billet",
          "Préparation documents",
          "Briefing famille",
          "Support WhatsApp",
          "Coordination arrivée",
        ],
      },
      arrival: {
        kind: "arrival",
        chapter: "Étape 07 — Arrivée en Chine",
        title:
          "L’étudiant arrive en Chine avec des repères, pas avec l’inconnu.",
        description:
          "Avec le Pack Premium, l’étudiant n’arrive pas seul face à l’inconnu. L’accompagnement continue jusqu’aux premiers repères sur le campus.",
        label: "Arrivée",
        artifactTitle: "Installation facilitée",
        artifactText: "Accueil • Transfert • Campus • Premiers repères",
        image: images.arrival,
        items: [
          "Accueil",
          "Transfert",
          "Repères campus",
          "Installation",
          "Premiers pas",
        ],
      },
    },
    packs: {
      chapter: "Choisir le bon niveau d’accompagnement",
      title: "Deux packs. Un objectif : étudier en Chine avec confiance.",
      description:
        "Après avoir compris le parcours, la famille choisit le niveau d’accompagnement qui correspond vraiment à sa situation.",
      standard: {
        name: "Pack Standard",
        price: "15.000 DH",
        tag: "Jusqu’au visa",
        desc: "Pour les étudiants qui veulent un accompagnement sérieux pour l’orientation, le dossier, l’admission et le visa.",
        items: [
          "Consultation",
          "Orientation",
          "Dossier",
          "Traduction",
          "Admission",
          "Visa",
        ],
        cta: "Choisir Standard",
      },
      premium: {
        name: "Pack Premium",
        price: "23.000 DH",
        tag: "Recommandé",
        desc: "Pour les familles qui veulent une présence plus rassurante jusqu’à l’arrivée et aux premiers repères en Chine.",
        items: [
          "Tout le Standard",
          "Aide billet",
          "Préparation départ",
          "Coordination arrivée",
          "Transfert",
          "Premiers repères",
        ],
        cta: "Choisir Premium",
      },
    },
    final: {
      chapter: "Votre parcours peut commencer",
      title: "La première étape, c’est une consultation claire.",
      description:
        "On analyse le profil, on répond aux inquiétudes et on recommande la formule la plus adaptée.",
      primary: "Demander ma consultation gratuite",
      secondary: "Lancer ma candidature",
    },
  },

  en: {
    dir: "ltr",
    hero: {
      badge: "YALLA CHINA • STUDY IN CHINA",
      title: "Study in China with support that reassures the whole family.",
      description:
        "From first consultation to campus arrival, Yalla China turns a complex project into a clear, premium path.",
      primary: "Start with a consultation",
      secondary: "Compare packages",
      start: "Morocco",
      end: "Campus in China",
      cardTitle: "Student project",
      cardText: "Orientation • Admission • Visa • Arrival",
      stats: [
        { label: "Goal", value: "Reliable university" },
        { label: "Priority", value: "Family reassured" },
        { label: "Support", value: "Until campus" },
      ],
    },
    vision: {
      chapter: "Chapter 01 — The ambition",
      title: "Studying in China is not only leaving. It is building a future.",
      description:
        "A university, a city, a possible scholarship, an international environment, and a family that needs confidence at every step.",
      note: "Yalla China turns that ambition into a serious, readable, guided academic path.",
      artifactTitle: "Academic objective",
      artifactText:
        "Reliable university • Strong file • Prepared visa • Guided arrival",
    },
    doubts: {
      chapter: "Chapter 02 — The real concerns",
      title:
        "Before deciding, a family needs to understand, compare, and feel confident.",
      description:
        "The obstacle is not only price. It is uncertainty: university, documents, visa, communication, arrival, and student safety.",
      questions: [
        "Which university truly fits the profile?",
        "Is the file strong enough?",
        "How do we prepare the student visa?",
        "Who follows the student after admission?",
        "How do we reassure the family at every step?",
      ],
    },
    method: {
      chapter: "Chapter 03 — The Yalla China method",
      title: "A clear method, shaped by real experience in China.",
      description: `${founderName} studied in China. That real experience is now turned into a structured method to guide Moroccan students with seriousness, care, and transparency.`,
      points: [
        {
          title: "Profile diagnosis",
          desc: "We analyze level, goals, budget, preferred city, and family expectations.",
        },
        {
          title: "Smart academic choice",
          desc: "We target universities and cities that fit the project, not random options.",
        },
        {
          title: "Support until arrival",
          desc: "The path continues after admission: visa, preparation, arrival, and first steps.",
        },
      ],
    },
    checkpoints: {
      admission: {
        kind: "admission",
        chapter: "Step 04 — Admission",
        title: "The project becomes a real university application.",
        description:
          "The file is structured, documents are checked, translations are prepared, and registration is followed with method.",
        label: "Admission",
        artifactTitle: "Academic file ready",
        artifactText:
          "University selected • Documents checked • Application followed",
        image: images.admission,
        items: [
          "University selection",
          "File preparation",
          "Translations",
          "Registration",
          "Admission follow-up",
        ],
      },
      visa: {
        kind: "visa",
        chapter: "Step 05 — Student visa",
        title: "The student visa becomes a clear and organized step.",
        description:
          "The visa should not be a stressful blur. Documents, timing, and steps are prepared clearly.",
        label: "Student visa",
        artifactTitle: "Visa in preparation",
        artifactText: "Documents • Verification • Appointment • Follow-up",
        image: images.visa,
        items: [
          "Visa documents",
          "Verification",
          "Appointment",
          "Follow-up",
          "Pre-departure brief",
        ],
      },
      preparation: {
        kind: "preparation",
        chapter: "Step 06 — Preparation",
        title: "Before arrival in China, every detail should be anticipated.",
        description:
          "Ticket, communication, documents, timing, installation, and first steps: good preparation reduces family stress.",
        label: "Preparation",
        artifactTitle: "Organized preparation",
        artifactText: "Ticket • Briefing • Documents • WhatsApp support",
        image: images.preparation,
        items: [
          "Ticket support",
          "Document preparation",
          "Family briefing",
          "WhatsApp support",
          "Arrival coordination",
        ],
      },
      arrival: {
        kind: "arrival",
        chapter: "Step 07 — Arrival in China",
        title: "The student arrives in China with landmarks, not uncertainty.",
        description:
          "With Premium, the student does not arrive alone into the unknown. Support continues through the first campus steps.",
        label: "Arrival",
        artifactTitle: "Settling in made easier",
        artifactText: "Welcome • Transfer • Campus • First landmarks",
        image: images.arrival,
        items: [
          "Welcome",
          "Transfer",
          "Campus landmarks",
          "Installation",
          "First steps",
        ],
      },
    },
    packs: {
      chapter: "Choose the right support level",
      title: "Two packages. One goal: study in China with confidence.",
      description:
        "After understanding the path, the family chooses the support level that truly fits their situation.",
      standard: {
        name: "Standard Pack",
        price: "15,000 DH",
        tag: "Until visa",
        desc: "For students who need serious support for orientation, file, admission, and visa.",
        items: [
          "Consultation",
          "Orientation",
          "File",
          "Translation",
          "Admission",
          "Visa",
        ],
        cta: "Choose Standard",
      },
      premium: {
        name: "Premium Pack",
        price: "23,000 DH",
        tag: "Recommended",
        desc: "For families who want more reassuring presence until arrival and first steps in China.",
        items: [
          "Everything Standard",
          "Ticket support",
          "Preparation",
          "Arrival coordination",
          "Transfer",
          "First landmarks",
        ],
        cta: "Choose Premium",
      },
    },
    final: {
      chapter: "Your path can begin",
      title: "The first step is a clear consultation.",
      description:
        "We analyze the profile, answer concerns, explain possibilities, and recommend the most suitable package.",
      primary: "Request my free consultation",
      secondary: "Start my application",
    },
  },

  ar: {
    dir: "rtl",
    hero: {
      badge: "YALLA CHINA • الدراسة في الصين",
      title: "ادرس في الصين مع مرافقة تطمئن الطالب والعائلة.",
      description:
        "من أول استشارة إلى الوصول إلى الجامعة، تحول يلا تشاينا المشروع المعقد إلى مسار واضح ومرافق.",
      primary: "ابدأ باستشارة",
      secondary: "قارن الباقات",
      start: "المغرب",
      end: "جامعة في الصين",
      cardTitle: "مشروع الطالب",
      cardText: "توجيه • قبول • تأشيرة • وصول",
      stats: [
        { label: "الهدف", value: "جامعة موثوقة" },
        { label: "الأولوية", value: "عائلة مطمئنة" },
        { label: "المرافقة", value: "حتى الجامعة" },
      ],
    },
    vision: {
      chapter: "الفصل 01 — الطموح",
      title: "الدراسة في الصين ليست مجرد سفر. إنها بناء مستقبل.",
      description:
        "جامعة، مدينة، منحة ممكنة، بيئة دولية، وعائلة تريد الاطمئنان في كل خطوة.",
      note: "يلا تشاينا تحول هذا الطموح إلى مسار أكاديمي واضح وجاد ومرافق.",
      artifactTitle: "الهدف الأكاديمي",
      artifactText: "جامعة موثوقة • ملف قوي • تأشيرة محضرة • وصول مرافق",
    },
    doubts: {
      chapter: "الفصل 02 — المخاوف الحقيقية",
      title: "قبل القرار، العائلة تحتاج إلى الفهم والمقارنة والثقة.",
      description:
        "العائق ليس السعر فقط. بل الغموض: الجامعة، الوثائق، التأشيرة، التواصل، الوصول، وأمان الطالب.",
      questions: [
        "أي جامعة تناسب الملف فعلاً؟",
        "هل الملف قوي بما يكفي؟",
        "كيف نحضر تأشيرة الطالب؟",
        "من يتابع الطالب بعد القبول؟",
        "كيف نطمئن العائلة في كل مرحلة؟",
      ],
    },
    method: {
      chapter: "الفصل 03 — طريقة يلا تشاينا",
      title: "طريقة واضحة مبنية على تجربة حقيقية في الصين.",
      description: `${founderName} درس في الصين، وهذه التجربة أصبحت اليوم طريقة منظمة لمرافقة الطلبة المغاربة بجدية وقرب وشفافية.`,
      points: [
        {
          title: "تشخيص الملف",
          desc: "نحلل المستوى، الأهداف، الميزانية، المدينة المناسبة وتوقعات العائلة.",
        },
        {
          title: "اختيار أكاديمي ذكي",
          desc: "نختار الجامعات والمدن المناسبة للمشروع، وليس اختيارات عشوائية.",
        },
        {
          title: "مرافقة حتى الوصول",
          desc: "المسار لا ينتهي عند القبول: التأشيرة، التحضير، الوصول وأول الخطوات.",
        },
      ],
    },
    checkpoints: {
      admission: {
        kind: "admission",
        chapter: "المرحلة 04 — القبول",
        title: "المشروع يتحول إلى ترشيح جامعي حقيقي.",
        description:
          "يتم تنظيم الملف، مراجعة الوثائق، تحضير الترجمة، ومتابعة التسجيل بطريقة واضحة.",
        label: "القبول",
        artifactTitle: "الملف الأكاديمي جاهز",
        artifactText: "جامعة مختارة • وثائق مراجعة • ترشيح متابع",
        image: images.admission,
        items: [
          "اختيار الجامعة",
          "تحضير الملف",
          "الترجمة",
          "التسجيل",
          "متابعة القبول",
        ],
      },
      visa: {
        kind: "visa",
        chapter: "المرحلة 05 — تأشيرة الطالب",
        title: "تأشيرة الطالب تصبح مرحلة واضحة ومنظمة.",
        description:
          "تأشيرة الطالب لا يجب أن تكون مصدر توتر. الوثائق والآجال والخطوات يتم تحضيرها بوضوح.",
        label: "تأشيرة الطالب",
        artifactTitle: "التأشيرة قيد التحضير",
        artifactText: "وثائق • مراجعة • موعد • متابعة",
        image: images.visa,
        items: [
          "وثائق التأشيرة",
          "المراجعة",
          "الموعد",
          "المتابعة",
          "إرشاد قبل الانطلاق",
        ],
      },
      preparation: {
        kind: "preparation",
        chapter: "المرحلة 06 — التحضير",
        title: "قبل الوصول إلى الصين، يجب توقع كل التفاصيل.",
        description:
          "التذكرة، التواصل، الوثائق، التوقيت، الاستقرار وأول الخطوات: التحضير الجيد يخفف توتر العائلة.",
        label: "التحضير",
        artifactTitle: "تحضير منظم",
        artifactText: "تذكرة • إرشاد • وثائق • دعم واتساب",
        image: images.preparation,
        items: [
          "مساعدة التذكرة",
          "تحضير الوثائق",
          "إرشاد العائلة",
          "دعم واتساب",
          "تنسيق الوصول",
        ],
      },
      arrival: {
        kind: "arrival",
        chapter: "المرحلة 07 — الوصول إلى الصين",
        title: "الطالب يصل إلى الصين ومعه معالم واضحة، لا غموض.",
        description:
          "مع الباقة المميزة، الطالب لا يصل وحده إلى المجهول. المرافقة تستمر في أول خطواته داخل الجامعة.",
        label: "الوصول",
        artifactTitle: "استقرار أسهل",
        artifactText: "استقبال • نقل • جامعة • أول المعالم",
        image: images.arrival,
        items: ["استقبال", "نقل", "معالم الجامعة", "استقرار", "الخطوات الأولى"],
      },
    },
    packs: {
      chapter: "اختر مستوى المرافقة المناسب",
      title: "باقتان. هدف واحد: الدراسة في الصين بثقة.",
      description:
        "بعد فهم المسار، تختار العائلة مستوى المرافقة المناسب لوضعها الحقيقي.",
      standard: {
        name: "الباقة العادية",
        price: "15.000 DH",
        tag: "حتى التأشيرة",
        desc: "للطلبة الذين يريدون مرافقة جادة في التوجيه والملف والقبول والتأشيرة.",
        items: ["استشارة", "توجيه", "ملف", "ترجمة", "قبول", "تأشيرة"],
        cta: "اختر العادية",
      },
      premium: {
        name: "الباقة المميزة",
        price: "23.000 DH",
        tag: "مقترحة",
        desc: "للعائلات التي تريد حضوراً مطمئناً حتى الوصول وأول الخطوات في الصين.",
        items: [
          "كل ما في العادية",
          "مساعدة التذكرة",
          "تحضير",
          "تنسيق الوصول",
          "النقل",
          "أول المعالم",
        ],
        cta: "اختر المميزة",
      },
    },
    final: {
      chapter: "يمكن أن يبدأ مسارك الآن",
      title: "الخطوة الأولى هي استشارة واضحة.",
      description:
        "نحلل الملف، نجيب عن المخاوف، نشرح الإمكانيات، ونقترح الصيغة الأنسب.",
      primary: "اطلب استشارة مجانية",
      secondary: "ابدأ التقديم",
    },
  },
};

const cinematicEase: [number, number, number, number] = [0.19, 1, 0.22, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0 },
};

const fadeScale = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.965,
    clipPath: "inset(10% 0% 10% 0% round 2rem)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0% 0% 0% round 2rem)",
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -42 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 42 },
  visible: { opacity: 1, x: 0 },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

const slowFloat = {
  y: [0, -8, 0],
  rotate: [0, -0.35, 0],
};


function getSafeLang(lang: string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

function getUiLabel(
  lang: Locale,
  key: "academicGoal" | "academicGuide",
): string {
  const labels: Record<Locale, Record<"academicGoal" | "academicGuide", string>> = {
    fr: {
      academicGoal: "Objectif académique",
      academicGuide: "Guide académique",
    },
    en: {
      academicGoal: "Academic Goal",
      academicGuide: "Academic Guide",
    },
    ar: {
      academicGoal: "الهدف الأكاديمي",
      academicGuide: "الدليل الأكاديمي",
    },
  };

  return labels[lang][key];
}

function getCitiesForLocale(lang: Locale): string[] {
  if (Array.isArray(supportedCities)) return supportedCities;

  const cityMap = supportedCities as unknown as Partial<
    Record<Locale, string[]>
  >;
  return cityMap[lang] ?? cityMap.fr ?? [];
}

function SceneFrame({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-hidden lg:min-h-[100dvh] lg:snap-start ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 bg-gradient-to-b from-[#050202]/22 via-[#050202]/8 to-transparent"
      />

      {children}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-1px] z-20 h-20 bg-gradient-to-t from-[#050202]/26 via-[#050202]/8 to-transparent"
      />
    </section>
  );
}

function GrainOverlay() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.22] mix-blend-soft-light [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12)_0_1px,transparent_1px),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.10)_0_1px,transparent_1px)] [background-size:18px_18px,26px_26px]"
    />
  );
}

function LuxuryBackground({
  src,
  strength = "dark",
}: {
  src?: string;
  strength?: "dark" | "cream" | "deep";
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {src ? (
        <motion.div
          className="absolute inset-0"
          animate={reduceMotion ? undefined : { scale: [1.035, 1.065, 1.035] }}
          transition={
            reduceMotion
              ? undefined
              : { duration: 22, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <Image
            src={src}
            alt=""
            fill
            priority={src === images.hero}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      ) : (
        <div className="absolute inset-0 bg-[#050202]" />
      )}

      <div
        className={
          strength === "cream"
            ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(244,237,228,0.96),rgba(244,237,228,0.78)_42%,rgba(74,16,16,0.36)),radial-gradient(circle_at_80%_22%,rgba(237,184,11,0.22),transparent_34%)]"
            : strength === "deep"
              ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(5,2,2,0.96),rgba(5,2,2,0.76)_45%,rgba(5,2,2,0.44)),radial-gradient(circle_at_78%_22%,rgba(237,184,11,0.18),transparent_36%),radial-gradient(circle_at_22%_80%,rgba(119,3,4,0.36),transparent_38%)]"
              : "absolute inset-0 bg-[linear-gradient(90deg,rgba(5,2,2,0.95),rgba(5,2,2,0.72)_45%,rgba(5,2,2,0.34)),radial-gradient(circle_at_80%_20%,rgba(237,184,11,0.16),transparent_36%)]"
        }
      />

      <div className="absolute inset-0 opacity-[0.10] shoji-grid" />
      <GrainOverlay />
    </div>
  );
}

function CameraAtmosphere() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const lensY = useTransform(scrollYProgress, [0, 1], ["-14%", "114%"]);
  const lensX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-6%", "5%", "-3%"],
  );
  const silkY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const beamRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  if (reduceMotion) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 hidden overflow-hidden opacity-55 md:block"
    >
      <motion.div
        style={{ y: lensY, x: lensX, rotate: beamRotate }}
        className="absolute left-[-12vw] top-[-20vh] h-[52vh] w-[124vw] bg-[radial-gradient(ellipse_at_center,rgba(237,184,11,0.095),rgba(237,184,11,0.028)_38%,transparent_70%)] blur-2xl"
      />

      <motion.div
        style={{ y: silkY }}
        className="absolute bottom-[-18vh] right-[-16vw] h-[46vh] w-[70vw] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(119,3,4,0.22),rgba(119,3,4,0.06)_42%,transparent_72%)] blur-3xl"
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_66%,rgba(0,0,0,0.12)_100%)]" />
    </div>
  );
}

function TallImageCard({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 1.05, ease: cinematicEase }}
      whileHover={{ y: -5, rotate: -0.25, scale: 1.006 }}
      className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.42)] backdrop-blur-xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 32vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,2,2,0.08),rgba(5,2,2,0.76)),radial-gradient(circle_at_top_right,rgba(237,184,11,0.2),transparent_35%)]" />
      <div className="absolute inset-4 rounded-[1.85rem] border border-white/10" />
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-[-35%] w-[24%] rotate-12 bg-gradient-to-r from-transparent via-white/14 to-transparent"
        animate={reduceMotion ? undefined : { x: ["0%", "560%"] }}
        transition={
          reduceMotion
            ? undefined
            : { duration: 7.5, repeat: Infinity, ease: "easeInOut" }
        }
      />
      <GrainOverlay />
    </motion.div>
  );
}

function GlassPanel({
  children,
  className = "",
  dark = true,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border shadow-[0_35px_90px_rgba(0,0,0,0.26)] backdrop-blur-2xl ${
        dark
          ? "border-white/10 bg-white/[0.07] text-white"
          : "border-[#770304]/10 bg-white/82 text-zinc-950"
      } ${className}`}
    >
      <div
        aria-hidden="true"
        className={`absolute right-[-6rem] top-[-6rem] h-56 w-56 rounded-full blur-3xl ${
          dark ? "bg-[#EDB80B]/16" : "bg-[#770304]/10"
        }`}
      />
      <div
        aria-hidden="true"
        className={`absolute bottom-[-5rem] left-[-5rem] h-52 w-52 rounded-full blur-3xl ${
          dark ? "bg-[#770304]/38" : "bg-[#EDB80B]/16"
        }`}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

function HeroProjectCard({ t, isArabic }: { t: SceneCopy; isArabic: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeScale}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, ease: cinematicEase, delay: 0.22 }}
      className="relative hidden lg:block"
    >
      <motion.div
        animate={reduceMotion ? undefined : slowFloat}
        transition={
          reduceMotion
            ? undefined
            : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <GlassPanel className={`p-5 ${isArabic ? "text-right" : ""}`}>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#EDB80B]">
            {t.hero.cardTitle}
          </p>

          <h2 className="mt-3 text-2xl font-black tracking-[-0.035em] text-white lg:text-3xl">
            {t.hero.cardText}
          </h2>

          <div className="mt-5 overflow-hidden rounded-[1.6rem] border border-white/10">
            <div className="relative h-[12.5rem] lg:h-[13.5rem]">
              <Image
                src={images.academic}
                alt={t.hero.cardTitle}
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/10 to-transparent" />
              <GrainOverlay />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {t.hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-3"
              >
                <p className="text-[9px] font-black uppercase tracking-[0.2em] text-white/42">
                  {stat.label}
                </p>
                <p className="mt-2 text-sm font-black leading-tight text-white/90">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </motion.div>
    </motion.div>
  );
}

function AcademicCard({
  title,
  text,
  label,
  dark = false,
  isArabic = false,
}: {
  title: string;
  text: string;
  label: string;
  dark?: boolean;
  isArabic?: boolean;
}) {
  return (
    <motion.div
      variants={fadeScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.86, ease: cinematicEase }}
      whileHover={{ y: -5, rotate: -0.25 }}
    >
      <GlassPanel dark={dark} className={`p-5 ${isArabic ? "text-right" : ""}`}>
        <div
          className={`inline-flex rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] ${
            dark ? "bg-[#EDB80B] text-black" : "bg-[#770304]/10 text-[#770304]"
          }`}
        >
          {label}
        </div>

        <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">{title}</h3>

        <p
          className={`mt-2 text-sm font-semibold leading-7 ${
            dark ? "text-white/62" : "text-zinc-600"
          }`}
        >
          {text}
        </p>
      </GlassPanel>
    </motion.div>
  );
}

function DocumentObject({
  checkpoint,
  isArabic = false,
}: {
  checkpoint: Checkpoint;
  isArabic?: boolean;
}) {
  return (
    <motion.div
      variants={fadeScale}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, ease: cinematicEase }}
      whileHover={{ y: -5, rotate: -0.25 }}
    >
      <GlassPanel className={`p-4 sm:p-5 ${isArabic ? "text-right" : ""}`}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex rounded-full bg-[#EDB80B] px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-black">
              {checkpoint.label}
            </div>

            <h3 className="mt-4 text-2xl font-black tracking-[-0.035em] text-white lg:text-[1.7rem]">
              {checkpoint.artifactTitle}
            </h3>

            <p className="mt-2 max-w-sm text-sm font-semibold leading-6 text-white/60">
              {checkpoint.artifactText}
            </p>
          </div>

          <div className="hidden h-16 w-16 shrink-0 rotate-[-8deg] items-center justify-center rounded-full border-2 border-[#EDB80B]/45 text-center text-[10px] font-black uppercase tracking-[0.16em] text-[#EDB80B] sm:flex">
            Yalla
            <br />
            China
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-[1.45rem] border border-white/10 bg-black/[0.12]">
          <div className="relative h-[10rem] sm:h-[11.5rem] lg:h-[11.5rem]">
            <Image
              src={checkpoint.image}
              alt={checkpoint.artifactTitle}
              fill
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.72)),radial-gradient(circle_at_top_right,rgba(237,184,11,0.24),transparent_36%)]" />
            <GrainOverlay />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2.5">
          {checkpoint.kind === "admission" &&
            ["UNI", "DOC", "OK"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-3 text-center text-[11px] font-black tracking-[0.16em] text-white/80"
              >
                {item}
              </div>
            ))}

          {checkpoint.kind === "visa" &&
            ["VISA", "CHECK", "RDV"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-3 text-center text-[11px] font-black tracking-[0.16em] text-white/80"
              >
                {item}
              </div>
            ))}

          {checkpoint.kind === "preparation" &&
            ["DOC", "TIME", "YC"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-3 text-center text-[11px] font-black tracking-[0.16em] text-white/80"
              >
                {item}
              </div>
            ))}

          {checkpoint.kind === "arrival" &&
            ["CAMPUS", "HOME", "READY"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-3 text-center text-[11px] font-black tracking-[0.16em] text-white/80"
              >
                {item}
              </div>
            ))}
        </div>
      </GlassPanel>
    </motion.div>
  );
}

function CheckpointScene({
  id,
  chapter,
  reverse = false,
  isArabic,
}: {
  id: string;
  chapter: Checkpoint;
  reverse?: boolean;
  isArabic: boolean;
}) {
  return (
    <SceneFrame id={id} className="bg-[#070303] text-white">
      <LuxuryBackground src={chapter.image} strength="deep" />

      <div
        className={`relative mx-auto grid lg:min-h-[100dvh] w-full max-w-[84rem] items-center gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:gap-8 lg:py-14 lg:grid-cols-[0.9fr_1.1fr] ${
          reverse ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
        }`}
      >
        <div className={reverse ? "lg:order-2" : ""}>
          <DocumentObject checkpoint={chapter} isArabic={isArabic} />
        </div>

        <motion.div
          variants={reverse ? fadeLeft : fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.868, ease: cinematicEase }}
          className={`${reverse ? "lg:order-1" : ""} ${isArabic ? "text-right" : ""}`}
        >
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#EDB80B]">
            {chapter.chapter}
          </p>

          <h2 className="display-title mt-5 max-w-4xl text-[1.95rem] font-black leading-[1] tracking-[-0.04em] text-white sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.6rem]">
            {chapter.title}
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
            {chapter.description}
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-5 grid gap-2.5 sm:grid-cols-2"
          >
            {chapter.items.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                transition={{ duration: 0.52, ease: cinematicEase }}
                className={`rounded-[1.2rem] border border-white/10 bg-white/[0.075] px-4 py-3 text-sm font-bold text-white/84 shadow-[0_16px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl ${
                  isArabic ? "text-right" : ""
                }`}
              >
                {item}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SceneFrame>
  );
}

export default function HomeLanding({ lang }: { lang: Locale | string }) {
  const safeLang = getSafeLang(lang);
  const t = copy[safeLang];
  const isArabic = t.dir === "rtl";
  const contactHref = `/${safeLang}/contact`;
  const applyHref = `/${safeLang}/apply`;
  const cities = getCitiesForLocale(safeLang).slice(0, 6);

  return (
    <div
      dir={t.dir}
      lang={safeLang}
      className="min-h-screen overflow-y-auto overflow-x-hidden scroll-smooth bg-[#050202] text-white [scrollbar-width:thin] [scrollbar-color:#EDB80B_#050202] lg:h-[100dvh] lg:snap-y lg:snap-proximity"
    >
      <CameraAtmosphere />

      <SceneFrame id="hero" className="bg-[#050202]">
        <LuxuryBackground src={images.hero} strength="dark" />

        <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[84rem] items-center gap-6 px-5 pb-14 pt-24 sm:px-8 sm:py-20 lg:min-h-[100dvh] lg:gap-8 lg:py-14 lg:grid-cols-[1.08fr_0.72fr]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className={`relative z-10 ${isArabic ? "text-right" : ""}`}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.86, ease: cinematicEase }}
              className="inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#EDB80B] shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl"
            >
              {t.hero.badge}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 1, ease: cinematicEase }}
              className="display-title mt-5 max-w-4xl text-[2.15rem] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[3rem] lg:text-[4rem] xl:text-[4.35rem]"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.9, ease: cinematicEase }}
              className="mt-5 max-w-2xl text-sm leading-7 text-white/76 sm:text-base lg:text-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.86, ease: cinematicEase }}
              className={`mt-7 flex flex-col gap-3 sm:flex-row ${
                isArabic ? "sm:justify-end" : ""
              }`}
            >
              <Link
                href={contactHref}
                className="rounded-full bg-gradient-to-r from-[#EDB80B] to-[#C59F41] px-8 py-4 text-center font-black text-black shadow-[0_22px_70px_rgba(237,184,11,0.32)] transition hover:-translate-y-1"
              >
                {t.hero.primary}
              </Link>

              <a
                href="#packs"
                className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
              >
                {t.hero.secondary}
              </a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.9, ease: cinematicEase }}
              className="mt-8 hidden max-w-3xl items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/65 xl:flex"
            >
              <span>{t.hero.start}</span>
              <span className="h-px flex-1 border-t border-dashed border-[#EDB80B]/65" />
              <motion.span
                animate={{ x: [0, 10, 0], y: [0, -3, 0] }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#EDB80B]"
              >
                →
              </motion.span>
              <span className="h-px flex-1 border-t border-dashed border-[#EDB80B]/65" />
              <span>{t.hero.end}</span>
            </motion.div>
          </motion.div>

          <HeroProjectCard t={t} isArabic={isArabic} />
        </div>
      </SceneFrame>

      <SceneFrame id="vision" className="bg-[#f4ede4] text-zinc-950">
        <LuxuryBackground src={images.vision} strength="cream" />

        <div className="relative mx-auto grid lg:min-h-[100dvh] w-full max-w-[84rem] items-center gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:gap-8 lg:py-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: cinematicEase }}
            className={isArabic ? "text-right" : ""}
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#770304]">
              {t.vision.chapter}
            </p>

            <h2 className="display-title mt-5 max-w-4xl text-[1.95rem] font-black leading-[1] tracking-[-0.04em] text-zinc-950 sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.6rem]">
              {t.vision.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg">
              {t.vision.description}
            </p>

            <div className="mt-8 rounded-[1.4rem] border border-[#770304]/10 bg-white/78 p-4 text-lg font-black text-[#770304] shadow-[0_24px_70px_rgba(54,1,2,0.08)] backdrop-blur-xl">
              {t.vision.note}
            </div>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <TallImageCard
              src={images.vision}
              alt={t.vision.title}
              className="h-[18rem] sm:h-[22rem] lg:h-[23rem]"
            />

            <AcademicCard
              title={t.vision.artifactTitle}
              text={t.vision.artifactText}
              label={getUiLabel(safeLang, "academicGoal")}
              isArabic={isArabic}
            />
          </div>
        </div>
      </SceneFrame>

      <SceneFrame id="doubts" className="bg-[#080303]">
        <LuxuryBackground src={images.family} strength="deep" />

        <div className="relative mx-auto grid lg:min-h-[100dvh] w-full max-w-[84rem] items-center gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:gap-8 lg:py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <TallImageCard
              src={images.family}
              alt={t.doubts.title}
              className="h-[18rem] sm:h-[22rem] lg:h-[23rem]"
            />
          </div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: cinematicEase }}
            className={isArabic ? "text-right" : ""}
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#EDB80B]">
              {t.doubts.chapter}
            </p>

            <h2 className="display-title mt-5 max-w-4xl text-[1.95rem] font-black leading-[1] tracking-[-0.04em] text-white sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.6rem]">
              {t.doubts.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              {t.doubts.description}
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {t.doubts.questions.map((question, index) => (
                <motion.article
                  key={question}
                  variants={fadeUp}
                  transition={{ duration: 0.65, ease: cinematicEase }}
                  whileHover={{ y: -5, scale: 1.01 }}
                  className={`rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-2xl ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#EDB80B] text-xs font-black text-black shadow-[0_0_40px_rgba(237,184,11,0.22)]">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-base font-black leading-tight text-white">
                    {question}
                  </h3>
                </motion.article>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SceneFrame>

      <SceneFrame id="method" className="bg-[#f4ede4] text-zinc-950">
        <LuxuryBackground src={images.method} strength="cream" />

        <div className="relative mx-auto grid lg:min-h-[100dvh] w-full max-w-[84rem] items-center gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:gap-8 lg:py-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <TallImageCard
              src={images.method}
              alt={t.method.title}
              className="h-[18rem] sm:h-[22rem] lg:h-[23rem]"
            />

            <AcademicCard
              title="Yalla China"
              text="Dream. Trust. Achieve."
              label={getUiLabel(safeLang, "academicGuide")}
              isArabic={isArabic}
            />
          </div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: cinematicEase }}
            className={isArabic ? "text-right" : ""}
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#770304]">
              {t.method.chapter}
            </p>

            <h2 className="display-title mt-5 max-w-4xl text-[1.95rem] font-black leading-[1] tracking-[-0.04em] text-zinc-950 sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.6rem]">
              {t.method.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg">
              {t.method.description}
            </p>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-5 grid gap-3"
            >
              {t.method.points.map((point) => (
                <motion.div
                  key={point.title}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: cinematicEase }}
                  className={`rounded-[1.4rem] border border-[#770304]/10 bg-white/78 p-4 shadow-[0_24px_70px_rgba(54,1,2,0.08)] backdrop-blur-xl ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <h3 className="text-lg font-black text-[#770304]">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-600">
                    {point.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SceneFrame>

      <CheckpointScene
        id="admission"
        chapter={t.checkpoints.admission}
        isArabic={isArabic}
      />

      <CheckpointScene
        id="visa"
        chapter={t.checkpoints.visa}
        reverse
        isArabic={isArabic}
      />

      <CheckpointScene
        id="preparation"
        chapter={t.checkpoints.preparation}
        isArabic={isArabic}
      />

      <SceneFrame id="arrival" className="bg-[#050202]">
        <LuxuryBackground src={images.arrival} strength="deep" />

        <div className="relative mx-auto grid w-full max-w-[84rem] items-center gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:min-h-[100dvh] lg:grid-cols-[1fr_0.92fr] lg:gap-8 lg:py-14">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.9, ease: cinematicEase }}
            className={isArabic ? "text-right" : ""}
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#EDB80B] sm:text-sm">
              {t.checkpoints.arrival.chapter}
            </p>

            <h2 className="display-title mt-5 max-w-4xl text-[1.95rem] font-black leading-[1] tracking-[-0.04em] text-white sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.6rem]">
              {t.checkpoints.arrival.title}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/72 sm:text-lg">
              {t.checkpoints.arrival.description}
            </p>

            <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {t.checkpoints.arrival.items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.08] px-3 py-3 text-sm font-bold text-white/84 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeScale}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: cinematicEase }}
            className="grid gap-4"
          >
            <DocumentObject
              checkpoint={t.checkpoints.arrival}
              isArabic={isArabic}
            />

            <GlassPanel className={`p-4 sm:p-5 ${isArabic ? "text-right" : ""}`}>
              <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#EDB80B] sm:text-xs">
                {t.hero.start} → {t.hero.end}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2">
                {cities.map((city) => (
                  <div
                    key={city}
                    className="rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-3 text-sm font-bold text-white/82"
                  >
                    {city}
                  </div>
                ))}
              </div>
            </GlassPanel>
          </motion.div>
        </div>
      </SceneFrame>

      <SceneFrame id="packs" className="bg-[#f4ede4] text-zinc-950">
        <LuxuryBackground src={images.academic} strength="cream" />

        <div className="relative mx-auto flex lg:min-h-[100dvh] w-full max-w-[84rem] flex-col justify-center px-5 py-16 sm:px-8 sm:py-20 lg:py-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.86, ease: cinematicEase }}
            className={`mx-auto max-w-3xl text-center ${isArabic ? "lg:text-right" : ""}`}
          >
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#770304]">
              {t.packs.chapter}
            </p>

            <h2 className="display-title mt-5 text-[1.95rem] font-black leading-[1] tracking-[-0.04em] text-zinc-950 sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.6rem]">
              {t.packs.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-zinc-700 sm:text-lg">
              {t.packs.description}
            </p>
          </motion.div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {[t.packs.standard, t.packs.premium].map((pack, index) => {
              const featured = index === 1;

              return (
                <motion.article
                  key={pack.name}
                  variants={index === 0 ? fadeLeft : fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.86, ease: cinematicEase }}
                  whileHover={{ y: -7, scale: 1.006 }}
                  className={`relative overflow-hidden rounded-[2rem] p-5 sm:p-6 shadow-[0_35px_90px_rgba(54,1,2,0.14)] ${
                    featured
                      ? "bg-gradient-to-br from-[#770304] via-[#5a0203] to-[#120303] text-white"
                      : "border border-[#770304]/10 bg-white/90 text-zinc-950"
                  } ${isArabic ? "text-right" : ""}`}
                >
                  <div
                    className={`absolute right-[-5rem] top-[-5rem] h-56 w-56 rounded-full blur-3xl ${
                      featured ? "bg-[#EDB80B]/24" : "bg-[#770304]/10"
                    }`}
                  />

                  <div className="relative">
                    <span
                      className={`inline-flex rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] ${
                        featured
                          ? "bg-[#EDB80B] text-black"
                          : "bg-[#770304]/10 text-[#770304]"
                      }`}
                    >
                      {pack.tag}
                    </span>

                    <h3 className="mt-4 text-2xl font-black sm:text-3xl">{pack.name}</h3>

                    <p
                      className={`mt-2 text-4xl font-black tracking-[-0.05em] sm:text-[2.75rem] ${
                        featured ? "text-[#EDB80B]" : "text-[#770304]"
                      }`}
                    >
                      {pack.price}
                    </p>

                    <p
                      className={`mt-3 text-sm leading-7 sm:text-base ${
                        featured ? "text-white/72" : "text-zinc-600"
                      }`}
                    >
                      {pack.desc}
                    </p>

                    <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {pack.items.map((item) => (
                        <div
                          key={item}
                          className={`rounded-2xl px-4 py-2.5 text-sm font-bold ${
                            featured
                              ? "bg-white/[0.07] text-white/82"
                              : "bg-[#770304]/5 text-zinc-700"
                          }`}
                        >
                          ✓ {item}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={contactHref}
                      className={`mt-5 inline-flex w-full justify-center rounded-full px-6 py-3.5 text-center font-black transition hover:-translate-y-1 ${
                        featured
                          ? "bg-[#EDB80B] text-black shadow-[0_22px_55px_rgba(237,184,11,0.25)]"
                          : "bg-[#770304] text-white shadow-[0_22px_55px_rgba(119,3,4,0.22)]"
                      }`}
                    >
                      {pack.cta}
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </SceneFrame>

      <SceneFrame id="final" className="bg-[#050202]">
        <LuxuryBackground src={images.hero} strength="deep" />

        <div className="relative mx-auto flex lg:min-h-[100dvh] w-full max-w-[84rem] flex-col items-center justify-center px-5 py-16 text-center sm:px-8 sm:py-20 lg:py-14">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: cinematicEase }}
            className="text-sm font-black uppercase tracking-[0.28em] text-[#EDB80B]"
          >
            {t.final.chapter}
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: cinematicEase,
              delay: 0.08,
            }}
            className="display-title mt-5 max-w-4xl text-[2.15rem] font-black leading-[0.98] tracking-[-0.045em] text-white sm:text-[3rem] lg:text-[3.85rem] xl:text-[4.2rem]"
          >
            {t.final.title}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: cinematicEase,
              delay: 0.16,
            }}
            className="mt-5 max-w-2xl text-base leading-7 text-white/74 sm:text-lg"
          >
            {t.final.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: cinematicEase,
              delay: 0.24,
            }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href={contactHref}
              className="rounded-full bg-gradient-to-r from-[#EDB80B] to-[#C59F41] px-8 py-4 text-center font-black text-black shadow-[0_22px_70px_rgba(237,184,11,0.32)] transition hover:-translate-y-1"
            >
              {t.final.primary}
            </Link>

            <Link
              href={applyHref}
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
            >
              {t.final.secondary}
            </Link>
          </motion.div>
        </div>
      </SceneFrame>
    </div>
  );
}
