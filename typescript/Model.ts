export interface OptionsModal{
    container: string,
}

export interface ModalService {
    open(): void,
    hide(): void,
    create(type: string,description: string,cssClasses: string[]): Element,
    render(): void,
}

export enum ModalState{
    Unvisible,
    Visible,
}

export enum MessageInfo {
    Ok = 'OK',
    NoElement = 'There is no such element',
    TooMany = 'There is too many finded elements!',
}

export interface FinderModel {
    getElement(target: string): Element,
    runValidation(findedElement: Element): MessageInfo
}

export interface ModalElement{
    type: string,
    description: string,
    className: string[]
}