import objectToArray = require("../common/objectToArray");
export = table;

function table(data: number[]|{}): {} {
	var dataset = objectToArray(data);
	var table: any = {};
	var addFreq = val => table[val] = (table[val] || 0) + 1;	

	dataset.forEach(addFreq);
	return table;
}