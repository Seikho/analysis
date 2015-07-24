import isNum = require("../common/isNumber");
import range = require("../common/range");
import errors = require("../errors");
export = binSettings;

function binSettings(dataset: number[], binOptions?: Analysis.BinSettings): Analysis.BinSettings {
	binOptions = binOptions || {
		binCount: 10,
		binSize: 0
	};
		
	if (!!binOptions.binCount && !!binOptions.binSize)
		throw new TypeError(errors.HistogramOneOption);

	if (!isNum(binOptions.minimum) || !isNum(binOptions.maximum)) {
		let dataRange = range(dataset);
		binOptions.maximum = dataRange.maximum;
		binOptions.minimum = dataRange.minimum;
	}

	binOptions.difference = binOptions.maximum - binOptions.minimum;

	let isValidBinCount = isNum(binOptions.binCount);
	let isValidBinSize = isNum(binOptions.binSize);

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