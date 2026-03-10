"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ApplyEN() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Error");

      setDone(true);
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="py-8 sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className="space-y-4">
            <p className="text-sm text-zinc-500">Application</p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Apply with YALLA CHINA
            </h1>

            <p className="text-sm leading-7 text-zinc-600 sm:text-base">
              Fill out this form for your study project in China. We will contact
              you within 24–48 hours via WhatsApp or phone.
            </p>

            <div className="rounded-3xl border border-zinc-100 bg-white/80 p-5 shadow-sm sm:p-6">
              <p className="font-medium">What we need from you</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                <li>Your contact details</li>
                <li>Your city and study level</li>
                <li>Your study project in China</li>
              </ul>
            </div>

            <a
              href="https://wa.me/212638335452"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#EDB80B] px-5 py-3 font-medium text-black hover:opacity-90"
            >
              WhatsApp: +212 638-335452
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-100 bg-white/85 p-5 shadow-sm sm:p-6">
            {done && (
              <div className="mb-4 rounded-2xl bg-zinc-50 p-4 text-sm">
                ✅ Thank you! Your request has been sent.
              </div>
            )}

            {error && (
              <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name *" name="fullName" required />
                <Field label="Phone *" name="phone" placeholder="+212..." required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="WhatsApp" name="whatsapp" placeholder="+212..." />
                <Field label="Email" name="email" type="email" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="City *" name="city" required />
                <Field label="Address" name="address" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Study level *" name="studyLevel" required />
                <Field label="Field of study" name="fieldOfStudy" />
              </div>

              <div>
                <label className="text-sm font-medium">Objective *</label>
                <select
                  name="objective"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
                >
                  <option value="" disabled>
                    Select…
                  </option>
                  <option value="Études">Studies</option>
                  <option value="Langue">Language</option>
                  <option value="Autre">Other</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
                  placeholder="Describe your project or questions"
                />
              </div>

              <button
                disabled={loading}
                className="w-full rounded-full bg-[#8B0000] px-5 py-3 text-white hover:bg-[#740000]"
              >
                {loading ? "Sending..." : "Send my request"}
              </button>

              <p className="text-xs text-zinc-500">
                By submitting this form you agree to be contacted via WhatsApp or phone.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
}

function Field({ label, name, placeholder, required, type = "text" }: any) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
      />
    </div>
  );
}