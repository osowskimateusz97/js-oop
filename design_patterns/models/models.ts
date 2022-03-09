export interface IShipDetails{
    shipmentId: number,
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    marks: string[]
}

export enum ShipperType{
    AirEast = 39,
    ChicagoSpring = 42,
    PacificParcel = 51
}

export interface ShipperStrategy {
    getCost(weight: number): number;
}