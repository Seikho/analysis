import isNumber = require("./isNumber");
export = convert;

function convert(data: number[]|{}) {
	if (data instanceof Array) {
		data.forEach(isNumber);
		return data.slice();
	}
	if (typeof data !== "object") throw new TypeError("Input must be array or object");

	var dot = key => isNumber(data[key]);
	return Object.keys(data).map(dot);
}