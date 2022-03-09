export class Shipment {
    constructor(state) {
        this.state = state;
    }
    static getShipmentId() {
        Shipment.id++;
        return Shipment.id;
    }
    ship() {
        return Shipment.id;
    }
}
Shipment.id = 0;
