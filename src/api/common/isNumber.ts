export = isNumber

function isNumber(value: any) {
	if (isNaN(value)) throw new TypeError("Value must be a number");
	return value;
}