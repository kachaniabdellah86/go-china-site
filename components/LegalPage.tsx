import Link from "next/link";
import Container from "@/components/Container";
import { Locale } from "@/lib/yalla";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalType = "privacy" | "terms";

type Copy = {
  dir: "ltr" | "rtl";
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  sections: LegalSection[];
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
};

const privacyCopy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    hero: {
      eyebrow: "Politique de confidentialité",
      title: "Comment Yalla China traite les données que vous partagez.",
      description:
        "Cette politique explique de manière simple comment les informations de contact et les données de navigation peuvent être utilisées dans le cadre du site.",
    },
    sections: [
      {
        title: "Données collectées",
        body: [
          "Lorsque vous utilisez le formulaire ou contactez Yalla China, nous pouvons collecter votre nom, téléphone, email, ville, niveau d'étude, objectif et message.",
          "Ces données sont fournies volontairement par l'utilisateur dans le but d'obtenir une réponse, une consultation ou un accompagnement.",
        ],
      },
      {
        title: "Usage des données",
        body: [
          "Les informations servent à répondre à votre demande, à organiser un échange sur WhatsApp ou téléphone, et à préparer la suite de votre projet.",
          "Nous ne vendons pas ces données et nous ne les utilisons pas pour des finalités étrangères à la relation de guidance.",
        ],
      },
      {
        title: "Cookies et mesure d'audience",
        body: [
          "Si vous acceptez les cookies d'analyse, le site peut enregistrer des données de navigation anonymisées afin d'améliorer les pages et les parcours utilisateurs.",
          "Vous pouvez refuser ces cookies via la bannière de consentement et continuer à utiliser le site avec les fonctions essentielles.",
        ],
      },
      {
        title: "Vos droits",
        body: [
          "Vous pouvez demander la correction ou la suppression de vos données de contact en nous écrivant directement.",
          "Avant mise en ligne définitive, cette page pourra être enrichie par le texte légal final fourni par l'entreprise.",
        ],
      },
    ],
    cta: {
      title: "Besoin d'une précision ou d'un retrait de données ?",
      description: "Le plus simple est de nous écrire directement.",
      primary: "Nous contacter",
      secondary: "Voir les conditions",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      eyebrow: "Privacy Policy",
      title: "How Yalla China handles the data you share.",
      description:
        "This policy explains in simple terms how contact information and browsing data may be used on the website.",
    },
    sections: [
      {
        title: "Data collected",
        body: [
          "When you use the form or contact Yalla China, we may collect your name, phone number, email, city, study level, objective, and message.",
          "This data is provided voluntarily for the purpose of receiving a reply, a consultation, or guidance.",
        ],
      },
      {
        title: "How the data is used",
        body: [
          "The information is used to answer your enquiry, organize a WhatsApp or phone exchange, and prepare the next step of your project.",
          "We do not sell this data and we do not use it for purposes unrelated to the guidance relationship.",
        ],
      },
      {
        title: "Cookies and analytics",
        body: [
          "If you accept analytics cookies, the site may record anonymized browsing data in order to improve pages and user journeys.",
          "You can refuse these cookies through the consent banner and continue using the site with essential functions only.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "You may request correction or deletion of your contact data by writing to us directly.",
          "Before final public launch, this page may be expanded with the final legal text provided by the business.",
        ],
      },
    ],
    cta: {
      title: "Need a clarification or a data deletion request?",
      description: "The easiest way is to contact us directly.",
      primary: "Contact us",
      secondary: "View the terms",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      eyebrow: "سياسة الخصوصية",
      title: "كيف تتعامل يلا تشاينا مع البيانات التي تشاركها.",
      description:
        "تشرح هذه السياسة بشكل بسيط كيف يمكن استخدام بيانات التواصل وبيانات التصفح داخل الموقع.",
    },
    sections: [
      {
        title: "البيانات التي يتم جمعها",
        body: [
          "عند استخدام الاستمارة أو التواصل مع يلا تشاينا، قد نقوم بجمع الاسم ورقم الهاتف والبريد والمدينة والمستوى الدراسي والهدف والرسالة.",
          "يتم تقديم هذه البيانات طوعاً من طرف المستخدم بهدف الحصول على رد أو استشارة أو مرافقة.",
        ],
      },
      {
        title: "كيفية استخدام البيانات",
        body: [
          "تُستخدم هذه المعلومات للرد على الطلب وتنظيم التواصل عبر واتساب أو الهاتف وتحضير الخطوة التالية من المشروع.",
          "نحن لا نبيع هذه البيانات ولا نستخدمها لأغراض بعيدة عن علاقة التوجيه.",
        ],
      },
      {
        title: "الكوكيز والتحليلات",
        body: [
          "إذا وافقت على كوكيز التحليلات، فقد يسجل الموقع بيانات تصفح مجهولة من أجل تحسين الصفحات ومسارات الاستخدام.",
          "يمكنك رفض هذه الكوكيز من خلال شريط الموافقة مع الاستمرار في استخدام الوظائف الأساسية للموقع.",
        ],
      },
      {
        title: "حقوقك",
        body: [
          "يمكنك طلب تصحيح بيانات التواصل أو حذفها عبر الكتابة إلينا مباشرة.",
          "قبل الإطلاق النهائي يمكن إثراء هذه الصفحة بالنص القانوني النهائي الذي ستوفره الشركة.",
        ],
      },
    ],
    cta: {
      title: "هل تحتاج إلى توضيح أو طلب حذف بيانات؟",
      description: "أسهل طريقة هي التواصل معنا مباشرة.",
      primary: "تواصل معنا",
      secondary: "شاهد الشروط",
    },
  },
};

const termsCopy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    hero: {
      eyebrow: "Conditions d'utilisation",
      title: "Les règles générales liées à l'usage du site Yalla China.",
      description:
        "Ces conditions encadrent l'usage du site, les formulaires de demande et la portée informative des contenus présentés.",
    },
    sections: [
      {
        title: "Objet du site",
        body: [
          "Le site Yalla China présente des services d'orientation et d'accompagnement pour les études en Chine.",
          "Les contenus ont pour but d'informer, de rassurer et d'aider l'utilisateur à entrer en contact avec l'équipe.",
        ],
      },
      {
        title: "Nature des informations",
        body: [
          "Les informations publiées sur le site ont une valeur informative et peuvent être ajustées selon l'évolution des offres, des destinations ou des conditions administratives.",
          "Une consultation directe reste nécessaire avant toute décision engageante.",
        ],
      },
      {
        title: "Usage des formulaires",
        body: [
          "L'utilisateur s'engage à fournir des informations sincères et utiles lorsqu'il remplit un formulaire ou prépare un message.",
          "Yalla China se réserve le droit d'ignorer les demandes manifestement abusives, incomplètes ou frauduleuses.",
        ],
      },
      {
        title: "Limites et mise à jour",
        body: [
          "Avant la mise en ligne finale, ces conditions peuvent être affinées avec les informations juridiques définitives de l'entreprise.",
          "L'utilisation continue du site vaut acceptation des versions à jour de ces conditions.",
        ],
      },
    ],
    cta: {
      title: "Pour toute question sur le fonctionnement du site, contactez-nous.",
      description: "Nous pourrons clarifier les points importants avant l'utilisation d'un service.",
      primary: "Nous contacter",
      secondary: "Voir la confidentialité",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      eyebrow: "Terms of Service",
      title: "The general rules related to the use of the Yalla China website.",
      description:
        "These terms frame the use of the website, enquiry forms, and the informational scope of the published content.",
    },
    sections: [
      {
        title: "Purpose of the website",
        body: [
          "The Yalla China website presents orientation and accompaniment services for studies in China.",
          "The content is meant to inform, reassure, and help the user get in touch with the team.",
        ],
      },
      {
        title: "Nature of the information",
        body: [
          "Information published on the site is informational in nature and may be adjusted depending on changes to offers, destinations, or administrative conditions.",
          "A direct consultation remains necessary before any binding decision is made.",
        ],
      },
      {
        title: "Use of forms",
        body: [
          "The user agrees to provide sincere and useful information when filling a form or preparing a message.",
          "Yalla China may ignore requests that are clearly abusive, incomplete, or fraudulent.",
        ],
      },
      {
        title: "Limits and updates",
        body: [
          "Before final public launch, these terms may be refined with the business's final legal information.",
          "Continued use of the site constitutes acceptance of the updated version of these terms.",
        ],
      },
    ],
    cta: {
      title: "If you have any question about how the site works, contact us.",
      description: "We can clarify the important points before any service is used.",
      primary: "Contact us",
      secondary: "View privacy",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      eyebrow: "شروط الاستخدام",
      title: "القواعد العامة المرتبطة باستخدام موقع يلا تشاينا.",
      description:
        "تنظم هذه الشروط استخدام الموقع واستمارات الطلب والطابع المعلوماتي للمحتوى المنشور.",
    },
    sections: [
      {
        title: "هدف الموقع",
        body: [
          "يعرض موقع يلا تشاينا خدمات التوجيه والمرافقة للدراسة في الصين.",
          "الغرض من المحتوى هو الإخبار والطمأنة ومساعدة المستخدم على التواصل مع الفريق.",
        ],
      },
      {
        title: "طبيعة المعلومات",
        body: [
          "المعلومات المنشورة في الموقع ذات طابع إخباري ويمكن تعديلها بحسب تطور العروض أو الوجهات أو الشروط الإدارية.",
          "تبقى الاستشارة المباشرة ضرورية قبل أي قرار ملزم.",
        ],
      },
      {
        title: "استخدام الاستمارات",
        body: [
          "يلتزم المستخدم بتقديم معلومات صادقة ومفيدة عند ملء الاستمارة أو إعداد رسالة.",
          "تحتفظ يلا تشاينا بحق تجاهل الطلبات المسيئة أو غير المكتملة أو الاحتيالية بشكل واضح.",
        ],
      },
      {
        title: "الحدود والتحديث",
        body: [
          "قبل الإطلاق النهائي يمكن تحسين هذه الشروط بإضافة المعلومات القانونية النهائية الخاصة بالشركة.",
          "الاستمرار في استخدام الموقع يعني قبول النسخة المحدثة من هذه الشروط.",
        ],
      },
    ],
    cta: {
      title: "إذا كان لديك سؤال حول طريقة عمل الموقع فتواصل معنا.",
      description: "يمكننا توضيح النقاط المهمة قبل استخدام أي خدمة.",
      primary: "تواصل معنا",
      secondary: "شاهد الخصوصية",
    },
  },
};

export default function LegalPage({
  lang,
  type,
}: {
  lang: Locale;
  type: LegalType;
}) {
  const t = type === "privacy" ? privacyCopy[lang] : termsCopy[lang];
  const isArabic = t.dir === "rtl";
  const secondaryHref = `/${lang}/${type === "privacy" ? "terms" : "privacy"}`;

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
          <div className="grid gap-4">
            {t.sections.map((section) => (
              <article
                key={section.title}
                className={`rounded-[2rem] border border-zinc-200 bg-white p-7 shadow-[0_18px_35px_rgba(15,23,42,0.05)] ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <h2 className="display-title text-2xl font-black tracking-tight text-zinc-900">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-600 sm:text-base">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
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
                  href={secondaryHref}
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
