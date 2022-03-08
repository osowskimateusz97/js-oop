// your code goes here

import { Weapon } from "./Weapon.js";

export class Bow extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number){
        super('bow', baseDamage, baseDurability, value, weight);
    }

    polish(){
        if(this.getEffectiveDurability > 1) return;
        this.durabilityModifier + this.MODIFIER_CHANGE_RATE;
    }
}