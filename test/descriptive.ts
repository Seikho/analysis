import mean = require("../src/api/descriptive/mean");
import mode = require("../src/api/descriptive/mode");
//import median = require("../src/api/descriptive/median");
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
});

