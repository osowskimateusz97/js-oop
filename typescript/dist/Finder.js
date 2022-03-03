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
import { MessageInfo } from './Model.js';
var Validation = /** @class */ (function () {
    function Validation() {
    }
    Validation.prototype.valid = function (findedElement) {
        try {
            var msg = this.runValidation(findedElement);
            if (msg !== MessageInfo.Ok)
                throw new Error(msg);
            return true;
        }
        catch (err) {
            console.error(err);
            return false;
        }
    };
    return Validation;
}());
var Crawler = /** @class */ (function (_super) {
    __extends(Crawler, _super);
    function Crawler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crawler.prototype.getElement = function (element) {
        var findedElement = document.querySelector(element);
        var isValid = this.valid(findedElement);
        if (isValid)
            return findedElement;
    };
    Crawler.prototype.runValidation = function (findedElement) {
        var msg = MessageInfo.Ok;
        if (!findedElement)
            msg = MessageInfo.NoElement;
        return msg;
    };
    return Crawler;
}(Validation));
export { Crawler };
