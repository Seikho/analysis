import max = require("../common/max");
import objectToArray = require("../common/objectToArray");
export = mode;

function mode(data: number[]|{}) {
	var dataset: number[];
	if (typeof data === "object") dataset = objectToArray(data);
	else dataset = <number[]>data;
	
	var distribution = dataset.reduce((prev, curr) => {
		let hasValue = !!prev[curr];
		
		if (hasValue) prev[curr]++;
		else prev[curr] = 1;
		
		return prev;
	}, []);
	
	var maximum = max(distribution);
	
	var modes: number[] = [];
	distribution.forEach((value, index) => {
		if (value === maximum) modes.push(index);
	});
	
	return modes;		
}