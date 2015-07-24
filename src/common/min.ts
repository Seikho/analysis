import common = require("./api");
export = min;

/**
 * @return Number Returns the lowest value in a dataset/array
 */
function min(data: number[]|{}): number {
	return common.toArray(data).reduce(getMin);
}

function getMin(left: number, right: number) {
	return left > right
		? right
		: left;
}