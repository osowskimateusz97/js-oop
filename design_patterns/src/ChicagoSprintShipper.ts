import { ShipperStrategy, ShipperType } from "../models/models.js";

export class ChicagoSprintShipper implements ShipperStrategy {

    getCost(weight: number): number {
        return weight * ShipperType.ChicagoSpring;
    }
}