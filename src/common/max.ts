import toArray = require("./toArray");
export = max;

/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data: number[]|{}): number {
	return toArray(data).reduce(getMax, null);
}

function getMax(left: number, right: number): number {
	return left > right
		? left
		: right;
}