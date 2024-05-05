import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type ManyClients = Prisma.ClientCreateManyInput;
export type SingleClient = Prisma.ClientCreateInput;

export const getClients = async (): Promise<ManyClients[]> => {
  return await prisma.client.findMany();
};

export async function getClientById(
  clientId: number
): Promise<SingleClient | null> {
  const result = await prisma.client.findFirst({
    where: { id: clientId },
  });
  return result === null ? null : result;
}

export async function getClientByEmail(
    clientEmail: string
  ): Promise<SingleClient | null> {
    const result = await prisma.client.findUnique({
      where: { email: clientEmail },
    });
    return result === null ? null : result;
  }
