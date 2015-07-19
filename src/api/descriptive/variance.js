var mean = require("./mean");
var objectToArray = require("../common/objectToArray");
/**
 * Variance in a population
 * Averaged squared deviation from the mean
 */
function variance(data) {
    var dataset = objectToArray(data);
    var dataMean = mean(dataset);
    var deviationsSqaured = dataset.reduce(function (prev, curr) {
        var deviation = Math.pow(curr - dataMean, 2);
        prev += deviation;
    }, 0);
    return deviationsSqaured / dataset.length;
}
module.exports = variance;
//# sourceMappingURL=variance.js.map