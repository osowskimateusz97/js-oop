import { ShipperStrategy, ShipperType } from "../models/models.js";
 
export class AirEastShipper implements ShipperStrategy {
   
    getCost(weight: number): number {
        return weight * ShipperType.AirEast;
    }

}