// your code goes here

import { Item } from "./Item.js";

export abstract class Weapon extends Item{
    protected value: number;
    protected weight: number;
    protected damageModifier: number = 0;
    protected durabilityModifier: number = 0;
    protected MODIFIER_CHANGE_RATE: number = 0.05;

    constructor(protected name: string, protected baseDamage: number, protected baseDurability: number,value: number, weight: number){
        super(name, value, weight);
    }

    get getDamage() {
        return this.baseDamage + this.damageModifier;
    }

    get getDurability(){
        return this.baseDurability + this.durabilityModifier;
    }

    get isBroken(): boolean{
        return this.getDurability < 0;
    }

    use(): string{
        if(this.isBroken) return `You can't use the ${this.name}, it is broken.`;
        this.damageModifier -=  this.MODIFIER_CHANGE_RATE;
        const brokenMsg = this.isBroken ? `The ${this.name} is breaks.`: '';
        return  `You use the ${this.name}, dealing ${this.getDamage} of damage. ${brokenMsg}`;
    }

    toString(){
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}, Damage: ${this.getDamage}, Durability: ${this.getDurability}`;
    }
}