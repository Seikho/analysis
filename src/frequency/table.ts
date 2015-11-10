import common = require("../common/api");
import Analysis = require("../../index.d.ts");
export = table;

function table(data: number[]|{}): Analysis.Dataset {
	var dataset = common.toArray(data);

	var addFreq = (freqs, val) => {
		freqs[val] = (freqs[val] || 0) + 1;
		return freqs;
	}	

	return dataset.reduce(addFreq, {});
}

