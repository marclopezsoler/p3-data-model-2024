import { getOrderById } from "../../src/orders";

const order = Number(process.argv[2]);

const orderId = await getOrderById(order);

if (orderId) {
  console.log("Order:");
  console.log(orderId);
} else {
  console.log("No order found with that ID.");
}
