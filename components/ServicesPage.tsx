import Image from "next/image";
import Container from "@/components/Container";
import HomeProofSection from "@/components/HomeProofSection";
import Link from "next/link";
import { founderName, Locale, supportedCities } from "@/lib/yalla";

type Copy = {
  dir: "ltr" | "rtl";
  hero: {
    badge: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    stats: { label: string; value: string }[];
    panelEyebrow: string;
    panelTitle: string;
    panelText: string;
    panelItems: string[];
  };
  clarity: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; desc: string }[];
  };
  framework: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { question: string; answer: string }[];
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
      badge: "Services • Packs • Consultation gratuite",
      title:
        "Une offre pensée pour convaincre les familles sérieuses, pas pour noyer l'étudiant dans des promesses floues.",
      description:
        "Cette page présente clairement ce que Yalla China fait: orientation, choix des universités, dossier, traduction, admission, visa, billet, transfert et accompagnement selon la formule choisie.",
      primary: "Réserver une consultation gratuite",
      secondary: "Commencer ma candidature",
      stats: [
        { label: "Fondateur", value: founderName },
        { label: "Positionnement", value: "Études en Chine avec accompagnement réel" },
        { label: "Couverture", value: "Du premier échange à l'arrivée" },
      ],
      panelEyebrow: "Ce que la famille comprend ici",
      panelTitle: "Quel pack choisir, ce qui est inclus et comment le projet avance ensuite.",
      panelText:
        "Le but n'est pas seulement d'afficher des services. Le but est d'aider la famille à décider avec plus de clarté et moins d'incertitude.",
      panelItems: [
        "Pack 1 pour dossier, traduction, visa et inscription",
        "Pack 2 pour prolonger la prise en charge jusqu'au transport vers l'université",
        "Engagements visibles autour de l'admission, du visa et de la qualité de service",
      ],
    },
    clarity: {
      eyebrow: "Pourquoi cette page convertit mieux",
      title: "Une agence sérieuse doit expliquer le périmètre du service avant de parler d'achat.",
      description:
        "Le site devient plus crédible lorsque l'étudiant et les parents voient immédiatement ce qui est pris en charge, ce qui distingue les packs, et ce qui rassure après l'admission.",
      items: [
        {
          title: "Pour les parents",
          desc: "Le niveau de suivi, la logique du visa et l'accompagnement au voyage sont visibles dès cette page.",
        },
        {
          title: "Pour l'étudiant",
          desc: "Le parcours devient concret: consultation, université, dossier, admission, visa, voyage, arrivée.",
        },
        {
          title: "Pour la décision",
          desc: "Le choix entre les deux packs devient compréhensible en peu de temps, sans jargon inutile.",
        },
      ],
    },
    framework: {
      eyebrow: "Ce que nous cadrons",
      title: "Le service ne s'arrête pas à la paperasse. Il traite aussi les zones de stress autour du départ.",
      description:
        "Les objections principales sont connues. Elles doivent donc apparaître clairement dans l'architecture de la page.",
      items: [
        "Qualité du service et clarté de communication",
        "Qualité de l'université et cohérence du choix",
        "Admission, visa et traduction des documents",
        "Réservation du billet, transport et arrivée à l'université",
        "Accompagnement humain pour le parent autant que pour l'étudiant",
        "Présentation des villes suivies pour ancrer le projet dans le réel",
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les réponses utiles avant de choisir une formule",
      items: [
        {
          question: "Comment choisir entre le Pack 1 et le Pack 2 ?",
          answer:
            "Le plus simple est de commencer par la consultation gratuite. Nous regardons le budget, le niveau d'autonomie recherché et les attentes des parents avant de recommander la formule adaptée.",
        },
        {
          question: "Le visa fait-il partie du service ?",
          answer:
            "Oui. Le visa fait partie du cœur de l'accompagnement, au même titre que le dossier et l'inscription universitaire.",
        },
        {
          question: "Pourquoi le Pack 2 rassure-t-il davantage les familles ?",
          answer:
            "Parce qu'il prolonge la prise en charge jusqu'au départ, au transfert et aux premiers repères à l'université, ce qui répond à l'une des principales peurs des parents.",
        },
        {
          question: "Travaillez-vous seulement sur une ville ou plusieurs destinations ?",
          answer:
            "Plusieurs destinations sont présentées, notamment Chongqing, Nanchang, Ningbo, Harbin, Xi'an, Chengdu et Zhejiang.",
        },
      ],
    },
    cta: {
      eyebrow: "Passer à l'étape suivante",
      title:
        "Commencez par une consultation gratuite puis avancez avec la formule qui correspond réellement à votre niveau de besoin.",
      description:
        "Quand l'offre est claire, le bon premier pas n'est pas de se précipiter. Le bon premier pas est de clarifier le projet et la bonne formule.",
      primary: "Recevoir une consultation gratuite",
      secondary: "Postuler maintenant",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Services • Packages • Free consultation",
      title:
        "An offer designed to convince serious families, not to drown students in vague promises.",
      description:
        "This page shows clearly what Yalla China actually handles: orientation, university targeting, file, translation, admission, visa, ticket help, transfer, and accompaniment depending on the package.",
      primary: "Book a free consultation",
      secondary: "Start my application",
      stats: [
        { label: "Founder", value: founderName },
        { label: "Positioning", value: "Study in China with real accompaniment" },
        { label: "Coverage", value: "From first contact to arrival" },
      ],
      panelEyebrow: "What the family understands here",
      panelTitle: "Which package fits, what is included, and how the project moves next.",
      panelText:
        "The goal is not only to display services. The goal is to help the family decide with more clarity and less uncertainty.",
      panelItems: [
        "Package 1 for the file, translation, visa, and university registration",
        "Package 2 to extend support through travel and transfer to the university",
        "Visible commitments around admission, visa, and service quality",
      ],
    },
    clarity: {
      eyebrow: "Why this page converts better",
      title: "A serious agency explains the service scope before it starts talking about buying.",
      description:
        "The site feels more credible when the student and parents can immediately see what is handled, what separates the packages, and what remains reassuring after admission.",
      items: [
        {
          title: "For parents",
          desc: "The level of follow-up, the visa logic, and travel accompaniment are visible from this page.",
        },
        {
          title: "For the student",
          desc: "The route becomes concrete: consultation, university, file, admission, visa, travel, arrival.",
        },
        {
          title: "For the decision",
          desc: "The difference between both packages becomes understandable quickly and without unnecessary jargon.",
        },
      ],
    },
    framework: {
      eyebrow: "What we frame clearly",
      title: "The service does not stop at paperwork. It also handles the stress zones around departure.",
      description:
        "The main objections are known in advance, so they should appear clearly in the page structure.",
      items: [
        "Service quality and communication clarity",
        "University quality and logic of choice",
        "Admission, visa, and document translation",
        "Ticket help, transport, and arrival at the university",
        "Human support for the parents as well as the student",
        "Cities covered to anchor the project in something concrete",
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Useful answers before choosing a formula",
      items: [
        {
          question: "How do I choose between Package 1 and Package 2?",
          answer:
            "The easiest path is to begin with the free consultation. We look at budget, desired autonomy, and parent expectations before recommending the right formula.",
        },
        {
          question: "Is the visa part of the service?",
          answer:
            "Yes. The visa is part of the core support, just like the file and the university registration process.",
        },
        {
          question: "Why is Package 2 more reassuring for families?",
          answer:
            "Because it extends the support through departure, transfer, and the first university steps, which directly addresses one of the parents' main fears.",
        },
        {
          question: "Do you work with one city only or with several destinations?",
          answer:
            "Several destinations are highlighted, including Chongqing, Nanchang, Ningbo, Harbin, Xi'an, Chengdu, and Zhejiang.",
        },
      ],
    },
    cta: {
      eyebrow: "Take the next step",
      title:
        "Start with a free consultation, then move forward with the package that truly fits your level of need.",
      description:
        "When the offer is clear, the right first move is not to rush. It is to clarify the project and the right formula.",
      primary: "Get a free consultation",
      secondary: "Apply now",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "الخدمات • الباقات • استشارة مجانية",
      title:
        "عرض مصمم لإقناع العائلات الجادة، لا لإغراق الطالب في وعود عامة وغير واضحة.",
      description:
        "هذه الصفحة توضح ما الذي تقوم به يلا تشاينا فعلياً: التوجيه، اختيار الجامعات، الملف، الترجمة، القبول، التأشيرة، المساعدة في التذكرة، النقل، والمرافقة حسب الباقة المختارة.",
      primary: "احجز استشارة مجانية",
      secondary: "ابدأ التقديم",
      stats: [
        { label: "المؤسس", value: founderName },
        { label: "التموضع", value: "الدراسة في الصين مع مرافقة حقيقية" },
        { label: "التغطية", value: "من أول تواصل إلى الوصول" },
      ],
      panelEyebrow: "ما الذي تفهمه العائلة هنا",
      panelTitle: "أي باقة تناسبك، ماذا تشمل، وكيف يتقدم المشروع بعد ذلك.",
      panelText:
        "الهدف ليس فقط عرض الخدمات، بل مساعدة العائلة على اتخاذ القرار بوضوح أكبر وغموض أقل.",
      panelItems: [
        "الباقة 1 للملف والترجمة والتأشيرة والتسجيل الجامعي",
        "الباقة 2 لتمديد المرافقة حتى السفر والنقل إلى الجامعة",
        "التزامات واضحة حول القبول والتأشيرة وجودة الخدمة",
      ],
    },
    clarity: {
      eyebrow: "لماذا تحول هذه الصفحة الاهتمام إلى قرار",
      title: "الوكالة الجادة تشرح نطاق الخدمة قبل أن تتحدث عن الشراء.",
      description:
        "يصبح الموقع أكثر مصداقية عندما يرى الطالب ووالداه منذ البداية ما الذي يدخل في الخدمة وما الفرق بين الباقات وما الذي يطمئن بعد القبول.",
      items: [
        {
          title: "للوالدين",
          desc: "مستوى المتابعة ومنطق التأشيرة ومواكبة السفر تظهر بوضوح في هذه الصفحة.",
        },
        {
          title: "للطالب",
          desc: "المسار يصبح عملياً: استشارة، جامعة، ملف، قبول، تأشيرة، سفر، وصول.",
        },
        {
          title: "للقرار",
          desc: "الفرق بين الباقتين يصبح مفهوماً بسرعة ومن دون تعقيد غير ضروري.",
        },
      ],
    },
    framework: {
      eyebrow: "ما الذي نؤطره بوضوح",
      title: "الخدمة لا تقف عند الورق، بل تعالج أيضاً مناطق القلق المرتبطة بالسفر والوصول.",
      description:
        "الاعتراضات الرئيسية معروفة، لذلك يجب أن تظهر بوضوح داخل هيكلة الصفحة.",
      items: [
        "جودة الخدمة ووضوح التواصل",
        "جودة الجامعة ومنطق الاختيار",
        "القبول والتأشيرة وترجمة الوثائق",
        "المساعدة في التذكرة والنقل والوصول إلى الجامعة",
        "مرافقة إنسانية للوالدين بقدر ما هي للطالب",
        "إظهار المدن التي نعمل عليها حتى يبدو المشروع ملموساً",
      ],
    },
    faq: {
      eyebrow: "أسئلة متكررة",
      title: "أجوبة مفيدة قبل اختيار الصيغة المناسبة",
      items: [
        {
          question: "كيف أختار بين الباقة 1 والباقة 2؟",
          answer:
            "أفضل طريق هو البدء بالاستشارة المجانية. ننظر إلى الميزانية ومستوى الاستقلالية المطلوب وتوقعات الوالدين قبل اقتراح الصيغة المناسبة.",
        },
        {
          question: "هل التأشيرة جزء من الخدمة؟",
          answer:
            "نعم. التأشيرة جزء من جوهر المرافقة، تماماً مثل الملف والتسجيل الجامعي.",
        },
        {
          question: "لماذا تعتبر الباقة 2 أكثر طمأنة للعائلات؟",
          answer:
            "لأنها تمدد المرافقة حتى السفر والنقل وأول خطوات الدخول إلى الجامعة، وهو ما يجيب مباشرة عن أحد أكبر مخاوف الوالدين.",
        },
        {
          question: "هل تشتغلون على مدينة واحدة أم عدة وجهات؟",
          answer:
            "نعرض عدة وجهات من بينها تشونغتشينغ ونانتشانغ ونينغبو وهاربين وشيآن وتشنغدو وتشجيانغ.",
        },
      ],
    },
    cta: {
      eyebrow: "الخطوة التالية",
      title:
        "ابدأ بالاستشارة المجانية ثم تقدّم مع الباقة التي تناسب مستوى حاجتك فعلاً.",
      description:
        "عندما يكون العرض واضحاً، فالخطوة الصحيحة ليست الاستعجال، بل توضيح المشروع والصيغة المناسبة أولاً.",
      primary: "احصل على استشارة مجانية",
      secondary: "قدّم الآن",
    },
  },
};

export default function ServicesPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const applyHref = `/${lang}/apply`;
  const contactHref = `/${lang}/contact`;
  const heroImageAlt =
    lang === "fr"
      ? "Services Yalla China pour les études en Chine"
      : lang === "en"
        ? "Yalla China study services for China"
        : "خدمات يلا تشاينا للدراسة في الصين";
  const citiesImageAlt =
    lang === "fr"
      ? "Parcours étudiant Yalla China"
      : lang === "en"
        ? "Yalla China student journey"
        : "مسار الطالب مع يلا تشاينا";

  return (
    <main className="bg-[#050505] text-white" dir={t.dir} lang={lang}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,3,4,0.74),transparent_28%),radial-gradient(circle_at_top_right,rgba(177,127,2,0.16),transparent_20%),linear-gradient(135deg,#180405_0%,#29080b_40%,#060606_100%)]" />
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
                className={`flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap ${
                  isArabic ? "sm:justify-end" : "mx-auto items-stretch lg:mx-0 sm:items-center"
                }`}
              >
                <Link
                  href={contactHref}
                  className="w-full rounded-full bg-[#B17F02] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(177,127,2,0.18)] transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.hero.primary}
                </Link>
                <Link
                  href={applyHref}
                  className="w-full rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14 sm:w-auto"
                >
                  {t.hero.secondary}
                </Link>
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
                    src="/fr-services-hero.jpg"
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
                <p className="mt-3 text-sm leading-7 text-white/72">{t.hero.panelText}</p>
                <div className="mt-4 grid gap-3 md:grid-cols-3">
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
          <div className="space-y-6">
            <div
              className={`rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-8 ${
                isArabic ? "lg:ml-auto text-right" : "text-center lg:text-left"
              } lg:max-w-3xl`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                {t.clarity.eyebrow}
              </p>
              <h2 className="display-title mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                {t.clarity.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">{t.clarity.description}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {t.clarity.items.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-[1.8rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div className={`h-1.5 w-16 rounded-full bg-[#B17F02] ${isArabic ? "ml-auto" : ""}`} />
                  <h3 className="mt-5 text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <HomeProofSection lang={lang} mode="page" />

      <section className="bg-[#080808] py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div className={`space-y-5 ${isArabic ? "text-right" : "text-center lg:text-left"}`}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_55px_rgba(0,0,0,0.18)] sm:p-8">
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                  {t.framework.eyebrow}
                </p>
                <h2 className="display-title mt-3 text-3xl font-black tracking-tight text-white">
                  {t.framework.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                  {t.framework.description}
                </p>
              </div>

              <div className="grid gap-4">
                {t.framework.items.map((item) => (
                  <div
                    key={item}
                    className={`rounded-[1.8rem] border border-white/10 bg-black/20 p-5 shadow-[0_18px_35px_rgba(0,0,0,0.16)] ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    <p className="text-sm leading-7 text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#170607] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(177,127,2,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.25),transparent_34%)]" />
                <div className="absolute inset-0 opacity-20 shoji-grid" />
                <div className="relative space-y-5">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10">
                    <div className="relative h-[18rem] w-full sm:h-[22rem]">
                      <Image
                        src="/fr-apply-hero.jpg"
                        alt={citiesImageAlt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className={isArabic ? "text-right" : ""}>
                    <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                      {lang === "fr" ? "Villes servies" : lang === "en" ? "Cities served" : "المدن التي نخدمها"}
                    </p>
                    <h3 className="display-title mt-3 text-2xl font-black leading-tight text-white">
                      {lang === "fr"
                        ? "Le site ancre le projet dans des villes réelles, pas dans une promesse abstraite."
                        : lang === "en"
                          ? "The site anchors the project in real cities, not in an abstract promise."
                          : "الموقع يربط المشروع بمدن حقيقية لا بوعود مجردة."}
                    </h3>
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

      <section className="bg-[#f4ede4] py-12 text-zinc-900 sm:py-16">
        <Container>
          <div className="space-y-6">
            <div className={isArabic ? "text-right" : "text-center lg:text-left"}>
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                {t.faq.eyebrow}
              </p>
              <h2 className="display-title mt-3 text-3xl font-black tracking-tight sm:text-4xl">
                {t.faq.title}
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {t.faq.items.map((item) => (
                <article
                  key={item.question}
                  className={`rounded-[1.8rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] ${
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

      <section className="bg-[#7c0913] py-12 sm:py-16">
        <Container>
          <div className="rounded-[2.4rem] border border-white/10 bg-black/20 p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div className={isArabic ? "text-right" : "text-center lg:text-left"}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
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
                  className="w-full rounded-full bg-[#B17F02] px-6 py-3 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.cta.primary}
                </Link>
                <Link
                  href={applyHref}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15 sm:w-auto"
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
