import Container from "@/components/Container";
import Link from "next/link";

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
  services: {
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
      badge: "Services • YALLA CHINA",
      title: "Des services clairs pour passer du projet aux vraies démarches.",
      description:
        "Vous recevez ici l'essentiel pour avancer avec méthode: orientation, choix d'université, préparation du dossier, admission, visa étudiant et préparation au départ.",
      primary: "Commencer ma candidature",
      secondary: "Parler sur WhatsApp",
      stats: [
        { label: "Choix plus clair", value: "Selon votre profil et votre objectif" },
        { label: "Dossier mieux préparé", value: "Documents et priorités" },
        { label: "Suivi plus simple", value: "Jusqu'à l'admission et au visa" },
      ],
      panelEyebrow: "Ce que vous obtenez",
      panelTitle: "Un accompagnement utile à chaque étape importante.",
      panelText:
        "Le but n'est pas seulement de répondre à une question, mais de vous aider à garder une vraie logique du début à la fin.",
      panelItems: [
        "Des choix mieux cadrés",
        "Un dossier plus propre",
        "Des explications plus rassurantes",
      ],
    },
    services: {
      eyebrow: "Ce que nous faisons",
      title: "Chaque service répond à un besoin concret du projet.",
      description:
        "Nous avons organisé l'accompagnement autour des vraies décisions que les étudiants et les familles doivent prendre.",
      items: [
        {
          title: "Orientation académique",
          desc: "Nous clarifions le niveau, la filière et le type de parcours qui ont le plus de sens pour votre profil.",
        },
        {
          title: "Choix d'université",
          desc: "Nous vous aidons à viser des établissements cohérents avec votre projet et vos priorités.",
        },
        {
          title: "Préparation du dossier",
          desc: "Nous structurons les documents essentiels pour rendre la candidature plus crédible et plus claire.",
        },
        {
          title: "Suivi d'admission",
          desc: "Nous restons présents pendant les étapes importantes pour garder le dossier bien orienté.",
        },
        {
          title: "Visa étudiant",
          desc: "Nous expliquons la logique du visa, les vérifications à faire et les documents à préparer.",
        },
        {
          title: "Préparation au départ",
          desc: "Avant de voyager, nous vous aidons à mieux comprendre l'arrivée, l'installation et la suite du projet.",
        },
      ],
    },
    process: {
      eyebrow: "Comment cela se passe",
      title: "Un service professionnel se voit aussi dans la méthode.",
      description:
        "Au lieu d'avancer dans le flou, vous comprenez qui fait quoi, dans quel ordre, et à quoi sert chaque étape.",
      steps: [
        {
          title: "01. Échange sur votre projet",
          desc: "Nous partons de votre niveau, de vos questions et de votre objectif pour cadrer la bonne direction.",
        },
        {
          title: "02. Sélection et stratégie",
          desc: "Nous organisons les choix d'université et la logique du dossier avant de passer à la suite.",
        },
        {
          title: "03. Candidature et admission",
          desc: "Nous suivons les étapes importantes du dossier pour garder une progression plus propre et plus rassurante.",
        },
        {
          title: "04. Visa et départ",
          desc: "Nous vous aidons à préparer la phase finale pour que le projet reste clair jusqu'au voyage.",
        },
      ],
      supportTitle: "Ce que les familles apprécient le plus",
      supportText:
        "Une bonne méthode réduit les erreurs, évite les malentendus et donne plus de confiance à toutes les personnes impliquées dans le projet.",
      supportItems: [
        "Réponses rapides quand une question bloque",
        "Explications simples pour les parents",
        "Une progression plus facile à suivre",
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les réponses utiles avant de commencer.",
      items: [
        {
          question: "Est-ce que vous accompagnez aussi les parents ?",
          answer:
            "Oui. Nous expliquons le projet, les étapes et les décisions de manière plus claire pour l'étudiant comme pour la famille.",
        },
        {
          question: "Est-ce que vous aidez pour le visa étudiant ?",
          answer:
            "Oui. Nous vous aidons à comprendre la logique du visa, les documents attendus et les vérifications importantes avant la demande.",
        },
        {
          question: "Puis-je commencer directement sur WhatsApp ?",
          answer:
            "Oui. C'est souvent la manière la plus simple pour poser vos premières questions et voir si le projet est prêt à avancer.",
        },
        {
          question: "Est-ce que tout se fait d'un coup ?",
          answer:
            "Non. Le projet avance étape par étape: orientation, dossier, admission, visa puis préparation au départ.",
        },
      ],
    },
    cta: {
      eyebrow: "Passer à l'action",
      title: "Si vous savez déjà que vous voulez avancer, la suite est simple.",
      description:
        "Postulez maintenant ou écrivez-nous sur WhatsApp pour commencer avec une première orientation claire.",
      primary: "Postuler maintenant",
      secondary: "WhatsApp : +212 638-335452",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Services • YALLA CHINA",
      title: "Clear services that move your project from idea to real steps.",
      description:
        "You get the support needed to move with method: orientation, university choice, application preparation, admission follow-up, student visa support, and departure preparation.",
      primary: "Start my application",
      secondary: "Talk on WhatsApp",
      stats: [
        { label: "Clearer choices", value: "Based on your profile and goal" },
        { label: "Better file", value: "Documents and priorities organized" },
        { label: "Simpler follow-up", value: "Through admission and visa" },
      ],
      panelEyebrow: "What you get",
      panelTitle: "Useful support at each important stage.",
      panelText:
        "The goal is not only to answer one question, but to help you keep one clear logic from the beginning to the end.",
      panelItems: [
        "Better framed choices",
        "A cleaner application file",
        "More reassuring explanations",
      ],
    },
    services: {
      eyebrow: "What we do",
      title: "Each service answers a real need inside the project.",
      description:
        "We organized the support around the actual decisions that students and families need to make.",
      items: [
        {
          title: "Academic orientation",
          desc: "We clarify the level, field, and type of program that make the most sense for your profile.",
        },
        {
          title: "University choice",
          desc: "We help you target universities that are coherent with your project and priorities.",
        },
        {
          title: "Application preparation",
          desc: "We organize the essential documents to make the application more credible and easier to understand.",
        },
        {
          title: "Admission follow-up",
          desc: "We stay present through the key stages so the file keeps moving in the right direction.",
        },
        {
          title: "Student visa",
          desc: "We explain the visa logic, the checks to make, and the documents to prepare.",
        },
        {
          title: "Departure preparation",
          desc: "Before you travel, we help you understand arrival, settling in, and the next phase of the project.",
        },
      ],
    },
    process: {
      eyebrow: "How it works",
      title: "Professional support also shows in the method.",
      description:
        "Instead of moving through uncertainty, you understand who does what, in which order, and why each stage matters.",
      steps: [
        {
          title: "01. Project discussion",
          desc: "We start from your level, your questions, and your goal to define the right direction.",
        },
        {
          title: "02. Selection and strategy",
          desc: "We organize university choices and the file logic before moving to the next step.",
        },
        {
          title: "03. Application and admission",
          desc: "We follow the key stages of the file to keep the process cleaner and more reassuring.",
        },
        {
          title: "04. Visa and departure",
          desc: "We help prepare the final phase so the project stays clear until the trip.",
        },
      ],
      supportTitle: "What families usually appreciate most",
      supportText:
        "A clear method reduces mistakes, avoids confusion, and gives more confidence to everyone involved in the project.",
      supportItems: [
        "Fast answers when a question blocks progress",
        "Simple explanations for parents",
        "A route that is easier to follow",
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Helpful answers before you begin.",
      items: [
        {
          question: "Do you support parents too?",
          answer:
            "Yes. We explain the project, the stages, and the decisions more clearly for both students and families.",
        },
        {
          question: "Do you help with the student visa?",
          answer:
            "Yes. We help you understand the visa logic, the expected documents, and the important checks before submitting.",
        },
        {
          question: "Can I start directly on WhatsApp?",
          answer:
            "Yes. That is often the easiest way to ask your first questions and see whether the project is ready to move forward.",
        },
        {
          question: "Does everything happen at once?",
          answer:
            "No. The project moves step by step: orientation, file, admission, visa, then departure preparation.",
        },
      ],
    },
    cta: {
      eyebrow: "Take the next step",
      title: "If you already know you want to move, the next step is simple.",
      description:
        "Apply now or write to us on WhatsApp to begin with a clear first direction.",
      primary: "Apply now",
      secondary: "WhatsApp: +212 638-335452",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "الخدمات • YALLA CHINA",
      title: "خدمات واضحة تنقل مشروعك من الفكرة إلى الخطوات الحقيقية.",
      description:
        "هنا تجد المرافقة التي تحتاجها لتتقدم بخطوات منظمة: التوجيه، اختيار الجامعة، تجهيز الملف، متابعة القبول، دعم التأشيرة، والتحضير للسفر.",
      primary: "ابدأ طلبك",
      secondary: "تحدث معنا على واتساب",
      stats: [
        { label: "اختيارات أوضح", value: "حسب ملفك وهدفك" },
        { label: "ملف أفضل", value: "ترتيب الوثائق والأولويات" },
        { label: "متابعة أسهل", value: "حتى القبول والتأشيرة" },
      ],
      panelEyebrow: "ما الذي ستحصل عليه",
      panelTitle: "مرافقة مفيدة في كل مرحلة مهمة.",
      panelText:
        "الهدف ليس فقط الإجابة عن سؤال واحد، بل مساعدتك على الحفاظ على منطق واضح من البداية إلى النهاية.",
      panelItems: [
        "اختيارات أدق",
        "ملف أكثر ترتيبًا",
        "شرح يبعث على الطمأنينة",
      ],
    },
    services: {
      eyebrow: "ماذا نفعل",
      title: "كل خدمة هنا تجيب عن حاجة حقيقية داخل المشروع.",
      description:
        "رتبنا المرافقة حول القرارات الفعلية التي يحتاج الطلبة والعائلات إلى اتخاذها.",
      items: [
        {
          title: "التوجيه الأكاديمي",
          desc: "نوضح المستوى والتخصص ونوع البرنامج الذي يناسب ملفك بشكل أفضل.",
        },
        {
          title: "اختيار الجامعة",
          desc: "نساعدك على استهداف جامعات منسجمة مع مشروعك وأولوياتك.",
        },
        {
          title: "تجهيز ملف التقديم",
          desc: "ننظم الوثائق الأساسية حتى يصبح الطلب أكثر قوة وأسهل في الفهم.",
        },
        {
          title: "متابعة القبول",
          desc: "نبقى معك في المراحل المهمة حتى يظل الملف متجهًا في الطريق الصحيح.",
        },
        {
          title: "تأشيرة الطالب",
          desc: "نشرح منطق التأشيرة، وما الذي يجب التحقق منه، وما هي الوثائق المطلوبة.",
        },
        {
          title: "التحضير للسفر",
          desc: "قبل السفر نساعدك على فهم الوصول والاستقرار وبداية المرحلة الجديدة.",
        },
      ],
    },
    process: {
      eyebrow: "كيف يتم العمل",
      title: "الاحترافية تظهر أيضًا في الطريقة.",
      description:
        "بدل أن تتحرك وسط الغموض، تفهم من يقوم بماذا، وبأي ترتيب، ولماذا كل مرحلة مهمة.",
      steps: [
        {
          title: "01. مناقشة المشروع",
          desc: "نبدأ من مستواك وأسئلتك وهدفك حتى نحدد الاتجاه المناسب.",
        },
        {
          title: "02. الاختيار والاستراتيجية",
          desc: "ننظم اختيار الجامعات ومنطق الملف قبل الانتقال إلى المرحلة التالية.",
        },
        {
          title: "03. التقديم والقبول",
          desc: "نتابع المراحل الأساسية للملف حتى يبقى المسار أكثر وضوحًا واطمئنانًا.",
        },
        {
          title: "04. التأشيرة والسفر",
          desc: "نساعدك على تجهيز المرحلة الأخيرة حتى يبقى المشروع واضحًا إلى وقت السفر.",
        },
      ],
      supportTitle: "ما الذي تقدره العائلات أكثر",
      supportText:
        "الطريقة الواضحة تقلل الأخطاء وتمنع الالتباس وتمنح ثقة أكبر لكل من يشارك في المشروع.",
      supportItems: [
        "إجابات سريعة عندما يتوقف التقدم",
        "شرح بسيط للوالدين",
        "مسار أسهل في المتابعة",
      ],
    },
    faq: {
      eyebrow: "أسئلة متكررة",
      title: "إجابات مفيدة قبل أن تبدأ.",
      items: [
        {
          question: "هل ترافقون الوالدين أيضًا؟",
          answer:
            "نعم. نشرح المشروع والمراحل والقرارات بشكل أوضح للطلبة وللعائلات معًا.",
        },
        {
          question: "هل تساعدون في تأشيرة الطالب؟",
          answer:
            "نعم. نساعدك على فهم منطق التأشيرة والوثائق المطلوبة والنقاط المهمة قبل التقديم.",
        },
        {
          question: "هل أستطيع أن أبدأ مباشرة على واتساب؟",
          answer:
            "نعم. هذه غالبًا أسهل طريقة لطرح الأسئلة الأولى ومعرفة ما إذا كان المشروع جاهزًا للتقدم.",
        },
        {
          question: "هل تتم كل المراحل دفعة واحدة؟",
          answer:
            "لا. المشروع يتحرك خطوة بخطوة: توجيه، ملف، قبول، تأشيرة، ثم تحضير للسفر.",
        },
      ],
    },
    cta: {
      eyebrow: "انتقل إلى الخطوة التالية",
      title: "إذا كنت تعرف أنك تريد التقدم، فالخطوة التالية بسيطة.",
      description:
        "قدّم الآن أو اكتب لنا على واتساب لتبدأ باتجاه أول واضح ومفيد.",
      primary: "قدّم الآن",
      secondary: "واتساب: +212 638-335452",
    },
  },
};

export default function ServicesPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const applyHref = `/${lang}/apply`;

  return (
    <main className="bg-[#050505] text-white" dir={t.dir}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.74),transparent_28%),radial-gradient(circle_at_top_right,rgba(237,184,11,0.16),transparent_20%),linear-gradient(135deg,#180405_0%,#29080b_40%,#060606_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <Container>
          <div className="relative grid gap-8 py-12 lg:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
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
                  href={applyHref}
                  className="w-full rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.hero.primary}
                </Link>
                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14 sm:w-auto"
                >
                  {t.hero.secondary}
                </a>
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
                <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
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
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
                {t.services.eyebrow}
              </p>
              <h2 className="display-title mt-3 text-2xl font-black tracking-tight sm:text-3xl">
                {t.services.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
                {t.services.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {t.services.items.map((item) => (
                <article
                  key={item.title}
                  className={`flex h-full flex-col rounded-[1.8rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_26px_45px_rgba(15,23,42,0.08)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`h-1.5 w-16 rounded-full bg-[#EDB80B] ${
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

      <section className="bg-[#080808] py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div
              className={`space-y-5 ${
                isArabic ? "text-right" : "text-center lg:text-left"
              }`}
            >
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_55px_rgba(0,0,0,0.18)] sm:p-8">
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
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
                      {step.title}
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,184,11,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.25),transparent_34%)]" />
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
                    <h3 className="display-title text-2xl font-black leading-tight text-white">
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
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
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
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15 sm:w-auto"
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
