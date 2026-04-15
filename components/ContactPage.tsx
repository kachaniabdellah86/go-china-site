import Image from "next/image";
import Container from "@/components/Container";
import ContactFormCard from "@/components/ContactFormCard";
import Link from "next/link";
import {
  buildWhatsappUrl,
  contactEmail,
  founderName,
  instagramHandle,
  instagramUrl,
  Locale,
  primaryWhatsappNumberDisplay,
  secondaryWhatsappNumberDisplay,
  secondaryWhatsappNumberRaw,
} from "@/lib/yalla";

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
      href: string;
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
        "Parlez-nous du projet, de la bourse recherchée, de la ville visée ou des inquiétudes des parents.",
      description:
        "Cette page sert à démarrer une conversation sérieuse. Vous pouvez nous écrire si vous hésitez encore, si vous voulez comparer les packs ou si vous êtes prêt à avancer.",
      stats: [
        { label: "Canal principal", value: "WhatsApp direct" },
        { label: "Fondateur", value: founderName },
        { label: "Approche", value: "Parents & étudiants" },
      ],
      panelEyebrow: "Premier point de contact",
      panelTitle: primaryWhatsappNumberDisplay,
      panelText:
        "Le moyen le plus rapide pour demander une consultation gratuite, poser une question sur la bourse ou clarifier le visa et l'arrivée.",
      panelItems: [
        "Questions sur Pack 1 et Pack 2",
        "Clarification sur admission, visa et voyage",
        "Contact humain avant toute décision",
      ],
    },
    form: {
      title: "Préparer un message clair",
      description:
        "Remplissez l'essentiel et nous générerons un message WhatsApp propre pour accélérer le premier échange.",
      note:
        "Plus votre premier message est précis, plus nous pouvons vous répondre utilement sur la bonne voie à suivre.",
      success: "Votre message est prêt dans WhatsApp.",
      errors: {
        required: "Merci de remplir votre nom, votre téléphone et votre message.",
      },
      placeholders: {
        name: "Nom complet",
        phone: "Téléphone / WhatsApp",
        email: "Email (optionnel)",
        message: "Expliquez votre projet, votre niveau ou vos questions principales...",
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
      title: "Choisissez la manière la plus simple de commencer.",
      intro:
        "WhatsApp reste le canal le plus rapide. Vous pouvez aussi passer par email ou découvrir l'univers de la marque sur Instagram.",
      items: [
        {
          title: "WhatsApp principal",
          text: "Pour la consultation gratuite et les premières questions",
          value: primaryWhatsappNumberDisplay,
          href: buildWhatsappUrl(),
          emphasis: true,
        },
        {
          title: "WhatsApp secondaire",
          text: "Un deuxième point d'entrée si vous préférez",
          value: secondaryWhatsappNumberDisplay,
          href: buildWhatsappUrl(undefined, secondaryWhatsappNumberRaw),
        },
        {
          title: "Email",
          text: "Pour une demande plus détaillée ou plus formelle",
          value: contactEmail,
          href: `mailto:${contactEmail}`,
        },
        {
          title: "Instagram",
          text: "Pour voir le positionnement et l'univers Yalla China",
          value: instagramHandle,
          href: instagramUrl,
        },
      ],
    },
    reasons: {
      eyebrow: "Pourquoi les familles nous écrivent",
      title: "Les sujets les plus fréquents avant de choisir une formule",
      items: [
        "Comprendre si une bourse ou une université correspond au profil",
        "Vérifier la qualité du service et la clarté du suivi",
        "Poser des questions sur le visa, le voyage et l'arrivée",
        "Rassurer les parents avant la candidature",
      ],
    },
    faq: {
      eyebrow: "Questions fréquentes",
      title: "Les réponses utiles avant le premier échange",
      items: [
        {
          question: "La consultation est-elle gratuite ?",
          answer:
            "Oui. Elle sert à comprendre votre situation, répondre aux premières questions et orienter vers le bon pack.",
        },
        {
          question: "Combien de temps faut-il pour avoir un retour ?",
          answer:
            "Nous cherchons à revenir rapidement, surtout lorsque le message explique clairement le besoin principal.",
        },
        {
          question: "Est-ce que les parents peuvent aussi poser leurs questions ?",
          answer:
            "Oui. Le site est pensé pour le parent autant que pour l'étudiant, donc la conversation peut être menée avec les deux.",
        },
      ],
    },
    cta: {
      eyebrow: "Aller plus loin",
      title:
        "Si le projet est déjà clair, vous pouvez aussi passer directement à la candidature.",
      description:
        "Le contact sert à clarifier. La candidature sert à enclencher le travail. Choisissez le point d'entrée le plus adapté à votre niveau de décision.",
      primary: "Postuler maintenant",
      secondary: `WhatsApp : ${primaryWhatsappNumberDisplay}`,
    },
  },
  en: {
    dir: "ltr",
    hero: {
      badge: "Contact • Free consultation",
      title:
        "Talk to us about the project, the scholarship path, the target city, or the parents' concerns.",
      description:
        "This page exists to start a serious conversation. You can write to us if you are still hesitating, if you want to compare packages, or if you are ready to move forward.",
      stats: [
        { label: "Main channel", value: "Direct WhatsApp" },
        { label: "Founder", value: founderName },
        { label: "Approach", value: "Parents & students" },
      ],
      panelEyebrow: "First contact point",
      panelTitle: primaryWhatsappNumberDisplay,
      panelText:
        "The fastest way to request a free consultation, ask a scholarship question, or clarify visa and arrival support.",
      panelItems: [
        "Questions about Package 1 and Package 2",
        "Clarification around admission, visa, and travel",
        "Human contact before any decision",
      ],
    },
    form: {
      title: "Prepare a clear message",
      description:
        "Fill in the essentials and we will generate a clean WhatsApp message to speed up the first exchange.",
      note:
        "The more precise your first message is, the more useful our answer can be about the right next move.",
      success: "Your message is ready in WhatsApp.",
      errors: {
        required: "Please fill in your name, phone number, and message.",
      },
      placeholders: {
        name: "Full name",
        phone: "Phone / WhatsApp",
        email: "Email (optional)",
        message: "Explain your project, your level, or your main questions...",
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
        "WhatsApp remains the fastest channel. You can also use email or discover the brand world on Instagram.",
      items: [
        {
          title: "Main WhatsApp",
          text: "For the free consultation and the first questions",
          value: primaryWhatsappNumberDisplay,
          href: buildWhatsappUrl(),
          emphasis: true,
        },
        {
          title: "Secondary WhatsApp",
          text: "A second entry point if you prefer",
          value: secondaryWhatsappNumberDisplay,
          href: buildWhatsappUrl(undefined, secondaryWhatsappNumberRaw),
        },
        {
          title: "Email",
          text: "For a more detailed or formal request",
          value: contactEmail,
          href: `mailto:${contactEmail}`,
        },
        {
          title: "Instagram",
          text: "To see Yalla China's positioning and universe",
          value: instagramHandle,
          href: instagramUrl,
        },
      ],
    },
    reasons: {
      eyebrow: "Why families contact us",
      title: "The most common topics before choosing a formula",
      items: [
        "Understand whether a scholarship or university fits the profile",
        "Verify service quality and communication clarity",
        "Ask questions about visa, travel, and arrival",
        "Reassure the parents before the application begins",
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Useful answers before the first conversation",
      items: [
        {
          question: "Is the consultation free?",
          answer:
            "Yes. It exists to understand your situation, answer the first questions, and point you toward the right package.",
        },
        {
          question: "How long does it take to get a reply?",
          answer:
            "We try to reply quickly, especially when the message explains the main need clearly.",
        },
        {
          question: "Can parents ask their own questions too?",
          answer:
            "Yes. The site is built for the parent as much as for the student, so the conversation can include both.",
        },
      ],
    },
    cta: {
      eyebrow: "Go further",
      title:
        "If the project is already clear, you can move directly to the application.",
      description:
        "Contact is for clarification. The application is for starting the actual work. Choose the entry point that matches your decision stage.",
      primary: "Apply now",
      secondary: `WhatsApp: ${primaryWhatsappNumberDisplay}`,
    },
  },
  ar: {
    dir: "rtl",
    hero: {
      badge: "تواصل • استشارة مجانية",
      title:
        "حدثنا عن المشروع أو المنحة أو المدينة المستهدفة أو مخاوف الوالدين قبل اتخاذ القرار.",
      description:
        "هذه الصفحة موجودة لبدء محادثة جدية. يمكنك مراسلتنا إذا كنت ما زلت متردداً، أو إذا أردت مقارنة الباقات، أو إذا كنت جاهزاً للانتقال إلى الخطوة التالية.",
      stats: [
        { label: "القناة الرئيسية", value: "واتساب مباشر" },
        { label: "المؤسس", value: founderName },
        { label: "الأسلوب", value: "للوالدين والطلبة" },
      ],
      panelEyebrow: "أول نقطة تواصل",
      panelTitle: primaryWhatsappNumberDisplay,
      panelText:
        "أسرع طريقة لطلب استشارة مجانية أو طرح سؤال عن المنحة أو توضيح التأشيرة والوصول.",
      panelItems: [
        "أسئلة حول الباقة 1 والباقة 2",
        "توضيح القبول والتأشيرة والسفر",
        "تواصل إنساني قبل أي قرار",
      ],
    },
    form: {
      title: "حضّر رسالة واضحة",
      description:
        "املأ الأساسيات وسنجهز لك رسالة واتساب مرتبة لتسريع أول تواصل.",
      note:
        "كلما كانت رسالتك الأولى أدق، كان ردنا أكثر فائدة في توجيهك نحو الخطوة المناسبة.",
      success: "رسالتك جاهزة في واتساب.",
      errors: {
        required: "يرجى إدخال الاسم ورقم الهاتف والرسالة قبل المتابعة.",
      },
      placeholders: {
        name: "الاسم الكامل",
        phone: "الهاتف / WhatsApp",
        email: "البريد الإلكتروني (اختياري)",
        message: "اشرح مشروعك أو مستواك أو أهم أسئلتك...",
      },
      labels: {
        name: "الاسم الكامل",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        submit: "افتح رسالة واتساب",
        secondary: "جار الفتح...",
      },
    },
    direct: {
      eyebrow: "تواصل مباشر",
      title: "اختر الطريقة الأسهل للبدء.",
      intro:
        "يبقى واتساب هو القناة الأسرع. ويمكنك أيضاً استخدام البريد الإلكتروني أو مشاهدة عالم العلامة على Instagram.",
      items: [
        {
          title: "واتساب الرئيسي",
          text: "للاستشارة المجانية والأسئلة الأولى",
          value: primaryWhatsappNumberDisplay,
          href: buildWhatsappUrl(),
          emphasis: true,
        },
        {
          title: "واتساب الثانوي",
          text: "مدخل ثان إذا كنت تفضل ذلك",
          value: secondaryWhatsappNumberDisplay,
          href: buildWhatsappUrl(undefined, secondaryWhatsappNumberRaw),
        },
        {
          title: "البريد الإلكتروني",
          text: "لطلب أكثر تفصيلاً أو بطابع أكثر رسمية",
          value: contactEmail,
          href: `mailto:${contactEmail}`,
        },
        {
          title: "Instagram",
          text: "لرؤية تموضع يلا تشاينا وعالمها",
          value: instagramHandle,
          href: instagramUrl,
        },
      ],
    },
    reasons: {
      eyebrow: "لماذا تتواصل معنا العائلات",
      title: "أكثر المواضيع حضوراً قبل اختيار الباقة المناسبة",
      items: [
        "فهم هل المنحة أو الجامعة تناسب الملف",
        "التحقق من جودة الخدمة ووضوح التواصل",
        "طرح أسئلة حول التأشيرة والسفر والوصول",
        "طمأنة الوالدين قبل بدء التقديم",
      ],
    },
    faq: {
      eyebrow: "أسئلة متكررة",
      title: "أجوبة مفيدة قبل أول محادثة",
      items: [
        {
          question: "هل الاستشارة مجانية؟",
          answer:
            "نعم. الهدف منها فهم وضعك والرد على الأسئلة الأولى وتوجيهك نحو الباقة المناسبة.",
        },
        {
          question: "كم يستغرق الحصول على رد؟",
          answer:
            "نحاول الرد بسرعة، خاصة عندما تشرح الرسالة الحاجة الأساسية بوضوح.",
        },
        {
          question: "هل يمكن للوالدين طرح أسئلتهما أيضاً؟",
          answer:
            "نعم. الموقع موجه للوالد بقدر ما هو موجه للطالب، لذلك يمكن أن تشمل المحادثة الطرفين.",
        },
      ],
    },
    cta: {
      eyebrow: "اذهب أبعد",
      title:
        "إذا كانت الصورة واضحة فعلاً، يمكنك الانتقال مباشرة إلى التقديم.",
      description:
        "التواصل للتوضيح، أما التقديم فللبدء في العمل الفعلي. اختر نقطة الدخول التي تناسب مرحلة قرارك.",
      primary: "قدّم الآن",
      secondary: `WhatsApp: ${primaryWhatsappNumberDisplay}`,
    },
  },
};

export default function ContactPage({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const applyHref = `/${lang}/apply`;
  const whatsappHref = buildWhatsappUrl();
  const heroImageAlt =
    lang === "fr"
      ? "Contact Yalla China pour projet d'études en Chine"
      : lang === "en"
        ? "Contact Yalla China about studying in China"
        : "التواصل مع يلا تشاينا حول الدراسة في الصين";

  return (
    <main className="bg-[#050505] text-white" dir={t.dir} lang={lang}>
      <section className="relative overflow-hidden bg-[#130405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(119,3,4,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(177,127,2,0.14),transparent_20%),linear-gradient(135deg,#170405_0%,#28080a_40%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />
        <Container>
          <div className="relative grid gap-8 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:py-20">
            <div className={`space-y-7 ${isArabic ? "text-right" : "text-center lg:text-left"}`}>
              <p className="section-eyebrow inline-flex max-w-full flex-wrap justify-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-center text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/90 sm:text-sm sm:tracking-[0.22em] lg:justify-start lg:text-left">
                {t.hero.badge}
              </p>

              <div className="space-y-4">
                <h1
                  className={`display-title text-[2.25rem] font-black leading-[1.02] tracking-[-0.04em] sm:text-[3.25rem] lg:text-6xl ${
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
                className={`grid gap-3 sm:grid-cols-2 xl:grid-cols-3 ${
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
                    <p className="text-sm font-semibold text-white">{item.label}</p>
                    <p className="mt-1 text-sm text-white/65">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.4rem] border border-white/10 bg-black/20 shadow-[0_28px_70px_rgba(0,0,0,0.35)]">
                <div className="relative h-[20rem] w-full sm:h-[28rem]">
                  <Image
                    src="/fr-contact-hero.jpg"
                    alt={heroImageAlt}
                    fill
                    priority
                    sizes="(max-width: 1023px) 100vw, 44vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>

              <div
                className={`relative mt-4 rounded-[1.8rem] border border-white/10 bg-black/70 p-5 shadow-xl backdrop-blur-md md:absolute md:bottom-4 md:left-4 md:right-4 md:mt-0 ${
                  isArabic ? "text-right" : "text-center md:text-left"
                }`}
              >
                <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                  {t.hero.panelEyebrow}
                </p>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  data-track="contact_hero_whatsapp"
                  data-track-value={lang}
                  className="contact-inline display-title mt-3 inline-block text-2xl font-black leading-tight text-white transition hover:text-[#B17F02]"
                  dir="ltr"
                >
                  {t.hero.panelTitle}
                </a>
                <p className="mt-3 text-sm leading-7 text-white/72">{t.hero.panelText}</p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
              <ContactFormCard copy={t.form} dir={t.dir} lang={lang} />

              <div
                className={`rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_20px_45px_rgba(15,23,42,0.06)] sm:p-8 ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <div className={`max-w-3xl ${isArabic ? "" : "mx-auto text-center lg:mx-0 lg:text-left"}`}>
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
                      <h4 className="text-base font-bold text-zinc-900">{item.question}</h4>
                      <p className="mt-3 text-sm leading-7 text-zinc-600">{item.answer}</p>
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
                  <h2 className={`display-title mt-3 text-2xl font-black tracking-tight ${isArabic ? "" : "text-center lg:text-left"}`}>
                    {t.direct.title}
                  </h2>
                  <p className={`mt-3 text-sm leading-7 text-white/72 sm:text-base ${isArabic ? "" : "text-center lg:text-left"}`}>
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
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-7 text-white/68">{item.text}</p>
                        <a
                          href={item.href}
                          target={item.href.startsWith("https") ? "_blank" : undefined}
                          rel={item.href.startsWith("https") ? "noreferrer" : undefined}
                          data-track="contact_direct_link"
                          data-track-value={item.title}
                          className={`mt-4 inline-flex w-full justify-center rounded-full px-5 py-3 text-sm font-semibold transition sm:w-auto ${
                            item.emphasis
                              ? "bg-[#B17F02] text-black hover:opacity-90"
                              : "border border-white/12 bg-white/[0.08] text-white hover:bg-white/[0.14]"
                          }`}
                        >
                          <span className={item.value.startsWith("+") ? "contact-inline" : ""}>
                            {item.value}
                          </span>
                        </a>
                      </article>
                    ))}
                  </div>

                  <div
                    className={`mt-6 rounded-[1.75rem] border border-white/10 bg-white/[0.05] px-5 py-4 text-sm text-white/72 ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <p className="font-semibold text-white">
                      {lang === "fr"
                        ? "Réponse attendue"
                        : lang === "en"
                          ? "Expected reply"
                          : "موعد الرد المتوقع"}
                    </p>
                    <p className="mt-2 leading-7">
                      {lang === "fr"
                        ? "Nous cherchons à répondre rapidement aux demandes sérieuses, généralement dans la journée ou sous 24 heures ouvrées."
                        : lang === "en"
                          ? "We aim to reply quickly to serious enquiries, usually within the same day or within 24 business hours."
                          : "نسعى إلى الرد بسرعة على الطلبات الجدية، غالبا في نفس اليوم أو خلال 24 ساعة عمل."}
                    </p>
                    <div
                      className={`mt-3 flex flex-wrap gap-4 text-xs text-white/60 ${
                        isArabic ? "justify-end" : ""
                      }`}
                    >
                      <Link href={`/${lang}/privacy`} className="hover:text-white">
                        {lang === "fr" ? "Confidentialité" : lang === "en" ? "Privacy" : "الخصوصية"}
                      </Link>
                      <Link href={`/${lang}/terms`} className="hover:text-white">
                        {lang === "fr" ? "Conditions" : lang === "en" ? "Terms" : "الشروط"}
                      </Link>
                    </div>
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
                  data-track="contact_final_apply_cta"
                  data-track-value={lang}
                  className="w-full rounded-full bg-[#B17F02] px-6 py-3 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.cta.primary}
                </Link>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  data-track="contact_final_whatsapp_cta"
                  data-track-value={lang}
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
