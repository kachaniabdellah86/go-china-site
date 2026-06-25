import Container from "@/components/Container";
import { Locale } from "@/lib/yalla";

type ProofCard = {
  badge: string;
  title: string;
  text: string;
  footer: string;
};

type Copy = {
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: string;
  description: string;
  items: ProofCard[];
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    eyebrow: "Preuves et réassurance",
    title: "Le site réserve maintenant une vraie place aux preuves qui font monter la confiance.",
    description:
      "Cette section est pensée pour accueillir les témoignages, captures d'écran, réussites admission/visa et preuves d'accompagnement réel dès que les éléments finaux sont fournis.",
    items: [
      {
        badge: "Témoignages",
        title: "Avis étudiants prêts à être intégrés",
        text: "Un espace premium est prévu pour afficher des retours étudiants crédibles, avec nom, ville, programme ou résultat quand ces éléments sont validés.",
        footer: "Placeholder prêt pour texte, photo ou courte vidéo.",
      },
      {
        badge: "Parents",
        title: "Réassurance parent visible",
        text: "Les captures d'écran et retours parentaux pourront être ajoutés ici pour montrer la qualité de communication, la sécurité du suivi et la clarté du parcours.",
        footer: "Prévu pour screenshots WhatsApp ou citations courtes.",
      },
      {
        badge: "Résultats",
        title: "Admissions, visas et arrivées",
        text: "La structure peut accueillir des mini études de cas montrant le profil, la ville choisie, le type d'accompagnement et l'issue obtenue.",
        footer: "Format pensé pour cas réels et résultats vérifiables.",
      },
      {
        badge: "Terrain",
        title: "Accompagnement concret après le départ",
        text: "Une zone dédiée est prête pour prouver le transfert, l'accueil, les premiers repères et l'accompagnement terrain qui distinguent Yalla China.",
        footer: "Idéal pour photos, stories et preuves d'arrivée.",
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "Proof and reassurance",
    title: "The site now gives real space to the proof that increases trust.",
    description:
      "This section is built to receive testimonials, screenshots, admission and visa wins, and real accompaniment proof as soon as the final assets are supplied.",
    items: [
      {
        badge: "Testimonials",
        title: "Student feedback ready to be added",
        text: "A premium block is ready to display credible student feedback, with name, city, program, or outcome whenever those details are approved.",
        footer: "Placeholder ready for text, portrait, or short video.",
      },
      {
        badge: "Parents",
        title: "Visible parent reassurance",
        text: "Screenshots and parent comments can be dropped here to show communication quality, safety, and clarity throughout the route.",
        footer: "Prepared for WhatsApp screenshots or short quotes.",
      },
      {
        badge: "Outcomes",
        title: "Admissions, visas, and arrivals",
        text: "The layout can host mini case studies showing the profile, chosen city, level of support, and the final result achieved.",
        footer: "Designed for real cases and verifiable outcomes.",
      },
      {
        badge: "On the ground",
        title: "Concrete support after departure",
        text: "A dedicated area is ready for transfer, welcome, first landmarks, and the on-ground accompaniment that differentiates Yalla China.",
        footer: "Ideal for photos, story highlights, and arrival proof.",
      },
    ],
  },
  ar: {
    dir: "rtl",
    eyebrow: "الإثبات والطمأنة",
    title: "الموقع أصبح يخصص مساحة حقيقية للأدلة التي ترفع مستوى الثقة.",
    description:
      "هذه الفقرة مهيأة لاستقبال الشهادات ولقطات الشاشة ونجاحات القبول والتأشيرة وأدلة المرافقة الفعلية فور توفير المواد النهائية.",
    items: [
      {
        badge: "شهادات",
        title: "آراء الطلبة جاهزة للإضافة",
        text: "هناك مساحة مصممة بعناية لعرض آراء الطلبة بشكل موثوق، مع الاسم أو المدينة أو البرنامج أو النتيجة عندما تصبح هذه العناصر متاحة.",
        footer: "مكان جاهز للنص أو الصورة أو فيديو قصير.",
      },
      {
        badge: "الوالدان",
        title: "طمأنة الأسرة بشكل واضح",
        text: "يمكن إضافة لقطات الشاشة أو تعليقات الآباء هنا لإبراز جودة التواصل والأمان ووضوح المسار من البداية إلى الوصول.",
        footer: "مهيأ للقطات واتساب أو اقتباسات قصيرة.",
      },
      {
        badge: "النتائج",
        title: "القبول والتأشيرة والوصول",
        text: "الهيكلة جاهزة لاستقبال دراسات حالة صغيرة توضح الملف والمدينة المختارة ومستوى المرافقة والنتيجة النهائية.",
        footer: "مصمم لحالات حقيقية ونتائج قابلة للإثبات.",
      },
      {
        badge: "على الأرض",
        title: "مرافقة عملية بعد السفر",
        text: "هناك مساحة مخصصة لإظهار النقل والاستقبال وأول الخطوات والمرافقة الميدانية التي تميز يلا تشاينا.",
        footer: "مناسب للصور والقصص وأدلة الوصول.",
      },
    ],
  },
};

export default function TestimonialsSection({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";

  return (
    <section className="bg-gradient-to-b from-[#efe2d0] to-[#f5ede0] py-16 sm:py-20" dir={t.dir}>
      <Container>
        <div className={`mx-auto mb-12 max-w-3xl ${isArabic ? "text-right" : "text-center"}`}>
          <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#770304]">
            {t.eyebrow}
          </p>
          <h2 className="display-title mt-4 text-3xl font-black text-zinc-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-zinc-600">{t.description}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {t.items.map((item) => (
            <article
              key={item.title}
              className={`rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <div className="inline-flex rounded-full border border-[#B17F02]/25 bg-[#B17F02]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#770304]">
                {item.badge}
              </div>
              <h3 className="mt-4 text-xl font-bold text-zinc-900">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">{item.text}</p>

              <div className="mt-5 rounded-[1.4rem] border border-dashed border-zinc-200 bg-[#faf7f3] px-4 py-3 text-sm font-medium text-zinc-700">
                {item.footer}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
