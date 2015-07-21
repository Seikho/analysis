var isNumber = require("./isNumber");
function validate(data) {
    var isValid = data.every(isNumber);
    if (isValid)
        return data.slice();
    throw new TypeError("All values must be numbers");
}
module.exports = validate;
//# sourceMappingURL=validateArray.js.map