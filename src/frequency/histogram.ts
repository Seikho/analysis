import table = require("./table");

import binSettings = require("./binSettings");
import objectToArray = require("../common/objectToArray");

export = histogram;


function histogram(data: number[]|{}, binOptions?: Analysis.BinSettings) {
	var dataset = objectToArray(data);
	binOptions = binSettings(dataset, binOptions);

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

