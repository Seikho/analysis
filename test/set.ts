import set = require("../src/set/api");
import helpers = require("./helpers");
import chai = require("chai");
var expect = chai.expect;

describe("Set module tests", () => {
	var left = [1, 3, 5, 7, 1, 3, 5];
	var right = [2, 4, 6, 8, 2, 4, 6];
	it("distinct: will return an array's distinct values", () => {
		helpers.arrayIsEqual(set.distinct(left), [1, 3, 5, 7]);
		helpers.arrayIsEqual(set.distinct(right), [2, 4, 6, 8]);
	});
});

