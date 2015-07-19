import variance = require("./variance");
import objectToArray = require("../common/objectToArray");
export = stdDev;

function stdDev(data: number[]|{}) {
	var dataset = objectToArray(data);
	var populationVariance = variance(dataset);
	
	return Math.sqrt(populationVariance);
}