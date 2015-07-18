var mean = require("../src/api/descriptive/mean");
var mode = require("../src/api/descriptive/mode");
var median = require("../src/api/descriptive/median");
var chai = require("chai");
var expect = chai.expect;
describe("Descriptive module tests", function () {
    it("will find the mean for a dataset", function () {
        var data = [2, 3, 2, 3, 2, 3]; // 15	
        expect(mean(data)).to.equal(2.5);
    });
    it("will find the mode for a unimodal dataset", function () {
        var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5];
        var modes = mode(data);
        expect(modes.length).to.equal(1);
        expect(modes[0]).to.equal(5);
    });
    it("will find the modes for a bimodal dataset", function () {
        var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6];
        var modes = mode(data);
        expect(modes.length).to.equal(2);
        expect(modes).to.contain(5);
        expect(modes).to.contain(6);
    });
    it("will find the modes for a multimodal (3+) dataset", function () {
        var data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7];
        var modes = mode(data);
        expect(modes.length).to.equal(3);
        expect(modes).to.contain(5);
        expect(modes).to.contain(6);
        expect(modes).to.contain(7);
    });
    it("will find the median for a dataset with 1 value", function () {
        var data = [5];
        expect(median(data)).to.equal(5);
    });
    it("will find the median for a dataset with 2 values", function () {
        var data = [5, 6];
        expect(median(data)).to.equal(5.5);
    });
    it("will find the median for a dataset with 3 values", function () {
        var data = [5, 10, 15];
        expect(median(data)).to.equal(10);
    });
});
//# sourceMappingURL=descriptive.js.map