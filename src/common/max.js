var toArray = require("./toArray");
/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data) {
    var dataset = toArray(data);
    if (dataset.length === 0)
        return null;
    return dataset.reduce(getMax, -Infinity);
}
function getMax(left, right) {
    return left > right
        ? left
        : right;
}
module.exports = max;
//# sourceMappingURL=max.js.map