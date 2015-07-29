import dist = require("../src/distribution/api");
import round = require("../src/common/round");
import chai = require("chai");
import errors = require("../src/errors");
var expect = chai.expect;

// Lazy shortcut
var binCoeff = dist.binomialCoefficient;

describe("Distribution unit tests", () => {

	it("chiSquare: will correctly calculate the chi squared", () => {
		expect(dist.chiSquare(10, 20)).to.equal(5);
		expect(dist.chiSquare(20, 40)).to.equal(10);
	});

	it("chiSquare: will throw if either value is not a number", () => {
		var fn = (v1, v2) => dist.chiSquare.bind(dist.chiSquare, v1, v2);
		expect(fn("string", 1)).to.throw(errors.AllMustBeNumbers);
		expect(fn(1, "string")).to.throw(errors.AllMustBeNumbers);
		expect(fn("string", "string")).to.throw(errors.AllMustBeNumbers);
		expect(fn(NaN, NaN)).to.throw(errors.AllMustBeNumbers);
	});

	it("poisson: will correctly calculate the poisson distribution", () => {
		expect(round(dist.poisson(3, 2), 2)).to.equal(0.18);
	});

	it("binomialCoefficient: will throw when either argument is not a number", () => {
		expect(binCoeff.bind(binCoeff, <any>"string", 5)).to.throw(errors.MustBeNumber);
		expect(binCoeff.bind(binCoeff, 5, <any>"string")).to.throw(errors.MustBeNumber);
	});

	it("binomialCoefficient: will throw when either argument is not a whole number", () => {
		expect(binCoeff.bind(binCoeff, 4.5, 5)).to.throw(errors.MustBeWhole);
		expect(binCoeff.bind(binCoeff, 5, 4.5)).to.throw(errors.MustBeWhole);
	});

	it("binomialCoefficient: will throw when 'events' argument is below 1", () => {
		expect(binCoeff.bind(binCoeff, 0, 5)).to.throw(errors.EventsMustBeAtLeastOne);
		expect(binCoeff.bind(binCoeff, -1, 5)).to.throw(errors.EventsMustBeAtLeastOne);
	});

	it("binomialCoefficient: will throw when 'x' argument is below 0", () => {
		expect(binCoeff.bind(binCoeff, 5, -1)).to.throw(errors.RandomVariableMustBeAtLeastZero);
	});
});