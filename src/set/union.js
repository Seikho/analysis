var distinct = require("./distinct");
function union(left, right) {
    var allValues = distinct(left)
        .concat(distinct(right));
    return distinct(allValues);
}
module.exports = union;
//# sourceMappingURL=union.js.map