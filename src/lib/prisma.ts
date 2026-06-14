import { PrismaClient } from "@/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import path from "path";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient;
};

function resolveDatabaseUrl() {
  const url = process.env.DATABASE_URL ?? "file:./dev.db";
  if (url.startsWith("file:") && !path.isAbsolute(url.replace("file:", ""))) {
    return `file:${path.join(process.cwd(), url.replace("file:", ""))}`;
  }
  return url;
}

function createPrismaClient() {
  const url = resolveDatabaseUrl();
  const adapter = new PrismaBetterSqlite3({ url });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
