var toArray = require("../common/toArray");
var isWhole = require("../common/isWhole");
var sortAsc = require("../common/sortAsc");
function thirdQuartile(data) {
    var dataset = sortAsc(toArray(data));
    if (dataset.length < 4)
        return null;
    var offset = dataset.length * 0.75;
    var offsetFloored = Math.floor(offset);
    if (!isWhole(offset))
        return dataset[offsetFloored];
    var otherOffset = offsetFloored - 1;
    return (dataset[offsetFloored] + dataset[otherOffset]) / 2;
}
module.exports = thirdQuartile;
//# sourceMappingURL=thirdQuartile.js.map