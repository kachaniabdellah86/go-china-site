import Container from "@/components/Container";
import ContactFormCard from "@/components/ContactFormCard";
import FounderStories from "@/components/FounderStories";
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
    description: string;
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
      title: "Parlez-nous de votre projet et recevez une réponse claire.",
      description:
        "Une question sur les études en Chine, l'admission ou le visa étudiant ? Écrivez-nous et nous vous répondons rapidement avec des explications simples et un vrai sens de la suite.",
      stats: [
        { label: "Réponse rapide", value: "Sous 24-48h" },
        { label: "Contact direct", value: "WhatsApp ou téléphone" },
        { label: "Projet rassuré", value: "Étudiants & parents" },
      ],
      panelEyebrow: "Contact principal",
      panelTitle: "+212 638-335452",
      panelText:
        "Le moyen le plus rapide pour lancer la conversation et obtenir une première orientation.",
      panelItems: [
        "Questions sur les études",
        "Admission et visa",
        "Échange simple et humain",
      ],
    },
    form: {
      title: "Envoyer un message",
      description:
        "Remplissez ce formulaire et nous ouvrirons WhatsApp avec votre message prêt à être envoyé.",
      note: "Le formulaire ouvre WhatsApp avec vos informations déjà préparées pour vous faire gagner du temps.",
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
      title: "Choisissez la manière la plus simple de nous écrire.",
      items: [
        {
          title: "WhatsApp principal",
          text: "Réponse rapide pour démarrer le projet",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "Deuxième numéro",
          text: "Si vous préférez un autre contact",
          value: "+212 707-298029",
          href: "https://wa.me/212707298029",
        },
        {
          title: "Email",
          text: "Pour une demande plus détaillée",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
      ],
    },
    reasons: {
      eyebrow: "Pourquoi nous écrire",
      title: "Vous n'avez pas besoin de tout savoir avant de nous contacter.",
      description:
        "Même si votre projet est encore flou, nous pouvons vous aider à mieux comprendre la direction, les possibilités, et la prochaine étape la plus utile.",
      items: [
        "Comprendre si votre profil est prêt",
        "Savoir quelles études viser",
        "Clarifier la logique du visa étudiant",
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les réponses les plus utiles avant de commencer.",
      items: [
        {
          question: "Est-ce que vous accompagnez seulement les étudiants ?",
          answer:
            "Non. Nous accompagnons aussi les parents pour expliquer le projet, les étapes et le suivi plus clairement.",
        },
        {
          question: "Combien de temps pour avoir une réponse ?",
          answer:
            "En général, nous revenons vers vous sous 24 à 48 heures.",
        },
        {
          question: "Puis-je vous écrire directement sur WhatsApp ?",
          answer:
            "Oui, c'est souvent la manière la plus rapide pour démarrer.",
        },
      ],
    },
    cta: {
      eyebrow: "Aller plus loin",
      title: "Si vous êtes déjà prêt, vous pouvez aussi passer directement à la candidature.",
      description:
        "Le contact est parfait pour poser vos questions. La candidature est idéale si vous voulez déjà lancer votre projet.",
      primary: "Postuler maintenant",
      secondary: "WhatsApp : +212 638-335452",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Contact • YALLA CHINA",
      title: "Tell us about your project and get a clear answer.",
      description:
        "Do you have a question about studying in China, admission, or the student visa? Write to us and we will reply quickly with simple explanations and a real next step.",
      stats: [
        { label: "Fast response", value: "Within 24-48h" },
        { label: "Direct contact", value: "WhatsApp or phone" },
        { label: "More confidence", value: "Students & parents" },
      ],
      panelEyebrow: "Main contact",
      panelTitle: "+212 638-335452",
      panelText:
        "The fastest way to start the conversation and get your first direction.",
      panelItems: [
        "Questions about studies",
        "Admission and visa",
        "Simple human support",
      ],
    },
    form: {
      title: "Send a message",
      description:
        "Fill in this form and we will open WhatsApp with your message ready to send.",
      note: "This form opens WhatsApp with your details already prepared so you can contact us faster.",
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
      title: "Choose the easiest way to reach us.",
      items: [
        {
          title: "Main WhatsApp",
          text: "Fast reply to help you get started",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "Second number",
          text: "If you prefer another contact",
          value: "+212 707-298029",
          href: "https://wa.me/212707298029",
        },
        {
          title: "Email",
          text: "For a more detailed request",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
      ],
    },
    reasons: {
      eyebrow: "Why contact us",
      title: "You do not need to understand everything before you write to us.",
      description:
        "Even if your project is still unclear, we can help you understand the direction, the possibilities, and the most useful next move.",
      items: [
        "See whether your profile is ready",
        "Know what kind of studies to target",
        "Clarify the student visa process",
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "The most helpful answers before you begin.",
      items: [
        {
          question: "Do you support only students?",
          answer:
            "No. We also support parents so the project, steps, and follow-up are easier to understand.",
        },
        {
          question: "How long does it take to get a reply?",
          answer: "In general, we reply within 24 to 48 hours.",
        },
        {
          question: "Can I write to you directly on WhatsApp?",
          answer:
            "Yes, that is usually the fastest way to start the conversation.",
        },
      ],
    },
    cta: {
      eyebrow: "Go further",
      title: "If you are already ready, you can move straight to the application.",
      description:
        "Contact is perfect for questions. The application is ideal when you are ready to start your project.",
      primary: "Apply now",
      secondary: "WhatsApp: +212 638-335452",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "تواصل • YALLA CHINA",
      title: "أخبرنا عن مشروعك واحصل على جواب واضح.",
      description:
        "هل لديك سؤال حول الدراسة في الصين أو القبول أو تأشيرة الدراسة؟ اكتب لنا وسنعود إليك بسرعة مع شرح بسيط وخطوة تالية واضحة.",
      stats: [
        { label: "رد سريع", value: "خلال 24-48 ساعة" },
        { label: "تواصل مباشر", value: "واتساب أو هاتف" },
        { label: "ثقة أكبر", value: "للطلبة والآباء" },
      ],
      panelEyebrow: "جهة الاتصال الرئيسية",
      panelTitle: "+212 638-335452",
      panelText:
        "أسرع طريقة لبدء الحديث والحصول على أول توجيه واضح لمشروعك.",
      panelItems: [
        "أسئلة حول الدراسة",
        "القبول والتأشيرة",
        "تواصل بسيط وإنساني",
      ],
    },
    form: {
      title: "أرسل رسالة",
      description:
        "املأ هذه الاستمارة وسنفتح واتساب مع رسالتك جاهزة للإرسال.",
      note: "هذه الاستمارة تفتح واتساب مع معلوماتك مجهزة مسبقاً حتى تتواصل معنا بشكل أسرع.",
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
      title: "اختر الطريقة الأسهل لبدء الحديث معنا.",
      items: [
        {
          title: "واتساب الرئيسي",
          text: "رد سريع لمساعدتك على البداية",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "الرقم الثاني",
          text: "إذا كنت تفضل جهة تواصل أخرى",
          value: "+212 707-298029",
          href: "https://wa.me/212707298029",
        },
        {
          title: "البريد الإلكتروني",
          text: "لطلب أكثر تفصيلاً",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
      ],
    },
    reasons: {
      eyebrow: "لماذا تكتب لنا",
      title: "لا تحتاج إلى معرفة كل شيء قبل أن تتواصل معنا.",
      description:
        "حتى لو كان مشروعك ما زال غير واضح بالكامل، يمكننا مساعدتك على فهم الاتجاه، والخيارات، وأفضل خطوة تالية.",
      items: [
        "معرفة ما إذا كان ملفك جاهزاً",
        "فهم نوع الدراسة الأنسب لك",
        "توضيح مسار تأشيرة الدراسة",
      ],
    },
    faq: {
      eyebrow: "أسئلة متكررة",
      title: "أكثر الإجابات التي ستفيدك قبل أن تبدأ.",
      items: [
        {
          question: "هل ترافقون الطلبة فقط؟",
          answer:
            "لا. نحن نرافق الآباء أيضاً حتى يكون المشروع والمراحل والمتابعة أوضح وأسهل في الفهم.",
        },
        {
          question: "كم يستغرق الحصول على رد؟",
          answer: "في العادة نرد خلال 24 إلى 48 ساعة.",
        },
        {
          question: "هل يمكنني مراسلتكم مباشرة على واتساب؟",
          answer: "نعم، وغالباً تكون هذه أسرع طريقة لبدء الحديث.",
        },
      ],
    },
    cta: {
      eyebrow: "اذهب إلى الخطوة التالية",
      title: "إذا كنت جاهزاً فعلاً، يمكنك الانتقال مباشرة إلى التقديم.",
      description:
        "صفحة التواصل مناسبة للأسئلة. أما التقديم فهو الأفضل عندما تكون مستعداً لبدء مشروعك الآن.",
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
                <h2 className="contact-inline display-title mt-3 text-2xl font-black leading-tight text-white" dir="ltr">
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
                  {t.reasons.description}
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
                          target={item.href.startsWith("https") ? "_blank" : undefined}
                          rel={item.href.startsWith("https") ? "noreferrer" : undefined}
                          className={`mt-4 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${
                            item.emphasis
                              ? "bg-[#EDB80B] text-black hover:opacity-90"
                              : "border border-white/12 bg-white/[0.08] text-white hover:bg-white/[0.14]"
                          }`}
                        >
                          <span className="contact-inline">{item.value}</span>
                        </a>
                      ) : (
                        <p className="contact-inline mt-4 text-sm font-semibold text-[#EDB80B]">
                          {item.value}
                        </p>
                      )}
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
