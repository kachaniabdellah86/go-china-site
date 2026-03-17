import { Prisma } from "@prisma/client";

export function isDatabaseUnavailable(error: unknown) {
  if (error instanceof Prisma.PrismaClientInitializationError) {
    return true;
  }

  const message = error instanceof Error ? error.message : String(error);

  return (
    message.includes("Tenant or user not found") ||
    message.includes("Can't reach database server") ||
    message.includes("timeout") ||
    message.includes("ECONNRESET") ||
    message.includes("Connection terminated unexpectedly")
  );
}
