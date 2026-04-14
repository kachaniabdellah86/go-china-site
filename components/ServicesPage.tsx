import Container from "@/components/Container";
import HomeProofSection from "@/components/HomeProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Link from "next/link";
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
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; desc: string }[];
    supportEyebrow: string;
    supportTitle: string;
    supportText: string;
    supportItems: string[];
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
        "Des services clairs pour aider l'etudiant a avancer et permettre aux parents de decider avec confiance.",
      description:
        "Ici, tout est organise pour repondre aux vraies questions: quel pack choisir, ce qui est inclus, comment se passe le visa et jusqu'ou va l'accompagnement.",
      primary: "Demander une consultation gratuite",
      secondary: "Commencer ma candidature",
      stats: [
        { label: "Deux packs lisibles", value: "Essentiel ou Premium" },
        { label: "Visa et admission", value: "Accompagnement visible" },
        { label: "Jusqu'a l'arrivee", value: "Suivi plus complet en Premium" },
      ],
      panelEyebrow: "Ce que les familles veulent savoir tout de suite",
      panelTitle:
        "Quel pack choisir, ce qui est inclus et comment le projet avance ensuite.",
      panelText:
        "Le choix devient simple et rassurant quand tout est clair des le debut.",
      panelItems: [
        "Consultation gratuite avant engagement",
        "Comparaison simple des packs",
        "Reponse rapide sur WhatsApp",
      ],
    },
    clarity: {
      eyebrow: "Pourquoi cette page est plus claire",
      title:
        "Une offre premium doit etre facile a comprendre avant meme le premier appel.",
      description:
        "Quand les familles voient rapidement la logique de l'accompagnement, elles se projettent plus facilement et avancent avec moins d'hesitation.",
      items: [
        {
          title: "Pour les parents",
          desc: "Les garanties, le niveau de suivi et les etapes importantes sont visibles des le debut.",
        },
        {
          title: "Pour l'etudiant",
          desc: "Le chemin a suivre devient plus concret: dossier, admission, visa, depart et arrivee.",
        },
        {
          title: "Pour la decision",
          desc: "Le choix entre les deux packs devient simple, logique et beaucoup plus rassurant.",
        },
      ],
    },
    process: {
      eyebrow: "Comment se passe l'accompagnement",
      title: "Une methode claire du premier echange jusqu'aux premiers jours en Chine.",
      description:
        "Le vrai luxe ici, c'est de savoir qui fait quoi, quand, et jusqu'ou va l'accompagnement selon la formule choisie.",
      steps: [
        {
          title: "01. Consultation et orientation",
          desc: "Nous comprenons le profil, les attentes de la famille et la formule la plus adaptee.",
        },
        {
          title: "02. Choix des universites et dossier",
          desc: "Nous cadrons les choix, les documents, la traduction et la logique du dossier.",
        },
        {
          title: "03. Admission et visa",
          desc: "Nous restons presents sur les etapes sensibles pour reduire les erreurs et les blocages.",
        },
        {
          title: "04. Depart et arrivee",
          desc: "Selon la formule choisie, le suivi continue jusqu'au voyage, au transfert et aux premiers reperes.",
        },
      ],
      supportEyebrow: "Ce qui rassure vraiment",
      supportTitle: "Les familles ne cherchent pas seulement un service, elles cherchent un cadre fiable.",
      supportText:
        "C'est pour cela que nous avons clarifie l'offre autour de la visibilite, du suivi humain et d'une vraie logique jusqu'a l'arrivee.",
      supportItems: [
        "Orientation adaptee au profil",
        "Dossier et traduction encadres",
        "Visa accompagne avec methode",
        "WhatsApp direct pour les questions importantes",
      ],
    },
    faq: {
      eyebrow: "Questions frequentes",
      title: "Les reponses les plus utiles avant de choisir une formule.",
      items: [
        {
          question: "Comment choisir entre le Pack Essentiel et le Pack Premium ?",
          answer:
            "Le plus simple est de commencer par la consultation gratuite. Nous vous orientons ensuite vers la formule qui correspond au niveau de suivi souhaite.",
        },
        {
          question: "Le visa est-il inclus dans les deux packs ?",
          answer:
            "Oui. Le visa etudiant fait partie des etapes importantes accompagnees dans les deux formules.",
        },
        {
          question: "Qu'est-ce qui rend le Pack Premium plus rassurant ?",
          answer:
            "Il ajoute un niveau de confort supplementaire autour du billet, du suivi jusqu'a l'universite et de l'arrivee.",
        },
        {
          question: "Est-ce que les parents peuvent poser leurs questions avant toute decision ?",
          answer:
            "Oui. La consultation gratuite est justement faite pour clarifier le projet et rassurer toute la famille.",
        },
      ],
    },
    cta: {
      eyebrow: "Passer a l'etape suivante",
      title:
        "Commencez par une consultation gratuite, puis avancez avec la formule qui correspond vraiment a votre situation.",
      description:
        "Le bon premier pas n'est pas de vous precipiter. Le bon premier pas est de clarifier le projet, rassurer les parents et choisir la meilleure voie.",
      primary: "Recevoir une consultation gratuite",
      secondary: "Postuler maintenant",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Services • Packages • Free consultation",
      title:
        "Clear services that help the student move forward and help parents decide with confidence.",
      description:
        "Everything here is organized around the real questions families ask: which package to choose, what is included, how the visa works, and how far the support goes.",
      primary: "Request a free consultation",
      secondary: "Start my application",
      stats: [
        { label: "Two readable packages", value: "Essential or Premium" },
        { label: "Visa and admission", value: "Visible support" },
        { label: "Until arrival", value: "Stronger follow-up in Premium" },
      ],
      panelEyebrow: "What families want to know immediately",
      panelTitle:
        "Which package to choose, what is included, and how the project moves forward next.",
      panelText:
        "The choice becomes simple and reassuring when everything is clear from the start.",
      panelItems: [
        "Free consultation before commitment",
        "Simple package comparison",
        "Fast WhatsApp reply",
      ],
    },
    clarity: {
      eyebrow: "Why this page feels clearer",
      title:
        "A premium offer should be easy to understand even before the first call.",
      description:
        "When families quickly see the logic of the support, they can project themselves into the journey with much more confidence.",
      items: [
        {
          title: "For parents",
          desc: "The guarantees, level of follow-up, and key stages are visible from the start.",
        },
        {
          title: "For the student",
          desc: "The route becomes concrete: file, admission, visa, departure, and arrival.",
        },
        {
          title: "For the decision",
          desc: "The choice between both packages becomes simple, logical, and far more reassuring.",
        },
      ],
    },
    process: {
      eyebrow: "How the support works",
      title: "A clear method from the first conversation to the first days in China.",
      description:
        "The real premium value here is knowing who does what, when, and how far the support goes depending on the formula you choose.",
      steps: [
        {
          title: "01. Consultation and orientation",
          desc: "We understand the profile, the family expectations, and the formula that fits best.",
        },
        {
          title: "02. Universities and file",
          desc: "We frame the choices, the documents, the translation work, and the logic of the file.",
        },
        {
          title: "03. Admission and visa",
          desc: "We stay present during the sensitive stages to reduce mistakes and delays.",
        },
        {
          title: "04. Departure and arrival",
          desc: "Depending on the chosen formula, support continues through travel, transfer, and first steps.",
        },
      ],
      supportEyebrow: "What truly reassures families",
      supportTitle: "Families are not only looking for a service. They are looking for a reliable framework.",
      supportText:
        "That is why the offer is structured around clarity, human follow-up, and visible support all the way to arrival.",
      supportItems: [
        "Profile-based orientation",
        "Guided file and translation",
        "Visa support with method",
        "Direct WhatsApp for important questions",
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "The most useful answers before choosing a formula.",
      items: [
        {
          question: "How do I choose between the Essential and Premium packages?",
          answer:
            "The easiest way is to begin with the free consultation. We then guide you toward the level of support that fits your project.",
        },
        {
          question: "Is the visa included in both packages?",
          answer:
            "Yes. The student visa is one of the important guided stages in both formulas.",
        },
        {
          question: "What makes the Premium package more reassuring?",
          answer:
            "It adds extra comfort around the ticket, the follow-up up to the university, and the arrival stage.",
        },
        {
          question: "Can parents ask their questions before making any decision?",
          answer:
            "Yes. The free consultation is designed precisely to clarify the project and reassure the whole family.",
        },
      ],
    },
    cta: {
      eyebrow: "Take the next step",
      title:
        "Start with a free consultation, then move forward with the formula that truly fits your situation.",
      description:
        "The right first step is not to rush. The right first step is to clarify the project, reassure the family, and choose the best route.",
      primary: "Get a free consultation",
      secondary: "Apply now",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "الخدمات • الباقات • استشارة مجانية",
      title:
        "خدمات واضحة تساعد الطالب على التقدم وتسمح للوالدين باتخاذ القرار بثقة.",
      description:
        "كل شيء هنا منظم حول الاسئلة الحقيقية: اي باقة تختارون، ماذا تتضمن، كيف تتم التاشيرة، وحتى اين تصل المرافقة.",
      primary: "اطلب استشارة مجانية",
      secondary: "ابدأ التقديم",
      stats: [
        { label: "باقتان واضحتان", value: "اساسية او مميزة" },
        { label: "القبول والتاشيرة", value: "مرافقة ظاهرة" },
        { label: "حتى الوصول", value: "متابعة اقوى في الباقة المميزة" },
      ],
      panelEyebrow: "ما الذي تريد العائلة معرفته مباشرة",
      panelTitle:
        "اي باقة تختارون، ماذا تتضمن، وكيف يتقدم المشروع بعد ذلك.",
      panelText:
        "هذه الصفحة موجودة لتجعل القرار بسيطا ومريحا، لا لتغرق العائلة في تفاصيل غير ضرورية.",
      panelItems: [
        "استشارة مجانية قبل الالتزام",
        "مقارنة بسيطة بين الباقات",
        "رد سريع على WhatsApp",
      ],
    },
    clarity: {
      eyebrow: "لماذا تبدو هذه الصفحة اوضح",
      title:
        "العرض الفاخر يجب ان يكون سهلا في الفهم حتى قبل اول مكالمة.",
      description:
        "عندما ترى العائلة منطق المرافقة بسرعة، يصبح من الاسهل عليها ان تثق وتتقدم من دون تردد كبير.",
      items: [
        {
          title: "للوالدين",
          desc: "الضمانات ومستوى المتابعة والمراحل المهمة ظاهرة من البداية.",
        },
        {
          title: "للطالب",
          desc: "المسار يصبح عمليا: ملف، قبول، تاشيرة، سفر، ثم وصول.",
        },
        {
          title: "للقرار",
          desc: "الاختيار بين الباقتين يصبح ابسط واكثر منطقية واطمئنانا.",
        },
      ],
    },
    process: {
      eyebrow: "كيف تتم المرافقة",
      title: "منهج واضح من اول تواصل حتى الايام الاولى في الصين.",
      description:
        "القيمة الحقيقية هنا هي معرفة من يفعل ماذا ومتى وحتى اين تصل المرافقة حسب الصيغة المختارة.",
      steps: [
        {
          title: "01. الاستشارة والتوجيه",
          desc: "نفهم الملف وتوقعات العائلة ونحدد الصيغة الانسب للبداية.",
        },
        {
          title: "02. الجامعات والملف",
          desc: "نرتب الاختيارات والوثائق والترجمة ومنطق الملف كاملا.",
        },
        {
          title: "03. القبول والتاشيرة",
          desc: "نبقى حاضرين في المراحل الحساسة لتقليل الاخطاء والتاخير.",
        },
        {
          title: "04. السفر والوصول",
          desc: "حسب الصيغة المختارة تستمر المرافقة حتى السفر والنقل واول الخطوات.",
        },
      ],
      supportEyebrow: "ما الذي يطمئن العائلة فعلا",
      supportTitle: "العائلات لا تبحث فقط عن خدمة، بل عن اطار موثوق.",
      supportText:
        "لهذا تم تنظيم العرض حول الوضوح والمتابعة الانسانية ومرافقة ظاهرة حتى الوصول.",
      supportItems: [
        "توجيه حسب الملف",
        "ملف وترجمة داخل اطار واضح",
        "مرافقة التاشيرة بمنهج",
        "WhatsApp مباشر للاسئلة المهمة",
      ],
    },
    faq: {
      eyebrow: "اسئلة متكررة",
      title: "اكثر الاجوبة فائدة قبل اختيار الصيغة المناسبة.",
      items: [
        {
          question: "كيف نختار بين الباقة الاساسية والباقية المميزة؟",
          answer:
            "افضل بداية هي الاستشارة المجانية. بعدها نوجهكم نحو مستوى المتابعة المناسب للمشروع.",
        },
        {
          question: "هل التاشيرة مشمولة في الباقتين؟",
          answer:
            "نعم. تاشيرة الطالب من المراحل المهمة التي تتم مرافقتها في كلتا الصيغتين.",
        },
        {
          question: "ما الذي يجعل الباقة المميزة اكثر طمانينة؟",
          answer:
            "لانها تضيف راحة اكبر في التذكرة والمتابعة حتى الجامعة والوصول.",
        },
        {
          question: "هل يمكن للوالدين طرح اسئلتهما قبل اي قرار؟",
          answer:
            "نعم. الاستشارة المجانية موجودة بالضبط لتوضيح المشروع وطمأنة العائلة كلها.",
        },
      ],
    },
    cta: {
      eyebrow: "الخطوة التالية",
      title:
        "ابدؤوا باستشارة مجانية، ثم تقدموا مع الصيغة التي تناسب وضعكم فعلا.",
      description:
        "الخطوة الصحيحة ليست الاستعجال. الخطوة الصحيحة هي توضيح المشروع وطمأنة العائلة واختيار الطريق الافضل.",
      primary: "احصل على استشارة مجانية",
      secondary: "قدم الان",
    },
  },
};

export default function ServicesPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const applyHref = `/${lang}/apply`;
  const contactHref = `/${lang}/contact`;

  return (
    <main className="bg-[#050505] text-white" dir={t.dir}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,3,4,0.74),transparent_28%),radial-gradient(circle_at_top_right,rgba(177,127,2,0.16),transparent_20%),linear-gradient(135deg,#180405_0%,#29080b_40%,#060606_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <Container>
          <div className="relative grid gap-8 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:py-20">
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
                className={`flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap ${
                  isArabic
                    ? "sm:justify-end"
                    : "mx-auto items-stretch lg:mx-0 sm:items-center"
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
                  src="/fr-services-hero.jpg"
                  alt="YALLA CHINA services"
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
                <p className="mt-3 text-sm leading-7 text-white/72">
                  {t.hero.panelText}
                </p>
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
              <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                {t.clarity.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {t.clarity.items.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-[1.8rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`h-1.5 w-16 rounded-full bg-[#B17F02] ${
                      isArabic ? "ml-auto" : ""
                    }`}
                  />
                  <h3 className="mt-5 text-lg font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <HomeProofSection lang={lang} mode="page" />

      <TestimonialsSection lang={lang} />

      <section className="bg-[#080808] py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div
              className={`space-y-5 ${
                isArabic ? "text-right" : "text-center lg:text-left"
              }`}
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_55px_rgba(0,0,0,0.18)] sm:p-8">
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                  {t.process.eyebrow}
                </p>
                <h2 className="display-title mt-3 text-3xl font-black tracking-tight text-white">
                  {t.process.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                  {t.process.description}
                </p>
              </div>

              <div className="space-y-4">
                {t.process.steps.map((step) => (
                  <article
                    key={step.title}
                    className={`rounded-[1.8rem] border border-white/10 bg-black/20 p-5 shadow-[0_18px_35px_rgba(0,0,0,0.16)] ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                  >
                    <h3 className="text-lg font-bold text-white">
                      <StepTitle title={step.title} isArabic={isArabic} />
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      {step.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-[#170607] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.24)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(177,127,2,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.25),transparent_34%)]" />
                <div className="absolute inset-0 opacity-20 shoji-grid" />
                <div className="relative space-y-5">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10">
                    <img
                      src="/fr-apply-hero.jpg"
                      alt="Student journey"
                      className="h-[18rem] w-full object-cover sm:h-[22rem]"
                    />
                  </div>

                  <div className={isArabic ? "text-right" : ""}>
                    <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                      {t.process.supportEyebrow}
                    </p>
                    <h3 className="display-title mt-3 text-2xl font-black leading-tight text-white">
                      {t.process.supportTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      {t.process.supportText}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {t.process.supportItems.map((item) => (
                      <div
                        key={item}
                        className={`rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/84 ${
                          isArabic ? "text-right" : ""
                        }`}
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
                  <h3 className="text-lg font-bold text-zinc-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.answer}
                  </p>
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
