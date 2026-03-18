"use client";

import { useState } from "react";
import BrandLogo from "@/components/BrandLogo";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setSubmitting(true);

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const text = await res.text();
      let data: { error?: string } = {};

      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = { error: "Réponse serveur invalide." };
      }

      if (!res.ok) {
        setErr(data.error || `Connexion impossible (${res.status})`);
        return;
      }

      window.location.href = "/admin/applications";
    } catch {
      setErr("Impossible de joindre le serveur pour le moment.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(139,0,0,0.08),transparent_24%),radial-gradient(circle_at_top_right,rgba(237,184,11,0.12),transparent_28%),linear-gradient(180deg,#fbf7f1_0%,#f5eee4_100%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid min-h-[calc(100vh-3rem)] max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <section className="relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-[linear-gradient(135deg,#120405_0%,#1d0608_46%,#090909_100%)] p-8 text-white shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.52),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(237,184,11,0.14),transparent_28%)]" />
          <div className="absolute inset-0 opacity-20 shoji-grid" />

          <div className="relative flex h-full flex-col justify-between">
            <div>
              <BrandLogo size="lg" variant="dark" />
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#EDB80B]">
                Portail administrateur
              </p>
              <h1 className="mt-4 max-w-xl text-4xl font-black tracking-tight sm:text-5xl">
                Un accès propre, sérieux et prêt pour gérer les leads.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/78">
                Consultez les candidatures, suivez les statuts et reprenez
                contact rapidement depuis un espace qui reste aligné avec
                l'image premium du projet.
              </p>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                  Vision rapide
                </p>
                <p className="mt-3 text-lg font-bold">Demandes bien triées</p>
              </article>
              <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                  Actions directes
                </p>
                <p className="mt-3 text-lg font-bold">WhatsApp et suivi</p>
              </article>
              <article className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur-sm">
                <p className="text-[11px] uppercase tracking-[0.22em] text-white/55">
                  Statuts
                </p>
                <p className="mt-3 text-lg font-bold">Nouveau à accepté</p>
              </article>
            </div>
          </div>
        </section>

        <section className="flex items-center">
          <div className="w-full rounded-[2.5rem] border border-black/5 bg-white/88 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B0000]">
              Connexion sécurisée
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-zinc-950">
              Accéder au tableau de bord
            </h2>
            <p className="mt-3 text-sm leading-7 text-zinc-600">
              Entrez le mot de passe administrateur pour ouvrir l'espace privé
              de gestion des candidatures.
            </p>

            {err && (
              <div className="mt-6 rounded-[1.5rem] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                {err}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="admin-password"
                  className="text-sm font-semibold text-zinc-800"
                >
                  Mot de passe
                </label>
                <input
                  id="admin-password"
                  type="password"
                  className="mt-2 w-full rounded-[1.4rem] border border-zinc-200 bg-white px-5 py-3.5 text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-[#EDB80B]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Entrez le mot de passe"
                  autoComplete="current-password"
                  required
                />
              </div>

              <button
                disabled={submitting}
                className="w-full rounded-full bg-[#8B0000] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(139,0,0,0.16)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Connexion..." : "Se connecter"}
              </button>
            </form>

            <div className="mt-6 rounded-[1.5rem] border border-zinc-200 bg-[#faf8f5] p-4 text-sm leading-7 text-zinc-600">
              Cet espace est réservé à l'équipe YALLA CHINA pour le suivi des
              candidatures étudiantes et des échanges avec les familles.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
