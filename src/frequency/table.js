var objectToArray = require("../common/objectToArray");
function table(data) {
    var dataset = objectToArray(data);
    var addFreq = function (freqs, val) {
        freqs[val] = (freqs[val] || 0) + 1;
        return freqs;
    };
    return dataset.reduce(addFreq, {});
}
module.exports = table;
//# sourceMappingURL=table.js.map