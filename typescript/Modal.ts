import { Crawler } from './Crawler.js';
import {  modalElement, ModalService, ModalState } from './Model.js';


class Modal extends Crawler implements ModalService {
    protected _isVisible: ModalState;

    constructor(protected modalContainer: Element, protected _modalElements: modalElement[]){
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
        this._modalElements.forEach(({ type, description, className }: modalElement)=>{
            const element = this.create(type, description, className);
            this.modalContainer.appendChild(element);
        })
    }
    render(){
        this.hide()
<<<<<<< HEAD
        this.createSkeleton();
=======
        this.createScheleton();
>>>>>>> c46f7a80a323c124e426124757d577031580b2a2
    }
}
export default Modal;