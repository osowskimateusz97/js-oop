"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(points, color, filled) {
        this.points = points;
        if (points.length < 3)
            throw new Error('');
        if (typeof color === 'undefined') {
            this.color = 'green';
            this.filled = true;
        }
        else {
            this.color = color;
            this.filled = filled;
        }
    }
    Shape.prototype.toString = function () {
        var isFilled = this.filled ? 'filled' : 'not filled';
        return "A Shape with color of ".concat(this.color, " and ").concat(isFilled, ". Points: ").concat(this.points.join(', '), ".");
    };
    Shape.prototype.getPerimeter = function () {
        var _this = this;
        var parimeter = this.points.reduce(function (acc, point, currIndx) {
            var dist = point.distance(_this.points[(currIndx + 1) % 3]);
            return acc + dist;
        }, 0);
        return parimeter;
    };
    return Shape;
}());
exports.Shape = Shape;
