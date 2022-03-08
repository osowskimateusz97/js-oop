import { Item } from "./Item";
import { Pages } from "./pages";

export class Magazine extends Item {
    constructor(protected _title: string,protected pages: Pages){
        super();
    }

    get title(): string{
        return this._title;
    }

    set title(newTitle: string){
        this._title = newTitle;
    }
    toString(): string {
        return `Magazine: ${this.title} with number of pages: ${this.pages.pages.length}`
    }
}