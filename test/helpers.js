var chai = require("chai");
var expect = chai.expect;
function arrayIsEqual(left, right) {
    var isEqual = function (value, index) { return expect(value).to.equal(right[index]); };
    describe("datasets are both Array", function () {
        expect(Array.isArray(left)).to.equal(Array.isArray(right));
    });
    describe("datasets are the same length", function () {
        expect(left.length).to.equal(right.length);
    });
    describe("dataset contents are equivalent", function () {
        left.forEach(isEqual);
    });
}
exports.arrayIsEqual = arrayIsEqual;
function datasetIsEquiv(left, right) {
    var rightHasKey = function (key) { return right[key] != null; };
    var rightKeyIsSame = function (key) { return left[key] === right[key]; };
    describe("datasets contain the same keys", function () {
        var isTrue = Object.keys(left).every(rightHasKey);
        expect(isTrue).to.be.true;
    });
    describe("datasets key-value pairs are equivalent", function () {
        var isTrue = Object.keys(left).every(rightKeyIsSame);
        expect(isTrue).to.be.true;
    });
}
exports.datasetIsEquiv = datasetIsEquiv;
//# sourceMappingURL=helpers.js.map