var common = require("../common/api");
var frequencyTable = require("../frequency/table");
function mode(data) {
    var table = frequencyTable(data);
    var maximum = common.max(table);
    var isMax = function (key) { return table[key] === maximum; };
    var toNum = function (key) { return Number(key); };
    return Object
        .keys(table)
        .filter(isMax)
        .map(toNum);
}
module.exports = mode;
//# sourceMappingURL=mode.js.map