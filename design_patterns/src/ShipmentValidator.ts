export class ShipmentValidator {
    constructor(private weight: number){}
    
    isBigger(weightCompare: number): boolean{
            return weightCompare > this.weight;
    }
}