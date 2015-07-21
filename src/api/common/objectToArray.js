var isNumber = require("./isNumber");
function convert(data) {
    if (data instanceof Array) {
        data.forEach(isNumber);
        return data.slice();
    }
    if (typeof data !== "object")
        throw new TypeError("Input must be array or object");
    var dot = function (key) { return isNumber(data[key]); };
    return Object.keys(data).map(dot);
}
module.exports = convert;
//# sourceMappingURL=objectToArray.js.map