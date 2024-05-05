import { getClientById } from "../../src/clients";

const client = Number(process.argv[2]);

const clientId = await getClientById(client);

if (clientId) {
  console.log("Client:");
  console.log(clientId);
} else {
  console.log("No client found with that ID.");
}
