import chai = require("chai");
var expect = chai.expect;

export function arrayIsEqual(left: any[], right: any[]) {
	expect(Array.isArray(left)).to.equal(Array.isArray(right));
	expect(left.length).to.equal(right.length);
	for (let x = 0; x < left.length; x++) {
		expect(left[x]).to.equal(right[x]);
	}
}