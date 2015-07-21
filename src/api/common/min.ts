import objectToArray = require("./objectToArray");
export = min;

/**
 * @return Number Returns the lowest value in a dataset/array
 */
function min(data: number[]|{}): number {
	return objectToArray(data).reduce(getMin);
}

function getMin(left: number, right: number) {
	return left > right
		? right
		: left;
}