import { LetterShipperType, ShipperLocation } from "../models/models.js";
import { Size } from "./Size.js";
export class Letter extends Size {
    constructor(shiperType) {
        super();
        this.shiperType = shiperType;
    }
    totalCost(weight) {
        if (this.shiperType === ShipperLocation.Pacific) {
            return weight * LetterShipperType.PacificParcel;
        }
        else if (this.shiperType === ShipperLocation.AirEast) {
            return weight * LetterShipperType.AirEast;
        }
        else {
            return weight * LetterShipperType.ChicagoSprint;
        }
    }
}
