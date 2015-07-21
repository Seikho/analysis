import objectToArray = require("./objectToArray");
export = max;

/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data: number[]|{}): number {
	var dataset = objectToArray(data);
	
	var maximum = dataset.reduce(getMax, 0);
	
	return maximum;	
}

function getMax(left: number, right: number): number {
	return left > right
		? left
		: right;
}