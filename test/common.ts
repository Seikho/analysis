import max = require("../src/api/common/max"); 
import chai = require("chai");
var expect = chai.expect;

describe("Common module unit tests", () => {

	it("will find the maximum number in a dataset", () => {
		var data = [1,2,3,4,5,6,7];		
		expect(max(data)).to.equal(7);
	});

});