import { getSellerByEmail } from "../../src/sellers";

const seller = String(process.argv[2]);

const sellerEmail = await getSellerByEmail(seller);

if (sellerEmail) {
  console.log("Seller:");
  console.log(sellerEmail);
} else {
  console.log("No seller found with that email.");
}
