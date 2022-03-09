import { AirEastShipper } from "./AirEastShipper.js";
import { ChicagoSprintShipper } from "./ChicagoSprintShipper.js";
import { PacificParcelShipper } from "./PacificParcelShipper.js";
import { ZipCodeValidator } from "./ZipCodeValidator.js";
export class Shipper {
    constructor(fromZipCode) {
        this.fromZipCode = fromZipCode;
        this.setStrategy(new AirEastShipper());
    }
    setStrategy(s) {
        this.strategy = s;
    }
    getProperShipper() {
        const validator = new ZipCodeValidator(this.fromZipCode);
        if (validator.valid(['4', '5', '6'])) {
            this.setStrategy(new ChicagoSprintShipper());
        }
        else if (validator.valid(['7', '8', '9'])) {
            this.setStrategy(new PacificParcelShipper());
        }
        else {
            this.setStrategy(new AirEastShipper());
        }
    }
    getCost(weight) {
        return this.strategy.getCost(weight);
    }
}
