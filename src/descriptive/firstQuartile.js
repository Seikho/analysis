var objectToArray = require("../common/objectToArray");
function firstQuartile(data) {
    var dataset = objectToArray(data);
    if (dataset.length < 4)
        throw new Error("Not enough values supplied");
    var upperIndex = Math.floor(dataset.length / 2) - 1;
    var middleIndex = upperIndex / 2;
    dataset.sort(function (l, r) { return l - r; });
    if (middleIndex % 2 === 0)
        return dataset[middleIndex];
    var down = Math.floor(middleIndex);
    var up = Math.ceil(middleIndex);
    return (dataset[down] + dataset[up]) / 2;
}
module.exports = firstQuartile;
//# sourceMappingURL=firstQuartile.js.map