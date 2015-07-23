var chai = require("chai");
var expect = chai.expect;
var common = require("../src/common/api");
describe("Common module unit tests", function () {
    it("will curry a simple 2 argument function", function () {
        var add = function (left, right) { return left + right; };
        var addOne = common.curry(add, 1);
        expect(addOne(2)).to.equal(3);
    });
    it("will correctly determine if a value is even", function () {
        expect(common.isEven(1)).to.be.false;
        expect(common.isEven(2)).to.be.true;
        expect(common.isEven(0)).to.be.true;
    });
    it("will throw when invalid input is passed to isEven", function () {
        expect(common.isEven.bind(common.isEven, "not a number")).to.throw("Input must be a number");
    });
    it("will throw when invalid input is passed to toArray", function () {
        expect(common.toArray.bind(common.toArray, "bad type")).to.throw("Input must be array or object");
        expect(common.toArray.bind(common.toArray, ["word", 1, 2, 3, 4])).to.throw("All values must be numbers");
    });
    it("will find the maximum number in a dataset", function () {
        expect(common.max([1, 2, 3, 4, 5, 6, 7])).to.equal(7);
        expect(common.max([-1, -2, -3, -4, -5, -6, -7])).to.equal(-1);
    });
    it("will find the minimum number in a dataset", function () {
        expect(common.min([1, 2, 3, 4, 5, 6, 7])).to.equal(1);
        expect(common.min([-3, 0, 3])).to.equal(-3);
    });
    it("will find the range (min and max) in a dataset", function () {
        var dataRange = common.range([10, 20, 30, 40, 50, 60]);
        expect(dataRange.minimum).to.equal(10);
        expect(dataRange.maximum).to.equal(60);
    });
    it("will convert an object of string:number to an array", function () {
        var obj = {
            "one": 1,
            "two": 2,
            "three": 3
        };
        var data = common.toArray(obj);
        expect(data.length).to.equal(3);
        expect(data).to.contain(1);
        expect(data).to.contain(2);
        expect(data).to.contain(3);
    });
    it("will round a value correctly to 0 decimal places", function () {
        var rounded = common.round(123.456);
        expect(rounded).to.equal(123);
    });
    it("will round a value correctly to 1 decimal places", function () {
        var rounded = common.round(123.456, 1);
        expect(rounded).to.equal(123.5);
    });
    it("will round a value correctly to 2 decimal places", function () {
        var rounded = common.round(123.456, 2);
        expect(rounded).to.equal(123.46);
    });
    it("will calculate the sum of a dataset", function () {
        var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var total = common.sum(data);
        expect(total).to.equal(55);
    });
});
//# sourceMappingURL=common.js.map