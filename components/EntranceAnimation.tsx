"use client";

import { useState, useEffect } from "react";

type Locale = "fr" | "en" | "ar";

export default function EntranceAnimation({ lang, onEnter }: { lang: Locale; onEnter: () => void }) {
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);
  const isArabic = lang === "ar";

  const content = {
    fr: {
      title: "Votre Avenir Commence en Chine",
      subtitle: "YALLA CHINA vous accompagne de A à Z",
      cta: "Découvrir Nos Services",
      stats: ["200+ Étudiants Envoyés", "98% Réussite Visa", "50+ Universités Partenaires"],
    },
    en: {
      title: "Your Future Starts in China",
      subtitle: "YALLA CHINA guides you from start to finish",
      cta: "Explore Our Services",
      stats: ["200+ Students Sent", "98% Visa Success", "50+ Partner Universities"],
    },
    ar: {
      title: "مستقبلك يبدأ من الصين",
      subtitle: "YALLA CHINA ترافقك من البداية حتى النهاية",
      cta: "اكتشف خدماتنا",
      stats: ["200+ طالب أرسلناهم", "98% نسبة النجاح", "50+ جامعة شريكة"],
    },
  };

  const t = content[lang];

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 100),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1000),
      setTimeout(() => setPhase(4), 1400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    setPhase(5);
    setTimeout(() => {
      setVisible(false);
      onEnter();
    }, 600);
  };

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ease-in-out ${
        phase === 5 ? "opacity-0 translate-y-[-30px]" : "opacity-100 translate-y-0"
      }`}
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a0505] to-[#0a0a0a]" />
      
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(177,127,2,0.15),_transparent_50%)]" />
        <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(119,3,4,0.15),_transparent_50%)]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        
        {/* Logo/Brand */}
        <div
          className={`transition-all duration-700 ${
            phase >= 1 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#B17F02]" />
            <p className="text-sm sm:text-base font-bold text-[#B17F02] tracking-[0.3em] uppercase">
              YALLA CHINA
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#B17F02]" />
          </div>
        </div>

        {/* Main Title */}
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
            phase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <h1
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.title}
          </h1>
        </div>

        {/* Subtitle */}
        <div
          className={`mt-6 text-center transition-all duration-700 ${
            phase >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p
            className="text-lg sm:text-xl md:text-2xl text-white/70 font-light"
            dir={isArabic ? "rtl" : "ltr"}
          >
            {t.subtitle}
          </p>
        </div>

        {/* Stats Row */}
        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 transition-all duration-700 ${
            phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {t.stats.map((stat, i) => (
            <div
              key={i}
              className={`text-center px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm ${
                isArabic ? "text-right" : "text-center"
              }`}
              dir={isArabic ? "rtl" : "ltr"}
            >
              <p className="text-sm sm:text-base font-semibold text-[#B17F02]">{stat}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`mt-12 transition-all duration-700 ${
            phase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <button
            onClick={handleEnter}
            className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-[#B17F02] to-[#C59F41] rounded-full text-black font-semibold text-base sm:text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">{t.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#C59F41] to-[#B17F02] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
}
