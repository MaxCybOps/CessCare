import "dotenv/config";
import { defineConfig } from "prisma/config";

/*
  Prisma 7 no longer reads the datasource URL from schema.prisma, and no longer
  auto-loads .env — hence the dotenv import above. This config is used by the
  CLI (db push, studio, migrate); the running app connects through the driver
  adapter in lib/prisma.ts instead.
*/
export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    /*
      CLI commands (db push, studio, migrate) must use Supabase's DIRECT
      connection on port 5432 — schema changes cannot run through the
      transaction pooler the app uses. Falls back to DATABASE_URL for plain
      Postgres providers where one URL serves both purposes.

      Read directly rather than via Prisma's env() helper, which throws on a
      missing variable — that would break `prisma generate`, which needs no
      database at all.
    */
    url: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
  },
});
