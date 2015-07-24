var isNumber = require("./isNumber");
var errors = require("../errors");
function validate(data) {
    var isValid = data.every(isNumber);
    if (isValid)
        return data.slice();
    throw new TypeError(errors.AllMustBeNumbers);
}
module.exports = validate;
//# sourceMappingURL=validateArray.js.map