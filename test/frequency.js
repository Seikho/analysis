var chai = require("chai");
var expect = chai.expect;
var table = require("../src/api/frequency/table");
var histogram = require("../src/api/frequency/histogram");
describe("Frequency tests", function () {
    var freqData = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    var histData = [5, 6, 15, 16, 25, 26, 35, 36, 45, 46];
    it("will correctly create a frequency table", function () {
        var freqTable = table(freqData);
        expect(typeof freqTable).to.equal("object");
        expect(freqTable[1]).to.equal(1);
        expect(freqTable[2]).to.equal(2);
        expect(freqTable[3]).to.equal(3);
        expect(freqTable[4]).to.equal(4);
    });
    it("will correctly create a histogram with both options provided", function () {
        var binOptions = {
            binCount: 5,
            binSize: 10
        };
        var histTable = histogram(histData, binOptions);
        expect(histTable[1]).to.equal(2);
        expect(histTable[2]).to.equal(2);
        expect(histTable[3]).to.equal(2);
        expect(histTable[4]).to.equal(2);
        expect(histTable[5]).to.equal(2);
    });
    it("will correct create a histogram with no options provided", function () {
        var histTable = histogram(histData);
        expect(typeof histTable).to.equal("object");
        expect(histTable[1]).to.exist;
        expect(histTable[10]).to.exist;
    });
});
//# sourceMappingURL=frequency.js.map