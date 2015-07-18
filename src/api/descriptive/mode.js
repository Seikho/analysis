var max = require("../common/max");
var objectToArray = require("../common/objectToArray");
function mode(data) {
    var dataset;
    if (typeof data === "object")
        dataset = objectToArray(data);
    else
        dataset = data;
    var distribution = dataset.reduce(function (prev, curr) {
        var hasValue = !!prev[curr];
        if (hasValue)
            prev[curr]++;
        else
            prev[curr] = 1;
        return prev;
    }, []);
    var maximum = max(distribution);
    var modes = [];
    distribution.forEach(function (value, index) {
        if (value === maximum)
            modes.push(index);
    });
    return modes;
}
module.exports = mode;
//# sourceMappingURL=mode.js.map