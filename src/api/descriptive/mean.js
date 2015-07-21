var objectToArray = require("../common/objectToArray");
var sum = require("../common/sum");
function mean(data) {
    var dataset = objectToArray(data);
    return sum(dataset) / dataset.length;
}
module.exports = mean;
//# sourceMappingURL=mean.js.map