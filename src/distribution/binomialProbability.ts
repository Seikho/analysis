import factorial = require("../common/factorial");
import isWhole = require("../common/isWhole");
import errors = require("../errors");
export = probability;

function probability(events: number, x: number) {
	if (typeof x !== "number" || typeof events !== "number") throw new TypeError(errors.MustBeNumber);
	if (!isWhole(events) || !isWhole(x)) throw new TypeError(errors.MustBeWhole);
	if (events < 1) throw new TypeError(errors.EventsMustBeAtLeastOne);
	if (x < 0) throw new TypeError(errors.RandomVariableMustBeAtLeastZero);
	
	var xFactorial = factorial(x);
	var eventsFactorial = factorial(events);
	var possibilities = Math.pow(2,events);
	
	return (eventsFactorial / xFactorial * (eventsFactorial - xFactorial)) / possibilities;
}