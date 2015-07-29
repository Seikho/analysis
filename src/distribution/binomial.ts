import Types = require("analysis");
import errors = require("../errors");
import coefficient = require("./binomialCoefficient");
import isWhole = require("../common/isWhole");
export = table;

function table(events: number): Types.Dataset {
	if (typeof events !== "number") throw new TypeError(errors.MustBeNumber);
	if (!isWhole(events)) throw new TypeError(errors.MustBeWhole);
	if (events < 1) throw new TypeError(errors.MustBeAtLeastOne);
	
	var result: Types.Dataset = {};
	
	for (let x = 0;x <= events; x++) {
		result[x] = coefficient(events, x);
	}
	
	return result;
}