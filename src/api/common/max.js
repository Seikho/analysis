var objectToArray = require("./objectToArray");
/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data) {
    var dataset = objectToArray(data);
    var maximum = dataset.reduce(getMax, 0);
    return maximum;
}
function getMax(left, right) {
    return left > right
        ? left
        : right;
}
module.exports = max;
//# sourceMappingURL=max.js.map