import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.client.create({
    data: {
      email: "marcls.arbucies@gmail.com",
      name: "Marc López",
    },
  });

  console.log('Users created:', user1);
}

main();