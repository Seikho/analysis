var objectToArray = require("./objectToArray");
function sum(data) {
    var dataset = objectToArray(data);
    var add = function (left, right) { return left + right; };
    return dataset.reduce(add);
}
module.exports = sum;
//# sourceMappingURL=sum.js.map