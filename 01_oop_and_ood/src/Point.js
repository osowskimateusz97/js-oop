"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this._x = x || 0;
        this._y = y || 0;
    }
    Point.prototype.toString = function () {
        return "(".concat(this._x, ", ").concat(this._y, ")");
    };
    Point.prototype.distance = function (x, y) {
        var compareX = 0;
        var compareY = 0;
        // case when (num1, num2) are passed to the arguments
        if (typeof x === 'number' && y !== undefined) {
            compareX = x;
            compareY = y;
        }
        else if (x instanceof Point) {
            compareX = x._x;
            compareY = x._y;
        }
        var xDistance = this._x - compareX;
        var yDistance = this._y - compareY;
        var totalDistance = Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)).toFixed(2);
        if (totalDistance.split('.')[1] === '00')
            totalDistance.split('.').splice(1);
       
        return parseFloat(totalDistance);
    };
    return Point;
}());
exports.Point = Point;
