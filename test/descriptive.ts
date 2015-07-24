import descriptive = require("../src/descriptive/api");
import round = require("../src/common/round");
import chai = require("chai");
var expect = chai.expect;

describe("Descriptive module tests", () => {

	it("mean: will find the mean for a dataset", () => {
		var data = [2, 3, 2, 3, 2, 3]; // 15	
		expect(descriptive.mean(data)).to.equal(2.5);
	});

	it("mode: will find the mode for a unimodal dataset", () => {
		var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

		var modes = descriptive.mode(data);
		expect(modes.length).to.equal(1);
		expect(modes[0]).to.equal(5);
	});

	it("mode: will find the modes for a bimodal dataset", () => {
		var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6];

		var modes = descriptive.mode(data);
		expect(modes.length).to.equal(2);
		expect(modes).to.contain(5);
		expect(modes).to.contain(6);
	});

	it("mode: will find the modes for a multimodal (3+) dataset", () => {
		var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7];

		var modes = descriptive.mode(data);
		expect(modes.length).to.equal(3);
		expect(modes).to.contain(5);
		expect(modes).to.contain(6);
		expect(modes).to.contain(7);
	});

	it("median: will find the median for a dataset with 1 value", () => {
		var data = [5];
		expect(descriptive.median(data)).to.equal(5);
	});

	it("median: will find the median for a dataset with 2 values", () => {
		var data = [5, 6];
		expect(descriptive.median(data)).to.equal(5.5);
	});

	it("median: median: will find the median for a dataset with 3 values", () => {
		var data = [5, 10, 15];
		expect(descriptive.median(data)).to.equal(10);
	});

	it("variance: will calculate the variance of a population correctly", () => {
		expect(descriptive.variance([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
			.to.be.equal(8.25);
	});

	it("stdDev: will calculate the standard deviation", () => {
		var theStdDev = round(descriptive.stdDev([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 2);
		expect(theStdDev).to.equal(2.87);
	});

	it("zScore: will calculate the z-score correctly", () => {
		expect(descriptive.zScore([85, 90, 95, 100, 105, 110, 115], 110)).to.equal(1);
	});

	it("firstQuartile: will calculate the first quartile", () => {
		expect(descriptive.firstQuartile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
			.to.equal(3);
		expect(descriptive.firstQuartile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]))
			.to.equal(3);
	});

	it("firstQuartile: will throw if less than 4 values are supplied to first quartile", () => {
		expect(descriptive.firstQuartile.bind(descriptive.firstQuartile, [1, 2, 3]))
			.to.throw("Not enough values supplied");
	});
});

