export function shipment(order){
    
    const orderValue = order.basic;

    if(orderValue < 100.00){

        return 20.00;
    }
    else if(orderValue < 200.00){

        return 12.00;
    }
    else{

        return 0.00;
    }

}