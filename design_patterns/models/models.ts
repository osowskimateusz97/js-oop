export interface IShipDetails{
    shipmentId?: number,
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    marks: string[]
}
export enum GuiTriggerTypes {
    shipOrder = "shipOrder",
}
export enum LetterShipperType{
    AirEast = 0.39,
    ChicagoSprint = 0.42,
    PacificParcel = 0.51,
    
}
export enum PackageShipperType{
    AirEast = 0.25,
    ChicagoSprint = 0.20,
    PacificParcel = 0.19,
}
export enum OversizeShipperType{
    AirEast = 10,
    PacificParcel = 0.02,
    ChicagoSprint = 0.20,
}

export enum PackageWeight {
    Letter = 15,
    Package = 160,
}

export enum ShipperLocation {
    Chicago = 'Chicago',
    Pacific = 'Pacific',
    AirEast = 'AirEast',
} 
export enum Marks {
    Fragile = 'fragile',
    NotLeave = 'notLeave',
    ReceiptRequested = 'receiptRequested',
    NoMarks = 'There is no marks.'
}