import isNumber = require("./isNumber");
export = isEven;

function isEven(value: number): boolean {
	if (!isNumber(value)) throw new TypeError("Input must be a number");
	return value % 2 === 0;
}