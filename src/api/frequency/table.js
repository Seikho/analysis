var objectToArray = require("../common/objectToArray");
function table(data) {
    var dataset = objectToArray(data);
    var frequencyTable = dataset.reduce(function (prev, current) {
        var hasCount = !!prev[current];
        if (hasCount)
            prev[current]++;
        else
            prev[current] = 1;
        return prev;
    }, {});
    return frequencyTable;
}
module.exports = table;
//# sourceMappingURL=table.js.map