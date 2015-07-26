import toArray = require("../common/toArray");
export = distinct;

function distinct(data: number[]|{}): number[] {
	var dataset = toArray(data);
	
	var isIn = (array, value) => array.some(v => value === v);
	var reducer = (array, value) => {
		if (!isIn(array, value)) array.push(value);
		return array;
	} 
	
	return dataset.reduce(reducer, []);
}