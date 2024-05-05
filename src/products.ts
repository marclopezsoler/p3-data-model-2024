import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type ManyProducts = Prisma.ProductCreateManyInput;
export type SingleProduct = Prisma.ProductCreateInput;

export const getProducts = async (): Promise<ManyProducts[]> => {
  return await prisma.product.findMany();
};

export async function getProductById(
  productId: number
): Promise<SingleProduct | null> {
  const result = await prisma.product.findFirst({
    where: { id: productId },
  });
  return result === null ? null : result;
}