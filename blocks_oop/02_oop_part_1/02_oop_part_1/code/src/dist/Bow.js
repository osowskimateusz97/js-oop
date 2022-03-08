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
import { Weapon } from "./Weapon.js";
var Bow = /** @class */ (function (_super) {
    __extends(Bow, _super);
    function Bow(baseDamage, baseDurability, value, weight) {
        return _super.call(this, 'bow', baseDamage, baseDurability, value, weight) || this;
    }
    Bow.prototype.polish = function () {
        if (this.getEffectiveDurability > 1)
            return;
        this.durabilityModifier + this.MODIFIER_CHANGE_RATE;
    };
    return Bow;
}(Weapon));
export { Bow };
