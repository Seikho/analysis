import common = require("../src/common/api");
import Analysis = require("analysis");
import chai = require("chai");
var expect = chai.expect;

export function arrayIsEqual(left: any[], right: any[]) {
	var isEqual = (value, index) => expect(value).to.equal(right[index]);
	
	describe("datasets are both Array", () => {
		expect(Array.isArray(left)).to.equal(Array.isArray(right));
	});
	
	describe("datasets are the same length", () => {
		expect(left.length).to.equal(right.length);
	});

	describe("dataset contents are equivalent", () => {
		left.forEach(isEqual);
	});
}

export function datasetIsEquiv(left: Analysis.Dataset, right: Analysis.Dataset) {
	var rightHasKey = key => right[key] != null;
	var rightKeyIsSame = key => left[key] === right[key];

	describe("datasets contain the same keys", () => {
		var isTrue = Object.keys(left).every(rightHasKey);
		expect(isTrue).to.be.true;
	});

	describe("datasets key-value pairs are equivalent", () => {
		var isTrue = Object.keys(left).every(rightKeyIsSame);
		expect(isTrue).to.be.true;
	});
}