var objectToArray = require("../common/objectToArray");
function median(data) {
    var dataset = objectToArray(data);
    var sortedDataset = dataset.sort(function (left, right) { return left - right; });
    var isEvenAmount = (sortedDataset.length % 2) === 0;
    var middleIndex = sortedDataset.length / 2;
    if (!isEvenAmount) {
        var index = Math.floor(middleIndex);
        return sortedDataset[index];
    }
    var lowerIndex = middleIndex - 1;
    return (sortedDataset[lowerIndex] + sortedDataset[middleIndex]) / 2;
}
module.exports = median;
//# sourceMappingURL=median.js.map