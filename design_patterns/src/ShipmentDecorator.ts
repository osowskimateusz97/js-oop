interface SpecialCodes {
    getDescription(): string;
}

export class BasicMark implements SpecialCodes{
    getDescription(): string {
        return ''
    }
}


class ShipmentDecorator implements SpecialCodes {
    protected wrappee: SpecialCodes;

    constructor(code: SpecialCodes){
        this.wrappee = code;
    }

    public getDescription(){
        return this.wrappee.getDescription();
    }
} 

export class Fragile extends ShipmentDecorator{
    public getDescription(): string {
        return this.wrappee.getDescription() + ' ** MARK FRAGILE ** '
    }
}

export class DoNotLeave extends ShipmentDecorator{
    public getDescription(): string {
        return this.wrappee.getDescription() + ' ** MARK DO NOT LEAVE IF ADDRESS NOT AT HOME ** '
    }
}

export class ReceiptRequested extends ShipmentDecorator{
    public getDescription(): string {
        return this.wrappee.getDescription() + ' ** MARK RETURN RECEIPT REQUESTED ** '
    }
}