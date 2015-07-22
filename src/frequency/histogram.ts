import table = require("./table");
import range = require("../common/range");
import objectToArray = require("../common/objectToArray");
import isNum = require("../common/isNumber");
export = histogram;


function histogram(data: number[]|{}, binOptions?: Analysis.BinSettings) {
	var dataset = objectToArray(data);
	binOptions = fixBinSettings(dataset, binOptions);

	var result = getEmptyHistogram(binOptions.binCount);
	var roughBin = val => (val - binOptions.minimum) / binOptions.binSize;
	var realBin = val => Math.floor(roughBin(val)) + 1;
	var adjustBin = val => val % binOptions.binSize === 0 ? val - 1 : val;

	dataset.forEach(value => {
		let binNumber = adjustBin(realBin(value));
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

	if (!isNum(binOptions.minimum) || !isNum(binOptions.maximum)) {
		let dataRange = range(dataset);
		binOptions.maximum = dataRange.maximum;
		binOptions.minimum = dataRange.minimum;
	}

	binOptions.difference = binOptions.maximum - binOptions.minimum;

	let isValidBinCount = isNum(binOptions.binCount);
	let isValidBinSize = isNum(binOptions.binSize);

	if (!isValidBinCount && !isValidBinSize) {
		binOptions.binCount = 10;
		isValidBinCount = true;
	}

	if (!isValidBinCount) {
		binOptions.binCount = Math.ceil(binOptions.difference / binOptions.binSize);
		binOptions.binSize = binOptions.difference / binOptions.binCount;
		isValidBinSize = true;
	}

	if (!isValidBinSize) {
		binOptions.binSize = binOptions.difference / binOptions.binCount;
	}

	return binOptions;
}