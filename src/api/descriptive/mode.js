var max = require("../common/max");
var frequencyTable = require("../frequency/table");
function mode(data) {
    var table = frequencyTable(data);
    var maximum = max(table);
    var modes = [];
    Object.keys(table)
        .forEach(function (key) {
        var value = table[key];
        if (value === maximum)
            modes.push(Number(key));
    });
    return modes;
}
module.exports = mode;
//# sourceMappingURL=mode.js.map