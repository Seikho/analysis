import objectToArray = require("./objectToArray");
export = min;

/**
 * @return Number Returns the lowest value in a dataset/array
 */
function min(data: number[]|{}): number {
	var dataset: number[];
	if (data instanceof Array) dataset = data;
	else dataset = objectToArray(data);
	
	var minimum = dataset.reduce((prev, curr) => {
		let isHigher = curr < prev;
		if (isHigher) prev = curr;
		
		return prev;
	}, 0);
	
	return minimum;	
}