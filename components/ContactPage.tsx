import Container from "@/components/Container";
import ContactFormCard from "@/components/ContactFormCard";
import Link from "next/link";

type Locale = "fr" | "en" | "ar";

type Copy = {
  dir: "ltr" | "rtl";
  hero: {
    badge: string;
    title: string;
    description: string;
    stats: { label: string; value: string }[];
    panelEyebrow: string;
    panelTitle: string;
    panelText: string;
    panelItems: string[];
  };
  form: {
    title: string;
    description: string;
    note: string;
    success: string;
    errors: {
      required: string;
    };
    placeholders: {
      name: string;
      phone: string;
      email: string;
      message: string;
    };
    labels: {
      name: string;
      phone: string;
      email: string;
      message: string;
      submit: string;
      secondary: string;
    };
  };
  direct: {
    eyebrow: string;
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      value: string;
      href?: string;
      emphasis?: boolean;
    }[];
  };
  reasons: {
    eyebrow: string;
    title: string;
    items: string[];
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
      badge: "Contact • YALLA CHINA",
      title: "Posez votre question et obtenez une réponse plus claire.",
      description:
        "Que vous vouliez parler des études en Chine, de l'admission, du visa ou simplement de la meilleure manière de commencer, vous pouvez nous écrire rapidement et obtenir une direction plus claire.",
      stats: [
        { label: "Réponse rapide", value: "Sous 24-48h" },
        { label: "Contact principal", value: "WhatsApp direct" },
        { label: "Projet plus clair", value: "Étudiants & parents" },
      ],
      panelEyebrow: "Contact principal",
      panelTitle: "+212 638-335452",
      panelText:
        "Le moyen le plus rapide pour ouvrir la conversation et recevoir une première orientation utile.",
      panelItems: [
        "Questions sur les études",
        "Admission et visa",
        "Première direction claire",
      ],
    },
    form: {
      title: "Envoyer un message",
      description:
        "Écrivez l'essentiel et nous ouvrirons WhatsApp avec un message déjà prêt pour vous faire gagner du temps.",
      note: "Un premier message clair nous aide à vous répondre plus vite et de manière plus utile.",
      success: "Votre message est prêt dans WhatsApp.",
      errors: {
        required:
          "Merci de remplir votre nom, votre téléphone et votre message.",
      },
      placeholders: {
        name: "Nom complet",
        phone: "Téléphone (WhatsApp)",
        email: "Email (optionnel)",
        message:
          "Expliquez votre projet, votre niveau d'étude ou votre question...",
      },
      labels: {
        name: "Nom complet",
        phone: "Téléphone",
        email: "Email",
        message: "Message",
        submit: "Ouvrir le message WhatsApp",
        secondary: "Ouverture...",
      },
    },
    direct: {
      eyebrow: "Contact direct",
      title: "Choisissez la voie la plus simple pour commencer.",
      intro:
        "Choisissez simplement la manière la plus confortable pour parler de votre situation et recevoir une première réponse utile.",
      items: [
        {
          title: "WhatsApp principal",
          text: "Le contact le plus rapide pour démarrer",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "Email",
          text: "Si vous préférez écrire un message plus détaillé",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
        {
          title: "Passer à la candidature",
          text: "Si vous êtes déjà prêt à passer à l'étape suivante",
          value: "Ouvrir la candidature",
          href: "/fr/apply",
        },
      ],
    },
    reasons: {
      eyebrow: "Vous pouvez nous écrire pour",
      title: "Les sujets les plus fréquents avant de commencer",
      items: [
        "Comprendre quelle voie d'étude viser",
        "Savoir si votre profil est déjà prêt",
        "Clarifier la logique de la candidature",
        "Mieux comprendre la phase du visa étudiant",
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les réponses utiles avant le premier contact.",
      items: [
        {
          question: "Est-ce que vous accompagnez aussi les parents ?",
          answer:
            "Oui. Nous expliquons le projet, les étapes et le suivi de manière plus claire pour l'étudiant et la famille.",
        },
        {
          question: "Combien de temps faut-il pour avoir une réponse ?",
          answer:
            "En général, nous revenons vers vous sous 24 à 48 heures selon la disponibilité.",
        },
        {
          question: "Puis-je vous écrire directement sur WhatsApp ?",
          answer:
            "Oui. C'est souvent la manière la plus simple pour démarrer et poser vos premières questions.",
        },
      ],
    },
    cta: {
      eyebrow: "Aller plus loin",
      title: "Si vous êtes déjà prêt, vous pouvez passer directement à la candidature.",
      description:
        "Le contact est parfait pour les questions. La candidature est idéale si vous voulez déjà lancer le projet.",
      primary: "Postuler maintenant",
      secondary: "WhatsApp : +212 638-335452",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Contact • YALLA CHINA",
      title: "Ask your question and get a clearer answer.",
      description:
        "Whether you want to talk about studying in China, admission, the visa, or simply the best way to begin, you can write to us quickly and get a clearer direction.",
      stats: [
        { label: "Fast reply", value: "Within 24-48h" },
        { label: "Main contact", value: "Direct WhatsApp" },
        { label: "Clearer project", value: "Students & parents" },
      ],
      panelEyebrow: "Main contact",
      panelTitle: "+212 638-335452",
      panelText:
        "The fastest way to open the conversation and receive a useful first direction.",
      panelItems: [
        "Questions about studies",
        "Admission and visa",
        "A clear first direction",
      ],
    },
    form: {
      title: "Send a message",
      description:
        "Write the essentials and we will open WhatsApp with a ready-to-send message so your first contact feels faster.",
      note: "A clear first message helps us answer you faster and in a more useful way.",
      success: "Your message is ready in WhatsApp.",
      errors: {
        required: "Please fill in your name, phone number, and message.",
      },
      placeholders: {
        name: "Full name",
        phone: "Phone (WhatsApp)",
        email: "Email (optional)",
        message:
          "Explain your project, your study level, or your question...",
      },
      labels: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        message: "Message",
        submit: "Open WhatsApp message",
        secondary: "Opening...",
      },
    },
    direct: {
      eyebrow: "Direct contact",
      title: "Choose the easiest way to start.",
      intro:
        "Choose the contact method that feels simplest and most comfortable so you can explain your situation and get a useful first reply.",
      items: [
        {
          title: "Main WhatsApp",
          text: "The fastest contact to get started",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "Email",
          text: "If you prefer to write a more detailed request",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
        {
          title: "Start an application",
          text: "If you are already ready for the next step",
          value: "Open application",
          href: "/en/apply",
        },
      ],
    },
    reasons: {
      eyebrow: "You can contact us for",
      title: "The most common subjects before students begin",
      items: [
        "Understanding which study route to target",
        "Seeing whether your profile is already ready",
        "Clarifying the application logic",
        "Understanding the student visa stage better",
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Useful answers before the first contact.",
      items: [
        {
          question: "Do you support parents too?",
          answer:
            "Yes. We explain the project, the steps, and the follow-up more clearly for both the student and the family.",
        },
        {
          question: "How long does it take to get a reply?",
          answer:
            "In general, we reply within 24 to 48 hours depending on availability.",
        },
        {
          question: "Can I write to you directly on WhatsApp?",
          answer:
            "Yes. That is often the simplest way to start and ask your first questions.",
        },
      ],
    },
    cta: {
      eyebrow: "Go further",
      title: "If you are already ready, you can move straight to the application.",
      description:
        "Contact is perfect for questions. The application is ideal when you want to start the project now.",
      primary: "Apply now",
      secondary: "WhatsApp: +212 638-335452",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "تواصل • YALLA CHINA",
      title: "اطرح سؤالك واحصل على جواب أوضح.",
      description:
        "سواء كنت تريد أن تسأل عن الدراسة في الصين أو القبول أو التأشيرة أو فقط عن أفضل طريقة للبداية، يمكنك أن تراسلنا بسرعة وتحصل على توجيه أوضح.",
      stats: [
        { label: "رد سريع", value: "خلال 24 إلى 48 ساعة" },
        { label: "جهة التواصل الأساسية", value: "واتساب مباشر" },
        { label: "مشروع أوضح", value: "للطلبة والعائلات" },
      ],
      panelEyebrow: "جهة التواصل الأساسية",
      panelTitle: "+212 638-335452",
      panelText:
        "أسرع طريقة لبدء الحديث والحصول على أول توجيه مفيد وواضح.",
      panelItems: [
        "أسئلة حول الدراسة",
        "القبول والتأشيرة",
        "توجيه أول واضح",
      ],
    },
    form: {
      title: "أرسل رسالة",
      description:
        "اكتب المعلومات الأساسية وسنفتح واتساب مع رسالة جاهزة حتى تبدأ الحديث بسرعة أكبر.",
      note: "الرسالة الأولى الواضحة تساعدنا على الرد عليك بسرعة وبشكل أكثر فائدة.",
      success: "رسالتك أصبحت جاهزة داخل واتساب.",
      errors: {
        required: "يرجى إدخال الاسم ورقم الهاتف والرسالة قبل المتابعة.",
      },
      placeholders: {
        name: "الاسم الكامل",
        phone: "الهاتف (واتساب)",
        email: "البريد الإلكتروني (اختياري)",
        message: "اشرح مشروعك أو مستواك الدراسي أو سؤالك...",
      },
      labels: {
        name: "الاسم الكامل",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        submit: "افتح رسالة واتساب",
        secondary: "جارٍ الفتح...",
      },
    },
    direct: {
      eyebrow: "تواصل مباشر",
      title: "اختر الطريقة الأسهل لتبدأ.",
      intro:
        "اختر فقط الطريقة الأسهل والأريح لك حتى تشرح وضعك وتحصل على أول جواب مفيد.",
      items: [
        {
          title: "واتساب الرئيسي",
          text: "أسرع وسيلة لبدء الحديث",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "البريد الإلكتروني",
          text: "إذا كنت تفضل كتابة طلب أكثر تفصيلاً",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
        {
          title: "صفحة التقديم",
          text: "إذا كنت جاهزًا بالفعل للخطوة التالية",
          value: "افتح صفحة التقديم",
          href: "/ar/apply",
        },
      ],
    },
    reasons: {
      eyebrow: "يمكنك أن تراسلنا من أجل",
      title: "أكثر المواضيع التي يسأل عنها الطلبة قبل البداية",
      items: [
        "فهم أي مسار دراسي يناسبك",
        "معرفة ما إذا كان ملفك جاهزًا",
        "توضيح منطق التقديم",
        "فهم مرحلة تأشيرة الطالب بشكل أفضل",
      ],
    },
    faq: {
      eyebrow: "أسئلة متكررة",
      title: "إجابات مفيدة قبل أول تواصل.",
      items: [
        {
          question: "هل ترافقون الوالدين أيضًا؟",
          answer:
            "نعم. نشرح المشروع والمراحل والمتابعة بشكل أوضح للطالب وللعائلة معًا.",
        },
        {
          question: "كم يستغرق الحصول على رد؟",
          answer:
            "في الغالب نرد خلال 24 إلى 48 ساعة حسب التوفر.",
        },
        {
          question: "هل يمكنني مراسلتكم مباشرة على واتساب؟",
          answer:
            "نعم. غالبًا تكون هذه أسهل طريقة للبداية وطرح الأسئلة الأولى.",
        },
      ],
    },
    cta: {
      eyebrow: "اذهب إلى الخطوة التالية",
      title: "إذا كنت جاهزًا بالفعل، يمكنك الانتقال مباشرة إلى التقديم.",
      description:
        "صفحة التواصل مناسبة للأسئلة. أما التقديم فهو الأفضل عندما تريد أن تبدأ المشروع الآن.",
      primary: "قدّم الآن",
      secondary: "واتساب: +212 638-335452",
    },
  },
};

export default function ContactPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const applyHref = `/${lang}/apply`;

  return (
    <main className="bg-[#050505] text-white" dir={t.dir}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(237,184,11,0.14),transparent_20%),linear-gradient(135deg,#170405_0%,#28080a_40%,#070707_100%)]" />
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
                  src="/fr-contact-hero.jpg"
                  alt="YALLA CHINA contact"
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
                <h2
                  className="contact-inline display-title mt-3 text-2xl font-black leading-tight text-white"
                  dir="ltr"
                >
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
          <div className="grid gap-6 xl:grid-cols-[1.04fr_0.96fr] xl:items-start">
            <div className="space-y-6">
              <ContactFormCard copy={t.form} dir={t.dir} />

              <div
                className={`rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <div className="max-w-3xl">
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
                    {t.faq.eyebrow}
                  </p>
                  <h3 className="display-title mt-3 text-2xl font-black tracking-tight">
                    {t.faq.title}
                  </h3>
                </div>

                <div className="mt-6 grid gap-4">
                  {t.faq.items.map((item) => (
                    <article
                      key={item.question}
                      className={`rounded-[1.7rem] border border-zinc-200 bg-zinc-50 p-5 ${
                        isArabic ? "text-right" : ""
                      }`}
                    >
                      <h4 className="text-base font-bold text-zinc-900">
                        {item.question}
                      </h4>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">
                        {item.answer}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div
                className={`relative overflow-hidden rounded-[2.2rem] bg-[#090909] p-6 text-white shadow-[0_24px_60px_rgba(0,0,0,0.18)] sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,184,11,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.24),transparent_34%)]" />
                <div className="absolute inset-0 opacity-15 shoji-grid" />

                <div className="relative">
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                    {t.direct.eyebrow}
                  </p>
                  <h2 className="display-title mt-3 text-2xl font-black tracking-tight">
                    {t.direct.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">
                    {t.direct.intro}
                  </p>

                  <div className="mt-6 grid gap-4">
                    {t.direct.items.map((item) => (
                      <article
                        key={item.title}
                        className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm"
                      >
                        <h3 className="text-lg font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-7 text-white/68">
                          {item.text}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={
                              item.href.startsWith("https") ? "_blank" : undefined
                            }
                            rel={
                              item.href.startsWith("https")
                                ? "noreferrer"
                                : undefined
                            }
                            className={`mt-4 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                              item.emphasis
                                ? "bg-[#EDB80B] text-black hover:opacity-90"
                                : "border border-white/12 bg-white/[0.08] text-white hover:bg-white/[0.14]"
                            }`}
                          >
                            <span className={item.value.startsWith("+") ? "contact-inline" : ""}>
                              {item.value}
                            </span>
                          </a>
                        ) : null}
                      </article>
                    ))}
                  </div>

                  <div
                    className={`mt-6 rounded-[1.9rem] border border-white/10 bg-black/20 p-6 ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                      {t.reasons.eyebrow}
                    </p>
                    <h3 className="display-title mt-3 text-2xl font-black leading-tight">
                      {t.reasons.title}
                    </h3>
                    <div className="mt-5 grid gap-3">
                      {t.reasons.items.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/84"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
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
