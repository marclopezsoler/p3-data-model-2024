import { getSellerById } from "../../src/sellers";

const seller = Number(process.argv[2]);

const sellerId = await getSellerById(seller);

if (sellerId) {
  console.log("Seller:");
  console.log(sellerId);
} else {
  console.log("No seller found with that ID.");
}
