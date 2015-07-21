import isNumber = require("./isNumber");
import validateArray = require("./validateArray");
export = convert;

function convert(data: number[]|{}): number[] {
	if (data instanceof Array)
		return validateArray(data);

	if (typeof data !== "object") throw new TypeError("Input must be array or object");

	var dot = key => data[key];
	return validateArray(Object.keys(data).map(dot));
}