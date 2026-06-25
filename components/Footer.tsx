import Link from "next/link";
import type { ReactNode } from "react";
import BrandLogo from "./BrandLogo";
import Container from "./Container";
import {
  buildWhatsappUrl,
  contactEmail,
  instagramHandle,
  instagramUrl,
  Locale,
  primaryWhatsappNumberDisplay,
  secondaryWhatsappNumberDisplay,
  secondaryWhatsappNumberRaw,
  supportedCities,
} from "@/lib/yalla";

type Props = {
  lang?: Locale | string;
};

type FooterLink = {
  href: string;
  label: string;
};

type DirectAction = {
  title: string;
  helper: string;
  href: string;
  track: string;
  external?: boolean;
  primary?: boolean;
};

type Copy = {
  dir: "ltr" | "rtl";
  eyebrow: string;
  title: string;
  text: string;
  primary: string;
  secondary: string;
  whatsappFast: string;
  applyFast: string;
  proofLabel: string;
  proof: string[];
  navLabel: string;
  citiesLabel: string;
  contactLabel: string;
  whatsappMain: string;
  whatsappSecond: string;
  email: string;
  instagram: string;
  privacy: string;
  terms: string;
  rights: string;
  signature: string;
  links: FooterLink[];
};

function getSafeLang(lang: string | undefined): Locale {
  return lang === "fr" || lang === "en" || lang === "ar" ? lang : "fr";
}

const copy: Record<Locale, Copy> = {
  fr: {
    dir: "ltr",
    eyebrow: "Prochaine étape",
    title: "Prêt à clarifier votre projet d’études en Chine ?",
    text:
      "Commencez par une consultation ou envoyez votre candidature. L’objectif est simple : comprendre votre profil, vos priorités et le niveau d’accompagnement adapté avant toute décision.",
    primary: "Demander une consultation",
    secondary: "Envoyer ma candidature",
    whatsappFast: "Parler sur WhatsApp",
    applyFast: "Remplir le formulaire",
    proofLabel: "Ce que nous clarifions avant de commencer",
    proof: ["Profil", "Université", "Visa", "Départ"],
    navLabel: "Navigation",
    citiesLabel: "Villes mises en avant",
    contactLabel: "Contact direct",
    whatsappMain: "WhatsApp principal",
    whatsappSecond: "WhatsApp secondaire",
    email: "Email",
    instagram: "Instagram",
    privacy: "Confidentialité",
    terms: "Conditions",
    rights: "Tous droits réservés.",
    signature: "Dream. Trust. Achieve.",
    links: [
      { href: "/fr", label: "Accueil" },
      { href: "/fr/about", label: "À propos" },
      { href: "/fr/services", label: "Services" },
      { href: "/fr/apply", label: "Candidature" },
      { href: "/fr/faq", label: "FAQ" },
      { href: "/fr/contact", label: "Contact" },
    ],
  },

  en: {
    dir: "ltr",
    eyebrow: "Next step",
    title: "Ready to clarify your China study project?",
    text:
      "Start with a consultation or send your application. The goal is simple: understand your profile, priorities, and the right level of support before any decision.",
    primary: "Request a consultation",
    secondary: "Send my application",
    whatsappFast: "Talk on WhatsApp",
    applyFast: "Fill the form",
    proofLabel: "What we clarify before starting",
    proof: ["Profile", "University", "Visa", "Departure"],
    navLabel: "Navigation",
    citiesLabel: "Highlighted cities",
    contactLabel: "Direct contact",
    whatsappMain: "Main WhatsApp",
    whatsappSecond: "Secondary WhatsApp",
    email: "Email",
    instagram: "Instagram",
    privacy: "Privacy",
    terms: "Terms",
    rights: "All rights reserved.",
    signature: "Dream. Trust. Achieve.",
    links: [
      { href: "/en", label: "Home" },
      { href: "/en/about", label: "About" },
      { href: "/en/services", label: "Services" },
      { href: "/en/apply", label: "Apply" },
      { href: "/en/faq", label: "FAQ" },
      { href: "/en/contact", label: "Contact" },
    ],
  },

  ar: {
    dir: "rtl",
    eyebrow: "الخطوة التالية",
    title: "هل تريد توضيح مشروع الدراسة في الصين؟",
    text:
      "ابدأ باستشارة أو أرسل طلبك. الهدف بسيط: فهم ملفك، أولوياتك، ومستوى المرافقة المناسب قبل أي قرار.",
    primary: "اطلب استشارة",
    secondary: "أرسل طلبي",
    whatsappFast: "تحدث عبر واتساب",
    applyFast: "املأ الاستمارة",
    proofLabel: "ما نوضحه قبل البداية",
    proof: ["الملف", "الجامعة", "الفيزا", "السفر"],
    navLabel: "التنقل",
    citiesLabel: "المدن المعروضة",
    contactLabel: "تواصل مباشر",
    whatsappMain: "واتساب الرئيسي",
    whatsappSecond: "واتساب الثانوي",
    email: "البريد الإلكتروني",
    instagram: "إنستغرام",
    privacy: "الخصوصية",
    terms: "الشروط",
    rights: "جميع الحقوق محفوظة.",
    signature: "Dream. Trust. Achieve.",
    links: [
      { href: "/ar", label: "الرئيسية" },
      { href: "/ar/about", label: "من نحن" },
      { href: "/ar/services", label: "الخدمات" },
      { href: "/ar/apply", label: "التقديم" },
      { href: "/ar/faq", label: "الأسئلة الشائعة" },
      { href: "/ar/contact", label: "تواصل معنا" },
    ],
  },
};

function getCitiesForLocale(lang: Locale): string[] {
  if (Array.isArray(supportedCities)) return supportedCities;

  const cityMap = supportedCities as unknown as Partial<Record<Locale, string[]>>;
  return cityMap[lang] ?? cityMap.fr ?? [];
}

export default function Footer({ lang = "fr" }: Props) {
  const safeLang = getSafeLang(lang);
  const t = copy[safeLang];
  const isArabic = t.dir === "rtl";

  const primaryWhatsappHref = buildWhatsappUrl();
  const secondaryWhatsappHref = buildWhatsappUrl(
    undefined,
    secondaryWhatsappNumberRaw
  );

  const cities = getCitiesForLocale(safeLang).slice(0, 8);

  const directActions: DirectAction[] = [
    {
      title: t.primary,
      helper: t.whatsappFast,
      href: primaryWhatsappHref,
      track: "footer_whatsapp_cta",
      primary: true,
    },
    {
      title: t.secondary,
      helper: t.applyFast,
      href: `/${safeLang}/apply`,
      track: "footer_apply_cta",
      external: false,
    },
  ];

  return (
    <footer
      dir={t.dir}
      lang={safeLang}
      className="relative overflow-hidden border-t border-white/10 bg-[#050202] text-white"
    >
      <FooterAtmosphere />

      <Container>
        <div className="relative pb-28 pt-10 sm:py-12 md:pb-12 lg:py-16">
          <section
            className={`border-b border-white/10 pb-8 sm:pb-10 ${
              isArabic ? "text-right" : ""
            }`}
          >
            <div className="grid gap-7 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
              <div>
                <div className={isArabic ? "flex justify-end" : ""}>
                  <Link
                    href={`/${safeLang}`}
                    data-track="footer_logo"
                    data-track-value={safeLang}
                    className="inline-flex"
                  >
                    <BrandLogo size="md" variant="dark" />
                  </Link>
                </div>

                <p className="mt-7 text-[0.64rem] font-black uppercase tracking-[0.26em] text-[#EDB80B] sm:text-[0.68rem] sm:tracking-[0.34em]">
                  {t.eyebrow}
                </p>

                <h2 className="mt-4 max-w-4xl text-[1.95rem] font-black leading-[1] tracking-[-0.035em] sm:text-[2.7rem] lg:text-[3.4rem] xl:text-[3.85rem]">
                  {t.title}
                </h2>

                <p className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/68 sm:text-base sm:leading-8">
                  {t.text}
                </p>

                <div className="mt-6">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.24em] text-white/38">
                    {t.proofLabel}
                  </p>

                  <div
                    className={`mt-3 flex flex-wrap gap-2 ${
                      isArabic ? "justify-end" : ""
                    }`}
                  >
                    {t.proof.map((item, index) => (
                      <span
                        key={item}
                        className="inline-flex min-h-9 items-center gap-2 rounded-full border border-white/10 bg-white/[0.052] px-3.5 py-2 text-xs font-black text-white/72"
                      >
                        <span className="text-[#EDB80B]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="grid gap-3 sm:grid-cols-2 lg:max-w-[36rem] lg:justify-self-end">
                {directActions.map((action) => (
                  <FooterAction
                    key={action.track}
                    action={action}
                    trackValue={safeLang}
                  />
                ))}
              </aside>
            </div>
          </section>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-[0.82fr_0.82fr_1.12fr]">
            <FooterPanel title={t.navLabel} isArabic={isArabic}>
              <nav
                className="grid grid-cols-2 gap-x-5 gap-y-3"
                aria-label={t.navLabel}
              >
                {t.links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    data-track="footer_link"
                    data-track-value={item.href}
                    className="group inline-flex min-h-9 items-center gap-2 text-sm font-bold text-white/62 transition hover:text-white"
                  >
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-[#EDB80B]/45 transition group-hover:bg-[#EDB80B]"
                    />
                    {item.label}
                  </Link>
                ))}
              </nav>
            </FooterPanel>

            <FooterPanel title={t.citiesLabel} isArabic={isArabic}>
              <div className="flex flex-wrap gap-2">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-white/10 bg-white/[0.045] px-4 py-2 text-sm font-bold text-white/62"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </FooterPanel>

            <FooterPanel title={t.contactLabel} isArabic={isArabic}>
              <div className="grid gap-3 sm:grid-cols-2">
                <ContactItem
                  label={t.whatsappMain}
                  value={primaryWhatsappNumberDisplay}
                  href={primaryWhatsappHref}
                  track="footer_whatsapp_primary"
                />

                <ContactItem
                  label={t.whatsappSecond}
                  value={secondaryWhatsappNumberDisplay}
                  href={secondaryWhatsappHref}
                  track="footer_whatsapp_secondary"
                />

                <ContactItem
                  label={t.email}
                  value={contactEmail}
                  href={`mailto:${contactEmail}`}
                  track="footer_email"
                  external={false}
                />

                <ContactItem
                  label={t.instagram}
                  value={instagramHandle}
                  href={instagramUrl}
                  track="footer_instagram"
                />
              </div>
            </FooterPanel>
          </div>

          <div
            className={`mt-7 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs leading-6 text-white/42 sm:flex-row sm:items-center sm:justify-between ${
              isArabic ? "text-right" : ""
            }`}
          >
            <p>
              © {new Date().getFullYear()} YALLA CHINA. {t.rights}
            </p>

            <div
              className={`flex flex-wrap items-center gap-4 ${
                isArabic ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              <Link
                href={`/${safeLang}/privacy`}
                className="transition hover:text-white"
              >
                {t.privacy}
              </Link>

              <Link
                href={`/${safeLang}/terms`}
                className="transition hover:text-white"
              >
                {t.terms}
              </Link>

              <span className="font-semibold text-[#EDB80B]/72">{t.signature}</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterAtmosphere() {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,2,2,0.96),rgba(28,4,5,0.94)_48%,rgba(5,2,2,0.98)),radial-gradient(circle_at_18%_18%,rgba(237,184,11,0.14),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(119,3,4,0.58),transparent_34%),radial-gradient(circle_at_70%_90%,rgba(237,184,11,0.09),transparent_32%)]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08] shoji-grid"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.13] mix-blend-soft-light [background-image:radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12)_0_1px,transparent_1px),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.08)_0_1px,transparent_1px)] [background-size:22px_22px,34px_34px]"
      />
    </>
  );
}

function FooterPanel({
  title,
  children,
  isArabic,
}: {
  title: string;
  children: ReactNode;
  isArabic: boolean;
}) {
  return (
    <section
      className={`rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-4 backdrop-blur-2xl sm:p-5 ${
        isArabic ? "text-right" : ""
      }`}
    >
      <p className="mb-4 text-[0.64rem] font-black uppercase tracking-[0.28em] text-[#EDB80B]">
        {title}
      </p>

      {children}
    </section>
  );
}

function FooterAction({
  action,
  trackValue,
}: {
  action: DirectAction;
  trackValue: string;
}) {
  const className = `group flex min-h-[4.75rem] flex-col justify-center rounded-[1.25rem] border px-5 py-4 transition duration-300 ${
    action.primary
      ? "border-[#EDB80B]/45 bg-[#EDB80B] text-black shadow-[0_18px_50px_rgba(237,184,11,0.22)] hover:-translate-y-1"
      : "border-white/12 bg-white/[0.055] text-white hover:border-[#EDB80B]/35 hover:bg-[#EDB80B]/10"
  }`;

  const content = (
    <>
      <span className="text-sm font-black">{action.title}</span>
      <span
        className={`mt-1 text-xs font-bold ${
          action.primary ? "text-black/62" : "text-white/48 group-hover:text-white/68"
        }`}
      >
        {action.helper}
      </span>
    </>
  );

  if (action.external === false) {
    return (
      <Link
        href={action.href}
        data-track={action.track}
        data-track-value={trackValue}
        className={className}
      >
        {content}
      </Link>
    );
  }

  return (
    <a
      href={action.href}
      target="_blank"
      rel="noreferrer"
      data-track={action.track}
      data-track-value={trackValue}
      className={className}
    >
      {content}
    </a>
  );
}

function ContactItem({
  label,
  value,
  href,
  track,
  external = true,
}: {
  label: string;
  value: string;
  href: string;
  track: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-track={track}
      data-track-value={value}
      className="group min-h-[5.25rem] rounded-[1.25rem] border border-white/10 bg-white/[0.042] p-4 transition duration-300 hover:border-[#EDB80B]/35 hover:bg-[#EDB80B]/10"
    >
      <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/38">
        {label}
      </p>

      <p className="mt-2 break-words text-sm font-bold text-white/74 transition group-hover:text-white">
        {value}
      </p>
    </a>
  );
}
