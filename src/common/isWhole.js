var errors = require("../errors");
var isNum = require("./isNumber");
function isWhole(value) {
    if (!isNum(value))
        throw new TypeError(errors.MustBeNumber);
    return value % 1 === 0;
}
module.exports = isWhole;
//# sourceMappingURL=isWhole.js.map