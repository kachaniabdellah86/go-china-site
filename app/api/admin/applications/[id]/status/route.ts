import { isDatabaseUnavailable } from "@/lib/database-errors";
import { prisma } from "@/lib/prisma";

const allowed = ["NEW", "CONTACTED", "ACCEPTED", "REJECTED"] as const;
type Status = (typeof allowed)[number];

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const form = await req.formData();
  const status = String(form.get("status") || "");

  if (!allowed.includes(status as Status)) {
    return Response.json({ error: "Invalid status" }, { status: 400 });
  }

  try {
    await prisma.application.update({
      where: { id },
      data: { status },
    });
  } catch (error) {
    const url = new URL("/admin/applications", req.url);
    url.searchParams.set(
      "notice",
      isDatabaseUnavailable(error) ? "db-unavailable" : "save-failed"
    );

    return Response.redirect(url, 303);
  }

  return Response.redirect(new URL("/admin/applications", req.url), 303);
}
