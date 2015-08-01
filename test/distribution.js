var dist = require("../src/distribution/api");
var round = require("../src/common/round");
var chai = require("chai");
var errors = require("../src/errors");
var expect = chai.expect;
// Lazy shortcut
var binCoeff = dist.binomialCoefficient;
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
    it("binomialCoefficient: will throw when either argument is not a number", function () {
        expect(binCoeff.bind(binCoeff, "string", 5)).to.throw(errors.MustBeNumber);
        expect(binCoeff.bind(binCoeff, 5, "string")).to.throw(errors.MustBeNumber);
    });
    it("binomialCoefficient: will throw when either argument is not a whole number", function () {
        expect(binCoeff.bind(binCoeff, 4.5, 5)).to.throw(errors.MustBeWhole);
        expect(binCoeff.bind(binCoeff, 5, 4.5)).to.throw(errors.MustBeWhole);
    });
    it("binomialCoefficient: will throw when 'events' argument is below 1", function () {
        expect(binCoeff.bind(binCoeff, 0, 5)).to.throw(errors.EventsMustBeAtLeastOne);
        expect(binCoeff.bind(binCoeff, -1, 5)).to.throw(errors.EventsMustBeAtLeastOne);
    });
    it("binomialCoefficient: will throw when 'x' argument is below 0", function () {
        expect(binCoeff.bind(binCoeff, 5, -1)).to.throw(errors.RandomVariableMustBeAtLeastZero);
    });
    it("binomialCoefficient: will correctly evaluate", function () {
        expect(binCoeff(5, 0)).to.equal(1 / 32);
        expect(binCoeff(5, 1)).to.equal(5 / 32);
        expect(binCoeff(5, 2)).to.equal(10 / 32);
        expect(binCoeff(5, 3)).to.equal(10 / 32);
        expect(binCoeff(5, 4)).to.equal(5 / 32);
        expect(binCoeff(5, 5)).to.equal(1 / 32);
    });
    it("binomial: will throw provided a non-number", function () {
        expect(dist.binomial.bind(dist.binomial, "string")).to.throw(errors.MustBeNumber);
    });
    it("binomial: will throw provided a non whole number", function () {
        expect(dist.binomial.bind(dist.binomial, 5.5)).to.throw(errors.MustBeWhole);
    });
    it("binomial: will throw provided a number below 1", function () {
        expect(dist.binomial.bind(dist.binomial, 0)).to.throw(errors.MustBeAtLeastOne);
    });
    it("binomial: will provide a correct binomial distribution table", function () {
        var table = dist.binomial(5);
        expect(table[0]).to.equal(1 / 32);
        expect(table[1]).to.equal(5 / 32);
        expect(table[2]).to.equal(10 / 32);
        expect(table[3]).to.equal(10 / 32);
        expect(table[4]).to.equal(5 / 32);
        expect(table[5]).to.equal(1 / 32);
    });
});
//# sourceMappingURL=distribution.js.map