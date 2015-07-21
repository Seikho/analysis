import mean = require("./mean");
import objectToArray = require("../common/objectToArray");
export = variance;

/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data: number[]|{}): number {
	var dataset = objectToArray(data);
	var dataMean = mean(dataset);
	var calcVariance = val => val - dataMean;
	var squared = val => Math.pow(val, 2);

	return dataset
		.map(squared)
		.map(calcVariance)
		.reduce(mean);
}