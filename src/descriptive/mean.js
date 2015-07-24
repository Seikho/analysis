var common = require("../common/api");
var sum = require("../common/sum");
function mean(data) {
    var dataset = common.toArray(data);
    return sum(dataset) / dataset.length;
}
module.exports = mean;
//# sourceMappingURL=mean.js.map