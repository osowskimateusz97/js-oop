// your code goes here

import { Weapon } from "./Weapon.js";

export class Sword extends Weapon{
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number){
        super('Sword', baseDamage, baseDurability, value, weight);
    }

    polish(): void{
        if(this.damageModifier >= this.baseDamage + this.baseDamage * 0.25) return;
        this.damageModifier += this.MODIFIER_CHANGE_RATE;
    }
}