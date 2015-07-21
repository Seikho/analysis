import mean = require("./mean");
import sum = require("../common/sum");
import objectToArray = require("../common/objectToArray");
export = variance;

/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data: number[]|{}): number {
	var dataset = objectToArray(data);
	var dataMean = mean(data);
	
	var calcVariance = val => squared(val - dataMean);
	var squared = val => Math.pow(val, 2);

	var variances = dataset.map(calcVariance);
		
	return sum(variances) / dataset.length;
}