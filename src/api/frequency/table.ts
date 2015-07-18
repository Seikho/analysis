import objectToArray = require("../common/objectToArray");
export = table;

function table(data: number[]|{}): {} {
	var dataset = objectToArray(data);
	
	var frequencyTable = dataset.reduce((prev, current) => {
		let hasCount = !!frequencyTable[current];
		
		if (hasCount) frequencyTable[current]++;
		else frequencyTable[current] = 1;
		
		return prev;
	}, {});
	
	return frequencyTable;
}