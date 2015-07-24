import max = require("../common/max")
import frequencyTable = require("../frequency/table");
export = mode;

function mode(data: number[]|{}) {
	var table = frequencyTable(data);
	var maximum = max(table);
	var isMax = key => table[key] === maximum;
	var toNum = key => Number(key);

	return Object
		.keys(table)
		.filter(isMax)
		.map(toNum);
}