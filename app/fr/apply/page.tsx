"use client";

import { useState } from "react";
import Container from "@/components/Container";

export default function ApplyFR() {
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
      if (!res.ok) throw new Error(data?.error || "Erreur");

      setDone(true);
      e.currentTarget.reset();
    } catch (err: any) {
      setError(err.message || "Erreur");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#0a0a0a] text-white">
      <section className="relative overflow-hidden bg-[#8B0000]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(237,184,11,0.14),transparent_28%)]" />
        <Container>
          <div className="relative grid gap-8 py-12 lg:grid-cols-2 lg:items-center lg:py-18">
            <div className="space-y-5">
              <p className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white/90 sm:text-sm">
                Candidature • YALLA CHINA
              </p>

              <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                Postuler pour votre projet d’études en Chine.
              </h1>

              <p className="max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
                Remplissez ce formulaire et nous vous contacterons sous 24–48h
                par WhatsApp ou téléphone pour échanger sur votre projet.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">
              <img
                src="/fr-apply-hero.jpg"
                alt="Postuler avec YALLA CHINA"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 text-zinc-900 sm:py-14">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-6 shadow-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#8B0000]">
                Avant de commencer
              </p>

              <h2 className="text-2xl font-bold">
                Informations demandées
              </h2>

              <p className="text-sm leading-7 text-zinc-600 sm:text-base">
                Nous avons besoin de quelques informations pour mieux comprendre
                votre profil et vous orienter correctement.
              </p>

              <ul className="space-y-3 text-sm text-zinc-700">
                <li>• Vos coordonnées</li>
                <li>• Votre ville et niveau d’étude</li>
                <li>• Votre objectif d’études en Chine</li>
                <li>• Un message si vous avez des questions</li>
              </ul>

              <div className="rounded-3xl bg-black p-5 text-white">
                <p className="text-sm font-semibold text-[#EDB80B]">
                  Besoin d’aller plus vite ?
                </p>
                <a
                  href="https://wa.me/212638335452"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex rounded-full bg-[#EDB80B] px-5 py-3 font-semibold text-black transition hover:opacity-90"
                >
                  WhatsApp : +212 638-335452
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              {done && (
                <div className="mb-4 rounded-2xl bg-zinc-50 p-4 text-sm">
                  ✅ Merci ! Votre demande a été envoyée.
                </div>
              )}

              {error && (
                <div className="mb-4 rounded-2xl bg-red-50 p-4 text-sm text-red-700">
                  {error}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Nom complet *"
                    name="fullName"
                    placeholder="Votre nom"
                    required
                  />
                  <Field
                    label="Téléphone *"
                    name="phone"
                    placeholder="+212..."
                    required
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="WhatsApp" name="whatsapp" placeholder="+212..." />
                  <Field
                    label="Email"
                    name="email"
                    placeholder="ex: nom@gmail.com"
                    type="email"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Ville *"
                    name="city"
                    placeholder="Agadir, Casablanca..."
                    required
                  />
                  <Field
                    label="Adresse"
                    name="address"
                    placeholder="Optionnel"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Niveau d’étude *"
                    name="studyLevel"
                    placeholder="Bac, Licence..."
                    required
                  />
                  <Field
                    label="Filière"
                    name="fieldOfStudy"
                    placeholder="Ex: Informatique"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Objectif *</label>
                  <select
                    name="objective"
                    required
                    defaultValue=""
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base"
                  >
                    <option value="" disabled>
                      Choisir…
                    </option>
                    <option value="Études">Études</option>
                    <option value="Langue">Langue</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Décrivez votre projet ou vos questions"
                    className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base"
                  />
                </div>

                <button
                  disabled={loading}
                  className="w-full rounded-full bg-[#8B0000] px-5 py-3 font-semibold text-white transition hover:bg-[#740000] disabled:opacity-60"
                >
                  {loading ? "Envoi..." : "Envoyer ma demande"}
                </button>

                <p className="text-xs leading-5 text-zinc-500">
                  En envoyant ce formulaire, vous acceptez d’être contacté par
                  WhatsApp ou téléphone.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        required={required}
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#8B0000] sm:text-base"
      />
    </div>
  );
}