var curry = require("../common/curry");
var distinct = require("./distinct");
function intersect(left, right) {
    var leftData = distinct(left);
    var rightData = distinct(right);
    var isIn = function (value) { return leftData.some(function (v) { return value === v; }); };
    var push = curry(function (array, value) { return isIn(value) ? array.concat([value]) : array; });
    var result = rightData.reduce(push, []);
    return result;
}
module.exports = intersect;
//# sourceMappingURL=intersect.js.map