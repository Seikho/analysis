import objectToArray = require("./objectToArray");
export = max;

/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data: number[]|{}): number {
	return objectToArray(data).reduce(getMax);
}

function getMax(left: number, right: number): number {
	return left > right
		? left
		: right;
}