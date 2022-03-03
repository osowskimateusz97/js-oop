import { Finder } from './Finder.js';
import {  ModalElement, ModalService, ModalState } from './Model.js';


class Modal extends Finder implements ModalService {
    protected _isVisible: ModalState;

    constructor(protected modalContainer: Element, protected _modalElements: ModalElement[]){
        super();
        this.render();
    }
    get isVisible(){
        return this._isVisible;
    }
    open() {
        this._isVisible = ModalState.Visible;
        this.modalContainer.classList.remove('hidden')
    }
    hide() {
        this._isVisible = ModalState.Unvisible;
        this.modalContainer.classList.add('hidden')
    }

    create(type: string, description: string = '', cssClasses: string[]): Element{
        const element = document.createElement(type);
        element.textContent = description;

        if(cssClasses){
            cssClasses.forEach(classes=>{
                element.classList.add(classes);
            })
        }
        return element;
    }
    createSkeleton(){
        if(!this._modalElements) return;
        this._modalElements.forEach(({ type, description, className }: ModalElement)=>{
            const element = this.create(type, description, className);
            this.modalContainer.appendChild(element);
        })
    }
    render(){
        this.hide()
        this.createSkeleton();
    }
}
export default Modal;