import errors = require("../errors");
export = compose;

function compose<T>(...functions: Array<(...innerArgs: any[]) => T>): (...outerArgs: any[]) => T  {
	let isEnoughArgs = functions.length > 1;
	if (!isEnoughArgs) throw new TypeError(errors.InsufficientValues)

	let isAllFuncs = functions.every(fn => fn instanceof Function);
	if (!isAllFuncs) throw new TypeError(errors.AllMustBeFunctions);

	let isAllEqual = functions.every((fn, index) => index === 0 || fn.length === 1);
	if (!isAllEqual) throw new TypeError(errors.AllFuncsMustBeUnary);
	
	return function(...args: any[]) {
		return functions.reduceRight<T>((prev, fn) => {
			if (prev === undefined) prev = fn(args);
			else prev = fn(prev);
			return prev;
		}, undefined);
	}
}