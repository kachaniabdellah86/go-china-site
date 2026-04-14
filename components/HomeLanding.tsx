import Container from "@/components/Container";
import FounderStories from "@/components/FounderStories";
import HomeProofSection from "@/components/HomeProofSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustIndicators from "@/components/TrustIndicators";
import Link from "next/link";
import { ArabicText, ArabicStepNumber } from "@/lib/ArabicText";

// Helper to extract and render step titles with proper number handling for Arabic
function StepTitle({ title, isArabic }: { title: string; isArabic: boolean }) {
  if (!isArabic) {
    return <span>{title}</span>;
  }
  
  // For Arabic, extract number and render separately to avoid RTL issues
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
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    primary: string;
    secondary: string;
    stats: { label: string; value: string }[];
    panelEyebrow: string;
    panelTitle: string;
    panelText: string;
    panelItems: string[];
  };
  reasons: {
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
    highlightTitle: string;
    highlightText: string;
    tags: string[];
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
      badge: "YALLA CHINA • Études en Chine • Parents & Étudiants",
      eyebrow: "Un accompagnement sérieux du premier échange jusqu'à l'arrivée",
      title:
        "Étudier en Chine avec plus de clarté, plus de sécurité et une vraie présence humaine à chaque étape.",
      description:
        "YALLA CHINA accompagne les étudiants et leurs familles dans le choix de l'université, la préparation du dossier, le visa, le départ et les premières étapes en Chine avec une méthode lisible et rassurante.",
      note:
        "Consultation gratuite • Réponse sur WhatsApp sous 24 à 48h • Deux packs clairs • Suivi jusqu'à l'arrivée",
      primary: "Demander une consultation gratuite",
      secondary: "Voir les services",
      stats: [
        {
          label: "Pour les familles",
          value: "Le projet est expliqué simplement avant toute décision.",
        },
        {
          label: "Pour les étudiants",
          value: "Chaque étape est cadrée pour éviter les erreurs et les retards.",
        },
        {
          label: "Jusqu'à l'arrivée",
          value: "Le suivi continue après l'admission et le visa.",
        },
      ],
      panelEyebrow: "Ce qui fait la différence",
      panelTitle:
        "Une orientation claire, des offres premium et un interlocuteur direct quand vous en avez besoin.",
      panelText:
        "Tout est pensé pour rassurer les parents, aider l'étudiant à avancer avec méthode et rendre le projet beaucoup plus concret dès le premier échange.",
      panelItems: [
        "Consultation gratuite avant engagement",
        "Packs faciles à comparer",
        "Garantie d'admission, visa et service",
        "Suivi du Maroc jusqu'à l'université",
      ],
    },
    reasons: {
      eyebrow: "Pourquoi des familles nous choisissent",
      title:
        "Vous n'avez pas besoin d'un simple intermédiaire. Vous avez besoin d'un cadre sérieux pour prendre une bonne décision.",
      description:
        "Cette première impression doit inspirer confiance rapidement: qui vous accompagne, comment le projet avance, ce qui est inclus et ce qui protège la famille jusqu'au départ.",
      items: [
        {
          title: "Une expérience réelle de la Chine",
          desc: "Vous échangez avec une équipe qui connaît le terrain, les étapes réelles et les erreurs à éviter.",
        },
        {
          title: "Deux formules très lisibles",
          desc: "Vous comprenez immédiatement la différence entre l'essentiel et le premium sans vous perdre dans des détails inutiles.",
        },
        {
          title: "Des garanties visibles",
          desc: "Admission, visa et qualité de service apparaissent clairement pour réduire l'incertitude.",
        },
        {
          title: "Une logique pensée pour la famille",
          desc: "Le discours rassure les parents pendant que l'étudiant voit exactement comment avancer.",
        },
      ],
    },
    process: {
      eyebrow: "Comment nous avançons avec vous",
      title: "Chaque étape est annoncée clairement avant de commencer.",
      description:
        "Le projet devient plus crédible quand le parcours est simple à suivre, du premier appel jusqu'à l'installation.",
      steps: [
        {
          title: "01. Consultation et diagnostic",
          desc: "Nous clarifions le profil, les attentes de la famille et la meilleure formule pour démarrer.",
        },
        {
          title: "02. Universités et dossier",
          desc: "Nous préparons les universités ciblées, les documents, la traduction et la logique du dossier.",
        },
        {
          title: "03. Admission et visa",
          desc: "Le suivi reste présent pendant les étapes sensibles pour sécuriser la candidature et le visa.",
        },
        {
          title: "04. Départ, arrivée et installation",
          desc: "Le voyage, le transfert et les premiers repères en Chine font partie d'une vraie promesse premium.",
        },
      ],
      highlightTitle:
        "Vous savez où vous allez avant de payer, avant de signer, et avant d'envoyer le dossier.",
      highlightText:
        "Quand le parcours est clair, les parents se sentent plus en confiance et l'étudiant avance plus vite. C'est cette sensation de sérieux qui donne à la marque une vraie valeur premium.",
      tags: [
        "Consultation gratuite",
        "Dossier encadré",
        "Visa sécurisé",
        "Départ organisé",
        "Suivi humain",
        "Arrivée préparée",
      ],
    },
    cta: {
      eyebrow: "Prêts à commencer ?",
      title:
        "Commencez par une consultation gratuite, puis avancez avec la formule qui correspond vraiment à votre situation.",
      description:
        "Le premier objectif n'est pas de remplir un dossier trop long. Le premier objectif est de comprendre la bonne voie, rassurer la famille et savoir exactement quoi faire ensuite.",
      primary: "Recevoir ma consultation gratuite",
      secondary: "Postuler maintenant",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "YALLA CHINA • Study in China • Parents & Students",
      eyebrow: "Serious guidance from the first conversation to arrival",
      title:
        "Study in China with more clarity, more safety, and real human support at every stage.",
      description:
        "YALLA CHINA supports students and families through university choice, file preparation, visa support, departure, and the first steps in China with a method that feels clear and reassuring.",
      note:
        "Free consultation • WhatsApp reply within 24 to 48h • Two clear packages • Follow-up until arrival",
      primary: "Request a free consultation",
      secondary: "View services",
      stats: [
        {
          label: "For families",
          value: "The project is explained clearly before any decision is made.",
        },
        {
          label: "For students",
          value: "Each stage is framed to avoid mistakes and delays.",
        },
        {
          label: "Until arrival",
          value: "Support continues after admission and the visa stage.",
        },
      ],
      panelEyebrow: "What makes the difference",
      panelTitle:
        "A clear orientation, premium offers, and a direct point of contact when you need it.",
      panelText:
        "Everything is designed to reassure parents, help the student move with structure, and make the project feel real from the very first exchange.",
      panelItems: [
        "Free consultation before commitment",
        "Packages that are easy to compare",
        "Admission, visa, and service guarantees",
        "Follow-up from Morocco to the university",
      ],
    },
    reasons: {
      eyebrow: "Why families choose us",
      title:
        "You do not need a generic middleman. You need a serious structure for an important decision.",
      description:
        "Trust grows faster when the guidance is visible: who is helping you, how the project moves, what is included, and what protects the family until departure.",
      items: [
        {
          title: "Real experience in China",
          desc: "You speak with a team that understands the real journey, the key stages, and the mistakes to avoid.",
        },
        {
          title: "Two very readable formulas",
          desc: "You immediately understand the difference between the essential and premium levels of support.",
        },
        {
          title: "Visible guarantees",
          desc: "Admission, visa, and service guarantees appear clearly to reduce uncertainty.",
        },
        {
          title: "A message built for the family",
          desc: "Parents feel reassured while the student understands exactly how to move forward.",
        },
      ],
    },
    process: {
      eyebrow: "How we move forward with you",
      title: "Each stage is explained clearly before it begins.",
      description:
        "The project feels more credible when the route is simple to follow, from the first call to arrival.",
      steps: [
        {
          title: "01. Consultation and diagnosis",
          desc: "We clarify the profile, the family concerns, and the best formula to begin.",
        },
        {
          title: "02. Universities and file",
          desc: "We prepare the right university targets, documents, translations, and the logic of the file.",
        },
        {
          title: "03. Admission and visa",
          desc: "Support stays present through the sensitive stages to secure the application and the visa.",
        },
        {
          title: "04. Departure, arrival, and settling in",
          desc: "Travel, transfer, and first steps in China are part of a truly premium promise.",
        },
      ],
      highlightTitle:
        "You know where you are going before paying, before signing, and before sending the file.",
      highlightText:
        "When the route is clear, parents feel more confident and the student moves faster. That feeling of seriousness is what gives the brand real premium value.",
      tags: [
        "Free consultation",
        "Guided file",
        "Visa support",
        "Organized departure",
        "Human follow-up",
        "Prepared arrival",
      ],
    },
    cta: {
      eyebrow: "Ready to begin?",
      title:
        "Start with a free consultation, then move forward with the formula that really fits your situation.",
      description:
        "The first goal is not to fill a long form. The first goal is to understand the right route, reassure the family, and know exactly what to do next.",
      primary: "Get my free consultation",
      secondary: "Apply now",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "YALLA CHINA • الدراسة في الصين • للوالدين والطلبة",
      eyebrow: "مرافقة جدية من اول تواصل حتى الوصول",
      title:
        "الدراسة في الصين تصبح اوضح وامن عندما يكون المسار معروفا والمرافقة حاضرة في كل مرحلة.",
      description:
        "ترافق YALLA CHINA الطلبة وعائلاتهم في اختيار الجامعة، تجهيز الملف، التاشيرة، السفر والوصول الى الصين ضمن منهج منظم ومطمئن.",
      note:
        "استشارة مجانية • رد عبر واتساب خلال 24-48 ساعة • باقتان واضحتان • متابعة حتى الوصول",
      primary: "اطلب استشارة مجانية",
      secondary: "شاهد الخدمات",
      stats: [
        {
          label: "للعائلة",
          value: "المشروع يشرح بوضوح قبل اتخاذ القرار.",
        },
        {
          label: "للطالب",
          value: "كل مرحلة مؤطرة لتقليل الاخطاء والتأخير.",
        },
        {
          label: "حتى الوصول",
          value: "المرافقة تستمر بعد القبول والتأشيرة.",
        },
      ],
      panelEyebrow: "ما الذي يصنع الفرق",
      panelTitle:
        "توجيه واضح وعروض مميزة وشخص مباشر للرجوع اليه عندما تحتاجون.",
      panelText:
        "كل شيء هنا مصمم لطمأنة الوالدين، مساعدة الطالب على التقدم بمنهجية، وجعل المشروع ملموسا من اول تواصل.",
      panelItems: [
        "استشارة مجانية قبل الالتزام",
        "باقات سهلة المقارنة",
        "ضمانات للقبول والتاشيرة والخدمة",
        "متابعة من المغرب حتى الجامعة",
      ],
    },
    reasons: {
      eyebrow: "لماذا تختارنا العائلات",
      title:
        "انتم لا تحتاجون مجرد وسيط. انتم تحتاجون اطارا جديا لقرار مهم.",
      description:
        "تزداد الثقة عندما تكون الرؤية واضحة: من يرافقكم، كيف يتقدم المشروع، ماذا يشمل العرض، وما الذي يطمئن العائلة حتى السفر.",
      items: [
        {
          title: "خبرة حقيقية في الصين",
          desc: "تتحدثون مع فريق يفهم الواقع الفعلي للمسار والاخطاء التي يجب تجنبها.",
        },
        {
          title: "باقتان واضحتان جدا",
          desc: "تفهمون بسرعة الفرق بين الصيغة الاساسية والصيغة المميزة.",
        },
        {
          title: "ضمانات ظاهرة",
          desc: "القبول والتاشيرة وجودة الخدمة تظهر بوضوح لتقليل التردد.",
        },
        {
          title: "خطاب موجه للعائلة والطالب",
          desc: "يشعر الوالدان بالاطمئنان بينما يعرف الطالب كيف يتقدم بشكل عملي.",
        },
      ],
    },
    process: {
      eyebrow: "كيف نتقدم معكم",
      title: "كل مرحلة واضحة قبل ان تبدأ.",
      description:
        "يصبح المشروع اكثر مصداقية عندما يكون الطريق سهلا في الفهم من اول مكالمة حتى الوصول.",
      steps: [
        {
          title: "01. الاستشارة والتشخيص",
          desc: "نوضح الملف، اسئلة العائلة، والصيغة الانسب للبداية.",
        },
        {
          title: "02. الجامعات والملف",
          desc: "نجهز الجامعات المناسبة والوثائق والترجمة ومنطق الملف كله.",
        },
        {
          title: "03. القبول والتاشيرة",
          desc: "تبقى المتابعة حاضرة في المراحل الحساسة لتامين القبول والتأشيرة.",
        },
        {
          title: "04. السفر والوصول والاستقرار",
          desc: "السفر والنقل واول الخطوات في الصين جزء من وعد مميز فعلا.",
        },
      ],
      highlightTitle:
        "تعرفون الى اين تتجهون قبل الدفع وقبل التوقيع وقبل ارسال الملف.",
      highlightText:
        "عندما يكون المسار واضحا يشعر الوالدان بثقة اكبر ويتقدم الطالب بشكل اسرع. هذا الاحساس بالجدية هو ما يعطي العلامة قيمة فاخرة حقيقية.",
      tags: [
        "استشارة مجانية",
        "ملف مؤطر",
        "تاشيرة مؤمنة",
        "سفر منظم",
        "متابعة انسانية",
        "وصول مهيأ",
      ],
    },
    cta: {
      eyebrow: "هل انتم مستعدون للبداية؟",
      title:
        "ابدؤوا باستشارة مجانية، ثم اختاروا الصيغة التي تناسب وضعكم فعلا.",
      description:
        "الهدف الاول ليس ملء ملف طويل. الهدف الاول هو فهم الطريق الصحيح وطمأنة العائلة ومعرفة الخطوة التالية بوضوح.",
      primary: "احصل على استشارتي المجانية",
      secondary: "قدم الآن",
    },
  },
};

export default function HomeLanding({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const contactHref = `/${lang}/contact`;
  const applyHref = `/${lang}/apply`;
  const servicesHref = `/${lang}/services`;

  return (
    <main className="bg-[#050505] text-white" dir={t.dir}>
      <section className="relative overflow-hidden bg-[#150506]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(119,3,4,0.78),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(177,127,2,0.18),transparent_24%),linear-gradient(135deg,#100203_0%,#25080b_35%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#B17F02]/12 blur-3xl drift-slow" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-[#770304]/35 blur-3xl" />

        <Container>
          <div className="relative py-12 sm:py-16 lg:py-24">
            <div className="grid gap-8 lg:gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
              <div
                className={`space-y-7 sm:space-y-8 animate-fade-in-up ${
                  isArabic ? "text-right" : "text-center xl:text-left"
                }`}
              >
                <p className="section-eyebrow inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/88 sm:text-xs sm:tracking-[0.22em] animate-fade-in-down" style={{ animationDelay: "200ms" }}>
                  {t.hero.badge}
                </p>

                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.32em] text-[#EDB80B]">
                    {t.hero.eyebrow}
                  </p>

                  <h1
                    className={`display-title text-[2.7rem] font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl sm:tracking-[-0.05em] lg:text-7xl ${
                      isArabic ? "max-w-4xl" : "mx-auto max-w-4xl xl:mx-0"
                    }`}
                    style={
                      isArabic
                        ? undefined
                        : { fontFamily: '"Georgia","Times New Roman",serif' }
                    }
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
                <ArabicText
                  className={`max-w-2xl text-sm font-medium leading-7 text-white/64 ${
                    isArabic ? "" : "mx-auto xl:mx-0"
                  }`}
                  text={t.hero.note}
                />

                <div
                  className={`flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:flex-wrap ${
                    isArabic
                      ? "sm:justify-end"
                      : "mx-auto items-stretch xl:mx-0 sm:items-center"
                  }`}
                >
                  <Link
                    href={contactHref}
                    className="w-full rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(177,127,2,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_45px_rgba(177,127,2,0.45)] sm:w-auto"
                  >
                    {t.hero.primary}
                  </Link>

                  <Link
                    href={servicesHref}
                    className="w-full rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14 sm:w-auto"
                  >
                    {t.hero.secondary}
                  </Link>
                </div>

                <div
                  className={`grid gap-3 sm:grid-cols-3 ${
                    isArabic ? "" : "mx-auto max-w-xl xl:mx-0 xl:max-w-none"
                  }`}
                >
                  {t.hero.stats.map((item, index) => (
                    <div
                      key={item.label}
                      className={`rounded-[1.7rem] border border-white/10 bg-black/25 p-4 backdrop-blur-md animate-fade-in-up ${
                        isArabic ? "text-right" : ""
                      }`}
                      style={{ animationDelay: `${400 + index * 100}ms` }}
                    >
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-1 text-sm text-white/65">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="pointer-events-none absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(circle_at_top,rgba(237,184,11,0.14),transparent_35%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.04),transparent_40%)]" />

                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-black/30 shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:rounded-[2.4rem]">
                  <div className="relative h-[20rem] overflow-hidden sm:h-[27rem]">
                    <img
                      src="/fr-services-hero.jpg"
                      alt="YALLA CHINA hero"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                    <div
                      className={`absolute left-5 right-5 top-5 flex ${
                        isArabic ? "justify-end" : "justify-start"
                      }`}
                    >
                      <span className="section-eyebrow rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/85">
                        {t.hero.panelEyebrow}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`space-y-4 p-5 sm:p-6 ${
                      isArabic ? "text-right" : "text-center sm:text-left"
                    }`}
                  >
                    <h2 className="display-title text-2xl font-black leading-tight text-white">
                      {t.hero.panelTitle}
                    </h2>
                    <p className="text-sm leading-7 text-white/72">
                      {t.hero.panelText}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {t.hero.panelItems.map((item) => (
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

      <TrustIndicators lang={lang} />

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
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <HomeProofSection lang={lang} />

      <TestimonialsSection lang={lang} />

      <FounderStories lang={lang} />

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
                  {t.process.eyebrow}
                </p>
                <h2 className="display-title mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
                  {t.process.title}
                </h2>
                <p
                  className={`mt-4 max-w-2xl text-base leading-8 text-white/70 ${
                    isArabic ? "" : "mx-auto lg:mx-0"
                  }`}
                >
                  {t.process.description}
                </p>
              </div>

              <div className="space-y-4">
                {t.process.steps.map((step) => (
                  <article
                    key={step.title}
                    className={`rounded-[1.8rem] border border-white/10 bg-white/[0.05] p-5 shadow-[0_18px_35px_rgba(0,0,0,0.16)] ${
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
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#180607] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,184,11,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.25),transparent_34%)]" />
                <div className="absolute inset-0 opacity-20 shoji-grid" />
                <div className="relative space-y-5">
                  <div className="overflow-hidden rounded-[2rem] border border-white/10">
                    <img
                      src="/fr-apply-hero.jpg"
                      alt="YALLA CHINA process"
                      className="h-[18rem] w-full object-cover sm:h-[22rem]"
                    />
                  </div>

                  <div className={`space-y-3 px-2 ${isArabic ? "text-right" : ""}`}>
                    <h3 className="display-title text-2xl font-black leading-tight">
                      {t.process.highlightTitle}
                    </h3>
                    <p className="text-sm leading-7 text-white/72">
                      {t.process.highlightText}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {t.process.tags.map((item) => (
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
                  className="w-full rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(177,127,2,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_45px_rgba(177,127,2,0.45)] sm:w-auto"
                >
                  {t.cta.primary}
                </Link>

                <Link
                  href={applyHref}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition-all duration-200 hover:bg-white/15 hover:border-white/30 sm:w-auto"
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
