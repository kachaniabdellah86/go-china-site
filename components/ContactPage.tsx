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
    errors: { required: string };
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
      badge: "Contact • Consultation gratuite",
      title:
        "Parlez-nous du projet et obtenez une premiere reponse claire pour l'etudiant et sa famille.",
      description:
        "Vous pouvez poser vos questions sur les packs, l'admission, le visa ou le depart. Nous vous repondons simplement, sans pression, avec une vraie direction pour la suite.",
      stats: [
        { label: "Reponse rapide", value: "Sous 24 a 48h" },
        { label: "Canal principal", value: "WhatsApp direct" },
        { label: "Approche", value: "Parents & etudiants" },
      ],
      panelEyebrow: "Canal principal",
      panelTitle: "+212 638-335452",
      panelText:
        "Le moyen le plus rapide pour poser vos premieres questions, demander la consultation gratuite et comprendre quelle formule correspond au projet.",
      panelItems: [
        "Consultation gratuite",
        "Questions sur visa et admission",
        "Direction claire des le premier echange",
      ],
    },
    form: {
      title: "Envoyer un message",
      description:
        "Ecrivez l'essentiel. Nous preparons automatiquement un message WhatsApp clair pour accelerer le premier echange.",
      note:
        "Un premier message precis nous aide a repondre plus vite et a vous orienter vers la bonne formule.",
      success: "Votre message est pret dans WhatsApp.",
      errors: {
        required: "Merci de remplir votre nom, votre telephone et votre message.",
      },
      placeholders: {
        name: "Nom complet",
        phone: "Telephone / WhatsApp",
        email: "Email (optionnel)",
        message: "Expliquez votre projet, votre niveau ou vos questions...",
      },
      labels: {
        name: "Nom complet",
        phone: "Telephone",
        email: "Email",
        message: "Message",
        submit: "Ouvrir le message WhatsApp",
        secondary: "Ouverture...",
      },
    },
    direct: {
      eyebrow: "Contact direct",
      title: "Choisissez la facon la plus simple de commencer.",
      intro:
        "WhatsApp reste le canal le plus rapide et le plus humain. Vous pouvez aussi nous ecrire par email ou voir notre univers sur Instagram.",
      items: [
        {
          title: "WhatsApp principal",
          text: "Le contact le plus rapide pour la consultation gratuite",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "WhatsApp secondaire",
          text: "Un deuxieme numero pour un contact rapide si besoin",
          value: "+212 707-298029",
          href: "https://wa.me/212707298029",
        },
        {
          title: "Email",
          text: "Pour une demande plus detaillee ou plus formelle",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
        {
          title: "Instagram",
          text: "Pour decouvrir la marque et son univers",
          value: "@yallachina.ma",
          href: "https://www.instagram.com/yallachina.ma/",
        },
      ],
    },
    reasons: {
      eyebrow: "Pourquoi les familles nous ecrivent",
      title: "Les sujets les plus frequents avant de choisir une formule",
      items: [
        "Comprendre le bon pack selon le profil",
        "Verifier si le projet est deja realiste",
        "Clarifier admission, visa et arrivee",
        "Rassurer les parents avant la candidature",
      ],
    },
    faq: {
      eyebrow: "Questions frequentes",
      title: "Les reponses utiles avant le premier echange.",
      items: [
        {
          question: "La consultation est-elle gratuite ?",
          answer:
            "Oui. Elle sert a comprendre la situation, repondre aux premieres questions et recommander la bonne suite.",
        },
        {
          question: "Combien de temps faut-il pour avoir un retour ?",
          answer:
            "En general, la premiere reponse arrive sous 24 a 48 heures selon la disponibilite.",
        },
        {
          question: "Est-ce que vous accompagnez aussi les parents ?",
          answer:
            "Oui. Le parcours et les decisions sont expliques de maniere plus rassurante pour toute la famille.",
        },
      ],
    },
    cta: {
      eyebrow: "Aller plus loin",
      title:
        "Si le projet est deja clair, vous pouvez aussi passer directement a la candidature.",
      description:
        "Le contact est parfait pour poser les premieres questions. La candidature est ideale si vous etes pret a avancer maintenant.",
      primary: "Postuler maintenant",
      secondary: "WhatsApp : +212 638-335452",
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Contact • Free consultation",
      title:
        "Tell us about the project and get a clear first answer for both the student and the family.",
      description:
        "You can ask about packages, admission, the visa, or departure. We reply simply, without pressure, and with a real direction for the next step.",
      stats: [
        { label: "Fast reply", value: "Within 24 to 48h" },
        { label: "Main channel", value: "Direct WhatsApp" },
        { label: "Approach", value: "Parents & students" },
      ],
      panelEyebrow: "Main channel",
      panelTitle: "+212 638-335452",
      panelText:
        "The fastest way to ask your first questions, request the free consultation, and understand which formula fits the project.",
      panelItems: [
        "Free consultation",
        "Admission and visa questions",
        "Clear direction from the first exchange",
      ],
    },
    form: {
      title: "Send a message",
      description:
        "Write the essentials. We automatically prepare a clear WhatsApp message to speed up the first exchange.",
      note:
        "A precise first message helps us answer faster and guide you toward the right formula.",
      success: "Your message is ready in WhatsApp.",
      errors: {
        required: "Please fill in your name, phone number, and message.",
      },
      placeholders: {
        name: "Full name",
        phone: "Phone / WhatsApp",
        email: "Email (optional)",
        message: "Explain your project, your level, or your questions...",
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
      title: "Choose the easiest way to begin.",
      intro:
        "WhatsApp remains the fastest and most human channel. You can also write by email or discover the brand on Instagram.",
      items: [
        {
          title: "Main WhatsApp",
          text: "The fastest contact for the free consultation",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "Secondary WhatsApp",
          text: "A second number for a quick contact if needed",
          value: "+212 707-298029",
          href: "https://wa.me/212707298029",
        },
        {
          title: "Email",
          text: "For a more detailed or more formal request",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
        {
          title: "Instagram",
          text: "To discover the brand and its universe",
          value: "@yallachina.ma",
          href: "https://www.instagram.com/yallachina.ma/",
        },
      ],
    },
    reasons: {
      eyebrow: "Why families contact us",
      title: "The most common topics before choosing a formula",
      items: [
        "Understand the right package for the profile",
        "Check whether the project already feels realistic",
        "Clarify admission, visa, and arrival",
        "Reassure parents before the application",
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Useful answers before the first exchange.",
      items: [
        {
          question: "Is the consultation free?",
          answer:
            "Yes. It helps us understand the situation, answer the first questions, and recommend the right next move.",
        },
        {
          question: "How long does it take to get a reply?",
          answer:
            "In most cases, the first reply comes within 24 to 48 hours depending on availability.",
        },
        {
          question: "Do you support parents too?",
          answer:
            "Yes. The route and decisions are explained in a more reassuring way for the whole family.",
        },
      ],
    },
    cta: {
      eyebrow: "Go further",
      title:
        "If the project is already clear, you can also move directly to the application.",
      description:
        "Contact is perfect for the first questions. The application is ideal when you are ready to move now.",
      primary: "Apply now",
      secondary: "WhatsApp: +212 638-335452",
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "تواصل • استشارة مجانية",
      title:
        "حدثونا عن المشروع واحصلوا على اول جواب واضح يطمئن الطالب والعائلة.",
      description:
        "يمكنكم طرح الاسئلة حول الباقات او القبول او التاشيرة او السفر، وسنجيبكم ببساطة ومن دون ضغط مع توجيه واضح للخطوة التالية.",
      stats: [
        { label: "رد سريع", value: "خلال 24 الى 48 ساعة" },
        { label: "القناة الرئيسية", value: "WhatsApp مباشر" },
        { label: "الاسلوب", value: "للوالدين والطلبة" },
      ],
      panelEyebrow: "القناة الرئيسية",
      panelTitle: "+212 638-335452",
      panelText:
        "اسرع طريقة لطرح الاسئلة الاولى وطلب الاستشارة المجانية وفهم الصيغة المناسبة للمشروع.",
      panelItems: [
        "استشارة مجانية",
        "اسئلة حول القبول والتاشيرة",
        "توجيه واضح من اول تواصل",
      ],
    },
    form: {
      title: "ارسل رسالة",
      description:
        "اكتبوا الاساسيات فقط. سنجهز رسالة WhatsApp واضحة بشكل تلقائي لتسهيل اول تواصل.",
      note:
        "الرسالة الاولى الواضحة تساعدنا على الرد بسرعة وتوجيهكم نحو الصيغة المناسبة.",
      success: "رسالتكم جاهزة في WhatsApp.",
      errors: {
        required: "يرجى ادخال الاسم ورقم الهاتف والرسالة قبل المتابعة.",
      },
      placeholders: {
        name: "الاسم الكامل",
        phone: "الهاتف / WhatsApp",
        email: "البريد الالكتروني (اختياري)",
        message: "اشرحوا مشروعكم او مستواكم او اسئلتكم...",
      },
      labels: {
        name: "الاسم الكامل",
        phone: "الهاتف",
        email: "البريد الالكتروني",
        message: "الرسالة",
        submit: "افتح رسالة WhatsApp",
        secondary: "جار الفتح...",
      },
    },
    direct: {
      eyebrow: "تواصل مباشر",
      title: "اختاروا الطريقة الاسهل للبداية.",
      intro:
        "يبقى WhatsApp هو القناة الاسرع والاقرب، ويمكنكم ايضا مراسلتنا عبر البريد الالكتروني او مشاهدة حضور العلامة على Instagram.",
      items: [
        {
          title: "WhatsApp الرئيسي",
          text: "اسرع تواصل من اجل الاستشارة المجانية",
          value: "+212 638-335452",
          href: "https://wa.me/212638335452",
          emphasis: true,
        },
        {
          title: "WhatsApp الثانوي",
          text: "رقم ثان لتواصل سريع عند الحاجة",
          value: "+212 707-298029",
          href: "https://wa.me/212707298029",
        },
        {
          title: "البريد الالكتروني",
          text: "لطلب اكثر تفصيلا او اكثر رسمية",
          value: "contact@yallachina.com",
          href: "mailto:contact@yallachina.com",
        },
        {
          title: "Instagram",
          text: "لاكتشاف العلامة وحضورها",
          value: "@yallachina.ma",
          href: "https://www.instagram.com/yallachina.ma/",
        },
      ],
    },
    reasons: {
      eyebrow: "لماذا تتواصل معنا العائلات",
      title: "اكثر المواضيع حضورا قبل اختيار الصيغة",
      items: [
        "فهم الباقة المناسبة حسب الملف",
        "معرفة هل المشروع واقعي بالفعل",
        "توضيح القبول والتاشيرة والوصول",
        "طمأنة الوالدين قبل التقديم",
      ],
    },
    faq: {
      eyebrow: "اسئلة متكررة",
      title: "اجوبة مفيدة قبل اول تواصل.",
      items: [
        {
          question: "هل الاستشارة مجانية؟",
          answer:
            "نعم. هدفها فهم الوضع والاجابة عن الاسئلة الاولى وتوجيه الخطوة المناسبة.",
        },
        {
          question: "كم يستغرق الحصول على رد؟",
          answer:
            "في الغالب يصل اول رد خلال 24 الى 48 ساعة حسب التوفر.",
        },
        {
          question: "هل ترافقون الوالدين ايضا؟",
          answer:
            "نعم. يتم شرح المسار والقرارات بشكل اوضح واكثر طمانينة للعائلة كلها.",
        },
      ],
    },
    cta: {
      eyebrow: "الخطوة التالية",
      title:
        "اذا كانت الصورة واضحة بالفعل، يمكنكم ايضا الانتقال مباشرة الى التقديم.",
      description:
        "التواصل مناسب للاسئلة الاولى. اما التقديم فهو الافضل عندما تكونون مستعدين للتحرك الان.",
      primary: "قدم الان",
      secondary: "WhatsApp: +212 638-335452",
    },
  },
};

export default function ContactPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const applyHref = `/${lang}/apply`;
  const whatsappHref = "https://wa.me/212638335452";

  return (
    <main className="bg-[#050505] text-white" dir={t.dir}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,3,4,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(177,127,2,0.14),transparent_20%),linear-gradient(135deg,#170405_0%,#28080a_40%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <Container>
          <div className="relative grid gap-8 py-12 lg:gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:py-20">
            <div
              className={`space-y-7 ${
                isArabic ? "text-right" : "text-center lg:text-left"
              }`}
            >
              <p className="section-eyebrow inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/90 sm:text-sm sm:tracking-[0.22em]">
                {t.hero.badge}
              </p>

              <div className="space-y-4">
                <h1
                  className={`display-title text-[2.7rem] font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${
                    isArabic ? "max-w-4xl" : "mx-auto max-w-4xl lg:mx-0"
                  }`}
                >
                  {t.hero.title}
                </h1>
                <p
                  className={`max-w-2xl text-base leading-8 text-white/78 sm:text-lg ${
                    isArabic ? "" : "mx-auto lg:mx-0"
                  }`}
                >
                  {t.hero.description}
                </p>
              </div>

              <div
                className={`grid gap-3 sm:grid-cols-3 ${
                  isArabic ? "" : "mx-auto max-w-xl lg:mx-0 lg:max-w-none"
                }`}
              >
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
                  className="h-[20rem] w-full object-cover sm:h-[28rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div
                className={`relative mt-4 rounded-[1.8rem] border border-white/10 bg-black/70 p-5 shadow-xl backdrop-blur-md sm:absolute sm:bottom-4 sm:left-4 sm:right-4 sm:mt-0 ${
                  isArabic ? "text-right" : "text-center sm:text-left"
                }`}
              >
                <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                  {t.hero.panelEyebrow}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-inline display-title mt-3 inline-block text-2xl font-black leading-tight text-white transition hover:text-[#B17F02]"
                  dir="ltr"
                >
                  {t.hero.panelTitle}
                </a>
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
                <div
                  className={`max-w-3xl ${
                    isArabic ? "" : "mx-auto text-center lg:mx-0 lg:text-left"
                  }`}
                >
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
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
                        isArabic ? "text-right" : "text-left"
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
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(177,127,2,0.12),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.24),transparent_34%)]" />
                <div className="absolute inset-0 opacity-15 shoji-grid" />

                <div className="relative">
                  <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                    {t.direct.eyebrow}
                  </p>
                  <h2
                    className={`display-title mt-3 text-2xl font-black tracking-tight ${
                      isArabic ? "" : "text-center lg:text-left"
                    }`}
                  >
                    {t.direct.title}
                  </h2>
                  <p
                    className={`mt-3 text-sm leading-7 text-white/72 sm:text-base ${
                      isArabic ? "" : "text-center lg:text-left"
                    }`}
                  >
                    {t.direct.intro}
                  </p>

                  <div className="mt-6 grid gap-4">
                    {t.direct.items.map((item) => (
                      <article
                        key={item.title}
                        className={`rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm ${
                          isArabic ? "text-right" : "text-left"
                        }`}
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
                            className={`mt-4 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition sm:w-auto ${
                              item.emphasis
                                ? "bg-[#B17F02] text-black hover:opacity-90"
                                : "border border-white/12 bg-white/[0.08] text-white hover:bg-white/[0.14]"
                            }`}
                          >
                            <span
                              className={
                                item.value.startsWith("+") ? "contact-inline" : ""
                              }
                            >
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
                    <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                      {t.reasons.eyebrow}
                    </p>
                    <h3 className="display-title mt-3 text-2xl font-black leading-tight">
                      {t.reasons.title}
                    </h3>
                    <div className="mt-5 grid gap-3">
                      {t.reasons.items.map((item) => (
                        <div
                          key={item}
                          className={`rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/84 ${
                            isArabic ? "text-right" : "text-left"
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
          </div>
        </Container>
      </section>

      <section className="bg-[#7c0913] py-12 sm:py-16">
        <Container>
          <div className="rounded-[2.4rem] border border-white/10 bg-black/20 p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div className={isArabic ? "text-right" : "text-center lg:text-left"}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
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
                  isArabic ? "sm:items-end" : "mx-auto w-full max-w-sm lg:mx-0"
                }`}
              >
                <Link
                  href={applyHref}
                  className="w-full rounded-full bg-[#B17F02] px-6 py-3 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.cta.primary}
                </Link>
                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15 sm:w-auto"
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
