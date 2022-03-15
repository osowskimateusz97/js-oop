var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class CommonModel {
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield fetch('http://localhost:3000/currencies');
                const data = yield res.json();
                this.currenciesData = this.injectInputValues(data);
                return this.currenciesData;
            }
            catch (err) {
                console.error(err);
            }
        });
    }
    injectInputValues(data) {
        return data.map(currency => (Object.assign(Object.assign({}, currency), { euValue: 100, currencyValue: this.convertCurrency(currency.rate) })));
    }
    convertCurrency(rate, value = 100, option) {
        if (option === 'toEuro') {
            return parseFloat((value / rate).toFixed(2));
        }
        return parseFloat((value * rate).toFixed(2));
    }
    bindInputUpdated(callback) {
        this.onInputChange = callback;
    }
}
