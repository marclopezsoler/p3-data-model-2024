import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  try {
    const users = [
      { email: "john.smith@gmail.com", name: "John Smith" },
      { email: "emily.jones@gmail.com", name: "Emily Jones" },
      { email: "michael.davis@gmail.com", name: "Michael Davis" },
      { email: "sarah.wilson@gmail.com", name: "Sarah Wilson" },
      { email: "david.brown@gmail.com", name: "David Brown" },
      { email: "jessica.miller@gmail.com", name: "Jessica Miller" },
      { email: "william.taylor@gmail.com", name: "William Taylor" },
      { email: "olivia.jackson@gmail.com", name: "Olivia Jackson" },
      { email: "james.thomas@gmail.com", name: "James Thomas" },
      { email: "emma.white@gmail.com", name: "Emma White" },
      { email: "alexander.harris@gmail.com", name: "Alexander Harris" },
      { email: "samantha.thompson@gmail.com", name: "Samantha Thompson" },
      { email: "nathan.robinson@gmail.com", name: "Nathan Robinson" },
      { email: "mia.evans@gmail.com", name: "Mia Evans" },
      { email: "jacob.perez@gmail.com", name: "Jacob Perez" },
      { email: "ava.cooper@gmail.com", name: "Ava Cooper" },
      { email: "ethan.hall@gmail.com", name: "Ethan Hall" },
      { email: "isabella.lopez@gmail.com", name: "Isabella Lopez" },
      { email: "matthew.young@gmail.com", name: "Matthew Young" },
      { email: "amelia.lewis@gmail.com", name: "Amelia Lewis" },
      { email: "charlotte.clark@gmail.com", name: "Charlotte Clark" },
      { email: "ryan.hughes@gmail.com", name: "Ryan Hughes" },
      { email: "grace.morris@gmail.com", name: "Grace Morris" },
      { email: "luke.russell@gmail.com", name: "Luke Russell" },
      { email: "zoey.peterson@gmail.com", name: "Zoey Peterson" },
    ];

    for (const userData of users) {
      await prisma.client.create({
        data: userData,
      });
    }

    console.log("Seed data added successfully");
    
  } catch (error) {
    console.error("Error adding seed data:", error);
  }
}

main();
