import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

/*
  Next collects page data for API routes at build time, which imports this
  module. Constructing the client eagerly would therefore require DATABASE_URL
  to be present during the build — it isn't, and shouldn't need to be. So the
  client is created lazily on the first real request instead.

  Prisma 7 connects through a driver adapter rather than a URL in the schema.
*/
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export function getPrisma(): PrismaClient {
  // Next dev reloads modules on every edit; reuse the pool across reloads.
  if (globalForPrisma.prisma) return globalForPrisma.prisma;

  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Copy .env.example to .env and add your Postgres connection string.",
    );
  }

  const client = new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = client;

  return client;
}
