export class View {
    constructor(viewType) {
        this.inputsContainer = this.createElement('div');
        this.initialize(viewType);
    }
    createRadioButtons() {
        const inputTextRadioLabel = this.createElement('label');
        inputTextRadioLabel.textContent = "Normal inputs";
        const inputSliderRadioLabel = this.createElement('label');
        inputSliderRadioLabel.textContent = "Slider inputs";
        this.inputRadioContainer = this.createElement('div');
        this.inputRadioContainer.classList.add('toggler-view');
        this.textRadioInput = this.createElement('input');
        this.sliderRadioInput = this.createElement('input');
        this.textRadioInput.type = "radio";
        this.textRadioInput.name = "input-type";
        this.textRadioInput.id = 'normal';
        this.sliderRadioInput.type = "radio";
        this.sliderRadioInput.name = "input-type";
        this.sliderRadioInput.id = 'range';
        inputTextRadioLabel.append(this.textRadioInput);
        inputSliderRadioLabel.append(this.sliderRadioInput);
        this.inputRadioContainer.append(inputTextRadioLabel, inputSliderRadioLabel);
        return this.inputRadioContainer;
    }
    initialize(viewType) {
        this.root = this.getElement('#root');
        this.title = this.createElement('h1');
        const radioButtons = this.createRadioButtons();
        this.title.textContent = 'Currency Converter';
        this.currencyContainer = this.createElement('section');
        this.currencyContainer.textContent = 'Loading data..';
        this.root.append(this.title, radioButtons, this.currencyContainer);
        const radio = this.getElement(`#${viewType}`);
        radio.checked = true;
    }
    handleChangeRadio(callback) {
        this.getElements('.toggler-view input').forEach(input => input.addEventListener('click', e => {
            const { id } = e.target;
            callback(id);
        }));
    }
    clearContainer() {
        this.root.innerHTML = '';
    }
    displayCurrencyData(data) {
        this.currencyContainer.remove();
        data.forEach(currencyItem => {
            const container = this.createElement('div');
            this.inputContainer = this.createElement('div', 'input-container');
            const description = this.createElement('p');
            const euField = this.createFields('Euro', currencyItem.euValue.toString(), currencyItem.currencyType, 'eu');
            const currField = this.createFields(currencyItem.currencyType, currencyItem.currencyValue.toString(), currencyItem.currencyType, 'converted-value');
            description.textContent = `1 Euro is ${currencyItem.rate} ${currencyItem.currencyType}`;
            this.inputContainer.append(euField, currField);
            container.append(description, this.inputContainer);
            this.inputsContainer.appendChild(container);
        });
        this.root.append(this.inputsContainer);
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
    // Retrieve an element from the DOM
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    // Retrieve an element from the DOM                         
    getElements(selector) {
        const elements = document.querySelectorAll(selector);
        return elements;
    }
    bindChangeValue(handler) {
        this.root.addEventListener('input', e => {
            const { value, id, dataset } = e.target;
            handler({ currencyType: id, inputName: dataset.type, currencyValue: value });
        });
    }
}
