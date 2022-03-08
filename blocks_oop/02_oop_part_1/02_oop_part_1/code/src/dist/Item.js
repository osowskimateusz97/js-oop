var id = 0;
var Item = /** @class */ (function () {
    function Item(name, value, weight) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        Item.id = this.numberOfItems;
    }
    Item.prototype.compareTo = function (other) {
        // your code goes here
        if (this.value > other.value)
            return 1;
        if (this.value === other.value)
            return this.name.localeCompare(other.name);
        else
            return -1;
    };
    Object.defineProperty(Item.prototype, "numberOfItems", {
        // your code goes here
        get: function () {
            Item.id++;
            return Item.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "getValue", {
        get: function () {
            return this.value;
        },
        enumerable: false,
        configurable: true
    });
    Item.prototype.use = function () { };
    Object.defineProperty(Item.prototype, "getWeight", {
        get: function () {
            return this.weight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "setWeight", {
        set: function (newWeight) {
            if (this.weight < 0)
                console.log('Weight should be a positive number');
            else
                this.weight = newWeight;
        },
        enumerable: false,
        configurable: true
    });
    Item.prototype.toString = function () {
        return "".concat(this.name, " - Value: ").concat(this.value, ", Weight: ").concat(this.weight);
    };
    Item.prototype.reset = function () {
        Item.id = 0;
    };
    Item.id = id;
    return Item;
}());
export { Item };
