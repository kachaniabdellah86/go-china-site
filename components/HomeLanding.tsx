import Image from "next/image";
import Container from "@/components/Container";
import FounderStories from "@/components/FounderStories";
import HomeProofSection from "@/components/HomeProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustIndicators from "@/components/TrustIndicators";
import Link from "next/link";
import { founderName, Locale, supportedCities } from "@/lib/yalla";

type Copy = {
  dir: "ltr" | "rtl";
  hero: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    primary: string;
    secondary: string;
    cards: { label: string; value: string }[];
    sideEyebrow: string;
    sideTitle: string;
    sideText: string;
    sideItems: string[];
  };
  reasons: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; desc: string }[];
  };
  path: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; desc: string }[];
    coverageEyebrow: string;
    coverageTitle: string;
    coverageText: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    items: { question: string; answer: string }[];
    primary: string;
    secondary: string;
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    hero: {
      badge: "YALLA CHINA • Orientation • Admission • Visa • Arrivée",
      eyebrow: "Agence sérieuse pour études en Chine",
      title:
        "Un accompagnement premium pour choisir la bonne université, sécuriser le visa et arriver en Chine avec une vraie présence humaine.",
      description:
        "Yalla China aide les étudiants marocains à étudier en Chine avec une méthode claire: orientation, admission, visa, billet, départ et accompagnement jusqu'à l'université selon la formule choisie.",
      note: `${founderName} a étudié en Chine. Cette expérience vécue devient aujourd'hui un cadre rassurant pour les familles qui veulent une bourse, une bonne université et un accompagnement fiable.`,
      primary: "Réserver une consultation gratuite",
      secondary: "Comparer les packs",
      cards: [
        {
          label: "Priorité des familles",
          value: "Bourse, université sérieuse, accompagnement fiable",
        },
        {
          label: "Différenciateur",
          value: "Expérience personnelle réelle en Chine",
        },
        {
          label: "Promesse",
          value: "Du premier échange jusqu'à l'arrivée",
        },
      ],
      sideEyebrow: "Pourquoi la marque inspire confiance",
      sideTitle: "Un seul projet, trois points décisifs pour la famille.",
      sideText:
        "Le site doit répondre immédiatement à ce que les parents et l'étudiant veulent savoir avant d'avancer: qui vous guide, ce qui est inclus, et ce qui se passe après l'admission.",
      sideItems: [
        "Consultation gratuite avant tout engagement",
        "Admission, visa et service portés comme trois engagements visibles",
        "Pack 1 pour le dossier et le visa, Pack 2 jusqu'au départ et au transfert",
        "Communication directe sur WhatsApp et accompagnement jusqu'à l'université",
      ],
    },
    reasons: {
      eyebrow: "Pourquoi les familles nous choisissent",
      title:
        "La confiance vient quand l'offre répond aux vraies objections, pas quand elle enrobe le projet.",
      description:
        "Les questions reviennent toujours: qualité du service, qualité de l'université, communication, visa, voyage, hôtel, transport, arrivée. La réponse doit être claire avant la vente.",
      items: [
        {
          title: "Une personne qui connaît la Chine de l'intérieur",
          desc: "Le projet n'est pas porté par un simple intermédiaire. Il est guidé par une expérience vécue sur place.",
        },
        {
          title: "Des offres faciles à lire",
          desc: "Les familles voient vite la différence entre le cadre dossier/visa et la formule qui accompagne aussi le départ et l'arrivée.",
        },
        {
          title: "Un vrai travail sur la qualité des choix",
          desc: "L'étudiant ne cherche pas seulement à partir. Il cherche la bonne université, la bonne ville et un accompagnement sérieux.",
        },
        {
          title: "Une arrivée préparée, pas laissée au hasard",
          desc: "Transport aéroport-université, aide voyage et repères d'arrivée sont traités comme des éléments de confiance, pas comme des détails.",
        },
      ],
    },
    path: {
      eyebrow: "Le parcours Yalla China",
      title: "Un parcours lisible avant paiement, avant dossier, avant départ.",
      description:
        "Le rôle du site est de rendre visible la séquence complète pour l'étudiant et pour ses parents. Quand le chemin est clair, la décision devient plus simple.",
      steps: [
        {
          title: "01. Consultation et diagnostic",
          desc: "Nous clarifions le profil, les attentes de la famille, la logique bourse/université et le niveau d'accompagnement utile.",
        },
        {
          title: "02. Orientation et universités",
          desc: "Nous ciblons les villes et les universités adaptées au projet avant de lancer le dossier.",
        },
        {
          title: "03. Dossier, traduction et admission",
          desc: "Le Pack 1 structure le dossier, les traductions, l'inscription universitaire et le suivi d'admission.",
        },
        {
          title: "04. Visa et départ",
          desc: "Le visa, la préparation du voyage et les étapes sensibles sont accompagnés avec méthode.",
        },
        {
          title: "05. Arrivée et accompagnement",
          desc: "Le Pack 2 prolonge la prise en charge jusqu'au transfert aéroport-université et aux premiers repères sur place.",
        },
      ],
      coverageEyebrow: "Villes suivies",
      coverageTitle: "Une présence pensée autour des destinations demandées par les familles.",
      coverageText:
        "Chongqing, Nanchang, Ningbo, Harbin, Xi'an, Chengdu et Zhejiang font partie des principaux points d'accompagnement présentés sur le site.",
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les réponses qu'une famille veut lire avant de décider.",
      description:
        "Le premier niveau de confiance se construit quand le site répond clairement aux questions sur la bourse, le coût, le visa et l'arrivée.",
      items: [
        {
          question: "Comment savoir si une bourse est réaliste pour mon profil ?",
          answer:
            "La consultation gratuite sert précisément à évaluer le profil, la logique de bourse et le niveau d'opportunité avant d'engager le dossier.",
        },
        {
          question: "Que comprend réellement chaque pack ?",
          answer:
            "Le Pack 1 couvre le dossier, la traduction, l'inscription et le visa. Le Pack 2 prolonge l'accompagnement jusqu'au voyage et à l'arrivée.",
        },
        {
          question: "Que se passe-t-il après l'arrivée en Chine ?",
          answer:
            "La logique du site est de montrer que l'arrivée n'est pas laissée au hasard, surtout avec l'accompagnement transport et repères du Pack 2.",
        },
      ],
      primary: "Voir la FAQ complète",
      secondary: "Parler à l'équipe",
    },
    cta: {
      eyebrow: "Commencer sérieusement",
      title:
        "Commencez par la consultation gratuite, puis avancez avec le pack qui correspond réellement à votre situation.",
      description:
        "L'objectif du premier échange est simple: comprendre le dossier, rassurer la famille, vérifier le niveau d'opportunité, puis recommander la bonne formule.",
      primary: "Demander ma consultation gratuite",
      secondary: "Lancer ma candidature",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "YALLA CHINA • Orientation • Admission • Visa • Arrival",
      eyebrow: "Serious study guidance for China",
      title:
        "A premium support journey to choose the right university, secure the visa, and arrive in China with real human guidance.",
      description:
        "Yalla China helps Moroccan students study in China through a clear method: orientation, admission, visa, ticket support, departure, and university arrival support depending on the chosen package.",
      note: `${founderName} studied in China. That lived experience now becomes a reassuring framework for families looking for scholarship options, a strong university, and support they can trust.`,
      primary: "Book a free consultation",
      secondary: "Compare the packages",
      cards: [
        {
          label: "What families want",
          value: "Scholarship options, a strong university, and trusted support",
        },
        {
          label: "What makes us different",
          value: "Real personal experience of studying in China",
        },
        {
          label: "What we promise",
          value: "Guidance from first contact to arrival",
        },
      ],
      sideEyebrow: "Why the brand feels trustworthy",
      sideTitle: "One project, three decisive questions for the family.",
      sideText:
        "The website should answer what parents and students need immediately before they move: who guides you, what is included, and what happens after admission.",
      sideItems: [
        "Free consultation before any commitment",
        "Admission, visa, and service carried as three visible commitments",
        "Package 1 for the file and visa, Package 2 through departure and transfer",
        "Direct WhatsApp communication and support until the university",
      ],
    },
    reasons: {
      eyebrow: "Why families choose us",
      title:
        "Trust grows when the offer answers real objections instead of decorating the project.",
      description:
        "The same concerns come back every time: service quality, university quality, communication, visa, travel, hotel, transport, arrival. The answer should be visible before the sale.",
      items: [
        {
          title: "A founder who knows China from the inside",
          desc: "The project is not led by a generic middleman. It is guided by lived experience on the ground.",
        },
        {
          title: "Packages that are easy to read",
          desc: "Families quickly see the difference between the file/visa framework and the formula that also covers departure and arrival.",
        },
        {
          title: "A serious focus on quality choices",
          desc: "The student is not only trying to leave. They are trying to reach the right university, the right city, and a trustworthy support system.",
        },
        {
          title: "Arrival support that is not left to chance",
          desc: "Airport-to-university transport, travel help, and arrival landmarks are treated as trust elements, not as extras.",
        },
      ],
    },
    path: {
      eyebrow: "The Yalla China path",
      title: "A readable route before payment, before the file, and before departure.",
      description:
        "The role of the site is to make the full sequence visible for the student and for the parents. When the route is clear, the decision becomes easier.",
      steps: [
        {
          title: "01. Consultation and diagnosis",
          desc: "We clarify the profile, the family concerns, the scholarship/university logic, and the useful support level.",
        },
        {
          title: "02. Orientation and university targeting",
          desc: "We target the right cities and universities before the file begins.",
        },
        {
          title: "03. File, translation, and admission",
          desc: "Package 1 structures the file, translations, university registration, and admission follow-up.",
        },
        {
          title: "04. Visa and departure",
          desc: "The visa, travel preparation, and the sensitive stages are handled with method.",
        },
        {
          title: "05. Arrival and accompaniment",
          desc: "Package 2 extends support through airport-to-university transfer and the first landmarks on the ground.",
        },
      ],
      coverageEyebrow: "Cities covered",
      coverageTitle: "A presence built around the destinations families ask for most.",
      coverageText:
        "Chongqing, Nanchang, Ningbo, Harbin, Xi'an, Chengdu, and Zhejiang are among the main destinations highlighted across the site.",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "The answers a family wants to read before making a decision.",
      description:
        "The first layer of trust is built when the site answers scholarship, cost, visa, and arrival questions clearly.",
      items: [
        {
          question: "How do I know whether a scholarship is realistic for my profile?",
          answer:
            "The free consultation exists precisely to assess the profile, the scholarship logic, and the real level of opportunity before the file starts.",
        },
        {
          question: "What is actually included in each package?",
          answer:
            "Package 1 covers the file, translation, registration, and visa. Package 2 extends the support through travel and arrival.",
        },
        {
          question: "What happens after arrival in China?",
          answer:
            "The site is structured to show that arrival is not left to chance, especially with the transfer and on-ground support logic of Package 2.",
        },
      ],
      primary: "View the full FAQ",
      secondary: "Talk with the team",
    },
    cta: {
      eyebrow: "Start seriously",
      title:
        "Begin with the free consultation, then move forward with the package that truly fits your situation.",
      description:
        "The first exchange has one goal: understand the file, reassure the family, evaluate the opportunity, and recommend the right formula.",
      primary: "Request my free consultation",
      secondary: "Start my application",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "YALLA CHINA • توجيه • قبول • تأشيرة • وصول",
      eyebrow: "وكالة جادة للدراسة في الصين",
      title:
        "مرافقة مميزة لاختيار الجامعة المناسبة وتأمين التأشيرة والوصول إلى الصين مع حضور إنساني حقيقي في كل مرحلة.",
      description:
        "يلا تشاينا تساعد الطلبة المغاربة على الدراسة في الصين عبر مسار واضح: توجيه، قبول، تأشيرة، مساعدة في التذكرة، سفر، ومرافقة حتى الجامعة حسب الباقة المختارة.",
      note: `${founderName} درس في الصين، وهذه التجربة الحقيقية أصبحت اليوم إطاراً مطمئناً للعائلات التي تبحث عن منحة وجامعة جيدة ومرافقة يمكن الوثوق بها.`,
      primary: "احجز استشارة مجانية",
      secondary: "قارن بين الباقات",
      cards: [
        {
          label: "ما الذي تبحث عنه العائلة",
          value: "منحة أو جامعة قوية أو مرافقة موثوقة",
        },
        {
          label: "ما الذي يميزنا",
          value: "تجربة شخصية حقيقية في الدراسة داخل الصين",
        },
        {
          label: "وعدنا",
          value: "مرافقة من أول تواصل إلى الوصول",
        },
      ],
      sideEyebrow: "لماذا تبدو العلامة موثوقة",
      sideTitle: "مشروع واحد وثلاثة أسئلة حاسمة عند العائلة.",
      sideText:
        "الموقع يجب أن يجيب بسرعة عما يريد الوالدان والطالب معرفته قبل أي خطوة: من يرافقكم، ماذا يشمل العرض، وما الذي يحدث بعد القبول.",
      sideItems: [
        "استشارة مجانية قبل أي التزام",
        "القبول والتأشيرة والخدمة تظهر كثلاثة التزامات واضحة",
        "الباقة 1 للملف والتأشيرة، والباقـة 2 حتى السفر والنقل إلى الجامعة",
        "تواصل مباشر على واتساب ومرافقة حتى الجامعة",
      ],
    },
    reasons: {
      eyebrow: "لماذا تختارنا العائلات",
      title:
        "الثقة تظهر عندما يجيب العرض عن الاعتراضات الحقيقية بدل الاكتفاء بالكلام العام.",
      description:
        "نفس الأسئلة تتكرر دائماً: جودة الخدمة، جودة الجامعة، التواصل، التأشيرة، السفر، الفندق، النقل، والوصول. لذلك يجب أن تكون الإجابة واضحة قبل البيع.",
      items: [
        {
          title: "مؤسس يعرف الصين من الداخل",
          desc: "المشروع لا يقوده وسيط عام، بل خبرة شخصية حقيقية على الأرض.",
        },
        {
          title: "باقات سهلة الفهم",
          desc: "العائلة تفهم بسرعة الفرق بين إطار الملف والتأشيرة وبين الصيغة التي تواكب أيضاً السفر والوصول.",
        },
        {
          title: "تركيز جدي على جودة الاختيار",
          desc: "الطالب لا يريد فقط أن يسافر، بل يريد الجامعة الصحيحة والمدينة المناسبة ومرافقة موثوقة.",
        },
        {
          title: "الوصول ليس تفصيلاً ثانوياً",
          desc: "النقل من المطار إلى الجامعة ومساعدة السفر وأول الخطوات في الصين تُعامل كجزء من الثقة، لا كإضافة هامشية.",
        },
      ],
    },
    path: {
      eyebrow: "مسار يلا تشاينا",
      title: "طريق واضح قبل الدفع وقبل الملف وقبل السفر.",
      description:
        "دور الموقع هو أن يجعل المسار الكامل مفهوماً للطالب ولأسرته. عندما يصبح الطريق واضحاً، يصبح القرار أسهل.",
      steps: [
        {
          title: "01. الاستشارة والتشخيص",
          desc: "نوضح الملف وتوقعات العائلة ومنطق المنحة أو الجامعة ومستوى المرافقة المناسب.",
        },
        {
          title: "02. التوجيه واختيار الجامعات",
          desc: "نحدد المدن والجامعات المناسبة قبل إطلاق الملف.",
        },
        {
          title: "03. الملف والترجمة والقبول",
          desc: "الباقة 1 تنظّم الملف والترجمة والتسجيل الجامعي ومتابعة القبول.",
        },
        {
          title: "04. التأشيرة والسفر",
          desc: "التأشيرة والتحضير للسفر والمراحل الحساسة تتم متابعتها بمنهج واضح.",
        },
        {
          title: "05. الوصول والمرافقة",
          desc: "الباقة 2 تواصل المتابعة حتى النقل من المطار إلى الجامعة وأول الخطوات على الأرض.",
        },
      ],
      coverageEyebrow: "المدن التي نتابعها",
      coverageTitle: "حضور مبني حول الوجهات التي تطلبها العائلات أكثر.",
      coverageText:
        "تشونغتشينغ ونانتشانغ ونينغبو وهاربين وشيآن وتشنغدو وتشجيانغ من أبرز المدن التي تظهر داخل الموقع كوجهات خدمة أساسية.",
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "الأجوبة التي تريد العائلة قراءتها قبل اتخاذ القرار.",
      description:
        "الطبقة الأولى من الثقة تبدأ عندما يجيب الموقع بوضوح عن أسئلة المنحة والتكلفة والتأشيرة والوصول.",
      items: [
        {
          question: "كيف أعرف إن كانت المنحة واقعية بالنسبة إلى ملفي؟",
          answer:
            "الاستشارة المجانية موجودة أساسا لتقييم الملف ومنطق المنحة ومستوى الفرصة قبل بدء الملف الكامل.",
        },
        {
          question: "ماذا تتضمن كل باقة فعلا؟",
          answer:
            "الباقة 1 تشمل الملف والترجمة والتسجيل والتأشيرة، أما الباقة 2 فتمدّد المرافقة حتى السفر والوصول.",
        },
        {
          question: "ماذا يحدث بعد الوصول إلى الصين؟",
          answer:
            "هيكلة الموقع تبيّن أن الوصول ليس مرحلة مجهولة، خصوصا مع منطق النقل والمرافقة على الأرض داخل الباقة 2.",
        },
      ],
      primary: "شاهد الأسئلة كاملة",
      secondary: "تحدث مع الفريق",
    },
    cta: {
      eyebrow: "ابدأ بشكل جدي",
      title:
        "ابدأ بالاستشارة المجانية ثم تقدّم مع الباقة التي تناسب وضعك فعلاً.",
      description:
        "هدف أول تواصل واضح: فهم الملف، طمأنة العائلة، تقييم الفرصة، ثم اقتراح الصيغة المناسبة.",
      primary: "اطلب استشارتي المجانية",
      secondary: "ابدأ التقديم",
    },
  },
};

export default function HomeLanding({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const contactHref = `/${lang}/contact`;
  const applyHref = `/${lang}/apply`;
  const servicesHref = `/${lang}/services`;
  const faqHref = `/${lang}/faq`;
  const heroImageAlt =
    lang === "fr"
      ? "Accompagnement Yalla China pour étudier en Chine"
      : lang === "en"
        ? "Yalla China guidance for studying in China"
        : "مرافقة يلا تشاينا للدراسة في الصين";
  const pathImageAlt =
    lang === "fr"
      ? "Parcours Yalla China jusqu'à l'arrivée"
      : lang === "en"
        ? "Yalla China journey through arrival"
        : "مسار يلا تشاينا حتى الوصول";

  return (
    <main className="bg-[#050505] text-white" dir={t.dir} lang={lang}>
      <section className="relative overflow-hidden bg-[#120405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(119,3,4,0.8),transparent_28%),radial-gradient(circle_at_88%_12%,rgba(177,127,2,0.18),transparent_24%),linear-gradient(135deg,#100203_0%,#25080b_38%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#B17F02]/12 blur-3xl drift-slow" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-[#770304]/35 blur-3xl" />

        <Container>
          <div className="relative py-12 sm:py-16 lg:py-24">
            <div className="grid gap-8 lg:gap-10 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
              <div
                className={`space-y-7 animate-fade-in-up ${
                  isArabic ? "text-right" : "text-center xl:text-left"
                }`}
              >
                <p className="section-eyebrow inline-flex max-w-full flex-wrap justify-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/88 sm:text-xs sm:tracking-[0.22em] xl:justify-start xl:text-left">
                  {t.hero.badge}
                </p>

                <div className="space-y-4">
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.3em] text-[#EDB80B]">
                    {t.hero.eyebrow}
                  </p>
                  <h1
                    className={`display-title text-[2.35rem] font-black leading-[0.98] tracking-[-0.04em] sm:text-[3.35rem] lg:text-6xl xl:text-7xl ${
                      isArabic ? "max-w-4xl" : "mx-auto max-w-4xl xl:mx-0"
                    }`}
                  >
                    {t.hero.title}
                  </h1>
                </div>

                <p
                  className={`max-w-2xl text-base leading-8 text-white/78 sm:text-lg ${
                    isArabic ? "" : "mx-auto xl:mx-0"
                  }`}
                >
                  {t.hero.description}
                </p>

                <p
                  className={`max-w-2xl text-sm font-medium leading-7 text-white/62 ${
                    isArabic ? "" : "mx-auto xl:mx-0"
                  }`}
                >
                  {t.hero.note}
                </p>

                <div
                  className={`flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap ${
                    isArabic
                      ? "sm:justify-end"
                      : "mx-auto items-stretch xl:mx-0 sm:items-center"
                  }`}
                >
                  <Link
                    href={contactHref}
                    data-track="home_hero_primary_cta"
                    data-track-value={lang}
                    className="w-full rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(177,127,2,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_45px_rgba(177,127,2,0.45)] sm:w-auto"
                  >
                    {t.hero.primary}
                  </Link>

                  <Link
                    href={servicesHref}
                    data-track="home_hero_secondary_cta"
                    data-track-value={lang}
                    className="w-full rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14 sm:w-auto"
                  >
                    {t.hero.secondary}
                  </Link>
                </div>

                <div
                  className={`grid gap-3 sm:grid-cols-2 xl:grid-cols-3 ${
                    isArabic ? "" : "mx-auto max-w-xl xl:mx-0 xl:max-w-none"
                  }`}
                >
                  {t.hero.cards.map((item) => (
                    <article
                      key={item.label}
                      className={`rounded-[1.8rem] border border-white/10 bg-black/25 p-4 backdrop-blur-md ${
                        isArabic ? "text-right" : ""
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-2 text-sm leading-7 text-white/66">{item.value}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(237,184,11,0.14),transparent_35%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_40%)]" />

                <div className="relative overflow-hidden rounded-[2.3rem] border border-white/12 bg-black/30 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                  <div className="relative h-[20rem] overflow-hidden sm:h-[27rem]">
                    <Image
                      src="/fr-services-hero.jpg"
                      alt={heroImageAlt}
                      fill
                      priority
                      sizes="(max-width: 1023px) 100vw, 44vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div
                      className={`absolute left-5 right-5 top-5 flex ${
                        isArabic ? "justify-end" : "justify-start"
                      }`}
                    >
                      <span className="section-eyebrow rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                        {t.hero.sideEyebrow}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`space-y-4 p-5 sm:p-6 ${
                      isArabic ? "text-right" : "text-center sm:text-left"
                    }`}
                  >
                    <h2 className="display-title text-2xl font-black leading-tight text-white">
                      {t.hero.sideTitle}
                    </h2>
                    <p className="text-sm leading-7 text-white/72">{t.hero.sideText}</p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {t.hero.sideItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3 text-sm font-medium text-white/88"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4ede4] py-14 text-zinc-900 sm:py-18">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div
              className={`rounded-[2.3rem] border border-zinc-200 bg-white p-7 shadow-[0_25px_60px_rgba(15,23,42,0.06)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#770304]">
                {t.reasons.eyebrow}
              </p>
              <h2 className="display-title mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {t.reasons.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-zinc-600 sm:text-base">
                {t.reasons.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.reasons.items.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] ${
                      isArabic ? "ml-auto" : ""
                    }`}
                  />
                  <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <TrustIndicators lang={lang} />

      <HomeProofSection lang={lang} />

      <section className="bg-[#080808] py-14 sm:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div
              className={`space-y-6 ${
                isArabic ? "text-right" : "text-center lg:text-left"
              }`}
            >
              <div>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
                  {t.path.eyebrow}
                </p>
                <h2 className="display-title mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {t.path.title}
                </h2>
                <p
                  className={`mt-4 max-w-2xl text-base leading-8 text-white/70 ${
                    isArabic ? "" : "mx-auto lg:mx-0"
                  }`}
                >
                  {t.path.description}
                </p>
              </div>

              <div className="space-y-4">
                {t.path.steps.map((step) => (
                  <article
                    key={step.title}
                    className={`rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.16)] ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/68">{step.desc}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#180607] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,184,11,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.25),transparent_34%)]" />
                <div className="absolute inset-0 opacity-20 shoji-grid" />
                <div className="relative space-y-5">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10">
                    <div className="relative h-[18rem] w-full sm:h-[22rem]">
                      <Image
                        src="/fr-apply-hero.jpg"
                        alt={pathImageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={`space-y-3 px-2 ${isArabic ? "text-right" : ""}`}>
                    <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                      {t.path.coverageEyebrow}
                    </p>
                    <h3 className="display-title text-2xl font-black leading-tight">
                      {t.path.coverageTitle}
                    </h3>
                    <p className="text-sm leading-7 text-white/72">{t.path.coverageText}</p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {supportedCities[lang].map((city) => (
                      <div
                        key={city}
                        className={`rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/84 ${
                          isArabic ? "text-right" : ""
                        }`}
                      >
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TestimonialsSection lang={lang} />

      <FounderStories lang={lang} />

      <section className="bg-[#f4ede4] py-14 text-zinc-900 sm:py-18">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.94fr_1.06fr]">
            <div
              className={`rounded-[2.3rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#770304]">
                {t.faq.eyebrow}
              </p>
              <h2 className="display-title mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {t.faq.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-zinc-600 sm:text-base">
                {t.faq.description}
              </p>

              <div
                className={`mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
                  isArabic ? "sm:justify-end" : ""
                }`}
              >
                <Link
                  href={faqHref}
                  data-track="home_faq_primary_cta"
                  data-track-value={lang}
                  className="rounded-full bg-[#770304] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#5a0203]"
                >
                  {t.faq.primary}
                </Link>
                <Link
                  href={contactHref}
                  data-track="home_faq_secondary_cta"
                  data-track-value={lang}
                  className="rounded-full border border-zinc-200 bg-[#faf7f3] px-6 py-3 text-center font-medium text-zinc-800 transition hover:bg-white"
                >
                  {t.faq.secondary}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {t.faq.items.map((item) => (
                <article
                  key={item.question}
                  className={`rounded-[1.8rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold text-zinc-900">{item.question}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-br from-[#770304] via-[#5a0203] to-[#0a0a0a] py-14 sm:py-18">
        <Container>
          <div className="rounded-[2.5rem] border border-white/10 bg-black/20 p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className={isArabic ? "text-right" : "text-center lg:text-left"}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#B17F02]">
                  {t.cta.eyebrow}
                </p>
                <h2 className="display-title mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  {t.cta.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
                  {t.cta.description}
                </p>
              </div>

              <div
                className={`flex flex-col gap-3 ${
                  isArabic ? "sm:items-end" : "mx-auto w-full max-w-sm lg:mx-0"
                }`}
              >
                <Link
                  href={contactHref}
                  data-track="home_final_primary_cta"
                  data-track-value={lang}
                  className="w-full rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(177,127,2,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_45px_rgba(177,127,2,0.45)] sm:w-auto"
                >
                  {t.cta.primary}
                </Link>

                <Link
                  href={applyHref}
                  data-track="home_final_secondary_cta"
                  data-track-value={lang}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:border-white/30 hover:bg-white/15 sm:w-auto"
                >
                  {t.cta.secondary}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
