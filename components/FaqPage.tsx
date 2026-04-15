import Link from "next/link";
import Container from "@/components/Container";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import { Locale } from "@/lib/yalla";

type Copy = {
  dir: "ltr" | "rtl";
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  categories: {
    title: string;
    items: string[];
  };
  faq: FaqItem[];
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
      eyebrow: "FAQ Yalla China",
      title: "Les réponses que les étudiants et leurs familles cherchent avant de s'engager.",
      description:
        "Cette page rassemble les questions les plus fréquentes autour des bourses, du choix d'université, des coûts, du visa, du voyage et de l'arrivée.",
    },
    categories: {
      title: "Sujets couverts",
      items: [
        "Bourses et opportunités",
        "Choix de l'université",
        "Coûts et budget",
        "Visa étudiant",
        "Voyage et arrivée",
        "Contenu du Pack 1 et du Pack 2",
      ],
    },
    faq: [
      {
        question: "Est-ce que Yalla China aide pour les bourses ?",
        answer:
          "Oui. La logique bourse fait partie de la phase d'orientation. Nous aidons à vérifier si elle est réaliste pour le profil avant d'aller plus loin.",
      },
      {
        question: "Comment choisissez-vous l'université ?",
        answer:
          "Le choix se fait selon le profil, l'objectif, la ville, la cohérence académique et les attentes de la famille. L'idée n'est pas de proposer n'importe quelle université juste pour partir.",
      },
      {
        question: "Combien coûte l'accompagnement ?",
        answer:
          "Le Pack 1 est à 15 000 DH et le Pack 2 à 23 000 DH. La consultation gratuite permet de clarifier quelle formule correspond au besoin réel.",
      },
      {
        question: "Le visa est-il vraiment inclus ?",
        answer:
          "Oui. Le visa étudiant fait partie du cœur de l'accompagnement et non d'un service optionnel secondaire.",
      },
      {
        question: "Que se passe-t-il après l'arrivée en Chine ?",
        answer:
          "Avec le Pack 2, l'accompagnement peut aller jusqu'au transfert de l'aéroport vers l'université et aux premiers repères sur place.",
      },
      {
        question: "Quelle est la différence principale entre Pack 1 et Pack 2 ?",
        answer:
          "Le Pack 1 traite le dossier, la traduction, le visa et l'inscription universitaire. Le Pack 2 prolonge la prise en charge jusqu'au voyage et à l'arrivée.",
      },
    ],
    cta: {
      title: "S'il reste une question, le plus simple est d'ouvrir la conversation.",
      description:
        "Une consultation gratuite vous permet d'obtenir une réponse adaptée à votre propre situation, pas une réponse générique.",
      primary: "Poser ma question",
      secondary: "Voir les services",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      eyebrow: "Yalla China FAQ",
      title: "The answers students and families look for before they commit.",
      description:
        "This page brings together the most common questions around scholarships, university choice, costs, visa matters, travel, and arrival.",
    },
    categories: {
      title: "Topics covered",
      items: [
        "Scholarships and opportunities",
        "University choice",
        "Cost and budget",
        "Student visa",
        "Travel and arrival",
        "What is included in Package 1 and Package 2",
      ],
    },
    faq: [
      {
        question: "Does Yalla China help with scholarships?",
        answer:
          "Yes. Scholarship logic is part of the orientation phase. We help assess whether it is realistic for the profile before moving further.",
      },
      {
        question: "How do you choose the university?",
        answer:
          "The choice is based on the profile, the goal, the city, the academic logic, and the family's expectations. The aim is not to push any university just to make the student leave.",
      },
      {
        question: "How much does the support cost?",
        answer:
          "Package 1 is 15,000 DH and Package 2 is 23,000 DH. The free consultation helps clarify which formula fits the real need.",
      },
      {
        question: "Is the visa really included?",
        answer:
          "Yes. The student visa is part of the core support, not a minor optional extra.",
      },
      {
        question: "What happens after arrival in China?",
        answer:
          "With Package 2, support can continue through airport-to-university transfer and the first landmarks on the ground.",
      },
      {
        question: "What is the main difference between Package 1 and Package 2?",
        answer:
          "Package 1 covers the file, translation, visa, and university registration. Package 2 extends the support through travel and arrival.",
      },
    ],
    cta: {
      title: "If one question remains, the easiest move is to open the conversation.",
      description:
        "A free consultation gives you an answer adapted to your own case, not a generic answer.",
      primary: "Ask my question",
      secondary: "View services",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      eyebrow: "الأسئلة الشائعة",
      title: "الأجوبة التي يبحث عنها الطالب وعائلته قبل الالتزام.",
      description:
        "تجمع هذه الصفحة أكثر الأسئلة شيوعاً حول المنح واختيار الجامعة والتكلفة والتأشيرة والسفر والوصول.",
    },
    categories: {
      title: "المواضيع المغطاة",
      items: [
        "المنح والفرص",
        "اختيار الجامعة",
        "التكلفة والميزانية",
        "تأشيرة الطالب",
        "السفر والوصول",
        "ما الذي تتضمنه الباقة 1 والباقة 2",
      ],
    },
    faq: [
      {
        question: "هل تساعد يلا تشاينا في موضوع المنح؟",
        answer:
          "نعم. منطق المنحة يدخل في مرحلة التوجيه الأولى، حيث نساعد على تقييم مدى واقعيته بالنسبة إلى الملف قبل التقدم أكثر.",
      },
      {
        question: "كيف يتم اختيار الجامعة؟",
        answer:
          "الاختيار يعتمد على ملف الطالب والهدف والمدينة والمنطق الأكاديمي وتوقعات العائلة. الفكرة ليست اقتراح أي جامعة فقط من أجل السفر.",
      },
      {
        question: "كم تكلفة المرافقة؟",
        answer:
          "الباقة 1 بسعر 15,000 DH والباقة 2 بسعر 23,000 DH. والاستشارة المجانية تساعد على معرفة الصيغة الأنسب للحاجة الفعلية.",
      },
      {
        question: "هل التأشيرة مشمولة فعلاً؟",
        answer:
          "نعم. تأشيرة الطالب جزء أساسي من المرافقة وليست خدمة جانبية اختيارية.",
      },
      {
        question: "ماذا يحدث بعد الوصول إلى الصين؟",
        answer:
          "مع الباقة 2 يمكن أن تستمر المرافقة حتى النقل من المطار إلى الجامعة وأول المعالم العملية على الأرض.",
      },
      {
        question: "ما الفرق الرئيسي بين الباقة 1 والباقة 2؟",
        answer:
          "الباقة 1 تشمل الملف والترجمة والتأشيرة والتسجيل الجامعي، أما الباقة 2 فتمدد المرافقة حتى السفر والوصول.",
      },
    ],
    cta: {
      title: "إذا بقي سؤال واحد، فالأسهل هو فتح المحادثة مباشرة.",
      description:
        "الاستشارة المجانية تعطيك جواباً مرتبطاً بحالتك أنت، لا جواباً عاماً فقط.",
      primary: "اطرح سؤالي",
      secondary: "شاهد الخدمات",
    },
  },
};

export default function FaqPage({ lang }: { lang: Locale }) {
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
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div
              className={`rounded-[2.2rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                {lang === "fr" ? "Vue d'ensemble" : lang === "en" ? "Overview" : "نظرة عامة"}
              </p>
              <h2 className="display-title mt-3 text-3xl font-black tracking-tight">
                {t.categories.title}
              </h2>
              <div className="mt-5 grid gap-3">
                {t.categories.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.5rem] border border-zinc-200 bg-[#faf7f3] px-4 py-3 text-sm text-zinc-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <FaqAccordion items={t.faq} dir={t.dir} />
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
                  href={`/${lang}/services`}
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
