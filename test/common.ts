import chai = require("chai");
var expect = chai.expect;

import max = require("../src/api/common/max");
import min = require("../src/api/common/min");
import range = require("../src/api/common/range");
import sum = require("../src/api/common/sum");
import objectToArray = require("../src/api/common/objectToArray");
import round = require("../src/api/common/round");

describe("Common module unit tests", () => {

	it("will throw when passed an invalid object", () => {
		expect(objectToArray.bind(objectToArray, "bad type")).to.throw("TypeException: Must pass either an array or object of key-value pairs");
	});

	it("will find the maximum number in a dataset", () => {
		var data = [1,2,3,4,5,6,7];		
		expect(max(data)).to.equal(7);
	});
	
	it("will find the minimum number in a dataset", () => {
		var data = [1,2,3,4,5,6,7];		
		expect(min(data)).to.equal(1);
	});
	
	it("will find the range (min and max) in a dataset", () => {
		var data = [10, 20, 30, 40, 50, 60];
		var dataRange = range(data);
		expect(dataRange.minimum).to.equal(10);
		expect(dataRange.maximum).to.equal(60);
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
	
	it("will calculate the sum of a dataset", () => {
		var data = [1,2,3,4,5,6,7,8,9,10];		
		var total = sum(data);
		expect(total).to.equal(55);
	});
});