var toArray = require("../common/toArray");
function distinct(data) {
    var dataset = toArray(data);
    var isIn = function (array, value) { return array.some(function (v) { return value === v; }); };
    var reducer = function (array, value) {
        if (!isIn(array, value))
            array.push(value);
        return array;
    };
    return dataset.reduce(reducer);
}
module.exports = distinct;
//# sourceMappingURL=distinct.js.map