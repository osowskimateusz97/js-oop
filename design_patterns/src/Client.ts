import { IShipDetails } from "../models/models.js";
import { Shipment } from "./Shipment.js";

export class Client{

    constructor(private shipment: IShipDetails){
    }
    sendOrder(){
        const shipment = new Shipment(this.shipment);
        return shipment.send();
    }
}