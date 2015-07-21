export = convert;

function convert(data: number[]|{}) {
	if (data instanceof Array) return data.slice();
	if (typeof data !== "object") typeError();

	var dot = key => isNumber(data[key]);
	return Object.keys(data).map(dot);
}

function isNumber(value: any) {
	// console.log("is number? %d === %s", value, typeof value === "number");
	return typeof value === "number"
		? value
		: typeError();
}

function typeError() {
	throw new TypeError("All values must be numbers");
}