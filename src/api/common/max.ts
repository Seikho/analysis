import objectToArray = require("./objectToArray");
export = max;

/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data: number[]|{}) {
	var dataset: number[];
	if (data instanceof Array) dataset = data;
	else dataset = objectToArray(data);
	
	var maximum = dataset.reduce((prev, curr) => {
		let isHigher = curr > prev;
		if (isHigher) prev = curr;
		
		return prev;
	}, 0);
	
	return maximum;	
}