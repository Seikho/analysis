var isNum = require("../common/isNumber");
var range = require("../common/range");
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
module.exports = fixBinSettings;
//# sourceMappingURL=binSettings.js.map