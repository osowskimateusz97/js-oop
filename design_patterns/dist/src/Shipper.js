import { ShipperLocation } from "../models/models.js";
import { ZipCodeValidator } from "./ZipCodeValidator.js";
export class Shipper {
    constructor(fromZipCode) {
        this.fromZipCode = fromZipCode;
        this.getProperShipper();
    }
    get location() {
        return this._location;
    }
    set location(s) {
        this._location = s;
    }
    getProperShipper() {
        const validator = new ZipCodeValidator(this.fromZipCode);
        if (validator.valid(['4', '5', '6'])) {
            this.location = ShipperLocation.Chicago;
        }
        else if (validator.valid(['7', '8', '9'])) {
            this.location = ShipperLocation.Pacific;
        }
        else {
            this.location = ShipperLocation.AirEast;
        }
    }
}
