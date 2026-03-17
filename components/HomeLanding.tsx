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
    primary: string;
    secondary: string;
    stats: { label: string; value: string }[];
    visualTag: string;
    visualTitle: string;
    visualText: string;
    routeLabel: string;
    routeItems: string[];
    contactLabel: string;
    contactNote: string;
    ribbonTitle: string;
    ribbonItems: string[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; desc: string }[];
  };
  journey: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; desc: string }[];
    tags: string[];
    visionTitle: string;
    visionText: string;
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
      eyebrow: "Votre route vers la Chine commence ici",
      title: "Projetez-vous dans votre future vie étudiante en Chine.",
      description:
        "Choisissez une destination plus ambitieuse, comprenez les étapes à venir et avancez avec un accompagnement qui rassure autant l'étudiant que la famille.",
      primary: "Postuler maintenant",
      secondary: "Voir nos services",
      stats: [
        { label: "Réponse rapide", value: "Sous 24-48h" },
        { label: "Suivi clair", value: "Du premier échange au visa" },
        { label: "Parents rassurés", value: "Explications simples et humaines" },
      ],
      visualTag: "Vision concrète",
      visualTitle: "Le projet doit déjà ressembler à un vrai départ.",
      visualText:
        "Quand l'objectif, les étapes et l'accompagnement deviennent lisibles, le rêve paraît beaucoup plus proche et beaucoup plus sérieux.",
      routeLabel: "Ce que vous obtenez",
      routeItems: [
        "Une orientation adaptée à votre niveau",
        "Un dossier plus propre et plus convaincant",
        "Un cap clair jusqu'à l'admission et au départ",
      ],
      contactLabel: "WhatsApp direct",
      contactNote:
        "Un premier message suffit pour obtenir une direction plus claire sur votre projet d'études en Chine.",
      ribbonTitle: "Ce que vous devez ressentir ici",
      ribbonItems: [
        "Confiance dans la décision",
        "Clarté sur la suite",
        "Énergie pour passer à l'action",
      ],
    },
    features: {
      eyebrow: "Pourquoi cette expérience attire",
      title: "Une ambiance plus forte, plus claire et plus motivante.",
      description:
        "Quand un étudiant arrive ici, il doit sentir que le projet est réel, accessible et accompagné avec sérieux, pas seulement présenté comme une idée lointaine.",
      items: [
        {
          title: "Projection immédiate",
          desc: "Vous devez pouvoir vous imaginer dans un nouveau rythme de vie, une vraie université et une trajectoire plus grande.",
        },
        {
          title: "Décision plus solide",
          desc: "Plus le chemin paraît lisible, plus il devient facile d'assumer la décision d'avancer.",
        },
        {
          title: "Famille rassurée",
          desc: "Des explications simples, un contact humain et une logique claire rendent le projet plus crédible pour les parents.",
        },
        {
          title: "Passage à l'action",
          desc: "Chaque bloc doit rapprocher du dossier, pas repousser la décision avec trop d'incertitude.",
        },
      ],
    },
    journey: {
      eyebrow: "Un chemin lisible",
      title: "Du premier message jusqu'au départ, la route devient claire.",
      description:
        "Le projet ne reste pas une simple envie. Il prend la forme d'étapes compréhensibles, d'un rythme plus rassurant et d'un futur qui paraît enfin atteignable.",
      steps: [
        {
          title: "01. Clarifier l'objectif",
          desc: "Nous cadrons avec vous le niveau d'étude, la filière et le type d'université qui correspondent vraiment à votre profil.",
        },
        {
          title: "02. Préparer un dossier plus fort",
          desc: "Chaque document, chaque priorité et chaque décision servent à rendre la candidature plus crédible et mieux construite.",
        },
        {
          title: "03. Aller jusqu'au départ",
          desc: "Admission, visa, préparation au voyage et suivi restent organisés jusqu'au moment où le projet devient concret.",
        },
      ],
      tags: [
        "Orientation académique",
        "Admission universitaire",
        "Visa étudiant",
        "Préparation au départ",
        "Support étudiants & parents",
        "WhatsApp rapide",
      ],
      visionTitle: "Un avenir qui paraît enfin possible.",
      visionText:
        "Le bon site ne doit pas seulement informer. Il doit vous aider à croire au projet, à mieux comprendre la route, et à sentir que vous pouvez commencer maintenant.",
    },
    cta: {
      eyebrow: "Lancer le projet",
      title: "Si cette destination vous parle, la prochaine étape est déjà prête.",
      description:
        "Découvrez les services ou envoyez votre demande dès maintenant pour transformer l'envie d'étudier en Chine en plan concret.",
      primary: "Postuler maintenant",
      secondary: "WhatsApp : +212 638-335452",
    },
  },
  en: {
    hero: {
      badge: "YALLA CHINA • Study in China • Students & Parents",
      eyebrow: "Your route to China starts here",
      title: "Picture yourself inside your future student life in China.",
      description:
        "Choose a more ambitious destination, understand the steps ahead, and move forward with guidance that reassures both students and families.",
      primary: "Apply now",
      secondary: "View our services",
      stats: [
        { label: "Fast response", value: "Within 24-48h" },
        { label: "Clear follow-up", value: "From first exchange to visa" },
        { label: "Family confidence", value: "Simple and human explanations" },
      ],
      visualTag: "A concrete vision",
      visualTitle: "The project should already feel like a real departure.",
      visualText:
        "When the goal, the steps, and the support become easier to understand, the dream starts to feel much closer and much more serious.",
      routeLabel: "What you gain",
      routeItems: [
        "Guidance matched to your level",
        "A cleaner and stronger application",
        "A clear route through admission and departure",
      ],
      contactLabel: "Direct WhatsApp",
      contactNote:
        "One first message is enough to get a clearer direction for your study project in China.",
      ribbonTitle: "What you should feel here",
      ribbonItems: [
        "Confidence in the decision",
        "Clarity about the next step",
        "Real energy to move forward",
      ],
    },
    features: {
      eyebrow: "Why this experience attracts students",
      title: "Stronger atmosphere, clearer direction, stronger desire to move.",
      description:
        "When students arrive here, they should feel that the project is real, reachable, and seriously supported, not just presented as a distant idea.",
      items: [
        {
          title: "Immediate projection",
          desc: "You should be able to picture yourself in a new academic rhythm, a real campus, and a bigger future.",
        },
        {
          title: "Stronger decision",
          desc: "The clearer the route feels, the easier it becomes to commit to the next step.",
        },
        {
          title: "Family reassurance",
          desc: "Simple explanations, human contact, and a clear logic make the project easier to trust.",
        },
        {
          title: "Natural action",
          desc: "Each section should move students closer to the application instead of leaving them in hesitation.",
        },
      ],
    },
    journey: {
      eyebrow: "A route you can follow",
      title: "From the first message to departure, the path becomes clear.",
      description:
        "The project does not stay a simple wish. It becomes a sequence of understandable steps, a calmer rhythm, and a future that finally feels reachable.",
      steps: [
        {
          title: "01. Clarify the goal",
          desc: "We help define the study level, the field, and the type of university that genuinely fit your profile.",
        },
        {
          title: "02. Build a stronger application",
          desc: "Every document, priority, and decision is organized to make the file more credible and more strategic.",
        },
        {
          title: "03. Move all the way to departure",
          desc: "Admission, visa, travel preparation, and follow-up stay organized until the project becomes real.",
        },
      ],
      tags: [
        "Academic orientation",
        "University admission",
        "Student visa",
        "Pre-departure support",
        "Students & parents guidance",
        "Fast WhatsApp contact",
      ],
      visionTitle: "A future that finally feels possible.",
      visionText:
        "A strong website should not only inform. It should help students believe in the project, understand the route, and feel ready to begin now.",
    },
    cta: {
      eyebrow: "Start the project",
      title: "If this destination feels right, the next step is already waiting.",
      description:
        "Explore the services or send your application now and start turning the desire to study in China into a concrete plan.",
      primary: "Apply now",
      secondary: "WhatsApp: +212 638-335452",
    },
  },
  ar: {
    hero: {
      badge: "YALLA CHINA • الدراسة في الصين • للطلبة والعائلات",
      eyebrow: "طريقك إلى الصين يبدأ هنا",
      title: "تخيّل نفسك في حياتك الجامعية القادمة في الصين.",
      description:
        "اختر وجهة أكبر، وافهم المراحل التي تنتظرك، وتحرك بثقة مع مرافقة تطمئن الطالب والعائلة معًا.",
      primary: "قدّم الآن",
      secondary: "اكتشف خدماتنا",
      stats: [
        { label: "رد سريع", value: "خلال 24 إلى 48 ساعة" },
        { label: "متابعة واضحة", value: "من أول تواصل إلى التأشيرة" },
        { label: "طمأنينة للعائلة", value: "شرح بسيط ومرافقة إنسانية" },
      ],
      visualTag: "رؤية ملموسة",
      visualTitle: "يجب أن يبدو المشروع من الآن كأنه بداية حقيقية.",
      visualText:
        "حين يصبح الهدف والخطوات والمرافقة أوضح، يشعر الطالب أن الحلم أقرب وأكثر واقعية وجدية.",
      routeLabel: "ما الذي ستحصل عليه",
      routeItems: [
        "توجيه يناسب مستواك الدراسي",
        "ملف أقوى وأكثر ترتيبًا",
        "طريق واضح حتى القبول والسفر",
      ],
      contactLabel: "واتساب مباشر",
      contactNote:
        "رسالة أولى تكفي لتحصل على اتجاه أوضح حول مشروع الدراسة في الصين.",
      ribbonTitle: "ما الذي يجب أن تشعر به هنا",
      ribbonItems: [
        "ثقة أكبر في القرار",
        "وضوح في الخطوة التالية",
        "حماس حقيقي للبدء",
      ],
    },
    features: {
      eyebrow: "لماذا يجذب هذا الجو الطلبة",
      title: "أجواء أقوى، طريق أوضح، ورغبة أكبر في البدء.",
      description:
        "من أول لحظة يجب أن يشعر الطالب أن المشروع حقيقي، ممكن، ومصحوب بمرافقة جدية، لا مجرد فكرة بعيدة أو صفحة معلومات فقط.",
      items: [
        {
          title: "رؤية نفسك داخل الرحلة",
          desc: "يجب أن تتخيل نفسك داخل جامعة حقيقية، وإيقاع دراسي جديد، ومستقبل أكبر من وضعك الحالي.",
        },
        {
          title: "قرار أقوى",
          desc: "كلما كان الطريق أوضح، أصبح اتخاذ القرار أسهل وأكثر ثباتًا.",
        },
        {
          title: "طمأنينة للعائلة",
          desc: "حين يكون الشرح واضحًا والتواصل إنسانيًا، تصبح الفكرة أكثر إقناعًا وارتياحًا للوالدين.",
        },
        {
          title: "انتقال طبيعي إلى التقديم",
          desc: "كل جزء هنا يجب أن يقربك من الملف بدل أن يتركك في الحيرة والتردد.",
        },
      ],
    },
    journey: {
      eyebrow: "طريق يمكن فهمه",
      title: "من أول رسالة حتى السفر، تصبح الرحلة أوضح وأسهل.",
      description:
        "المشروع لا يبقى مجرد رغبة. بل يتحول إلى خطوات مفهومة، وإيقاع أكثر طمأنينة، ومستقبل يبدو ممكنًا فعلًا.",
      steps: [
        {
          title: "01. توضيح الهدف",
          desc: "نحدد معك المستوى الدراسي والتخصص ونوع الجامعة الذي يناسب ملفك فعلًا.",
        },
        {
          title: "02. بناء ملف أقوى",
          desc: "كل وثيقة وكل أولوية وكل قرار يصبح منظمًا ليجعل طلبك أكثر قوة واحترافية.",
        },
        {
          title: "03. الوصول إلى السفر",
          desc: "القبول والتأشيرة والتحضير للسفر والمتابعة تبقى كلها مرتبة حتى يصبح المشروع واقعًا.",
        },
      ],
      tags: [
        "توجيه أكاديمي",
        "قبول جامعي",
        "تأشيرة طالب",
        "تحضير قبل السفر",
        "مرافقة للطلبة والعائلات",
        "تواصل سريع عبر واتساب",
      ],
      visionTitle: "مستقبل يبدو ممكنًا من الآن.",
      visionText:
        "الموقع القوي لا يكتفي بالمعلومات، بل يجعلك تؤمن بالمشروع، تفهم الطريق، وتشعر أنك جاهز لتبدأ من الآن.",
    },
    cta: {
      eyebrow: "ابدأ المشروع",
      title: "إذا شعرت أن هذه هي وجهتك، فالخطوة التالية جاهزة.",
      description:
        "استكشف الخدمات أو أرسل طلبك الآن، وابدأ تحويل الرغبة في الدراسة بالصين إلى خطة حقيقية وواضحة.",
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
  const whatsappLabel = isArabic ? "واتساب" : "WhatsApp";

  return (
    <main className="bg-[#050505] text-white" dir={isArabic ? "rtl" : "ltr"}>
      <section className="relative overflow-hidden bg-[#150506]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(165,21,31,0.78),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(237,184,11,0.18),transparent_24%),linear-gradient(135deg,#100203_0%,#25080b_35%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#EDB80B]/12 blur-3xl drift-slow" />
        <div className="pointer-events-none absolute right-0 top-0 h-[26rem] w-[26rem] rounded-full bg-[#8B0000]/35 blur-3xl" />

        <Container>
          <div className="relative py-14 sm:py-18 lg:py-24">
            <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
              <div className={`space-y-8 ${isArabic ? "text-right" : ""}`}>
                <p className="section-eyebrow inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/88 sm:text-xs">
                  {t.hero.badge}
                </p>

                <div className="space-y-4">
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.32em] text-[#EDB80B]">
                    {t.hero.eyebrow}
                  </p>

                  <h1
                    className="display-title max-w-4xl text-5xl font-black leading-[0.96] tracking-[-0.05em] sm:text-6xl lg:text-7xl"
                    style={
                      isArabic
                        ? undefined
                        : { fontFamily: '"Georgia","Times New Roman",serif' }
                    }
                  >
                    {t.hero.title}
                  </h1>
                </div>

                <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  {t.hero.description}
                </p>

                <div
                  className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
                    isArabic ? "sm:justify-end" : ""
                  }`}
                >
                  <Link
                    href={applyHref}
                    className="rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
                  >
                    {t.hero.primary}
                  </Link>

                  <Link
                    href={servicesHref}
                    className="rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14"
                  >
                    {t.hero.secondary}
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
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

                <div className="relative grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <article className="drift-slow overflow-hidden rounded-[2.3rem] border border-white/12 bg-black/30 shadow-[0_30px_70px_rgba(0,0,0,0.35)] sm:row-span-2">
                    <div className="relative h-[18rem] overflow-hidden sm:h-[24rem]">
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

                    <div className={`space-y-3 p-6 ${isArabic ? "text-right" : ""}`}>
                      <h2 className="display-title text-2xl font-black leading-tight text-white">
                        {t.hero.visualTitle}
                      </h2>
                      <p className="text-sm leading-7 text-white/72">
                        {t.hero.visualText}
                      </p>
                    </div>
                  </article>

                  <article
                    className={`float-gentle rounded-[2rem] border border-white/12 bg-white/[0.06] p-5 shadow-[0_25px_55px_rgba(0,0,0,0.28)] backdrop-blur-md ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                      {t.hero.routeLabel}
                    </p>
                    <div className="mt-4 space-y-3">
                      {t.hero.routeItems.map((item, index) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3"
                        >
                          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <p className="mt-1 text-sm font-medium text-white/88">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>

                  <article
                    className={`float-gentle-delay rounded-[2rem] border border-white/12 bg-[#090909]/85 p-5 shadow-[0_25px_55px_rgba(0,0,0,0.34)] ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                      {t.hero.contactLabel}
                    </p>
                    <p
                      className="contact-inline mt-3 text-2xl font-black text-white"
                      dir="ltr"
                    >
                      +212 638-335452
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/68">
                      {t.hero.contactNote}
                    </p>
                    <a
                      href="https://wa.me/212638335452"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
                    >
                      {whatsappLabel}
                    </a>
                  </article>

                  <article
                    className={`rounded-[2rem] border border-white/12 bg-white/[0.05] p-5 shadow-[0_25px_55px_rgba(0,0,0,0.25)] sm:col-span-2 ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                      {t.hero.ribbonTitle}
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {t.hero.ribbonItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/8 bg-black/18 px-4 py-3 text-sm font-medium text-white/88"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FounderStories lang={lang} variant="feature" />

      <section className="bg-[#080808] py-14 sm:py-18">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
            <div
              className={`rounded-[2.3rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_25px_60px_rgba(0,0,0,0.22)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
                {t.features.eyebrow}
              </p>
              <h2 className="display-title mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
                {t.features.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/70 sm:text-base">
                {t.features.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.features.items.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.16)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`mb-4 h-1.5 w-16 rounded-full bg-[#EDB80B] ${
                      isArabic ? "ml-auto" : ""
                    }`}
                  />
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4ede4] py-14 text-zinc-900 sm:py-18">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className={`space-y-6 ${isArabic ? "text-right" : ""}`}>
              <div>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#8B0000]">
                  {t.journey.eyebrow}
                </p>
                <h2 className="display-title mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  {t.journey.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-600">
                  {t.journey.description}
                </p>
              </div>

              <div className="space-y-4">
                {t.journey.steps.map((step) => (
                  <article
                    key={step.title}
                    className={`rounded-[1.8rem] border border-zinc-200 bg-white p-5 shadow-[0_18px_35px_rgba(15,23,42,0.05)] ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      {step.desc}
                    </p>
                  </article>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {t.journey.tags.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-center text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#180607] p-5 text-white shadow-[0_30px_80px_rgba(0,0,0,0.18)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,184,11,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.25),transparent_34%)]" />
              <div className="absolute inset-0 opacity-20 shoji-grid" />
              <div className="relative space-y-5">
                <div className="overflow-hidden rounded-[2rem] border border-white/10">
                  <img
                    src="/fr-contact-hero.jpg"
                    alt="YALLA CHINA campus vision"
                    className="h-[18rem] w-full object-cover sm:h-[22rem]"
                  />
                </div>

                <div className={`space-y-3 px-2 ${isArabic ? "text-right" : ""}`}>
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                    {t.journey.eyebrow}
                  </p>
                  <h3 className="display-title text-2xl font-black leading-tight">
                    {t.journey.visionTitle}
                  </h3>
                  <p className="text-sm leading-7 text-white/72">
                    {t.journey.visionText}
                  </p>
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
              <div className={isArabic ? "text-right" : ""}>
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
                  isArabic ? "sm:items-end" : ""
                }`}
              >
                <Link
                  href={applyHref}
                  className="rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-95"
                >
                  {t.cta.primary}
                </Link>

                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15"
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
