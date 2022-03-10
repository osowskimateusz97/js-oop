export class BasicMark {
    getDescription() {
        return '';
    }
}
class ShipmentDecorator {
    constructor(code) {
        this.wrappee = code;
    }
    getDescription() {
        return this.wrappee.getDescription();
    }
}
export class Fragile extends ShipmentDecorator {
    getDescription() {
        return this.wrappee.getDescription() + ' ** MARK FRAGILE ** ';
    }
}
export class DoNotLeave extends ShipmentDecorator {
    getDescription() {
        return this.wrappee.getDescription() + ' ** MARK DO NOT LEAVE IF ADDRESS NOT AT HOME ** ';
    }
}
export class ReceiptRequested extends ShipmentDecorator {
    getDescription() {
        return this.wrappee.getDescription() + ' ** MARK RETURN RECEIPT REQUESTED ** ';
    }
}
