var common = require("./api");
function sort(data) {
    var dataset = common.toArray(data);
    return dataset.sort(function (l, r) { return r - l; });
}
module.exports = sort;
//# sourceMappingURL=sortDesc.js.map