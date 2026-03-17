import Container from "@/components/Container";
import Link from "next/link";

type Locale = "fr" | "en" | "ar";
type Variant = "feature" | "compact";

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
    eyebrow: "La voix humaine derrière le projet",
    title: "Un vrai visage rend le projet plus crédible, plus proche et plus rassurant.",
    description:
      "Les étudiants avancent plus facilement quand ils sentent qu'il y a une vraie personne derrière l'accompagnement, pas seulement une agence qui parle dans le vide.",
    chips: ["Échange direct", "Réponses rapides", "Guidance plus humaine"],
    metrics: [
      { value: "24-48h", label: "pour une première réponse utile" },
      { value: "1 contact", label: "pour garder un cap clair" },
      { value: "De l'idée au visa", label: "sans perdre le fil" },
    ],
    quoteTitle: "Vous ne cherchez pas juste des informations.",
    quoteText:
      "Vous cherchez quelqu'un qui comprend vos hésitations, répond sans détour, et vous aide à passer du doute à une vraie décision.",
    primary: "Commencer mon projet",
    secondary: "Nous contacter",
    cards: [
      {
        kicker: "Expérience réelle",
        title: "Mon expérience personnelle en Chine",
        text: "Un récit plus humain aide l'étudiant à se projeter et à croire que le chemin existe vraiment.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "Étapes claires",
        title: "Les étapes des études en Chine",
        text: "Quand le parcours est expliqué clairement, le projet paraît plus simple, plus concret et plus faisable.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "Bonne décision",
        title: "Pourquoi étudier en Chine ?",
        text: "Le bon discours ne vend pas seulement une destination, il aide à comprendre pourquoi elle peut vous correspondre.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "Bon départ",
        title: "Comment étudier en Chine ?",
        text: "Quand la première étape est claire, l'envie de postuler vient beaucoup plus naturellement.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "The human voice behind the project",
    title: "A real face makes the project feel more credible, more personal, and more reassuring.",
    description:
      "Students move faster when they feel there is a real person behind the guidance, not just an agency speaking in generic lines.",
    chips: ["Direct exchange", "Fast answers", "Human guidance"],
    metrics: [
      { value: "24-48h", label: "for a useful first reply" },
      { value: "1 clear contact", label: "to keep the route simple" },
      { value: "From idea to visa", label: "without losing momentum" },
    ],
    quoteTitle: "You are not looking for information only.",
    quoteText:
      "You are looking for someone who understands your hesitation, answers clearly, and helps turn uncertainty into a real decision.",
    primary: "Start my project",
    secondary: "Contact us",
    cards: [
      {
        kicker: "Real experience",
        title: "My personal experience in China",
        text: "A more human story helps students picture themselves inside the journey instead of only reading about it.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "Clear stages",
        title: "The study stages in China",
        text: "When the route is explained well, the project feels simpler, clearer, and much easier to begin.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "Better decision",
        title: "Why study in China?",
        text: "The best message does not just sell a destination, it helps students understand why it fits them.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "Right start",
        title: "How do you study in China?",
        text: "When the first step is obvious, applying starts to feel natural instead of intimidating.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
  ar: {
    dir: "rtl",
    eyebrow: "الوجه الإنساني وراء هذا الطريق",
    title: "حين يرى الطالب شخصًا حقيقيًا وراء المرافقة، يصبح المشروع أقرب وأكثر إقناعًا.",
    description:
      "الثقة تكبر عندما يشعر الطالب أن هناك من يفهمه فعلًا، يرد عليه بسرعة، ويشرح له الطريق بطريقة واضحة ومباشرة.",
    chips: ["تواصل مباشر", "إجابات سريعة", "مرافقة إنسانية"],
    metrics: [
      { value: "24-48 ساعة", label: "لأول رد واضح ومفيد" },
      { value: "شخص واحد واضح", label: "حتى يبقى المسار مفهومًا" },
      { value: "من الفكرة إلى التأشيرة", label: "من دون تشتيت" },
    ],
    quoteTitle: "أنت لا تبحث فقط عن معلومات.",
    quoteText:
      "أنت تبحث عن شخص يفهم ترددك، يشرح لك بصراحة، ويساعدك على تحويل الحيرة إلى خطوة حقيقية.",
    primary: "ابدأ مشروعك",
    secondary: "تواصل معنا",
    cards: [
      {
        kicker: "من الواقع",
        title: "تجربتي الشخصية فالصين",
        text: "القصة الإنسانية تجعل الطالب يرى الطريق أقرب، وتشعره أن الحلم يمكن أن يصبح واقعًا.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "خطوة بخطوة",
        title: "مراحل الدراسة فالصين",
        text: "حين تكون المراحل واضحة، يصبح المشروع أسهل فهمًا وأسهل بداية.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "قرار أوضح",
        title: "علاش تقرا فالصين؟",
        text: "الرسالة القوية لا تبيع الوجهة فقط، بل تساعدك على فهم لماذا قد تكون مناسبة لك.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "البداية الصح",
        title: "باش تقرا فالصين؟",
        text: "حين تكون أول خطوة واضحة، يصبح التقديم طبيعيًا أكثر وأقل ترددًا.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
};

export default function FounderStories({
  lang,
  variant = "feature",
}: {
  lang: Locale;
  variant?: Variant;
}) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const applyHref = `/${lang}/apply`;
  const contactHref = `/${lang}/contact`;

  if (variant === "compact") {
    return (
      <section className="bg-[#080808] py-12 text-white sm:py-16" dir={t.dir}>
        <Container>
          <div className="space-y-6">
            <div className="grid gap-6 xl:grid-cols-[0.84fr_1.16fr] xl:items-end">
              <div className={isArabic ? "text-right" : ""}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
                  {t.eyebrow}
                </p>
                <h2 className="display-title mt-4 max-w-4xl text-3xl font-black leading-tight sm:text-4xl">
                  {t.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-8 text-white/72 sm:text-base">
                  {t.description}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {t.metrics.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-[1.7rem] border border-white/10 bg-white/[0.05] px-5 py-4 ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <p className="text-sm font-semibold text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/58">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {t.cards.map((card, index) => (
                <StoryCard
                  key={card.title}
                  card={card}
                  index={index}
                  isArabic={isArabic}
                />
              ))}
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
                {t.primary}
              </Link>
              <Link
                href={contactHref}
                className="rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14"
              >
                {t.secondary}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="bg-[#090909] py-14 text-white sm:py-18" dir={t.dir}>
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <div
            className={`rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-8 ${
              isArabic ? "text-right" : ""
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
                isArabic ? "sm:justify-end" : ""
              }`}
            >
              <Link
                href={applyHref}
                className="rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
              >
                {t.primary}
              </Link>
              <Link
                href={contactHref}
                className="rounded-full border border-white/18 bg-white/8 px-6 py-3 text-center font-medium text-white transition hover:bg-white/14"
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
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.5)_52%,rgba(0,0,0,0.92)_100%),radial-gradient(circle_at_top,rgba(139,0,0,0.32),transparent_36%),radial-gradient(circle_at_bottom,rgba(237,184,11,0.12),transparent_40%)]" />
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
