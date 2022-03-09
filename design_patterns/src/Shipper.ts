import { ShipperStrategy } from "../models/models.js";
import { AirEastShipper } from "./AirEastShipper.js";
import { ChicagoSprintShipper } from "./ChicagoSprintShipper.js";
import { PacificParcelShipper } from "./PacificParcelShipper.js";
import { ZipCodeValidator } from "./ZipCodeValidator.js";

export class Shipper {
    private strategy: ShipperStrategy;
    
    constructor(private fromZipCode: string){
        this.setStrategy(new AirEastShipper());
    }

    setStrategy(s: ShipperStrategy): void{
        this.strategy = s;
    }
    getProperShipper(): void{
        const validator = new ZipCodeValidator(this.fromZipCode);

        if (validator.valid(['4','5','6'])){
            this.setStrategy(new ChicagoSprintShipper());
        }
        else if(validator.valid(['7','8','9'])){
            this.setStrategy(new PacificParcelShipper());
        }
        else {
            this.setStrategy(new AirEastShipper());
        }
    }
    getCost(weight: number): number{
        return this.strategy.getCost(weight);
    }
}