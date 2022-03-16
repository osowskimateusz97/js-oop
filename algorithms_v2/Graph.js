const findShortestPath = require("./shortedDistance");

const graph = {
	A: { C: 4, D: 2, E:10 },
	B: { A: 8, D: 7 },
	C: { D: 6, B: 3 },
	D: { C: 1 },
    E: { B: 3, D: 20 }
};

const path = findShortestPath(graph, 'E', 'C');
console.log(path);