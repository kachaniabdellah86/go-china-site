import Container from "@/components/Container";
import FounderStories from "@/components/FounderStories";
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
  route: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; desc: string }[];
    supportEyebrow: string;
    supportTitle: string;
    supportText: string;
    supportItems: string[];
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
      title: "Tout ce qu'il vous faut pour étudier en Chine avec confiance.",
      description:
        "Vous n'avez pas besoin d'avancer seul. Nous vous aidons à choisir la bonne voie, préparer un dossier solide, comprendre le visa étudiant et rester serein jusqu'au départ.",
      primary: "Commencer ma candidature",
      secondary: "Parler sur WhatsApp",
      stats: [
        { label: "Orientation claire", value: "Selon votre profil" },
        { label: "Dossier structuré", value: "Étape par étape" },
        { label: "Suivi réel", value: "Jusqu'au départ" },
      ],
      panelEyebrow: "Ce que vous gagnez",
      panelTitle: "Un parcours plus simple, plus solide et plus rassurant.",
      panelText:
        "Chaque service est pensé pour vous faire gagner du temps, éviter les erreurs et avancer avec plus de confiance.",
      panelItems: [
        "Des conseils adaptés à votre niveau",
        "Une vraie lecture de votre projet",
        "Un accompagnement humain pour vous et votre famille",
      ],
    },
    services: {
      eyebrow: "Votre accompagnement",
      title: "Nous restons avec vous à chaque étape importante.",
      description:
        "Du premier échange jusqu'aux démarches finales, vous gardez une direction claire, un dossier mieux préparé et un contact rapide quand vous en avez besoin.",
      items: [
        {
          title: "Orientation académique",
          desc: "Nous vous aidons à choisir le niveau, la filière et le type d'université qui correspondent vraiment à votre profil.",
        },
        {
          title: "Choix d'université",
          desc: "Nous clarifions les options sérieuses pour que vous visiez des établissements cohérents avec votre projet.",
        },
        {
          title: "Préparation du dossier",
          desc: "Documents, cohérence du profil et détails importants: votre candidature devient plus propre et plus convaincante.",
        },
        {
          title: "Suivi d'admission",
          desc: "Nous restons présents pendant les échanges et les étapes clés pour garder votre dossier bien orienté.",
        },
        {
          title: "Visa étudiant",
          desc: "Nous vous guidons sur les documents, la logique du visa et les points à vérifier avant la demande.",
        },
        {
          title: "Préparation au départ",
          desc: "Avant de partir, vous recevez des repères utiles pour voyager, arriver sereinement et mieux démarrer.",
        },
      ],
    },
    route: {
      eyebrow: "Comment on avance",
      title: "Votre projet devient un chemin clair à suivre.",
      description:
        "Au lieu de tout gérer seul, vous avancez avec un rythme plus simple: d'abord la clarté, ensuite le dossier, puis les démarches finales.",
      steps: [
        {
          title: "01. Vous partagez votre objectif",
          desc: "Vous nous expliquez votre niveau, votre ville, vos questions et le type d'études que vous visez.",
        },
        {
          title: "02. Nous cadrons la meilleure voie",
          desc: "Nous vous aidons à faire les bons choix pour éviter les hésitations et les erreurs de départ.",
        },
        {
          title: "03. Nous vous accompagnons jusqu'au départ",
          desc: "Admission, visa, préparation et suivi restent organisés avec une logique claire jusqu'à la suite du voyage.",
        },
      ],
      supportEyebrow: "Un vrai soutien",
      supportTitle: "Vous avancez avec des réponses rapides et un contact humain.",
      supportText:
        "Le projet reste plus rassurant quand vous pouvez poser vos questions, obtenir des explications simples et garder un interlocuteur disponible.",
      supportItems: [
        "Réponse rapide sur WhatsApp",
        "Explications claires pour les parents",
        "Suivi jusqu'aux dernières étapes",
      ],
    },
    cta: {
      eyebrow: "Prêt à avancer",
      title: "Si votre projet compte vraiment, la prochaine étape peut commencer maintenant.",
      description:
        "Envoyez votre demande ou écrivez-nous directement. Nous vous aidons à transformer votre idée en plan concret.",
      primary: "Postuler maintenant",
      secondary: "WhatsApp : +212 638-335452",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Services • YALLA CHINA",
      title: "Everything you need to study in China with confidence.",
      description:
        "You do not have to figure it out alone. We help you choose the right path, build a stronger file, understand the student visa, and move forward with peace of mind.",
      primary: "Start my application",
      secondary: "Talk on WhatsApp",
      stats: [
        { label: "Clear guidance", value: "Matched to your profile" },
        { label: "Stronger file", value: "Step by step" },
        { label: "Real follow-up", value: "Until departure" },
      ],
      panelEyebrow: "What you gain",
      panelTitle: "A simpler, stronger, and more reassuring route.",
      panelText:
        "Every service is designed to save you time, reduce mistakes, and help you move with more confidence.",
      panelItems: [
        "Advice adapted to your level",
        "A real understanding of your project",
        "Human support for you and your family",
      ],
    },
    services: {
      eyebrow: "Your support system",
      title: "We stay with you through every important step.",
      description:
        "From the first conversation to the final procedures, you keep a clear direction, a better prepared application, and a fast contact when you need it.",
      items: [
        {
          title: "Academic orientation",
          desc: "We help you choose the level, field, and type of university that truly fit your profile.",
        },
        {
          title: "University selection",
          desc: "We clarify the serious options so you can target universities that make sense for your project.",
        },
        {
          title: "Application preparation",
          desc: "Documents, profile consistency, and key details all come together in a cleaner and stronger application.",
        },
        {
          title: "Admission follow-up",
          desc: "We stay present during exchanges and key moments so your file keeps moving in the right direction.",
        },
        {
          title: "Student visa guidance",
          desc: "We guide you through the documents, the visa logic, and the checks to make before you apply.",
        },
        {
          title: "Pre-departure preparation",
          desc: "Before you leave, you get useful guidance to travel, arrive with confidence, and start well.",
        },
      ],
    },
    route: {
      eyebrow: "How we move forward",
      title: "Your project becomes a clear route you can actually follow.",
      description:
        "Instead of handling everything alone, you move through a simpler rhythm: first clarity, then the file, then the final steps.",
      steps: [
        {
          title: "01. You share your goal",
          desc: "You tell us your level, city, questions, and the kind of studies you want to pursue.",
        },
        {
          title: "02. We shape the right path",
          desc: "We help you make the right choices early so you avoid hesitation and unnecessary mistakes.",
        },
        {
          title: "03. We support you until departure",
          desc: "Admission, visa, preparation, and follow-up stay organized with a clear logic all the way forward.",
        },
      ],
      supportEyebrow: "Real support",
      supportTitle: "You move forward with fast answers and real human contact.",
      supportText:
        "A study project feels safer when you can ask questions, get simple explanations, and keep someone available on your side.",
      supportItems: [
        "Fast WhatsApp response",
        "Clear explanations for parents",
        "Follow-up through the final steps",
      ],
    },
    cta: {
      eyebrow: "Ready to move",
      title: "If your project matters, the next step can start today.",
      description:
        "Send your request or write to us directly. We help turn your idea into a concrete plan.",
      primary: "Apply now",
      secondary: "WhatsApp: +212 638-335452",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "الخدمات • YALLA CHINA",
      title: "كل ما تحتاجه للدراسة في الصين بثقة أكبر.",
      description:
        "لست بحاجة إلى أن تكتشف الطريق وحدك. نحن نساعدك على اختيار المسار المناسب، تجهيز ملف أقوى، فهم تأشيرة الدراسة، والتقدم بهدوء حتى موعد السفر.",
      primary: "ابدأ طلبي الآن",
      secondary: "تحدث معنا على واتساب",
      stats: [
        { label: "توجيه واضح", value: "حسب ملفك" },
        { label: "ملف أقوى", value: "خطوة بخطوة" },
        { label: "متابعة حقيقية", value: "حتى السفر" },
      ],
      panelEyebrow: "ما الذي تكسبه",
      panelTitle: "مسار أبسط وأقوى وأكثر طمأنينة.",
      panelText:
        "كل خدمة هنا مصممة لتوفر عليك الوقت، تقلل الأخطاء، وتساعدك على التقدم بثقة أكبر.",
      panelItems: [
        "نصائح مناسبة لمستواك",
        "فهم حقيقي لمشروعك",
        "مرافقة إنسانية لك ولعائلتك",
      ],
    },
    services: {
      eyebrow: "مرافقتك",
      title: "نبقى معك في كل مرحلة مهمة من المشروع.",
      description:
        "من أول تواصل إلى آخر الإجراءات، تبقى لديك رؤية أوضح، وملف أفضل، وطرف سريع يمكن الرجوع إليه متى احتجت.",
      items: [
        {
          title: "التوجيه الأكاديمي",
          desc: "نساعدك على اختيار المستوى والتخصص ونوع الجامعة الذي يناسب ملفك فعلاً.",
        },
        {
          title: "اختيار الجامعة",
          desc: "نوضح لك الخيارات الجادة حتى تتجه إلى جامعات منطقية ومناسبة لمشروعك.",
        },
        {
          title: "تجهيز ملف التقديم",
          desc: "الوثائق، انسجام الملف، والتفاصيل المهمة تصبح أكثر ترتيباً وقوة داخل طلبك.",
        },
        {
          title: "متابعة القبول",
          desc: "نبقى معك أثناء المراحل الأساسية حتى يظل ملفك متجهاً في الطريق الصحيح.",
        },
        {
          title: "تأشيرة الدراسة",
          desc: "نرشدك في الوثائق المطلوبة ومنطق التأشيرة والنقاط التي يجب التحقق منها قبل الطلب.",
        },
        {
          title: "الاستعداد للسفر",
          desc: "قبل السفر تحصل على إرشادات عملية تساعدك على الوصول بثقة وبداية دراسية أفضل.",
        },
      ],
    },
    route: {
      eyebrow: "كيف نسير معك",
      title: "مشروعك يتحول إلى طريق واضح يمكنك اتباعه بسهولة.",
      description:
        "بدلاً من محاولة إدارة كل شيء وحدك، تتقدم بإيقاع أبسط: أولاً الوضوح، ثم الملف، ثم الإجراءات النهائية.",
      steps: [
        {
          title: "01. تخبرنا بهدفك",
          desc: "تشاركنا مستواك، مدينتك، أسئلتك، ونوع الدراسة التي تريد الوصول إليها.",
        },
        {
          title: "02. نحدد الطريق المناسب",
          desc: "نساعدك على اتخاذ القرارات الصحيحة مبكراً حتى تتجنب التردد والأخطاء غير الضرورية.",
        },
        {
          title: "03. نرافقك حتى السفر",
          desc: "القبول، التأشيرة، التحضير، والمتابعة تبقى كلها منظمة بمنطق واضح حتى المرحلة الأخيرة.",
        },
      ],
      supportEyebrow: "دعم حقيقي",
      supportTitle: "تتقدم مع إجابات سريعة وتواصل إنساني مباشر.",
      supportText:
        "المشروع يصبح أكثر راحة عندما تستطيع طرح أسئلتك، فهم الخطوات ببساطة، والرجوع إلى شخص متاح إلى جانبك.",
      supportItems: [
        "رد سريع على واتساب",
        "شرح واضح للآباء",
        "متابعة حتى آخر المراحل",
      ],
    },
    cta: {
      eyebrow: "جاهز للتقدم",
      title: "إذا كان مشروعك مهماً، فالخطوة التالية يمكن أن تبدأ اليوم.",
      description:
        "أرسل طلبك أو تواصل معنا مباشرة. نحن نساعدك على تحويل الفكرة إلى خطة واضحة وقابلة للتنفيذ.",
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
          <div className="relative grid gap-10 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
            <div className={`space-y-7 ${isArabic ? "text-right" : ""}`}>
              <p className="section-eyebrow inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-sm">
                {t.hero.badge}
              </p>

              <div className="space-y-4">
                <h1 className="display-title max-w-4xl text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                  {t.hero.title}
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
                  {t.hero.description}
                </p>
              </div>

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
                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14"
                >
                  {t.hero.secondary}
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
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
                  className="h-[22rem] w-full object-cover sm:h-[28rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div
                className={`absolute bottom-4 left-4 right-4 rounded-[1.8rem] border border-white/10 bg-black/70 p-5 shadow-xl backdrop-blur-md ${
                  isArabic ? "text-right" : ""
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

      <FounderStories lang={lang} variant="compact" />

      <section className="bg-[#f4ede4] py-12 text-zinc-900 sm:py-16">
        <Container>
          <div className="space-y-6">
            <div
              className={`rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-8 ${
                isArabic ? "lg:ml-auto text-right" : ""
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

            <div className="grid gap-3 sm:grid-cols-3">
              {t.hero.stats.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-[1.5rem] border border-zinc-200 bg-white px-5 py-4 shadow-[0_14px_30px_rgba(15,23,42,0.04)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-zinc-900">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm text-zinc-500">{item.value}</p>
                </div>
              ))}
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
            <div className={`space-y-5 ${isArabic ? "text-right" : ""}`}>
              <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_55px_rgba(0,0,0,0.18)] sm:p-8">
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                  {t.route.eyebrow}
                </p>
                <h2 className="display-title mt-3 text-3xl font-black tracking-tight text-white">
                  {t.route.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                  {t.route.description}
                </p>
              </div>

              <div className="space-y-4">
                {t.route.steps.map((step) => (
                  <article
                    key={step.title}
                    className={`rounded-[1.8rem] border border-white/10 bg-black/20 p-5 shadow-[0_18px_35px_rgba(0,0,0,0.16)] ${
                      isArabic ? "text-right" : ""
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
                    <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                      {t.route.supportEyebrow}
                    </p>
                    <h3 className="display-title mt-3 text-2xl font-black leading-tight text-white">
                      {t.route.supportTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/72">
                      {t.route.supportText}
                    </p>
                  </div>

                  <div className="grid gap-3">
                    {t.route.supportItems.map((item) => (
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

      <section className="bg-[#7c0913] py-12 sm:py-16">
        <Container>
          <div className="rounded-[2.4rem] border border-white/10 bg-black/20 p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div className={isArabic ? "text-right" : ""}>
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
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15"
                >
                  {isArabic ? (
                    <>
                      <span>واتساب</span>
                      <span className="contact-inline">+212 638-335452</span>
                    </>
                  ) : (
                    t.cta.secondary
                  )}
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
