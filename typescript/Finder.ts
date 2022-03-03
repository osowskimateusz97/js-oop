import { CrawlerModel, MessageInfo } from './Model.js';

abstract class Validation {
    abstract runValidation<E>(findedElement: E) : MessageInfo; 

    valid<E>(findedElement: E){
        try{
           const msg = this.runValidation(findedElement);
           if(msg !== MessageInfo.Ok) throw new Error(msg);
           return true;
        }
        catch(err){
            console.error(err);
            return false;
        }
    }
}

export class Crawler extends Validation implements CrawlerModel{
    getElement(element: string): Element{
      const findedElement = document.querySelector(element);
      const isValid = this.valid<Element>(findedElement);
      if(isValid) return findedElement;
    }

    runValidation<Element>(findedElement: Element){
        let msg = MessageInfo.Ok;
        if(!findedElement) msg = MessageInfo.NoElement
        return msg;
    }
}
