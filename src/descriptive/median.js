var toArray = require("../common/toArray");
var isEven = require("../common/isEven");
function median(data) {
    var dataset = toArray(data);
    var sortedDataset = dataset.sort(function (left, right) { return left - right; });
    var middleIndex = sortedDataset.length / 2;
    if (!isEven(dataset.length)) {
        var index = Math.floor(middleIndex);
        return sortedDataset[index];
    }
    var lowerIndex = middleIndex - 1;
    return (sortedDataset[lowerIndex] + sortedDataset[middleIndex]) / 2;
}
module.exports = median;
//# sourceMappingURL=median.js.map