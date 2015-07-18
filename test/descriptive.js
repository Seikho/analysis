var mean = require("../src/api/descriptive/mean");
//import median = require("../src/api/descriptive/median");
var chai = require("chai");
var expect = chai.expect;
describe("Descriptive module tests", function () {
    it("will find the mean for a dataset", function () {
        var data = [2, 3, 2, 3, 2, 3]; // 15	
        expect(mean(data)).to.equal(2.5);
    });
});
//# sourceMappingURL=descriptive.js.map