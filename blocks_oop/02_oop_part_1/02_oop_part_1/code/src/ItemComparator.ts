import { Item } from './Item.js';
import { Comparator } from './Comparator.js';

export interface ItemComparator extends Comparator<Item> {
    compare(first: Item, second: Item): number;
}
