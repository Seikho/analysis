var toArray = require("./toArray");
/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data) {
    return toArray(data).reduce(getMax);
}
function getMax(left, right) {
    return left > right
        ? left
        : right;
}
module.exports = max;
//# sourceMappingURL=max.js.map