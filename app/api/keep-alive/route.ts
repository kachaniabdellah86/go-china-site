import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

// Supabase's free plan pauses a project after about a week without database activity, and a
// paused database makes every application fail. A Vercel cron (vercel.json) calls this once a
// day so the database always has recent activity. When CRON_SECRET is set in Vercel, only the
// cron (which sends it as a bearer token) can call it.
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }

  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 503 });
  }
}
