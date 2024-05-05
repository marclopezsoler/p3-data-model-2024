import { getProducts } from "../../src/products";
import { getSellerById } from "../../src/sellers";

const products = await getProducts();
console.log("List of products:");

for (const product of products) {
  const seller = await getSellerById(product.sellerId);
  console.log(`PRODUCT ${product.id}: ${product.name} - ${product.price}. ${product.description} | Color: ${product.color} | Brand: ${seller?.name}`);
}
