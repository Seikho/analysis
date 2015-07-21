var mean = require("./mean");
var objectToArray = require("../common/objectToArray");
/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data) {
    var dataset = objectToArray(data);
    var dataMean = mean(dataset);
    var calcVariance = function (val) { return val - dataMean; };
    var squared = function (val) { return Math.pow(val, 2); };
    return dataset
        .map(squared)
        .map(calcVariance)
        .reduce(mean);
}
module.exports = variance;
//# sourceMappingURL=variance.js.map