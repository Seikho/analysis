var toArray = require("../common/toArray");
function intersect(left, right) {
    var leftData = toArray(left);
    var rightData = toArray(right);
    var isInArray = function (array, value) { return array.some(function (v) { return value === v; }); };
    var isInRight = function (value) { return rightData.some(function (v) { return value === v; }); };
    var reducer = function (array, value) {
        if (isInArray(array, value))
            return array;
        if (isInRight(value))
            array.push(value);
        return array;
    };
    return leftData.reduce(reducer, []);
}
module.exports = intersect;
//# sourceMappingURL=intersect.js.map