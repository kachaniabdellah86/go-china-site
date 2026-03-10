import React from "react";
import { prisma } from "@/lib/prisma";

function cleanPhone(phone?: string | null) {
  if (!phone) return "";
  return phone.replace(/[^\d+]/g, "");
}

function formatDate(d: Date) {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(d);
}

export default async function ApplicationsPage() {
  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">Applications</h1>
            <p className="mt-1 text-sm text-zinc-600">
              Liste des demandes reçues ({applications.length})
            </p>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-zinc-100 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-zinc-50 text-left">
              <tr>
                <th className="p-4">Nom</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Profil</th>
                <th className="p-4">Objectif</th>
                <th className="p-4">Statut</th>
                <th className="p-4">WhatsApp</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((a) => {
                const wa = cleanPhone(a.whatsapp || a.phone);
                const waLink = wa ? `https://wa.me/${wa.replace("+", "")}` : null;

                return (
                  <React.Fragment key={a.id}>
                    <tr className="border-t border-zinc-100 align-top">
                      <td className="p-4">
                        <div className="font-medium">{a.fullName}</div>
                        <div className="text-xs text-zinc-500">{a.city}</div>
                      </td>

                      <td className="p-4">
                        <div className="text-zinc-900">{a.phone}</div>
                        <div className="text-xs text-zinc-600">
                          {a.email ? a.email : <span className="text-zinc-400">No email</span>}
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="text-zinc-900">{a.studyLevel}</div>
                        <div className="text-xs text-zinc-600">
                          {a.fieldOfStudy ? a.fieldOfStudy : <span className="text-zinc-400">—</span>}
                        </div>
                      </td>

                      <td className="p-4">{a.objective}</td>

                      <td className="p-4">
                        <StatusSelect id={a.id} value={a.status} />
                      </td>

                      <td className="p-4">
                        {waLink ? (
                          <a
                            className="inline-flex items-center rounded-full bg-zinc-900 px-3 py-1.5 text-white hover:bg-zinc-800"
                            href={waLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Ouvrir
                          </a>
                        ) : (
                          <span className="text-zinc-400">—</span>
                        )}
                      </td>

                      <td className="p-4 text-zinc-600">{formatDate(a.createdAt)}</td>
                    </tr>

                    <tr className="border-t border-zinc-100 bg-zinc-50/40">
                      <td className="p-4" colSpan={7}>
                        <details className="group">
                          <summary className="cursor-pointer select-none text-sm font-medium text-zinc-800">
                            Détails
                            <span className="ml-2 text-xs text-zinc-500 group-open:hidden">
                              (ouvrir)
                            </span>
                          </summary>

                          <div className="mt-3 grid gap-3 md:grid-cols-2">
                            <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                              <p className="text-xs font-medium text-zinc-500">Adresse</p>
                              <p className="mt-1 text-sm">
                                {a.address ? a.address : <span className="text-zinc-400">—</span>}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-zinc-100 bg-white p-4">
                              <p className="text-xs font-medium text-zinc-500">WhatsApp (texte)</p>
                              <p className="mt-1 text-sm">
                                {a.whatsapp ? a.whatsapp : <span className="text-zinc-400">—</span>}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-zinc-100 bg-white p-4 md:col-span-2">
                              <p className="text-xs font-medium text-zinc-500">Message</p>
                              <p className="mt-1 text-sm whitespace-pre-wrap">
                                {a.message ? a.message : <span className="text-zinc-400">—</span>}
                              </p>
                            </div>

                            <div className="rounded-2xl border border-zinc-100 bg-white p-4 md:col-span-2">
                              <p className="text-xs font-medium text-zinc-500">ID</p>
                              <p className="mt-1 text-xs font-mono text-zinc-600">{a.id}</p>
                            </div>
                          </div>
                        </details>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}

              {applications.length === 0 && (
                <tr>
                  <td className="p-6 text-zinc-500" colSpan={7}>
                    Aucune demande pour le moment.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatusSelect({ id, value }: { id: string; value: string }) {
  return (
    <form
      action={`/api/admin/applications/${id}/status`}
      method="POST"
      className="flex items-center gap-2"
    >
      <select
        name="status"
        defaultValue={value}
        className="rounded-2xl border border-zinc-200 bg-white px-3 py-2"
      >
        <option value="NEW">New</option>
        <option value="CONTACTED">Contacted</option>
        <option value="ACCEPTED">Accepted</option>
        <option value="REJECTED">Rejected</option>
      </select>

      <button className="rounded-full border border-zinc-200 px-3 py-2 text-xs hover:bg-zinc-50">
        Save
      </button>
    </form>
  );
}