var range = require("../common/range");
var objectToArray = require("../common/objectToArray");
function histogram(data, binOptions) {
    var dataset = objectToArray(data);
    binOptions = fixBinSettings(dataset, binOptions);
    var result = getEmptyHistogram(binOptions.binCount);
    dataset.forEach(function (value) {
        var roughBinNumber = (value - binOptions.minimum) / binOptions.binSize;
        var binNumber = Math.floor(roughBinNumber) + 1;
        if (value === binOptions.maximum)
            binNumber = binOptions.binCount;
        result[binNumber]++;
    });
    2;
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
    var isValidMinimum = typeof binOptions.minimum === "number";
    var isValidMaximum = typeof binOptions.maximum === "number";
    if (!isValidMaximum || !isValidMinimum) {
        var dataRange = range(dataset);
        binOptions.maximum = dataRange.maximum;
        binOptions.minimum = dataRange.minimum;
    }
    binOptions.difference = binOptions.maximum - binOptions.minimum;
    if (!binOptions.binCount) {
        binOptions.binCount = Math.ceil(binOptions.difference / binOptions.binSize);
        binOptions.binSize = binOptions.difference / binOptions.binCount;
    }
    if (!binOptions.binSize) {
        binOptions.binSize = binOptions.difference / binOptions.binCount;
    }
    return binOptions;
}
module.exports = histogram;
//# sourceMappingURL=histogram.js.map