import mean = require("../src/descriptive/mean");
import mode = require("../src/descriptive/mode");
import median = require("../src/descriptive/median");
import variance = require("../src/descriptive/variance");
import stdDev = require("../src/descriptive/standardDeviation");
import round = require("../src/common/round");
import chai = require("chai");
var expect = chai.expect;

describe("Descriptive module tests", () => {

	it("will find the mean for a dataset", () => {
		var data = [2, 3, 2, 3, 2, 3]; // 15	
		expect(mean(data)).to.equal(2.5);
	});

	it("will find the mode for a unimodal dataset", () => {
		var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];

		var modes = mode(data);
		expect(modes.length).to.equal(1);
		expect(modes[0]).to.equal(5);
	});

	it("will find the modes for a bimodal dataset", () => {
		var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6];
		
		var modes = mode(data);
		expect(modes.length).to.equal(2);
		expect(modes).to.contain(5);
		expect(modes).to.contain(6);
	});
	
	it("will find the modes for a multimodal (3+) dataset", () => {
		var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7];
		
		var modes = mode(data);
		expect(modes.length).to.equal(3);
		expect(modes).to.contain(5);
		expect(modes).to.contain(6);
		expect(modes).to.contain(7);
	});
	
	it("will find the median for a dataset with 1 value", () => {
		var data = [5];
		expect(median(data)).to.equal(5);
	});
	
	it("will find the median for a dataset with 2 values", () => {
		var data = [5,6];
		expect(median(data)).to.equal(5.5);
	});
	
	it("will find the median for a dataset with 3 values", () => {
		var data = [5,10,15];
		expect(median(data)).to.equal(10);
	});
	
	it("will calculate the variance of a population correctly", () => {
		expect(variance([1,2,3,4,5,6,7,8,9,10])).to.be.equal(8.25);
	});
	
	it("will calculate the standard deviation", () => {
		var theStdDev = round(stdDev([1,2,3,4,5,6,7,8,9,10]), 2);
		expect(theStdDev).to.equal(2.87);
	});
});

