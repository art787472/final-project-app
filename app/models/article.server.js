import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getArticles() {
  return prisma.articles.findMany({
    take: 5,
  });
}
