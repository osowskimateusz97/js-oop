export class ShipmentValidator {
    constructor(weight) {
        this.weight = weight;
    }
    isBigger(weightCompare) {
        return weightCompare > this.weight;
    }
}
