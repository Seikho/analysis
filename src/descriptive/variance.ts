import common = require("../common/api");
import descriptive = require("./api");
export = variance;

/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data: number[]|{}): number {
	var dataset = common.toArray(data);
	var dataMean = descriptive.mean(data);
	
	var calcVariance = val => squared(val - dataMean);
	var squared = val => Math.pow(val, 2);

	var variances = dataset.map(calcVariance);
		
	return common.sum(variances) / dataset.length;
}