var objectToArray = require("./objectToArray");
/**
 * @return Number Returns the lowest value in a dataset/array
 */
function min(data) {
    var dataset;
    if (data instanceof Array)
        dataset = data;
    else
        dataset = objectToArray(data);
    var minimum = dataset.reduce(function (prev, curr) {
        var isHigher = curr < prev;
        if (isHigher)
            prev = curr;
        return prev;
    }, dataset[0]);
    return minimum;
}
module.exports = min;
//# sourceMappingURL=min.js.map