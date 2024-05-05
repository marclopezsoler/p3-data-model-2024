import { getProductById } from "../../src/products";

const product = Number(process.argv[2]);

const productId = await getProductById(product);

if (productId) {
  console.log("Product:");
  console.log(productId);
} else {
  console.log("No product found with that ID.");
}
