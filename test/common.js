var max = require("../src/api/common/max");
var chai = require("chai");
var expect = chai.expect;
describe("Common module unit tests", function () {
    it("will find the maximum number in a dataset", function () {
        var data = [1, 2, 3, 4, 5, 6, 7];
        expect(max(data)).to.equal(7);
    });
});
//# sourceMappingURL=common.js.map