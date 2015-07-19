import table = require("./table");
import range = require("../common/range");
import objectToArray = require("../common/objectToArray");
export = histogram;

function histogram(data: number[]|{}, binOptions?: Analysis.BinSettings) {
	var dataset = objectToArray(data);
	binOptions = fixBinSettings(dataset, binOptions);
	
	var result = getEmptyHistogram(binOptions.binCount);
	
	dataset.forEach(value => {
		let roughBinNumber = (value - binOptions.minimum) / binOptions.binSize;
		let binNumber = Math.floor(roughBinNumber) + 1;
		if (value === binOptions.maximum) binNumber = binOptions.binCount;
		
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

function fixBinSettings(dataset: number[], binOptions?: Analysis.BinSettings): Analysis.BinSettings {
	binOptions = binOptions || {
		binCount: 10,
		binSize: 0
	};
	
	let isValidMinimum = typeof binOptions.minimum === "number";
	let isValidMaximum = typeof binOptions.maximum === "number";
	if (!isValidMaximum || !isValidMinimum) {
		let dataRange = range(dataset);
		binOptions.maximum = dataRange.maximum;
		binOptions.minimum = dataRange.minimum;
	}
	
	binOptions.difference = binOptions.maximum - binOptions.minimum;
	
	if (!binOptions.binCount) {
		binOptions.binCount = Math.ceil(binOptions.difference / binOptions.binSize);
		binOptions.binSize = binOptions.difference / binOptions.binCount;
	}
	
	if (!binOptions.binSize) {
		binOptions.binSize = binOptions.difference / binOptions.binCount;
	}
	
	return binOptions;
}