import objectToArray = require("../common/objectToArray");
import sum = require("../common/sum");
export = mean;

function mean(data: number[]|{}) {
	var dataset: number[] = objectToArray(data);	
	return sum(dataset) / dataset.length;
}