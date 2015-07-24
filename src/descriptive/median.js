var common = require("../common/api");
function median(data) {
    var dataset = common.toArray(data);
    var sortedDataset = dataset.sort(function (left, right) { return left - right; });
    var middleIndex = sortedDataset.length / 2;
    if (!common.isEven(dataset.length)) {
        var index = Math.floor(middleIndex);
        return sortedDataset[index];
    }
    var lowerIndex = middleIndex - 1;
    return (sortedDataset[lowerIndex] + sortedDataset[middleIndex]) / 2;
}
module.exports = median;
//# sourceMappingURL=median.js.map