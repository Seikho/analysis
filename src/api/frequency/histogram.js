var range = require("../common/range");
var objectToArray = require("../common/objectToArray");
function histogram(data, binOptions) {
    var dataset = objectToArray(data);
    var dataRange = range(dataset);
    binOptions = fixBinSettings(dataset, dataRange, binOptions);
    var result = getEmptyHistogram(binOptions.binCount);
    dataset.forEach(function (value) {
        var roughBinNumber = (value - dataRange.minimum) / binOptions.binSize;
        var binNumber = Math.floor(roughBinNumber) + 1;
        if (value === dataRange.maximum)
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
function fixBinSettings(dataset, dataRange, binOptions) {
    binOptions = binOptions || {
        binCount: 10,
        binSize: 0
    };
    if (!binOptions.binCount) {
        binOptions.binCount = Math.ceil(dataRange.difference / binOptions.binSize);
        binOptions.binSize = dataRange.difference / binOptions.binCount;
    }
    if (!binOptions.binSize) {
        binOptions.binSize = dataRange.difference / binOptions.binCount;
    }
    return binOptions;
}
module.exports = histogram;
//# sourceMappingURL=histogram.js.map