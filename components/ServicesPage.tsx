"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Locale } from "@/lib/yalla";

type Stage = {
  id: string;
  label: string;
  title: string;
  short: string;
  result: string;
};

type VisualCard = {
  kicker: string;
  title: string;
  text: string;
  image: string;
};

type Pack = {
  label: string;
  price: string;
  title: string;
  text: string;
  bestFor: string;
  items: string[];
};

type Copy = {
  dir: "ltr" | "rtl";
  nav: {
    consultation: string;
    apply: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    text: string;
    primary: string;
    secondary: string;
    visualKicker: string;
    visualTitle: string;
    visualAlt: string;
  };
  proof: {
    eyebrow: string;
    title: string;
    text: string;
    visualAlt: string;
    points: string[];
  };
  system: {
    eyebrow: string;
    title: string;
    text: string;
    active: string;
    result: string;
    stages: Stage[];
  };
  cards: {
    eyebrow: string;
    title: string;
    text: string;
    items: VisualCard[];
  };
  packs: {
    eyebrow: string;
    title: string;
    text: string;
    items: Pack[];
  };
  family: {
    eyebrow: string;
    title: string;
    text: string;
    studentTitle: string;
    familyTitle: string;
    student: string[];
    family: string[];
  };
  final: {
    eyebrow: string;
    title: string;
    text: string;
  };
};

const images = {
  hero: "/services-hero-student-china.png",
  mission: "/services-mission-documents-to-arrival.png",
  documents: "/services-documents-passport.png",
  departure: "/services-departure-preparation.png",
  arrival: "/services-arrival-campus.png",
  family: "/services-family-consultation.png",
  background: "/services-documents-background.png",
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    nav: {
      consultation: "Demander une consultation",
      apply: "Lancer ma candidature",
    },
    hero: {
      eyebrow: "Services • méthode • arrivée en Chine",
      title: "Un système clair pour partir étudier en Chine.",
      text: "Pas une longue liste. Un parcours piloté : profil, universités, dossier, visa, départ et premiers repères.",
      primary: "Demander une consultation",
      secondary: "Voir le système",
      visualKicker: "Mission étudiant : Chine",
      visualTitle: "Chaque étape a une sortie claire.",
      visualAlt: "Étudiant préparant son projet d’études en Chine",
    },
    proof: {
      eyebrow: "Du dossier au campus",
      title: "On transforme l’incertitude en étapes visibles.",
      text: "L’étudiant avance. La famille comprend. Chaque phase réduit une peur réelle : mauvais choix, dossier incomplet, visa confus ou arrivée stressante.",
      visualAlt: "Documents d’admission et accompagnement jusqu’à l’arrivée",
      points: ["Profil", "Admission", "Visa", "Départ", "Arrivée"],
    },
    system: {
      eyebrow: "Le système guidé",
      title: "Six contrôles. Une trajectoire.",
      text: "Chaque étape a un rôle, une responsabilité et une preuve d’avancement.",
      active: "Contrôle actif",
      result: "Résultat attendu",
      stages: [
        { id: "01", label: "Profil", title: "Diagnostic du projet", short: "Niveau, budget, domaine, ville et attentes de la famille.", result: "Une direction réaliste avant de choisir." },
        { id: "02", label: "Stratégie", title: "Choix des universités", short: "Options cohérentes selon le profil et la solidité du dossier.", result: "Une liste utile, pas générique." },
        { id: "03", label: "Dossier", title: "Dossier d’admission", short: "Documents, vérification, traduction et dépôt suivi.", result: "Un dossier propre et défendable." },
        { id: "04", label: "Visa", title: "Visa étudiant", short: "Pièces importantes, délais, explications et préparation.", result: "Moins de stress avant le dépôt." },
        { id: "05", label: "Départ", title: "Préparation du départ", short: "Liste de préparation, billet, repères pratiques et communication familiale.", result: "Un départ cadré." },
        { id: "06", label: "Arrivée", title: "Premiers repères en Chine", short: "Campus, installation et premières démarches selon la formule.", result: "Une arrivée plus rassurante." },
      ],
    },
    cards: {
      eyebrow: "Ce que nous gérons",
      title: "Trois moments où le service doit être solide.",
      text: "Seulement les blocs qui changent vraiment l’expérience de l’étudiant et de sa famille.",
      items: [
        { kicker: "01 • Dossier", title: "Admission & documents", text: "Construire un dossier lisible, complet et cohérent avec le profil.", image: images.documents },
        { kicker: "02 • Départ", title: "Préparation pratique", text: "Anticiper le billet, les repères, la liste de préparation et les questions avant le voyage.", image: images.departure },
        { kicker: "03 • Campus", title: "Arrivée en Chine", text: "Réduire le flou des premiers jours et garder la famille informée.", image: images.arrival },
      ],
    },
    packs: {
      eyebrow: "Deux niveaux de prise en charge",
      title: "Choisir le bon niveau, pas le pack le plus bruyant.",
      text: "La consultation sert à choisir selon l’autonomie de l’étudiant et le besoin de visibilité de la famille.",
      items: [
        { label: "Pack Standard", price: "15.000 DH", title: "Dossier & visa", text: "Le cœur administratif pour sécuriser l’admission et la demande de visa.", bestFor: "Étudiant autonome après le visa.", items: ["Orientation", "Dossier", "Admission", "Visa", "Suivi clair"] },
        { label: "Pack Premium", price: "23.000 DH", title: "Jusqu’à l’arrivée", text: "Le Pack Standard, plus la préparation du départ et les premiers repères en Chine.", bestFor: "Famille qui veut plus de présence.", items: ["Tout le Standard", "Préparation", "Billet", "Transfert", "Repères campus"] },
      ],
    },
    family: {
      eyebrow: "Deux publics, une responsabilité",
      title: "L’étudiant veut avancer. La famille veut être rassurée.",
      text: "Un bon service parle aux deux : méthode pour l’étudiant, visibilité pour les parents.",
      studentTitle: "Côté étudiant",
      familyTitle: "Côté famille",
      student: ["Savoir quoi faire", "Comprendre le visa", "Préparer les bons documents"],
      family: ["Comprendre le parcours", "Savoir qui suit", "Être rassurée avant le départ"],
    },
    final: {
      eyebrow: "Commencer avec clarté",
      title: "Avant de choisir une formule, clarifions votre projet.",
      text: "Une consultation permet de comprendre le profil, les objectifs, les inquiétudes et le niveau d’accompagnement adapté.",
    },
  },
  en: {
    dir: "ltr",
    nav: {
      consultation: "Request a consultation",
      apply: "Start my application",
    },
    hero: {
      eyebrow: "Services • method • arrival in China",
      title: "A clear system for studying in China.",
      text: "Not a long list. A guided route: profile, universities, file, visa, departure, and first landmarks.",
      primary: "Request a consultation",
      secondary: "See the system",
      visualKicker: "Student mission: China",
      visualTitle: "Every step has a clear output.",
      visualAlt: "Student preparing a study project for China",
    },
    proof: {
      eyebrow: "From file to campus",
      title: "We turn uncertainty into visible stages.",
      text: "The student moves forward. The family understands. Each phase reduces a real fear: bad choice, incomplete file, confusing visa, or stressful arrival.",
      visualAlt: "Admission documents and support through arrival",
      points: ["Profile", "Admission", "Visa", "Departure", "Arrival"],
    },
    system: {
      eyebrow: "The guided system",
      title: "Six checkpoints. One trajectory.",
      text: "Every step has a role, a responsibility, and visible progress.",
      active: "Active checkpoint",
      result: "Expected result",
      stages: [
        { id: "01", label: "Profile", title: "Project diagnosis", short: "Level, budget, field, city, and family expectations.", result: "A realistic direction before choosing." },
        { id: "02", label: "Strategy", title: "University choice", short: "Coherent options based on profile and file strength.", result: "A useful list, not generic." },
        { id: "03", label: "File", title: "Admission file", short: "Documents, checks, translation, submission, and follow-up.", result: "A clean and defensible file." },
        { id: "04", label: "Visa", title: "Student visa", short: "Important papers, timelines, explanations, and preparation.", result: "Less stress before submission." },
        { id: "05", label: "Departure", title: "Departure preparation", short: "Preparation list, ticket, practical landmarks, and family communication.", result: "A framed departure." },
        { id: "06", label: "Arrival", title: "First landmarks in China", short: "Campus, installation, and first steps depending on the package.", result: "A more reassuring arrival." },
      ],
    },
    cards: {
      eyebrow: "What we handle",
      title: "Three moments where support must be solid.",
      text: "Only the blocks that genuinely change the student and family experience.",
      items: [
        { kicker: "01 • File", title: "Admission & documents", text: "Build a clear, complete file aligned with the student profile.", image: images.documents },
        { kicker: "02 • Departure", title: "Practical preparation", text: "Prepare ticket landmarks, a preparation list, and questions before travel.", image: images.departure },
        { kicker: "03 • Campus", title: "Arrival in China", text: "Reduce confusion during the first days and keep family informed.", image: images.arrival },
      ],
    },
    packs: {
      eyebrow: "Two levels of support",
      title: "Choose the right level, not the loudest package.",
      text: "The consultation helps choose based on student autonomy and the family’s need for visibility.",
      items: [
        { label: "Standard Pack", price: "15,000 DH", title: "File & visa", text: "The administrative core to secure admission and visa preparation.", bestFor: "Student autonomous after the visa.", items: ["Orientation", "File", "Admission", "Visa", "Clear follow-up"] },
        { label: "Premium Pack", price: "23,000 DH", title: "Until arrival", text: "Standard Pack, plus departure preparation and first landmarks in China.", bestFor: "Family that wants more presence.", items: ["Everything Standard", "Preparation", "Ticket", "Transfer", "Campus landmarks"] },
      ],
    },
    family: {
      eyebrow: "Two audiences, one responsibility",
      title: "The student wants progress. The family wants reassurance.",
      text: "Good support speaks to both: method for the student, visibility for parents.",
      studentTitle: "Student side",
      familyTitle: "Family side",
      student: ["Know what to do", "Understand the visa", "Prepare the right documents"],
      family: ["Understand the path", "Know who follows", "Feel reassured before departure"],
    },
    final: {
      eyebrow: "Start with clarity",
      title: "Before choosing a package, let’s clarify your project.",
      text: "A consultation helps clarify the profile, goals, concerns, and support level that truly fits.",
    },
  },
  ar: {
    dir: "rtl",
    nav: {
      consultation: "طلب استشارة",
      apply: "بدء الترشيح",
    },
    hero: {
      eyebrow: "الخدمات • المنهجية • الوصول إلى الصين",
      title: "نظام واضح للدراسة في الصين.",
      text: "ليست قائمة طويلة. بل مسار موجه: الملف، الجامعات، القبول، التأشيرة، السفر، وأول الخطوات.",
      primary: "طلب استشارة",
      secondary: "رؤية النظام",
      visualKicker: "مهمة الطالب: الصين",
      visualTitle: "لكل مرحلة نتيجة واضحة.",
      visualAlt: "طالب يستعد لمشروع الدراسة في الصين",
    },
    proof: {
      eyebrow: "من الملف إلى الحرم",
      title: "نحوّل الغموض إلى مراحل مرئية.",
      text: "الطالب يتقدم. العائلة تفهم. كل مرحلة تقلل خوفاً حقيقياً: اختيار خاطئ، ملف ناقص، تأشيرة مربكة أو وصول مقلق.",
      visualAlt: "وثائق القبول والمرافقة حتى الوصول",
      points: ["الملف", "القبول", "التأشيرة", "السفر", "الوصول"],
    },
    system: {
      eyebrow: "النظام الموجه",
      title: "ست نقاط متابعة. مسار واحد.",
      text: "لكل مرحلة دور ومسؤولية وتقدم مرئي.",
      active: "نقطة المتابعة",
      result: "النتيجة المنتظرة",
      stages: [
        { id: "01", label: "الملف", title: "تشخيص المشروع", short: "المستوى، الميزانية، المجال، المدينة وانتظارات العائلة.", result: "اتجاه واقعي قبل الاختيار." },
        { id: "02", label: "الخطة", title: "اختيار الجامعات", short: "اختيارات مناسبة حسب الملف وقوته.", result: "لائحة مفيدة وليست عامة." },
        { id: "03", label: "الملف", title: "ملف القبول", short: "وثائق، مراجعة، ترجمة، إيداع وتتبع.", result: "ملف نظيف ومنظم." },
        { id: "04", label: "التأشيرة", title: "تأشيرة الطالب", short: "وثائق مهمة، مواعيد، شرح وتحضير.", result: "ضغط أقل قبل الإيداع." },
        { id: "05", label: "السفر", title: "التحضير للمغادرة", short: "قائمة تحضير، تذكرة، توجيهات وتواصل مع العائلة.", result: "مغادرة مؤطرة." },
        { id: "06", label: "الوصول", title: "أول خطوات في الصين", short: "الحرم، الاستقرار، وأول الإجراءات حسب الباقة.", result: "وصول أكثر اطمئناناً." },
      ],
    },
    cards: {
      eyebrow: "ما نتكفل به",
      title: "ثلاث لحظات يجب أن تكون قوية.",
      text: "نركز فقط على المراحل التي تغيّر تجربة الطالب والعائلة فعلاً.",
      items: [
        { kicker: "01 • الملف", title: "القبول والوثائق", text: "بناء ملف واضح وكامل ومناسب لملف الطالب.", image: images.documents },
        { kicker: "02 • السفر", title: "تحضير عملي", text: "توضيح التذكرة، القائمة العملية والأسئلة قبل السفر.", image: images.departure },
        { kicker: "03 • الحرم", title: "الوصول إلى الصين", text: "تقليل الغموض في الأيام الأولى وإبقاء العائلة مطمئنة.", image: images.arrival },
      ],
    },
    packs: {
      eyebrow: "مستويان من المواكبة",
      title: "اختر المستوى الصحيح، لا العرض الأعلى صوتاً.",
      text: "الاستشارة تساعد على الاختيار حسب استقلالية الطالب وحاجة العائلة للوضوح.",
      items: [
        { label: "الباقة العادية", price: "15.000 درهم", title: "الملف والتأشيرة", text: "الأساس الإداري لتأمين القبول وتحضير التأشيرة.", bestFor: "طالب مستقل بعد التأشيرة.", items: ["توجيه", "ملف", "قبول", "تأشيرة", "تتبع واضح"] },
        { label: "الباقة المميزة", price: "23.000 درهم", title: "حتى الوصول", text: "الباقة العادية مع تحضير السفر وأول الخطوات في الصين.", bestFor: "عائلة تريد حضوراً أكبر.", items: ["كل الباقة العادية", "تحضير", "تذكرة", "انتقال", "معالم الحرم"] },
      ],
    },
    family: {
      eyebrow: "طالب وعائلة، مسؤولية واحدة",
      title: "الطالب يريد التقدم. والعائلة تريد الاطمئنان.",
      text: "المواكبة الجيدة تخاطب الاثنين: منهجية للطالب ووضوح للوالدين.",
      studentTitle: "جانب الطالب",
      familyTitle: "جانب العائلة",
      student: ["معرفة الخطوة", "فهم التأشيرة", "تحضير الوثائق"],
      family: ["فهم المسار", "معرفة من يتابع", "اطمئنان قبل السفر"],
    },
    final: {
      eyebrow: "ابدأ بوضوح",
      title: "قبل اختيار الباقة، لنوضح مشروعك.",
      text: "الاستشارة تساعد على فهم الملف والأهداف والمخاوف ومستوى المواكبة المناسب.",
    },
  },
};

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const group = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};

function getSafeLang(lang: Locale | string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

function cls(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function MotionSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={group}
      className={cls("relative overflow-hidden", className)}
    >
      {children}
    </motion.section>
  );
}

function Background({ image = images.background }: { image?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Image
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-28"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(139,0,0,0.58),transparent_32%),radial-gradient(circle_at_88%_12%,rgba(237,184,11,0.2),transparent_35%),linear-gradient(90deg,rgba(5,0,0,0.98),rgba(5,0,0,0.78)_48%,rgba(5,0,0,0.94))]" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(rgba(255,255,255,0.34)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.34)_1px,transparent_1px)] [background-size:78px_78px]" />
    </div>
  );
}

function Eyebrow({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <motion.p
      variants={reveal}
      className={cls(
        "text-[0.62rem] font-black uppercase tracking-[0.38em] sm:text-[0.66rem]",
        dark ? "text-[#8B0000]" : "text-[#EDB80B]",
      )}
    >
      {children}
    </motion.p>
  );
}

function Headline({
  children,
  compact = false,
  dark = false,
  className,
}: {
  children: string;
  compact?: boolean;
  dark?: boolean;
  className?: string;
}) {
  return (
    <motion.h2
      variants={reveal}
      transition={{ duration: 0.62, ease }}
      className={cls(
        "mt-4 max-w-[62rem] font-black tracking-[-0.064em]",
        compact
          ? "text-[clamp(2rem,3.6vw,4.05rem)] leading-[0.96]"
          : "text-[clamp(2.35rem,4.8vw,5.25rem)] leading-[0.92]",
        dark ? "text-black" : "text-white",
        className,
      )}
    >
      {children}
    </motion.h2>
  );
}

function Text({ children, dark = false, className }: { children: string; dark?: boolean; className?: string }) {
  return (
    <motion.p
      variants={reveal}
      className={cls(
        "mt-5 max-w-[44rem] text-sm font-semibold leading-7 sm:text-base lg:text-[1.05rem] lg:leading-8",
        dark ? "text-black/65" : "text-white/66",
        className,
      )}
    >
      {children}
    </motion.p>
  );
}

export default function ServicesPage({ lang }: { lang: Locale | string }) {
  const safeLang = getSafeLang(lang);
  const t = copy[safeLang];

  return (
    <div dir={t.dir} lang={safeLang} className="overflow-x-clip bg-[#050000] text-white">
      <Hero t={t} safeLang={safeLang} />
      <ProofScene t={t} />
      <MissionControl t={t} />
      <VisualServices t={t} />
      <Packs t={t} safeLang={safeLang} />
      <FamilySection t={t} />
      <FinalCta t={t} safeLang={safeLang} />
    </div>
  );
}

function Hero({ t, safeLang }: { t: Copy; safeLang: Locale }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden px-4 pb-8 pt-24 sm:px-7 lg:px-10 lg:pt-28">
      <Background image={images.background} />

      <div className="relative mx-auto grid min-h-[calc(100svh-7.5rem)] max-w-[96rem] items-center gap-8 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div initial="hidden" animate="visible" variants={group}>
          <Eyebrow>{t.hero.eyebrow}</Eyebrow>
          <motion.h1
            variants={reveal}
            transition={{ duration: 0.72, ease }}
            className="mt-5 max-w-[46rem] text-[clamp(2.25rem,12vw,5.75rem)] font-black leading-[0.92] tracking-[-0.055em] lg:leading-[0.9] lg:tracking-[-0.072em]"
          >
            {t.hero.title}
          </motion.h1>
          <Text className="max-w-[42rem]">{t.hero.text}</Text>

          <motion.div variants={reveal} className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/${safeLang}/contact`}
              className="rounded-full bg-[#EDB80B] px-6 py-3.5 text-sm font-black text-black shadow-[0_18px_58px_rgba(237,184,11,0.22)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_74px_rgba(237,184,11,0.34)] sm:px-7"
            >
              {t.hero.primary}
            </Link>
            <a
              href="#system"
              className="rounded-full border border-white/16 bg-white/10 px-6 py-3.5 text-sm font-black text-white backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/15 sm:px-7"
            >
              {t.hero.secondary}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.975 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease, delay: 0.08 }}
          className="relative mx-auto w-full max-w-[53rem]"
        >
          <div className="absolute -inset-4 rounded-[2.7rem] bg-[linear-gradient(135deg,rgba(237,184,11,0.22),rgba(255,255,255,0.05),rgba(139,0,0,0.38))] blur-[1px]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/14 bg-[#2a2117]/72 p-3 shadow-[0_32px_95px_rgba(0,0,0,0.44)] backdrop-blur-2xl sm:p-4">
            <div className="relative h-[21rem] overflow-hidden rounded-[1.45rem] border border-black/35 sm:h-[28rem] lg:h-[31rem] xl:h-[33rem]">
              <Image
                src={images.hero}
                alt={t.hero.visualAlt}
                fill
                priority
                sizes="(min-width:1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.72))]" />
              {!reduceMotion ? (
                <motion.div
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-transparent via-white/18 to-transparent"
                  animate={{ x: ["-140%", "430%"] }}
                  transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
                />
              ) : null}
              <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/44 px-4 py-2.5 text-[0.58rem] font-black uppercase tracking-[0.3em] text-white/86 backdrop-blur-2xl sm:left-5 sm:top-5 sm:px-5 sm:py-3">
                {t.hero.visualKicker}
              </div>
              <motion.div
                className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-[#EDB80B]/55 bg-[#EDB80B]/20 text-[#EDB80B] backdrop-blur-2xl sm:right-5 sm:top-5 sm:h-12 sm:w-12"
                animate={reduceMotion ? undefined : { scale: [1, 1.08, 1] }}
                transition={reduceMotion ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                ▶
              </motion.div>
              <div className="absolute bottom-3 left-3 right-3 rounded-[1.25rem] border border-white/10 bg-black/72 p-4 shadow-[0_20px_70px_rgba(0,0,0,0.42)] backdrop-blur-2xl sm:bottom-4 sm:left-4 sm:right-4 sm:p-6">
                <p className="text-[0.58rem] font-black uppercase tracking-[0.34em] text-[#EDB80B]">
                  Yalla China
                </p>
                <h2 className="mt-3 text-[clamp(1.35rem,2.05vw,2.25rem)] font-black leading-[1.02] tracking-[-0.052em]">
                  {t.hero.visualTitle}
                </h2>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#050000]" />
    </section>
  );
}

function ProofScene({ t }: { t: Copy }) {
  return (
    <MotionSection className="px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_12%,rgba(139,0,0,0.34),transparent_32%),radial-gradient(circle_at_86%_18%,rgba(237,184,11,0.13),transparent_33%),linear-gradient(180deg,#050000,#080100)]" />
      <div className="relative mx-auto grid max-w-[96rem] items-center gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <Eyebrow>{t.proof.eyebrow}</Eyebrow>
          <Headline compact>{t.proof.title}</Headline>
          <Text>{t.proof.text}</Text>
          <motion.div variants={group} className="mt-7 flex flex-wrap gap-3">
            {t.proof.points.map((point) => (
              <motion.span
                variants={reveal}
                key={point}
                className="rounded-full border border-white/12 bg-white/[0.065] px-5 py-3 text-[0.66rem] font-black uppercase tracking-[0.17em] text-white/65 backdrop-blur-2xl"
              >
                {point}
              </motion.span>
            ))}
          </motion.div>
        </div>
        <motion.div
          variants={reveal}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.32, ease }}
          className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.06] p-3 shadow-[0_28px_90px_rgba(0,0,0,0.36)] backdrop-blur-2xl"
        >
          <div className="relative h-[22rem] overflow-hidden rounded-[1.5rem] sm:h-[28rem] lg:h-[30rem]">
            <Image
              src={images.mission}
              alt={t.proof.visualAlt}
              fill
              sizes="(min-width:1024px) 56vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.30))]" />
          </div>
        </motion.div>
      </div>
    </MotionSection>
  );
}

function MissionControl({ t }: { t: Copy }) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const stage = t.system.stages[active] || t.system.stages[0];
  const progress = ((active + 1) / t.system.stages.length) * 100;
  const stageMotion = reduceMotion
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: { duration: 0.12 },
      }
    : {
        initial: { opacity: 0, y: 16, filter: "blur(6px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
        exit: { opacity: 0, y: -12, filter: "blur(6px)" },
        transition: { duration: 0.38, ease },
      };

  useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % t.system.stages.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, [reduceMotion, t.system.stages.length]);

  return (
    <section id="system" className="relative overflow-hidden px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
      <div className="absolute inset-0 bg-[#050000]" />
      <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(rgba(255,255,255,0.36)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.36)_1px,transparent_1px)] [background-size:74px_74px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(139,0,0,0.35),transparent_35%),radial-gradient(circle_at_80%_22%,rgba(237,184,11,0.12),transparent_32%)]" />

      <div className="relative mx-auto grid max-w-[96rem] gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.24 }}
          variants={group}
          className="lg:sticky lg:top-28"
        >
          <Eyebrow>{t.system.eyebrow}</Eyebrow>
          <Headline compact>{t.system.title}</Headline>
          <Text>{t.system.text}</Text>

          <motion.article
            layout={!reduceMotion}
            variants={reveal}
            className="mt-7 overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-5 backdrop-blur-2xl sm:p-6"
          >
            <div className="relative h-1 overflow-hidden rounded-full bg-white/8">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-[#EDB80B]"
                animate={{ width: `${progress}%` }}
                transition={reduceMotion ? { duration: 0.12 } : { duration: 0.45, ease }}
              />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={stage.id}
                initial={stageMotion.initial}
                animate={stageMotion.animate}
                exit={stageMotion.exit}
                transition={stageMotion.transition}
              >
                <div className="mt-6 flex items-center gap-4">
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#EDB80B] text-base font-black text-black shadow-[0_0_34px_rgba(237,184,11,0.22)]">
                    {stage.id}
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-[#EDB80B]/70 to-transparent" />
                </div>
                <p className="mt-6 text-[0.6rem] font-black uppercase tracking-[0.34em] text-[#EDB80B]">
                  {t.system.active} • {stage.label}
                </p>
                <h3 className="mt-3 text-[clamp(1.75rem,2.55vw,2.9rem)] font-black leading-[0.98] tracking-[-0.055em]">
                  {stage.title}
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-white/62 sm:text-base sm:leading-8">
                  {stage.short}
                </p>
                <div className="mt-5 rounded-2xl border border-[#EDB80B]/18 bg-[#EDB80B]/8 p-4">
                  <p className="text-[0.58rem] font-black uppercase tracking-[0.26em] text-[#EDB80B]">
                    {t.system.result}
                  </p>
                  <p className="mt-2 text-sm font-black leading-7 text-white/84 sm:text-base">
                    {stage.result}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.article>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={group}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/34 p-4 backdrop-blur-2xl sm:p-5"
        >
          {!reduceMotion ? (
            <motion.div
              aria-hidden
              className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#EDB80B]/8 to-transparent"
              animate={{ x: ["-130%", "320%"] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            />
          ) : null}
          <div className="relative grid gap-3">
            {t.system.stages.map((item, index) => {
              const selected = index === active;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  variants={reveal}
                  onClick={() => setActive(index)}
                  aria-pressed={selected}
                  whileHover={reduceMotion ? undefined : { x: t.dir === "rtl" ? -3 : 3 }}
                  className={cls(
                    "group relative flex w-full items-center gap-4 overflow-hidden rounded-[1.35rem] border p-3.5 text-start transition duration-300 sm:p-4",
                    selected
                      ? "border-[#EDB80B]/85 bg-[#EDB80B]/12 shadow-[0_0_42px_rgba(237,184,11,0.11)]"
                      : "border-white/8 bg-white/[0.035] hover:border-white/18 hover:bg-white/[0.06]",
                  )}
                >
                  {selected ? <motion.span layoutId="active-stage-glow" className="absolute inset-0 bg-[radial-gradient(circle_at_16%_50%,rgba(237,184,11,0.18),transparent_40%)]" /> : null}
                  <span
                    className={cls(
                      "relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-full text-sm font-black transition sm:h-12 sm:w-12",
                      selected ? "bg-[#EDB80B] text-black" : "bg-white/10 text-white/48",
                    )}
                  >
                    {item.id}
                  </span>
                  <span className="relative z-10 min-w-0">
                    <span className="block text-lg font-black leading-tight tracking-[-0.045em] text-white sm:text-xl lg:text-2xl">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-xs font-black text-white/38 sm:text-sm">
                      {item.label}
                    </span>
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function VisualServices({ t }: { t: Copy }) {
  return (
    <MotionSection className="px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
      <Background image={images.documents} />
      <div className="relative mx-auto max-w-[96rem]">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <Eyebrow>{t.cards.eyebrow}</Eyebrow>
            <Headline compact>{t.cards.title}</Headline>
            <Text>{t.cards.text}</Text>
          </div>
          <motion.div variants={group} className="grid gap-4 md:grid-cols-3">
            {t.cards.items.map((item) => (
              <VisualServiceCard key={item.title} item={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </MotionSection>
  );
}

function VisualServiceCard({ item }: { item: VisualCard }) {
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease }}
      className="group relative min-h-[22rem] overflow-hidden rounded-[1.7rem] border border-white/12 bg-white/[0.06] shadow-[0_26px_80px_rgba(0,0,0,0.32)] backdrop-blur-2xl sm:min-h-[24rem] lg:min-h-[25rem]"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        sizes="(min-width:1024px) 26vw, 100vw"
        className="object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.80))]" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-[0.58rem] font-black uppercase tracking-[0.3em] text-[#EDB80B]">
          {item.kicker}
        </p>
        <h3 className="mt-3 text-[clamp(1.35rem,2.05vw,2.05rem)] font-black leading-[1] tracking-[-0.055em]">
          {item.title}
        </h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-white/68">
          {item.text}
        </p>
      </div>
    </motion.article>
  );
}

function Packs({ t, safeLang }: { t: Copy; safeLang: Locale }) {
  return (
    <MotionSection className="px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(139,0,0,0.42),transparent_34%),radial-gradient(circle_at_82%_20%,rgba(237,184,11,0.13),transparent_32%),linear-gradient(180deg,#050000,#080100)]" />
      <div className="relative mx-auto max-w-[96rem]">
        <Eyebrow>{t.packs.eyebrow}</Eyebrow>
        <Headline compact className="max-w-[68rem]">{t.packs.title}</Headline>
        <Text className="max-w-[56rem]">{t.packs.text}</Text>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {t.packs.items.map((pack, index) => (
            <motion.article
              key={pack.label}
              variants={reveal}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.34, ease }}
              className={cls(
                "relative overflow-hidden rounded-[1.9rem] border p-6 sm:p-7",
                index === 1
                  ? "border-[#EDB80B]/24 bg-[#9B0000] shadow-[0_26px_90px_rgba(155,0,0,0.28)]"
                  : "border-white/10 bg-white/[0.055] backdrop-blur-2xl",
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_10%,rgba(237,184,11,0.16),transparent_34%)] opacity-70" />
              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.32em] text-[#EDB80B]">
                      {pack.label}
                    </p>
                    <h3 className="mt-5 text-[clamp(1.8rem,3vw,3.15rem)] font-black leading-[0.98] tracking-[-0.06em]">
                      {pack.title}
                    </h3>
                  </div>
                  <p
                    className={cls(
                      "rounded-full px-5 py-3 text-base font-black shadow-[0_18px_52px_rgba(237,184,11,0.16)] sm:text-lg",
                      index === 1
                        ? "bg-[#EDB80B] text-black"
                        : "border border-[#EDB80B]/24 bg-[#EDB80B]/10 text-[#EDB80B]",
                    )}
                  >
                    {pack.price}
                  </p>
                </div>
                <p className="mt-4 max-w-[42rem] text-sm font-semibold leading-7 text-white/70 sm:text-base sm:leading-8">
                  {pack.text}
                </p>
                <div className="mt-5 rounded-2xl border border-white/12 bg-black/20 px-5 py-4 text-[0.68rem] font-black uppercase tracking-[0.18em] text-white/58">
                  {pack.bestFor}
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {pack.items.map((item) => (
                    <div key={item} className="rounded-full border border-white/12 bg-black/18 px-5 py-3 text-sm font-black text-white/82">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href={`/${safeLang}/contact`} className="rounded-full bg-[#EDB80B] px-6 py-3.5 text-sm font-black text-black transition hover:-translate-y-1">
                    {t.nav.consultation}
                  </Link>
                  <Link href={`/${safeLang}/apply`} className="rounded-full border border-white/18 bg-white/10 px-6 py-3.5 text-sm font-black text-white transition hover:-translate-y-1">
                    {t.nav.apply}
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function FamilySection({ t }: { t: Copy }) {
  return (
    <MotionSection className="px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
      <Background image={images.family} />
      <div className="relative mx-auto grid max-w-[96rem] gap-8 rounded-[2.1rem] bg-[#F3EDE2] p-6 text-black shadow-[0_28px_95px_rgba(0,0,0,0.34)] sm:p-9 lg:grid-cols-[1fr_1.02fr] lg:p-11">
        <div>
          <Eyebrow dark>{t.family.eyebrow}</Eyebrow>
          <Headline compact dark>{t.family.title}</Headline>
          <Text dark>{t.family.text}</Text>
        </div>
        <motion.div variants={group} className="grid gap-5 sm:grid-cols-2">
          <AudienceCard title={t.family.studentTitle} items={t.family.student} light />
          <AudienceCard title={t.family.familyTitle} items={t.family.family} />
        </motion.div>
      </div>
    </MotionSection>
  );
}

function AudienceCard({ title, items, light = false }: { title: string; items: string[]; light?: boolean }) {
  return (
    <motion.div
      variants={reveal}
      whileHover={{ y: -5 }}
      className={cls(
        "rounded-[1.6rem] p-5",
        light ? "border border-black/8 bg-white text-black" : "bg-[#970000] text-white",
      )}
    >
      <h3 className={cls("text-2xl font-black tracking-[-0.045em]", light ? "text-[#7A0000]" : "text-white")}>
        {title}
      </h3>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <div
            key={item}
            className={cls(
              "rounded-2xl px-5 py-3.5 text-sm font-black",
              light ? "border border-black/10 bg-black/[0.035] text-black/72" : "border border-white/12 bg-white/10 text-white/88",
            )}
          >
            {item}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function FinalCta({ t, safeLang }: { t: Copy; safeLang: Locale }) {
  return (
    <MotionSection className="px-4 py-14 sm:px-7 lg:px-10 lg:py-20">
      <Background image={images.arrival} />
      <motion.div
        variants={reveal}
        className="relative mx-auto max-w-[76rem] rounded-[2.1rem] border border-white/10 bg-black/56 p-7 text-center shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-10 lg:p-11"
      >
        <Eyebrow>{t.final.eyebrow}</Eyebrow>
        <Headline compact className="mx-auto">{t.final.title}</Headline>
        <Text className="mx-auto max-w-[52rem]">{t.final.text}</Text>
        <motion.div variants={reveal} className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href={`/${safeLang}/contact`} className="rounded-full bg-[#EDB80B] px-7 py-3.5 text-sm font-black text-black transition hover:-translate-y-1">
            {t.nav.consultation}
          </Link>
          <Link href={`/${safeLang}/apply`} className="rounded-full border border-white/18 bg-white/10 px-7 py-3.5 text-sm font-black text-white transition hover:-translate-y-1">
            {t.nav.apply}
          </Link>
        </motion.div>
      </motion.div>
    </MotionSection>
  );
}
