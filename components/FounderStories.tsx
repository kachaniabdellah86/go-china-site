import Container from "@/components/Container";
import Link from "next/link";
import { guideSlugs } from "@/components/GuidePage";

type Locale = "fr" | "en" | "ar";

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
  instagramCta: string;
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
    eyebrow: "Qui vous accompagne vraiment ?",
    title:
      "Avant de confier un projet aussi important, les parents et les etudiants veulent savoir qui les guide.",
    description:
      "YALLA CHINA s'appuie sur une experience reelle de la Chine, une vision claire des erreurs a eviter et une presence humaine qui rassure la famille du premier echange jusqu'au depart.",
    chips: ["Experience reelle", "Suivi humain", "Parents & etudiants"],
    metrics: [
      { value: "24-48h", label: "pour une premiere reponse claire" },
      { value: "1 interlocuteur direct", label: "pour eviter les reponses floues" },
      { value: "Du debut a l'arrivee", label: "avec une seule logique d'accompagnement" },
    ],
    authorityTitle: "Pourquoi cette presence fait la difference",
    authorityItems: [
      "Vous savez avec qui vous parlez des le premier echange",
      "Les parents comprennent que le projet n'est pas gere par une structure floue",
      "L'etudiant avance avec des conseils concrets, pas avec des promesses vagues",
    ],
    quoteTitle: "Notre engagement",
    quoteText:
      "Notre role est de rendre le projet plus clair, plus serieux et plus rassurant avant toute decision importante.",
    instagramCta: "Voir Instagram : @yallachina.ma",
    cardAction: "Lire le guide",
    primary: "Recevoir une consultation gratuite",
    secondary: "Voir la candidature",
    cards: [
      {
        kicker: "Experience vecue",
        title: "Une experience reelle de la Chine",
        text: "Comprendre la vie sur place, l'adaptation et les conseils qui viennent vraiment du terrain.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "Etapes claires",
        title: "Les etapes a connaitre avant de partir",
        text: "Voir le projet dans le bon ordre pour rassurer la famille et eviter les erreurs de parcours.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "Bon choix",
        title: "Pourquoi la Chine peut etre une vraie opportunite",
        text: "Aider l'etudiant et ses parents a comprendre si cette destination correspond vraiment au profil.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "Premier pas",
        title: "Comment commencer sans se perdre",
        text: "Savoir par ou debuter, quelles questions poser et comment avancer avec methode.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "Who is really guiding you?",
    title:
      "Before trusting such an important project, parents and students want to know who is guiding them.",
    description:
      "YALLA CHINA is built on real China experience, a clear understanding of the mistakes to avoid, and a human presence that reassures the family from the first conversation to departure.",
    chips: ["Real experience", "Human follow-up", "Parents & students"],
    metrics: [
      { value: "24-48h", label: "for a first clear reply" },
      { value: "1 direct contact", label: "to avoid vague answers" },
      { value: "From start to arrival", label: "with one consistent support logic" },
    ],
    authorityTitle: "Why this presence makes a difference",
    authorityItems: [
      "You know who you are speaking with from the very first exchange",
      "Parents understand that the project is not handled by a vague structure",
      "The student moves forward with practical guidance, not vague promises",
    ],
    quoteTitle: "Our commitment",
    quoteText:
      "Our role is to make the project clearer, more serious, and more reassuring before any major decision is made.",
    instagramCta: "View Instagram: @yallachina.ma",
    cardAction: "Read the guide",
    primary: "Get a free consultation",
    secondary: "View application",
    cards: [
      {
        kicker: "Lived experience",
        title: "A real experience of China",
        text: "Understand life on the ground, adaptation, and advice that comes from real experience.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "Clear stages",
        title: "The stages to know before departure",
        text: "See the project in the right order to reassure the family and avoid costly mistakes.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "Right choice",
        title: "Why China can be a real opportunity",
        text: "Help the student and parents understand whether this destination truly fits the profile.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "First step",
        title: "How to begin without getting lost",
        text: "Know where to start, what to ask, and how to move forward with structure.",
        imageSrc: "/founder-story-4.jpg",
      },
    ],
  },
  ar: {
    dir: "rtl",
    eyebrow: "من يرافقكم فعلا؟",
    title:
      "قبل وضع مشروع مهم بهذا الحجم بين يد اي جهة، يريد الوالدان والطالب معرفة من سيرافقهم فعلا.",
    description:
      "تعتمد YALLA CHINA على تجربة حقيقية في الصين، وفهم واضح للاخطاء التي يجب تجنبها، وحضور انساني يطمئن العائلة من اول تواصل حتى موعد السفر.",
    chips: ["تجربة حقيقية", "متابعة انسانية", "للوالدين والطلبة"],
    metrics: [
      { value: "24-48 ساعة", label: "لاول جواب واضح" },
      { value: "جهة تواصل مباشرة", label: "لتجنب الاجوبة الغامضة" },
      { value: "من البداية الى الوصول", label: "ضمن منطق واحد في المرافقة" },
    ],
    authorityTitle: "لماذا يصنع هذا الحضور الفرق",
    authorityItems: [
      "تعرفون مع من تتحدثون من اول تواصل",
      "تشعر العائلة ان المشروع لا يدار من جهة غامضة",
      "يتقدم الطالب بنصائح عملية لا بوعود عامة",
    ],
    quoteTitle: "التزامنا",
    quoteText:
      "دورنا هو جعل المشروع اوضح واكثر جدية واكثر طمانينة قبل اي قرار مهم.",
    instagramCta: "شاهد Instagram: @yallachina.ma",
    cardAction: "اقرأ الدليل",
    primary: "احصل على استشارة مجانية",
    secondary: "شاهد صفحة التقديم",
    cards: [
      {
        kicker: "تجربة معيشة",
        title: "تجربة حقيقية للحياة في الصين",
        text: "فهم الحياة على ارض الواقع والتكيف والنصائح التي تأتي من التجربة المباشرة.",
        imageSrc: "/founder-story-1.jpg",
      },
      {
        kicker: "مراحل واضحة",
        title: "المراحل التي يجب معرفتها قبل السفر",
        text: "رؤية المشروع بالترتيب الصحيح لطمأنة العائلة وتجنب اخطاء المسار.",
        imageSrc: "/founder-story-2.jpg",
      },
      {
        kicker: "اختيار مناسب",
        title: "لماذا قد تكون الصين فرصة حقيقية",
        text: "مساعدة الطالب ووالديه على فهم ما اذا كانت هذه الوجهة مناسبة فعلا للملف.",
        imageSrc: "/founder-story-3.jpg",
      },
      {
        kicker: "الخطوة الاولى",
        title: "كيف تبدأ من دون تشتت",
        text: "معرفة من اين تبدأ وما هي الاسئلة المهمة وكيف تتقدم بمنهج واضح.",
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
  const instagramHref = "https://www.instagram.com/yallachina.ma/";

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
              <p className="mt-3 text-sm leading-8 text-white/76 sm:text-base">
                {t.quoteText}
              </p>
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/84 transition hover:border-[#B17F02]/40 hover:text-[#B17F02]"
              >
                {t.instagramCta}
              </a>
            </div>

            <div
              className={`mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
                isArabic
                  ? "sm:justify-end"
                  : "mx-auto max-w-sm xl:mx-0 sm:max-w-none"
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
      className="group relative block min-h-[20rem] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#140607] shadow-[0_26px_60px_rgba(0,0,0,0.24)]"
      aria-label={card.title}
    >
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
