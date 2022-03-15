import { Currencies } from "./model";

export abstract class View {
    protected root: Element;
    protected title: Element;
    protected currencyContainer: Element;
    protected inputContainer: Element;
    protected textRadioInput: HTMLInputElement;
    protected sliderRadioInput: HTMLInputElement;
    protected rangeValue: HTMLElement;
    protected inputRadioContainer: Element;
    protected inputsContainer = this.createElement('div');
    
    constructor(viewType: string){
        this.initialize(viewType);
    }

    abstract createFields(text: string, value: string, id: string, type?: string): HTMLElement;
    abstract updateFields(obj: Object): void;
   

    createRadioButtons(){
        const inputTextRadioLabel = this.createElement('label');
        inputTextRadioLabel.textContent="Normal inputs";
        const inputSliderRadioLabel = this.createElement('label');
        inputSliderRadioLabel.textContent="Slider inputs";
        this.inputRadioContainer = this.createElement('div');
        this.inputRadioContainer.classList.add('toggler-view')
        this.textRadioInput = <HTMLInputElement>this.createElement('input');
        this.sliderRadioInput = <HTMLInputElement>this.createElement('input');
        this.textRadioInput.type = "radio";
        this.textRadioInput.name = "input-type";
        this.textRadioInput.id = 'normal'
        this.sliderRadioInput.type = "radio";
        this.sliderRadioInput.name = "input-type";
        this.sliderRadioInput.id = 'range';
        inputTextRadioLabel.append(this.textRadioInput);
        inputSliderRadioLabel.append(this.sliderRadioInput);
        this.inputRadioContainer.append(inputTextRadioLabel, inputSliderRadioLabel);
        return this.inputRadioContainer;
    }

    initialize(viewType){
        this.root = this.getElement('#root');
        this.title = this.createElement('h1');
        const radioButtons = this.createRadioButtons();
        this.title.textContent = 'Currency Converter';
        this.currencyContainer = this.createElement('section');
        this.currencyContainer.textContent = 'Loading data..';
        this.root.append(this.title, radioButtons, this.currencyContainer);

        const radio = <HTMLInputElement>this.getElement(`#${viewType}`);
        radio.checked = true;
    }

    handleChangeRadio(callback: Function){
        this.getElements('.toggler-view input').forEach(input=>input.addEventListener('click', e => {
           const { id } = <HTMLInputElement>e.target;
           callback(id);
        }))
    }

    clearContainer(){
        this.root.innerHTML = ''; 
    }
    
    displayCurrencyData(data: Currencies[]){
        this.currencyContainer.remove();
        data.forEach(currencyItem =>{
            const container = this.createElement('div');
            this.inputContainer = this.createElement('div','input-container');
            const description = this.createElement('p');
            const euField = this.createFields('Euro', currencyItem.euValue.toString(), currencyItem.currencyType, 'eu');
            const currField = this.createFields(currencyItem.currencyType, currencyItem.currencyValue.toString(), currencyItem.currencyType, 'converted-value');
            description.textContent= `1 Euro is ${currencyItem.rate} ${currencyItem.currencyType}`;
            this.inputContainer.append(euField, currField);
            container.append(description, this.inputContainer);
            this.inputsContainer.appendChild(container);
        })
        this.root.append(this.inputsContainer);
    }
    
    createElement(tag: string, className?: string): HTMLElement{
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }
    
    // Retrieve an element from the DOM
    getElement(selector: string) {
        const element = document.querySelector(selector);
        return element;
    }
     // Retrieve an element from the DOM                         
     getElements<E extends Element = Element>(selector: string): NodeListOf<E> {
        const elements = document.querySelectorAll<E>(selector);
        return elements;
    }

    bindChangeValue(handler: Function){
        this.root.addEventListener('input',e => {
            const { value, id, dataset } = <HTMLInputElement>e.target;
            handler({currencyType:id, inputName:dataset.type, currencyValue: value});
        })
    }

}