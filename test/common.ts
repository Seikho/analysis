import max = require("../src/api/common/max");
import objectToArray = require("../src/api/common/objectToArray"); 
import chai = require("chai");
var expect = chai.expect;

describe("Common module unit tests", () => {

	it("will find the maximum number in a dataset", () => {
		var data = [1,2,3,4,5,6,7];		
		expect(max(data)).to.equal(7);
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

});