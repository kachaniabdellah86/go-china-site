"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";
import { founderName, Locale, packageFacts } from "@/lib/yalla";

type TrustItem = {
  value: string;
  label: string;
  description: string;
};

type Copy = {
  dir: "ltr" | "rtl";
  title: string;
  subtitle: string;
  items: TrustItem[];
  commitmentsTitle: string;
  commitments: string[];
  cta: string;
};

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    title: "Des signaux de confiance basés sur l'offre réelle",
    subtitle:
      "Plutôt que d'inventer des chiffres spectaculaires, Yalla China montre ce qui compte vraiment pour prendre une décision sérieuse.",
    items: [
      {
        value: packageFacts.packagesCount,
        label: "Packs lisibles",
        description: "Une lecture claire entre dossier/visa et accompagnement jusqu'à l'arrivée.",
      },
      {
        value: packageFacts.citiesCount,
        label: "Villes suivies",
        description: "Des destinations citées clairement pour orienter les familles.",
      },
      {
        value: packageFacts.commitmentsCount,
        label: "Engagements visibles",
        description: "Admission, visa et qualité de service au cœur du discours.",
      },
      {
        value: "1",
        label: "Histoire fondatrice",
        description: `${founderName} a étudié en Chine et donne une crédibilité terrain à la marque.`,
      },
    ],
    commitmentsTitle: "Ce que la famille doit sentir dès l'accueil du site",
    commitments: [
      "La consultation gratuite sert à clarifier avant de vendre.",
      "Le choix entre Pack 1 et Pack 2 se comprend en quelques secondes.",
      "La communication, le voyage et l'arrivée sont traités comme des sujets sérieux.",
    ],
    cta: "Voir les services",
  },
  en: {
    dir: "ltr",
    title: "Trust signals grounded in the real offer",
    subtitle:
      "Instead of inflated marketing numbers, Yalla China highlights the signals that actually help a family make a serious decision.",
    items: [
      {
        value: packageFacts.packagesCount,
        label: "Clear packages",
        description: "A readable difference between file/visa support and full arrival accompaniment.",
      },
      {
        value: packageFacts.citiesCount,
        label: "Cities covered",
        description: "Destinations named clearly so families can project the journey.",
      },
      {
        value: packageFacts.commitmentsCount,
        label: "Visible commitments",
        description: "Admission, visa, and service quality carried in the core message.",
      },
      {
        value: "1",
        label: "Founder story",
        description: `${founderName} studied in China and gives the brand real on-the-ground credibility.`,
      },
    ],
    commitmentsTitle: "What a family should feel from the first screen",
    commitments: [
      "The free consultation exists to clarify before selling.",
      "The difference between Package 1 and Package 2 is understandable in seconds.",
      "Communication, travel, and arrival are treated as serious parts of the service.",
    ],
    cta: "View services",
  },
  ar: {
    dir: "rtl",
    title: "إشارات ثقة مبنية على العرض الحقيقي",
    subtitle:
      "بدلاً من أرقام تسويقية مبالغ فيها، يوضح يلا تشاينا ما يساعد العائلة فعلاً على اتخاذ قرار جدي.",
    items: [
      {
        value: packageFacts.packagesCount,
        label: "باقات واضحة",
        description: "فرق مفهوم بين مواكبة الملف والتأشيرة وبين المرافقة الكاملة حتى الوصول.",
      },
      {
        value: packageFacts.citiesCount,
        label: "مدن متابعة",
        description: "الوجهات مذكورة بوضوح حتى ترى العائلة المسار بشكل عملي.",
      },
      {
        value: packageFacts.commitmentsCount,
        label: "التزامات ظاهرة",
        description: "القبول والتأشيرة وجودة الخدمة تظهر داخل الرسالة الأساسية.",
      },
      {
        value: "1",
        label: "قصة المؤسسة",
        description: `${founderName} درس في الصين وهذا يمنح العلامة مصداقية ميدانية حقيقية.`,
      },
    ],
    commitmentsTitle: "ما الذي يجب أن تشعر به العائلة من أول شاشة",
    commitments: [
      "الاستشارة المجانية موجودة للتوضيح قبل البيع.",
      "الفرق بين الباقة 1 والباقة 2 يُفهم بسرعة.",
      "التواصل والسفر والوصول يتم التعامل معها كجزء جدي من الخدمة.",
    ],
    cta: "شاهد الخدمات",
  },
};

function AnimatedCounter({ target }: { target: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const numericPart = parseInt(target.replace(/\D/g, ""), 10);
  const suffix = target.replace(/[\d]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1400;
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
  }, [hasAnimated, numericPart]);

  return (
    <div ref={ref} className="inline-flex items-baseline gap-0.5" dir="ltr">
      <span className="text-4xl font-black text-[#B17F02] sm:text-5xl">
        {count}
      </span>
      {suffix ? (
        <span className="text-2xl font-bold text-[#B17F02]/80">{suffix}</span>
      ) : null}
    </div>
  );
}

export default function TrustIndicators({ lang }: { lang: Locale }) {
  const t = copy[lang];
  const isArabic = t.dir === "rtl";

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-[#faf8f5] py-16 text-zinc-900 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_38%,rgba(119,3,4,0.03),transparent_50%),radial-gradient(circle_at_82%_48%,rgba(177,127,2,0.05),transparent_50%)]" />

      <Container>
        <div className="relative space-y-10">
          <div className={`mx-auto max-w-3xl ${isArabic ? "text-right" : "text-center"}`}>
            <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#770304]">
              {lang === "fr"
                ? "Cadre de confiance"
                : lang === "en"
                  ? "Trust framework"
                  : "إطار الثقة"}
            </p>
            <h2 className="display-title mt-4 text-3xl font-black sm:text-4xl">
              {t.title}
            </h2>
            <p className="mt-4 text-base leading-8 text-zinc-600">{t.subtitle}</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.items.map((item, index) => (
              <article
                key={item.label}
                className={`group relative overflow-hidden rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#B17F02]/30 hover:shadow-xl ${
                  isArabic ? "text-right" : "text-center"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#770304]/5 to-[#B17F02]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className={`mb-4 ${isArabic ? "" : "flex justify-center"}`}>
                    <AnimatedCounter target={item.value} />
                  </div>
                  <h3 className="text-base font-bold text-zinc-900 sm:text-lg">
                    {item.label}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-500">{item.description}</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#770304] to-[#B17F02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </article>
            ))}
          </div>

          <div
            className={`overflow-hidden rounded-[2.2rem] border border-[#B17F02]/20 bg-gradient-to-r from-[#B17F02]/8 via-white to-[#B17F02]/5 p-6 sm:p-8 ${
              isArabic ? "text-right" : ""
            }`}
          >
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#770304]">
                  {t.commitmentsTitle}
                </p>
                <div className="mt-4 grid gap-3">
                  {t.commitments.map((item) => (
                    <div
                      key={item}
                      className="rounded-[1.4rem] border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`flex ${isArabic ? "justify-start lg:justify-end" : "justify-start"}`}>
                <Link
                  href={`/${lang}/services`}
                  data-track="trust_services_cta"
                  data-track-value={lang}
                  className="inline-flex rounded-full bg-gradient-to-r from-[#B17F02] to-[#C59F41] px-6 py-3 text-sm font-semibold text-black shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  {t.cta}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
