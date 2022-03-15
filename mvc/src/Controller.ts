import {  TextModel } from "./TextModel.js";
import { RangeModel } from './RangeModel.js';
import { TextView } from "./TextView.js";
import { RangeView } from "./RangeView.js";
import { InputPayload } from "./model.js";

export class Controller {
    private modelStrategy: TextModel | RangeModel = new TextModel();
    private viewStrategy: TextView | RangeView = new TextView();

    constructor(){
        this.initialize();
    }
    
    async initialize(){
        const data = await this.modelStrategy.getData();
        this.viewStrategy.displayCurrencyData(data);
        this.viewStrategy.bindChangeValue(this.handleChangeValue);
        this.modelStrategy.bindInputUpdated(this.onInputChange);
        this.viewStrategy.handleChangeRadio(this.redrawGui);
    }

    setModelStrategy(s: TextModel | RangeModel){
        this.modelStrategy = s;
    }

    setViewStrategy(s: TextView | RangeView){
        this.viewStrategy = s;
    }

    handleChangeValue = (payload: InputPayload) =>{
        this.modelStrategy.updateValue(payload);
    }

    onInputChange = (data: InputPayload & InputPayload[]) => {
        this.viewStrategy.updateFields(data);
    }

    handleChangeStrategy(type: string){
        if(type === 'normal'){
            this.setModelStrategy(new TextModel());
            this.setViewStrategy(new TextView());
        }
        else{
            this.setModelStrategy(new RangeModel());
            this.setViewStrategy(new RangeView());
        }
    }

    redrawGui = (id: string) => {
        this.viewStrategy.clearContainer();
        this.handleChangeStrategy(id);
        this.initialize();
    }
}