import chai = require("chai");
import errors = require("../src/errors");
import * as helper from "./helpers";
var expect = chai.expect;
import common = require("../src/common/api");

describe("(Common) Functional module unit tests", () => {
	
	it("curry: will curry a 2 argument function", () => {
		var pow = common.curry(Math.pow, 2);
		expect(pow(2)).to.equal(4);
		expect(pow(3)).to.equal(8);
	});
	
	it("curry: will curry a simple 2 argument using a gap", () => {
		var squared = common.curry(Math.pow, NaN, 2);
		expect(squared(5)).to.equal(25);
		expect(squared(6)).to.equal(36);
	});
	
	it("curry: will correctly curry 3 argument functions", () => {
		var fn = (left, mid, right) => (left + mid) * right;
		
		var first = common.curry(fn, 2, NaN, 2);
		expect(first(2)).to.equal(8);
		expect(first(3)).to.equal(10);
		
		var second = common.curry(fn, NaN, NaN, 2);
		expect(second(2, 2)).to.equal(8);
		expect(second(2)(3)).to.equal(10);
		expect(second(NaN, 4)(2)).to.equal(12);
		
	});
	
	it("compose: will compose functions without throwing", () => {
		expect(common.compose.bind(common.compose, helper.halve, helper.double))
			.to.not.throw;
	});
	
});