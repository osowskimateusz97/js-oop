import { ShipperType } from "../models/models.js";
export class AirEastShipper {
    getCost(weight) {
        return weight * ShipperType.AirEast;
    }
}
