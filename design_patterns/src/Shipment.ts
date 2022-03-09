import { IShipDetails } from '../models/models.js';

export class Shipment{
    static id: number = 0;
    constructor(private state: IShipDetails){}

    static getShipmentId(): number{
        Shipment.id++;
        return Shipment.id;
    }
    ship(): number{
        return Shipment.id;
    }
}