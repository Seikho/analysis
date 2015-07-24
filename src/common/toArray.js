var validateArray = require("./validateArray");
function convert(data) {
    if (data instanceof Array)
        return validateArray(data);
    if (typeof data !== "object")
        throw new TypeError("Input must be array or object");
    var dot = function (key) { return data[key]; };
    return validateArray(Object.keys(data).map(dot));
}
module.exports = convert;
//# sourceMappingURL=toArray.js.map