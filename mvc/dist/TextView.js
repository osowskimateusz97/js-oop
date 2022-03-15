import { View } from "./View.js";
export class TextView extends View {
    constructor() {
        super('normal');
    }
    createFields(text, value, id, type) {
        const input = this.createElement('input');
        const label = this.createElement('label');
        label.textContent = text;
        label.id = id;
        input.id = id;
        input.type = 'text';
        input.value = value;
        input.dataset.type = type;
        label.append(input);
        return label;
    }
    updateFields(data) {
        if (!Array.isArray(data))
            return;
        data.forEach((element) => {
            const { currencyType } = element;
            const convertedElement = this.getElement(`#${currencyType} input[data-type="converted-value"]`);
            convertedElement.value = element.currencyValue.toString();
        });
        const euInputs = this.getElements(`input[data-type="eu"]`);
        euInputs.forEach(euEl => euEl.value = data[0].euValue.toString());
    }
}
