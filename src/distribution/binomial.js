var errors = require("../errors");
var coefficient = require("./binomialCoefficient");
var isWhole = require("../common/isWhole");
function table(events) {
    if (typeof events !== "number")
        throw new TypeError(errors.MustBeNumber);
    if (!isWhole(events))
        throw new TypeError(errors.MustBeWhole);
    if (events < 1)
        throw new TypeError(errors.MustBeAtLeastOne);
    var result = {};
    for (var x = 0; x <= events; x++) {
        result[x] = coefficient(events, x);
    }
    return result;
}
module.exports = table;
//# sourceMappingURL=binomial.js.map