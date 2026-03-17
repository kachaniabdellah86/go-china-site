import Link from "next/link";
import Container from "./Container";

type Props = {
  lang?: "fr" | "en" | "ar";
};

const content = {
  fr: {
    leadEyebrow: "Contact direct",
    leadTitle: "Un accompagnement clair pour les étudiants et leurs familles.",
    leadText:
      "Nous vous aidons à comprendre les options, préparer le dossier, avancer avec méthode et garder un contact simple jusqu'aux prochaines étapes.",
    primaryCta: "Commencer ma demande",
    whatsappLabel: "WhatsApp",
    stats: [
      { title: "Réponse rapide", text: "Sous 24 à 48 heures" },
      { title: "Accompagnement humain", text: "Étudiants et parents" },
      { title: "Projet structuré", text: "Du choix au visa" },
    ],
    brandTitle: "YALLA CHINA",
    brandText:
      "Une présence claire pour les étudiants qui veulent étudier en Chine avec plus de méthode, plus de confiance et moins d'incertitude.",
    navigationTitle: "Navigation",
    supportTitle: "Ce que nous faisons",
    contactTitle: "Nous écrire",
    services: [
      "Choix d'université",
      "Préparation du dossier",
      "Admission et suivi",
      "Visa étudiant",
    ],
    links: [
      { href: "/fr", label: "Accueil" },
      { href: "/fr/services", label: "Services" },
      { href: "/fr/apply", label: "Postuler" },
      { href: "/fr/contact", label: "Contact" },
    ],
    contactNote: "Le moyen le plus rapide pour démarrer la discussion",
    emailLabel: "Email",
    closing:
      "Pensé pour les étudiants et les familles qui veulent avancer avec clarté.",
    rights: "Tous droits réservés.",
  },
  en: {
    leadEyebrow: "Direct contact",
    leadTitle: "Clear guidance for students and their families.",
    leadText:
      "We help you understand your options, prepare your file, move with a real plan, and stay in simple contact until the next steps are clear.",
    primaryCta: "Start my application",
    whatsappLabel: "WhatsApp",
    stats: [
      { title: "Fast reply", text: "Within 24 to 48 hours" },
      { title: "Human support", text: "For students and parents" },
      { title: "Structured process", text: "From choice to visa" },
    ],
    brandTitle: "YALLA CHINA",
    brandText:
      "A clearer way for students who want to study in China with better structure, more confidence, and less uncertainty.",
    navigationTitle: "Navigation",
    supportTitle: "What we do",
    contactTitle: "Write to us",
    services: [
      "University selection",
      "Application preparation",
      "Admission follow-up",
      "Student visa support",
    ],
    links: [
      { href: "/en", label: "Home" },
      { href: "/en/services", label: "Services" },
      { href: "/en/apply", label: "Apply" },
      { href: "/en/contact", label: "Contact" },
    ],
    contactNote: "The fastest way to start the conversation",
    emailLabel: "Email",
    closing:
      "Built for students and families who want to move forward with clarity.",
    rights: "All rights reserved.",
  },
  ar: {
    leadEyebrow: "تواصل مباشر",
    leadTitle: "مرافقة واضحة للطلبة وعائلاتهم في مشروع الدراسة بالصين.",
    leadText:
      "نساعدك على فهم الخيارات المناسبة، تجهيز الملف بشكل منظم، والتقدم بخطوات واضحة مع تواصل مباشر إلى غاية المراحل القادمة.",
    primaryCta: "ابدأ طلبك الآن",
    whatsappLabel: "واتساب",
    stats: [
      { title: "رد سريع", text: "خلال 24 إلى 48 ساعة" },
      { title: "مرافقة إنسانية", text: "للطلبة والآباء" },
      { title: "مسار منظم", text: "من الاختيار إلى التأشيرة" },
    ],
    brandTitle: "YALLA CHINA",
    brandText:
      "طريقة أوضح للطلبة الذين يريدون الدراسة في الصين بثقة أكبر وتنظيم أفضل وغموض أقل.",
    navigationTitle: "التنقل",
    supportTitle: "ما الذي نساعد فيه",
    contactTitle: "راسلنا",
    services: [
      "اختيار الجامعة",
      "تجهيز ملف التقديم",
      "متابعة القبول",
      "مرافقة تأشيرة الدراسة",
    ],
    links: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/services", label: "الخدمات" },
      { href: "/ar/apply", label: "التقديم" },
      { href: "/ar/contact", label: "تواصل معنا" },
    ],
    contactNote: "أسرع وسيلة لبدء الحديث معنا",
    emailLabel: "البريد الإلكتروني",
    closing: "مصمم للطلبة والعائلات الذين يريدون التقدم بثقة ووضوح.",
    rights: "جميع الحقوق محفوظة.",
  },
} as const;

export default function Footer({ lang = "fr" }: Props) {
  const t = content[lang];
  const isArabic = lang === "ar";

  return (
    <footer className="border-t border-white/10 bg-[#030303] text-white">
      <Container>
        <div className="py-10 sm:py-14">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-white/10 bg-[linear-gradient(135deg,#140405_0%,#1d0608_48%,#090909_100%)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.52),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(237,184,11,0.12),transparent_24%)]" />
            <div className="absolute inset-0 opacity-20 shoji-grid" />

            <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className={isArabic ? "text-right" : ""}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.26em] text-[#EDB80B]">
                  {t.leadEyebrow}
                </p>
                <h2 className="display-title mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                  {t.leadTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                  {t.leadText}
                </p>

                <div
                  className={`mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
                    isArabic ? "sm:justify-end" : ""
                  }`}
                >
                  <Link
                    href={`/${lang}/apply`}
                    className="rounded-full bg-[#EDB80B] px-6 py-3 text-center font-semibold text-black shadow-[0_14px_30px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
                  >
                    {t.primaryCta}
                  </Link>

                  <a
                    href="https://wa.me/212638335452"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-6 py-3 text-center font-medium text-white transition hover:bg-white/[0.12]"
                  >
                    {isArabic ? (
                      <>
                        <span>{t.whatsappLabel}</span>
                        <span className="contact-inline">+212 638-335452</span>
                      </>
                    ) : (
                      <span className="contact-inline">
                        {t.whatsappLabel} +212 638-335452
                      </span>
                    )}
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {t.stats.map((item) => (
                  <article
                    key={item.title}
                    className={`rounded-[1.6rem] border border-white/10 bg-black/20 p-4 backdrop-blur-md ${
                      isArabic ? "text-right" : ""
                    }`}
                  >
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.8fr_0.85fr_0.95fr]">
            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="text-2xl font-black uppercase tracking-tight">
                {t.brandTitle}
                <span className="text-[#EDB80B]">.</span>
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
                {t.brandText}
              </p>
            </section>

            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                {t.navigationTitle}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/78">
                {t.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>

            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                {t.supportTitle}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/78">
                {t.services.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                {t.contactTitle}
              </p>

              <div className="mt-4 space-y-4 text-sm text-white/78">
                <div>
                  <a
                    href="https://wa.me/212638335452"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-inline text-base font-semibold text-white transition hover:text-white/85"
                  >
                    +212 638-335452
                  </a>
                  <p className="mt-2 text-xs text-white/55">{t.contactNote}</p>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-white/55">
                    {t.emailLabel}
                  </p>
                  <a
                    href="mailto:contact@yallachina.com"
                    className="contact-inline transition hover:text-white"
                  >
                    contact@yallachina.com
                  </a>
                </div>
              </div>
            </section>
          </div>

          <div
            className={`mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p>
              © {new Date().getFullYear()} YALLA CHINA. {t.rights}
            </p>
            <p>{t.closing}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
