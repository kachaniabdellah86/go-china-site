import Link from "next/link";
import Container from "@/components/Container";
import {
  founderName,
  Locale,
  supportedCities,
} from "@/lib/yalla";

type Copy = {
  dir: "ltr" | "rtl";
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  pillars: {
    eyebrow: string;
    title: string;
    items: { title: string; text: string }[];
  };
  proof: {
    eyebrow: string;
    title: string;
    intro: string;
    placeholders: string[];
  };
  coverage: {
    eyebrow: string;
    title: string;
    text: string;
  };
  cta: {
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
      eyebrow: "À propos de Yalla China",
      title:
        "Une agence née d'une vraie expérience en Chine et d'un refus de voir d'autres étudiants se faire mal orienter.",
      description:
        `${founderName} a étudié en Chine en économie et commerce international. En revenant au contact d'autres étudiants, il a vu trop de mauvais conseils, trop de promesses floues et trop de familles mal rassurées.`,
    },
    story: {
      eyebrow: "L'histoire du fondateur",
      title: "Pourquoi Yalla China existe aujourd'hui",
      paragraphs: [
        "Le projet est né d'un constat simple: beaucoup d'étudiants veulent partir étudier en Chine, mais ils ne savent pas à qui faire confiance. Les parents, eux, veulent des réponses sérieuses sur l'université, le visa, le voyage et l'arrivée.",
        "Parce qu'il a lui-même étudié en Chine, Aymane Badri connaît la différence entre une promesse commerciale et une guidance qui aide réellement l'étudiant à se préparer au terrain.",
        "Yalla China a donc été pensé comme une marque de guidance et de confiance: une structure qui clarifie, rassure et accompagne au lieu de brouiller les choses.",
      ],
    },
    pillars: {
      eyebrow: "Ce qui différencie Yalla China",
      title: "La crédibilité repose sur des éléments simples, mais forts.",
      items: [
        {
          title: "Expérience sur le terrain",
          text: "Le discours part d'une expérience réelle de la Chine, pas d'un argumentaire générique.",
        },
        {
          title: "Respect de la famille",
          text: "Le projet est expliqué autant pour le parent que pour l'étudiant, avec une vraie logique de réassurance.",
        },
        {
          title: "Offre structurée",
          text: "Deux packs seulement, avec un périmètre clair pour éviter la confusion au moment de décider.",
        },
        {
          title: "Projet de long terme",
          text: "L'objectif n'est pas seulement le départ, mais un accompagnement crédible jusqu'à l'arrivée à l'université.",
        },
      ],
    },
    proof: {
      eyebrow: "Preuves à intégrer",
      title: "Le site est prêt à recevoir les éléments de confiance finaux.",
      intro:
        "Certaines preuves métier doivent encore être fournies par l'équipe. Nous avons préparé la structure pour les intégrer proprement dès qu'elles seront disponibles.",
      placeholders: [
        "Photo officielle du fondateur",
        "Captures d'écran de retours étudiants et parents",
        "Études de cas / réussites admissions + visas",
        "Preuves de suivi arrivée / transport / accompagnement",
      ],
    },
    coverage: {
      eyebrow: "Destinations mises en avant",
      title: "Une présence liée à des villes concrètes, pas à une promesse abstraite.",
      text: "Les principales villes actuellement mises en avant dans le projet sont celles-ci.",
    },
    cta: {
      title: "Le plus simple est maintenant d'en parler directement avec l'équipe.",
      description:
        "Si cette histoire vous parle, l'étape suivante est une consultation gratuite ou une première candidature structurée.",
      primary: "Parler avec l'équipe",
      secondary: "Commencer ma candidature",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      eyebrow: "About Yalla China",
      title:
        "An agency built from real experience in China and from a refusal to watch more students get misled.",
      description:
        `${founderName} studied in China in international economics and trade. After seeing too many students guided by the wrong people, he built Yalla China to offer clearer and more honest support.`,
    },
    story: {
      eyebrow: "The founder story",
      title: "Why Yalla China exists today",
      paragraphs: [
        "The project started from a simple observation: many students want to study in China, but they do not know who to trust. Parents want serious answers about the university, the visa, the trip, and the arrival stage.",
        "Because he studied in China himself, Aymane Badri understands the difference between a sales promise and guidance that really helps a student prepare for the ground reality.",
        "Yalla China was therefore built as a brand of guidance and trust: a structure that clarifies, reassures, and accompanies instead of creating confusion.",
      ],
    },
    pillars: {
      eyebrow: "What makes Yalla China different",
      title: "The credibility rests on a few simple but strong elements.",
      items: [
        {
          title: "Grounded experience",
          text: "The message starts from lived experience in China, not from a generic script.",
        },
        {
          title: "Respect for the family",
          text: "The project is explained for the parent as much as for the student, with real reassurance logic.",
        },
        {
          title: "Structured offer",
          text: "Only two packages, with a clear scope so families are not confused when deciding.",
        },
        {
          title: "Long-term view",
          text: "The goal is not only departure, but a credible support path up to arrival at the university.",
        },
      ],
    },
    proof: {
      eyebrow: "Proof blocks to fill",
      title: "The site is ready to receive the final trust assets.",
      intro:
        "Some proof material still needs to be provided by the business. We prepared clean placeholders so those assets can be added without redesigning the site again.",
      placeholders: [
        "Official founder photo",
        "Student and parent feedback screenshots",
        "Case studies / admission and visa success stories",
        "Arrival, transfer, and accompaniment proof",
      ],
    },
    coverage: {
      eyebrow: "Destinations highlighted",
      title: "A presence connected to real cities, not to an abstract promise.",
      text: "These are the main cities currently highlighted in the project.",
    },
    cta: {
      title: "The easiest next step is now to speak directly with the team.",
      description:
        "If this story resonates, the next move is a free consultation or a structured first application.",
      primary: "Talk with the team",
      secondary: "Start my application",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      eyebrow: "من نحن",
      title:
        "وكالة وُلدت من تجربة حقيقية في الصين ومن رفض رؤية مزيد من الطلبة يتم توجيههم بشكل خاطئ.",
      description:
        `${founderName} درس في الصين في تخصص الاقتصاد والتجارة الدولية. وبعد احتكاكه بطلبة آخرين، رأى كثيراً من التوجيه الخاطئ والوعود الضبابية والعائلات التي لا تجد من يطمئنها بصدق.`,
    },
    story: {
      eyebrow: "قصة المؤسس",
      title: "لماذا توجد يلا تشاينا اليوم",
      paragraphs: [
        "بدأ المشروع من ملاحظة بسيطة: كثير من الطلبة يريدون الدراسة في الصين، لكنهم لا يعرفون من يمكن الوثوق به. والوالدان يريدان أجوبة جدية حول الجامعة والتأشيرة والسفر والوصول.",
        "لأن أيمن بدري عاش تجربة الدراسة في الصين بنفسه، فهو يعرف الفرق بين الوعد التسويقي وبين التوجيه الذي يساعد الطالب فعلاً على الاستعداد للواقع.",
        "لهذا بُنيت يلا تشاينا كعلامة للثقة والتوجيه: هيكل يوضح ويطمئن ويرافق بدل أن يزيد الغموض.",
      ],
    },
    pillars: {
      eyebrow: "ما الذي يميز يلا تشاينا",
      title: "المصداقية هنا تقوم على عناصر بسيطة لكنها قوية.",
      items: [
        {
          title: "تجربة ميدانية",
          text: "الرسالة تنطلق من تجربة عيش فعلية في الصين، لا من خطاب عام.",
        },
        {
          title: "احترام العائلة",
          text: "المشروع يُشرح للوالد بقدر ما يُشرح للطالب، مع منطق حقيقي في الطمأنة.",
        },
        {
          title: "عرض منظم",
          text: "باقتان فقط، بنطاق واضح لتجنب التشوش عند اتخاذ القرار.",
        },
        {
          title: "رؤية طويلة",
          text: "الهدف ليس السفر فقط، بل مرافقة موثوقة حتى الوصول إلى الجامعة.",
        },
      ],
    },
    proof: {
      eyebrow: "عناصر الثقة التي ستُضاف",
      title: "الموقع جاهز لاستقبال مواد الثقة النهائية.",
      intro:
        "بعض مواد الإثبات ما زالت بحاجة إلى تزويد من طرف الفريق. وقد جهزنا لها أماكن نظيفة حتى تُضاف لاحقاً من دون إعادة تصميم.",
      placeholders: [
        "الصورة الرسمية للمؤسس",
        "لقطات شاشة لآراء الطلبة والآباء",
        "دراسات حالة / نجاحات القبول والتأشيرة",
        "أدلة على الوصول والنقل والمرافقة",
      ],
    },
    coverage: {
      eyebrow: "الوجهات المعروضة",
      title: "حضور مرتبط بمدن حقيقية لا بوعد مجرد.",
      text: "هذه هي أبرز المدن التي يتم إبرازها حالياً داخل المشروع.",
    },
    cta: {
      title: "الخطوة الأسهل الآن هي التحدث مباشرة مع الفريق.",
      description:
        "إذا لامستك هذه القصة، فالخطوة التالية هي استشارة مجانية أو بداية تقديم منظم.",
      primary: "تحدث مع الفريق",
      secondary: "ابدأ التقديم",
    },
  },
};

export default function AboutPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";

  return (
    <main className="bg-[#050505] text-white" dir={t.dir} lang={lang}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,3,4,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(177,127,2,0.14),transparent_20%),linear-gradient(135deg,#170405_0%,#28080a_40%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <Container>
          <div className={`relative py-14 sm:py-20 ${isArabic ? "text-right" : "text-center lg:text-left"}`}>
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
              {t.hero.eyebrow}
            </p>
            <h1 className="display-title mt-4 max-w-5xl text-[2.25rem] font-black leading-tight sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-white/78 sm:text-lg">
              {t.hero.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4ede4] py-12 text-zinc-900 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div
              className={`rounded-[2.2rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                {t.story.eyebrow}
              </p>
              <h2 className="display-title mt-3 text-3xl font-black tracking-tight">
                {t.story.title}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-8 text-zinc-600 sm:text-base">
                {t.story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {t.pillars.items.map((item) => (
                <article
                  key={item.title}
                  className={`rounded-[1.8rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.05)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div className={`mb-4 h-1.5 w-16 rounded-full bg-[#B17F02] ${isArabic ? "ml-auto" : ""}`} />
                  <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#080808] py-12 sm:py-16">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.98fr_1.02fr]">
            <div
              className={`rounded-[2.2rem] border border-white/10 bg-white/[0.05] p-7 shadow-[0_24px_55px_rgba(0,0,0,0.18)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                {t.proof.eyebrow}
              </p>
              <h2 className="display-title mt-3 text-3xl font-black tracking-tight text-white">
                {t.proof.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/72 sm:text-base">
                {t.proof.intro}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.proof.placeholders.map((item) => (
                <div
                  key={item}
                  className={`rounded-[1.8rem] border border-dashed border-white/20 bg-white/[0.04] p-6 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#EDB80B]">
                    {lang === "fr" ? "À compléter" : lang === "en" ? "To add" : "سيُضاف"}
                  </p>
                  <p className="mt-3 text-base leading-7 text-white/82">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4ede4] py-12 text-zinc-900 sm:py-16">
        <Container>
          <div
            className={`rounded-[2.2rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
              {t.coverage.eyebrow}
            </p>
            <h2 className="display-title mt-3 text-3xl font-black tracking-tight">
              {t.coverage.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">{t.coverage.text}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {supportedCities[lang].map((city) => (
                <div
                  key={city}
                  className="rounded-[1.4rem] border border-zinc-200 bg-[#faf7f3] px-4 py-3 text-sm font-medium text-zinc-700"
                >
                  {city}
                </div>
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
                <h2 className="display-title text-3xl font-black tracking-tight sm:text-4xl">
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
                  href={`/${lang}/contact`}
                  className="w-full rounded-full bg-[#B17F02] px-6 py-3 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.cta.primary}
                </Link>
                <Link
                  href={`/${lang}/apply`}
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
