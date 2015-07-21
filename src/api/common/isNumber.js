function isNumber(value) {
    if (isNaN(value))
        throw new TypeError("Value must be a number");
    return value;
}
module.exports = isNumber;
//# sourceMappingURL=isNumber.js.map