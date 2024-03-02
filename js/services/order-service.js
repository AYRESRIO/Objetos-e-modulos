import * as shippingService from './shipping-service.js';

export function total(order){

const orderValue = order.basic;
const deliveryFee = shippingService.shipment(order);
const orderDiscount = orderValue * (order.discount/100);

return orderValue - orderDiscount + deliveryFee;

}

