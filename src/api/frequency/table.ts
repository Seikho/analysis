import objectToArray = require("../common/objectToArray");
export = table;

function table(data: number[]|{}): {} {
	var dataset = objectToArray(data);
	
	var frequencyTable = dataset.reduce((prev, current) => {
		let hasCount = !!prev[current];
		
		if (hasCount) prev[current]++;
		else prev[current] = 1;
		
		return prev;
	}, {});
	
	return frequencyTable;
}