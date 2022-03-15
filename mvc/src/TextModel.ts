import { CommonModel } from "./CommonModel.js";
import { InputPayload } from "./model.js";

export class TextModel extends CommonModel{

    updateValue({ inputName, currencyValue }: InputPayload): void{
        this.currenciesData = this.currenciesData.map(currency=>{
            let updatedCurrency = {
                currencyValue: 0,
            };
            if(inputName === 'eu'){
                updatedCurrency.currencyValue = this.convertCurrency(currency.rate, currencyValue);
                updatedCurrency['euValue'] = currencyValue;
            }
            else {
                updatedCurrency.currencyValue = currencyValue;
                updatedCurrency['euValue'] = this.convertCurrency(currency.rate, currencyValue, 'toEuro');
            }
           
            return { ...currency, ...updatedCurrency};
        });

        const payload: InputPayload[] = this.currenciesData.map(element=>({
            currencyType: element.currencyType,
            euValue: element.euValue,
            currencyValue: element.currencyValue,
        }))
        
        this.onInputChange(payload);
    }
}