var binSettings = require("./binSettings");
var common = require("../common/api");
function histogram(data, binOptions) {
    var dataset = common.toArray(data);
    binOptions = binSettings(dataset, binOptions);
    var result = getEmptyHistogram(binOptions.binCount);
    var roughBin = function (val) { return (val - binOptions.minimum) / binOptions.binSize; };
    var realBin = function (val) { return Math.floor(roughBin(val)) + 1; };
    var adjustBin = function (val) { return common.isEven(binOptions.binSize)
        ? val - 1
        : val; };
    dataset.forEach(function (value) {
        var binNumber = adjustBin(realBin(value));
        result[binNumber]++;
    });
    return result;
}
function getEmptyHistogram(binCount) {
    var emptyHistogram = {};
    for (var x = 1; x <= binCount; x++) {
        emptyHistogram[x] = 0;
    }
    return emptyHistogram;
}
module.exports = histogram;
//# sourceMappingURL=histogram.js.map