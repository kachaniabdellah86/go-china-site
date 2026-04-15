"use client";

import { useState } from "react";
import { buildWhatsappUrl, Locale } from "@/lib/yalla";

type ContactFormCopy = {
  title: string;
  description: string;
  note: string;
  success: string;
  errors: {
    required: string;
  };
  placeholders: {
    name: string;
    phone: string;
    email: string;
    message: string;
  };
  labels: {
    name: string;
    phone: string;
    email: string;
    message: string;
    submit: string;
    secondary: string;
  };
};

export default function ContactFormCard({
  copy,
  dir = "ltr",
  lang,
}: {
  copy: ContactFormCopy;
  dir?: "ltr" | "rtl";
  lang: Locale;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);
  const isRtl = dir === "rtl";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    const fullName = String(form.get("fullName") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!fullName || !phone || !message) {
      setDone(false);
      setError(copy.errors.required);
      return;
    }

    setError(null);
    setLoading(true);

    const text = [
      "YALLA CHINA",
      "",
      `${copy.labels.name}: ${fullName}`,
      `${copy.labels.phone}: ${phone}`,
      email ? `${copy.labels.email}: ${email}` : null,
      "",
      `${copy.labels.message}:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const waUrl = buildWhatsappUrl(text);
    const popup = window.open(waUrl, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.href = waUrl;
    }

    setDone(true);
    setLoading(false);
    e.currentTarget.reset();
  }

  const fieldClass = `mt-2 w-full rounded-2xl border border-zinc-200 bg-white/95 px-4 py-3 text-sm outline-none transition focus:border-[#770304] focus:bg-white sm:text-base ${
    isRtl ? "text-right" : ""
  }`;

  return (
    <form
      onSubmit={onSubmit}
      className={`rounded-[2.2rem] border border-zinc-200 bg-[linear-gradient(180deg,#ffffff_0%,#fffaf5_100%)] p-6 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-8 ${
        isRtl ? "text-right" : ""
      }`}
    >
      <h2 className="text-2xl font-bold">{copy.title}</h2>
      <p className="mt-3 text-sm leading-7 text-zinc-600">{copy.description}</p>

      {done ? (
        <div className="mt-4 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {copy.success}
        </div>
      ) : null}

      {error ? (
        <div className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-fullName" className="text-sm font-medium">
            {copy.labels.name}
          </label>
          <input
            id="contact-fullName"
            name="fullName"
            className={fieldClass}
            placeholder={copy.placeholders.name}
            required
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className="text-sm font-medium">
            {copy.labels.phone}
          </label>
          <input
            id="contact-phone"
            name="phone"
            className={`${fieldClass} ${isRtl ? "force-ltr" : ""}`}
            placeholder={copy.placeholders.phone}
            required
            dir={isRtl ? "ltr" : undefined}
            inputMode="tel"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-email" className="text-sm font-medium">
          {copy.labels.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          className={`${fieldClass} ${isRtl ? "force-ltr" : ""}`}
          placeholder={copy.placeholders.email}
          dir={isRtl ? "ltr" : undefined}
          inputMode="email"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="text-sm font-medium">
          {copy.labels.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          className={`${fieldClass} min-h-[170px]`}
          placeholder={copy.placeholders.message}
          required
        />
      </div>

      <div
        className={`mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
          isRtl ? "sm:justify-end" : ""
        }`}
      >
        <button
          disabled={loading}
          data-track="contact_form_whatsapp_message"
          data-track-value={lang}
          className="w-full rounded-full bg-[#770304] px-5 py-3 font-semibold text-white shadow-[0_16px_30px_rgba(119,3,4,0.14)] transition hover:bg-[#5a0203] disabled:opacity-60 sm:w-auto"
        >
          {loading ? copy.labels.secondary : copy.labels.submit}
        </button>

        <a
          href={buildWhatsappUrl()}
          target="_blank"
          rel="noreferrer"
          data-track="contact_form_direct_whatsapp"
          data-track-value={lang}
          className="w-full rounded-full border border-zinc-200 bg-white/80 px-5 py-3 text-center font-medium transition hover:bg-white sm:w-auto"
        >
          {isRtl ? "واتساب" : "WhatsApp"}
        </a>
      </div>

      <p className="mt-4 text-xs leading-5 text-zinc-500">{copy.note}</p>
    </form>
  );
}
