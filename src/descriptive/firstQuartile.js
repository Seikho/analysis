var toArray = require("../common/toArray");
var isEven = require("../common/isEven");
var errors = require("../errors");
function firstQuartile(data) {
    var dataset = toArray(data);
    if (dataset.length < 4)
        throw new Error(errors.InsufficientValues);
    var upperIndex = Math.floor(dataset.length / 2) - 1;
    var middleIndex = upperIndex / 2;
    dataset.sort(function (l, r) { return l - r; });
    if (isEven(dataset.length))
        return dataset[middleIndex];
    var down = Math.floor(middleIndex);
    var up = Math.ceil(middleIndex);
    return (dataset[down] + dataset[up]) / 2;
}
module.exports = firstQuartile;
//# sourceMappingURL=firstQuartile.js.map