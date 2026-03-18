import Link from "next/link";
import Container from "@/components/Container";

type Locale = "fr" | "en" | "ar";

export const guideSlugs = [
  "personal-experience",
  "study-steps",
  "why-china",
  "how-to-study",
] as const;

export type GuideSlug = (typeof guideSlugs)[number];

type GuidePageCopy = {
  dir: "ltr" | "rtl";
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  stats: { label: string; value: string }[];
  highlightsEyebrow: string;
  highlightsTitle: string;
  highlights: string[];
  sections: { title: string; text: string }[];
  faqEyebrow: string;
  faqTitle: string;
  faqItems: { question: string; answer: string }[];
  ctaEyebrow: string;
  ctaTitle: string;
  ctaDescription: string;
  primary: string;
  secondary: string;
};

const copy: Record<Locale, Record<GuideSlug, GuidePageCopy>> = {
  fr: {
    "personal-experience": {
      dir: "ltr",
      badge: "Guide • Expérience réelle",
      title: "Mon expérience personnelle en Chine",
      description:
        "Une expérience vécue aide à comprendre ce qui change vraiment une fois sur place: le rythme, l'autonomie, l'adaptation, la langue et la vie étudiante au quotidien.",
      imageSrc: "/founder-story-1.jpg",
      stats: [
        { label: "Vision réelle", value: "Au-delà du simple dossier" },
        { label: "Adaptation", value: "Langue, rythme et autonomie" },
        { label: "Parents rassurés", value: "Une réalité mieux expliquée" },
      ],
      highlightsEyebrow: "Ce que cette page vous aide à voir",
      highlightsTitle:
        "Le projet devient plus concret quand on comprend la réalité après le départ.",
      highlights: [
        "Ce qui surprend souvent les étudiants après l'arrivée",
        "Pourquoi l'autonomie compte autant dans la réussite",
        "Comment mieux préparer la famille avant le départ",
        "Pourquoi une expérience réelle rend les conseils plus utiles",
      ],
      sections: [
        {
          title: "Avant le départ, tout paraît souvent plus simple qu'en réalité",
          text:
            "Beaucoup d'étudiants imaginent surtout l'admission et le visa. Pourtant, la vraie transition commence après l'arrivée: nouveau rythme, nouvelles habitudes, nouvelles responsabilités et besoin d'adaptation plus rapide.",
        },
        {
          title: "Sur place, l'autonomie change une grande partie de l'expérience",
          text:
            "La vie étudiante demande de savoir s'organiser, communiquer, gérer les démarches du quotidien et continuer à avancer même quand tout n'est pas encore familier. Cette partie mérite d'être expliquée avant le départ.",
        },
        {
          title: "Une expérience vécue donne des réponses plus concrètes",
          text:
            "Quand un étudiant ou une famille pose une question, les réponses sont plus utiles si elles viennent aussi d'une réalité déjà traversée: adaptation, premiers repères, erreurs à éviter et manière de mieux préparer la suite.",
        },
      ],
      faqEyebrow: "Questions fréquentes",
      faqTitle: "Ce que les familles demandent souvent sur la vie en Chine",
      faqItems: [
        {
          question: "L'adaptation est-elle difficile pour un étudiant marocain ?",
          answer:
            "Elle demande une vraie préparation, surtout sur le rythme, l'organisation personnelle et les repères du quotidien. Plus ces points sont expliqués tôt, plus l'étudiant arrive avec confiance.",
        },
        {
          question: "Pourquoi cette expérience compte-t-elle avant de choisir une agence ?",
          answer:
            "Parce qu'elle permet de répondre de manière plus concrète à ce qui attend vraiment l'étudiant après le départ, pas seulement à la partie administrative.",
        },
        {
          question: "Est-ce utile aussi pour rassurer les parents ?",
          answer:
            "Oui. Les familles se sentent plus en confiance quand elles comprennent non seulement le dossier, mais aussi la réalité de la vie étudiante et de l'installation sur place.",
        },
      ],
      ctaEyebrow: "Passer à la suite",
      ctaTitle:
        "Si vous voulez parler de votre propre projet, le plus simple est de commencer par une première orientation.",
      ctaDescription:
        "Nous pouvons partir de votre situation réelle, répondre aux premières questions et vous indiquer la bonne suite avant la candidature.",
      primary: "Recevoir une première orientation",
      secondary: "Postuler maintenant",
    },
    "study-steps": {
      dir: "ltr",
      badge: "Guide • Étapes",
      title: "Les étapes des études en Chine",
      description:
        "Quand l'ordre des étapes est clair, le projet devient plus rassurant pour l'étudiant et plus lisible pour la famille: orientation, dossier, admission, visa puis départ.",
      imageSrc: "/founder-story-2.jpg",
      stats: [
        { label: "Ordre clair", value: "Une étape après l'autre" },
        { label: "Moins d'erreurs", value: "Moins d'improvisation" },
        { label: "Projet lisible", value: "Pour étudiants et parents" },
      ],
      highlightsEyebrow: "Ce que cette page clarifie",
      highlightsTitle:
        "Un bon projet avance mieux quand chacun comprend la prochaine étape.",
      highlights: [
        "Quand commencer par l'orientation",
        "À quel moment préparer les documents",
        "Ce que l'admission change réellement",
        "Pourquoi le visa et le départ doivent être anticipés",
      ],
      sections: [
        {
          title: "L'orientation vient avant la précipitation",
          text:
            "La première étape consiste à comprendre le niveau, l'objectif et le type d'université qui correspondent au profil. Sans cela, le projet commence souvent dans le désordre.",
        },
        {
          title: "Le dossier et l'admission demandent cohérence et méthode",
          text:
            "Une candidature solide ne dépend pas seulement des documents réunis, mais de la logique globale du projet: choix, présentation du profil et préparation des pièces dans le bon ordre.",
        },
        {
          title: "Le visa et le départ ne sont pas des détails de fin",
          text:
            "Après l'admission, le projet continue avec une autre phase importante: comprendre la logique du visa, vérifier les documents et préparer le voyage sans stress inutile.",
        },
      ],
      faqEyebrow: "Questions fréquentes",
      faqTitle: "Les questions les plus fréquentes sur le déroulement",
      faqItems: [
        {
          question: "Faut-il tout préparer d'un coup ?",
          answer:
            "Non. Le projet avance mieux quand chaque étape a sa place: orientation, dossier, admission, visa et préparation au départ.",
        },
        {
          question: "Pourquoi les parents ont-ils besoin de comprendre les étapes ?",
          answer:
            "Parce qu'une famille plus rassurée aide aussi l'étudiant à prendre sa décision avec plus de confiance et moins de pression.",
        },
        {
          question: "Quel est l'intérêt d'un accompagnement ici ?",
          answer:
            "Il sert surtout à garder une logique claire entre toutes les étapes pour éviter les blocages, les oublis et les mauvaises priorités.",
        },
      ],
      ctaEyebrow: "Commencer proprement",
      ctaTitle:
        "Le plus important n'est pas d'aller vite, mais d'avancer dans le bon ordre.",
      ctaDescription:
        "Parlez-nous de votre situation et nous vous aiderons à voir la prochaine étape la plus utile selon votre profil.",
      primary: "Recevoir une première orientation",
      secondary: "Postuler maintenant",
    },
    "why-china": {
      dir: "ltr",
      badge: "Guide • Destination",
      title: "Pourquoi choisir la Chine ?",
      description:
        "Choisir la Chine a du sens quand l'étudiant comprend ce que cette destination peut lui offrir, à quel profil elle convient et comment elle s'inscrit dans un vrai projet d'avenir.",
      imageSrc: "/founder-story-3.jpg",
      stats: [
        { label: "Destination forte", value: "Études, discipline et ouverture" },
        { label: "Projet sérieux", value: "Quand le choix est bien expliqué" },
        { label: "Décision plus claire", value: "Pour l'étudiant et sa famille" },
      ],
      highlightsEyebrow: "Ce que cette page aide à comprendre",
      highlightsTitle:
        "La bonne destination n'est pas seulement attirante, elle doit aussi être cohérente.",
      highlights: [
        "Ce que la Chine peut apporter à un étudiant motivé",
        "Quels profils peuvent y trouver une vraie opportunité",
        "Pourquoi la famille a besoin d'une vision claire du choix",
        "Comment passer d'une idée générale à une décision sérieuse",
      ],
      sections: [
        {
          title: "La Chine peut représenter un vrai levier pour des étudiants ambitieux",
          text:
            "Elle attire des étudiants qui cherchent une expérience internationale, un environnement académique exigeant et un projet qui peut transformer leur vision de l'avenir.",
        },
        {
          title: "Cette destination n'a pas besoin d'être vendue de manière abstraite",
          text:
            "Le vrai travail consiste à relier la destination au profil de l'étudiant: son niveau, sa capacité d'adaptation, son objectif et le type de parcours qu'il souhaite construire.",
        },
        {
          title: "Le choix devient plus fort quand il est compris par la famille",
          text:
            "Quand les parents voient pourquoi la Chine est cohérente pour leur enfant, la décision paraît plus crédible, plus rassurante et plus facile à soutenir.",
        },
      ],
      faqEyebrow: "Questions fréquentes",
      faqTitle: "Les questions fréquentes avant de choisir la Chine",
      faqItems: [
        {
          question: "La Chine convient-elle à tous les profils ?",
          answer:
            "Non. Comme toute destination, elle a plus de sens pour certains profils que pour d'autres. C'est justement pour cela qu'une première orientation est utile.",
        },
        {
          question: "Pourquoi les étudiants hésitent-ils encore ?",
          answer:
            "Souvent parce qu'ils manquent d'informations concrètes sur la vie sur place, les étapes du projet et la manière dont la famille peut être rassurée.",
        },
        {
          question: "Quel est le bon moment pour décider ?",
          answer:
            "Le bon moment arrive quand la destination n'est plus seulement attirante, mais clairement reliée au niveau, à l'objectif et à la réalité de l'étudiant.",
        },
      ],
      ctaEyebrow: "Voir si cette destination vous correspond",
      ctaTitle:
        "Avant de choisir la Chine, le plus utile est de vérifier si elle a du sens pour votre profil.",
      ctaDescription:
        "Nous pouvons vous aider à clarifier cette décision avant de parler du dossier ou du visa.",
      primary: "Recevoir une première orientation",
      secondary: "Postuler maintenant",
    },
    "how-to-study": {
      dir: "ltr",
      badge: "Guide • Démarrage",
      title: "Comment étudier en Chine ?",
      description:
        "Le projet devient plus accessible quand on comprend par où commencer, quelles informations préparer et comment transformer une envie générale en démarche réelle.",
      imageSrc: "/founder-story-4.jpg",
      stats: [
        { label: "Bon départ", value: "Comprendre avant de remplir" },
        { label: "Étapes utiles", value: "Objectif, profil, dossier" },
        { label: "Suite plus simple", value: "Du premier échange au visa" },
      ],
      highlightsEyebrow: "Ce que cette page met au clair",
      highlightsTitle:
        "Étudier en Chine commence par une direction claire, pas par un formulaire compliqué.",
      highlights: [
        "Ce qu'il faut savoir avant toute candidature",
        "Les informations utiles pour orienter le projet",
        "Comment choisir entre demander plus d'infos et candidater",
        "Pourquoi la clarté du départ change toute la suite",
      ],
      sections: [
        {
          title: "Tout commence par le profil de l'étudiant",
          text:
            "Avant les documents et les démarches, il faut clarifier le niveau d'étude, l'objectif, le domaine visé et la réalité du projet. C'est cette base qui donne du sens à tout le reste.",
        },
        {
          title: "Le bon départ évite de perdre du temps ensuite",
          text:
            "Quand l'étudiant sait quelle voie viser et quelles informations préparer d'abord, il évite les hésitations inutiles et avance avec plus de méthode.",
        },
        {
          title: "L'accompagnement sert à transformer l'idée en route claire",
          text:
            "Le rôle du suivi est de rendre les étapes lisibles: orientation, dossier, admission, visa puis départ. Le projet paraît alors plus sérieux et plus simple à assumer.",
        },
      ],
      faqEyebrow: "Questions fréquentes",
      faqTitle: "Ce que les étudiants demandent souvent pour commencer",
      faqItems: [
        {
          question: "Dois-je d'abord poser mes questions ou candidater ?",
          answer:
            "Si le projet n'est pas encore clair, il vaut mieux commencer par une première orientation. La candidature devient plus utile quand la direction est déjà comprise.",
        },
        {
          question: "Quelles informations faut-il préparer d'abord ?",
          answer:
            "Le plus important au départ est de clarifier le niveau d'étude, l'objectif, la ville de départ et les premières questions qui bloquent le projet.",
        },
        {
          question: "Pourquoi commencer simplement est-il si important ?",
          answer:
            "Parce qu'un début trop lourd décourage. Un début clair aide à avancer plus vite et plus proprement vers les vraies démarches.",
        },
      ],
      ctaEyebrow: "Faire le premier pas",
      ctaTitle:
        "Si vous voulez comprendre comment commencer sérieusement, nous pouvons partir de votre situation actuelle.",
      ctaDescription:
        "Écrivez-nous pour une première orientation ou passez directement à la candidature si votre projet est déjà clair.",
      primary: "Recevoir une première orientation",
      secondary: "Postuler maintenant",
    },
  },
  en: {
    "personal-experience": {
      dir: "ltr",
      badge: "Guide • Real experience",
      title: "My personal experience in China",
      description:
        "A lived experience helps students understand what really changes once they arrive: rhythm, independence, adaptation, language, and everyday student life.",
      imageSrc: "/founder-story-1.jpg",
      stats: [
        { label: "Real vision", value: "Beyond the simple application file" },
        { label: "Adaptation", value: "Language, rhythm, and independence" },
        { label: "Parents reassured", value: "A clearer picture of real life" },
      ],
      highlightsEyebrow: "What this page helps you see",
      highlightsTitle:
        "The project feels more concrete when the reality after departure is explained clearly.",
      highlights: [
        "What often surprises students after arrival",
        "Why independence matters so much in success",
        "How families can prepare better before departure",
        "Why lived experience makes guidance more useful",
      ],
      sections: [
        {
          title: "Before departure, the project often feels simpler than it really is",
          text:
            "Many students mainly imagine admission and the visa. The real transition begins after arrival: a new rhythm, new habits, new responsibilities, and a stronger need to adapt quickly.",
        },
        {
          title: "On the ground, independence becomes a big part of the experience",
          text:
            "Student life requires organization, communication, everyday problem solving, and the ability to keep moving even when everything still feels unfamiliar.",
        },
        {
          title: "A lived experience creates more practical answers",
          text:
            "When students and families ask questions, the guidance becomes more useful if it also comes from situations already lived through: adaptation, first steps, common mistakes, and better preparation.",
        },
      ],
      faqEyebrow: "Frequently asked questions",
      faqTitle: "What families often ask about life in China",
      faqItems: [
        {
          question: "Is adaptation difficult for a Moroccan student?",
          answer:
            "It requires real preparation, especially around rhythm, personal organization, and everyday habits. The earlier these points are explained, the more confident the student feels.",
        },
        {
          question: "Why does real experience matter before choosing an agency?",
          answer:
            "Because it helps answer concrete questions about what really waits for the student after departure, not only the administrative part of the project.",
        },
        {
          question: "Does this also help reassure parents?",
          answer:
            "Yes. Families feel more confident when they understand not only the file and the visa, but also the reality of student life and settling in.",
        },
      ],
      ctaEyebrow: "Move to the next step",
      ctaTitle:
        "If you want to talk about your own project, the best next move is a first orientation.",
      ctaDescription:
        "We can start from your real situation, answer the first questions, and show the right next step before the application begins.",
      primary: "Get a first orientation",
      secondary: "Apply now",
    },
    "study-steps": {
      dir: "ltr",
      badge: "Guide • Steps",
      title: "The study path in China",
      description:
        "When the order of the stages is clear, the project feels more reassuring for the student and more readable for the family: orientation, file, admission, visa, then departure.",
      imageSrc: "/founder-story-2.jpg",
      stats: [
        { label: "Clear order", value: "One stage after another" },
        { label: "Fewer mistakes", value: "Less improvisation" },
        { label: "Readable project", value: "For students and parents" },
      ],
      highlightsEyebrow: "What this page clarifies",
      highlightsTitle:
        "A project moves better when everyone understands the next stage.",
      highlights: [
        "When orientation should happen first",
        "At what point documents should be prepared",
        "What admission really changes",
        "Why visa and departure must be anticipated",
      ],
      sections: [
        {
          title: "Orientation comes before rushing into paperwork",
          text:
            "The first stage is to understand the study level, the goal, and the type of university that really fits the student. Without that, the project often begins in disorder.",
        },
        {
          title: "The file and admission need coherence and method",
          text:
            "A strong application is not only about collecting papers. It depends on the overall logic of the project: choices, profile presentation, and preparing the right documents in the right order.",
        },
        {
          title: "Visa and departure are not small final details",
          text:
            "After admission, the project enters another important phase: understanding the visa logic, checking the documents, and preparing the trip without unnecessary stress.",
        },
      ],
      faqEyebrow: "Frequently asked questions",
      faqTitle: "The most common questions about the process",
      faqItems: [
        {
          question: "Do I need to prepare everything at once?",
          answer:
            "No. The project moves better when each stage has its place: orientation, file, admission, visa, and departure preparation.",
        },
        {
          question: "Why do parents need to understand the stages too?",
          answer:
            "Because a reassured family also helps the student make decisions with more confidence and less pressure.",
        },
        {
          question: "What is the value of support here?",
          answer:
            "It mainly helps keep one clear logic across all the stages so you avoid confusion, wrong priorities, and unnecessary delays.",
        },
      ],
      ctaEyebrow: "Start properly",
      ctaTitle:
        "The key is not only to move fast, but to move in the right order.",
      ctaDescription:
        "Tell us about your situation and we will help you see the most useful next step for your profile.",
      primary: "Get a first orientation",
      secondary: "Apply now",
    },
    "why-china": {
      dir: "ltr",
      badge: "Guide • Destination",
      title: "Why choose China?",
      description:
        "Choosing China makes sense when students understand what this destination can offer, which profiles it fits best, and how it connects to a serious long-term project.",
      imageSrc: "/founder-story-3.jpg",
      stats: [
        { label: "Strong destination", value: "Studies, discipline, and exposure" },
        { label: "Serious project", value: "When the choice is explained well" },
        { label: "Clearer decision", value: "For students and families" },
      ],
      highlightsEyebrow: "What this page helps you understand",
      highlightsTitle:
        "The right destination should not only look attractive, it should also fit the student.",
      highlights: [
        "What China can offer a motivated student",
        "Which profiles can find a real opportunity there",
        "Why families need a clearer view of the choice",
        "How to move from interest to a serious decision",
      ],
      sections: [
        {
          title: "China can be a real lever for ambitious students",
          text:
            "It attracts students who want an international experience, an academically demanding environment, and a project that can change the way they see their future.",
        },
        {
          title: "This destination should not be sold in vague language",
          text:
            "The real work is to connect the destination to the student profile: level, adaptability, goal, and the type of path the student wants to build.",
        },
        {
          title: "The choice becomes stronger when the family understands it",
          text:
            "When parents can see why China is coherent for their child, the decision feels more credible, more reassuring, and easier to support.",
        },
      ],
      faqEyebrow: "Frequently asked questions",
      faqTitle: "Questions students ask before choosing China",
      faqItems: [
        {
          question: "Is China the right destination for every profile?",
          answer:
            "No. Like any destination, it makes more sense for some profiles than for others. That is exactly why a first orientation is useful.",
        },
        {
          question: "Why do students still hesitate?",
          answer:
            "Often because they lack concrete information about life there, the real stages of the project, and how the family can feel reassured.",
        },
        {
          question: "When is the right moment to decide?",
          answer:
            "The right moment comes when the destination is no longer only attractive, but clearly connected to the student's level, goal, and real situation.",
        },
      ],
      ctaEyebrow: "See whether this destination fits you",
      ctaTitle:
        "Before choosing China, the most useful step is checking whether it truly makes sense for your profile.",
      ctaDescription:
        "We can help you clarify that decision before the file, the admission, or the visa stage.",
      primary: "Get a first orientation",
      secondary: "Apply now",
    },
    "how-to-study": {
      dir: "ltr",
      badge: "Guide • Starting point",
      title: "How do you study in China?",
      description:
        "The project becomes easier when you understand where to begin, what information matters first, and how to turn a general idea into a real study plan.",
      imageSrc: "/founder-story-4.jpg",
      stats: [
        { label: "Better start", value: "Understand before filling forms" },
        { label: "Useful stages", value: "Goal, profile, and file" },
        { label: "Simpler next step", value: "From first contact to visa" },
      ],
      highlightsEyebrow: "What this page makes clearer",
      highlightsTitle:
        "Studying in China starts with a clear direction, not with a heavy form.",
      highlights: [
        "What to know before any application",
        "Which details help orient the project first",
        "How to choose between asking questions and applying",
        "Why a clearer beginning changes the whole route",
      ],
      sections: [
        {
          title: "Everything starts from the student profile",
          text:
            "Before the documents and procedures, the level, the objective, the field, and the real situation of the student need to be clarified. That base gives meaning to everything else.",
        },
        {
          title: "A good beginning saves time later",
          text:
            "When students know which route to target and which information to prepare first, they avoid unnecessary hesitation and move with more method.",
        },
        {
          title: "Support turns the idea into a clear route",
          text:
            "The role of guidance is to make the stages readable: orientation, file, admission, visa, then departure. The project then feels more serious and easier to trust.",
        },
      ],
      faqEyebrow: "Frequently asked questions",
      faqTitle: "What students often ask when they want to begin",
      faqItems: [
        {
          question: "Should I ask questions first or apply directly?",
          answer:
            "If the project is not clear yet, it is better to begin with a first orientation. The application becomes more useful when the direction is already understood.",
        },
        {
          question: "What should I prepare first?",
          answer:
            "At the beginning, the most useful details are the study level, the goal, the city you are starting from, and the first questions blocking the project.",
        },
        {
          question: "Why is a simple beginning so important?",
          answer:
            "Because a heavy start discourages people. A clear start helps you move faster and more cleanly into the real procedures.",
        },
      ],
      ctaEyebrow: "Take the first step",
      ctaTitle:
        "If you want to understand how to begin seriously, we can start from your current situation.",
      ctaDescription:
        "Write to us for a first orientation or move straight to the application if your project is already clear.",
      primary: "Get a first orientation",
      secondary: "Apply now",
    },
  },
  ar: {
    "personal-experience": {
      dir: "rtl",
      badge: "دليل • تجربة حقيقية",
      title: "تجربتي الشخصية في الصين",
      description:
        "التجربة الحقيقية تساعد الطالب على فهم ما الذي يتغير فعلاً بعد الوصول: الإيقاع اليومي، الاستقلالية، التأقلم، اللغة، والحياة الطلابية على أرض الواقع.",
      imageSrc: "/founder-story-1.jpg",
      stats: [
        { label: "رؤية واقعية", value: "أبعد من مجرد ملف التقديم" },
        { label: "التأقلم", value: "لغة وإيقاع واستقلالية" },
        { label: "طمأنينة للعائلة", value: "صورة أوضح عن الواقع" },
      ],
      highlightsEyebrow: "ما الذي تساعدك هذه الصفحة على فهمه",
      highlightsTitle:
        "المشروع يصبح أكثر واقعية عندما نفهم الحياة بعد السفر بشكل واضح.",
      highlights: [
        "ما الذي يفاجئ الطلاب غالباً بعد الوصول",
        "لماذا تعد الاستقلالية جزءاً مهماً من النجاح",
        "كيف تستعد العائلة بشكل أفضل قبل السفر",
        "لماذا تجعل التجربة الحقيقية النصائح أكثر فائدة",
      ],
      sections: [
        {
          title: "قبل السفر يبدو المشروع أحياناً أسهل مما هو عليه في الواقع",
          text:
            "كثير من الطلبة يتخيلون فقط القبول والتأشيرة، لكن الانتقال الحقيقي يبدأ بعد الوصول: إيقاع جديد، عادات جديدة، مسؤوليات يومية، وحاجة أكبر إلى التأقلم بسرعة.",
        },
        {
          title: "على أرض الواقع تصبح الاستقلالية جزءاً أساسياً من التجربة",
          text:
            "الحياة الطلابية تحتاج إلى تنظيم، وقدرة على التواصل، والتعامل مع تفاصيل الحياة اليومية، والاستمرار حتى عندما لا يكون كل شيء مألوفاً بعد.",
        },
        {
          title: "التجربة الواقعية تعطي أجوبة أكثر عملية",
          text:
            "عندما يطرح الطالب أو العائلة سؤالاً، تصبح الإجابة أقوى إذا كانت نابعة أيضاً من مواقف عيشها شخص فعلاً: التأقلم، البداية الأولى، الأخطاء الشائعة، والاستعداد الأفضل.",
        },
      ],
      faqEyebrow: "أسئلة متكررة",
      faqTitle: "ما الذي تسأل عنه العائلات كثيراً حول الحياة في الصين",
      faqItems: [
        {
          question: "هل التأقلم صعب على الطالب المغربي؟",
          answer:
            "هو يحتاج إلى تحضير حقيقي، خصوصاً في الإيقاع اليومي والتنظيم الشخصي والتعامل مع الواقع الجديد. وكلما توضحت هذه النقاط مبكراً، أصبح الطالب أكثر راحة وثقة.",
        },
        {
          question: "لماذا تهم هذه التجربة قبل اختيار الجهة المرافقة؟",
          answer:
            "لأنها تساعد على إعطاء أجوبة أكثر واقعية حول ما ينتظر الطالب بعد السفر، وليس فقط حول الجوانب الإدارية.",
        },
        {
          question: "هل هذا مفيد أيضاً لطمأنة الوالدين؟",
          answer:
            "نعم. ترتاح العائلة أكثر عندما تفهم ليس فقط الملف والتأشيرة، بل أيضاً واقع الحياة الطلابية والاستقرار بعد الوصول.",
        },
      ],
      ctaEyebrow: "الانتقال إلى الخطوة التالية",
      ctaTitle:
        "إذا كنت تريد الحديث عن مشروعك أنت، فأفضل بداية هي توجيه أولي واضح.",
      ctaDescription:
        "ننطلق من وضعك الحقيقي، نجيب عن الأسئلة الأولى، ونوضح لك الخطوة الأنسب قبل الدخول في التقديم.",
      primary: "احصل على توجيه أولي",
      secondary: "قدّم الآن",
    },
    "study-steps": {
      dir: "rtl",
      badge: "دليل • المراحل",
      title: "مراحل الدراسة في الصين",
      description:
        "عندما يكون ترتيب المراحل واضحاً، يصبح المشروع أكثر طمأنينة للطالب وأكثر وضوحاً للعائلة: توجيه، ملف، قبول، تأشيرة، ثم استعداد للسفر.",
      imageSrc: "/founder-story-2.jpg",
      stats: [
        { label: "ترتيب واضح", value: "مرحلة بعد مرحلة" },
        { label: "أخطاء أقل", value: "ارتجال أقل" },
        { label: "مشروع مفهوم", value: "للطلبة والعائلات" },
      ],
      highlightsEyebrow: "ما الذي توضحه هذه الصفحة",
      highlightsTitle:
        "المشروع يتقدم بشكل أفضل عندما يفهم الجميع المرحلة التالية.",
      highlights: [
        "متى يبدأ التوجيه أولاً",
        "في أي وقت يتم تجهيز الوثائق",
        "ما الذي يتغير فعلاً عند القبول",
        "لماذا يجب التفكير في التأشيرة والسفر مبكراً",
      ],
      sections: [
        {
          title: "التوجيه يأتي قبل التسرع نحو الملف",
          text:
            "أول مرحلة هي فهم المستوى الدراسي والهدف ونوع الجامعة التي تناسب الطالب فعلاً. من دون هذه القاعدة يبدأ المشروع غالباً بشكل غير منظم.",
        },
        {
          title: "الملف والقبول يحتاجان إلى منطق وترتيب",
          text:
            "الطلب القوي لا يعتمد فقط على جمع الوثائق، بل على منطق المشروع كله: الاختيارات، طريقة تقديم الملف، وتحضير الوثائق المهمة بالترتيب الصحيح.",
        },
        {
          title: "التأشيرة والسفر ليسا مجرد تفاصيل أخيرة",
          text:
            "بعد القبول يبدأ جزء مهم آخر من المشروع: فهم منطق التأشيرة، التحقق من الوثائق، والاستعداد للسفر من دون ضغط غير ضروري.",
        },
      ],
      faqEyebrow: "أسئلة متكررة",
      faqTitle: "أكثر الأسئلة التي تتكرر حول سير المشروع",
      faqItems: [
        {
          question: "هل يجب تجهيز كل شيء دفعة واحدة؟",
          answer:
            "لا. المشروع يكون أفضل عندما تكون لكل مرحلة مكانها الواضح: توجيه، ملف، قبول، تأشيرة، ثم الاستعداد للسفر.",
        },
        {
          question: "لماذا من المهم أن تفهم العائلة هذه المراحل أيضاً؟",
          answer:
            "لأن العائلة المطمئنة تساعد الطالب بدورها على اتخاذ القرار بثقة أكبر وضغط أقل.",
        },
        {
          question: "ما قيمة المرافقة هنا؟",
          answer:
            "قيمتها الأساسية هي الحفاظ على منطق واضح بين كل المراحل حتى تتفادى الارتباك، وسوء الترتيب، وتعطيل المشروع.",
        },
      ],
      ctaEyebrow: "ابدأ بشكل صحيح",
      ctaTitle:
        "المهم ليس فقط أن تتحرك بسرعة، بل أن تتحرك بالترتيب الصحيح.",
      ctaDescription:
        "تحدث معنا عن وضعك وسنساعدك على فهم المرحلة التالية الأكثر فائدة بالنسبة لملفك.",
      primary: "احصل على توجيه أولي",
      secondary: "قدّم الآن",
    },
    "why-china": {
      dir: "rtl",
      badge: "دليل • الوجهة",
      title: "لماذا تختار الصين؟",
      description:
        "اختيار الصين يصبح قراراً أقوى عندما يفهم الطالب ما الذي يمكن أن تقدمه له هذه الوجهة، وما نوع الملفات التي تناسبها، وكيف تدخل ضمن مشروع جدي للمستقبل.",
      imageSrc: "/founder-story-3.jpg",
      stats: [
        { label: "وجهة قوية", value: "دراسة وانضباط وانفتاح" },
        { label: "مشروع جدي", value: "عندما يكون الاختيار مفهوماً" },
        { label: "قرار أوضح", value: "للطالب وللعائلة" },
      ],
      highlightsEyebrow: "ما الذي تساعدك هذه الصفحة على فهمه",
      highlightsTitle:
        "الوجهة المناسبة ليست فقط جذابة، بل يجب أن تكون أيضاً منسجمة مع الطالب.",
      highlights: [
        "ما الذي يمكن أن تقدمه الصين لطالب طموح",
        "أي نوع من الملفات قد يجد فيها فرصة حقيقية",
        "لماذا تحتاج العائلة إلى فهم أوضح لهذا الاختيار",
        "كيف ننتقل من الاهتمام إلى قرار جدي",
      ],
      sections: [
        {
          title: "قد تكون الصين فرصة حقيقية لطلبة يملكون طموحاً واضحاً",
          text:
            "هي وجهة تجذب طلبة يبحثون عن تجربة دولية، وبيئة دراسية جادة، ومشروع يمكن أن يغير نظرتهم إلى المستقبل.",
        },
        {
          title: "لا يجب أن يتم تقديم هذه الوجهة بكلام عام فقط",
          text:
            "العمل الحقيقي هو ربط الوجهة بملف الطالب: مستواه، قدرته على التأقلم، هدفه، ونوع المسار الذي يريد بناءه.",
        },
        {
          title: "الاختيار يصبح أقوى عندما تفهمه العائلة أيضاً",
          text:
            "عندما ترى الأسرة لماذا تبدو الصين خياراً منطقياً لابنها أو ابنتها، يصبح القرار أكثر مصداقية وراحة وأسهل في الدعم.",
        },
      ],
      faqEyebrow: "أسئلة متكررة",
      faqTitle: "أسئلة شائعة قبل اختيار الصين",
      faqItems: [
        {
          question: "هل الصين مناسبة لكل الطلبة؟",
          answer:
            "لا. مثل أي وجهة، هي أنسب لبعض الملفات أكثر من غيرها. لهذا يكون التوجيه الأولي مفيداً جداً قبل اتخاذ القرار.",
        },
        {
          question: "لماذا ما زال كثير من الطلبة مترددين؟",
          answer:
            "غالباً لأنهم لا يملكون معلومات عملية كافية حول الحياة هناك، ومراحل المشروع، وكيف يمكن للعائلة أن تشعر بالاطمئنان.",
        },
        {
          question: "متى يكون القرار في وقته الصحيح؟",
          answer:
            "عندما لا تبقى الوجهة مجرد فكرة جذابة، بل تصبح مرتبطة بشكل واضح بالمستوى والهدف ووضع الطالب الحقيقي.",
        },
      ],
      ctaEyebrow: "اعرف هل هذه الوجهة تناسبك",
      ctaTitle:
        "قبل اختيار الصين، من الأفضل أن تتأكد أولاً هل هي فعلاً مناسبة لملفك.",
      ctaDescription:
        "يمكننا مساعدتك على توضيح هذا القرار قبل الدخول في الملف أو القبول أو التأشيرة.",
      primary: "احصل على توجيه أولي",
      secondary: "قدّم الآن",
    },
    "how-to-study": {
      dir: "rtl",
      badge: "دليل • البداية",
      title: "كيف تدرس في الصين؟",
      description:
        "المشروع يصبح أسهل عندما تفهم من أين تبدأ، وما المعلومات التي يجب تحضيرها أولاً، وكيف تحول فكرة عامة إلى خطة دراسة حقيقية.",
      imageSrc: "/founder-story-4.jpg",
      stats: [
        { label: "بداية أفضل", value: "افهم قبل أن تملأ الاستمارات" },
        { label: "مراحل مفيدة", value: "هدف وملف ومسار" },
        { label: "خطوة تالية أوضح", value: "من أول تواصل حتى التأشيرة" },
      ],
      highlightsEyebrow: "ما الذي توضحه هذه الصفحة",
      highlightsTitle:
        "الدراسة في الصين تبدأ باتجاه واضح، لا باستمارة طويلة من البداية.",
      highlights: [
        "ما الذي يجب معرفته قبل أي تقديم",
        "ما المعلومات التي تساعد على توجيه المشروع أولاً",
        "كيف تختار بين السؤال أولاً أو التقديم مباشرة",
        "لماذا يغير وضوح البداية شكل الطريق كله",
      ],
      sections: [
        {
          title: "كل شيء يبدأ من ملف الطالب نفسه",
          text:
            "قبل الوثائق والإجراءات، يجب توضيح المستوى الدراسي والهدف والتخصص والوضع الحقيقي للطالب. هذه القاعدة هي التي تعطي معنى لكل ما يأتي بعدها.",
        },
        {
          title: "البداية الجيدة توفر وقتاً وجهداً لاحقاً",
          text:
            "عندما يعرف الطالب أي مسار يناسبه وما المعلومات التي يجب تجهيزها أولاً، تقل الترددات غير الضرورية ويتقدم المشروع بشكل أكثر ترتيباً.",
        },
        {
          title: "المرافقة تحوّل الفكرة إلى طريق واضح",
          text:
            "دور المرافقة هو جعل المراحل مفهومة: توجيه، ملف، قبول، تأشيرة، ثم سفر. عندها يبدو المشروع أكثر جدية وأسهل في الفهم والثقة.",
        },
      ],
      faqEyebrow: "أسئلة متكررة",
      faqTitle: "ما الذي يسأل عنه الطلبة كثيراً عندما يريدون البدء",
      faqItems: [
        {
          question: "هل أطرح الأسئلة أولاً أم أبدأ بالتقديم مباشرة؟",
          answer:
            "إذا لم تكن الصورة واضحة بعد، فمن الأفضل أن تبدأ بتوجيه أولي. يصبح التقديم أكثر فائدة عندما يكون الاتجاه مفهوماً من البداية.",
        },
        {
          question: "ما الذي يجب تحضيره أولاً؟",
          answer:
            "في البداية أهم ما يفيد هو توضيح المستوى الدراسي والهدف والمدينة التي تنطلق منها والأسئلة الأولى التي تعطل المشروع.",
        },
        {
          question: "لماذا تعد البداية البسيطة مهمة جداً؟",
          answer:
            "لأن البداية الثقيلة تربك الطالب وتؤخره. أما البداية الواضحة فتساعده على التقدم بسرعة أكبر نحو الإجراءات الحقيقية.",
        },
      ],
      ctaEyebrow: "خذ الخطوة الأولى",
      ctaTitle:
        "إذا كنت تريد أن تفهم كيف تبدأ بشكل جدي، يمكننا أن ننطلق من وضعك الحالي.",
      ctaDescription:
        "اكتب لنا للحصول على توجيه أولي، أو انتقل مباشرة إلى التقديم إذا كانت الصورة واضحة عندك بالفعل.",
      primary: "احصل على توجيه أولي",
      secondary: "قدّم الآن",
    },
  },
};

export function isGuideSlug(value: string): value is GuideSlug {
  return guideSlugs.includes(value as GuideSlug);
}

export default function GuidePage({
  lang,
  slug,
}: {
  lang: Locale;
  slug: GuideSlug;
}) {
  const t = copy[lang][slug];
  const isArabic = t.dir === "rtl";
  const contactHref = `/${lang}/contact`;
  const applyHref = `/${lang}/apply`;

  return (
    <main className="bg-[#050505] text-white" dir={t.dir}>
      <section className="relative overflow-hidden bg-[#120405]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.72),transparent_28%),radial-gradient(circle_at_top_right,rgba(237,184,11,0.16),transparent_22%),linear-gradient(135deg,#170405_0%,#28080a_42%,#070707_100%)]" />
        <div className="absolute inset-0 opacity-25 shoji-grid" />

        <Container>
          <div className="relative grid gap-8 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:gap-10 lg:py-20">
            <div
              className={`space-y-7 ${
                isArabic ? "text-right" : "text-center lg:text-left"
              }`}
            >
              <p className="section-eyebrow inline-flex rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-white/90 sm:text-sm sm:tracking-[0.22em]">
                {t.badge}
              </p>

              <div className="space-y-4">
                <h1
                  className={`display-title text-[2.7rem] font-black leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl ${
                    isArabic ? "max-w-4xl" : "mx-auto max-w-4xl lg:mx-0"
                  }`}
                >
                  {t.title}
                </h1>
                <p
                  className={`max-w-2xl text-base leading-8 text-white/78 sm:text-lg ${
                    isArabic ? "" : "mx-auto lg:mx-0"
                  }`}
                >
                  {t.description}
                </p>
              </div>

              <div
                className={`grid gap-3 sm:grid-cols-3 ${
                  isArabic ? "" : "mx-auto max-w-xl lg:mx-0 lg:max-w-none"
                }`}
              >
                {t.stats.map((item) => (
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
                  src={t.imageSrc}
                  alt={t.title}
                  className="h-[20rem] w-full object-cover sm:h-[28rem]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f4ede4] py-12 text-zinc-900 sm:py-16">
        <Container>
          <div
            className={`rounded-[2.3rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8 ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
              {t.highlightsEyebrow}
            </p>
            <h2 className="display-title mt-4 text-3xl font-black leading-tight sm:text-4xl">
              {t.highlightsTitle}
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {t.highlights.map((item) => (
                <article
                  key={item}
                  className={`rounded-[1.8rem] border border-zinc-200 bg-[#faf7f3] p-5 shadow-[0_18px_35px_rgba(15,23,42,0.05)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`mb-4 h-1.5 w-16 rounded-full bg-[#EDB80B] ${
                      isArabic ? "ml-auto" : ""
                    }`}
                  />
                  <p className="text-sm font-medium leading-7 text-zinc-700">
                    {item}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#080808] py-12 sm:py-16">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            {t.sections.map((section) => (
              <article
                key={section.title}
                className={`rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-[0_24px_55px_rgba(0,0,0,0.18)] ${
                  isArabic ? "text-right" : ""
                }`}
              >
                <h2 className="display-title text-2xl font-black leading-tight text-white">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-white/72 sm:text-base">
                  {section.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f4ede4] py-12 text-zinc-900 sm:py-16">
        <Container>
          <div
            className={`rounded-[2.3rem] border border-zinc-200 bg-white p-7 shadow-[0_24px_60px_rgba(15,23,42,0.06)] sm:p-8 ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
              {t.faqEyebrow}
            </p>
            <h2 className="display-title mt-4 text-3xl font-black leading-tight sm:text-4xl">
              {t.faqTitle}
            </h2>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {t.faqItems.map((item) => (
                <article
                  key={item.question}
                  className={`rounded-[1.8rem] border border-zinc-200 bg-[#faf7f3] p-6 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <h3 className="text-lg font-bold text-zinc-900">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {item.answer}
                  </p>
                </article>
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
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                  {t.ctaEyebrow}
                </p>
                <h2 className="display-title mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  {t.ctaTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/82">
                  {t.ctaDescription}
                </p>
              </div>

              <div
                className={`flex flex-col gap-3 ${
                  isArabic ? "sm:items-end" : "mx-auto w-full max-w-sm lg:mx-0"
                }`}
              >
                <Link
                  href={contactHref}
                  className="w-full rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black transition hover:-translate-y-0.5 hover:opacity-95 sm:w-auto"
                >
                  {t.primary}
                </Link>
                <Link
                  href={applyHref}
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-center font-medium text-white transition hover:bg-white/15 sm:w-auto"
                >
                  {t.secondary}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
