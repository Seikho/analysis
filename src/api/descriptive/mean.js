var objectToArray = require("../common/objectToArray");
function mean(data) {
    var dataset;
    if (typeof data === "object")
        dataset = objectToArray(data);
    else
        dataset = data;
    var sampleSize = dataset.length;
    var total = dataset.reduce(function (previous, current) {
        previous += current;
        return previous;
    }, 0);
    return total / sampleSize;
}
module.exports = mean;
//# sourceMappingURL=mean.js.map