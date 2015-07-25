var chai = require("chai");
var expect = chai.expect;
function arrayIsEqual(left, right) {
    expect(Array.isArray(left)).to.equal(Array.isArray(right));
    expect(left.length).to.equal(right.length);
    for (var x = 0; x < left.length; x++) {
        expect(left[x]).to.equal(right[x]);
    }
}
exports.arrayIsEqual = arrayIsEqual;
//# sourceMappingURL=helpers.js.map