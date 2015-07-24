var chiSquare = require("../src/distribution/chiSquare");
var chai = require("chai");
var errors = require("../src/errors");
var expect = chai.expect;
describe("Distribution unit tests", function () {
    it("chiSquare: will correctly calculate the chi squared", function () {
        expect(chiSquare(10, 20)).to.equal(5);
        expect(chiSquare(20, 40)).to.equal(10);
    });
    it("chiSquare: will throw if either value is not a number", function () {
        var fn = function (v1, v2) { return chiSquare.bind(chiSquare, v1, v2); };
        expect(fn("string", 1)).to.throw(errors.AllMustBeNumbers);
        expect(fn(1, "string")).to.throw(errors.AllMustBeNumbers);
        expect(fn("string", "string")).to.throw(errors.AllMustBeNumbers);
        expect(fn(NaN, NaN)).to.throw(errors.AllMustBeNumbers);
    });
});
//# sourceMappingURL=distribution.js.map