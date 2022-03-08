import { Item } from "./Item";
import { Page } from "./page";

export class PagesIterable {
    item: Item;
    page: Page;
    constructor(item: Item, page: Page) {
        this.item = item;
        this.page = page;
    }
    toString(): string {
        
        return this.item.toString() + ', ' + this.page.toString();
    }
}