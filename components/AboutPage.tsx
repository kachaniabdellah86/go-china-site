  "use client";

  import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
  import Image from "next/image";
  import Link from "next/link";
  import {
    buildWhatsappUrl,
    founderName,
    Locale,
    supportedCities,
  } from "@/lib/yalla";

  type Props = {
    lang: Locale | string;
  };

  type Point = {
    title: string;
    desc: string;
  };

  type Copy = {
    dir: "ltr" | "rtl";
    hero: {
      eyebrow: string;
      title: string;
      text: string;
      primary: string;
      secondary: string;
      founderLabel: string;
      founderRole: string;
      videoLabel: string;
      videoTitle: string;
      videoText: string;
      proofOne: string;
      proofTwo: string;
      proofThree: string;
    };
    difference: {
      eyebrow: string;
      title: string;
      text: string;
      agency: string;
      guide: string;
      agencyDesc: string;
      guideDesc: string;
      chips: string[];
    };
    story: {
      eyebrow: string;
      title: string;
      text: string;
      quote: string;
      signature: string;
    };
    method: {
      eyebrow: string;
      title: string;
      text: string;
      points: Point[];
    };
    trust: {
      eyebrow: string;
      title: string;
      text: string;
      cards: Point[];
    };
    china: {
      eyebrow: string;
      title: string;
      text: string;
      details: Point[];
    };
    final: {
      eyebrow: string;
      title: string;
      text: string;
      primary: string;
      secondary: string;
    };
  };

  const VIDEO_SRC = "/videos/founder-yalla-china.mp4";

  const copy: Record<Locale, Copy> = {
    fr: {
      dir: "ltr",
      hero: {
        eyebrow: "À propos de Yalla China",
        title: "Pas seulement une agence. Un guide qui a vécu le chemin.",
        text:
          "Yalla China accompagne les étudiants marocains et leurs familles avec une méthode claire et sérieuse pour étudier en Chine.",
        primary: "Parler à Yalla China",
        secondary: "Découvrir la méthode",
        founderLabel: "Fondateur",
        founderRole:
          "Étudiant en Chine • Accompagnement académique • Repères pour les familles",
        videoLabel: "Message fondateur",
        videoTitle: "Une parole directe, pas une promesse vide.",
        videoText:
          "Le rôle de Yalla China est d’expliquer, préparer et rassurer avant que l’étudiant ne parte vers la Chine.",
        proofOne: "Expérience réelle en Chine",
        proofTwo: "Suivi du dossier au campus",
        proofThree: "Communication claire avec la famille",
      },
      difference: {
        eyebrow: "Notre différence",
        title:
          "Un bon accompagnement ne commence pas par un formulaire. Il commence par comprendre.",
        text:
          "Une famille ne cherche pas seulement une admission. Elle cherche une direction fiable, une personne qui explique, et un parcours clair.",
        agency: "Agence classique",
        guide: "Yalla China",
        agencyDesc:
          "Beaucoup de promesses, des étapes floues, et une famille qui découvre les détails trop tard.",
        guideDesc:
          "Un diagnostic du profil, une stratégie d’universités, une préparation des documents, puis un suivi jusqu’à l’arrivée.",
        chips: ["Diagnostic", "Famille", "Dossier", "Arrivée"],
      },
      story: {
        eyebrow: "Le fondateur",
        title:
          "La Chine n’est pas une idée abstraite pour nous. C’est une expérience vécue.",
        text:
          `${founderName} a étudié en Chine. Il connaît les questions que se posent les familles marocaines avant le départ, les détails qui stressent un étudiant, et les moments où une réponse claire change tout.`,
        quote:
          "Notre rôle n’est pas de vendre un rêve. Notre rôle est de transformer une ambition en parcours lisible, sérieux et accompagné.",
        signature: "Une méthode construite depuis le terrain.",
      },
      method: {
        eyebrow: "Système d’accompagnement",
        title: "Quatre mouvements. Un parcours qui reste clair.",
        text:
          "Nous avons transformé le processus d’études en Chine en étapes simples, pour que l’étudiant et sa famille sachent toujours où ils sont.",
        points: [
          {
            title: "Diagnostiquer",
            desc:
              "Profil académique, budget, objectifs, niveau de langue, ville souhaitée et attentes de la famille.",
          },
          {
            title: "Construire",
            desc:
              "Universités, spécialités, documents, traductions, candidature et suivi de l’admission.",
          },
          {
            title: "Préparer",
            desc:
              "Visa étudiant, départ, documents importants, vie pratique et repères avant d’arriver.",
          },
          {
            title: "Accueillir",
            desc:
              "Arrivée, campus, installation, premières démarches et continuité du contact avec la famille.",
          },
        ],
      },
      trust: {
        eyebrow: "Pour les familles",
        title: "Les parents n’ont pas besoin de slogans. Ils ont besoin de repères.",
        text:
          "Le projet d’études en Chine est académique, mais aussi émotionnel. Nous parlons aux étudiants et aux familles avec le même sérieux.",
        cards: [
          {
            title: "Ce qui est clair",
            desc:
              "Les étapes, les documents, les délais et les responsabilités sont expliqués sans jargon.",
          },
          {
            title: "Ce qui est sérieux",
            desc:
              "Le choix d’université se fait selon le profil, pas selon une liste générique.",
          },
          {
            title: "Ce qui rassure",
            desc:
              "La famille garde une vision claire de ce qui se passe avant le départ et après l’arrivée.",
          },
          {
            title: "Ce qui reste humain",
            desc:
              "Le suivi ne se limite pas à un fichier. Il inclut les moments où l’étudiant a besoin d’être guidé.",
          },
        ],
      },
      china: {
        eyebrow: "Pourquoi la Chine",
        title:
          "Un grand pays, plusieurs villes, plusieurs rythmes. Le choix doit être réfléchi.",
        text:
          "Le bon projet dépend autant de l’université que de la ville, du budget, du domaine d’études et du type d’environnement que l’étudiant peut réussir à vivre.",
        details: [
          { title: "Campus", desc: "Comprendre le cadre universitaire avant de choisir." },
          { title: "Ville", desc: "Comparer rythme de vie, coût, climat et accessibilité." },
          { title: "Arrivée", desc: "Préparer les premières semaines, souvent les plus sensibles." },
        ],
      },
      final: {
        eyebrow: "Commencer avec clarté",
        title: "Avant de choisir une université, comprenons votre projet.",
        text:
          "Une consultation permet de voir le profil, les objectifs, les inquiétudes et le type d’accompagnement qui convient vraiment.",
        primary: "Demander ma consultation",
        secondary: "Voir les services",
      },
    },

    en: {
      dir: "ltr",
      hero: {
        eyebrow: "About Yalla China",
        title: "Not just an agency. A guide who lived the journey.",
        text:
          "Yalla China supports Moroccan students and families with a clear, serious method for studying in China.",
        primary: "Talk to Yalla China",
        secondary: "Discover the method",
        founderLabel: "Founder",
        founderRole: "Studied in China • Academic guidance • Family reassurance",
        videoLabel: "Founder message",
        videoTitle: "A direct message, not an empty promise.",
        videoText:
          "Yalla China exists to explain, prepare, and reassure before the student leaves for China.",
        proofOne: "Real experience in China",
        proofTwo: "Support from file to campus",
        proofThree: "Clear family communication",
      },
      difference: {
        eyebrow: "Our difference",
        title: "Good guidance does not start with a form. It starts with understanding.",
        text:
          "A family is not only looking for admission. They need a reliable direction, someone who explains, and a path that does not leave the student alone.",
        agency: "Classic agency",
        guide: "Yalla China",
        agencyDesc:
          "Too many promises, unclear steps, and families discovering important details too late.",
        guideDesc:
          "Profile diagnosis, university strategy, document preparation, then support until arrival.",
        chips: ["Diagnosis", "Family", "File", "Arrival"],
      },
      story: {
        eyebrow: "The founder",
        title: "China is not an abstract idea for us. It is a lived experience.",
        text:
          `${founderName} studied in China. He understands the questions Moroccan families ask before departure, the details that stress students, and the moments when a clear answer changes everything.`,
        quote:
          "Our role is not to sell a dream. Our role is to turn ambition into a path that is readable, serious, and guided.",
        signature: "A method built from real experience.",
      },
      method: {
        eyebrow: "Guidance system",
        title: "Four movements. One path that stays clear.",
        text:
          "We turned the study-in-China process into simple stages, so the student and family always know where they are.",
        points: [
          {
            title: "Diagnose",
            desc:
              "Academic profile, budget, goals, language level, preferred city, and family expectations.",
          },
          {
            title: "Build",
            desc:
              "Universities, majors, documents, translations, application, and admission follow-up.",
          },
          {
            title: "Prepare",
            desc:
              "Student visa, departure, important documents, practical life, and pre-arrival orientation.",
          },
          {
            title: "Welcome",
            desc:
              "Arrival, campus, installation, first steps, and continued family communication.",
          },
        ],
      },
      trust: {
        eyebrow: "For families",
        title: "Parents do not need slogans. They need landmarks.",
        text:
          "Studying in China is academic, but it is also emotional. We speak to students and families with the same seriousness.",
        cards: [
          {
            title: "What is clear",
            desc: "Steps, documents, timing, and responsibilities are explained without jargon.",
          },
          {
            title: "What is serious",
            desc: "University choice is based on the student profile, not on a generic list.",
          },
          {
            title: "What reassures",
            desc:
              "The family keeps a clear view of what happens before departure and after arrival.",
          },
          {
            title: "What stays human",
            desc:
              "Support is not only a file. It includes the moments when the student needs guidance.",
          },
        ],
      },
      china: {
        eyebrow: "Why China",
        title: "A large country, many cities, many rhythms. The choice should be thoughtful.",
        text:
          "The right project depends on the university, the city, the budget, the field of study, and the environment where the student can succeed.",
        details: [
          { title: "Campus", desc: "Understand the academic environment before choosing." },
          { title: "City", desc: "Compare lifestyle, cost, climate, and accessibility." },
          { title: "Arrival", desc: "Prepare the first weeks, often the most sensitive stage." },
        ],
      },
      final: {
        eyebrow: "Start with clarity",
        title: "Before choosing a university, let’s understand your project.",
        text:
          "A consultation helps clarify the profile, goals, concerns, and the support package that truly fits.",
        primary: "Request my consultation",
        secondary: "See services",
      },
    },

    ar: {
      dir: "rtl",
      hero: {
        eyebrow: "من نحن",
        title: "لسنا مجرد وكالة. نحن دليل عاش الطريق.",
        text:
          "ترافق يلا تشاينا الطلبة المغاربة وعائلاتهم بطريقة واضحة وجادة للدراسة في الصين.",
        primary: "تحدث مع يلا تشاينا",
        secondary: "اكتشف الطريقة",
        founderLabel: "المؤسس",
        founderRole: "درس في الصين • توجيه أكاديمي • طمأنة للعائلات",
        videoLabel: "رسالة المؤسس",
        videoTitle: "رسالة مباشرة وليست وعداً فارغاً.",
        videoText:
          "يلا تشاينا موجودة لتشرح وتحضر وتطمئن قبل أن يسافر الطالب إلى الصين.",
        proofOne: "تجربة حقيقية في الصين",
        proofTwo: "مرافقة من الملف إلى الجامعة",
        proofThree: "تواصل واضح مع العائلة",
      },
      difference: {
        eyebrow: "ما الذي يميزنا",
        title: "المرافقة الجيدة لا تبدأ باستمارة. تبدأ بالفهم.",
        text:
          "العائلة لا تبحث فقط عن قبول جامعي. تبحث عن اتجاه موثوق، شخص يشرح، ومسار لا يترك الطالب وحده.",
        agency: "وكالة عادية",
        guide: "يلا تشاينا",
        agencyDesc: "وعود كثيرة، خطوات غير واضحة، وتفاصيل مهمة تكتشفها العائلة متأخرة.",
        guideDesc: "فهم الملف، استراتيجية جامعات، تحضير الوثائق، ثم مرافقة حتى الوصول.",
        chips: ["الفهم", "العائلة", "الملف", "الوصول"],
      },
      story: {
        eyebrow: "المؤسس",
        title: "الصين ليست فكرة بعيدة بالنسبة لنا. إنها تجربة عشناها.",
        text:
          `${founderName} درس في الصين. لذلك يفهم أسئلة العائلات المغربية قبل السفر، والتفاصيل التي تقلق الطالب، واللحظات التي تغير فيها الإجابة الواضحة كل شيء.`,
        quote: "دورنا ليس بيع حلم. دورنا هو تحويل الطموح إلى مسار واضح وجاد ومرافق.",
        signature: "طريقة مبنية على تجربة حقيقية.",
      },
      method: {
        eyebrow: "نظام المرافقة",
        title: "أربع مراحل. ومسار يبقى واضحاً.",
        text:
          "حوّلنا مسار الدراسة في الصين إلى مراحل بسيطة، حتى يعرف الطالب والعائلة دائماً أين وصلوا.",
        points: [
          {
            title: "نفهم",
            desc: "الملف الدراسي، الميزانية، الأهداف، مستوى اللغة، المدينة المناسبة وتوقعات العائلة.",
          },
          {
            title: "نبني",
            desc: "الجامعات، التخصصات، الوثائق، الترجمة، التقديم ومتابعة القبول.",
          },
          {
            title: "نحضّر",
            desc: "تأشيرة الطالب، السفر، الوثائق المهمة، الحياة العملية والتحضير قبل الوصول.",
          },
          {
            title: "نرافق الوصول",
            desc: "الوصول، الجامعة، السكن، أول الإجراءات واستمرار التواصل مع العائلة.",
          },
        ],
      },
      trust: {
        eyebrow: "للعائلات",
        title: "الآباء لا يحتاجون شعارات. يحتاجون وضوحاً.",
        text:
          "مشروع الدراسة في الصين أكاديمي، لكنه أيضاً قرار عائلي. لذلك نتحدث مع الطالب والعائلة بنفس الجدية.",
        cards: [
          { title: "ما هو واضح", desc: "الخطوات والوثائق والوقت والمسؤوليات يتم شرحها بدون تعقيد." },
          { title: "ما هو جاد", desc: "اختيار الجامعة يكون حسب ملف الطالب، وليس حسب قائمة عامة." },
          { title: "ما يطمئن", desc: "العائلة تبقى على معرفة بما يحدث قبل السفر وبعد الوصول." },
          {
            title: "ما يبقى إنسانياً",
            desc: "المرافقة ليست ملفاً فقط. هي أيضاً لحظات يحتاج فيها الطالب إلى توجيه.",
          },
        ],
      },
      china: {
        eyebrow: "لماذا الصين",
        title: "بلد كبير، مدن كثيرة، وإيقاعات مختلفة. الاختيار يجب أن يكون مدروساً.",
        text:
          "المشروع المناسب يعتمد على الجامعة، المدينة، الميزانية، التخصص، ونوع البيئة التي يستطيع الطالب النجاح فيها.",
        details: [
          { title: "الجامعة", desc: "فهم البيئة الجامعية قبل الاختيار." },
          { title: "المدينة", desc: "مقارنة نمط الحياة، التكلفة، المناخ وسهولة التنقل." },
          { title: "الوصول", desc: "تحضير الأسابيع الأولى لأنها غالباً المرحلة الحساسة." },
        ],
      },
      final: {
        eyebrow: "ابدأ بوضوح",
        title: "قبل اختيار الجامعة، لنفهم مشروعك.",
        text:
          "الاستشارة تساعد على فهم الملف، الأهداف، المخاوف، ونوع المرافقة المناسب فعلاً.",
        primary: "اطلب استشارتي",
        secondary: "شاهد الخدمات",
      },
    },
  };

  function getSafeLang(lang: string | undefined): Locale {
    return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
  }

  function getCitiesForLocale(lang: Locale): string[] {
    if (Array.isArray(supportedCities)) return supportedCities;

    const cityMap = supportedCities as unknown as Partial<Record<Locale, string[]>>;
    return cityMap[lang] ?? cityMap.fr ?? [];
  }

  const ease = [0.22, 1, 0.36, 1] as const;

  const reveal = {
    hidden: { opacity: 0, y: 34 },
    visible: { opacity: 1, y: 0 },
  };

  const cardReveal = {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  export default function AboutPage({ lang }: Props) {
    const safeLang = getSafeLang(lang);
    const t = copy[safeLang];
    const isArabic = t.dir === "rtl";
    const cities = getCitiesForLocale(safeLang).slice(0, 8);
    const whatsappHref = buildWhatsappUrl();

    return (
      <div
        dir={t.dir}
        lang={safeLang}
        className="overflow-hidden bg-[#050202] text-white"
      >
        <HeroSection
          t={t}
          isArabic={isArabic}
          whatsappHref={whatsappHref}
          safeLang={safeLang}
        />

        <DifferenceSection t={t} isArabic={isArabic} />
        <FounderStorySection t={t} isArabic={isArabic} />
        <MethodSection t={t} isArabic={isArabic} />
        <FamilyTrustSection t={t} isArabic={isArabic} />
        <ChinaSection t={t} isArabic={isArabic} cities={cities} />
        <FinalCtaSection t={t} safeLang={safeLang} whatsappHref={whatsappHref} />
      </div>
    );
  }

  function HeroSection({
    t,
    isArabic,
    whatsappHref,
    safeLang,
  }: {
    t: Copy;
    isArabic: boolean;
    whatsappHref: string;
    safeLang: Locale;
  }) {
    const { scrollYProgress } = useScroll();
    const imageScale = useTransform(scrollYProgress, [0, 0.22], [1.05, 1]);
    const imageY = useTransform(scrollYProgress, [0, 0.22], [0, 34]);
    const reduceMotion = useReducedMotion();

    return (
      <section className="relative min-h-[100svh] overflow-hidden lg:min-h-[100dvh]">
        <div className="absolute inset-0">
          <motion.div
            style={reduceMotion ? undefined : { scale: imageScale, y: imageY }}
            className="absolute inset-0"
          >
            <Image
              src="/yalla-campus-vision.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,2,2,0.97),rgba(5,2,2,0.74)_45%,rgba(5,2,2,0.42)),radial-gradient(circle_at_82%_22%,rgba(237,184,11,0.20),transparent_33%),radial-gradient(circle_at_12%_80%,rgba(119,3,4,0.42),transparent_38%)]" />
          <Atmosphere />
        </div>

        <div className="relative mx-auto grid min-h-[100svh] w-full max-w-[90rem] items-center gap-6 px-5 pb-8 pt-[7.25rem] sm:px-8 lg:min-h-[100dvh] lg:grid-cols-[1fr_1fr] lg:pb-8 lg:pt-[6.75rem] xl:gap-9">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className={isArabic ? "text-right" : ""}
          >
            <motion.p
              variants={reveal}
              transition={{ duration: 0.75, ease }}
              className="text-xs font-black uppercase tracking-[0.30em] text-[#EDB80B]"
            >
              {t.hero.eyebrow}
            </motion.p>

            <motion.h1
              variants={reveal}
              transition={{ duration: 0.9, ease }}
              className="mt-4 max-w-5xl text-[2.1rem] font-black leading-[1] tracking-[-0.04em] sm:text-[3.05rem] lg:text-[3.7rem] lg:leading-[0.94] lg:tracking-[-0.062em] xl:text-[4.05rem]"
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              variants={reveal}
              transition={{ duration: 0.85, ease }}
              className="mt-4 max-w-2xl text-base leading-8 text-white/74 sm:text-lg"
            >
              {t.hero.text}
            </motion.p>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.85, ease }}
              className={`mt-6 flex flex-col gap-3 sm:flex-row ${
                isArabic ? "sm:justify-end" : ""
              }`}
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#EDB80B] px-7 py-4 text-center font-black text-black shadow-[0_24px_70px_rgba(237,184,11,0.28)] transition duration-500 hover:-translate-y-1"
              >
                {t.hero.primary}
              </a>

              <Link
                href={`/${safeLang}/services`}
                className="rounded-full border border-white/15 bg-white/[0.08] px-7 py-4 text-center font-black text-white backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-white/[0.13]"
              >
                {t.hero.secondary}
              </Link>
            </motion.div>

            <motion.div
              variants={reveal}
              transition={{ duration: 0.85, ease }}
              className="mt-5 grid gap-3 sm:grid-cols-3"
            >
              {[t.hero.proofOne, t.hero.proofTwo, t.hero.proofThree].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-xs font-bold leading-5 text-white/72 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="relative"
          >
            <FounderVideoCard t={t} isArabic={isArabic} />
          </motion.div>
        </div>
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050202] via-[#050202]/55 to-transparent" />
      </section>
    );
  }

  function DifferenceSection({ t, isArabic }: { t: Copy; isArabic: boolean }) {
    return (
      <section className="relative overflow-hidden bg-[#050202] text-white">
        <CinematicBackground src="/yalla-admission-documents.jpg" strong />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(119,3,4,0.38),transparent_34%),radial-gradient(circle_at_86%_18%,rgba(237,184,11,0.16),transparent_34%)]" />

        <div className="relative mx-auto grid max-w-[86rem] gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:min-h-[74vh] lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:py-14">
          <RevealBlock className={isArabic ? "text-right" : ""}>
            <p className="text-xs font-black uppercase tracking-[0.30em] text-[#EDB80B]">
              {t.difference.eyebrow}
            </p>

            <h2 className="mt-5 max-w-4xl text-[2.05rem] font-black leading-[1] tracking-[-0.052em] text-white sm:text-[2.65rem] lg:text-[3.05rem] xl:text-[3.35rem]">
              {t.difference.title}
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg">
              {t.difference.text}
            </p>

            <div className={`mt-7 flex flex-wrap gap-3 ${isArabic ? "justify-end" : ""}`}>
              {t.difference.chips.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.065] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-white/72 backdrop-blur-xl"
                >
                  {item}
                </span>
              ))}
            </div>
          </RevealBlock>

          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.09,
                  delayChildren: 0.04,
                },
              },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="relative grid gap-4 lg:grid-cols-[0.92fr_1.08fr] lg:items-center"
          >
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.05, ease }}
              className="absolute left-8 right-8 top-1/2 hidden h-px origin-left bg-gradient-to-r from-transparent via-[#EDB80B]/45 to-transparent lg:block"
            />

            <DifferenceCard
              muted
              number="01"
              title={t.difference.agency}
              desc={t.difference.agencyDesc}
              className="lg:translate-y-6"
            />

            <DifferenceCard
              number="02"
              title={t.difference.guide}
              desc={t.difference.guideDesc}
              className="lg:-translate-y-6"
            />
          </motion.div>
        </div>
      </section>
    );
  }

  function FounderStorySection({ t, isArabic }: { t: Copy; isArabic: boolean }) {
    return (
      <section className="relative overflow-hidden bg-[#070303]">
        <CinematicBackground src="/yalla-family-trust.jpg" />
        <div className="relative mx-auto grid max-w-[86rem] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <MaskedFounderPortrait t={t} isArabic={isArabic} />
          </div>

          <RevealBlock className={isArabic ? "text-right" : ""}>
            <p className="text-xs font-black uppercase tracking-[0.30em] text-[#EDB80B]">
              {t.story.eyebrow}
            </p>
            <h2 className="mt-5 text-[2.05rem] font-black leading-[0.98] tracking-[-0.055em] sm:text-[2.6rem] lg:text-[3.05rem] xl:text-[3.35rem]">
              {t.story.title}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
              {t.story.text}
            </p>

            <motion.div
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.85, ease }}
              className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl sm:p-8"
            >
              <p className="text-2xl font-black leading-10 tracking-[-0.035em] text-white sm:text-3xl">
                “{t.story.quote}”
              </p>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.24em] text-[#EDB80B]">
                {t.story.signature}
              </p>
            </motion.div>
          </RevealBlock>
        </div>
      </section>
    );
  }

  function MethodSection({ t, isArabic }: { t: Copy; isArabic: boolean }) {
    const reduceMotion = useReducedMotion();

    return (
      <section className="relative overflow-hidden bg-[#050202]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(119,3,4,0.34),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(237,184,11,0.14),transparent_30%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050202] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050202] to-transparent" />

        <div className="relative mx-auto max-w-[86rem] px-5 py-12 sm:px-8 lg:py-14">
          <RevealBlock className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.30em] text-[#EDB80B]">
              {t.method.eyebrow}
            </p>
            <h2 className="mt-5 text-[2.05rem] font-black leading-[0.98] tracking-[-0.055em] sm:text-[2.65rem] lg:text-[3.15rem] xl:text-[3.45rem]">
              {t.method.title}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/68 sm:text-lg">
              {t.method.text}
            </p>
          </RevealBlock>

          <div className="relative mt-8">
            <motion.div
              aria-hidden="true"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.1, ease }}
              className="absolute left-[6%] right-[6%] top-[4.35rem] hidden h-px origin-left bg-gradient-to-r from-transparent via-[#EDB80B]/55 to-transparent lg:block"
            />
            <motion.div
              aria-hidden="true"
              initial={{ x: "0%", opacity: 0 }}
              whileInView={{ x: "100%", opacity: [0, 1, 0] }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.6, ease, delay: 0.35 }}
              className="absolute left-[6%] top-[4.12rem] hidden h-2 w-24 rounded-full bg-[#EDB80B]/70 blur-md lg:block"
            />
            <motion.div
              aria-hidden="true"
              initial={{ left: "6%", opacity: 0 }}
              whileInView={{ left: "92%", opacity: [0, 1, 1, 0] }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 1.65, ease, delay: 0.42 }}
              className="absolute top-[4.02rem] hidden h-3 w-3 rounded-full bg-[#EDB80B] shadow-[0_0_28px_rgba(237,184,11,0.8)] lg:block"
            />

            <div className="grid gap-4 lg:grid-cols-4">
              {t.method.points.map((point, index) => (
                <motion.article
                  key={point.title}
                  variants={cardReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.28 }}
                  transition={{ duration: 0.72, ease, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.012 }}
                  className={`group relative min-h-[15.75rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-2xl transition-transform ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <motion.div
                    aria-hidden="true"
                    className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(circle at 28% 24%, rgba(237,184,11,0.14), transparent 35%)",
                    }}
                  />

                  <motion.div
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            boxShadow: [
                              "0 18px 55px rgba(237,184,11,0.18)",
                              "0 18px 75px rgba(237,184,11,0.32)",
                              "0 18px 55px rgba(237,184,11,0.18)",
                            ],
                          }
                    }
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 3.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.18,
                          }
                    }
                    className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-full border border-[#EDB80B]/35 bg-[#EDB80B] text-lg font-black text-black"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </motion.div>

                  <div className="relative">
                    <h3 className="text-2xl font-black tracking-[-0.04em] text-white">
                      {point.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/64">
                      {point.desc}
                    </p>
                  </div>

                  <motion.div
                    aria-hidden="true"
                    initial={{ x: "-140%" }}
                    whileInView={{ x: "140%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.15, ease, delay: 0.35 + index * 0.1 }}
                    className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-[#EDB80B]/65 to-transparent"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  function FamilyTrustSection({ t, isArabic }: { t: Copy; isArabic: boolean }) {
    return (
      <section className="relative overflow-hidden bg-[#050202] py-10 text-zinc-950 sm:py-12">
        <CinematicBackground src="/yalla-family-trust.jpg" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(237,184,11,0.18),transparent_34%),radial-gradient(circle_at_10%_70%,rgba(119,3,4,0.24),transparent_36%)]" />

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.22 }}
          transition={{ duration: 0.9, ease }}
          className="relative mx-auto grid max-w-[86rem] gap-8 rounded-[2.4rem] border border-white/12 bg-[#f4ede4]/94 px-5 py-14 shadow-[0_40px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:px-8 lg:grid-cols-[0.98fr_1.02fr] lg:items-center lg:px-12 lg:py-16"
        >
          <RevealBlock className={isArabic ? "text-right" : ""}>
            <p className="text-xs font-black uppercase tracking-[0.30em] text-[#770304]">
              {t.trust.eyebrow}
            </p>
            <h2 className="mt-5 text-[2.05rem] font-black leading-[0.98] tracking-[-0.055em] sm:text-[2.6rem] lg:text-[3.05rem] xl:text-[3.35rem]">
              {t.trust.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
              {t.trust.text}
            </p>
          </RevealBlock>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.trust.cards.map((card, index) => (
              <motion.article
                key={card.title}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.72, ease, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.01 }}
                className={`rounded-[1.8rem] border border-[#770304]/10 bg-white/82 p-5 shadow-[0_26px_80px_rgba(54,1,2,0.10)] backdrop-blur-xl ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <h3 className="text-xl font-black tracking-[-0.035em] text-[#770304]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">{card.desc}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }

  function ChinaSection({
    t,
    isArabic,
    cities,
  }: {
    t: Copy;
    isArabic: boolean;
    cities: string[];
  }) {
    return (
      <section className="relative overflow-hidden bg-[#070303]">
        <CinematicBackground src="/yalla-campus-arrival.jpg" />
        <div className="relative mx-auto grid max-w-[86rem] gap-8 px-5 py-14 sm:px-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:py-16">
          <RevealBlock className={isArabic ? "text-right" : ""}>
            <p className="text-xs font-black uppercase tracking-[0.30em] text-[#EDB80B]">
              {t.china.eyebrow}
            </p>
            <h2 className="mt-5 text-[2rem] font-black leading-[0.98] tracking-[-0.055em] sm:text-[2.45rem] lg:text-[2.85rem] xl:text-[3.15rem]">
              {t.china.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
              {t.china.text}
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {t.china.details.map((detail) => (
                <motion.div
                  key={detail.title}
                  whileHover={{ y: -4 }}
                  className={`rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <h3 className="font-black text-[#EDB80B]">{detail.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-white/62">{detail.desc}</p>
                </motion.div>
              ))}
            </div>
          </RevealBlock>

          <motion.div
            variants={cardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.9, ease }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_32px_90px_rgba(0,0,0,0.28)] backdrop-blur-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(237,184,11,0.14),transparent_34%)]" />
            <div className="relative grid grid-cols-2 gap-3">
              {cities.slice(0, 8).map((city, index) => (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease, delay: index * 0.04 }}
                  whileHover={{ x: isArabic ? -4 : 4, backgroundColor: "rgba(237,184,11,0.10)" }}
                  className="rounded-[1.25rem] border border-white/10 bg-black/18 px-4 py-4 text-sm font-black text-white/82"
                >
                  {city}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  function FinalCtaSection({
    t,
    safeLang,
    whatsappHref,
  }: {
    t: Copy;
    safeLang: Locale;
    whatsappHref: string;
  }) {
    return (
      <section className="relative min-h-[64vh] overflow-hidden bg-[#050202]">
        <CinematicBackground src="/yalla-hero-student-china.jpg" strong />
        <div className="relative mx-auto flex min-h-[64vh] max-w-[86rem] flex-col items-center justify-center px-5 py-16 text-center sm:px-8 lg:py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.p
              variants={reveal}
              transition={{ duration: 0.7, ease }}
              className="text-xs font-black uppercase tracking-[0.30em] text-[#EDB80B]"
            >
              {t.final.eyebrow}
            </motion.p>
            <motion.h2
              variants={reveal}
              transition={{ duration: 0.86, ease }}
              className="mx-auto mt-5 max-w-4xl text-[2.1rem] font-black leading-[1] tracking-[-0.04em] sm:text-[2.9rem] lg:text-[3.55rem] lg:leading-[0.96] lg:tracking-[-0.06em]"
            >
              {t.final.title}
            </motion.h2>
            <motion.p
              variants={reveal}
              transition={{ duration: 0.86, ease }}
              className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg"
            >
              {t.final.text}
            </motion.p>
            <motion.div
              variants={reveal}
              transition={{ duration: 0.86, ease }}
              className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
            >
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#EDB80B] px-8 py-4 text-center font-black text-black shadow-[0_24px_70px_rgba(237,184,11,0.28)] transition hover:-translate-y-1"
              >
                {t.final.primary}
              </a>
              <Link
                href={`/${safeLang}/services`}
                className="rounded-full border border-white/15 bg-white/[0.08] px-8 py-4 text-center font-black text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.13]"
              >
                {t.final.secondary}
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  }

  function FounderVideoCard({ t, isArabic }: { t: Copy; isArabic: boolean }) {
    const reduceMotion = useReducedMotion();

    return (
      <motion.div
        whileHover={{ y: -6, scale: 1.006 }}
        transition={{ duration: 0.6, ease }}
        className="relative overflow-hidden rounded-[2.45rem] border border-white/10 bg-white/[0.065] p-3 shadow-[0_35px_100px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:p-4 xl:p-5"
      >
        <div className="relative h-[21rem] overflow-hidden rounded-[1.95rem] border border-white/10 bg-black sm:h-[23rem] lg:h-[25rem] xl:h-[27rem]">
          <video
            src={VIDEO_SRC}
            poster="/aymen-badri.png"
            className="h-full w-full bg-black object-cover"
            autoPlay={!reduceMotion}
            muted
            loop
            playsInline
            controls
            preload="metadata"
          />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,2,2,0.02),rgba(5,2,2,0.10)_48%,rgba(5,2,2,0.78)),radial-gradient(circle_at_top_right,rgba(237,184,11,0.20),transparent_36%)]" />

          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion
                ? undefined
                : { opacity: [0.35, 0.75, 0.35], scale: [1, 1.08, 1] }
            }
            transition={
              reduceMotion
                ? undefined
                : { duration: 3.8, repeat: Infinity, ease: "easeInOut" }
            }
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#EDB80B]/40 bg-black/35 text-[#EDB80B] backdrop-blur-xl"
          >
            ▶
          </motion.div>

          <div
            className={`absolute inset-x-4 bottom-4 rounded-[1.45rem] border border-white/10 bg-black/38 p-4 backdrop-blur-2xl sm:inset-x-5 sm:bottom-5 sm:p-5 ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#EDB80B]">
              {t.hero.videoLabel}
            </p>
            <h3 className="mt-2 text-xl font-black leading-tight tracking-[-0.04em] sm:text-2xl">
              {t.hero.videoTitle}
            </h3>
            <p className="mt-2 text-xs leading-6 text-white/68 sm:text-sm">{t.hero.videoText}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  function MaskedFounderPortrait({ t, isArabic }: { t: Copy; isArabic: boolean }) {
    return (
      <motion.div
        variants={cardReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease }}
        className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.065] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.32)] backdrop-blur-2xl"
      >
        <div className="relative h-[27rem] overflow-hidden rounded-[1.9rem]">
          <Image
            src="/aymen-badri.png"
            alt={founderName}
            fill
            sizes="(max-width: 1024px) 100vw, 36vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
          <div
            className={`absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/12 bg-black/42 p-5 backdrop-blur-2xl ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p className="text-[10px] font-black uppercase tracking-[0.24em] text-[#EDB80B]">
              {t.hero.founderLabel}
            </p>
            <h3 className="mt-2 text-2xl font-black tracking-[-0.04em]">{founderName}</h3>
            <p className="mt-2 text-sm leading-6 text-white/70">{t.hero.founderRole}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  function DifferenceCard({
    title,
    desc,
    number,
    muted = false,
    className = "",
  }: {
    title: string;
    desc: string;
    number: string;
    muted?: boolean;
    className?: string;
  }) {
    return (
      <motion.article
        variants={cardReveal}
        transition={{ duration: 0.78, ease }}
        whileHover={{ y: -6, scale: 1.006 }}
        className={`relative overflow-hidden rounded-[2rem] border p-6 shadow-[0_34px_95px_rgba(0,0,0,0.25)] backdrop-blur-2xl sm:p-7 ${
          muted
            ? "border-white/10 bg-white/[0.92] text-zinc-950"
            : "border-[#EDB80B]/20 bg-gradient-to-br from-[#8B0000] via-[#6d0203] to-[#210303] text-white"
        } ${className}`}
      >
        <div
          aria-hidden="true"
          className={`absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full blur-3xl ${
            muted ? "bg-[#EDB80B]/18" : "bg-[#EDB80B]/24"
          }`}
        />

        <motion.div
          aria-hidden="true"
          initial={{ x: "-120%" }}
          whileInView={{ x: "120%" }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
          className="absolute inset-y-0 left-0 w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        />

        <div className="relative">
          <div className="flex items-center justify-between gap-4">
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full text-sm font-black ${
                muted ? "bg-zinc-200 text-zinc-500" : "bg-[#EDB80B] text-black"
              }`}
            >
              {number}
            </span>
            <span
              className={`h-px flex-1 ${muted ? "bg-zinc-200" : "bg-white/14"}`}
            />
          </div>

          <h3 className={`mt-8 text-2xl font-black tracking-[-0.04em] sm:text-3xl ${muted ? "text-zinc-950" : "text-white"}`}>
            {title}
          </h3>

          <p className={`mt-4 text-sm leading-7 sm:text-[0.95rem] ${muted ? "text-zinc-600" : "text-white/74"}`}>
            {desc}
          </p>
        </div>
      </motion.article>
    );
  }

  function RevealBlock({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.28 }}
        transition={{ duration: 0.82, ease }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  function CinematicBackground({ src, strong = false }: { src: string; strong?: boolean }) {
    const reduceMotion = useReducedMotion();

    return (
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={reduceMotion ? undefined : { scale: 1.08 }}
          whileInView={reduceMotion ? undefined : { scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={reduceMotion ? undefined : { duration: 1.6, ease }}
          className="absolute inset-0"
        >
          <Image src={src} alt="" fill sizes="100vw" className="object-cover" />
        </motion.div>
        <div
          className={
            strong
              ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(5,2,2,0.97),rgba(5,2,2,0.74)_48%,rgba(5,2,2,0.48)),radial-gradient(circle_at_78%_18%,rgba(237,184,11,0.16),transparent_34%)]"
              : "absolute inset-0 bg-[linear-gradient(90deg,rgba(5,2,2,0.96),rgba(5,2,2,0.76)_48%,rgba(5,2,2,0.52)),radial-gradient(circle_at_78%_18%,rgba(237,184,11,0.15),transparent_34%)]"
          }
        />
        <div className="absolute inset-0 opacity-[0.12] shoji-grid" />
        <Atmosphere />
      </div>
    );
  }

  function Atmosphere() {
    return (
      <>
        <div className="absolute left-[-14rem] top-[-12rem] h-[28rem] w-[28rem] rounded-full bg-[#770304]/35 blur-3xl" />
        <div className="absolute right-[-16rem] top-[12%] h-[30rem] w-[30rem] rounded-full bg-[#EDB80B]/14 blur-3xl" />
        <div className="absolute inset-0 opacity-[0.16] mix-blend-soft-light [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12)_0_1px,transparent_1px),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.10)_0_1px,transparent_1px)] [background-size:18px_18px,26px_26px]" />
      </>
    );
  }
