import max = require("../src/api/common/max");
import min = require("../src/api/common/min");
import range = require("../src/api/common/range");
import objectToArray = require("../src/api/common/objectToArray");
import round = require("../src/api/common/round");
import chai = require("chai");
var expect = chai.expect;

describe("Common module unit tests", () => {

	it("will find the maximum number in a dataset", () => {
		var data = [1,2,3,4,5,6,7];		
		expect(max(data)).to.equal(7);
	});
	
	it("will find the minimum number in a dataset", () => {
		var data = [1,2,3,4,5,6,7];		
		expect(min(data)).to.equal(1);
	});
	
	it("will convert an object of string:number to an array", () => {
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
	
	it("will round a value correctly to 0 decimal places", () => {
		var rounded = round(123.456);
		expect(rounded).to.equal(123);
	});
	
	it("will round a value correctly to 1 decimal places", () => {
		var rounded = round(123.456, 1);
		expect(rounded).to.equal(123.5);
	});
	
	it("will round a value correctly to 2 decimal places", () => {
		var rounded = round(123.456, 2);
		expect(rounded).to.equal(123.46);
	});
});