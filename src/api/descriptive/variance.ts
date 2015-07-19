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
	
	var deviationsSqaured = dataset.reduce((prev, curr) => {
		let deviation = Math.pow(curr - dataMean, 2);
		prev += deviation;
	}, 0);
	
	return deviationsSqaured / dataset.length;
}