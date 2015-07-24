var chiSquare = require("../src/distribution/chiSquare");
var chai = require("chai");
var expect = chai.expect;
describe("Distribution unit tests", function () {
    it("chiSquare: will correctly calculate the chi squared", function () {
        expect(chiSquare(10, 20)).to.equal(5);
        expect(chiSquare(20, 40)).to.equal(10);
    });
});
//# sourceMappingURL=distribution.js.map