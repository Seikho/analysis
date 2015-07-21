var objectToArray = require("./objectToArray");
/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data) {
    return objectToArray(data).reduce(getMax);
}
function getMax(left, right) {
    return left > right
        ? left
        : right;
}
module.exports = max;
//# sourceMappingURL=max.js.map