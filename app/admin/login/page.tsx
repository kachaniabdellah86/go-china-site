"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    // ✅ safe parse (works even if server returns HTML or empty body)
    const text = await res.text();
    let data: any = {};
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { error: "Server returned non-JSON (route missing or crashed)" };
    }

    if (!res.ok) {
      setErr(data?.error || `Login failed (${res.status})`);
      return;
    }

    window.location.href = "/admin/applications";
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-zinc-100 p-6 shadow-sm">
        <h1 className="text-2xl font-semibold">Admin</h1>
        <p className="mt-1 text-sm text-zinc-600">Connexion administrateur</p>

        {err && (
          <div className="mt-4 rounded-2xl bg-red-50 p-3 text-sm text-red-700">
            {err}
          </div>
        )}

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Mot de passe</label>
            <input
              type="password"
              className="mt-2 w-full rounded-2xl border border-zinc-200 px-4 py-3 outline-none focus:border-zinc-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button className="w-full rounded-full bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}