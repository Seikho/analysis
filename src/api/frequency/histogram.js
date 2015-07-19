var range = require("../common/range");
var objectToArray = require("../common/objectToArray");
function histogram(data, binOptions) {
    var dataset = objectToArray(data);
    binOptions = fixBinSettings(dataset, binOptions);
    var result = getEmptyHistogram(binOptions.binCount);
    dataset.forEach(function (value) {
        var binNumber = Math.ceil(value / binOptions.binSize);
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
    var dataRange = range(dataset);
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