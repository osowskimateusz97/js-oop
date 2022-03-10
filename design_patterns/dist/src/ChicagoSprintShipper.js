import { ShipperType } from "../models/models.js";
export class ChicagoSprintShipper {
    getCost(weight) {
        return weight * ShipperType.ChicagoSprint;
    }
}
