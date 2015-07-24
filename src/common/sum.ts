import common = require("./api");
export = sum;

function sum(data: number[]|{}) {
	var dataset: number[] = common.toArray(data);
	var add = (left, right) => left + right;
	
	return dataset.reduce(add);
}