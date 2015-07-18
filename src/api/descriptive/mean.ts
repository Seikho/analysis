import objectToArray = require("../common/objectToArray");
export = mean;

function mean(data: number[]|{}) {
	var dataset: number[] = objectToArray(data);
	
	var sampleSize = dataset.length;
	var total = dataset.reduce((previous, current) => {
		previous += current;
		return previous;
	}, 0);
	
	return total / sampleSize;
}