import { Shipment } from "./Shipment.js";
export class Client {
    constructor(shipment) {
        this.shipment = shipment;
    }
    sendOrder() {
        const shipment = new Shipment(this.shipment);
        return shipment.send();
    }
}
