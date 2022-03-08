// your code goes here

import { Consumable } from "./Consumable.js";

export class Pizza extends Consumable {
    protected slicesEaten: number = 0;
    
    constructor(protected numberOfSlices: number, protected spoiled: boolean){
        super('Pizza', 1, 32, spoiled);
    }

    eat(){
        if(this.slicesEaten < this.numberOfSlices){
            this.slicesEaten++;
            if(this.slicesEaten >= this.numberOfSlices){
                this.setConsumed = true;
            }
            return 'you eat a slice of the pizza.';
        }
        return `You've eaten everything!`
    }
}