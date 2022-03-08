var ItemWeightComparator = /** @class */ (function () {
    function ItemWeightComparator() {
    }
    ItemWeightComparator.prototype.compare = function (first, second) {
        // your code goes here
        return first.getWeight - second.getWeight;
    };
    return ItemWeightComparator;
}());
export { ItemWeightComparator };
