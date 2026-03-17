import { isDatabaseUnavailable } from "@/lib/database-errors";
import AdminApplicationsDashboard from "@/components/admin/AdminApplicationsDashboard";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ notice?: string }>;
}) {
  const { notice } = await searchParams;
  let error: string | null = null;
  let noticeMessage: string | null = null;
  let applications: {
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
  }[] = [];

  try {
    const records = await prisma.application.findMany({
      orderBy: { createdAt: "desc" },
    });

    applications = records.map((record) => ({
      ...record,
      createdAt: record.createdAt.toISOString(),
    }));
  } catch (databaseError) {
    error = isDatabaseUnavailable(databaseError)
      ? "Connexion à la base de données indisponible. Vérifiez DATABASE_URL ainsi que les identifiants Supabase."
      : "Impossible de charger les demandes pour le moment. Réessayez dans quelques instants.";
  }

  if (notice === "db-unavailable") {
    noticeMessage =
      "La base de données est indisponible pour le moment. Le changement de statut n'a pas été enregistré.";
  } else if (notice === "save-failed") {
    noticeMessage =
      "Impossible d'enregistrer cette mise à jour pour le moment. Réessayez dans quelques instants.";
  }

  return (
    <AdminApplicationsDashboard
      applications={applications}
      error={error}
      notice={noticeMessage}
      updatedAt={new Date().toISOString()}
    />
  );
}
