import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type ManySellers = Prisma.SellerCreateManyInput;
export type SingleSeller = Prisma.SellerCreateInput;

export const getSellers = async (): Promise<ManySellers[]> => {
  return await prisma.seller.findMany();
};

export async function getSellerById(
  sellerId: number
): Promise<SingleSeller | null> {
  const result = await prisma.seller.findFirst({
    where: { id: sellerId },
  });
  return result === null ? null : result;
}

export async function getSellerByEmail(
    sellerEmail: string
  ): Promise<SingleSeller | null> {
    const result = await prisma.seller.findUnique({
      where: { email: sellerEmail },
    });
    return result === null ? null : result;
  }
