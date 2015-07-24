var errors = require("../errors");
var isNum = require("../common/isNumber");
function chiSquare(observedFrequency, expectedFrequency) {
    if (!isNum(observedFrequency) || !isNum(expectedFrequency))
        throw new TypeError(errors.AllMustBeNumbers);
    var top = Math.pow(observedFrequency - expectedFrequency, 2);
    return top / expectedFrequency;
}
module.exports = chiSquare;
//# sourceMappingURL=chiSquare.js.map