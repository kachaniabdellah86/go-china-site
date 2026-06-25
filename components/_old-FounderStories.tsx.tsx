import Image from "next/image";
import Container from "@/components/Container";
import Link from "next/link";
import { founderName, Locale } from "@/lib/yalla";
import { guideSlugs } from "@/lib/guides";

type Copy = {
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: string;
  description: string;
  chips: string[];
  metrics: { value: string; label: string }[];
  authorityTitle: string;
  authorityItems: string[];
  quoteTitle: string;
  quoteText: string;
  cardAction: string;
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
    eyebrow: `Le regard de ${founderName}`,
    title:
      "Le fondateur n'explique pas seulement les démarches. Il explique aussi ce que la vie en Chine change réellement pour un étudiant.",
    description:
      "C'est ce vécu qui donne de la gravité à la marque. Les parents voient qu'ils parlent à quelqu'un qui connaît le terrain, et l'étudiant comprend qu'il sera orienté avec plus qu'un simple argument commercial.",
    chips: ["Expérience vécue", "Conseils de terrain", "Parents & étudiants"],
    metrics: [
      { value: "1", label: "histoire fondatrice claire" },
      { value: "7", label: "destinations mises en avant" },
      { value: "2", label: "packs pour cadrer la décision" },
    ],
    authorityTitle: "Pourquoi cette histoire rassure",
    authorityItems: [
      "Le projet est porté par une expérience réelle, pas par un discours théorique.",
      "Les parents comprennent qu'il y a quelqu'un derrière la marque qui connaît les étapes sensibles.",
      "L'étudiant reçoit une vision plus honnête de la vie, du départ et de l'arrivée en Chine.",
    ],
    quoteTitle: "Positionnement",
    quoteText:
      "Yalla China ne promet pas seulement un dossier traité. Yalla China promet un projet mieux compris, mieux préparé et mieux accompagné.",
    cardAction: "Lire le guide",
    primary: "Parler avec l'équipe",
    secondary: "Commencer ma candidature",
    cards: [
      {
        kicker: "Expérience",
        title: "Ce que l'expérience en Chine change dans le conseil",
        text: "Une lecture plus réaliste de l'adaptation, des erreurs à éviter et des attentes des familles.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "Méthode",
        title: "Les étapes à comprendre avant de payer ou de partir",
        text: "Une progression structurée qui rassure les parents et donne un vrai cap à l'étudiant.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "Choix",
        title: "Pourquoi la Chine peut être le bon projet",
        text: "Quand le choix de la destination est relié à une vraie logique universitaire et personnelle.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "Départ",
        title: "Comment démarrer sans se perdre",
        text: "Par où commencer, quoi demander, et comment avancer sans confusion dès le premier échange.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: `${founderName}'s perspective`,
    title:
      "The founder does not only explain the steps. He also explains what life in China really changes for a student.",
    description:
      "That lived experience gives the brand weight. Parents see they are speaking with someone who knows the ground, and the student understands they are being guided with more than a sales script.",
    chips: ["Lived experience", "Grounded advice", "Parents & students"],
    metrics: [
      { value: "1", label: "clear founder story" },
      { value: "7", label: "destinations highlighted" },
      { value: "2", label: "packages framing the decision" },
    ],
    authorityTitle: "Why this story reassures families",
    authorityItems: [
      "The project is led by real experience, not by generic theory.",
      "Parents understand there is someone behind the brand who knows the sensitive stages.",
      "The student receives a more honest view of life, departure, and arrival in China.",
    ],
    quoteTitle: "Positioning",
    quoteText:
      "Yalla China does not only promise a processed file. It promises a project that is better understood, better prepared, and better accompanied.",
    cardAction: "Read the guide",
    primary: "Talk with the team",
    secondary: "Start my application",
    cards: [
      {
        kicker: "Experience",
        title: "How China experience changes the advice",
        text: "A more realistic read on adaptation, common mistakes, and what families really need to hear.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "Method",
        title: "The stages to understand before paying or leaving",
        text: "A structured progression that reassures parents and gives the student a real route.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "Choice",
        title: "Why China can be the right project",
        text: "When the destination is connected to a real academic and personal logic.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "Start",
        title: "How to begin without getting lost",
        text: "Where to start, what to ask, and how to move with clarity from the first conversation.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
  ar: {
    dir: "rtl",
    eyebrow: `رؤية ${founderName}`,
    title:
      "المؤسس لا يشرح الإجراءات فقط، بل يشرح أيضاً كيف تغيّر الحياة في الصين تجربة الطالب فعلياً.",
    description:
      "هذه التجربة الحقيقية هي التي تعطي العلامة وزنها. الوالدان يريان أنهما يتحدثان مع شخص يعرف الواقع على الأرض، والطالب يفهم أنه سيتلقى توجيهاً يتجاوز الكلام التسويقي العام.",
    chips: ["تجربة حقيقية", "نصيحة ميدانية", "للوالدين والطلبة"],
    metrics: [
      { value: "1", label: "قصة مؤسسة واضحة" },
      { value: "7", label: "وجهات رئيسية ظاهرة" },
      { value: "2", label: "باقات تنظّم القرار" },
    ],
    authorityTitle: "لماذا تطمئن هذه القصة العائلات",
    authorityItems: [
      "المشروع تقوده تجربة حقيقية وليست مجرد نظرية عامة.",
      "الوالدان يفهمان أن هناك شخصاً وراء العلامة يعرف المراحل الحساسة.",
      "الطالب يحصل على رؤية أكثر صدقاً للحياة والسفر والوصول في الصين.",
    ],
    quoteTitle: "التموضع",
    quoteText:
      "يلا تشاينا لا تعد فقط بمعالجة الملف، بل تعد بمشروع مفهوم أكثر ومجهز أكثر ومصاحب بشكل أفضل.",
    cardAction: "اقرأ الدليل",
    primary: "تحدث مع الفريق",
    secondary: "ابدأ التقديم",
    cards: [
      {
        kicker: "التجربة",
        title: "كيف تغيّر تجربة الصين شكل النصيحة",
        text: "قراءة أكثر واقعية للتأقلم والأخطاء التي يجب تجنبها وما تحتاجه العائلات فعلاً.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "المنهج",
        title: "المراحل التي يجب فهمها قبل الدفع أو السفر",
        text: "تدرج منظم يطمئن الوالدين ويعطي الطالب طريقاً واضحاً.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "الاختيار",
        title: "لماذا قد تكون الصين المشروع المناسب",
        text: "عندما ترتبط الوجهة بمنطق جامعي وشخصي حقيقي.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "البداية",
        title: "كيف تبدأ من دون تشتت",
        text: "من أين تبدأ، وماذا تسأل، وكيف تتقدم بوضوح منذ أول تواصل.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
};

export default function FounderStories({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const contactHref = `/${lang}/contact`;
  const applyHref = `/${lang}/apply`;

  return (
    <section className="bg-[#090909] py-14 text-white sm:py-18" dir={t.dir}>
      <Container>
        <div className="grid gap-8 xl:grid-cols-[0.8fr_1.2fr] xl:items-start">
          <div
            className={`rounded-[2.4rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-7 shadow-[0_30px_80px_rgba(0,0,0,0.22)] sm:p-8 ${
              isArabic ? "text-right" : "text-center xl:text-left"
            }`}
          >
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#B17F02]">
              {t.eyebrow}
            </p>
            <h2 className="display-title mt-4 text-3xl font-black leading-tight sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/72 sm:text-base">{t.description}</p>

            <div
              className={`mt-5 flex flex-wrap gap-2 ${isArabic ? "sm:justify-end" : ""}`}
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

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {t.metrics.map((item) => (
                <div
                  key={item.label}
                  className={`rounded-[1.7rem] border border-white/10 bg-black/30 px-5 py-4 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/58">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                {t.authorityTitle}
              </p>
              <div className="mt-4 grid gap-3">
                {t.authorityItems.map((item) => (
                  <div
                    key={item}
                    className={`rounded-2xl border border-white/10 bg-black/24 px-4 py-3 text-sm text-white/82 ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[2rem] border border-white/10 bg-black/28 p-6">
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                {t.quoteTitle}
              </p>
              <p className="mt-3 text-sm leading-8 text-white/76 sm:text-base">{t.quoteText}</p>
            </div>

            <div
              className={`mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
                isArabic ? "sm:justify-end" : "mx-auto max-w-sm xl:mx-0 sm:max-w-none"
              }`}
            >
              <Link
                href={contactHref}
                className="w-full rounded-full bg-[#B17F02] px-6 py-3 text-center font-semibold text-black shadow-[0_18px_35px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
              >
                {t.primary}
              </Link>
              <Link
                href={applyHref}
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
                actionLabel={t.cardAction}
                href={`/${lang}/guides/${guideSlugs[index]}`}
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
  actionLabel,
  href,
}: {
  card: Copy["cards"][number];
  index: number;
  isArabic: boolean;
  actionLabel: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group relative block min-h-[18rem] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#140607] shadow-[0_26px_60px_rgba(0,0,0,0.24)] sm:min-h-[20rem]"
      aria-label={card.title}
    >
      <Image
        src={card.imageSrc}
        alt={card.title}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 28vw"
        className="object-cover opacity-72 transition duration-500 group-hover:scale-105 group-hover:opacity-82"
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
          <div
            className={`mt-5 inline-flex rounded-full border border-white/12 bg-black/35 px-3 py-1.5 text-xs font-semibold text-white/84 transition group-hover:border-[#B17F02]/40 group-hover:text-[#B17F02] ${
              isArabic ? "flex-row-reverse" : ""
            }`}
          >
            <span>{actionLabel}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
