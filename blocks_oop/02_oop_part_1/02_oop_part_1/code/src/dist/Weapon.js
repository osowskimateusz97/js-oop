// your code goes here
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Item } from "./Item.js";
var Weapon = /** @class */ (function (_super) {
    __extends(Weapon, _super);
    function Weapon(name, baseDamage, baseDurability, value, weight) {
        var _this = _super.call(this, name, value, weight) || this;
        _this.name = name;
        _this.baseDamage = baseDamage;
        _this.baseDurability = baseDurability;
        _this.damageModifier = 0;
        _this.durabilityModifier = 0;
        _this.MODIFIER_CHANGE_RATE = 0.05;
        return _this;
    }
    Object.defineProperty(Weapon.prototype, "getDamage", {
        get: function () {
            return this.baseDamage + this.damageModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "getDurability", {
        get: function () {
            return this.baseDurability + this.durabilityModifier;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "isBroken", {
        get: function () {
            return this.getDurability < 0;
        },
        enumerable: false,
        configurable: true
    });
    Weapon.prototype.use = function () {
        if (this.isBroken)
            return "You can't use the ".concat(this.name, ", it is broken.");
        this.damageModifier -= this.MODIFIER_CHANGE_RATE;
        var brokenMsg = this.isBroken ? "The ".concat(this.name, " is breaks.") : '';
        return "You use the ".concat(this.name, ", dealing ").concat(this.getDamage, " of damage. ").concat(brokenMsg);
    };
    Weapon.prototype.toString = function () {
        return "".concat(this.name, " - Value: ").concat(this.value, ", Weight: ").concat(this.weight, ", Damage: ").concat(this.getDamage, ", Durability: ").concat(this.getDurability);
    };
    return Weapon;
}(Item));
export { Weapon };
