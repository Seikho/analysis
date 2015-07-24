var toArray = require("./toArray");
function sum(data) {
    var dataset = toArray(data);
    var add = function (left, right) { return left + right; };
    return dataset.reduce(add);
}
module.exports = sum;
//# sourceMappingURL=sum.js.map