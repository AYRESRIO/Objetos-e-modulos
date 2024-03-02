export function shipment(order){

    if(basic<100.00){

        return 20.00;
    }
    else if(basic==100.00 && basic<200.00){

        return 12.00;
    }
    else{

        return 0.00;
    }

}