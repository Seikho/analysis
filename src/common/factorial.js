var isNum = require("./isNumber");
var errors = require("../errors");
var isWhole = require("./isWhole");
function factorial(n) {
    if (!isNum(n))
        throw new TypeError(errors.MustBeNumber);
    if (n < 1)
        throw new TypeError(errors.MustBeAtLeastOne);
    if (!isWhole(n))
        throw new TypeError(errors.MustBeWhole);
    if (n === 1)
        return 1;
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