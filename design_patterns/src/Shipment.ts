import { IShipDetails, Marks, PackageWeight, ShipperLocation } from '../models/models.js';
import { Letter } from './Letter.js';
import { Oversize } from './Oversize.js';
import { Package } from './Package.js';
import { BasicMark,  DoNotLeave, Fragile, ReceiptRequested } from './ShipmentDecorator.js';
import { ShipmentValidator } from './ShipmentValidator.js';
import { Shipper } from './Shipper.js';

export class Shipment{
    static id: number = 0;
    constructor(private state: IShipDetails){
    }
    send(){
        const { fromZipCode, weight } = this.state;
        const shipper = new Shipper(fromZipCode);
        const shipmentType  = this.getShipmentType(shipper.location);
        const totalCost = shipmentType.totalCost(weight); 
        const shipmentId = Shipment.getShipmentId();
        const generatedMarks = this.getMarks();
        return {
            ...this.state,
            shipmentId,
            marks:generatedMarks,
            cost: totalCost,
        }

    }
    private getMarks(): string{
        if(!this.state.marks) return Marks.NoMarks;
        let marks = new BasicMark();
        if(this.state.marks.includes(Marks.Fragile)){
            marks = new Fragile(marks)
        }
        if(this.state.marks.includes(Marks.NotLeave)){
            marks = new DoNotLeave(marks)
        }
        if(this.state.marks.includes(Marks.ReceiptRequested)){
            marks = new ReceiptRequested(marks)
        }
        return marks.getDescription();
    }
    private getShipmentType(location: ShipperLocation){
        const validator = new ShipmentValidator(this.state.weight);
        if(validator.isBigger(PackageWeight.Package)){
            return new Oversize(location);
        }
        else if (validator.isBigger(PackageWeight.Letter)){
            return new Package(location);
        }
        return new Letter(location);
    }
    static getShipmentId(): number{
        Shipment.id++;
        return Shipment.id;
    }
}