import common = require("../common/api");
import sum = require("../common/sum");
export = mean;

function mean(data: number[]|{}) {
	var dataset: number[] = common.toArray(data);	
	return sum(dataset) / dataset.length;
}