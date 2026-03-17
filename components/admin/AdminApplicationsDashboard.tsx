"use client";

import { useDeferredValue, useState } from "react";

type AdminApplication = {
  id: string;
  fullName: string;
  phone: string;
  whatsapp: string | null;
  email: string | null;
  city: string;
  address: string | null;
  studyLevel: string;
  fieldOfStudy: string | null;
  objective: string;
  message: string | null;
  status: string;
  createdAt: string;
};

type Props = {
  applications: AdminApplication[];
  error?: string | null;
  notice?: string | null;
  updatedAt: string;
};

const statusMeta = {
  NEW: {
    label: "Nouveau",
    badge: "border-[#8B0000]/12 bg-[#8B0000]/8 text-[#8B0000]",
  },
  CONTACTED: {
    label: "Contacté",
    badge: "border-[#EDB80B]/20 bg-[#EDB80B]/10 text-[#8b6500]",
  },
  ACCEPTED: {
    label: "Accepté",
    badge: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  REJECTED: {
    label: "Refusé",
    badge: "border-zinc-200 bg-zinc-100 text-zinc-700",
  },
} as const;

type StatusKey = keyof typeof statusMeta;
type FilterValue = "ALL" | StatusKey;

const filterLabels: Record<FilterValue, string> = {
  ALL: "Tous",
  NEW: "Nouveaux",
  CONTACTED: "Contactés",
  ACCEPTED: "Acceptés",
  REJECTED: "Refusés",
};

function cleanPhone(phone?: string | null) {
  if (!phone) return "";
  return phone.replace(/[^\d+]/g, "");
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function shortId(id: string) {
  return id.slice(-8).toUpperCase();
}

function statusLabel(status: string) {
  if (status in statusMeta) {
    return statusMeta[status as StatusKey].label;
  }
  return status;
}

function statusBadge(status: string) {
  if (status in statusMeta) {
    return statusMeta[status as StatusKey].badge;
  }
  return "border-zinc-200 bg-zinc-100 text-zinc-700";
}

function countForStatus(applications: AdminApplication[], status: StatusKey) {
  return applications.filter((application) => application.status === status)
    .length;
}

function MetricCard({
  label,
  value,
  tone = "light",
}: {
  label: string;
  value: string;
  tone?: "light" | "accent";
}) {
  return (
    <article
      className={`rounded-[1.7rem] border p-4 backdrop-blur-sm ${
        tone === "accent"
          ? "border-[#EDB80B]/20 bg-[#EDB80B]/10 text-white"
          : "border-white/10 bg-white/[0.06] text-white"
      }`}
    >
      <p className="text-[11px] uppercase tracking-[0.24em] text-white/55">
        {label}
      </p>
      <p className="mt-3 text-3xl font-black tracking-tight">{value}</p>
    </article>
  );
}

function DetailBlock({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="rounded-[1.4rem] border border-black/5 bg-[#faf8f5] p-4">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
        {label}
      </p>
      {href ? (
        <a
          href={href}
          className="contact-inline mt-2 text-sm font-semibold text-zinc-900 transition hover:text-[#8B0000]"
        >
          {value}
        </a>
      ) : (
        <p className="mt-2 text-sm font-medium text-zinc-900">{value}</p>
      )}
    </div>
  );
}

function StatusForm({
  id,
  value,
}: {
  id: string;
  value: string;
}) {
  return (
    <form
      action={`/api/admin/applications/${id}/status`}
      method="POST"
      className="flex flex-col gap-2 sm:flex-row sm:items-center"
    >
      <select
        name="status"
        defaultValue={value}
        className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 outline-none transition focus:border-[#EDB80B]"
      >
        <option value="NEW">Nouveau</option>
        <option value="CONTACTED">Contacté</option>
        <option value="ACCEPTED">Accepté</option>
        <option value="REJECTED">Refusé</option>
      </select>

      <button className="rounded-full border border-[#EDB80B]/30 bg-[#EDB80B] px-4 py-2.5 text-sm font-semibold text-black transition hover:opacity-95">
        Enregistrer
      </button>
    </form>
  );
}

export default function AdminApplicationsDashboard({
  applications,
  error = null,
  notice = null,
  updatedAt,
}: Props) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterValue>("ALL");
  const deferredSearch = useDeferredValue(search);
  const normalizedSearch = deferredSearch.trim().toLowerCase();
  const hasDatabaseConnection = !error;

  const filteredApplications = applications.filter((application) => {
    if (filter !== "ALL" && application.status !== filter) {
      return false;
    }

    if (!normalizedSearch) {
      return true;
    }

    const haystack = [
      application.fullName,
      application.city,
      application.phone,
      application.whatsapp || "",
      application.email || "",
      application.studyLevel,
      application.fieldOfStudy || "",
      application.objective,
      application.message || "",
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalizedSearch);
  });

  const now = new Date();
  const totalCount = applications.length;
  const newCount = countForStatus(applications, "NEW");
  const contactedCount = countForStatus(applications, "CONTACTED");
  const acceptedCount = countForStatus(applications, "ACCEPTED");
  const rejectedCount = countForStatus(applications, "REJECTED");
  const todayCount = applications.filter((application) =>
    sameDay(new Date(application.createdAt), now)
  ).length;
  const weekCount = applications.filter((application) => {
    const submittedAt = new Date(application.createdAt).getTime();
    return submittedAt >= now.getTime() - 7 * 24 * 60 * 60 * 1000;
  }).length;

  const filterButtons: { key: FilterValue; count: number | string }[] = [
    { key: "ALL", count: hasDatabaseConnection ? totalCount : "—" },
    { key: "NEW", count: hasDatabaseConnection ? newCount : "—" },
    { key: "CONTACTED", count: hasDatabaseConnection ? contactedCount : "—" },
    { key: "ACCEPTED", count: hasDatabaseConnection ? acceptedCount : "—" },
    { key: "REJECTED", count: hasDatabaseConnection ? rejectedCount : "—" },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(139,0,0,0.08),transparent_24%),radial-gradient(circle_at_top_right,rgba(237,184,11,0.12),transparent_28%),linear-gradient(180deg,#fbf7f1_0%,#f5eee4_100%)]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <section className="relative overflow-hidden rounded-[2.7rem] border border-white/10 bg-[linear-gradient(135deg,#120405_0%,#1d0608_46%,#090909_100%)] p-6 text-white shadow-[0_30px_80px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(165,21,31,0.52),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(237,184,11,0.14),transparent_28%)]" />
          <div className="absolute inset-0 opacity-20 shoji-grid" />

          <div className="relative">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#EDB80B]">
                  Portail administrateur
                </p>
                <h1 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-4xl lg:text-[3.2rem]">
                  Un tableau de bord plus clair pour piloter les demandes.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                  Consultez les candidatures, identifiez les nouveaux leads,
                  mettez les statuts à jour et reprenez contact rapidement
                  depuis un espace plus propre et mieux organisé.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <div className="rounded-full border border-white/12 bg-white/[0.06] px-4 py-2 text-sm text-white/80">
                  Mis à jour le {formatDate(updatedAt)}
                </div>

                <form action="/api/admin/logout" method="POST">
                  <button className="rounded-full border border-white/15 bg-white/[0.08] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.14]">
                    Se déconnecter
                  </button>
                </form>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <MetricCard
                label="Total des demandes"
                value={hasDatabaseConnection ? String(totalCount) : "—"}
              />
              <MetricCard
                label="Nouveaux leads"
                value={hasDatabaseConnection ? String(newCount) : "—"}
                tone="accent"
              />
              <MetricCard
                label="Cette semaine"
                value={hasDatabaseConnection ? String(weekCount) : "—"}
              />
              <MetricCard
                label="Acceptés"
                value={hasDatabaseConnection ? String(acceptedCount) : "—"}
              />
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2.2rem] border border-black/5 bg-white/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-6">
          <div className="grid gap-5 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
                Recherche et filtres
              </p>
              <label className="mt-3 block">
                <span className="sr-only">Rechercher une candidature</span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Rechercher par nom, ville, téléphone, email ou objectif"
                  disabled={!hasDatabaseConnection}
                  className="w-full rounded-[1.4rem] border border-zinc-200 bg-white px-5 py-3.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 disabled:cursor-not-allowed disabled:bg-zinc-50 disabled:text-zinc-400 focus:border-[#EDB80B]"
                />
              </label>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-2">
              <DetailBlock
                label="Nouveaux aujourd'hui"
                value={
                  hasDatabaseConnection
                    ? `${todayCount} lead${todayCount > 1 ? "s" : ""}`
                    : "Indisponible"
                }
              />
              <DetailBlock
                label="Leads contactés"
                value={
                  hasDatabaseConnection
                    ? `${contactedCount} dossier${contactedCount > 1 ? "s" : ""}`
                    : "Indisponible"
                }
              />
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {filterButtons.map((item) => {
              const active = filter === item.key;
              return (
                <button
                  key={item.key}
                  type="button"
                  disabled={!hasDatabaseConnection}
                  onClick={() => setFilter(item.key)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition ${
                    active
                      ? "bg-[#8B0000] text-white shadow-[0_12px_30px_rgba(139,0,0,0.16)]"
                      : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                  } disabled:cursor-not-allowed disabled:border-zinc-200 disabled:bg-zinc-50 disabled:text-zinc-400 disabled:shadow-none`}
                >
                  {filterLabels[item.key]} ({item.count})
                </button>
              );
            })}
          </div>
        </section>

        {error && (
          <div className="mt-6 rounded-[2rem] border border-red-200 bg-red-50 p-5 text-sm text-red-700 shadow-sm">
            {error}
          </div>
        )}

        {notice && (
          <div className="mt-6 rounded-[2rem] border border-amber-200 bg-amber-50 p-5 text-sm text-amber-800 shadow-sm">
            {notice}
          </div>
        )}

        <section className="mt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8B0000]">
                Candidatures
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-zinc-950">
                {hasDatabaseConnection
                  ? `${filteredApplications.length} résultat${
                      filteredApplications.length > 1 ? "s" : ""
                    }${filter !== "ALL" ? ` dans "${filterLabels[filter]}"` : ""}`
                  : "Base de données indisponible"}
              </h2>
            </div>

            {hasDatabaseConnection && (search || filter !== "ALL") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setFilter("ALL");
                }}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:bg-zinc-50"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>

          <div className="mt-5 grid gap-5">
            {filteredApplications.map((application) => {
              const phone = cleanPhone(application.phone);
              const whatsapp = cleanPhone(
                application.whatsapp || application.phone
              );
              const phoneHref = phone ? `tel:${phone}` : undefined;
              const whatsappHref = whatsapp
                ? `https://wa.me/${whatsapp.replace("+", "")}`
                : undefined;

              return (
                <article
                  key={application.id}
                  className="rounded-[2.2rem] border border-black/5 bg-white/90 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.05)] backdrop-blur-xl sm:p-6"
                >
                  <div className="flex flex-col gap-5 border-b border-zinc-100 pb-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-black/5 bg-[#faf8f5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                          ID {shortId(application.id)}
                        </span>
                        <span
                          className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${statusBadge(
                            application.status
                          )}`}
                        >
                          {statusLabel(application.status)}
                        </span>
                        {application.status === "NEW" && (
                          <span className="rounded-full border border-[#EDB80B]/25 bg-[#EDB80B]/10 px-3 py-1 text-xs font-semibold text-[#8b6500]">
                            À traiter
                          </span>
                        )}
                      </div>

                      <h3 className="mt-4 text-2xl font-black tracking-tight text-zinc-950">
                        {application.fullName}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-600">
                        Soumis le {formatDate(application.createdAt)}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700">
                          {application.city}
                        </span>
                        <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700">
                          {application.studyLevel}
                        </span>
                        {application.fieldOfStudy && (
                          <span className="rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700">
                            {application.fieldOfStudy}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:min-w-[320px] lg:max-w-[360px]">
                      <div className="flex flex-wrap gap-2">
                        {whatsappHref && (
                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-full bg-[#8B0000] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(139,0,0,0.16)] transition hover:opacity-95"
                          >
                            Ouvrir WhatsApp
                          </a>
                        )}

                        {phoneHref && (
                          <a
                            href={phoneHref}
                            className="rounded-full border border-zinc-200 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                          >
                            Appeler
                          </a>
                        )}
                      </div>

                      <StatusForm id={application.id} value={application.status} />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-4">
                      <div className="rounded-[1.6rem] border border-black/5 bg-[#faf8f5] p-5">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                          Objectif déclaré
                        </p>
                        <p className="mt-3 text-base font-semibold leading-7 text-zinc-900">
                          {application.objective}
                        </p>
                      </div>

                      {application.message && (
                        <div className="rounded-[1.6rem] border border-black/5 bg-white p-5">
                          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                            Message
                          </p>
                          <div className="mt-3 max-h-44 overflow-auto pr-2 text-sm leading-7 text-zinc-700">
                            {application.message}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid gap-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <DetailBlock
                          label="Téléphone"
                          value={application.phone}
                          href={phoneHref}
                        />
                        <DetailBlock
                          label="WhatsApp"
                          value={application.whatsapp || application.phone}
                          href={whatsappHref}
                        />
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <DetailBlock
                          label="Email"
                          value={application.email || "Non renseigné"}
                          href={
                            application.email
                              ? `mailto:${application.email}`
                              : undefined
                          }
                        />
                        <DetailBlock
                          label="Adresse"
                          value={application.address || "Non renseignée"}
                        />
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {!error && filteredApplications.length === 0 && (
              <div className="rounded-[2.2rem] border border-dashed border-zinc-300 bg-white/75 p-10 text-center shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8B0000]">
                  Aucun résultat
                </p>
                <h3 className="mt-3 text-2xl font-black tracking-tight text-zinc-950">
                  Aucun dossier ne correspond aux filtres actuels.
                </h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  Essayez une autre recherche ou réinitialisez le statut
                  sélectionné pour revoir l'ensemble des candidatures.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
