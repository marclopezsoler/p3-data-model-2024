import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const clients = await prisma.client.findMany();
    console.log("Clients: ", clients);
  } catch (error) {
    console.log(error);
  }
}

main();
