import { Inventory } from "./Inventory.js";
import { ItemWeightComparator } from "./ItemWeightComparator.js";
import { Pizza } from "./Pizza.js";
import { Sword } from "./Sword.js";
// Create the inventory
var inventory = new Inventory();
// Create a set of items
var a = new Sword(30.4219, 0.7893, 300, 2.032);
var b = new Sword(40, 0.7893, 200, 2);
var c = new Sword(40, 1, 100, 3);
var pizza = new Pizza(4, false);
// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(pizza);
// Display the inventory
console.log(inventory.toString());
console.log(inventory);
// // Sort by natural order
inventory.sort();
// // Display the new inventory
console.log(inventory.toString());
// // Sort by weight
inventory.sort(new ItemWeightComparator());
// // Display the inventory again
console.log(inventory.toString());
