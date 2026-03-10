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
    <main className="py-8 sm:py-12 lg:py-14">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className="space-y-4">
            <p className="text-sm text-zinc-500">Candidature</p>

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Postuler avec YALLA CHINA
            </h1>

            <p className="text-sm leading-7 text-zinc-600 sm:text-base">
              Remplissez ce formulaire pour votre projet d’études en Chine.
              Nous vous contacterons sous 24–48h par WhatsApp ou téléphone.
            </p>

            <div className="rounded-3xl border border-zinc-100 bg-white/80 p-5 shadow-sm sm:p-6">
              <p className="font-medium">Informations demandées</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600">
                <li>Vos coordonnées</li>
                <li>Votre ville et niveau d’étude</li>
                <li>Votre projet d’études en Chine</li>
              </ul>
            </div>

            <a
              href="https://wa.me/212638335452"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-[#EDB80B] px-5 py-3 font-medium text-black hover:opacity-90"
            >
              WhatsApp : +212 638-335452
            </a>
          </div>

          <div className="rounded-3xl border border-zinc-100 bg-white/85 p-5 shadow-sm sm:p-6">
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
                <Field label="Nom complet *" name="fullName" placeholder="Votre nom" required />
                <Field label="Téléphone *" name="phone" placeholder="+212..." required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="WhatsApp" name="whatsapp" placeholder="+212..." />
                <Field label="Email" name="email" placeholder="ex: nom@gmail.com" type="email" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Ville *" name="city" placeholder="Agadir, Casablanca..." required />
                <Field label="Adresse" name="address" placeholder="Optionnel" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Niveau d’étude *" name="studyLevel" placeholder="Bac, Licence..." required />
                <Field label="Filière" name="fieldOfStudy" placeholder="Ex: Informatique" />
              </div>

              <div>
                <label className="text-sm font-medium">Objectif *</label>
                <select
                  name="objective"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
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
                  className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
                />
              </div>

              <button
                disabled={loading}
                className="w-full rounded-full bg-[#8B0000] px-5 py-3 text-white transition hover:bg-[#740000] disabled:opacity-60"
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
        className="mt-2 w-full rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#8B0000] sm:text-base"
      />
    </div>
  );
}