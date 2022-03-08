// your code goes here

import { Item } from "./Item.js";

export abstract class Consumable extends Item{
    protected consumed: boolean = false; 
    constructor(protected name: string, value: number, weight: number, protected spoiled: boolean){
        super(name, value, weight)

    }
    get isConsumed(){
        return this.consumed;
    }

    set setConsumed(consumed: boolean){
        this.consumed = consumed;
    }

    get isSpoiled(){
        return this.spoiled;
    }


    eat(): string{
        if(this.isConsumed) return `There is nothing left of the ${this.name} to consume.`;
        if(this.isSpoiled) return `You eat the ${this.name}.\n You feel sick.`;
        this.setConsumed = true;
        return `You eat the ${this.name}.`
    }

    use(): string{
        return this.eat();
    }


}