var range = require("../common/range");
var objectToArray = require("../common/objectToArray");
var isNum = require("../common/isNumber");
function histogram(data, binOptions) {
    var dataset = objectToArray(data);
    binOptions = fixBinSettings(dataset, binOptions);
    var result = getEmptyHistogram(binOptions.binCount);
    var roughBin = function (val) { return (val - binOptions.minimum) / binOptions.binSize; };
    var realBin = function (val) { return Math.floor(roughBin(val)) + 1; };
    var adjustBin = function (val) { return val % binOptions.binSize === 0 ? val - 1 : val; };
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
function fixBinSettings(dataset, binOptions) {
    binOptions = binOptions || {
        binCount: 10,
        binSize: 0
    };
    if (!isNum(binOptions.minimum) || !isNum(binOptions.maximum)) {
        var dataRange = range(dataset);
        binOptions.maximum = dataRange.maximum;
        binOptions.minimum = dataRange.minimum;
    }
    binOptions.difference = binOptions.maximum - binOptions.minimum;
    var isValidBinCount = isNum(binOptions.binCount);
    var isValidBinSize = isNum(binOptions.binSize);
    if (!isValidBinCount && !isValidBinSize) {
        binOptions.binCount = 10;
        isValidBinCount = true;
    }
    if (!isValidBinCount) {
        binOptions.binCount = Math.ceil(binOptions.difference / binOptions.binSize);
        binOptions.binSize = binOptions.difference / binOptions.binCount;
        isValidBinSize = true;
    }
    if (!isValidBinSize) {
        binOptions.binSize = binOptions.difference / binOptions.binCount;
    }
    return binOptions;
}
module.exports = histogram;
//# sourceMappingURL=histogram.js.map