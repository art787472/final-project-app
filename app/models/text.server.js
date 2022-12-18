import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTexts(query) {
  return prisma.text.findMany({
    where: {
      OR: [{ zh: { contains: query } }, { en: { contains: query } }],
    },
    include: { article: true },
  });
}
