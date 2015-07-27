import Analysis = require("analysis");
import curry = require("../common/curry");
import distinct = require("./distinct");
export = intersect;

function intersect(left: number[]|{}, right: number[]|{}): number[] {
	var leftData = distinct(left);
	var rightData = distinct(right);
	
	var isIn = value => leftData.some(v => value === v);
	var push = curry((array, value) => isIn(value) ? array.concat([value]) : array);

	var result = rightData.reduce(push, []);
	
	return result;
}