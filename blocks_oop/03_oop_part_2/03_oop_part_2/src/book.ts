import { Item } from "./Item";
import { Pages } from "./pages";

export class Book extends Item {   
     constructor( protected _title: string, protected _author: string,protected readonly pages: Pages){
        super();
        this.title = _title;
        this.author = _author;
    }
    
    toString(): string{
        return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.pages.length}`
    }

    set title(newTitle: string){
        this._title = newTitle;
    }
    
    get title(): string{
        return this._title;
    }

    set author(newAuthor: string){
        this._author = newAuthor;
    }

    get author(): string{
        return this._author;
    }
}