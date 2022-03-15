export interface Currencies {
    currencyType: 'string',
    currencyValue: number,
    rate: number,
    euValue: number,
}

export interface InputPayload {
    currencyType: string,
    currencyValue: number,
    inputName?: string,
    euValue?: number,
}
