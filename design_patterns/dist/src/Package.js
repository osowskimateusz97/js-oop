import { PackageShipperType, ShipperLocation } from "../models/models.js";
import { Size } from "./Size.js";
export class Package extends Size {
    constructor(shiperType) {
        super();
        this.shiperType = shiperType;
    }
    totalCost(weight) {
        if (this.shiperType === ShipperLocation.AirEast) {
            return weight * PackageShipperType.AirEast;
        }
        else if (this.shiperType === ShipperLocation.Pacific) {
            return weight * PackageShipperType.PacificParcel;
        }
        else {
            return weight * PackageShipperType.ChicagoSprint;
        }
    }
}
