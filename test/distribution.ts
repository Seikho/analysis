import chiSquare = require("../src/distribution/chiSquare");
import round = require("../src/common/round");
import chai = require("chai");
var expect = chai.expect;

describe("Distribution unit tests", () => {
	
	it("chiSquare: will correctly calculate the chi squared", () => {
		expect(chiSquare(10,20)).to.equal(5);
		expect(chiSquare(20,40)).to.equal(10);
	});
	
});