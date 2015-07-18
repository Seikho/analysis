var objectToArray = require("./objectToArray");
/**
 * @return Number Returns the highest value in a dataset/array
 */
function max(data) {
    var dataset;
    if (data instanceof Array)
        dataset = data;
    else
        dataset = objectToArray(data);
    var maximum = dataset.reduce(function (prev, curr) {
        var isHigher = curr > prev;
        if (isHigher)
            prev = curr;
        return prev;
    }, 0);
    return maximum;
}
module.exports = max;
//# sourceMappingURL=max.js.map