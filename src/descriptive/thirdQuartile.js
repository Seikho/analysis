var toArray = require("../common/toArray");
var isEven = require("../common/isEven");
var sortDesc = require("../common/sortDesc");
var errors = require("../errors");
function thirdQuartile(data) {
    var dataset = sortDesc(toArray(data));
    if (dataset.length < 4)
        throw new Error(errors.InsufficientValues);
    var upperIndex = Math.floor(dataset.length / 2) - 1;
    var middleIndex = upperIndex / 2;
    if (isEven(dataset.length))
        return dataset[middleIndex];
    var down = Math.floor(middleIndex);
    var up = Math.ceil(middleIndex);
    return (dataset[down] + dataset[up]) / 2;
}
module.exports = thirdQuartile;
//# sourceMappingURL=thirdQuartile.js.map