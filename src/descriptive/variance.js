var toArray = require("../common/toArray");
var sum = require("../common/sum");
var mean = require("./mean");
/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data) {
    var dataset = toArray(data);
    var dataMean = mean(data);
    var calcVariance = function (val) { return squared(val - dataMean); };
    var squared = function (val) { return Math.pow(val, 2); };
    var variances = dataset.map(calcVariance);
    return sum(variances) / dataset.length;
}
module.exports = variance;
//# sourceMappingURL=variance.js.map