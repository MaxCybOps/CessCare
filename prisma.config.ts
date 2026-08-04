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
      Read directly rather than via Prisma's env() helper, which throws on a
      missing variable — that would break `prisma generate`, which needs no
      database at all. Commands that do need one (db push, studio) still fail
      with a clear message when DATABASE_URL is absent.
    */
    url: process.env.DATABASE_URL,
  },
});
