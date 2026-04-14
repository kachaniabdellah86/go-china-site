import Container from "@/components/Container";
import { ArabicText } from "@/lib/ArabicText";

type Locale = "fr" | "en" | "ar";

type Testimonial = {
  name: string;
  role: string;
  city: string;
  university: string;
  quote: string;
  result: string;
  emoji: string;
};

type Copy = {
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: string;
  description: string;
  items: Testimonial[];
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    eyebrow: "Temoignages Reels",
    title: "Ils nous ont fait confiance, maintenant ils etudient en Chine",
    description:
      "Chaque temoignage raconte un parcours unique: du premier echange jusqu'a l'arrivee sur le campus.",
    items: [
      {
        name: "Youssef B.",
        role: "Etudiant - Shanghai",
        city: "Agadir",
        university: "Universite de Shanghai",
        emoji: "👨‍🎓",
        quote:
          "YALLA CHINA m'a guide a chaque etape. Du choix de l'universite jusqu'a mon arrivee a Shanghai, tout etait clair et organise.",
        result: "Dossier accepte, visa obtenu, arrive en toute confiance.",
      },
      {
        name: "Samira El Idrissi",
        role: "Mere - Fils a Beijing",
        city: "Casablanca",
        university: "Universite de Beijing",
        emoji: "👩",
        quote:
          "En tant que mere, j'avais besoin de comprendre chaque etape. Tout a ete explique avec transparence. Notre fils est maintenant a Beijing.",
        result: "Famille rassuree, fils accepte et installe.",
      },
      {
        name: "Lina M.",
        role: "Etudiante - Beijing",
        city: "Marrakech",
        university: "Universite de Beijing",
        emoji: "👩‍🎓",
        quote:
          "Tout semblait plus serieux et mieux organise. J'ai eu une ligne claire de la consultation jusqu'a mon arrivee.",
        result: "Transition fluide, sentie accompagnee jusqu'au bout.",
      },
      {
        name: "Amine K.",
        role: "Etudiant - Guangzhou",
        city: "Casablanca",
        university: "Universite de Guangzhou",
        emoji: "👨‍🎓",
        quote:
          "Le visa etait ma plus grande inquietude. L'equipe m'a accompagne avec methode et j'ai recu mon visa sans probleme.",
        result: "Visa obtenu, installe avec succes a Guangzhou.",
      },
    ],
  },
  en: {
    dir: "ltr",
    eyebrow: "Real Testimonials",
    title: "They trusted us, now they study in China",
    description:
      "Each testimonial tells a unique journey: from the first conversation to arrival on campus.",
    items: [
      {
        name: "Youssef B.",
        role: "Student - Shanghai",
        city: "Agadir",
        university: "Shanghai University",
        emoji: "👨‍🎓",
        quote:
          "YALLA CHINA guided me at every step. From university choice to my arrival in Shanghai, everything was clear and organized.",
        result: "Application accepted, visa obtained, arrived confidently.",
      },
      {
        name: "Samira El Idrissi",
        role: "Mother - Son in Beijing",
        city: "Casablanca",
        university: "Beijing University",
        emoji: "👩",
        quote:
          "As a mother, I needed to understand every step. Everything was explained transparently. Our son is now in Beijing.",
        result: "Family reassured, son accepted and settled.",
      },
      {
        name: "Lina M.",
        role: "Student - Beijing",
        city: "Marrakech",
        university: "Beijing University",
        emoji: "👩‍🎓",
        quote:
          "Everything felt more serious and better organized. I had a clear path from consultation to arrival.",
        result: "Smooth transition, felt supported until the end.",
      },
      {
        name: "Amine K.",
        role: "Student - Guangzhou",
        city: "Casablanca",
        university: "Guangzhou University",
        emoji: "👨‍🎓",
        quote:
          "The visa was my biggest concern. The team guided me with structure and I received my visa without any issues.",
        result: "Visa obtained, successfully settled in Guangzhou.",
      },
    ],
  },
  ar: {
    dir: "rtl",
    eyebrow: "شهادات حقيقية",
    title: "ائتمنونا والآن يدرسون في الصين",
    description:
      "كل شهادة تروي مسارًا فريدًا: من اول تواصل حتى الوصول الى الحرم الجامعي.",
    items: [
      {
        name: "يوسف ب.",
        role: "طالب - شنغهاي",
        city: "اكادير",
        university: "جامعة شنغهاي",
        emoji: "👨‍🎓",
        quote:
          "YALLA CHINA رافقتني في كل خطوة. من اختيار الجامعة حتى وصولي الى شنغهاي، كان كل شيء واضحًا ومنظمًا.",
        result: "تم القبول، حصلت على التاشيرة، وصلت بكل ثقة.",
      },
      {
        name: "سميرة الادريسي",
        role: "ام - ابنها في بكين",
        city: "الدار البيضاء",
        university: "جامعة بكين",
        emoji: "👩",
        quote:
          "كام، كنت بحاجة لفهم كل مرحلة. تم شرح كل شيء بشفافية. ابننا الآن في بكين.",
        result: "العائلة مطمانة، ابنها مقبول ومستقر.",
      },
      {
        name: "لينا م.",
        role: "طالبة - بكين",
        city: "مراكش",
        university: "جامعة بكين",
        emoji: "👩‍🎓",
        quote:
          "كل شيء بدا اكثر جدية وافضل تنظيمًا. كان لدي مسار واضح من الاستشارة حتى الوصول.",
        result: "انتقال سلس، شعرت انني مدعومة حتى النهاية.",
      },
      {
        name: "امين ك.",
        role: "طالب - قوانغتشو",
        city: "الدار البيضاء",
        university: "جامعة قوانغتشو",
        emoji: "👨‍🎓",
        quote:
          "التاشيرة كانت اكبر قلق لدي. الفريق رافقني بمنهجية وحصلت على التاشيرة من دون اي مشاكل.",
        result: "حصلت على التاشيرة، استقررت بنجاح في قوانغتشو.",
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
        {/* Header */}
        <div className={`text-center max-w-3xl mx-auto mb-12 ${isArabic ? "text-right" : ""}`}>
          <p className="premium-badge premium-badge-gold inline-flex mb-4">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className={isArabic ? "mr-2" : "ml-2"}>{t.eyebrow}</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 mt-4">
            {isArabic ? <ArabicText text={t.title} /> : t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            {isArabic ? <ArabicText text={t.description} /> : t.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {t.items.map((item, index) => (
            <div
              key={item.name}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-zinc-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-6xl text-[#B17F02]/10 font-serif leading-none">
                "
              </div>

              {/* Content */}
              <div className={`relative ${isArabic ? "text-right" : ""}`}>
                {/* Header */}
                <div className={`flex items-start gap-4 mb-6 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="text-4xl">{item.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-zinc-900">{item.name}</h3>
                    <p className="text-sm text-[#770304] font-medium">{item.role}</p>
                    <p className="text-xs text-zinc-500 mt-1">{item.city}</p>
                  </div>
                </div>

                {/* University Badge */}
                <div className={`inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#B17F02]/10 to-[#B17F02]/5 border border-[#B17F02]/20 ${isArabic ? "float-right" : ""}`}>
                  <p className="text-sm font-semibold text-[#B17F02]">{item.university}</p>
                </div>

                <div className="clear-both" />

                {/* Quote */}
                <blockquote className="text-zinc-700 leading-relaxed mb-4">
                  {isArabic ? <ArabicText text={item.quote} /> : item.quote}
                </blockquote>

                {/* Result */}
                <div className="mt-6 pt-6 border-t border-zinc-200">
                  <p className="text-sm font-semibold text-[#770304] mb-1">
                    {lang === "fr" ? "Resultat:" : lang === "en" ? "Result:" : "النتيجة:"}
                  </p>
                  <p className="text-sm text-zinc-600">
                    {isArabic ? <ArabicText text={item.result} /> : item.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
