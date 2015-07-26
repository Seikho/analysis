var set = require("../src/set/api");
var common = require("../src/common/api");
var helpers = require("./helpers");
var chai = require("chai");
var expect = chai.expect;
describe("Set module tests", function () {
    var left = [1, 3, 5, 7, 1, 3, 5];
    var right = [2, 4, 6, 8, 2, 4, 6];
    var interLeft = [1, 2, 3, 4, 5];
    var interRight = [3, 4, 5, 6, 7];
    it("distinct: will return an array's distinct values", function () {
        helpers.arrayIsEqual(set.distinct(left), [1, 3, 5, 7]);
        helpers.arrayIsEqual(set.distinct(right), [2, 4, 6, 8]);
    });
    it("intersect: will return the intersect of two arrays", function () {
        helpers.arrayIsEqual(set.intersect(left, right), []);
        helpers.arrayIsEqual(set.intersect(interLeft, interRight), [3, 4, 5]);
    });
    it("union: will return the union of two arrays", function () {
        var union = common.compose(common.sortAsc, set.union);
        helpers.arrayIsEqual(union(left, right), [1, 2, 3, 4, 5, 6, 7, 8]);
        helpers.arrayIsEqual(union(interLeft, interRight), [1, 2, 3, 4, 5, 6, 7]);
    });
});
//# sourceMappingURL=set.js.map