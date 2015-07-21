var mean = require("./mean");
var sum = require("../common/sum");
var objectToArray = require("../common/objectToArray");
/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data) {
    var dataset = objectToArray(data);
    var dataMean = mean(data);
    var calcVariance = function (val) { return squared(val - dataMean); };
    var squared = function (val) { return Math.pow(val, 2); };
    var variances = dataset.map(calcVariance);
    return sum(variances) / dataset.length;
}
module.exports = variance;
//# sourceMappingURL=variance.js.map