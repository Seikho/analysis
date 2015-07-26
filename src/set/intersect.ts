import Analysis = require("analysis");
import toArray = require("../common/toArray");
export = intersect;

function intersect(left: number[]|{}, right: number[]|{}): number[] {
	var leftData = toArray(left);
	var rightData = toArray(right);
	
	var isInArray = (array, value) => array.some(v => value === v); 
	var isInRight = value => rightData.some(v => value === v);
	
	var reducer = (array, value) => {
		if (isInArray(array, value)) return array;
		if (isInRight(value)) array.push(value);
		return array;
	} 
	
	return leftData.reduce(reducer, []);	
}