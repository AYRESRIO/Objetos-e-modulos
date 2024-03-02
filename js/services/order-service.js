import { shipment } from "./shipping-service";

export function total(order){

    return order.basic - (order.basic*(order.discount/100)) +shipment;

}

