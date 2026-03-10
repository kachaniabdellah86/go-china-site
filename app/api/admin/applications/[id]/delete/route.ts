import { prisma } from "@/lib/prisma";

async function removeApplication(id: string) {
  try {
    await prisma.application.delete({ where: { id } });
    return { ok: true };
  } catch {
    return { ok: false };
  }
}

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  await removeApplication(id);
  return Response.redirect(new URL("/admin/applications", req.url), 303);
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const result = await removeApplication(id);

  if (!result.ok) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json({ ok: true });
}
