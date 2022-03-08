// your code goes here
import { Item } from './Item.js';
import { ItemWeightComparator } from './ItemWeightComparator.js';

export class Inventory {
    private items?: Item[] = [];

    sort(): void
    sort(comparator: ItemWeightComparator): void
    sort(comparator?: ItemWeightComparator){
        if(!comparator) this.items.sort((a, b)=>a.getValue - b.getValue);
        
        else this.items.sort(comparator.compare);
    }

    addItem(item: Item): void{
        this.items.push(item);
    }

    toString(): string{
        return this.items.join(', ')
    }

}