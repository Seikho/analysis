var objectToArray = require("./objectToArray");
function sum(data) {
    var dataset = objectToArray(data);
    var total = dataset.reduce(function (prev, curr) { return prev += curr; }, 0);
    return total;
}
module.exports = sum;
//# sourceMappingURL=sum.js.map