"use strict";
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
exports.__esModule = true;
exports.Triangle = void 0;
var Shape_1 = require("./Shape");
var TriangleType;
(function (TriangleType) {
    TriangleType["Equilateral"] = "equilateral triangle";
    TriangleType["Isosceles"] = "isosceles triangle";
    TriangleType["Scalene"] = "scalene triangle";
})(TriangleType || (TriangleType = {}));
var isArrayWithEqualEntries = function (array) { return new Set(array).size; };
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(point1, point2, point3, color, filled) {
        return _super.call(this, [point1, point2, point3], color, filled) || this;
    }
    Triangle.prototype.toString = function () {
        var mergedPoints = this.points.map(function (point, index) { return "v".concat(index + 1, "=").concat(point.toString()); }).join(',');
        return "Triangle[".concat(mergedPoints, "]");
    };
    Triangle.prototype.getType = function () {
        var _this = this;
        // equilateral triangle case
        var triangleArmsLength = this.points.map(function (point, currIndx) { return point.distance(_this.points[(currIndx + 1) % 3]); });
        var diffArmsLength = isArrayWithEqualEntries(triangleArmsLength);
        if (diffArmsLength === 1) {
            return TriangleType.Equilateral;
        }
        else if (diffArmsLength === 2) {
            return TriangleType.Isosceles;
        }
        else
            return TriangleType.Scalene;
    };
    return Triangle;
}(Shape_1.Shape));
exports.Triangle = Triangle;
