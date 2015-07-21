import objectToArray = require("./objectToArray");
export = sum;

function sum(data: number[]|{}) {
	var dataset: number[] = objectToArray(data);
	var add = (left, right) => left + right;
	
	return dataset.reduce(add);
}