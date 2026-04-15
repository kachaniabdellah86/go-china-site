import Link from "next/link";
import BrandLogo from "./BrandLogo";
import Container from "./Container";
import {
  buildWhatsappUrl,
  contactEmail,
  founderName,
  instagramHandle,
  instagramUrl,
  Locale,
  primaryWhatsappNumberDisplay,
  secondaryWhatsappNumberDisplay,
  secondaryWhatsappNumberRaw,
  supportedCities,
} from "@/lib/yalla";

type Props = {
  lang?: Locale;
};

const content = {
  fr: {
    leadEyebrow: "Consultation gratuite",
    leadTitle:
      "Une orientation claire pour les familles qui cherchent une bourse, une bonne université et un accompagnement fiable.",
    leadText:
      "Yalla China guide l'étudiant depuis l'orientation jusqu'à l'arrivée, avec une lecture sérieuse du dossier, du visa, du voyage et des premières démarches sur place.",
    primaryCta: "Parler à un conseiller",
    whatsappLabel: "WhatsApp principal",
    brandText: `${founderName} a étudié en Chine et transforme cette expérience en accompagnement concret pour les étudiants marocains et leurs familles.`,
    navigationTitle: "Navigation",
    coverageTitle: "Villes suivies",
    contactTitle: "Contact direct",
    privacy: "Confidentialité",
    terms: "Conditions",
    rights: "Tous droits réservés.",
    closing:
      "Admission, visa, voyage et arrivée traités comme un seul parcours.",
    links: [
      { href: "/fr", label: "Accueil" },
      { href: "/fr/about", label: "À propos" },
      { href: "/fr/services", label: "Services" },
      { href: "/fr/faq", label: "FAQ" },
      { href: "/fr/apply", label: "Candidature" },
      { href: "/fr/contact", label: "Contact" },
      { href: "/fr/privacy", label: "Confidentialité" },
      { href: "/fr/terms", label: "Conditions" },
    ],
  },
  en: {
    leadEyebrow: "Free consultation",
    leadTitle:
      "Clear guidance for families looking for scholarship options, a strong university, and support they can trust.",
    leadText:
      "Yalla China guides the student from orientation to arrival, with serious support around the file, visa, travel, and the first steps on the ground.",
    primaryCta: "Speak with an advisor",
    whatsappLabel: "Main WhatsApp",
    brandText: `${founderName} studied in China and turns that lived experience into practical guidance for Moroccan students and their families.`,
    navigationTitle: "Navigation",
    coverageTitle: "Cities covered",
    contactTitle: "Direct contact",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    closing:
      "Admission, visa, travel, and arrival handled as one coherent journey.",
    links: [
      { href: "/en", label: "Home" },
      { href: "/en/about", label: "About" },
      { href: "/en/services", label: "Services" },
      { href: "/en/faq", label: "FAQ" },
      { href: "/en/apply", label: "Apply" },
      { href: "/en/contact", label: "Contact" },
      { href: "/en/privacy", label: "Privacy" },
      { href: "/en/terms", label: "Terms" },
    ],
  },
  ar: {
    leadEyebrow: "استشارة مجانية",
    leadTitle:
      "توجيه واضح للعائلات التي تبحث عن منحة أو جامعة جيدة أو مرافقة موثوقة من البداية إلى الوصول.",
    leadText:
      "يلا تشاينا ترافق الطالب من التوجيه إلى الوصول، مع متابعة جدية للملف والتأشيرة والسفر وأول الخطوات داخل الصين.",
    primaryCta: "تحدث مع مستشار",
    whatsappLabel: "واتساب الرئيسي",
    brandText: `${founderName} درس في الصين وحوّل هذه التجربة الشخصية إلى مرافقة عملية للطلبة المغاربة وعائلاتهم.`,
    navigationTitle: "التنقل",
    coverageTitle: "المدن التي نتابعها",
    contactTitle: "تواصل مباشر",
    privacy: "الخصوصية",
    terms: "الشروط",
    rights: "جميع الحقوق محفوظة.",
    closing:
      "القبول والتأشيرة والسفر والوصول يتم التعامل معها كمسار واحد متكامل.",
    links: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/about", label: "من نحن" },
      { href: "/ar/services", label: "الخدمات" },
      { href: "/ar/faq", label: "الأسئلة الشائعة" },
      { href: "/ar/apply", label: "التقديم" },
      { href: "/ar/contact", label: "تواصل معنا" },
      { href: "/ar/privacy", label: "الخصوصية" },
      { href: "/ar/terms", label: "الشروط" },
    ],
  },
} as const;

export default function Footer({ lang = "fr" }: Props) {
  const t = content[lang];
  const isArabic = lang === "ar";
  const homeHref = `/${lang}`;
  const primaryWhatsappHref = buildWhatsappUrl();
  const secondaryWhatsappHref = buildWhatsappUrl(undefined, secondaryWhatsappNumberRaw);

  return (
    <footer className="border-t border-white/10 bg-[#030303] text-white">
      <Container>
        <div className="py-10 sm:py-14">
          <div className="relative overflow-hidden rounded-[2.8rem] border border-white/10 bg-[linear-gradient(135deg,#150405_0%,#1b0507_45%,#090909_100%)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.5),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(237,184,11,0.14),transparent_24%)]" />
            <div className="absolute inset-0 opacity-20 shoji-grid" />

            <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className={isArabic ? "text-right" : ""}>
                <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.24em] text-[#EDB80B]">
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
                  <a
                    href={primaryWhatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    data-track="footer_whatsapp_cta"
                    data-track-value={lang}
                    className="rounded-full bg-[#B17F02] px-6 py-3 text-center font-semibold text-black shadow-[0_14px_30px_rgba(237,184,11,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
                  >
                    {t.primaryCta}
                  </a>
                  <Link
                    href={`/${lang}/apply`}
                    data-track="footer_apply_cta"
                    data-track-value={lang}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-center font-medium text-white transition hover:bg-white/[0.12]"
                  >
                    {lang === "fr"
                      ? "Commencer la candidature"
                      : lang === "en"
                        ? "Start the application"
                        : "ابدأ التقديم"}
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                <StatCard
                  title={lang === "fr" ? "Fondateur" : lang === "en" ? "Founder" : "المؤسس"}
                  text={founderName}
                  isArabic={isArabic}
                />
                <StatCard
                  title={lang === "fr" ? "Approche" : lang === "en" ? "Approach" : "المنهج"}
                  text={
                    lang === "fr"
                      ? "Orientation, admission, visa, arrivée"
                      : lang === "en"
                        ? "Orientation, admission, visa, arrival"
                        : "توجيه، قبول، تأشيرة، وصول"
                  }
                  isArabic={isArabic}
                />
                <StatCard
                  title={lang === "fr" ? "Couverture" : lang === "en" ? "Coverage" : "التغطية"}
                  text={
                    lang === "fr"
                      ? "7 villes suivies"
                      : lang === "en"
                        ? "7 cities covered"
                        : "7 مدن متابعة"
                  }
                  isArabic={isArabic}
                />
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-[1.05fr_0.8fr_0.95fr_1fr]">
            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.18)] ${
                isArabic ? "text-right" : ""
              }`}
            >
              <div className={isArabic ? "flex justify-end" : ""}>
                <Link
                  href={homeHref}
                  className="inline-flex"
                  data-track="footer_logo"
                  data-track-value={lang}
                >
                  <BrandLogo size="md" variant="dark" />
                </Link>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
                {t.brandText}
              </p>
            </section>

            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                {t.navigationTitle}
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-white/78 sm:grid-cols-2">
                {t.links.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      data-track="footer_link"
                      data-track-value={item.href}
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
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                {t.coverageTitle}
              </p>
              <ul className="mt-4 grid gap-3 text-sm text-white/78 sm:grid-cols-2">
                {supportedCities[lang].map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
            </section>

            <section
              className={`rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 ${
                isArabic ? "text-right" : ""
              }`}
            >
              <p className="section-eyebrow text-sm font-semibold uppercase tracking-[0.22em] text-[#B17F02]">
                {t.contactTitle}
              </p>

              <div className="mt-4 space-y-4 text-sm text-white/78">
                <div>
                  <p className="mb-2 text-xs font-medium text-white/55">
                    {t.whatsappLabel}
                  </p>
                  <a
                    href={primaryWhatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    data-track="footer_contact_whatsapp"
                    data-track-value={primaryWhatsappNumberDisplay}
                    className="contact-inline text-base font-semibold text-white transition hover:text-white/85"
                  >
                    {primaryWhatsappNumberDisplay}
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-white/55">
                    {lang === "fr"
                      ? "WhatsApp secondaire"
                      : lang === "en"
                        ? "Secondary WhatsApp"
                        : "واتساب الثانوي"}
                  </p>
                  <a
                    href={secondaryWhatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    data-track="footer_contact_whatsapp_secondary"
                    data-track-value={secondaryWhatsappNumberDisplay}
                    className="contact-inline transition hover:text-white"
                  >
                    {secondaryWhatsappNumberDisplay}
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-white/55">
                    {lang === "fr" ? "Email" : lang === "en" ? "Email" : "البريد الإلكتروني"}
                  </p>
                  <a
                    href={`mailto:${contactEmail}`}
                    data-track="footer_contact_email"
                    data-track-value={contactEmail}
                    className="contact-inline transition hover:text-white"
                  >
                    {contactEmail}
                  </a>
                </div>

                <div>
                  <p className="mb-2 text-xs font-medium text-white/55">Instagram</p>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-track="footer_contact_instagram"
                    data-track-value={instagramHandle}
                    className="contact-inline transition hover:text-white"
                  >
                    {instagramHandle}
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
            <div
              className={`flex flex-col gap-2 sm:items-end ${isArabic ? "sm:items-start" : ""}`}
            >
              <p>{t.closing}</p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={`/${lang}/privacy`} className="transition hover:text-white">
                  {t.privacy}
                </Link>
                <Link href={`/${lang}/terms`} className="transition hover:text-white">
                  {t.terms}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function StatCard({
  title,
  text,
  isArabic,
}: {
  title: string;
  text: string;
  isArabic: boolean;
}) {
  return (
    <article
      className={`rounded-[1.6rem] border border-white/10 bg-black/20 p-4 backdrop-blur-md ${
        isArabic ? "text-right" : ""
      }`}
    >
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/65">{text}</p>
    </article>
  );
}
