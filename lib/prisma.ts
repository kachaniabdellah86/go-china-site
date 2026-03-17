import { Prisma, PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient;
};

const prismaOptions: Prisma.PrismaClientOptions | undefined =
  process.env.PRISMA_LOG_ERRORS === "1" ? { log: ["error"] } : undefined;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient(prismaOptions);

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
