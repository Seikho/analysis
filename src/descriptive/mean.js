var toArray = require("../common/toArray");
var sum = require("../common/sum");
function mean(data) {
    var dataset = toArray(data);
    return sum(dataset) / dataset.length;
}
module.exports = mean;
//# sourceMappingURL=mean.js.map