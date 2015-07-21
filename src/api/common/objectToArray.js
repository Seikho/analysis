function convert(data) {
    if (data instanceof Array)
        return data.slice();
    if (typeof data !== "object")
        typeError();
    var dot = function (key) { return isNumber(data[key]); };
    return Object.keys(data).map(dot);
}
function isNumber(value) {
    // console.log("is number? %d === %s", value, typeof value === "number");
    return typeof value === "number"
        ? value
        : typeError();
}
function typeError() {
    throw new TypeError("All values must be numbers");
}
module.exports = convert;
//# sourceMappingURL=objectToArray.js.map