import mean = require("../src/api/descriptive/mean");
import mode = require("../src/api/descriptive/mode");
//import median = require("../src/api/descriptive/median");
import chai = require("chai");
var expect = chai.expect;

describe("Descriptive module tests", () => {
	
	it("will find the mean for a dataset", () => {
		var data = [2,3,2,3,2,3]; // 15	
		expect(mean(data)).to.equal(2.5);
	});
	
});

