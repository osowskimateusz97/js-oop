import { Item } from './Item.js';
import { ItemComparator } from './ItemComparator.js';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        // your code goes here
        return first.getWeight - second.getWeight;
    }
}
