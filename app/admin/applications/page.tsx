import React from "react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const statusOptions = ["ALL", "NEW", "CONTACTED", "ACCEPTED", "REJECTED"] as const;
type StatusFilter = (typeof statusOptions)[number];

const statusLabel: Record<Exclude<StatusFilter, "ALL">, string> = {
  NEW: "New",
  CONTACTED: "Contacted",
  ACCEPTED: "Accepted",
  REJECTED: "Rejected",
};

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

function metricCount(applications: { status: string }[], status: Exclude<StatusFilter, "ALL">) {
  return applications.filter((a) => a.status === status).length;
}

function resolveFilter(value?: string): StatusFilter {
  return statusOptions.includes((value || "").toUpperCase() as StatusFilter)
    ? ((value || "").toUpperCase() as StatusFilter)
    : "ALL";
}

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const params = await searchParams;
  const currentFilter = resolveFilter(params.status);

  const applications = await prisma.application.findMany({
    orderBy: { createdAt: "desc" },
  });

  const filteredApplications =
    currentFilter === "ALL"
      ? applications
      : applications.filter((a) => a.status === currentFilter);

  const total = applications.length;
  const newCount = metricCount(applications, "NEW");
  const contactedCount = metricCount(applications, "CONTACTED");
  const acceptedCount = metricCount(applications, "ACCEPTED");
  const rejectedCount = metricCount(applications, "REJECTED");

  return (
    <div className="min-h-screen bg-zinc-50 p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
          <h1 className="text-3xl font-bold text-zinc-900">Admin · Applications</h1>
          <p className="mt-2 text-sm text-zinc-600">
            Organize applicants, update status, and delete records you no longer need.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          <MetricCard label="Total" value={total} tone="zinc" />
          <MetricCard label="New" value={newCount} tone="blue" />
          <MetricCard label="Contacted" value={contactedCount} tone="amber" />
          <MetricCard label="Accepted" value={acceptedCount} tone="emerald" />
          <MetricCard label="Rejected" value={rejectedCount} tone="rose" />
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-zinc-500">Filter by status</p>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((status) => {
              const active = status === currentFilter;
              const href = status === "ALL" ? "/admin/applications" : `/admin/applications?status=${status}`;

              return (
                <Link
                  key={status}
                  href={href}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    active
                      ? "border-zinc-900 bg-zinc-900 text-white"
                      : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300"
                  }`}
                >
                  {status === "ALL" ? "All" : statusLabel[status]}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
          <table className="w-full text-sm">
            <thead className="bg-zinc-100/80 text-left text-zinc-700">
              <tr>
                <th className="p-4">Applicant</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Profile</th>
                <th className="p-4">Goal</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>

            <tbody>
              {filteredApplications.map((a) => {
                const wa = cleanPhone(a.whatsapp || a.phone);
                const waLink = wa ? `https://wa.me/${wa.replace("+", "")}` : null;

                return (
                  <React.Fragment key={a.id}>
                    <tr className="border-t border-zinc-100 align-top">
                      <td className="p-4">
                        <div className="font-semibold text-zinc-900">{a.fullName}</div>
                        <div className="text-xs text-zinc-500">{a.city}</div>
                      </td>

                      <td className="p-4">
                        <div className="text-zinc-900">{a.phone}</div>
                        <div className="text-xs text-zinc-600">{a.email || "No email"}</div>
                      </td>

                      <td className="p-4">
                        <div className="text-zinc-900">{a.studyLevel}</div>
                        <div className="text-xs text-zinc-600">{a.fieldOfStudy || "—"}</div>
                      </td>

                      <td className="p-4">{a.objective}</td>

                      <td className="p-4">
                        <StatusSelect id={a.id} value={a.status} />
                      </td>

                      <td className="p-4">
                        <div className="flex flex-wrap gap-2">
                          {waLink ? (
                            <a
                              className="rounded-full bg-zinc-900 px-3 py-1.5 text-white hover:bg-zinc-800"
                              href={waLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              WhatsApp
                            </a>
                          ) : (
                            <span className="text-zinc-400">No WhatsApp</span>
                          )}
                          <DeleteButton id={a.id} />
                        </div>
                      </td>

                      <td className="p-4 text-zinc-600">{formatDate(a.createdAt)}</td>
                    </tr>

                    <tr className="border-t border-zinc-100 bg-zinc-50/70">
                      <td className="p-4" colSpan={7}>
                        <details className="group">
                          <summary className="cursor-pointer select-none text-sm font-medium text-zinc-800">
                            View full details
                          </summary>
                          <div className="mt-3 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                            <InfoCard label="Address" value={a.address} />
                            <InfoCard label="WhatsApp (raw)" value={a.whatsapp} />
                            <InfoCard label="Email" value={a.email} />
                            <InfoCard label="City" value={a.city} />
                            <InfoCard label="Study level" value={a.studyLevel} />
                            <InfoCard label="Field of study" value={a.fieldOfStudy} />
                            <InfoCard label="Objective" value={a.objective} />
                            <InfoCard label="Status" value={statusLabel[a.status as keyof typeof statusLabel] || a.status} />
                            <InfoCard label="Application ID" value={a.id} mono />
                            <div className="rounded-2xl border border-zinc-100 bg-white p-4 md:col-span-2 xl:col-span-3">
                              <p className="text-xs font-medium text-zinc-500">Message</p>
                              <p className="mt-1 whitespace-pre-wrap text-sm">{a.message || "—"}</p>
                            </div>
                          </div>
                        </details>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}

              {filteredApplications.length === 0 && (
                <tr>
                  <td className="p-6 text-zinc-500" colSpan={7}>
                    No applications found for this filter.
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

function MetricCard({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "zinc" | "blue" | "amber" | "emerald" | "rose";
}) {
  const toneClass: Record<typeof tone, string> = {
    zinc: "border-zinc-200 bg-white",
    blue: "border-blue-200 bg-blue-50",
    amber: "border-amber-200 bg-amber-50",
    emerald: "border-emerald-200 bg-emerald-50",
    rose: "border-rose-200 bg-rose-50",
  };

  return (
    <div className={`rounded-2xl border p-4 ${toneClass[tone]}`}>
      <p className="text-xs font-medium text-zinc-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-zinc-900">{value}</p>
    </div>
  );
}

function InfoCard({
  label,
  value,
  mono = false,
}: {
  label: string;
  value?: string | null;
  mono?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white p-4">
      <p className="text-xs font-medium text-zinc-500">{label}</p>
      <p className={`mt-1 text-sm ${mono ? "font-mono text-xs text-zinc-600" : ""}`}>{value || "—"}</p>
    </div>
  );
}

function StatusSelect({ id, value }: { id: string; value: string }) {
  return (
    <form action={`/api/admin/applications/${id}/status`} method="POST" className="flex items-center gap-2">
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

      <button className="rounded-full border border-zinc-200 px-3 py-2 text-xs hover:bg-zinc-50">Save</button>
    </form>
  );
}

function DeleteButton({ id }: { id: string }) {
  return (
    <form action={`/api/admin/applications/${id}/delete`} method="POST">
      <button
        type="submit"
        className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-red-700 hover:bg-red-100"
      >
        Delete
      </button>
    </form>
  );
}
