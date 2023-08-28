import { prisma } from "@/lib/prisma";

export async function databaseConnected() {
  try {
    var connected = await prisma.$queryRaw`SELECT 1`;
    if (!connected) {
      return false;
    }
  } catch {
    return false;
  }
  return true;
}
