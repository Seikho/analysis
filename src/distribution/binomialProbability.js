var factorial = require("../common/factorial");
var isWhole = require("../common/isWhole");
var errors = require("../errors");
function probability(events, x) {
    if (typeof x !== "number" || typeof events !== "number")
        throw new TypeError(errors.MustBeNumber);
    if (!isWhole(events) || !isWhole(x))
        throw new TypeError(errors.MustBeWhole);
    if (events < 1)
        throw new TypeError(errors.EventsMustBeAtLeastOne);
    if (x < 0)
        throw new TypeError(errors.RandomVariableMustBeAtLeastZero);
    var xFactorial = factorial(x);
    var eventsFactorial = factorial(events);
    var possibilities = Math.pow(2, events);
    return (eventsFactorial / xFactorial * (eventsFactorial - xFactorial)) / possibilities;
}
module.exports = probability;
//# sourceMappingURL=binomialProbability.js.map