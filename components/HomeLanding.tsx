import Container from "@/components/Container";
import FounderStories from "@/components/FounderStories";
import Link from "next/link";

type Locale = "fr" | "en" | "ar";

type Copy = {
  hero: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    note: string;
    primary: string;
    secondary: string;
    stats: { label: string; value: string }[];
    visualTag: string;
    visualTitle: string;
    visualText: string;
    visualItems: string[];
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
    hero: {
      badge: "YALLA CHINA • Études en Chine • Étudiants & Parents",
      eyebrow: "Étudier en Chine avec un plan clair",
      title:
        "Avancez vers vos études en Chine avec un accompagnement simple, sérieux et concret.",
      description:
        "Nous aidons les étudiants et leurs familles à choisir la bonne direction, préparer une candidature plus forte, comprendre l'admission, et avancer jusqu'au visa avec plus de clarté.",
      note:
        "Réponse rapide sur WhatsApp • Pour les étudiants et les familles • Du premier message jusqu'au visa",
      primary: "Postuler maintenant",
      secondary: "Voir nos services",
      stats: [
        { label: "Orientation claire", value: "Choix du niveau et du parcours" },
        { label: "Candidature plus forte", value: "Documents et logique du dossier" },
        { label: "Visa étudiant", value: "Étapes et vérifications avant la demande" },
      ],
      visualTag: "Ce que vous cherchez au départ",
      visualTitle: "Comprendre où commencer et comment avancer.",
      visualText:
        "Les premières questions sont presque toujours les mêmes: quoi étudier, quelle université viser, quels documents préparer, et comment éviter les erreurs de départ.",
      visualItems: [
        "Choisir la bonne voie",
        "Préparer les bons documents",
        "Avancer avec des réponses rapides",
        "Rassurer la famille dès le début",
      ],
    },
    reasons: {
      eyebrow: "Pourquoi choisir YALLA CHINA",
      title: "Un accompagnement pensé pour convaincre à la fois l'étudiant et la famille.",
      description:
        "Vous avez besoin de réponses claires, d'une direction crédible et d'un accompagnement qui rassure autant l'étudiant que la famille.",
      items: [
        {
          title: "Des explications plus claires",
          desc: "Chaque étape est présentée avec un langage simple pour que le projet soit plus facile à comprendre.",
        },
        {
          title: "Un seul cap du début à la fin",
          desc: "Vous gardez une direction cohérente au lieu de chercher des réponses dispersées à chaque nouvelle étape.",
        },
        {
          title: "Un contact humain et rapide",
          desc: "WhatsApp reste visible et simple à utiliser quand vous avez besoin d'une réponse rapide.",
        },
        {
          title: "Une logique utile pour les parents",
          desc: "Le projet devient plus rassurant lorsque la famille comprend le chemin et les prochaines décisions.",
        },
      ],
    },
    process: {
      eyebrow: "Comment le projet avance",
      title: "Vous voyez tout de suite les vraies étapes, pas seulement une promesse.",
      description:
        "Le parcours devient plus simple à suivre quand chaque étape est claire: le choix, le dossier, l'admission, le visa, puis le départ.",
      steps: [
        {
          title: "01. Comprendre votre profil",
          desc: "Nous commençons par clarifier votre niveau d'étude, votre objectif, et le type d'université qui vous correspond.",
        },
        {
          title: "02. Construire un dossier solide",
          desc: "Nous structurons les documents importants pour donner à la candidature plus de cohérence et plus de force.",
        },
        {
          title: "03. Suivre l'admission",
          desc: "Nous vous aidons à rester organisé pendant les échanges, les décisions et les étapes importantes du dossier.",
        },
        {
          title: "04. Aller jusqu'au visa et au départ",
          desc: "La préparation ne s'arrête pas à l'acceptation: le visa et le départ demandent aussi une vraie méthode.",
        },
      ],
      highlightTitle: "Un projet plus lisible donne plus confiance.",
      highlightText:
        "Quand un étudiant sait quoi faire ensuite, le rêve devient un plan. Et quand la famille comprend le plan, la décision devient plus facile à assumer.",
      tags: [
        "Choix d'université",
        "Préparation du dossier",
        "Admission",
        "Visa étudiant",
        "Conseils avant départ",
        "Support familles",
      ],
    },
    cta: {
      eyebrow: "La prochaine étape",
      title: "Si vous êtes prêt à avancer, nous pouvons commencer maintenant.",
      description:
        "Découvrez les services ou envoyez votre demande dès aujourd'hui pour transformer votre projet d'études en Chine en plan concret.",
      primary: "Postuler maintenant",
      secondary: "WhatsApp : +212 638-335452",
    },
  },
  en: {
    hero: {
      badge: "YALLA CHINA • Study in China • Students & Parents",
      eyebrow: "Study in China with a clear plan",
      title:
        "Move toward your studies in China with guidance that feels simple, serious, and concrete.",
      description:
        "We help students and families choose the right direction, build a stronger application, understand admission, and move toward the visa with more clarity.",
      note:
        "Fast WhatsApp reply • For students and families • From the first message to the visa",
      primary: "Apply now",
      secondary: "View our services",
      stats: [
        { label: "Clear orientation", value: "Choosing the right level and path" },
        { label: "Stronger application", value: "Documents and file strategy" },
        { label: "Student visa", value: "Checks before you submit" },
      ],
      visualTag: "What students need first",
      visualTitle: "Understand where to start and how to move forward.",
      visualText:
        "The first questions are almost always the same: what to study, which university to target, which documents matter, and how to avoid the wrong start.",
      visualItems: [
        "Choose the right path",
        "Prepare the right documents",
        "Get fast answers",
        "Reassure the family from the beginning",
      ],
    },
    reasons: {
      eyebrow: "Why choose YALLA CHINA",
      title: "Guidance that reassures the student and gives confidence to the family.",
      description:
        "You need clear answers, a credible direction, and support that helps both students and parents feel ready to move forward.",
      items: [
        {
          title: "Clearer explanations",
          desc: "Each stage is explained in simple language so the project feels easier to understand.",
        },
        {
          title: "One direction from start to finish",
          desc: "You keep one coherent route instead of searching for different answers at every new step.",
        },
        {
          title: "Fast and human contact",
          desc: "WhatsApp stays visible and easy to use whenever you need a quick answer.",
        },
        {
          title: "A logic that reassures parents",
          desc: "The project feels safer when the family understands the route and the next decisions.",
        },
      ],
    },
    process: {
      eyebrow: "How the project moves",
      title: "You can immediately see the real steps, not just a nice promise.",
      description:
        "The route feels easier when each step is clear: the choice, the file, admission, the visa, and then departure.",
      steps: [
        {
          title: "01. Understand your profile",
          desc: "We start by clarifying your study level, your objective, and the kind of university that really fits you.",
        },
        {
          title: "02. Build a stronger file",
          desc: "We structure the important documents so the application feels more coherent and more convincing.",
        },
        {
          title: "03. Follow admission clearly",
          desc: "We help you stay organized through exchanges, decisions, and the key moments of the application.",
        },
        {
          title: "04. Move through visa and departure",
          desc: "Preparation does not stop at acceptance: the visa and departure also need a clear method.",
        },
      ],
      highlightTitle: "A clearer project builds more confidence.",
      highlightText:
        "When students know what comes next, the dream becomes a plan. And when the family understands the plan, the decision becomes easier to trust.",
      tags: [
        "University choice",
        "Application file",
        "Admission follow-up",
        "Student visa",
        "Pre-departure advice",
        "Family support",
      ],
    },
    cta: {
      eyebrow: "The next step",
      title: "If you are ready to move, we can start now.",
      description:
        "Explore the services or send your request today and turn your study project in China into a concrete plan.",
      primary: "Apply now",
      secondary: "WhatsApp: +212 638-335452",
    },
  },
  ar: {
    hero: {
      badge: "YALLA CHINA • الدراسة في الصين • للطلبة والعائلات",
      eyebrow: "ادرس في الصين بخطة واضحة",
      title:
        "تقدم نحو الدراسة في الصين بمرافقة بسيطة وجادة وواضحة من البداية.",
      description:
        "نساعد الطلبة والعائلات على اختيار الاتجاه المناسب، وتجهيز ملف أقوى، وفهم القبول، والتقدم نحو التأشيرة بخطوات أوضح وأكثر طمأنينة.",
      note:
        "رد سريع على واتساب • للطلبة والعائلات • من أول رسالة حتى التأشيرة",
      primary: "قدّم الآن",
      secondary: "اكتشف خدماتنا",
      stats: [
        { label: "توجيه واضح", value: "اختيار المستوى والمسار المناسب" },
        { label: "ملف أقوى", value: "ترتيب الوثائق ومنطق التقديم" },
        { label: "تأشيرة طالب", value: "تحقق واضح قبل إرسال الطلب" },
      ],
      visualTag: "ما الذي يحتاجه الطالب أولاً",
      visualTitle: "افهم من أين تبدأ وكيف تتحرك بثقة.",
      visualText:
        "الأسئلة الأولى غالبًا تكون نفسها: ماذا أدرس؟ أي جامعة تناسبني؟ ما هي الوثائق المهمة؟ وكيف أتجنب البداية الخاطئة؟",
      visualItems: [
        "اختيار الطريق المناسب",
        "تجهيز الوثائق الصحيحة",
        "الحصول على إجابات سريعة",
        "طمأنة العائلة من البداية",
      ],
    },
    reasons: {
      eyebrow: "لماذا تختار YALLA CHINA",
      title: "مرافقة تقنع الطالب وتطمئن العائلة في الوقت نفسه.",
      description:
        "أنت تحتاج إلى أجوبة واضحة واتجاه موثوق ومرافقة تجعل الطالب أكثر ثقة وتمنح العائلة راحة أكبر.",
      items: [
        {
          title: "شرح أوضح للمراحل",
          desc: "كل خطوة تُعرض بلغة بسيطة حتى يصبح المشروع أسهل فهمًا وأقرب إلى الواقع.",
        },
        {
          title: "اتجاه واحد من البداية إلى النهاية",
          desc: "تبقى لديك رؤية متماسكة بدل البحث عن أجوبة متفرقة في كل مرحلة جديدة.",
        },
        {
          title: "تواصل سريع وإنساني",
          desc: "واتساب يبقى واضحًا وسهل الاستخدام عندما تحتاج إلى جواب سريع.",
        },
        {
          title: "منطق يطمئن الوالدين",
          desc: "المشروع يصبح أكثر راحة عندما تفهم العائلة الطريق والقرارات القادمة.",
        },
      ],
    },
    process: {
      eyebrow: "كيف يتقدم المشروع",
      title: "ترى الخطوات الحقيقية مباشرة، لا مجرد كلام جميل.",
      description:
        "الطريق يصبح أسهل عندما تكون كل مرحلة واضحة: الاختيار، ثم الملف، ثم القبول، ثم التأشيرة، ثم الاستعداد للسفر.",
      steps: [
        {
          title: "01. فهم ملفك",
          desc: "نبدأ بتوضيح مستواك الدراسي وهدفك ونوع الجامعة التي تناسبك فعلاً.",
        },
        {
          title: "02. بناء ملف أقوى",
          desc: "نرتب الوثائق المهمة حتى يصبح التقديم أكثر انسجامًا وأكثر قوة.",
        },
        {
          title: "03. متابعة القبول بوضوح",
          desc: "نساعدك على البقاء منظمًا أثناء المراسلات والقرارات والمحطات الأساسية في الطلب.",
        },
        {
          title: "04. التقدم نحو التأشيرة والسفر",
          desc: "التحضير لا يتوقف عند القبول، لأن التأشيرة والاستعداد للسفر يحتاجان أيضًا إلى منهج واضح.",
        },
      ],
      highlightTitle: "المشروع الواضح يبني ثقة أكبر.",
      highlightText:
        "عندما يعرف الطالب ما الذي سيأتي بعد ذلك، يتحول الحلم إلى خطة. وعندما تفهم العائلة الخطة، يصبح القرار أسهل وأكثر راحة.",
      tags: [
        "اختيار الجامعة",
        "ملف التقديم",
        "متابعة القبول",
        "تأشيرة طالب",
        "نصائح قبل السفر",
        "دعم للعائلة",
      ],
    },
    cta: {
      eyebrow: "الخطوة التالية",
      title: "إذا كنت جاهزًا للتقدم، يمكننا أن نبدأ الآن.",
      description:
        "استكشف الخدمات أو أرسل طلبك اليوم لتحويل مشروع الدراسة في الصين إلى خطة واضحة وعملية.",
      primary: "قدّم الآن",
      secondary: "واتساب: +212 638-335452",
    },
  },
};

export default function HomeLanding({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = lang === "ar";
  const applyHref = `/${lang}/apply`;
  const servicesHref = `/${lang}/services`;

  return (
    <main className="bg-[#050505] text-white" dir={isArabic ? "rtl" : "ltr"}>
      <section className="relative overflow-hidden bg-[#150506]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(165,21,31,0.78),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(237,184,11,0.18),transparent_24%),linear-gradient(135deg,#100203_0%,#25080b_35%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#EDB80B]/12 blur-3xl drift-slow" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-[#8B0000]/35 blur-3xl" />

        <Container>
          <div className="relative py-12 sm:py-16 lg:py-24">
            <div className="grid gap-8 lg:gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
              <div
                className={`space-y-7 sm:space-y-8 ${
                  isArabic ? "text-right" : "text-center xl:text-left"
                }`}
              >
                <p className="section-eyebrow inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/88 sm:text-xs sm:tracking-[0.22em]">
                  {t.hero.badge}
                </p>

                <div className="space-y-4">
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
                <p
                  className={`max-w-2xl text-sm font-medium leading-7 text-white/64 ${
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
                    href={applyHref}
                    className="w-full rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
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
                  {t.hero.stats.map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-[1.7rem] border border-white/10 bg-black/25 p-4 backdrop-blur-md ${
                        isArabic ? "text-right" : ""
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">
                        {item.label}
                      </p>
                      <p className="mt-1 text-sm text-white/65">
                        {item.value}
                      </p>
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
                        {t.hero.visualTag}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`space-y-4 p-5 sm:p-6 ${
                      isArabic ? "text-right" : "text-center sm:text-left"
                    }`}
                  >
                    <h2 className="display-title text-2xl font-black leading-tight text-white">
                      {t.hero.visualTitle}
                    </h2>
                    <p className="text-sm leading-7 text-white/72">
                      {t.hero.visualText}
                    </p>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {t.hero.visualItems.map((item) => (
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
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#8B0000]">
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
                    className={`mb-4 h-1.5 w-16 rounded-full bg-[#EDB80B] ${
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
                    <h3 className="text-lg font-bold text-white">{step.title}</h3>
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

      <section className="bg-[#7c0913] py-14 sm:py-18">
        <Container>
          <div className="rounded-[2.5rem] border border-white/10 bg-black/20 p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className={isArabic ? "text-right" : "text-center lg:text-left"}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
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
                  href={applyHref}
                  className="w-full rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.cta.primary}
                </Link>

                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15 sm:w-auto"
                >
                  {t.cta.secondary}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
