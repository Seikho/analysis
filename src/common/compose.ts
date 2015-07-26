import errors = require("../errors");
export = compose;

function compose(...functions: Function[]) {
	let isEnoughArgs = functions.length > 1;
	if (!isEnoughArgs) throw new TypeError(errors.InsufficientValues)

	let isAllFuncs = functions.every(fn => fn instanceof Function);
	if (!isAllFuncs) throw new TypeError(errors.AllMustBeFunctions);

	let isAllEqual = functions.every(fn => fn.length === functions[0].length);
	if (!isAllEqual) throw new TypeError(errors.AllArgsSameLength);
	
	return function composition(...args: any[]) {
		return functions.reduceRight(fn => fn(args));
	}
}