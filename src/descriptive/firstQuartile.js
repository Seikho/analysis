var toArray = require("../common/toArray");
var isWhole = require("../common/isWhole");
var sortAsc = require("../common/sortAsc");
var errors = require("../errors");
function firstQuartile(data) {
    var dataset = sortAsc(toArray(data));
    if (dataset.length < 4)
        throw new Error(errors.InsufficientValues);
    var offset = dataset.length * 0.25;
    var offsetFloored = Math.floor(offset);
    if (!isWhole(offset))
        return dataset[offsetFloored];
    var otherOffset = offsetFloored - 1;
    return (dataset[offsetFloored] + dataset[otherOffset]) / 2;
}
module.exports = firstQuartile;
//# sourceMappingURL=firstQuartile.js.map