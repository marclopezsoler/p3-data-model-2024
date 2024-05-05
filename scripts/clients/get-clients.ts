import { PrismaClient } from "@prisma/client";
import { getClients } from "../../src/clients";
const prisma = new PrismaClient();

const clients = await getClients();
console.log("List of clients:");

for (const { name, email } of clients) {
  console.log(`${name}, with email address ${email}`);
}