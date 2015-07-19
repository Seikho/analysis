import table = require("./table");
import range = require("../common/range");
import objectToArray = require("../common/objectToArray");
export = histogram;

function histogram(data: number[]|{}, binOptions?: Analysis.BinSettings) {
	var dataset = objectToArray(data);
	var dataRange = range(dataset);
	binOptions = fixBinSettings(dataset, dataRange, binOptions);
	
	var result = getEmptyHistogram(binOptions.binCount);
	
	dataset.forEach(value => {
		let roughBinNumber = (value - dataRange.minimum) / binOptions.binSize;
		let binNumber = Math.floor(roughBinNumber) + 1;
		if (value === dataRange.maximum) binNumber = binOptions.binCount;
		
		result[binNumber]++; 
	});
	2
	return result;
}

function getEmptyHistogram(binCount: number): {} {
	var emptyHistogram: any = {};
	
	for (let x = 1; x <= binCount; x++) {
		emptyHistogram[x] = 0;
	}
	
	return emptyHistogram;
}

function fixBinSettings(dataset: number[], dataRange: Analysis.RangeResult, binOptions?: Analysis.BinSettings): Analysis.BinSettings {
	binOptions = binOptions || {
		binCount: 10,
		binSize: 0
	};
	
	
	if (!binOptions.binCount) {
		binOptions.binCount = Math.ceil(dataRange.difference / binOptions.binSize);
		binOptions.binSize = dataRange.difference / binOptions.binCount;
	}
	
	if (!binOptions.binSize) {
		binOptions.binSize = dataRange.difference / binOptions.binCount;
	}
	
	return binOptions;
}