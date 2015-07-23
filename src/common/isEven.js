var isNumber = require("./isNumber");
function isEven(value) {
    if (!isNumber(value))
        throw new TypeError("Input must be a number");
    return value % 2 === 0;
}
module.exports = isEven;
//# sourceMappingURL=isEven.js.map