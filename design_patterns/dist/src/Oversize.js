import { OversizeShipperType, ShipperLocation } from "../models/models.js";
import { Size } from "./Size.js";
export class Oversize extends Size {
    constructor(shiperType) {
        super();
        this.shiperType = shiperType;
    }
    totalCost(weight) {
        if (this.shiperType === ShipperLocation.Pacific) {
            return weight * OversizeShipperType.PacificParcel;
        }
        else if (this.shiperType === ShipperLocation.AirEast) {
            return (weight * OversizeShipperType.ChicagoSprint) + OversizeShipperType.AirEast;
        }
        return weight * OversizeShipperType.ChicagoSprint;
    }
}
