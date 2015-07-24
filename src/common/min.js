var common = require("./api");
/**
 * @return Number Returns the lowest value in a dataset/array
 */
function min(data) {
    return common.toArray(data).reduce(getMin);
}
function getMin(left, right) {
    return left > right
        ? right
        : left;
}
module.exports = min;
//# sourceMappingURL=min.js.map