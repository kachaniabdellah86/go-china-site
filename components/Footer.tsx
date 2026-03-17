import Link from "next/link";
import Container from "./Container";

type Props = {
  lang?: "fr" | "en" | "ar";
};

const content = {
  fr: {
    desc: "YALLA CHINA accompagne les étudiants et leurs familles pour rendre le projet d'études en Chine plus clair, plus rassurant et mieux préparé.",
    ctaEyebrow: "Parlons de votre projet",
    ctaTitle: "Un bon accompagnement commence par une conversation claire.",
    ctaText:
      "Si vous êtes prêt à avancer, nous vous aidons à passer de l'idée au plan concret avec un contact simple, rapide et humain.",
    ctaButton: "Postuler maintenant",
    whatsappLabel: "WhatsApp",
    navTitle: "Navigation",
    servicesTitle: "Accompagnement",
    contactTitle: "Contact direct",
    services: [
      "Orientation académique",
      "Admission universitaire",
      "Visa étudiant",
      "Suivi personnalisé",
    ],
    quickLinks: [
      { href: "/fr", label: "Accueil" },
      { href: "/fr/services", label: "Services" },
      { href: "/fr/apply", label: "Postuler" },
      { href: "/fr/contact", label: "Contact" },
    ],
    highlightCards: [
      { title: "Réponse rapide", text: "Sous 24-48h" },
      { title: "Étudiants & parents", text: "Un suivi rassurant" },
      { title: "Projet structuré", text: "Du dossier au visa" },
    ],
    contactNote: "Le contact le plus rapide pour démarrer",
    emailLabel: "Email",
    closing: "Pensé pour les étudiants et les familles qui veulent avancer avec confiance.",
    rights: "Tous droits réservés.",
  },
  en: {
    desc: "YALLA CHINA supports students and families to make the study project in China clearer, more reassuring, and easier to prepare well.",
    ctaEyebrow: "Let’s talk about your project",
    ctaTitle: "Strong guidance starts with a clear conversation.",
    ctaText:
      "When you are ready to move, we help turn your idea into a concrete plan with fast, simple, and human support.",
    ctaButton: "Apply now",
    whatsappLabel: "WhatsApp",
    navTitle: "Navigation",
    servicesTitle: "Support",
    contactTitle: "Direct contact",
    services: [
      "Academic orientation",
      "University admission",
      "Student visa",
      "Personal follow-up",
    ],
    quickLinks: [
      { href: "/en", label: "Home" },
      { href: "/en/services", label: "Services" },
      { href: "/en/apply", label: "Apply" },
      { href: "/en/contact", label: "Contact" },
    ],
    highlightCards: [
      { title: "Fast response", text: "Within 24-48h" },
      { title: "Students & parents", text: "Reassuring guidance" },
      { title: "Structured project", text: "From file to visa" },
    ],
    contactNote: "The fastest contact to get started",
    emailLabel: "Email",
    closing: "Designed for students and families who want to move forward with confidence.",
    rights: "All rights reserved.",
  },
  ar: {
    desc: "YALLA CHINA ترافق الطلبة وعائلاتهم حتى يصبح مشروع الدراسة في الصين أوضح وأكثر طمأنينة وأسهل في التحضير الجيد.",
    ctaEyebrow: "لنتحدث عن مشروعك",
    ctaTitle: "المرافقة القوية تبدأ بحوار واضح ومباشر.",
    ctaText:
      "عندما تصبح جاهزاً للتقدم، نساعدك على تحويل فكرتك إلى خطة عملية بدعم سريع وبسيط وإنساني.",
    ctaButton: "قدّم الآن",
    whatsappLabel: "واتساب",
    navTitle: "التنقل",
    servicesTitle: "المرافقة",
    contactTitle: "تواصل مباشر",
    services: [
      "التوجيه الأكاديمي",
      "القبول الجامعي",
      "تأشيرة الدراسة",
      "المتابعة الشخصية",
    ],
    quickLinks: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/services", label: "الخدمات" },
      { href: "/ar/apply", label: "التقديم" },
      { href: "/ar/contact", label: "تواصل معنا" },
    ],
    highlightCards: [
      { title: "رد سريع", text: "خلال 24-48 ساعة" },
      { title: "للطلبة والآباء", text: "مرافقة مطمئنة" },
      { title: "مشروع منظم", text: "من الملف إلى التأشيرة" },
    ],
    contactNote: "أسرع وسيلة لبدء الحديث",
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

            <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
              <div className={isArabic ? "text-right" : ""}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.26em] text-[#EDB80B]">
                  {t.ctaEyebrow}
                </p>
                <h2 className="display-title mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl">
                  {t.ctaTitle}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                  {t.ctaText}
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
                    {t.ctaButton}
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
                {t.highlightCards.map((item) => (
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

                <article
                  className={`rounded-[1.9rem] border border-white/10 bg-white/[0.06] p-5 sm:col-span-3 ${
                    isArabic ? "text-right" : ""
                  }`}
                >
                  <p className="section-eyebrow text-xs font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                    {t.contactTitle}
                  </p>
                  <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="contact-inline text-xl font-black text-white" dir="ltr">
                        +212 638-335452
                      </p>
                      <p className="mt-1 text-sm text-white/65">{t.contactNote}</p>
                    </div>
                    <a
                      href="mailto:contact@yallachina.com"
                      className="contact-inline text-sm font-medium text-white/88 transition hover:text-white"
                    >
                      contact@yallachina.com
                    </a>
                  </div>
                </article>
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.75fr_0.95fr_0.95fr]">
            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="text-2xl font-black uppercase tracking-tight">
                YALLA CHINA<span className="text-[#EDB80B]">.</span>
              </p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
                {t.desc}
              </p>
            </section>

            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#EDB80B]">
                {t.navTitle}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-white/78">
                {t.quickLinks.map((item) => (
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
                {t.servicesTitle}
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

              <div className="mt-4 space-y-3 text-sm text-white/78">
                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-inline transition hover:text-white"
                >
                  +212 638-335452
                </a>
                <a
                  href="https://wa.me/212707298029"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-inline transition hover:text-white"
                >
                  +212 707-298029
                </a>
                <div className="pt-2">
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
            <p>© {new Date().getFullYear()} YALLA CHINA. {t.rights}</p>
            <p>{t.closing}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
