import errors = require("../errors");
import isWhole = require("./isWhole");
export = factorial;

function factorial(n: number): number {
	if (n < 2) throw new TypeError(errors.MustBeTwoOrMore);
	if (!isWhole(n)) throw new TypeError(errors.MustBeWhole); 
	
	if (n === 2) return 2;
	
	var result = 2;
	for (let x = 3;x <= n; x++) {
		result *= x;
	}
	return result;
}