import { getClientById } from "../../src/clients";
import { getOrders } from "../../src/orders";
import { getProductById } from "../../src/products";
import { getSellerById } from "../../src/sellers";

const orders = await getOrders();
console.log("List of orders:");

for (const order of orders) {
  const seller = await getSellerById(order.sellerId);
  const client = await getClientById(order.clientId);
  const product = await getProductById(order.productId);

  if (seller && client) {
    console.log(
      `ORDER ${order.id}: Client: ${client.name} | Seller: ${seller.name} | Product ID: ${product?.name} | Status: ${order.status}`
    );
  } else {
    console.error(`Couldn't get order with ID: ${order.id}`);
  }
}
