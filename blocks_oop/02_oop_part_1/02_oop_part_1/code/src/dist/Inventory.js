var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = [];
    }
    Inventory.prototype.sort = function (comparator) {
        if (!comparator)
            this.items.sort(function (a, b) { return a.getValue - b.getValue; });
        else
            this.items.sort(comparator.compare);
    };
    Inventory.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Inventory.prototype.toString = function () {
        return this.items.join(', ');
    };
    return Inventory;
}());
export { Inventory };
