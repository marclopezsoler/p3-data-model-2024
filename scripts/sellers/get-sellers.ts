import { PrismaClient } from "@prisma/client";
import { getSellers } from "../../src/sellers";

const sellers = await getSellers();
console.log("List of sellers:");

for (const { name, email } of sellers) {
  console.log(`${name}, with email address ${email}`);
}
