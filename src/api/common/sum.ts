import objectToArray = require("./objectToArray");
export = sum;

function sum(data: number[]|{}) {
	var dataset: number[] = objectToArray(data);
	
	var total = dataset.reduce((prev, curr) => prev += curr, 0);
	
	return total;
}