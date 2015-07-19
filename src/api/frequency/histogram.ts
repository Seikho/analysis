import table = require("./table");
import range = require("../common/range");
import objectToArray = require("../common/objectToArray");
export = histogram;

function histogram(data: number[]|{}, binOptions?: Analysis.BinSettings) {
	var dataset = objectToArray(data);
	binOptions = fixBinSettings(dataset, binOptions);
	
	var result = getEmptyHistogram(binOptions.binCount);
	
	dataset.forEach(value => {
		let binNumber = Math.ceil(value / binOptions.binSize);
		result[binNumber]++; 
	});
	
	return result;
}

function getEmptyHistogram(binCount: number): {} {
	var emptyHistogram: any = {};
	
	for (let x = 1; x <= binCount; x++) {
		emptyHistogram[x] = 0;
	}
	
	return emptyHistogram;
}

function fixBinSettings(dataset: number[], binOptions?: Analysis.BinSettings): Analysis.BinSettings {
	binOptions = binOptions || {
		binCount: 10,
		binSize: 0
	};
	
	var dataRange = range(dataset);
	
	if (!binOptions.binCount) {
		binOptions.binCount = Math.ceil(dataRange.difference / binOptions.binSize);
		binOptions.binSize = dataRange.difference / binOptions.binCount;
	}
	
	if (!binOptions.binSize) {
		binOptions.binSize = dataRange.difference / binOptions.binCount;
	}
	
	return binOptions;
}