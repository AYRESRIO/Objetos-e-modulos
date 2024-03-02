import * as orderService from "./services/order-service.js";
import Order from "./models/order.js";

const data = document.getElementById("orderEntry").innerHTML.split("\n");

const order1 = new Order(data[0], Number(data[1]), Number(data[2]));
const order2 =  new Order(data[3],Number(data[4]), Number(data[5]));
const order3 = new Order(data[6], Number(data[7]), Number(data[8]));

console.log("EXEMPLO 1:");
console.log("Order Code = " + order1.code);
console.log("Total Value =   R$ " + orderService.total(order1).toFixed(2));

console.log("");

console.log("EXEMPLO 2:");
console.log("Order Code = " + order2.code);
console.log("Total Value =   R$ " + orderService.total(order2).toFixed(2));

console.log("");

console.log("EXEMPLO 3:");
console.log("Order Code = " + order3.code);
console.log("Total Value =   R$ " + orderService.total(order3).toFixed(2));








