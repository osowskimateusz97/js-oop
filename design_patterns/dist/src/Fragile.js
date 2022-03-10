import { ShipmentDecorator } from "./ShipmentDecorator";
export class Fragile extends ShipmentDecorator {
    getDescription() {
        return this.wrappee.getDescription() + '** MARK FRAGILE ** ';
    }
}
