import { Currencies, InputPayload } from "./model";

export abstract class CommonModel {
    protected currenciesData: Currencies[];
    onInputChange: Function;

    abstract updateValue(obj: InputPayload): void;

    async getData(): Promise<Currencies[]> {
        try{
            const res = await fetch('http://localhost:3000/currencies');
            const data = await res.json();
            this.currenciesData = this.injectInputValues(data);
            return this.currenciesData;
        }
        catch(err){
            console.error(err);
        }
    }

    injectInputValues(data: Currencies[]) {
        return data.map(currency => ({
            ...currency,
            euValue:100,
            currencyValue: this.convertCurrency(currency.rate)
        }))
    }

    convertCurrency(rate: number, value: number = 100, option?: string): number {
        if(option === 'toEuro'){
            return parseFloat((value / rate).toFixed(2));
        }
        return parseFloat((value * rate).toFixed(2));
    }

    bindInputUpdated(callback: Function){
        this.onInputChange = callback;
    }
}