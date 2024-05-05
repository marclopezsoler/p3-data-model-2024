import { getClientByEmail, getClientById } from "../../src/clients";

const client = String(process.argv[2]);

const clientEmail = await getClientByEmail(client);

if (clientEmail) {
  console.log("Client:");
  console.log(clientEmail);
} else {
  console.log("No client found with that email.");
}
