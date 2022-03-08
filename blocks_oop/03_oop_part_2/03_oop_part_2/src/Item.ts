import { Pages } from "./pages";
import { PagesIterable } from "./PagesIterable";

export abstract class Item {
    protected pages: Pages | undefined;
    
    abstract toString(): string;
    
    *[Symbol.iterator]() {
        if(this.pages?.pages instanceof Array){
            for(let i = 0 ;i< this.pages.pages.length; i++){
                yield this.pages.pages[i];  
                return new PagesIterable(this, this.pages.pages[i]);
            } 
        }
    }
}