import isNumber = require("./isNumber");
export = validate;

function validate(data: number[]): number[] {
	var isValid = data.every(isNumber);
	if (isValid) return data.slice();
	
	throw new TypeError("All values must be numbers");
}