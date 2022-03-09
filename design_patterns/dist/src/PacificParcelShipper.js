import { ShipperType } from "../models/models.js";
export class PacificParcelShipper {
    getCost(weight) {
        return weight * ShipperType.PacificParcel;
    }
}
