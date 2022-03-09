import { ShipperStrategy, ShipperType } from "../models/models.js";

export class PacificParcelShipper implements ShipperStrategy {

    getCost(weight: number): number {
        return weight * ShipperType.PacificParcel;
    }
}