var set = require("../src/set/api");
var helpers = require("./helpers");
var chai = require("chai");
var expect = chai.expect;
describe("Set module tests", function () {
    var left = [1, 3, 5, 7, 1, 3, 5];
    var right = [2, 4, 6, 8, 2, 4, 6];
    it("distinct: will return an array's distinct values", function () {
        helpers.arrayIsEqual(set.distinct(left), [1, 3, 5, 7]);
        helpers.arrayIsEqual(set.distinct(right), [2, 4, 6, 8]);
    });
});
//# sourceMappingURL=set.js.map