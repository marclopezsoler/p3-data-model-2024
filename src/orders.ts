import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export type ManyOrders = Prisma.OrderCreateManyInput;
export type SingleOrder = Prisma.OrderCreateInput;

export const getOrders = async (): Promise<ManyOrders[]> => {
  return await prisma.order.findMany();
};

export async function getOrderById(
  orderId: number
): Promise<SingleOrder | null> {
  const result = await prisma.order.findFirst({
    where: { id: orderId },
  });
  return result === null ? null : result;
}
