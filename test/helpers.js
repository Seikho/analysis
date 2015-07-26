var chai = require("chai");
var expect = chai.expect;
function arrayIsEqual(left, right) {
    var isEqual = function (value, index) { return expect(value).to.equal(right[index]); };
    expect(Array.isArray(left)).to.equal(Array.isArray(right));
    expect(left.length).to.equal(right.length);
    left.forEach(isEqual);
}
exports.arrayIsEqual = arrayIsEqual;
function datasetIsEquiv(left, right) {
    var rightHasKey = function (key) { return right[key] != null; };
    var isEqual = function (key) { return expect(left[key]).to.equal(right[key]); };
    var isTrue = Object.keys(left).every(rightHasKey);
    expect(isTrue).to.be.true;
    Object.keys(left)
        .forEach(isEqual);
}
exports.datasetIsEquiv = datasetIsEquiv;
function double(value) {
    return value * 2;
}
exports.double = double;
function halve(value) {
    return value / 2;
}
exports.halve = halve;
//# sourceMappingURL=helpers.js.map