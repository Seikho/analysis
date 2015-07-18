var objectToArray = require("../common/objectToArray");
function table(data) {
    var dataset = objectToArray(data);
    var frequencyTable = dataset.reduce(function (prev, current) {
        var hasCount = !!frequencyTable[current];
        if (hasCount)
            frequencyTable[current]++;
        else
            frequencyTable[current] = 1;
        return prev;
    }, {});
    return frequencyTable;
}
module.exports = table;
//# sourceMappingURL=table.js.map