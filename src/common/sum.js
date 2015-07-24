var common = require("./api");
function sum(data) {
    var dataset = common.toArray(data);
    var add = function (left, right) { return left + right; };
    return dataset.reduce(add);
}
module.exports = sum;
//# sourceMappingURL=sum.js.map