var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { TextModel } from "./TextModel.js";
import { RangeModel } from './RangeModel.js';
import { TextView } from "./TextView.js";
import { RangeView } from "./RangeView.js";
export class Controller {
    constructor() {
        this.modelStrategy = new TextModel();
        this.viewStrategy = new TextView();
        this.handleChangeValue = (payload) => {
            this.modelStrategy.updateValue(payload);
        };
        this.onInputChange = (data) => {
            this.viewStrategy.updateFields(data);
        };
        this.redrawGui = (id) => {
            this.viewStrategy.clearContainer();
            this.handleChangeStrategy(id);
            this.initialize();
        };
        this.initialize();
    }
    initialize() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield this.modelStrategy.getData();
            this.viewStrategy.displayCurrencyData(data);
            this.viewStrategy.bindChangeValue(this.handleChangeValue);
            this.modelStrategy.bindInputUpdated(this.onInputChange);
            this.viewStrategy.handleChangeRadio(this.redrawGui);
        });
    }
    setModelStrategy(s) {
        this.modelStrategy = s;
    }
    setViewStrategy(s) {
        this.viewStrategy = s;
    }
    handleChangeStrategy(type) {
        if (type === 'normal') {
            this.setModelStrategy(new TextModel());
            this.setViewStrategy(new TextView());
        }
        else {
            this.setModelStrategy(new RangeModel());
            this.setViewStrategy(new RangeView());
        }
    }
}
