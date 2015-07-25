var frequency = require("../src/frequency/api");
var errors = require("../src/errors");
var chai = require("chai");
var expect = chai.expect;
describe("Frequency tests", function () {
    var freqData = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
    var histData = [5, 6, 15, 16, 25, 26, 35, 36, 45, 46];
    it("table: will correctly create a frequency table", function () {
        var freqTable = frequency.table(freqData);
        expect(typeof freqTable).to.equal("object");
        expect(freqTable[1]).to.equal(1);
        expect(freqTable[2]).to.equal(2);
        expect(freqTable[3]).to.equal(3);
        expect(freqTable[4]).to.equal(4);
    });
    it("histogram: will correctly throw if provided too many options", function () {
        var opts = {
            binSize: 1,
            binCount: 1
        };
        expect(frequency.histogram.bind(frequency.histogram, histData, opts)).to.throw(errors.HistogramOneOption);
    });
    it("histogram: will correctly create a histogram with no options provided", function () {
        var histTable = frequency.histogram(histData);
        expect(typeof histTable).to.equal("object");
        expect(histTable[1]).to.exist;
        expect(histTable[10]).to.exist;
    });
    it("histogram: will correctly create a histogram with min and max options provided", function () {
        var binOptions = {
            minimum: 1,
            maximum: 25,
            binSize: 5
        };
        var histTable = frequency.histogram([1, 6, 6, 11, 11, 11, 16, 16, 16, 16, 21, 21, 21, 21, 21], binOptions);
        expect(histTable[1]).to.equal(1);
        expect(histTable[2]).to.equal(2);
        expect(histTable[3]).to.equal(3);
        expect(histTable[4]).to.equal(4);
        expect(histTable[5]).to.equal(5);
    });
    it("will correctly generate relative frequency tables", function () {
        var relTable = frequency.relative([1, 2, 3, 4, 5]);
        var expected = [0.2, 0.2, 0.2, 0.2, 0.2];
    });
});
//# sourceMappingURL=frequency.js.map