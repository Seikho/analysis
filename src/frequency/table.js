var objectToArray = require("../common/objectToArray");
function table(data) {
    var dataset = objectToArray(data);
    var table = {};
    var addFreq = function (val) { return table[val] = (table[val] || 0) + 1; };
    dataset.forEach(addFreq);
    return table;
}
module.exports = table;
//# sourceMappingURL=table.js.map