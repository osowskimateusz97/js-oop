import { Item } from "./Item";
import { Pages } from "./pages";

export class Comics extends Item {
    constructor(protected _title: string, protected _artist: string ,protected _author: string, readonly pages: Pages){
        super();
    }
    get title(): string{
        return this._title;
    }
    set title(newTitle: string){
        this._title = newTitle; 
    }
    get author(): string{
        return this._author;
    }
    set author(newAuthor: string){
        this._author = newAuthor; 
    }
    get artist(): string{
        return this._artist;
    }
    set artist(newArtist: string){
        this._artist = newArtist; 
    }
    toString(): string {
        return `Comics: ${this.title} by ${this.artist}, the artist is ${this.author}, number of pages: ${this.pages.pages.length}`
    }
}