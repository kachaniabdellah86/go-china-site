import { prisma } from "@/lib/prisma";

const allowed = ["NEW", "CONTACTED", "ACCEPTED", "REJECTED"] as const;
type Status = (typeof allowed)[number];

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // ✅ important for Next 16

  const form = await req.formData();
  const status = String(form.get("status") || "");

  if (!allowed.includes(status as Status)) {
    return Response.json({ error: "Invalid status" }, { status: 400 });
  }

  await prisma.application.update({
    where: { id },
    data: { status },
  });

  return Response.redirect(new URL("/admin/applications", req.url), 303);
}