import { GuiTriggerTypes } from "../models/models.js";
import { Client } from "./Client.js";
const initialObj = {
    shipmentId: 0,
    toAddress: '',
    fromAddress: '',
    toZipCode: '',
    fromZipCode: '',
    weight: 0,
    marks: [],
};
export class MockGui {
    constructor(form) {
        this.form = form;
    }
    getValueFromInputNumber(element) {
        return parseInt(element.value);
    }
    getValueFromCheckbox(element) {
        return element.checked;
    }
    getValue(element) {
        const inputType = element.getAttribute('type');
        switch (inputType) {
            case 'number':
                return this.getValueFromInputNumber(element);
            case 'checkbox':
                return this.getValueFromCheckbox(element);
            default: return element.value;
        }
    }
    generateShipmentObj() {
        let shipmentObj = Object.assign(Object.assign({}, initialObj), { marks: [] });
        this.form.querySelectorAll('input').forEach(element => {
            const value = this.getValue(element);
            const type = element.getAttribute('id');
            const dataType = element.dataset.type;
            if (dataType === 'marks' && value) {
                shipmentObj.marks.push(type);
            }
            else if (dataType !== 'marks') {
                shipmentObj[type] = value;
            }
        });
        this._shipmentObj = shipmentObj;
    }
    send() {
        this.generateShipmentObj();
        const details = this.trigger(GuiTriggerTypes.shipOrder);
        this._shipmentObj = initialObj;
        return details;
    }
    trigger(eventType) {
        switch (eventType) {
            case GuiTriggerTypes.shipOrder:
                const client = new Client(this._shipmentObj);
                const details = client.sendOrder();
                return details;
        }
    }
}
