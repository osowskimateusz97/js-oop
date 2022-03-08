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
import { Consumable } from "./Consumable.js";
var Pizza = /** @class */ (function (_super) {
    __extends(Pizza, _super);
    function Pizza(numberOfSlices, spoiled) {
        var _this = _super.call(this, 'Pizza', 1, 32, spoiled) || this;
        _this.numberOfSlices = numberOfSlices;
        _this.spoiled = spoiled;
        _this.slicesEaten = 0;
        return _this;
    }
    Pizza.prototype.eat = function () {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;
            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed = true;
            }
            return 'you eat a slice of the pizza.';
        }
        return "You've eaten everything!";
    };
    return Pizza;
}(Consumable));
export { Pizza };
