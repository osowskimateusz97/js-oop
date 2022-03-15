import { View } from "./View.js";
export class RangeView extends View {
    constructor() {
        super('range');
    }
    createFields(text, value, id, type) {
        const input = this.createElement('input');
        const label = this.createElement('label');
        label.textContent = text;
        label.id = id;
        input.id = id;
        input.value = value;
        input.dataset.type = type;
        input.type = 'range';
        input.step = "0.1";
        if (type === 'converted-value') {
            input.max = value;
            input.value = value;
        }
        this.rangeValue = this.createElement('p');
        this.rangeValue.dataset.type = type;
        this.rangeValue.textContent = value;
        label.appendChild(this.rangeValue);
        label.append(input);
        return label;
    }
    updateFields(payload) {
        if (Array.isArray(payload))
            return console.error('It should be object!');
        const { currencyType, euValue, currencyValue } = payload;
        const euElement = this.getElement(`#${currencyType} input[data-type="eu"]`);
        const convertedElement = this.getElement(`#${currencyType} input[data-type="converted-value"]`);
        euElement.value = euValue.toString();
        convertedElement.value = currencyValue.toString();
        const euParagraph = this.getElement(`#${currencyType} p[data-type="eu"]`);
        const convertedParagraph = this.getElement(`#${currencyType} [data-type="converted-value"]`);
        euParagraph.textContent = euValue.toString();
        convertedParagraph.textContent = currencyValue.toString();
    }
}
