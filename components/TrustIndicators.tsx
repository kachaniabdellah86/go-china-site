"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";

type Locale = "fr" | "en" | "ar";

type TrustItem = {
  icon: string;
  value: string;
  label: string;
  description: string;
};

type Copy = {
  dir: "ltr" | "rtl";
  items: TrustItem[];
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    items: [
      { icon: "🎓", value: "50+", label: "Universites partenaires", description: "En Chine" },
      { icon: "✅", value: "98%", label: "Taux de reussite", description: "Visa et admission" },
      { icon: "👨‍🎓", value: "200+", label: "Etudiants envoyes en Chine", description: "Depuis 2020" },
      { icon: "⏱️", value: "48", label: "Heures de reponse max", description: "Reponse sous 24 a 48h garantie" },
    ],
  },
  en: {
    dir: "ltr",
    items: [
      { icon: "🎓", value: "50+", label: "Partner universities", description: "In China" },
      { icon: "✅", value: "98%", label: "Success rate", description: "Visa & admission" },
      { icon: "👨‍🎓", value: "200+", label: "Students sent to China", description: "Since 2020" },
      { icon: "⏱️", value: "48", label: "Hours response max", description: "Reply within 24-48h guaranteed" },
    ],
  },
  ar: {
    dir: "rtl",
    items: [
      { icon: "🎓", value: "50+", label: "جامعة شريكة", description: "في الصين" },
      { icon: "✅", value: "98%", label: "نسبة النجاح", description: "التاشيرة والقبول" },
      { icon: "👨‍🎓", value: "200+", label: "طالب ارسل الى الصين", description: "منذ 2020" },
      { icon: "⏱️", value: "48", label: "ساعة كحد اقصى للرد", description: "رد مضمون خلال 24-48 ساعة" },
    ],
  },
};

function AnimatedCounter({ target }: { target: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const numericPart = parseInt(target.replace(/\D/g, ""), 10);
  const nonNumericPart = target.replace(/[\d]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * numericPart));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(numericPart);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [numericPart, hasAnimated]);

  return (
    <div ref={ref} className="inline-flex items-baseline gap-0.5" dir="ltr">
      <span className="text-4xl font-black text-[#B17F02] sm:text-5xl">
        {count}
      </span>
      <span className="text-2xl font-bold text-[#B17F02]/80">
        {nonNumericPart}
      </span>
    </div>
  );
}

export default function TrustIndicators({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";
  const titles = { fr: "Pourquoi nous faire confiance", en: "Why trust us", ar: "لماذا تثق بنا" };
  const guarantee = {
    fr: "Consultation gratuite • Reponse sous 24-48h • Suivi jusqu'a l'arrivee",
    en: "Free consultation • Response within 24-48h • Follow-up until arrival",
    ar: "استشارة مجانية • رد خلال 48-24 ساعة • متابعة حتى الوصول",
  };
  const guaranteeTitle = {
    fr: "Garantie YALLA CHINA",
    en: "YALLA CHINA Guarantee",
    ar: "ضمان YALLA CHINA",
  };
  const ctaText = { fr: "Nous contacter", en: "Contact us", ar: "اتصل بنا" };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#faf8f5] py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(119,3,4,0.03),transparent_50%),radial-gradient(circle_at_80%_50%,rgba(177,127,2,0.04),transparent_50%)]" />

      <Container>
        <div className="relative">
          <div className={`mb-12 text-center ${isArabic ? "text-right" : ""}`}>
            <p className="premium-badge premium-badge-gold inline-flex mb-4">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className={isArabic ? "mx-2" : "ml-2"}>{titles[lang]}</span>
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.items.map((item, index) => (
              <div
                key={item.label}
                className={`group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#B17F02]/30 animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#770304]/5 to-[#B17F02]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#770304]/10 to-[#B17F02]/10 text-3xl transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>

                  <div className="mb-3">
                    <AnimatedCounter target={item.value} />
                  </div>

                  <h3 className="mb-1 text-base font-bold text-zinc-900 sm:text-lg">
                    {item.label}
                  </h3>

                  <p className="text-sm text-zinc-500">{item.description}</p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#770304] to-[#B17F02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            ))}
          </div>

          <div className={`mt-10 overflow-hidden rounded-[2rem] border border-[#B17F02]/20 bg-gradient-to-r from-[#B17F02]/5 via-white to-[#B17F02]/5 p-6 sm:p-8 ${isArabic ? "text-right" : ""}`}>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#770304] to-[#5a0203] text-white text-2xl shadow-lg">
                  🛡️
                </div>
                <div>
                  <h4 className="text-lg font-bold text-zinc-900 sm:text-xl">
                    {guaranteeTitle[lang]}
                  </h4>
                  <p className="text-sm text-zinc-600 sm:text-base">
                    {guarantee[lang]}
                  </p>
                </div>
              </div>
              <a
                href={`/${lang}/contact`}
                className="shrink-0 rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
              >
                {ctaText[lang]}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
