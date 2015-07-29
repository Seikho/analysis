var dist = require("../src/distribution/api");
var round = require("../src/common/round");
var chai = require("chai");
var errors = require("../src/errors");
var expect = chai.expect;
// Lazy shortcut
var binProb = dist.binomialProbability;
describe("Distribution unit tests", function () {
    it("chiSquare: will correctly calculate the chi squared", function () {
        expect(dist.chiSquare(10, 20)).to.equal(5);
        expect(dist.chiSquare(20, 40)).to.equal(10);
    });
    it("chiSquare: will throw if either value is not a number", function () {
        var fn = function (v1, v2) { return dist.chiSquare.bind(dist.chiSquare, v1, v2); };
        expect(fn("string", 1)).to.throw(errors.AllMustBeNumbers);
        expect(fn(1, "string")).to.throw(errors.AllMustBeNumbers);
        expect(fn("string", "string")).to.throw(errors.AllMustBeNumbers);
        expect(fn(NaN, NaN)).to.throw(errors.AllMustBeNumbers);
    });
    it("poisson: will correctly calculate the poisson distribution", function () {
        expect(round(dist.poisson(3, 2), 2)).to.equal(0.18);
    });
    it("binomialProbability:");
});
//# sourceMappingURL=distribution.js.map