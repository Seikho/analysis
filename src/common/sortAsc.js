var toArray = require("./toArray");
function sort(data) {
    var dataset = toArray(data);
    return dataset.sort(function (l, r) { return l - r; });
}
module.exports = sort;
//# sourceMappingURL=sortAsc.js.map