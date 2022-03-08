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
var Consumable = /** @class */ (function (_super) {
    __extends(Consumable, _super);
    function Consumable(name, value, weight, spoiled) {
        var _this = _super.call(this, name, value, weight) || this;
        _this.name = name;
        _this.spoiled = spoiled;
        _this.consumed = false;
        return _this;
    }
    Object.defineProperty(Consumable.prototype, "isConsumed", {
        get: function () {
            return this.consumed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consumable.prototype, "setConsumed", {
        set: function (consumed) {
            this.consumed = consumed;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Consumable.prototype, "isSpoiled", {
        get: function () {
            return this.spoiled;
        },
        enumerable: false,
        configurable: true
    });
    Consumable.prototype.eat = function () {
        if (this.isConsumed)
            return "There is nothing left of the ".concat(this.name, " to consume.");
        if (this.isSpoiled)
            return "You eat the ".concat(this.name, ".\n You feel sick.");
        this.setConsumed = true;
        return "You eat the ".concat(this.name, ".");
    };
    Consumable.prototype.use = function () {
        return this.eat();
    };
    return Consumable;
}(Item));
export { Consumable };
