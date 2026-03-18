import Container from "@/components/Container";
import Link from "next/link";

type Locale = "fr" | "en" | "ar";

type Copy = {
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  metrics: { value: string; label: string }[];
  quoteTitle: string;
  quoteText: string;
  primary: string;
  secondary: string;
  cards: {
    kicker: string;
    title: string;
    text: string;
    imageSrc: string;
  }[];
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    eyebrow: "Le fondateur",
    title: "Une présence réelle rend le projet plus crédible et plus rassurant.",
    description:
      "Avant de choisir un accompagnement, les étudiants veulent voir qui parle, comprendre l'expérience derrière les conseils, et sentir qu'il y a une vraie personne derrière le suivi.",
    chips: ["Visage réel", "Contenu éducatif", "Contact direct"],
    metrics: [
      { value: "24-48h", label: "pour une première réponse claire" },
      { value: "1 contact", label: "pour garder un cap simple" },
      { value: "Du projet au visa", label: "avec une même logique" },
    ],
    quoteTitle: "Pourquoi cette section compte",
    quoteText:
      "Les étudiants et les familles avancent plus facilement quand ils voient une vraie personne, une vraie expérience et des réponses concrètes à leurs questions.",
    primary: "Commencer ma candidature",
    secondary: "Nous contacter",
    cards: [
      {
        kicker: "Expérience réelle",
        title: "Mon expérience personnelle en Chine",
        text: "Une histoire vécue aide l'étudiant à se projeter et à faire davantage confiance au projet.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "Étapes claires",
        title: "Les étapes des études en Chine",
        text: "Quand le parcours est bien expliqué, le projet paraît plus simple, plus concret et mieux organisé.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "Choix de destination",
        title: "Pourquoi choisir la Chine ?",
        text: "Le bon message aide à comprendre ce que la Chine peut offrir et à quel profil cette destination convient.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "Premier pas",
        title: "Comment étudier en Chine ?",
        text: "Une explication claire du départ réduit l'hésitation et donne envie de passer à l'action.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "The founder",
    title: "A real presence makes the project feel more credible and more reassuring.",
    description:
      "Before choosing guidance, students want to see who is speaking, understand the experience behind the advice, and feel that there is a real person behind the follow-up.",
    chips: ["Real face", "Educational content", "Direct contact"],
    metrics: [
      { value: "24-48h", label: "for a first clear reply" },
      { value: "1 contact", label: "to keep the route simple" },
      { value: "From plan to visa", label: "with one clear logic" },
    ],
    quoteTitle: "Why this section matters",
    quoteText:
      "Students and families trust the next step more when they can see a real person, real experience, and concrete answers to the questions they actually have.",
    primary: "Start my application",
    secondary: "Contact us",
    cards: [
      {
        kicker: "Real experience",
        title: "My personal experience in China",
        text: "A lived story helps students picture themselves inside the journey and trust the project more.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "Clear stages",
        title: "The study path in China",
        text: "When the route is explained well, the project feels simpler, more concrete, and easier to organize.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "Destination choice",
        title: "Why choose China?",
        text: "The right message explains what China can offer and which kind of student it can really fit.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "First step",
        title: "How do you study in China?",
        text: "A clear explanation of the beginning reduces hesitation and makes action feel more natural.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
  ar: {
    dir: "rtl",
    eyebrow: "المؤسس",
    title: "وجود شخص حقيقي وراء المشروع يجعل الثقة أكبر والقرار أسهل.",
    description:
      "قبل أن يختار الطالب جهة ترافقه، يريد أن يرى من يتحدث معه، ويفهم الخبرة وراء النصيحة، ويشعر أن هناك شخصًا حقيقيًا سيتابع معه الطريق.",
    chips: ["وجه حقيقي", "محتوى تعليمي", "تواصل مباشر"],
    metrics: [
      { value: "24 إلى 48 ساعة", label: "لأول رد واضح ومفيد" },
      { value: "جهة واحدة واضحة", label: "حتى يبقى المسار بسيطًا" },
      { value: "من المشروع إلى التأشيرة", label: "بمنطق واضح واحد" },
    ],
    quoteTitle: "لماذا هذه الفقرة مهمة",
    quoteText:
      "الطالب والعائلة يشعران بثقة أكبر عندما يريان شخصًا حقيقيًا وخبرة واضحة وأجوبة عملية على الأسئلة التي تهمهما فعلاً.",
    primary: "ابدأ طلبك",
    secondary: "تواصل معنا",
    cards: [
      {
        kicker: "تجربة حقيقية",
        title: "تجربتي الشخصية في الصين",
        text: "القصة الواقعية تساعد الطالب على تخيل نفسه داخل الرحلة وتزيد ثقته في المشروع.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "مراحل واضحة",
        title: "مراحل الدراسة في الصين",
        text: "عندما تكون المراحل واضحة، يصبح المشروع أسهل فهمًا وأكثر تنظيمًا.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "اختيار الوجهة",
        title: "لماذا تختار الصين؟",
        text: "الرسالة الجيدة تشرح ما الذي تقدمه الصين ولأي نوع من الطلبة يمكن أن تكون مناسبة.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "أول خطوة",
        title: "كيف تدرس في الصين؟",
        text: "عندما تكون البداية مفهومة، يقل التردد ويصبح التقديم أكثر سهولة وطبيعية.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
};

export default function FounderStories({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const applyHref = `/${lang}/apply`;
  const contactHref = `/${lang}/contact`;

  return (
    <section className="bg-[#090909] py-14 text-white sm:py-18" dir={t.dir}>
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <div
            className={`rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-8 ${
              isArabic ? "text-right" : "text-center xl:text-left"
            }`}
          >
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
              {t.eyebrow}
            </p>
            <h2 className="display-title mt-4 text-3xl font-black leading-tight sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/72 sm:text-base">
              {t.description}
            </p>

            <div
              className={`mt-5 flex flex-wrap gap-2 ${
                isArabic ? "sm:justify-end" : ""
              }`}
            >
              {t.chips.map((chip) => (
                <div
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/84"
                >
                  {chip}
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {t.metrics.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-[1.7rem] border border-white/10 bg-black/30 px-5 py-4 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/58">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-white/10 bg-black/28 p-6">
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                {t.quoteTitle}
              </p>
              <p className="mt-3 text-sm leading-8 text-white/76 sm:text-base">
                {t.quoteText}
              </p>
            </div>

            <div
              className={`mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
                isArabic ? "sm:justify-end" : "mx-auto max-w-sm xl:mx-0 sm:max-w-none"
              }`}
            >
              <Link
                href={applyHref}
                className="w-full rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
              >
                {t.primary}
              </Link>
              <Link
                href={contactHref}
                className="w-full rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14 sm:w-auto"
              >
                {t.secondary}
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.cards.map((card, index) => (
              <StoryCard
                key={card.title}
                card={card}
                index={index}
                isArabic={isArabic}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function StoryCard({
  card,
  index,
  isArabic,
}: {
  card: Copy["cards"][number];
  index: number;
  isArabic: boolean;
}) {
  return (
    <article className="group relative min-h-[20rem] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#140607] shadow-[0_26px_60px_rgba(0,0,0,0.24)]">
      <img
        src={card.imageSrc}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover opacity-72 transition duration-500 group-hover:scale-105 group-hover:opacity-82"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.5)_52%,rgba(0,0,0,0.92)_100%),radial-gradient(circle_at_top,rgba(139,0,0,0.32),transparent_36%),radial-gradient(circle_at_bottom,rgba(237,184,11,0.12),transparent_40%)]" />
      <div className="absolute inset-0 opacity-20 shoji-grid" />

      <div className="relative flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="section-eyebrow rounded-full border border-white/12 bg-black/30 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/82">
            YALLA CHINA
          </span>
          <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold text-white/84">
            {card.kicker}
          </span>
        </div>

        <div className={isArabic ? "text-right" : ""}>
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-white/38">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="display-title mt-3 text-3xl font-black leading-[1.02] text-white">
            {card.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/76">{card.text}</p>
        </div>
      </div>
    </article>
  );
}
