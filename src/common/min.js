var toArray = require("./toArray");
/**
 * @return Number Returns the lowest value in a dataset/array
 */
function min(data) {
    var dataset = toArray(data);
    if (dataset.length === 0)
        return null;
    return dataset.reduce(getMin, Infinity);
}
function getMin(left, right) {
    return left > right
        ? right
        : left;
}
module.exports = min;
//# sourceMappingURL=min.js.map