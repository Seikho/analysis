var common = require("./api");
/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data) {
    return common.toArray(data).reduce(getMax);
}
function getMax(left, right) {
    return left > right
        ? left
        : right;
}
module.exports = max;
//# sourceMappingURL=max.js.map