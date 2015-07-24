var common = require("./api");
function sort(data) {
    var dataset = common.toArray(data);
    return dataset.sort(function (l, r) { return l - r; });
}
module.exports = sort;
//# sourceMappingURL=sortAsc.js.map