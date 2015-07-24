import chai = require("chai");
import errors = require("../src/errors");
var expect = chai.expect;
import common = require("../src/common/api");

describe("Common module unit tests", () => {

	it("isWhole: will throw if passed a non-number", () => {
		expect(common.isWhole.bind(common.isWhole, "not a number")).to.throw(errors.MustBeNumber);
	});

	it("curry: will curry a simple 2 argument function", () => {
		var add = (left, right) => left + right;
		var addOne = common.curry(add, 1);
		expect(addOne(2)).to.equal(3);
	});
	
	it("isEven: will correctly determine if a value is even", () => {
		expect(common.isEven(1)).to.be.false;
		expect(common.isEven(2)).to.be.true;
		expect(common.isEven(0)).to.be.true;
	});
	
	it("isEven: will throw when invalid input is passed to isEven", () => {
		expect(common.isEven.bind(common.isEven, "not a number")).to.throw(errors.MustBeNumber);
	});

	it("max: will find the maximum number in a dataset", () => {
		expect(common.max([1, 2, 3, 4, 5, 6, 7])).to.equal(7);
		expect(common.max([-1, -2, -3, -4, -5, -6, -7])).to.equal(-1);
	});

	it("min: will find the minimum number in a dataset", () => {
		expect(common.min([1, 2, 3, 4, 5, 6, 7])).to.equal(1);
		expect(common.min([-3, 0, 3])).to.equal(-3);
	});

	it("range: will find the range (min and max) in a dataset", () => {
		var dataRange = common.range([10, 20, 30, 40, 50, 60]);
		expect(dataRange.minimum).to.equal(10);
		expect(dataRange.maximum).to.equal(60);
	});

	it("toArray: will throw when invalid input", () => {
		expect(common.toArray.bind(common.toArray, "bad type")).to.throw(errors.MustBeArrayOrObject);
		expect(common.toArray.bind(common.toArray, ["word", 1, 2, 3, 4])).to.throw(errors.AllMustBeNumbers);
	});
	
	it("toArray: will convert an object of string:number to an array", () => {
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

	it("round: will round a value correctly to 0 decimal places", () => {
		var rounded = common.round(123.456);
		expect(rounded).to.equal(123);
	});

	it("round: will round a value correctly to 1 decimal places", () => {
		var rounded = common.round(123.456, 1);
		expect(rounded).to.equal(123.5);
	});

	it("round: will round a value correctly to 2 decimal places", () => {
		var rounded = common.round(123.456, 2);
		expect(rounded).to.equal(123.46);
	});

	it("sum: will calculate the sum of a dataset", () => {
		var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		var total = common.sum(data);
		expect(total).to.equal(55);
	});
	
	it("sortAsc: will sort an unordered array ascending without mutating the original array", () => {
		var data = [2,1,4,3];
		var sorted = common.sortAsc(data);
		arrayIsEqual(data, [2,1,4,3]);
		arrayIsEqual(sorted, [1,2,3,4]);
	});
	
	it("sortDesc: will sort an unordered array descending without mutating the original array", () => {
		var data = [2,1,4,3];
		var sorted = common.sortDesc(data);
		arrayIsEqual(data, [2,1,4,3]);
		arrayIsEqual(sorted, [4,3,2,1]);
	});
});

function arrayIsEqual(left: any[], right: any[]) {
	expect(Array.isArray(left)).to.equal(Array.isArray(right));
	expect(left.length).to.equal(right.length);
	for (let x = 0; x < left.length;x++) {
		expect(left[x]).to.equal(right[x]);
	}
}