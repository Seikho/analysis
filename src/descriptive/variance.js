var common = require("../common/api");
var descriptive = require("./api");
/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data) {
    var dataset = common.toArray(data);
    var dataMean = descriptive.mean(data);
    var calcVariance = function (val) { return squared(val - dataMean); };
    var squared = function (val) { return Math.pow(val, 2); };
    var variances = dataset.map(calcVariance);
    return common.sum(variances) / dataset.length;
}
module.exports = variance;
//# sourceMappingURL=variance.js.map