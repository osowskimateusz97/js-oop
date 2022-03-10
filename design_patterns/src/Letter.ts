import { LetterShipperType, ShipperLocation } from "../models/models.js";
import { Size } from "./Size.js";

export class Letter extends Size{
        constructor(private shiperType: ShipperLocation){
            super();
        }
        totalCost(weight: number): number {
            if(this.shiperType === ShipperLocation.Pacific){
                return weight * LetterShipperType.PacificParcel
            }
            else if (this.shiperType === ShipperLocation.AirEast){
                return weight * LetterShipperType.AirEast
            }
            else {
                return weight * LetterShipperType.ChicagoSprint
            }
        }
    }