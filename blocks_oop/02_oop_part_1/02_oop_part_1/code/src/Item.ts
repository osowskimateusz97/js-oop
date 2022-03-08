import { Comparable } from './Comparable.js';

let id = 0;

export abstract class Item implements Comparable<Item> {
    static id = id;

    constructor(protected name: string, protected value: number, protected weight: number){
        Item.id = this.numberOfItems;
    }

    public compareTo(other: Item): number {
        // your code goes here
        if(this.value > other.value) return 1;
        if(this.value === other.value) return this.name.localeCompare(other.name);
        else return -1;
    }

    // your code goes here
    private get numberOfItems(): number {
        Item.id++;
        return Item.id;
    }

    get getName(): string{
        return this.name;
    }

    get getValue(): number{
        return this.value;
    }
    use(): void{}
    
    get getWeight(): number{
        return this.weight;
    }

    set setWeight(newWeight: number){
        if(this.weight < 0) console.log('Weight should be a positive number');
        else this.weight = newWeight;
    }
    
    toString(): string{
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    } 

    reset(){
        Item.id = 0;
    }

}
