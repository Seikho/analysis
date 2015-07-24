import common = require("../common/api");
export = table;

function table(data: number[]|{}): {} {
	var dataset = common.toArray(data);

	var addFreq = (freqs, val) => {
		freqs[val] = (freqs[val] || 0) + 1;
		return freqs;
	}	

	return dataset.reduce(addFreq, {});
}

