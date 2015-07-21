import objectToArray = require("../common/objectToArray");
export = table;

function table(data: number[]|{}): {} {
	var dataset = objectToArray(data);

	var addFreq = (freqs, val) => {
		freqs[val] = (freqs[val] || 0) + 1;
		return freqs;
	}	

	return dataset.reduce(addFreq, {});
}

