var range = require("../common/range");
var objectToArray = require("../common/objectToArray");
function histogram(data, binOptions) {
    var dataset = objectToArray(data);
}
function getBinSettings(dataset, binOptions) {
    binOptions = binOptions || {
        binCount: 10,
        binSize: 0
    };
    var dataRange = range(dataset);
    if (!binOptions.binCount) {
        var binCount = dataRange.maximum - dataRange.minimum;
    }
    binOptions.binSize = (dataRange.maximum - dataRange.minimum) / binOptions.binCount;
    return binOptions;
}
module.exports = histogram;
//# sourceMappingURL=histogram.js.map