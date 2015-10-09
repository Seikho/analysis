import toArray = require("./toArray");
export = sum;

function sum(data: number[]|{}) {
	var dataset: number[] = toArray(data);
	var add = (left, right) => left + right;
	
	return dataset.reduce(add, 0);
}