import { CommonModel } from "./CommonModel.js";
export class RangeModel extends CommonModel {
    updateValue({ currencyType, inputName, currencyValue }) {
        this.currenciesData = this.currenciesData.map(currency => {
            if (currencyType !== currency.currencyType)
                return currency;
            let updatedCurrency = {
                currencyValue: 0,
            };
            if (inputName === 'eu') {
                updatedCurrency.currencyValue = this.convertCurrency(currency.rate, currencyValue);
                updatedCurrency['euValue'] = currencyValue;
            }
            else {
                updatedCurrency.currencyValue = currencyValue;
                updatedCurrency['euValue'] = this.convertCurrency(currency.rate, currencyValue, 'toEuro');
            }
            let payload = {
                currencyType,
                currencyValue: updatedCurrency.currencyValue,
                euValue: updatedCurrency['euValue']
            };
            this.onInputChange(payload);
            return Object.assign(Object.assign({}, currency), updatedCurrency);
        });
    }
}
