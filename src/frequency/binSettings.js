var isNum = require("../common/isNumber");
var range = require("../common/range");
function binSettings(dataset, binOptions) {
    binOptions = binOptions || {
        binCount: 10,
        binSize: 0
    };
    if (!!binOptions.binCount && !!binOptions.binSize)
        throw new TypeError("Must provide either binSize or binCount, but not both.");
    if (!isNum(binOptions.minimum) || !isNum(binOptions.maximum)) {
        var dataRange = range(dataset);
        binOptions.maximum = dataRange.maximum;
        binOptions.minimum = dataRange.minimum;
    }
    binOptions.difference = binOptions.maximum - binOptions.minimum;
    var isValidBinCount = isNum(binOptions.binCount);
    var isValidBinSize = isNum(binOptions.binSize);
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
module.exports = binSettings;
//# sourceMappingURL=binSettings.js.map