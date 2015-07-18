import max = require("../common/max");
import frequencyTable = require("../frequency/table");
import objectToArray = require("../common/objectToArray");
export = mode;

function mode(data: number[]|{}) {
	var table = frequencyTable(data);
	var maximum = max(table);

	var modes: number[] = [];

	Object.keys(table)
		.forEach(key => {
			let value = table[key];
			if (value === maximum) modes.push(Number(key));
		});

	return modes;
}