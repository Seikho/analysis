var isNumber = require("./isNumber");
var errors = require("../errors");
function isEven(value) {
    if (!isNumber(value))
        throw new TypeError(errors.MustBeNumber);
    return value % 2 === 0;
}
module.exports = isEven;
//# sourceMappingURL=isEven.js.map