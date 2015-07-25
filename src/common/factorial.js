var errors = require("../errors");
var isWhole = require("./isWhole");
function factorial(n) {
    if (n < 2)
        throw new TypeError(errors.MustBeTwoOrMore);
    if (!isWhole(n))
        throw new TypeError(errors.MustBeWhole);
    if (n === 2)
        return 2;
    var result = 2;
    for (var x = 3; x <= n; x++) {
        result *= x;
    }
    return result;
}
module.exports = factorial;
//# sourceMappingURL=factorial.js.map