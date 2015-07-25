import chiSquare = require("../src/distribution/chiSquare");
import round = require("../src/common/round");
import chai = require("chai");
import errors = require("../src/errors");
var expect = chai.expect;

describe("Distribution unit tests", () => {
	
	it("chiSquare: will correctly calculate the chi squared", () => {
		expect(chiSquare(10,20)).to.equal(5);
		expect(chiSquare(20,40)).to.equal(10);
	});
	
	it("chiSquare: will throw if either value is not a number", () => {
		var fn = (v1, v2) => chiSquare.bind(chiSquare, v1, v2);
		expect(fn("string", 1)).to.throw(errors.AllMustBeNumbers);
		expect(fn(1, "string")).to.throw(errors.AllMustBeNumbers);
		expect(fn("string", "string")).to.throw(errors.AllMustBeNumbers);
		expect(fn(NaN, NaN)).to.throw(errors.AllMustBeNumbers);
	});
	
});