import chai = require("chai");
var expect = chai.expect;

import table = require("../src/frequency/table");
import histogram = require("../src/frequency/histogram");

describe("Frequency tests", () => {
	var freqData = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
	var histData = [5, 6, 15, 16, 25, 26, 35, 36, 45, 46];

	it("table: will correctly create a frequency table", () => {
		let freqTable = table(freqData);

		expect(typeof freqTable).to.equal("object");
		expect(freqTable[1]).to.equal(1);
		expect(freqTable[2]).to.equal(2);
		expect(freqTable[3]).to.equal(3);
		expect(freqTable[4]).to.equal(4);
	});

	it("histogram: will correctly create a histogram with count and size options provided", () => {

		let binOptions = {
			binCount: 5,
			binSize: 10
		};

		let histTable = histogram(histData, binOptions);
		console.log(histTable);

		expect(histTable[1]).to.equal(2);
		expect(histTable[2]).to.equal(2);
		expect(histTable[3]).to.equal(2);
		expect(histTable[4]).to.equal(2);
		expect(histTable[5]).to.equal(2);
	});

	it("histogram: will correctly create a histogram with no options provided", () => {
		let histTable = histogram(histData);

		expect(typeof histTable).to.equal("object");
		expect(histTable[1]).to.exist;
		expect(histTable[10]).to.exist;
	});

	it("histogram: will correctly create a histogram with min and max options provided", () => {
		let binOptions = {
			minimum: 1,
			maximum: 25,
			binSize: 5
		};
		let histTable = histogram([1, 6, 6, 11, 11, 11, 16, 16, 16, 16, 21, 21, 21, 21, 21], binOptions);
		expect(histTable[1]).to.equal(1);
		expect(histTable[2]).to.equal(2);
		expect(histTable[3]).to.equal(3);
		expect(histTable[4]).to.equal(4);
		expect(histTable[5]).to.equal(5);
	});

});