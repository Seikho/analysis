var max = require("../src/api/common/max");
var min = require("../src/api/common/min");
var range = require("../src/api/common/range");
var objectToArray = require("../src/api/common/objectToArray");
var round = require("../src/api/common/round");
var chai = require("chai");
var expect = chai.expect;
describe("Common module unit tests", function () {
    it("will find the maximum number in a dataset", function () {
        var data = [1, 2, 3, 4, 5, 6, 7];
        expect(max(data)).to.equal(7);
    });
    it("will find the minimum number in a dataset", function () {
        var data = [1, 2, 3, 4, 5, 6, 7];
        expect(min(data)).to.equal(1);
    });
    it("will find the range (min and max) in a dataset", function () {
        var data = [10, 20, 30, 40, 50, 60];
        var dataRange = range(data);
        expect(dataRange.min).to.equal(10);
        expect(dataRange.max).to.equal(60);
    });
    it("will convert an object of string:number to an array", function () {
        var obj = {
            "one": 1,
            "two": 2,
            "three": 3
        };
        var data = objectToArray(obj);
        expect(data.length).to.equal(3);
        expect(data).to.contain(1);
        expect(data).to.contain(2);
        expect(data).to.contain(3);
    });
    it("will round a value correctly to 0 decimal places", function () {
        var rounded = round(123.456);
        expect(rounded).to.equal(123);
    });
    it("will round a value correctly to 1 decimal places", function () {
        var rounded = round(123.456, 1);
        expect(rounded).to.equal(123.5);
    });
    it("will round a value correctly to 2 decimal places", function () {
        var rounded = round(123.456, 2);
        expect(rounded).to.equal(123.46);
    });
});
//# sourceMappingURL=common.js.map