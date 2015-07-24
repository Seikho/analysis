var toArray = require("../common/toArray");
var isWhole = require("../common/isWhole");
var sortDesc = require("../common/sortDesc");
var errors = require("../errors");
function thirdQuartile(data) {
    var dataset = sortDesc(toArray(data));
    if (dataset.length < 4)
        throw new Error(errors.InsufficientValues);
    var offset = dataset.length * 0.75;
    var offsetFloored = Math.floor(offset);
    if (!isWhole(offset))
        return dataset[offsetFloored];
    var otherOffset = offsetFloored - 1;
    return (dataset[offsetFloored] + dataset[otherOffset]) / 2;
}
module.exports = thirdQuartile;
//# sourceMappingURL=thirdQuartile.js.map