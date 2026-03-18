import Container from "@/components/Container";

type Locale = "fr" | "en" | "ar";

type Copy = {
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: string;
  description: string;
  metrics: { value: string; label: string }[];
  cards: { title: string; desc: string }[];
  highlightEyebrow: string;
  highlightTitle: string;
  highlightText: string;
  highlightItems: string[];
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    eyebrow: "Ce que vous gagnez dès le premier échange",
    title: "Le projet devient plus concret avant même la candidature.",
    description:
      "Une bonne première orientation ne donne pas seulement une réponse. Elle donne une lecture plus claire du projet, un meilleur ordre des étapes et une suite plus rassurante pour l'étudiant comme pour la famille.",
    metrics: [
      { value: "1 direction plus claire", label: "sur le niveau, la voie et le type d'université" },
      { value: "1 dossier mieux cadré", label: "sur les documents à préparer en priorité" },
      { value: "1 famille plus rassurée", label: "sur la logique du projet et les étapes qui suivent" },
    ],
    cards: [
      {
        title: "Vous savez quoi faire ensuite",
        desc: "Le prochain pas devient plus simple quand les étapes ne sont plus mélangées dans votre tête.",
      },
      {
        title: "Vous évitez de commencer dans le mauvais ordre",
        desc: "Une première orientation aide à prioriser les bonnes décisions au lieu de perdre du temps sur des détails secondaires.",
      },
      {
        title: "La famille comprend mieux le parcours",
        desc: "Le projet paraît plus sérieux quand les parents voient la route, le rythme et les vrais points de contrôle.",
      },
      {
        title: "La candidature devient plus crédible",
        desc: "Quand la logique est claire avant de commencer, le dossier a plus de cohérence et moins d'improvisation.",
      },
    ],
    highlightEyebrow: "Ce que les visiteurs veulent sentir avant de faire confiance",
    highlightTitle: "Un projet lisible, un contact clair, et une vraie logique jusqu'au visa.",
    highlightText:
      "C'est cette combinaison qui change la perception: vous ne donnez plus seulement une promesse, vous donnez une méthode que l'étudiant et la famille peuvent déjà comprendre.",
    highlightItems: [
      "WhatsApp visible et simple dès le départ",
      "Une réponse claire sur la prochaine étape",
      "Des parents mieux rassurés sur la suite",
      "Une candidature qui commence avec plus de sens",
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "What you gain from the first exchange",
    title: "The project feels more concrete before the application even begins.",
    description:
      "A good first orientation is not only an answer. It gives a clearer reading of the project, a better order of the stages, and a next step that feels more reassuring for both students and families.",
    metrics: [
      { value: "1 clearer direction", label: "for the level, path, and type of university" },
      { value: "1 better framed file", label: "for the documents that matter first" },
      { value: "1 more reassured family", label: "for the logic and timing of the project" },
    ],
    cards: [
      {
        title: "You know what to do next",
        desc: "The next move becomes easier when the stages are no longer mixed together in your mind.",
      },
      {
        title: "You avoid starting in the wrong order",
        desc: "A first orientation helps you prioritize the right decisions instead of losing time on secondary details.",
      },
      {
        title: "The family understands the route better",
        desc: "The project feels more serious when parents can see the path, the rhythm, and the real checkpoints.",
      },
      {
        title: "The application becomes more credible",
        desc: "When the logic is clear before the start, the file feels stronger and less improvised.",
      },
    ],
    highlightEyebrow: "What visitors want to feel before they trust",
    highlightTitle: "A readable project, clear contact, and one visible logic through the visa stage.",
    highlightText:
      "That combination changes the perception of the business: it stops sounding like a promise and starts feeling like a method students and families can already understand.",
    highlightItems: [
      "WhatsApp visible and simple from the start",
      "A clear answer on the next step",
      "Parents who feel more reassured about the route",
      "An application that starts with more purpose",
    ],
  },
  ar: {
    dir: "rtl",
    eyebrow: "ما الذي تكسبه من أول تواصل",
    title: "المشروع يصبح أكثر وضوحاً حتى قبل بدء التقديم.",
    description:
      "التوجيه الأولي الجيد لا يعطيك جواباً فقط، بل يمنحك فهماً أوضح للمشروع، وترتيباً أفضل للمراحل، وخطوة تالية أكثر راحة للطالب والعائلة معاً.",
    metrics: [
      { value: "اتجاه أوضح", label: "للمستوى والمسار ونوع الجامعة" },
      { value: "ملف أكثر ترتيباً", label: "للوثائق التي يجب البدء بها أولاً" },
      { value: "عائلة أكثر اطمئناناً", label: "لمنطق المشروع وتوقيته" },
    ],
    cards: [
      {
        title: "تعرف ما الذي يجب فعله بعد ذلك",
        desc: "الخطوة التالية تصبح أسهل عندما لا تبقى المراحل مختلطة في ذهنك.",
      },
      {
        title: "تتفادى البدء بالترتيب الخاطئ",
        desc: "التوجيه الأولي يساعدك على إعطاء الأولوية للقرارات الصحيحة بدل تضييع الوقت في تفاصيل ثانوية.",
      },
      {
        title: "العائلة تفهم الطريق بشكل أفضل",
        desc: "المشروع يبدو أكثر جدية عندما ترى الأسرة المسار والإيقاع ونقاط التحقق الحقيقية.",
      },
      {
        title: "التقديم يصبح أكثر قوة",
        desc: "عندما تكون الرؤية واضحة قبل البداية، يصبح الملف أكثر انسجاماً وأقل ارتجالاً.",
      },
    ],
    highlightEyebrow: "ما الذي يريد الزائر أن يشعر به قبل أن يثق",
    highlightTitle: "مشروع واضح، وتواصل مباشر، ومنطق مفهوم حتى مرحلة التأشيرة.",
    highlightText:
      "هذا هو الفرق الذي يغيّر الانطباع: لا تبقى مجرد وعود جميلة، بل يصبح لديك منهج يستطيع الطالب والعائلة فهمه من أول تواصل.",
    highlightItems: [
      "واتساب واضح وسهل من البداية",
      "جواب مباشر حول الخطوة التالية",
      "عائلة أكثر راحة تجاه المسار",
      "تقديم يبدأ بمنطق أوضح وأقوى",
    ],
  },
};

export default function HomeProofSection({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";

  return (
    <section className="bg-[#f2e7da] py-14 text-zinc-900 sm:py-18" dir={t.dir}>
      <Container>
        <div className="rounded-[2.5rem] border border-zinc-200 bg-white p-8 shadow-[0_28px_70px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className={isArabic ? "text-right" : ""}>
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#8B0000]">
                {t.eyebrow}
              </p>
              <h2 className="display-title mt-4 text-3xl font-black leading-tight sm:text-4xl">
                {t.title}
              </h2>
              <p className="mt-4 text-sm leading-8 text-zinc-600 sm:text-base">
                {t.description}
              </p>

              <div className="mt-6 grid gap-3">
                {t.metrics.map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-[1.7rem] border border-zinc-200 bg-zinc-50 px-5 py-4 ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <p className="text-sm font-semibold text-zinc-900">{item.value}</p>
                    <p className="mt-1 text-sm leading-6 text-zinc-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.cards.map((card) => (
                <article
                  key={card.title}
                  className={`rounded-[1.9rem] border border-zinc-200 bg-[#faf7f3] p-6 shadow-[0_18px_40px_rgba(15,23,42,0.05)] ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <div
                    className={`mb-4 h-1.5 w-16 rounded-full bg-[#8B0000] ${
                      isArabic ? "ml-auto" : ""
                    }`}
                  />
                  <h3 className="text-lg font-bold text-zinc-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600">
                    {card.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[2.2rem] bg-[#100203] p-6 text-white shadow-[0_30px_70px_rgba(0,0,0,0.16)] sm:p-7">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(237,184,11,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(139,0,0,0.3),transparent_32%)]" />
            <div className="absolute inset-0 opacity-15 shoji-grid" />

            <div className="relative grid gap-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
              <div className={isArabic ? "text-right" : ""}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
                  {t.highlightEyebrow}
                </p>
                <h3 className="display-title mt-3 text-2xl font-black leading-tight text-white sm:text-3xl">
                  {t.highlightTitle}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/74">
                  {t.highlightText}
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {t.highlightItems.map((item) => (
                  <div
                    key={item}
                    className={`rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-white/84 ${
                      isArabic ? "text-right" : ""
                    }`}
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
  );
}
