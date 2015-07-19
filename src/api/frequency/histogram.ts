import table = require("./table");
import range = require("../common/range");
import objectToArray = require("../common/objectToArray");
export = histogram;

function histogram(data: number[]|{}, binOptions?: Analysis.BinSettings) {
	var dataset = objectToArray(data);
	
	
}

function getBinSettings(dataset: number[], binOptions?: Analysis.BinSettings): Analysis.BinSettings {
	binOptions = binOptions || {
		binCount: 10,
		binSize: 0
	};
	
	var dataRange = range(dataset);
	
	if (!binOptions.binCount) {
		let binCount = dataRange.max - dataRange.min
		binOptions.binCount = Math.ceil()
	}	
	
	binOptions.binSize = (dataRange.max - dataRange.min) / binOptions.binCount;
	
	return binOptions;
}